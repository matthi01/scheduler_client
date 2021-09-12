import React, { useEffect, useState } from "react";
import TasksPanel from "./components/TasksPanel";
import CategoriesPanel, { ICategory } from "./components/CategoriesPanel";
import StepsPanel from "./components/StepsPanel";
import { TasksProvider } from "./context/TasksContext";
import { CategoriesProvider } from "./context/CategoriesContext";
import { fetchCategories } from "./axios/axios";
import "./styles/styles.scss";

const App: React.FC = () => {
  const [ categories, setCategories ] = useState<ICategory[] | undefined>()
  useEffect(() => {
    fetchCategories()
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
            <TasksPanel title="Test Category" />
            <StepsPanel />
          </main>
        </div>
      </TasksProvider>
    </CategoriesProvider>
  )
}

export default App
