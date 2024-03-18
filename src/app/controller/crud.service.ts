import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Column } from '../model/column';
import { CurrentBoardService } from './current-board.service';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  columns!: Column[]

  selectedStatus: string = ''

  getSelectedStatus(text:string){
    this.selectedStatus = text
  }

  constructor(private dataService: DataService, private currentBoard: CurrentBoardService) { }

  initialBoardName = ''
  getBoardName() {
    return this.currentBoard.currentBoardName$.value
  }
  
  ngOnInit() {
    this.initialBoardName = this.dataService.getBoards()[0].name
    this.dataService.getPColumns().subscribe((data: any) => {
      this.columns = data;
    });
  }

  addColumn(text: any){
    this.dataService.addColumn(text, this.getBoardName());
    this.dataService.getPColumns().subscribe((data: any) => {
      this.columns = data;
    });
  }

  addTask(task: Task){
    this.dataService.addTask(this.getBoardName() || this.dataService.getBoards()[0].name, this.selectedStatus, task);
    this.dataService.getPColumns().subscribe((data: any) => {
      this.columns = data;
    });
  }


  deleteTask(columnName: string){
    this.dataService.deleteTask(this.getBoardName(), columnName);
    this.dataService.getPColumns().subscribe((data: any) => {
      this.columns = data;
    });
  }
}
