export interface Task {
    title?: string | null | undefined,
    description?: string | null | undefined,
    status?: string,
    subtasks?: SubTask[]
}

export interface SubTask{
    title: string,
    isCompleted: boolean,
}
