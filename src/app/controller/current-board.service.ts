import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentBoardService {

  currentBoard(board:string){
    return board
  }
}
