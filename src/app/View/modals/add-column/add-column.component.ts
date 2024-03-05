import { Component, Input } from '@angular/core';
import { ModalToggleService } from '../../../controller/modal-toggle.service';
import { ThemeToggleService } from '../../../controller/theme-toggle.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-add-column',
  standalone: true,
  imports: [NgClass],
  templateUrl: './add-column.component.html',
  styleUrl: './add-column.component.css'
})
export class AddColumnComponent {

  @Input() formTitle: string =''

  constructor(
    public modalToggleService: ModalToggleService,
    public themeToggleService: ThemeToggleService
    ) { }

}
