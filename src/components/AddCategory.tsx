import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

interface IProps {
  // ..
}

const AddCategory: React.FC<IProps> = (props) => {
  return (
    <div className="add-category">
      <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
      <span className="text-light font-size-text">New Category</span>
    </div>
  )
}

export default AddCategory