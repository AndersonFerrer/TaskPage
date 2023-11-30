import ModalDelete from "./ModalDelete";
import ModalEditTask from "./ModalEditTask"
import ModalArchiveTask from "./ModalArchiveTask";
import ModalActiveTask from "./ModalActiveTask";

export default function Task({ task }) {

    return (
        <article className="p-4 w-60 relative  h-72 rounded-xl bg-[#374151]">
            <h1 className="font-bold text-white text-md">{task.title}</h1>
            <p className="text-sm text-gray-400">{task.description}</p>
            <div className="w-52 gap-2 text-[10px] absolute  bottom-14 flex flex-wrap justify-end items-center">
                {task?.categories.map((category, key) => (
                    <p key={key} className="py-[2px] cursor-pointer px-1 rounded-md bg-red-400">{category}</p>
                ))}
            </div>
            <div className="absolute flex items-center justify-end h-6 gap-2 w-52 bottom-4">
                <ModalActiveTask id={task.id} active={task.isActive} />
                <ModalArchiveTask archive={task.isArchive} id={task.id} />
                <ModalDelete id={task.id} />
                <ModalEditTask task={task} />
            </div>
        </article>
    )
}
