const {Router} = require('express')
const Item = require('../models/Item')
const router = Router()

router.get('/', async (req, res) => {
    try {
        const item = await Item.find()
        res.json(item)
    } catch (error) {
        console.log(error)
    }
})


module.exports = router
