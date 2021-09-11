import React, { useContext } from "react"
import { faCircle } from "@fortawesome/free-regular-svg-icons"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ITask } from "./TaskPanel"
import { TasksContext } from "../context/tasksContext"
import classNames from "classnames"

const Task: React.FC<ITask> = (props) => {
    const { setTaskComplete } = useContext(TasksContext)
    return (
        <div className="task">
            <div className="icon" onClick={() => setTaskComplete(props.id, props.text, !props.completed)}>
                {
                    props.completed
                        ? <FontAwesomeIcon icon={faCheckCircle} />
                        : <FontAwesomeIcon icon={faCircle} />
                }
            </div>
            <div className="detail">
                <span className={classNames("text", {"text-strikethrough text-grey": props.completed})}>{ props.text }</span>
                {
                    props.stepsTotal > 0
                        ?   <span className="steps">{ `${props.stepsCompleted} of ${props.stepsTotal}` }</span>
                        :   null
                    }
            </div>
        </div>
    )
}

export default Task