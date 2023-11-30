import Modal from 'react-modal'
import { useState } from 'react';
import { createCategory } from '../services/apiService';
import { useAuthContext } from '../hooks/useAuthContext';

export default function ModalCreateCategory() {
    const [isActive, setIsActive] = useState(false);
    const { dataUser, login } = useAuthContext()
    const [newCategory, setNewCategory] = useState('')
    const createCategoryFetch = async () => {
        await createCategory({
            userId: dataUser.id,
            categoryName: newCategory
        })
        login({ email: dataUser.email, password: dataUser.password })
        setIsActive(!isActive)
    }
    return (
        <>
            <button onClick={() => setIsActive(!isActive)} className="px-2 py-1 font-bold text-white bg-green-500 rounded-lg">+ Category</button>
            <Modal ariaHideApp={false} className=" absolute top-1/2 left-1/2 rounded-3xl p-6 translate-x-[-50%] translate-y-[-50%] text-black bg-white" isOpen={isActive}>
                <h1 className='mb-2 text-2xl font-bold'>Create Category</h1>
                <div className='mb-2'>
                    <label className="block mb-1 text-sm font-medium text-gray-900 ">Name:</label>
                    <input name="title" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} type="text" className="block w-full p-2 text-gray-900 border border-gray-600 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 " />
                </div>
                <div className='flex items-center justify-end gap-4 mt-4'>
                    <button className='px-3 py-1 text-white bg-green-500 rounded-lg' onClick={createCategoryFetch}>Yes</button>
                    <button className='px-3 py-1 text-white bg-red-500 rounded-lg' onClick={() => setIsActive(!isActive)}>Cancel</button>
                </div>

            </Modal>
        </>
    )
}
