import React, { useState } from "react"
import { axiosCreateTask } from "../axios/axios"
import { ITask } from "../types"

type TasksContextType = {
    tasks: ITask[]
    setTasks: (tasks: ITask[]) => void
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
    setTasks: (tasks: ITask[]) => {},
    activeTaskId: "",
    setActiveTaskId: (id: string) => {},
    addTask: (task: ITask) => {},
    setTaskComplete: (taskId: string, taskText: string, complete: boolean) => {}
})

export const TasksProvider: React.FC<ITasksProviderProps> = (props) => {
    const [ tasks, setTasks ] = useState<ITask[]>([])
    const [ activeTaskId, setActiveTaskId ] = useState<string>("")

    const addTask = (task: ITask) => {
        axiosCreateTask(task)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.error(err)
            })
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
            setTasks,
            activeTaskId,
            setActiveTaskId,
            addTask, 
            setTaskComplete
        }}>
            { props.children }
        </TasksContext.Provider>
    )
}

