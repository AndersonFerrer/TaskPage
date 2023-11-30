import Modal from 'react-modal'
import { useState } from 'react';
import { MdCheckCircleOutline } from "react-icons/md";
import { updateTask } from '../services/apiService';
import { useAuthContext } from '../hooks/useAuthContext';

export default function ModalActiveTask({ id, active }) {
    const [isActive, setIsActive] = useState(false);
    const { dataUser, login } = useAuthContext()

    const activeTask = async () => {

        await updateTask(id, {
            isActive: !active,
        })
        login({ email: dataUser.email, password: dataUser.password })
        setIsActive(!isActive)
    }
    return (
        <>
            <button onClick={() => setIsActive(!isActive)} title="Complete"><MdCheckCircleOutline fill='#fff' className={(active) ? "bg-green-500 rounded-full w-7 h-7" : "rounded-full w-7 h-7"} /></button>
            <Modal ariaHideApp={false} className=" absolute top-1/2 left-1/2 rounded-3xl p-6 translate-x-[-50%] translate-y-[-50%] text-black bg-white" isOpen={isActive}>
                <h1 className='mb-2 text-2xl font-bold'>{(active) ? 'Unactive Task' : 'Active Task'}</h1>
                <p className='text-lg '>{(active) ? 'Are you sure you want to unactive this task?' : 'Are you sure you want to active this task?'}</p>
                <div className='flex items-center justify-end gap-4 mt-4'>
                    <button className='px-3 py-1 text-white bg-green-500 rounded-lg' onClick={activeTask}>{(active) ? 'Unactive' : 'Active'}</button>
                    <button className='px-3 py-1 text-white bg-red-500 rounded-lg' onClick={() => setIsActive(!isActive)}>Cancel</button>
                </div>

            </Modal>
        </>
    )
}