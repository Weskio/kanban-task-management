import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class CurrentBoardService {
  selectedBoardName: string = 'Platform Launch';

  public currentBoardName$ = new BehaviorSubject<string>(
    this.selectedBoardName
  );

  currentBoard(board: string) {
    this.currentBoardName$.next(board);
  }
}
