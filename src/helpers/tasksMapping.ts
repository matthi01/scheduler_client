import { ITask } from "../types"

interface IBackendTask {
  category_id: string
  task_id: number
  complete: boolean
  seq: number
  task: string
}

export const tasksMapping = (backendTasks: IBackendTask[]): ITask[] => {
  return backendTasks.map(task => {
    let newTask: ITask = {
      category_id: task.category_id,
      id: task.task_id.toString(),
      text: task.task,
      completed: task.complete,
      stepsCompleted: 0, 
      stepsTotal: 0
    }
    return newTask
  })
}