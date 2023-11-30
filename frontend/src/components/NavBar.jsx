import { NavLink, useLocation } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import ModalCreateTask from "./ModalCreateTask";
import ModalCreateCategory from "./ModalCreateCategory";
import ModalDeleteCategory from "./ModalDeleteCategory";

export default function NavBar() {
    const { pathname } = useLocation()

    const { dataUser, logout, categoryFilter, setCategoryFilter } = useAuthContext();

    const categories = dataUser.categories;

    return (
        <header className='w-full z-10 bg-[#374151] fixed top-0 left-0 flex justify-around items-center h-[100px] '>
            <div className="flex items-center justify-center w-1/3 h-full gap-8 text-[28px] font-bold">
                <NavLink activeclassName='text-white  font-bold transition-all duration-300'
                    className={(pathname === '/tasks') ? 'text-white  font-bold transition-all duration-300' : ''} to='/tasks'>Tasks</NavLink>
                <NavLink activeclassName='text-white  font-bold transition-all duration-300' className={(pathname.includes('/tasks/archive')) ? 'text-white  font-bold transition-all duration-300' : ''} to='/tasks/archive' >Archive Tasks</NavLink>
            </div>
            <div className="relative flex w-2/3 h-full">
                <div className="flex items-center justify-center gap-2">
                    <label className="text-lg font-medium text-white">Filter:</label>
                    <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="bg-[#374151] border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100px] px-2 py-1  ">
                        <option value='none'>none</option>
                        {categories?.map((category, key) => (
                            <option value={category} key={key}>{category}</option>
                        ))}
                    </select>
                    <div className="flex gap-2 ml-4">
                        <ModalCreateCategory />
                        <ModalDeleteCategory />
                        <ModalCreateTask />
                    </div>
                    <div className="absolute flex items-center justify-center gap-2 right-8 ">
                        <h1 className="text-lg font-medium text-white">@{dataUser.username}</h1>
                        <button onClick={() => logout()} className="px-2 py-1 font-medium text-white bg-red-500 rounded-lg text-md">Logout</button>
                    </div>
                </div>

            </div>
        </header>
    )
}
