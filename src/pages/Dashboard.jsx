import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'

const Dashboard = () => {
    const { user, logout } = useContext(UserContext)

    const handleLogout = () => {
        logout();
    }

    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <div>
            <button onClick={handleRefresh}>Got to Dashboard</button>

            {user && (
                <>
                    <h1 style={{ textAlign: 'center' }}>Dashboard</h1>
                    <h1>Hi {user.name}</h1>
                    <button onClick={handleLogout}>Logout</button>
                </>
            )}

        </div>
    )
}

export default Dashboard