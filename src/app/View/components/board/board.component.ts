import { Component, Input } from '@angular/core';
import { CurrentBoardService } from '../../../controller/current-board.service';
import { NgClass } from '@angular/common';
import { DataService } from '../../../controller/data.service';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NgClass],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
})
export class BoardComponent {
  @Input() boardName!: string;
  @Input() firstBoardColor!: boolean;

  currentBoardName: string = '';

  constructor(
    public currentBoard: CurrentBoardService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    return this.currentBoard.currentBoardName$.subscribe((name) => {
      this.currentBoardName = name;
    });
  }

  getCurrentBoardName() {
    if (this.currentBoardName !== '') {
      return this.currentBoardName;
    } else {
      return;
    }
  }
}
