import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export default function PublicRoutes() {
    const { auth } = useContext(AuthContext)
    if (auth) {
        return <Navigate to='/tasks' />
    }
    return <Outlet />

}
