import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useContext } from "react"
import { CategoriesContext } from "../context/CategoriesContext"

const AddCategory: React.FC = () => {
  const { addCategory } = useContext(CategoriesContext)

  const addNewCategory = () => {
    const categoryId = (Math.random() * 100000000000).toString() // this needs to be replaced and should be handled by the back-end
    addCategory({
      category_id: categoryId,
      name: "Untitled",
      description: ""
    })
  }

  return (
    <div className="add-category cursor-pointer" onClick={addNewCategory}>
      <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
      <span className="text-light font-size-text">New Category</span>
    </div>
  )
}

export default AddCategory