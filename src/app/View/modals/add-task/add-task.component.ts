import { Component } from '@angular/core';
import { ModalToggleService } from '../../../controller/modal-toggle.service';
import { DropdownToggleService } from '../../../controller/dropdown-toggle.service';
import { TaskDropdownComponent } from '../../shareables/task-dropdown/task-dropdown.component';
import { MultiInputBoxComponent } from '../../shareables/multi-input-box/multi-input-box.component';
import { ThemeToggleService } from '../../../controller/theme-toggle.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
  imports: [TaskDropdownComponent, MultiInputBoxComponent, NgClass],
})
export class AddTaskComponent {
  constructor(
    public modalToggleService: ModalToggleService,
    public dropdownToggleService: DropdownToggleService,
    public themeToggleService: ThemeToggleService
  ) {}
}
