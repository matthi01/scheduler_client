import React from "react";
import Category from "./components/TaskPanel";
import SidePanel from "./components/CategoriesPanel";
import { TasksProvider } from "./context/tasksContext";
import "./styles/styles.scss"

const App: React.FC = () => {
  return (
    <TasksProvider tasks={[]}>
      <div className="app">
        <main className="main">
          <SidePanel />
          <Category title="Test Category" />
        </main>
      </div>
    </TasksProvider>
  )
}

export default App
