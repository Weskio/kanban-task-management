import { Component } from '@angular/core';
import { TaskDropdownComponent } from "../../shareables/task-dropdown/task-dropdown.component";
import { ModalToggleService } from '../../../controller/modal-toggle.service';
import { ThemeToggleService } from '../../../controller/theme-toggle.service';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-task-details',
    standalone: true,
    templateUrl: './task-details.component.html',
    styleUrl: './task-details.component.css',
    imports: [TaskDropdownComponent, NgClass]
})
export class TaskDetailsComponent {

    constructor( public modalToggleService: ModalToggleService,  public themeToggleService: ThemeToggleService
    ) { }
}
