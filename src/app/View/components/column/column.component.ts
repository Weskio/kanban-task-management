import { Component, Input } from '@angular/core';
import { TaskCardComponent } from "../task-card/task-card.component";
import { DataService } from '../../../controller/data.service';

@Component({
    selector: 'app-column',
    standalone: true,
    templateUrl: './column.component.html',
    styleUrl: './column.component.css',
    imports: [TaskCardComponent]
})
export class ColumnComponent {

    @Input() columnName!: string

    constructor(
        private dataService: DataService
    ) { }

    columns = this.dataService.getPColumns()

    

}
