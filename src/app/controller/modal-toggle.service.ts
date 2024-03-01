import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalToggleService {

  isAddTaskModalShown:boolean = false;
  isAddColumnModalShown: boolean =false;
  isAddBoardShown: boolean = false;
  formTitle: string ='';

  constructor() { }

  modalToggle(modalType:string, formTitle:string){
    this.formTitle = formTitle
    if(modalType === 'add-task'){
      this.isAddTaskModalShown = !this.isAddTaskModalShown
    }else if(modalType === 'add-column'){
     this.isAddColumnModalShown = !this.isAddColumnModalShown
     this.formTitle = formTitle
    }
    else if(modalType === 'add-board'){
      this.isAddBoardShown = !this.isAddBoardShown
    }
  }
}
