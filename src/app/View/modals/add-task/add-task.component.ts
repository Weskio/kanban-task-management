import { Component } from '@angular/core';
import { ModalToggleService } from '../../../controller/modal-toggle.service';
import { DropdownToggleService } from '../../../controller/dropdown-toggle.service';
import { TaskDropdownComponent } from '../../shareables/task-dropdown/task-dropdown.component';
import { MultiInputBoxComponent } from '../../shareables/multi-input-box/multi-input-box.component';
import { ThemeToggleService } from '../../../controller/theme-toggle.service';
import { NgClass } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CrudService } from '../../../controller/crud.service';
import { Task } from '../../../model/task';

@Component({
  selector: 'app-add-task',
  standalone: true,
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
  imports: [
    TaskDropdownComponent,
    MultiInputBoxComponent,
    NgClass,
    ReactiveFormsModule,
  ],
})
export class AddTaskComponent {
  constructor(
    public modalToggleService: ModalToggleService,
    public dropdownToggleService: DropdownToggleService,
    public themeToggleService: ThemeToggleService,
    private fb: FormBuilder,
    private crudService: CrudService
  ) {}

  addTaskForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  });

  addTask() {
   console.log(this.addTaskForm.value);
    const task: Task = this.addTaskForm.value;
    this.crudService.addTask(task);
  }
}
