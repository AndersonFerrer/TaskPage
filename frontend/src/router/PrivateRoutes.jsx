import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import NavBar from '../components/NavBar'

export default function PrivateRoutes() {
    const { auth } = useContext(AuthContext)

    if (!auth) {
        return <Navigate to="/" />;
    }
    return (
        <div className='w-full min-h-[calc(100vh-100px)]'>
            <NavBar />
            <main className="flex mt-[100px] w-full">
                <Outlet />
            </main>
        </div>
    )

}

