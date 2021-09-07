import React, { useContext } from "react"
import { TasksContext } from "../context/tasksContext"
import AddTask from "./AddTask"
import Task from "./Task"

export interface ITask {
    id: string | null
    text: string
    completed: boolean
    stepsCompleted: number
    stepsTotal: number
}

interface IProps {
    title: string
}

const Category: React.FC<IProps> = (props) => {
    const { tasks } = useContext(TasksContext)
    return (
        <div className="category">
            <div className="title">
                { props.title }
            </div>
            <div className="tasks">
                {
                    tasks.map((task, i) => (
                        <Task
                            key={task.id ? task.id : i}
                            id={task.id}
                            text={task.text}
                            completed={task.completed}
                            stepsCompleted={task.stepsCompleted}
                            stepsTotal={task.stepsTotal}
                        />
                    ))
                }
            </div>
            <AddTask />
        </div>
    )
}

export default Category