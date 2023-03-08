import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Login = () => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })


    const handleChange = (e) => {
        setForm({
          ...form,
            [e.target.name]: e.target.value
        })
        console.log(form)
    }


    const loginHandler = async () => {
        try {
            await axios.post('/api/auth/login', {...form},
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => console.log(response))
        } catch (error) {
            console.alert(error)
        }
    }



    
    return (

        
        <div className='container'>
            <h3>Авторизация</h3>
            <form className='form form-login '>
                <div className="row">
                    <div className="input-field col s12">
                        <input 
                            type="email" 
                            name="email"
                            className='validate'
                            onChange={handleChange}
                            value={form.email}
                        />
                        <label htmlFor="email">E-Mail</label>
                    </div>
                    <div className="input-field col s12">
                        <input 
                            type="password" 
                            name="password"
                            className='validate'
                            onChange={handleChange}
                            value={form.password}
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <button 
                        className='wawes-effect wawes-light btn btn blue'
                        onClick={loginHandler}
                    >
                        Войти
                    </button>
                    <Link to="/register" 
                        className="btn-outlined btn-reg"
                    >
                        Создать аккаунт
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Login
