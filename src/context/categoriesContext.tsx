import React, { useEffect, useState } from "react"
import { axiosCreateCategory, axiosDeleteCategory, axiosUpdateCategory } from "../axios/axios" 
import { get } from "lodash"
import { ICategory } from "../types"

type CategoriesContextType = {
    categories: ICategory[]
    activeCategory: ICategory | null
    setActiveCategoryId: (id: string) => void
    addCategory: (category: ICategory) => void
    updateCategoryName: (categoryId: string, newName: string) => void
    updateCategory: (category: ICategory) => void
    deleteCategory: (category: ICategory) => void
}

interface ICategoriesProviderProps {
    categories: ICategory[] | undefined
}

export const CategoriesContext = React.createContext<CategoriesContextType>({
    categories: [],
    activeCategory: null,
    setActiveCategoryId: (id: string) => {},
    addCategory: (category: ICategory) => {},
    updateCategoryName: (categoryId: string, newName: string) => {},
    updateCategory: (category: ICategory) => {},
    deleteCategory: (category: ICategory) => {}
})

export const CategoriesProvider: React.FC<ICategoriesProviderProps> = (props) => {
    const [ categories, setCategories ] = useState<ICategory[]>(props.categories || [])
    const [ activeCategory, setActiveCategory ] = useState<ICategory | null>(null)
    const [ activeCategoryId, setActiveCategoryId ] = useState<string>("")

    useEffect(() => {
        setCategories(props.categories || [])
        setActiveCategoryId(get(props, "categories[0].category_id") || "")
    }, [ props.categories ])

    useEffect(() => {
        setActiveCategory(categories.find(category => category.category_id === activeCategoryId) || null)
    }, [ activeCategoryId ])

    const addCategory = (category: ICategory) => {
        axiosCreateCategory(category)
            .then(res => {
                const savedCategory: ICategory = res.data
                setCategories([...categories, savedCategory])
                setActiveCategoryId(savedCategory.category_id)
            })
            .catch(err => {
                console.error(`Error adding new category: ${err}`)
                category.notSaved = true
                setCategories([...categories, category])
                setActiveCategoryId(category.category_id)
            })
    }

    const updateCategoryName = (categoryId: string, newName: string) => {
        const updatedCategories = categories.map(c => {
            if (c.category_id === categoryId) {
                c.name = newName
            }
            return c
        })
        setCategories(updatedCategories)
    }

    const updateCategory = (category: ICategory) => {
        axiosUpdateCategory(category)
            .then(res => {
                // clear the warning about unsaved category
                console.log("%cSuccessfully updated category", "color: green")
            })
            .catch(err => {
                console.error(`Error updating category: ${err}`)
            })
    }

    const deleteCategory = (category: ICategory) => {
        axiosDeleteCategory(category)
            .then(res => {
                setCategories(categories.filter(c => c.category_id !== category.category_id))
                setActiveCategoryId(categories[0].category_id)
                console.log("%cSuccessfully deleted category", "color: green")
            })
            .catch(err => {
                console.error(`Error deleting category: ${err}`)
            })
    }

    return (
        <CategoriesContext.Provider value={{
            categories, 
            activeCategory,
            setActiveCategoryId, 
            addCategory,
            updateCategoryName,
            updateCategory,
            deleteCategory
        }}>
            { props.children }
        </CategoriesContext.Provider>
    )
}

