import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalToggleService {
  isAddTaskModalShown: boolean = false;
  isAddColumnModalShown: boolean = false;
  isAddBoardShown: boolean = false;
  isTaskDetailsShown: boolean = false;
  isDeleteModalShown: boolean = false
  formTitle: string = '';
  taskName: string =''
  taskDesc: string = ''
  subTasks!:[]
  subTaskName!: string[]
  taskColumn!:string

  constructor() {}

  modalToggle(modalType: string, formTitle: string, taskName: string) {
    this.formTitle = formTitle;
    if (modalType === 'add-task') {
      this.isAddTaskModalShown = !this.isAddTaskModalShown;
    } else if (modalType === 'add-column') {
      this.isAddColumnModalShown = !this.isAddColumnModalShown;
      this.formTitle = formTitle;
    } else if (modalType === 'add-board') {
      this.isAddBoardShown = !this.isAddBoardShown;
    } else if (modalType === 'task-details') {
      this.isTaskDetailsShown = !this.isTaskDetailsShown;
      this.taskName = taskName
    }
    else if(modalType === 'delete'){
      this.isDeleteModalShown = !this.isDeleteModalShown
    }
  }

  taskDetails(taskName:string, subtasks: [], taskDesc:string, subTaskName: any, taskColumn:string){
    this.subTaskName = subTaskName
    this.taskName = taskName
    this.subTasks = subtasks
    this.taskDesc = taskDesc
    this.taskColumn = taskColumn
  }
}
