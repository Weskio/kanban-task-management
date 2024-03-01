import { Component } from '@angular/core';
import { TaskDropdownComponent } from "../../shareables/task-dropdown/task-dropdown.component";
import { ModalToggleService } from '../../../controller/modal-toggle.service';

@Component({
    selector: 'app-task-details',
    standalone: true,
    templateUrl: './task-details.component.html',
    styleUrl: './task-details.component.css',
    imports: [TaskDropdownComponent]
})
export class TaskDetailsComponent {

    constructor( public modalToggleService: ModalToggleService
    ) { }
}
