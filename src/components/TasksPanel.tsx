import React, { useContext, useEffect, useState } from "react"
import { axiosFetchTasks } from "../axios/axios"
import { tasksMapping } from "../helpers/tasksMapping"
import { CategoriesContext } from "../context/CategoriesContext"
import { TasksContext } from "../context/TasksContext"
import AddTask from "./AddTask"
import Pill from "./Pill"
import Task from "./Task"
import { get } from "lodash"
import ErrorMessage from "./ErrorMessage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons"

const TasksPanel: React.FC = () => {
    const [ fetchError, setFetchError ] = useState<boolean>(false)
    const { activeCategory, updateCategoryName, updateCategory, deleteCategory } = useContext(CategoriesContext)
    const { tasks, setTasks, activeTaskId, setActiveTaskId } = useContext(TasksContext)

    useEffect(() => {
        if (activeCategory) {
            axiosFetchTasks(activeCategory.category_id)
            .then(({data}) => {
                setTasks(tasksMapping(data))
                if (fetchError) setFetchError(false)
            })
            .catch(error => {
                setFetchError(true)
                setTasks([])
            })
        }
    }, [ activeCategory ])

    const openTasks = tasks.filter(task => !task.completed)
    const closedTasks = tasks.filter(task => task.completed)

    return (
        <div className="task-panel" onClick={
            (e) => {
                const targetClassList = get(e, "target.classList")
                if (targetClassList.contains("task-panel")) {
                    setActiveTaskId("")
                }
            }
        }>
            <div className="header">
                <input 
                    type="text" 
                    className="unstyled-input w-100 h1"
                    value={activeCategory?.name || ""} 
                    onChange={e => updateCategoryName(activeCategory!.category_id, e.target.value)} 
                    onBlur={() => updateCategory(activeCategory!)}
                />
                <span className="icon cursor-pointer" onClick={() => deleteCategory(activeCategory!)}>
                    <FontAwesomeIcon icon={faTrashAlt} className="danger" />
                </span>
            </div>
            <div className="tasks">
                {
                    fetchError
                        ?   <ErrorMessage error="Failed to fetch tasks" />
                        :   null
                }
                {
                    openTasks.map((task, i) => (
                        <Task
                            key={task.id ? task.id : i}
                            id={task.id}
                            category_id={task.category_id}
                            text={task.text}
                            completed={task.completed}
                            stepsCompleted={task.stepsCompleted}
                            stepsTotal={task.stepsTotal}
                            onClickHandler={() => setActiveTaskId(task.id)}
                            active={task.id === activeTaskId}
                        />
                    ))
                }
                {
                    closedTasks.length > 0
                        ?   <>
                                <Pill label="completed" />
                                {
                                    closedTasks.map((task, i) => (
                                        <Task
                                            key={task.id ? task.id : i}
                                            id={task.id}
                                            category_id={task.category_id}
                                            text={task.text}
                                            completed={task.completed}
                                            stepsCompleted={task.stepsCompleted}
                                            stepsTotal={task.stepsTotal}
                                            onClickHandler={() => setActiveTaskId(task.id)}
                                            active={task.id === activeTaskId}
                                        />
                                    ))
                                    }
                            </>
                        :   null
                }
            </div>
            <AddTask />
        </div>
    )
}

export default TasksPanel