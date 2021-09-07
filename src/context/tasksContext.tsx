import React, { useState } from "react"
import { ITask } from "../components/Category"

type TasksContextType = {
    saveTask: (task: ITask) => void
    tasks: ITask[]
}

interface ITasksProviderProps {
    tasks: ITask[]
}

export const TasksContext = React.createContext<TasksContextType>({
    tasks: [],
    saveTask: (task: ITask) => {}
})

export const TasksProvider: React.FC<ITasksProviderProps> = (props) => {
    const [ tasks, setTasks ] = useState<ITask[]>([])

    const saveTask = (task: ITask) => {
        setTasks([...tasks, task])
    }

    return (
        <TasksContext.Provider value={{tasks, saveTask}}>
            { props.children }
        </TasksContext.Provider>
    )
}

