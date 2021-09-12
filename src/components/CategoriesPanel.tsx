import React, { useContext } from "react"
import { CategoriesContext } from "../context/CategoriesContext"
import { TasksContext } from "../context/TasksContext"
import AddCategory from "./AddCategory"
import Category from "./Category"

const CategoriesPanel: React.FC = () => {
    const { categories, activeCategory, setActiveCategoryId } = useContext(CategoriesContext)
    const { tasks } = useContext(TasksContext)

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
                                numOfTasks={tasks ? tasks.length : 0} 
                                onClickHandler={() => setActiveCategoryId(category.category_id)}
                                active={category.category_id === activeCategory?.category_id}
                                notSaved={category.notSaved}
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