import React from "react";
import Category from "./components/Category";
import SidePanel from "./components/SidePanel";
import { TasksProvider } from "./context/tasksContext";
import "./styles/styles.scss"

const App: React.FC = () => {
  return (
    <TasksProvider tasks={[]}>
      <div className="app">
        <main className="main width-control">
          <SidePanel />
          <Category title="Test Category" />
        </main>
      </div>
    </TasksProvider>
  )
}

export default App
