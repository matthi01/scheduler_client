import React from "react"

interface IProps {
    label: string
}

const Pill: React.FC<IProps> = (props) => {
    return (
        <div className="pill">
            { props.label }
        </div>
    )
}

export default Pill