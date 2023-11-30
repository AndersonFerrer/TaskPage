import { useEffect, useState } from "react";
import Task from "../../components/Task"
import { useAuthContext } from "../../hooks/useAuthContext";
import { getTasks } from "../../services/apiService";

export default function Tasks() {
    const { dataUser, categoryFilter, setCategoryFilter } = useAuthContext();
    const [tasks, setTasks] = useState(null);

    useEffect(() => {
        async function tasksFetch() {
            setCategoryFilter('none')
            const userTasks = await getTasks(dataUser.id)
            setTasks(userTasks.filter((taskNotArchive) => !taskNotArchive.isArchive))
        }
        tasksFetch()
    }, [dataUser])

    return (
        <section className="w-full p-12 gap-5 flex flex-wrap justify-start items-start min-h-[calc(100vh-100px)] bg-[#1F2937]">
            {
                tasks?.filter((category) => {
                    if (categoryFilter === 'none') return category;
                    else {
                        return category.categories.includes(categoryFilter)
                    }

                }).length === 0 && <h1 className='text-2xl font-bold text-white'>No tasks</h1>
            }
            {tasks?.filter((category) => {
                if (categoryFilter === 'none') return category;
                else {
                    return category.categories.includes(categoryFilter)
                }

            }).sort((a, b) => (b.isActive - a.isActive)).map((task, key) => (
                <Task key={key} task={task} />
            ))}
        </section>
    )
}
