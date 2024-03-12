import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentColumnsTaskService {

  selectedColumnName: string = '';
  selectedTaskName:string ='';
  
  public currentColumnName$ = new BehaviorSubject<string>(
    this.selectedColumnName
  );
  public currentTaskName$ = new BehaviorSubject<string>(
    this.selectedTaskName
  );

  currentColumn(board: string) {
    this.currentColumnName$.next(board);
  }

  currentTask(board: string) {
    this.currentTaskName$.next(board);
  }

  constructor() { }
}
