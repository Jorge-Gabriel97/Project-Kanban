// Alterei o 'Todo' para minúsculo para bater com os seus dados
export type TaskStatus = 'todo' | 'doing' | 'done' 
export type TaskPriority= 'low' | 'medium' | 'high'

export interface Task {
    id: number
    title: string
    description: string // Corrigi a ortografia para description
    status: TaskStatus
    priority: TaskPriority
}