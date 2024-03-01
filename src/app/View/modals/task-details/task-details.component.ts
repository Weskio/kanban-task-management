import { Component } from '@angular/core';
import { TaskDropdownComponent } from "../../shareables/task-dropdown/task-dropdown.component";

@Component({
    selector: 'app-task-details',
    standalone: true,
    templateUrl: './task-details.component.html',
    styleUrl: './task-details.component.css',
    imports: [TaskDropdownComponent]
})
export class TaskDetailsComponent {

}
