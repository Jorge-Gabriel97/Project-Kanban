import { Badge, Button, Card, Flex, Heading, Text } from "@radix-ui/themes"
import { useContext } from "react" // 1. Trocamos useTasks pelo useContext!
import { TasksContext } from "../contexts/TasksContext" // 1. Importamos o seu Contexto real

import type { Task, TaskPriority, TaskStatus } from "../Entities/Task"

interface TaskCardProps {
    task: Task
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {

    const { deleteTask, updateTask } = useContext(TasksContext)

    const getActionText = (status: TaskStatus) => {
        const actionTexts = {
            "todo": "Iniciar",
            "doing": "Concluir",
            "done": "Arquivar"
        }
        return actionTexts[status]
    }

    const getActionColor = (status: TaskStatus) => {
        const actionColors: { [key in TaskStatus]: "indigo" | "green" | "bronze" } = {
            "todo": "indigo",
            "doing": "green",
            "done": "bronze"
        }
        return actionColors[status]
    }

    const getPriorityColor = (priority: TaskPriority) => {
        const priorityColors: { [key in TaskPriority]: "sky" | "amber" | "tomato" } = {
            "low": "sky",
            "medium": "amber",
            "high": "tomato"
        }
        return priorityColors[priority]
    }


    const handleDelete = (id: string | number) => {
        const confirmation = confirm("Confirma a exclusão da tarefa?")
        if (confirmation) {
            deleteTask(String(id))
        }
    }


    const handleUpdate = () => {
        if (task.status === "todo") {
            updateTask(String(task.id), { status: "doing" })
        } else if (task.status === "doing") {
            updateTask(String(task.id), { status: "done" })
        }
    }

    return (
        <Card>
            <Flex align="center" gap="4">
                <Heading as="h3" size="3">{task.title}</Heading>
                <Badge color={getPriorityColor(task.priority)}>{task.priority}</Badge>
            </Flex>

            <Text as="p" my="4">{task.description}</Text>

            <Flex gap="2">
                {/* Alterado para handleUpdate (com "U" maiúsculo) */}
                <Button color={getActionColor(task.status)} onClick={handleUpdate}>
                    {getActionText(task.status)}
                </Button>
                <Button color="red" onClick={() => handleDelete(task.id)}>Excluir</Button>
            </Flex>
        </Card>
    )
}