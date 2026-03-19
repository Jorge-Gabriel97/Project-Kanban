import { createContext, useState, useEffect, type ReactNode } from 'react'
import type { Task } from '../Entities/Task'
import { taskService } from '../services/api'



export interface TasksContextData {
    tasks: Task[];
    createTask: (attributes: Omit<Task, "id">) => Promise<void>;
    updateTask: (id: number, attributes: Partial<Omit<Task, "id">>) => Promise<void>;
    deleteTask: (id: number) => Promise<void>;
}

export const TasksContext = createContext({} as TasksContextData)

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
        setTasks((currentState) => {
            const updatedTasks =[...currentState, {...attributes, newTask}]
            return updatedTasks
        })
        
    } 

    const updateTask = async (id: number, attributes: Partial<Omit<Task, "id">>): Promise<void> => {

    }

    const deleteTask = async (id: number): Promise<void> => {

    }

    return (

        <TasksContext.Provider value={{ tasks, createTask, updateTask, deleteTask }}>
            {children}
        </TasksContext.Provider>
    )
}