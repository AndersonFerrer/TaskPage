import Modal from 'react-modal'
import { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { deleteTask } from '../services/apiService';
import { useAuthContext } from '../hooks/useAuthContext';

export default function ModalDelete({ id }) {
    const [isActive, setIsActive] = useState(false);
    const { dataUser, login } = useAuthContext()
    const deleteTaskFetch = async () => {
        await deleteTask(id)
        login({ email: dataUser.email, password: dataUser.password })
        setIsActive(!isActive)
    }
    return (
        <>
            <button onClick={() => setIsActive(!isActive)} title="Delete" className="grid w-6 h-6 bg-red-500 rounded-full place-content-center"> <MdDelete fill="white" /></button>
            <Modal ariaHideApp={false} className=" absolute top-1/2 left-1/2 rounded-3xl p-6 translate-x-[-50%] translate-y-[-50%] text-black bg-white" isOpen={isActive}>
                <h1 className='mb-2 text-2xl font-bold'>Delete Task</h1>
                <p className='text-lg '>Are you sure you want to delete this task?</p>
                <div className='flex items-center justify-end gap-4 mt-4'>
                    <button className='px-3 py-1 text-white bg-red-500 rounded-lg' onClick={deleteTaskFetch}>Delete</button>
                    <button className='px-3 py-1 text-white bg-green-500 rounded-lg' onClick={() => setIsActive(!isActive)}>Cancel</button>
                </div>

            </Modal>
        </>
    )
}
