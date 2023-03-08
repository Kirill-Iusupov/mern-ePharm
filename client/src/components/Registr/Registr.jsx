import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Registr = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })


    const handleChange = (e) => {
        setForm({
          ...form,
            [e.target.name]: e.target.value
        })
    }

    const registerHandler = async () => {
        try {
            await axios.post('/api/auth/register', {...form},
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
            <h3>Регистрация</h3>
            <form 
                className='form form-login '
                onSubmit={e => e.preventDefault()}
            >
                <div className="row">
                    <div className="input-field col s12">
                        <input 
                            type="email" 
                            name="email"
                            className='validate'
                            value={form.email}
                            onChange={handleChange}
                        />
                        <label htmlFor="email">E-Mail</label>
                    </div>
                    <div className="input-field col s12">
                        <input 
                            type="password" 
                            name="password"
                            className='validate'
                            value={form.password}
                            onChange={handleChange} 
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <button 
                        className='wawes-effect wawes-light btn btn blue'
                        onClick={registerHandler}
                    >
                        Регистрация
                    </button>
                    <Link to="/login" 
                        className="btn-outlined btn-reg">
                            Уже есть аккаунт
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Registr
