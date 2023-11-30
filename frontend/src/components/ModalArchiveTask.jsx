import Modal from 'react-modal'
import { useState } from 'react';
import { MdArchive } from "react-icons/md";
import { updateTask } from '../services/apiService';
import { useAuthContext } from '../hooks/useAuthContext';

export default function ModalArchiveTask({ id, archive }) {
    const [isActive, setIsActive] = useState(false);
    const { dataUser, login } = useAuthContext()

    const archiveTask = async () => {

        await updateTask(id, {
            isArchive: !archive,
        })
        login({ email: dataUser.email, password: dataUser.password })
        setIsActive(!isActive)
    }
    return (
        <>
            <button onClick={() => setIsActive(!isActive)} title="Archive" className="grid w-6 h-6 bg-purple-500 rounded-full place-content-center"><MdArchive fill="white" /> </button>
            <Modal ariaHideApp={false} className=" absolute top-1/2 left-1/2 rounded-3xl p-6 translate-x-[-50%] translate-y-[-50%] text-black bg-white" isOpen={isActive}>
                <h1 className='mb-2 text-2xl font-bold'>{(archive) ? 'Unarchive Task' : 'Archive Task'}</h1>
                <p className='text-lg '>Are you sure you want to archive this task?</p>
                <div className='flex items-center justify-end gap-4 mt-4'>
                    <button className='px-3 py-1 text-white bg-red-500 rounded-lg' onClick={archiveTask}>{(archive) ? 'Unarchive' : 'Archive'}</button>
                    <button className='px-3 py-1 text-white bg-green-500 rounded-lg' onClick={() => setIsActive(!isActive)}>Cancel</button>
                </div>

            </Modal>
        </>
    )
}