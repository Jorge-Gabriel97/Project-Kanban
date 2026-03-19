import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom' // <--- O DICIONÁRIO SALVADOR AQUI!
import { TaskCard } from './TaskCard'
import { TasksContext } from '../contexts/TasksContext'
import type { Task } from '../Entities/Task'

const mockTask: Task = {
    id: "123",
    title: "Aprender Vitest",
    description: "Criar testes unitários para o Kanban",
    status: "todo",
    priority: "high"
}

const mockContextValue = {
    tasks: [],
    createTask: async () => {},
    updateTask: async () => {},
    deleteTask: async () => {}
}

describe('Componente TaskCard', () => {
    it('deve renderizar o título e a descrição da tarefa na tela', () => {
        
        render(
            <TasksContext.Provider value={mockContextValue}>
                <TaskCard task={mockTask} />
            </TasksContext.Provider>
        )

        // Verificamos se o fluxo de dados chegou na tela!
        expect(screen.getByText('Aprender Vitest')).toBeInTheDocument()
        expect(screen.getByText('Criar testes unitários para o Kanban')).toBeInTheDocument()
    })
})