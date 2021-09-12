import axios from "axios"
import { ICategory, ITask } from "../types"

// tasks
export const axiosFetchTasks = async (categoryId: string) => {
  return await axios.get(`http://localhost:3000/category/${categoryId}/tasks`)
}

export const axiosCreateTask = async (task: ITask) => {
  return await axios.post(`http://localhost:3000/category/${task.category_id}/task`,
    {
      task: task.text,
      complete: false
    }
  )
}

export const axiosDeleteTask = async (task: ITask) => {
  return await axios.delete(`http://localhost:3000/category/${task.category_id}/task/${task.id}`)
}

// categories
export const axiosFetchCategories = async () => {
  return await axios.get("http://localhost:3000/categories")
}

export const axiosCreateCategory = async (category: ICategory) => {
  return await axios.post("http://localhost:3000/category", 
    {
      name: category.name,
      description: "this is going away"
    }
  )
}

export const axiosUpdateCategory = async (category: ICategory) => {
  return await axios.put(`http://localhost:3000/category/${category.category_id}`, 
    {
      name: category.name,
      description: category.description
    }
  )
}

export const axiosDeleteCategory = async (category: ICategory) => {
  return await axios.delete(`http://localhost:3000/category/${category.category_id}`)
}