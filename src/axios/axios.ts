import axios from "axios"

export const fetchCategories = async () => {
  return await axios.get("http://localhost:3000/categories")
}