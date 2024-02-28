import { Component } from '@angular/core';
import { ModalToggleService } from '../../../controller/modal-toggle.service';

@Component({
  selector: 'app-add-board',
  standalone: true,
  imports: [],
  templateUrl: './add-board.component.html',
  styleUrl: './add-board.component.css'
})
export class AddBoardComponent {

  constructor(public modalToggleService: ModalToggleService){}

}
