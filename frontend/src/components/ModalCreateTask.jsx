import Modal from 'react-modal'
import { useState } from 'react';
import { createTask } from '../services/apiService';
import { useAuthContext } from '../hooks/useAuthContext';

export default function ModalCreateTask() {
    const { dataUser, login } = useAuthContext()
    const categoriesList = dataUser.categories
    const [isActive, setIsActive] = useState(false);
    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        categories: [],
        userId: dataUser.id
    })

    const createTaskFetch = async () => {
        await createTask(newTask)
        setIsActive(!isActive)
        login({ email: dataUser.email, password: dataUser.password })

    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Actualiza el estado del formulario usando el spread operator para mantener los valores anteriores
        setNewTask({
            ...newTask,
            [name]: value,
        });
    };
    const handleCategoryChange = (category) => {
        const isChecked = newTask.categories.includes(category);

        if (isChecked) {
            // Si la categoría está seleccionada, la eliminamos del array
            setNewTask((prevTask) => ({
                ...prevTask,
                categories: prevTask.categories.filter((c) => c !== category),
            }));
        } else {
            // Si la categoría no está seleccionada, la agregamos al array
            setNewTask((prevTask) => ({
                ...prevTask,
                categories: [...prevTask.categories, category],
            }));
        }
    };
    const cancelCreate = () => {
        setNewTask({
            title: '',
            description: '',
            categories: [],
        })
        setIsActive(!isActive)
    }

    return (
        <>
            <button onClick={() => setIsActive(!isActive)} className="px-2 py-1 font-bold text-white bg-green-500 rounded-lg">+ Task</button>

            <Modal ariaHideApp={false} className=" absolute top-1/2 left-1/2 rounded-3xl p-6 translate-x-[-50%] translate-y-[-50%] text-black bg-white" isOpen={isActive}>
                <h1 className='mb-2 text-2xl font-bold'>Create Task</h1>
                <div className='mb-2'>
                    <label className="block mb-1 text-sm font-medium text-gray-900 ">Title:</label>
                    <input name="title" value={newTask.title} onChange={handleInputChange} type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-600 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 " />
                </div>
                <div className='mb-2'>
                    <label className="block mb-1 text-sm font-medium text-gray-900 ">Description:</label>
                    <input name="description" value={newTask.description} onChange={handleInputChange} type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-600 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 " />
                </div>
                <div className='mb-2'>
                    <label className="block mb-1 text-sm font-medium text-gray-900 ">Categories:</label>
                    <div className='flex gap-2'>
                        {categoriesList?.map((category) => (
                            <div className='flex items-center justify-center gap-1' key={category}>
                                <input
                                    type="checkbox"
                                    name={category}
                                    checked={newTask.categories.includes(category)}
                                    onChange={() => handleCategoryChange(category)}
                                />
                                {category}
                            </div>
                        ))}
                    </div>

                </div>
                <div className='flex items-center justify-end gap-4 mt-4'>
                    <button className='px-3 py-1 text-white bg-green-500 rounded-lg' onClick={createTaskFetch}>Create</button>
                    <button className='px-3 py-1 text-white bg-red-500 rounded-lg' onClick={cancelCreate}>Cancel</button>
                </div>

            </Modal>
        </>
    )
}
