import React, { useState } from "react"
import { ITask } from "../components/TasksPanel"

type TasksContextType = {
    tasks: ITask[]
    activeTaskId: string
    setActiveTaskId: (id: string) => void
    addTask: (task: ITask) => void
    setTaskComplete: (taskId: string, taskText: string, complete: boolean) => void
}

interface ITasksProviderProps {
    tasks: ITask[]
}

export const TasksContext = React.createContext<TasksContextType>({
    tasks: [],
    activeTaskId: "",
    setActiveTaskId: (id: string) => {},
    addTask: (task: ITask) => {},
    setTaskComplete: (taskId: string, taskText: string, complete: boolean) => {}
})

export const TasksProvider: React.FC<ITasksProviderProps> = (props) => {
    const [ tasks, setTasks ] = useState<ITask[]>([])
    const [ activeTaskId, setActiveTaskId ] = useState<string>("")

    const addTask = (task: ITask) => {
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
        <TasksContext.Provider value={{
            tasks, 
            activeTaskId,
            setActiveTaskId,
            addTask, 
            setTaskComplete
        }}>
            { props.children }
        </TasksContext.Provider>
    )
}

