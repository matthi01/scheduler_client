import React, { useContext, useState } from "react"
import { TasksContext } from "../context/tasksContext"

interface IProps {}

const AddTask: React.FC<IProps> = (props) => {
    const [ newTaskText, setNewTaskText ] = useState("")

    const { saveTask } = useContext(TasksContext)

    const saveNewTask = (taskText: string) => {
        setNewTaskText("")
        saveTask({
            id: null,
            text: taskText,
            completed: false,
            stepsCompleted: 0,
            stepsTotal: 0
        })
    }
    
    return (
        <div className="add-task">
            <input 
                type="text" 
                value={newTaskText} 
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        saveNewTask(newTaskText)
                    }
                }}
                onChange={e => setNewTaskText(e.target.value)} />
        </div>
    )
}

export default AddTask