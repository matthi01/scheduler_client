import React, { useState } from "react"
import Category from "./Category"

interface IProps {}

const SidePanel: React.FC<IProps> = (props) => {
    const [ categories, setCategories ] = useState(
        [
            {
                label: "test category 1", 
                tasks: [{text: "something 1"}, {text: "something else 1"}]
            },
            {
                label: "test category 2", 
                tasks: [{text: "something 2"}, {text: "something else 2"}, {text: "something else 2"}]
            }
        ]
    )
    return (
        <div className="categories-panel">
            {
                categories.map(category => {
                    return (
                        <Category label={category.label} numOfTasks={category.tasks.length} />
                    )
                })
            }
        </div>
    )
}

export default SidePanel