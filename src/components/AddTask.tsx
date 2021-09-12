import { faCircle } from "@fortawesome/free-regular-svg-icons"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useContext, useState } from "react"
import { CategoriesContext } from "../context/CategoriesContext"
import { TasksContext } from "../context/TasksContext"

const AddTask: React.FC = () => {
    const [ newTaskText, setNewTaskText ] = useState("")
    const { activeCategory } = useContext(CategoriesContext)
    const { addTask } = useContext(TasksContext)

    const saveNewTask = (taskText: string) => {
        setNewTaskText("")
        addTask({
            category_id: activeCategory!.category_id,
            id: (Math.random() * 100000000000).toString(), // this needs to be replaced and should be handled by the back-end
            text: taskText,
            completed: false,
            stepsCompleted: 0,
            stepsTotal: 0
        })
    }
    
    return (
        <div className="add-task">
            <span className="icon">
                {
                    newTaskText
                        ?   <FontAwesomeIcon icon={ faCircle } />
                        :   <FontAwesomeIcon icon={ faPlus } />
                }
            </span>
            <input 
                type="text" 
                className="w-100"
                value={newTaskText || ""} 
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        saveNewTask(newTaskText)
                    }
                }}
                placeholder="Add a task"
                onChange={e => setNewTaskText(e.target.value)} />
        </div>
    )
}

export default AddTask