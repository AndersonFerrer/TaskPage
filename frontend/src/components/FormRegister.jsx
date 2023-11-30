import { useState } from "react"
import { useAuthContext } from '../hooks/useAuthContext';

export default function FormRegister() {
    const { register } = useAuthContext();
    const [dates, setDates] = useState({
        username: '',
        email: '',
        password: ''
    })


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Actualiza el estado del formulario usando el spread operator para mantener los valores anteriores
        setDates({
            ...dates,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        await register(dates)
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-5"
        >
            <div>
                <label className="font-medium">
                    Username
                </label>
                <input
                    name="username"
                    value={dates.username}
                    onChange={handleInputChange}
                    type="text"
                    required
                    className="w-full px-3 py-2 mt-2 text-gray-500 bg-transparent border rounded-lg shadow-sm outline-none focus:border-primary"
                />
            </div>
            <div>
                <label className="font-medium">
                    Email
                </label>
                <input
                    name="email"
                    value={dates.email}
                    onChange={handleInputChange}
                    type="email"
                    required
                    className="w-full px-3 py-2 mt-2 text-gray-500 bg-transparent border rounded-lg shadow-sm outline-none focus:border-primary"
                />
            </div>
            <div>
                <label className="font-medium">
                    Contraseña
                </label>
                <input
                    value={dates.password}
                    onChange={handleInputChange}
                    name="password"
                    type="password"
                    required
                    className="w-full px-3 py-2 mt-2 text-gray-500 bg-transparent border rounded-lg shadow-sm outline-none focus:border-primary"
                />
            </div>
            <button
                type="submit"
                className="w-full px-4 py-2 font-medium text-white transition-all duration-500 rounded-lg font bold bg-gradient-to-r from-blue-300 to-blue-400 hover:to-blue-300 active:bg-blue-300"
            >
                Create account
            </button>
        </form>
    )
}
