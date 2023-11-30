import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import { updateTask } from '../services/apiService';
import { useAuthContext } from '../hooks/useAuthContext';
import { MdModeEdit } from 'react-icons/md';

export default function ModalEditTask({ task }) {
    const { dataUser, login } = useAuthContext();
    const categoriesList = dataUser.categories;
    const [isActive, setIsActive] = useState(false);
    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        categories: [],
        userId: dataUser.id,
    });

    useEffect(() => {
        // Actualizar el estado cuando cambia la tarea
        setNewTask({
            title: task.title || '',
            description: task.description || '',
            categories: task.categories || [],
            userId: dataUser.id,
        });
    }, [task, dataUser.id]);

    const updateTaskFetch = async () => {
        await updateTask(task.id, newTask);
        setIsActive(!isActive);
        login({ email: dataUser.email, password: dataUser.password });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask({
            ...newTask,
            [name]: value,
        });
    };

    const handleCategoryChange = (category) => {
        const isChecked = newTask.categories.includes(category);

        if (isChecked) {
            setNewTask((prevTask) => ({
                ...prevTask,
                categories: prevTask.categories.filter((c) => c !== category),
            }));
        } else {
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
        });
        setIsActive(!isActive);
    };

    return (
        <>
            <button onClick={() => setIsActive(!isActive)} title="Edit" className="grid w-6 h-6 bg-yellow-500 rounded-full place-content-center">
                {' '}
                <MdModeEdit fill="white" />
            </button>

            <Modal ariaHideApp={false} className=" absolute top-1/2 left-1/2 rounded-3xl p-6 translate-x-[-50%] translate-y-[-50%] text-black bg-white" isOpen={isActive}>
                <h1 className="mb-2 text-2xl font-bold">Edit Task</h1>
                <div className="mb-2">
                    <label className="block mb-1 text-sm font-medium text-gray-900 ">Title:</label>
                    <input placeholder={task.title} name="title" value={newTask.title} onChange={handleInputChange} type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-600 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 " />
                </div>
                <div className="mb-2">
                    <label className="block mb-1 text-sm font-medium text-gray-900 ">Description:</label>
                    <input placeholder={task.description} name="description" value={newTask.description} onChange={handleInputChange} type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-600 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 " />
                </div>
                <div className="mb-2">
                    <label className="block mb-1 text-sm font-medium text-gray-900 ">Categories:</label>
                    <div className="flex gap-2">
                        {categoriesList?.map((category) => (
                            <div className="flex items-center justify-center gap-1" key={category}>
                                <input type="checkbox" name={category} checked={newTask.categories.includes(category)} onChange={() => handleCategoryChange(category)} />
                                {category}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-end gap-4 mt-4">
                    <button className="px-3 py-1 text-white bg-green-500 rounded-lg" onClick={updateTaskFetch}>
                        Update
                    </button>
                    <button className="px-3 py-1 text-white bg-red-500 rounded-lg" onClick={cancelCreate}>
                        Cancel
                    </button>
                </div>
            </Modal>
        </>
    );
}