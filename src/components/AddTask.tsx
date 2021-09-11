import { faCircle } from "@fortawesome/free-regular-svg-icons"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useContext, useState } from "react"
import { TasksContext } from "../context/tasksContext"

interface IProps {}

const AddTask: React.FC<IProps> = (props) => {
    const [ newTaskText, setNewTaskText ] = useState("")

    const { saveTask } = useContext(TasksContext)

    const saveNewTask = (taskText: string) => {
        setNewTaskText("")
        saveTask({
            id: "",
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
                value={newTaskText} 
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