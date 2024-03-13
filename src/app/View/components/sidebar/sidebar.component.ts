import { Component } from '@angular/core';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { BoardComponent } from '../board/board.component';
import { CreateNewBoardComponent } from '../create-new-board/create-new-board.component';
import { ThemeToggleService } from '../../../controller/theme-toggle.service';
import { NgClass } from '@angular/common';
import { DataService } from '../../../controller/data.service';
import { CurrentBoardService } from '../../../controller/current-board.service';
import { Board } from '../../../model/board';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  imports: [ThemeToggleComponent, BoardComponent, CreateNewBoardComponent, NgClass],
})
export class SidebarComponent {
  constructor(
    public themeToggleService: ThemeToggleService,
    private dataService: DataService,
    public currentBoard:CurrentBoardService
  ) {}

  boards :Board[] = []

  getFirstBoardColor(): boolean {
    let isFirstBoard = false;
    this.currentBoard.currentBoardName$.subscribe(currentBoardName => {
      isFirstBoard = currentBoardName === '';
    });
    return isFirstBoard;
  }

  ngOnInit(){
    this.dataService.ngOnInit();
    this.boards = this.dataService.getBoards();
  }
  
}
