/* eslint-disable react/prop-types */
import { createContext, useState } from "react"
import { authUser, registerUser } from "../services/apiService"

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState()
    const [error, setError] = useState('')
    const [dataUser, setDataUser] = useState()
    const [loading, setLoading] = useState(true)
    const [categoryFilter, setCategoryFilter] = useState('none')

    const login = async (user) => {
        setLoading(true)
        try {
            const data = await authUser(user)
            if (data) {
                setAuth(true);
                localStorage.setItem('user', JSON.stringify(user))
                setDataUser(data.user)
            } else {
                setError('Inicio Invalido')
            }
        } catch (error) {
            setError(error)
        }
        setLoading(false)
    }

    const checkAuth = async (user) => {
        setLoading(true)
        if (user) {
            try {
                const data = await authUser(user)
                if (data) {
                    setAuth(true)
                    setDataUser(data.user)
                } else {
                    setAuth(false)
                    setError('Inicio Invalido')
                }
            } catch (error) {
                setError(error)
                console.error(error)
            }
        }
        setLoading(false)
    }

    const logout = () => {
        localStorage.clear();
        setAuth(false);
        setDataUser(null)
        setCategoryFilter('none')
    };

    const register = async (user) => {
        setLoading(true)
        try {
            const data = await registerUser(user)
            if (data) {
                setAuth(true);
                localStorage.setItem('user', JSON.stringify(user))
                setDataUser(data)
            } else {
                setError('Registro Invalido')
            }
        } catch (error) {
            setError(error)
            console.error(error)
        }
        setLoading(false)
    }

    return (
        <AuthContext.Provider value={{ login, loading, register, error, checkAuth, auth, dataUser, logout, setCategoryFilter, categoryFilter }} >
            {children}
        </AuthContext.Provider>
    )
}
