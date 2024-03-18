import { Component, Input } from '@angular/core';
import { TaskDropdownComponent } from '../../shareables/task-dropdown/task-dropdown.component';
import { ModalToggleService } from '../../../controller/modal-toggle.service';
import { ThemeToggleService } from '../../../controller/theme-toggle.service';
import { NgClass } from '@angular/common';
import { CrudService } from '../../../controller/crud.service';

@Component({
  selector: 'app-task-details',
  standalone: true,
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css',
  imports: [TaskDropdownComponent, NgClass],
})
export class TaskDetailsComponent {
  constructor(
    public modalToggleService: ModalToggleService,
    public themeToggleService: ThemeToggleService,
    public crudService: CrudService
  ) {}

  @Input() taskName!: string;
  @Input() subTasks!: [];
  @Input() taskDesc!: string;
  @Input() subtaskName!: string[];
  @Input() taskColumn!: string;

  isEditDropdownShown: boolean = false;

  editDropdownToggle() {
    this.isEditDropdownShown = !this.isEditDropdownShown;
  }
}
