export interface Task {
    title: string,
    description: string,
    status: string,
    subtasks: SubTask[]
}

interface SubTask{
    title: string,
    isCompleted: boolean,
}
