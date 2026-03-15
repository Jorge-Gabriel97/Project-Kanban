export type TaskStatus = 'Todo' | 'doing' | 'done'
export type TaskPriority= 'low' | 'medium' | 'high'

export interface Task {
    id: number
    title: string
    descripition: string
    status: TaskStatus
    priority: TaskPriority
}