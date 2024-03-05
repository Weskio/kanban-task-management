import { Component, Input } from '@angular/core';
import { DropdownToggleService } from '../../../controller/dropdown-toggle.service';
import { ThemeToggleService } from '../../../controller/theme-toggle.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-task-dropdown',
  standalone: true,
  imports: [NgClass],
  templateUrl: './task-dropdown.component.html',
  styleUrl: './task-dropdown.component.css'
})
export class TaskDropdownComponent {
  @Input() label:string = ''

  constructor(public dropdownToggleService: DropdownToggleService, public themeToggleService: ThemeToggleService ){}
}
