import { NavLink } from "react-router-dom";

export default function Error404() {
    return (
        <div className="flex flex-col items-center justify-center gap-16 px-6 lg:flex-row py-28 md:px-24 md:py-20 lg:py-32 lg:gap-28">
            <div className="w-full lg:w-1/2">
                <img className="hidden lg:block" src="https://i.ibb.co/v30JLYr/Group-192-2.png" alt="" />
                <img className="hidden md:block lg:hidden" src="https://i.ibb.co/c1ggfn2/Group-193.png" alt="" />
                <img className="md:hidden" src="https://i.ibb.co/8gTVH2Y/Group-198.png" alt="" />
            </div>
            <div className="w-full lg:w-1/2">
                <h1 className="py-4 mb-4 text-3xl font-extrabold text-gray-800 lg:text-4xl">Looks like you have found the doorway to the great nothing</h1>

                <NavLink to='/' className="w-full px-1 py-5 my-4 text-white bg-indigo-600 border rounded-md lg:w-auto sm:px-16 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Go back to Homepage</NavLink>
            </div>
        </div>
    );
}
