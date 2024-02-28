import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownToggleService {

  constructor() { }

  isEditBoardDropdownShown:boolean = false
  isEditTaskDropdownShown: boolean = false
  isStatusDropdownShown: boolean =false

  dropdownToggle(dropdownType: string){
   if(dropdownType === 'edit-board'){
    this.isEditBoardDropdownShown = !this.isEditBoardDropdownShown
   }
   else if(dropdownType === 'edit-task'){
    this.isEditTaskDropdownShown =!this.isEditTaskDropdownShown
   }
   else if(dropdownType === 'status'){
    this.isStatusDropdownShown = !this.isStatusDropdownShown
   }
  }


}
