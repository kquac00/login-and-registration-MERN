import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Login/ Registration page</h1>
            <div>
                <Link to='/register'>Register</Link>
            </div>
            <Link to='/login'>Login</Link>
        </div>
    )
}

export default Home