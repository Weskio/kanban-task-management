import { Component } from '@angular/core';
import { TaskCardComponent } from "../task-card/task-card.component";

@Component({
    selector: 'app-column',
    standalone: true,
    templateUrl: './column.component.html',
    styleUrl: './column.component.css',
    imports: [TaskCardComponent]
})
export class ColumnComponent {

}
