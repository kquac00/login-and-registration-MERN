import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext({})

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            axios.get('https://login-registration-dd5518b37eb7.herokuapp.com/profile')
                .then(({ data }) => {
                    setUser(data)
                })
                .catch(error => {
                    console.error('Error fetching user profile:', error)
                })
        }
    }, [user])

    const logout = () => {
        axios.get('https://login-registration-dd5518b37eb7.herokuapp.com/logout')
            .then(() => {
                setUser(null)
                navigate('/')
            })
            .catch(error => {
                console.error('Logout error:', error)
            })
    }

    return (
        <UserContext.Provider value={{ user, setUser, logout }}>
            {children}
        </UserContext.Provider >
    )
}