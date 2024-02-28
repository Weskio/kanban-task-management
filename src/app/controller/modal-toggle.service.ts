import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalToggleService {

  isAddTaskModalShown:boolean = false;
  isAddColumnModalShown: boolean =false;
  isAddBoardShown: boolean = false;

  constructor() { }

  modalToggle(modalType:string){
    if(modalType === 'add-task'){
      this.isAddTaskModalShown = !this.isAddTaskModalShown
    }else if(modalType === 'add-column'){
     this.isAddColumnModalShown = !this.isAddColumnModalShown
    }
    else if(modalType === 'add-board'){
      this.isAddBoardShown = !this.isAddBoardShown
    }
  }
}
