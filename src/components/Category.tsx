import { faList } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

interface IProps {
    label: string
    numOfTasks: number
}

const Category: React.FC<IProps> = (props) => {
    return (
        <div className="category">
            <FontAwesomeIcon icon={faList} />
            <span className="font-size-text text-light">
                { props.label }
            </span>
            <span>
                { props.numOfTasks }
            </span>
        </div>
    )
}

export default Category