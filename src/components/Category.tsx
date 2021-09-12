import { faList } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames"
import React from "react"

interface IProps {
    id: string
    label: string
    numOfTasks: number
    onClickHandler: () => void
    active: boolean
}

const Category: React.FC<IProps> = (props) => {
    return (
        <div 
            className={classNames("category", { "active": props.active })} 
            onClick={props.onClickHandler}
        >
            <div className="category-label">
                <span className="icon">
                    <FontAwesomeIcon icon={faList} />
                </span>
                <span className="font-size-text text-light ellipsis">
                    { props.label }
                </span>
            </div>
            <span className="font-size-text text-grey">
                { props.numOfTasks }
            </span>
        </div>
    )
}

export default Category