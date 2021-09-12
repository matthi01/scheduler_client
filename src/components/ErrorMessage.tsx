import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

interface IProps {
  error: string
}

const ErrorMessage: React.FC<IProps> = (props) => {
  return (
    <div className="error-message">
      <span className="icon">
        <FontAwesomeIcon icon={faExclamationCircle} />
      </span>
      <span className="text">{ props.error }</span>
    </div>
  )
}

export default ErrorMessage