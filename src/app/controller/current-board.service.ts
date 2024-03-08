import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrentBoardService {
  selectedBoardName: string = '';

  public currentBoardName$ = new BehaviorSubject<string>(
    this.selectedBoardName
  );

  currentBoard(board: string) {
    this.currentBoardName$.next(board);
    //console.log(this.currentBoardName$.value);
  }
}
