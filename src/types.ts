export interface ICategory {
  category_id: string
  name: string
  description: string
  tasks?: ITask[]
  notSaved?: boolean
}

export interface ITask {
  id: string
  category_id: string
  text: string
  completed: boolean
  stepsCompleted: number
  stepsTotal: number
}