import { Component, Input } from '@angular/core';
import { CurrentBoardService } from '../../../controller/current-board.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NgClass],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {

  @Input() boardName!: string
  

  constructor(public currentBoard: CurrentBoardService) { }

}
