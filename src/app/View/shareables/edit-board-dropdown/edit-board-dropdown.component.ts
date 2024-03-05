import { Component } from '@angular/core';
import { ModalToggleService } from '../../../controller/modal-toggle.service';
import { ThemeToggleService } from '../../../controller/theme-toggle.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-edit-board-dropdown',
  standalone: true,
  imports: [NgClass],
  templateUrl: './edit-board-dropdown.component.html',
  styleUrl: './edit-board-dropdown.component.css'
})
export class EditBoardDropdownComponent {

  constructor(public modalToggleService: ModalToggleService, public themeToggleService: ThemeToggleService) { }
}
