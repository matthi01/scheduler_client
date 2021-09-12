import React, { useEffect, useState } from "react";
import TasksPanel from "./components/TasksPanel";
import CategoriesPanel from "./components/CategoriesPanel";
import StepsPanel from "./components/StepsPanel";
import { TasksProvider } from "./context/TasksContext";
import { CategoriesProvider } from "./context/CategoriesContext";
import { axiosFetchCategories } from "./axios/axios";
import "./styles/styles.scss";
import { ICategory } from "./types";

const App: React.FC = () => {
  const [ categories, setCategories ] = useState<ICategory[] | []>()

  useEffect(() => {
    axiosFetchCategories()
      .then(({data}) => {
        setCategories(data)
      })
      .catch((error) => {
        console.error(`Error fetching categories: ${error}`)
      })
  }, [])

  return (
    <CategoriesProvider categories={categories}>
      <TasksProvider tasks={[]}>
        <div className="app">
          <main className="main">
            <CategoriesPanel />
            <TasksPanel />
            <StepsPanel />
          </main>
        </div>
      </TasksProvider>
    </CategoriesProvider>
  )
}

export default App
