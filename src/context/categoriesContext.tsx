import React, { useEffect, useState } from "react"
import { ICategory } from "../components/CategoriesPanel"

type CategoriesContextType = {
    // saveTask: (task: ITask) => void
    // setTaskComplete: (taskId: string, taskText: string, complete: boolean) => void
    categories: ICategory[]
    activeCategoryId: string
    setActiveCategoryId: (id: string) => void
    addCategory: (category: ICategory) => void
}

interface ICategoriesProviderProps {
    categories: ICategory[] | undefined
}

export const CategoriesContext = React.createContext<CategoriesContextType>({
    categories: [],
    activeCategoryId: "",
    setActiveCategoryId: (id: string) => {},
    addCategory: (category: ICategory) => {}
    // setTaskComplete: (taskId: string, taskText: string, complete: boolean) => {}
})

export const CategoriesProvider: React.FC<ICategoriesProviderProps> = (props) => {
    const [ categories, setCategories ] = useState<ICategory[]>(props.categories || [])
    const [ activeCategoryId, setActiveCategoryId ] = useState<string>("")

    useEffect(() => {
      setCategories(props.categories || [])
    }, [props.categories])

    const addCategory = (category: ICategory) => {
        setCategories([...categories, category])
    }

    // const setTaskComplete = (taskId: string, taskText: string, complete: boolean) => {
    //     setTasks(tasks.map(task => {
    //         if (task.id !== "" && task.id === taskId) {
    //             task.completed = complete
    //             return task
    //         } else if (task.id === "" && task.text === taskText) {
    //             task.completed = complete
    //             return task
    //         } else {
    //             return task
    //         }
    //     }))
    // }

    return (
        <CategoriesContext.Provider value={{
          categories, 
          activeCategoryId, 
          setActiveCategoryId, 
          addCategory
        }}>
            { props.children }
        </CategoriesContext.Provider>
    )
}

