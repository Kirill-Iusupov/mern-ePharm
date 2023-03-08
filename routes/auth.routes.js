const {Router} = require('express')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const config = require('config')
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const router = Router()

// /api/auth/register
router.post(
    '/register', 
    [
        check('email','Некорректный email').isEmail(),
        check('password', 'Минимальная длина пароля 6 символов')
            .isLength({min: 6})
    ],
    async (req, res) =>{
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                errors:errors.array(),
                message: "Некорректные данные при регистрации"
            })
        }


        const {email, password} = req.body

        const candidate = await User.findOne( {email} )

        if(candidate){
            return res.status(300).json({message: 'Такой пользователь существует'})
        }

        const hashedPass = await bcrypt.hash(password, 12)
        
        const user = new User({email, password: hashedPass})

        await user.save()

        res.status(201).json({message: "Пользователь создан"})

    } catch (error) {
        res.status(500).json({message: "Что-то не так"})
    }
})

// /api/auth/login
router.post(
    '/login', 
    [
        check('email','Введите корректный email').normalizeEmail().isEmail(),
        check('password', 'Неверный пароль').exists()
    ], 
    async (req, res) =>{
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                errors:errors.array(),
                message: "Некорректные данные при авторизации"
            })
        }

        const {email, password} = req.body

        const user = await User.findOne({email})

        if(!user){
            return res.status(400).json({message: "Пользователь не найден"})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch){
            return res.status(400).json({message:"Неверный пароль, попробуйте снова"})
        }

        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            { expiresIn: '6h' }
        )

        res.json({token, userId: user.id})

    } catch (error) {
        res.status(500).json({message: "Что-то не так"})
    }
    })

module.exports = router