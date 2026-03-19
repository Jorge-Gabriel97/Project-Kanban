import { createContext, useState, useEffect, type ReactNode } from 'react'
import type { Task } from '../Entities/Task'
import { taskService } from '../services/api'

export interface TasksContextData {
    tasks: Task[];
    createTask: (attributes: Omit<Task, "id">) => Promise<void>;
    // Permitimos string OU number para ser à prova de falhas
    updateTask: (id: string | number, attributes: Partial<Omit<Task, "id">>) => Promise<void>;
    deleteTask: (id: string | number) => Promise<void>;
}


export const TasksContext = createContext<TasksContextData>({} as TasksContextData)

interface TasksContextProviderProps {
    children: ReactNode
}

export const TasksContextProvider: React.FC<TasksContextProviderProps> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(() => {
        taskService.fetchTasks().then((data) => {
            setTasks(data)
        })
    }, [])

    const createTask = async (attributes: Omit<Task, "id">) => {
        const newTask = await taskService.createTask(attributes)
        setTasks((currentState) => [...currentState, newTask])
    }

    const updateTask = async (id: string | number, attributes: Partial<Omit<Task, "id">>): Promise<void> => {
        // Garantimos que a API receba uma string
        await taskService.updateTask(String(id), attributes)

        setTasks((currentState) => {
            const updatedTasks = [...currentState]
            // Comparamos String com String para nunca falhar!
            const taskIndex = updatedTasks.findIndex((task) => String(task.id) === String(id))

            if (taskIndex !== -1) {
                updatedTasks[taskIndex] = { ...updatedTasks[taskIndex], ...attributes }
            }

            return updatedTasks
        })
    }

    const deleteTask = async (id: string | number): Promise<void> => {
        await taskService.deleteTask(String(id))
        // Comparamos String com String aqui também
        setTasks((currentState) => currentState.filter((task) => String(task.id) !== String(id)))
    }

    return (
        <TasksContext.Provider value={{ tasks, createTask, updateTask, deleteTask }}>
            {children}
        </TasksContext.Provider>
    )
}