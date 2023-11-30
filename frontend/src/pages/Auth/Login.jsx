import { Link } from 'react-router-dom'
import FormLogin from '../../components/FormLogin'

export default function Login() {

    return (
        <main className="flex w-full">
            <div className="flex items-center justify-center flex-1 h-screen">
                <div className="w-full max-w-md px-4 space-y-8 text-gray-600 bg-white sm:px-0">
                    <div className="">
                        <h1 className='text-[48px] font-bold text-center'>Task Page</h1>
                        <div className="mt-5 space-y-2">
                            <h3 className="text-2xl font-bold text-gray-800 sm:text-3xl">Inicia Sesión</h3>
                            <p className="">No tienes una cuenta? <Link to='/register' className="font-medium text-title hover:text-indigo-500">Crea una cuenta nueva</Link></p>
                        </div>
                    </div>
                    <FormLogin />
                    <p className='font-bold text-center '>Created by <a className='text-blue-400' href="https://github.com/AndersonFerrer" target='_blank' rel="noreferrer">@AndersonFerrer</a></p>
                </div>
            </div>
        </main>
    )
}
