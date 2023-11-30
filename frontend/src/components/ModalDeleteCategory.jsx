import Modal from 'react-modal'
import { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { deleteCategory } from '../services/apiService';
import { useAuthContext } from '../hooks/useAuthContext';

export default function ModalDeleteCategory() {
    const [isActive, setIsActive] = useState(false);
    const { dataUser, login } = useAuthContext()
    const [category, setCategory] = useState('none')
    const deleteTaskFetch = async () => {

        await deleteCategory({
            userId: dataUser?.id,
            categoryName: category
        })
        login({ email: dataUser?.email, password: dataUser?.password })
        setIsActive(!isActive)
    }
    return (
        <>
            <button onClick={() => setIsActive(!isActive)} className="flex items-center justify-center gap-1 px-2 py-1 font-bold text-white bg-red-500 rounded-lg"><MdDelete className='inline' fill='white' />Category</button>
            <Modal ariaHideApp={false} className=" absolute top-1/2 left-1/2 rounded-3xl p-6 translate-x-[-50%] translate-y-[-50%] text-black bg-white" isOpen={isActive}>
                <h1 className='mb-2 text-2xl font-bold'>Delete Category</h1>
                <label className="text-lg font-medium text-black">Categories:</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="bg-[#374151] border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100px] px-2 py-1  ">
                    <option value='none'>none</option>
                    {dataUser?.categories?.map((category, key) => (
                        <option value={category} key={key}>{category}</option>
                    ))}
                </select>
                <div className='flex items-center justify-end gap-4 mt-4'>
                    <button className='px-3 py-1 text-white bg-red-500 rounded-lg' onClick={deleteTaskFetch}>Delete</button>
                    <button className='px-3 py-1 text-white bg-green-500 rounded-lg' onClick={() => setIsActive(!isActive)}>Cancel</button>
                </div>

            </Modal>
        </>
    )
}
