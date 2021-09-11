import React, { useState } from "react"
import { ITask } from "../components/TaskPanel"

type TasksContextType = {
    saveTask: (task: ITask) => void
    setTaskComplete: (taskId: string, taskText: string, complete: boolean) => void
    tasks: ITask[]
}

interface ITasksProviderProps {
    tasks: ITask[]
}

export const TasksContext = React.createContext<TasksContextType>({
    tasks: [],
    saveTask: (task: ITask) => {},
    setTaskComplete: (taskId: string, taskText: string, complete: boolean) => {}
})

export const TasksProvider: React.FC<ITasksProviderProps> = (props) => {
    const [ tasks, setTasks ] = useState<ITask[]>([])

    const saveTask = (task: ITask) => {
        setTasks([...tasks, task])
    }

    const setTaskComplete = (taskId: string, taskText: string, complete: boolean) => {
        setTasks(tasks.map(task => {
            if (task.id !== "" && task.id === taskId) {
                task.completed = complete
                return task
            } else if (task.id === "" && task.text === taskText) {
                task.completed = complete
                return task
            } else {
                return task
            }
        }))
    }

    return (
        <TasksContext.Provider value={{tasks, saveTask, setTaskComplete}}>
            { props.children }
        </TasksContext.Provider>
    )
}

