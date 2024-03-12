import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Column } from '../model/column';
import { CurrentBoardService } from './current-board.service';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  columns!: Column[]

  constructor(private dataService: DataService, private currentBoard: CurrentBoardService) { }

  initialBoardName = this.dataService.getBoards()[0].name
  getBoardName() {
    return this.currentBoard.currentBoardName$.value
  }
  
  ngOnInit() {
    this.dataService.getPColumns().subscribe((data: any) => {
      this.columns = data;
    });
  }
}
