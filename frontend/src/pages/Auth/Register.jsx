import { Link } from "react-router-dom";
import FormRegister from "../../components/FormRegister";


export default function Register() {
    return (
        <main className="flex w-full">
            <div className="flex items-center justify-center flex-1 h-screen">
                <div className="w-full max-w-md px-4 space-y-8 text-gray-600 bg-white sm:px-0">
                    <div className="">
                        <h1 className='text-[48px] font-bold text-center'>Task Page</h1>
                        <div className="mt-5 space-y-2">
                            <h3 className="text-2xl font-bold text-gray-800 sm:text-3xl">Create account</h3>
                            <p className="">
                                Do you already have an account? <Link to='/' className="font-medium text-title hover:text-indigo-500">Log in</Link></p>
                        </div>
                    </div>
                    <FormRegister />
                    <p className='font-bold text-center '>Created by <a className='text-blue-400' href="https://github.com/AndersonFerrer" target='_blank' rel="noreferrer">@AndersonFerrer</a></p>
                </div>
            </div>
        </main>
    )
}
