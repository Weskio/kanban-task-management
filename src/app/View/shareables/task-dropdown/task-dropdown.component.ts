import { Component, Input } from '@angular/core';
import { DropdownToggleService } from '../../../controller/dropdown-toggle.service';

@Component({
  selector: 'app-task-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './task-dropdown.component.html',
  styleUrl: './task-dropdown.component.css'
})
export class TaskDropdownComponent {
  @Input() label:string = ''

  constructor(public dropdownToggleService: DropdownToggleService){}
}
