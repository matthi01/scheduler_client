import React, { useContext } from "react"
import { TasksContext } from "../context/TasksContext"
import ConditionalRender from "./ConditionalRender"

const StepsPanel: React.FC = () => {
  const { activeTaskId } = useContext(TasksContext)
  return (
    <ConditionalRender shouldRender={!!activeTaskId}>
      <div className="steps-panel">Steps Side Panel</div>
    </ConditionalRender>
  )
}

export default StepsPanel