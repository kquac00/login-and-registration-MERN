import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const loginSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = data
        try {
            const { data } = await axios.post('/login', {
                email,
                password
            })
            if (data.error) {
                toast.error(data.error)
            } else {
                setData({});
                navigate('/dashboard')
            }
        } catch (error) {

        }
    }

    return (
        <section>
            <h1>Login</h1>
            <Link to='/' >Home</Link>
            <form onSubmit={loginSubmit}>
                <label>Email: </label>
                <input type='email' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                <label>Password: </label>
                <input type='password' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                <button type='submit'>Submit</button>
            </form>
            <div>
                <Link to='/register' >Register</Link>
            </div>

        </section>
    )
}

export default Login