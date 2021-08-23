import React from "react"
import Task from "./Task"

export interface ITask {
    text: string
    completed: boolean
    stepsCompleted: number
    stepsTotal: number
}

interface IProps {
    title: string
    tasks: ITask[]
}

const Category: React.FC<IProps> = (props) => {
    return (
        <div className="category">
            <div className="title">
                { props.title }
            </div>
            <div className="tasks">
                {
                    props.tasks.map((task) => (
                        <Task
                            text={task.text}
                            completed={task.completed}
                            stepsCompleted={task.stepsCompleted}
                            stepsTotal={task.stepsTotal}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Category