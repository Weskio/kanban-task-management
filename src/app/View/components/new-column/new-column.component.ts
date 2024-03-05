import { Component } from '@angular/core';
import { ModalToggleService } from '../../../controller/modal-toggle.service';
import { ThemeToggleService } from '../../../controller/theme-toggle.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-new-column',
  standalone: true,
  imports: [NgClass],
  templateUrl: './new-column.component.html',
  styleUrl: './new-column.component.css'
})
export class NewColumnComponent {

  constructor(public modalToggleService: ModalToggleService,  public themeToggleService: ThemeToggleService) { }

}
