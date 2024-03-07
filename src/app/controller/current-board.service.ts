import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentBoardService {

  selectedBoard: any = null;

  constructor() {}

  // selectBoard(board: any) {

  //   console.log(board);
  //   this.selectedBoard = board;
  //  // console.log(this.selectedBoard);
  //   if(this.selectedBoard === null) {
  //     return false
  //   }
  //   else{
  //     return true
  //   }
  // }

  isBoardSelected(board: any): boolean {
    return this.selectedBoard === board;
  }
}
