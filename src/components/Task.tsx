import React, { useContext } from "react"
import { faCircle } from "@fortawesome/free-regular-svg-icons"
import { faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ITask } from "./TasksPanel"
import { TasksContext } from "../context/TasksContext"
import classNames from "classnames"

interface IProps extends ITask {
    active: boolean
    onClickHandler: () => void
}
const Task: React.FC<IProps> = (props) => {
    const { setTaskComplete } = useContext(TasksContext)
    return (
        <div className={classNames("task", {"active": props.active})} onClick={props.onClickHandler}>
            <div className="icon" onClick={() => setTaskComplete(props.id, props.text, !props.completed)}>
                {
                    props.completed
                        ? <FontAwesomeIcon icon={faCheckCircle} />
                        : <FontAwesomeIcon icon={faCircle} />
                }
            </div>
            <div className="detail">
                <span 
                    className={classNames("text", {"text-strikethrough text-grey": props.completed})}
                >
                    { props.text }
                </span>
                {
                    props.stepsTotal > 0
                        ?   <span className="steps">{ `${props.stepsCompleted} of ${props.stepsTotal}` }</span>
                        :   null
                    }
            </div>
            <span className="icon">
                <FontAwesomeIcon icon={faExclamationCircle} className="warning" />
            </span>
        </div>
    )
}

export default Task