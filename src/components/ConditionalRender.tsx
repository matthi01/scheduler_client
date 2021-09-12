import React from "react"

interface IProps {
  shouldRender: boolean
}

const ConditionalRender: React.FC<IProps> = (props) => {
  return (
    props.shouldRender
      ? <>{props.children}</>
      : <></>
  )
}

export default ConditionalRender