import { Component } from '@angular/core';
import { ModalToggleService } from '../../../controller/modal-toggle.service';

@Component({
  selector: 'app-create-new-board',
  standalone: true,
  imports: [],
  templateUrl: './create-new-board.component.html',
  styleUrl: './create-new-board.component.css'
})
export class CreateNewBoardComponent {

  constructor(public modalToggleService: ModalToggleService){}

}
