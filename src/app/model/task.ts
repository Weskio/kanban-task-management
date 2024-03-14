export interface Task {
    title?: string | null | undefined,
    description?: string | null | undefined,
    status?: string,
    subtasks?: SubTask[]
}

interface SubTask{
    title: string,
    isCompleted: boolean,
}
