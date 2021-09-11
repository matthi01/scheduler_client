import React, { useContext } from "react"
import { TasksContext } from "../context/tasksContext"
import AddTask from "./AddTask"
import Pill from "./Pill"
import Task from "./Task"

export interface ITask {
    id: string
    text: string
    completed: boolean
    stepsCompleted: number
    stepsTotal: number
}

interface IProps {
    title: string
}

const TaskPanel: React.FC<IProps> = (props) => {
    const { tasks } = useContext(TasksContext)

    const openTasks = tasks.filter(task => !task.completed)
    const closedTasks = tasks.filter(task => task.completed)

    return (
        <div className="task-panel">
            <h1 className="title">
                { props.title }
            </h1>
            <div className="tasks">
                    {
                        openTasks.map((task, i) => (
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
                    {
                        closedTasks.length > 0
                            ?   <>
                                    <Pill label="completed" />
                                    {
                                        closedTasks.map((task, i) => (
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
                                </>
                            :   null
                    }
            </div>
            <AddTask />
        </div>
    )
}

export default TaskPanel