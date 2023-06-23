import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const navigate = useNavigate();
    const registerSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = data
        try {
            const { data } = await axios.post('https://login-registration-dd5518b37eb7.herokuapp.com/register', {
                name, email, password
            })
            if (data.error) {
                toast.error(data.error)
            } else {
                setData({})
                toast.success('Sign up successful, please Sign in')
                navigate('/login')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section>
            <h1>Register</h1>
            <Link to='/' >Home</Link>
            <form onSubmit={registerSubmit}>
                <label>Name: </label>
                <input type='text' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                <label>Email: </label>
                <input type='email' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                <label>Password: </label>
                <input type='password' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                <button type='submit'>Submit</button>
            </form>
            <div>
                <Link to='/login' >Login</Link>
            </div>

        </section>
    )
}

export default Register