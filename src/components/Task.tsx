import React from "react"
import { faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ITask } from "./Category"

const Task: React.FC<ITask> = (props) => {
    return (
        <div className="task">
            {
                props.completed
                    ? <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                    : <FontAwesomeIcon icon={faCircle} className="icon" />
            }
            <div className="detail">
                <span className="title">{ props.text }</span>
                <span className="steps">{ `${props.stepsCompleted} of ${props.stepsTotal}` }</span>
            </div>
        </div>
    )
}

export default Task