import { Component } from '@angular/core';
import { ModalToggleService } from '../../../controller/modal-toggle.service';

@Component({
  selector: 'app-edit-board-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './edit-board-dropdown.component.html',
  styleUrl: './edit-board-dropdown.component.css'
})
export class EditBoardDropdownComponent {

  constructor(public modalToggleService: ModalToggleService) { }
}
