import React, { useContext, useState } from "react"
import { CategoriesContext } from "../context/CategoriesContext"
import AddCategory from "./AddCategory"
import Category from "./Category"
import { ITask } from "./TasksPanel"

export interface ICategory {
    category_id: string
    name: string
    description: string
    tasks?: ITask[]
}

interface IProps {}

const CategoriesPanel: React.FC<IProps> = (props) => {
    const { categories, activeCategoryId, setActiveCategoryId } = useContext(CategoriesContext)

    return (
        <div className="categories-panel">
            <hr />
            <div className="categories">
                {
                    categories.map((category, i) => {
                        return (
                            <Category
                                key={ category.category_id ? category.category_id : i } 
                                id={category.category_id}
                                label={category.name} 
                                numOfTasks={category.tasks ? category.tasks.length : 0} 
                                onClickHandler={() => setActiveCategoryId(category.category_id)}
                                active={category.category_id === activeCategoryId}
                            />
                        )
                    })
                }
            </div>
            <AddCategory />
        </div>
    )
}

export default CategoriesPanel