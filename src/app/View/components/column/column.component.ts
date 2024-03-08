import { Component, Input } from '@angular/core';
import { TaskCardComponent } from "../task-card/task-card.component";
import { DataService } from '../../../controller/data.service';
import { CurrentBoardService } from '../../../controller/current-board.service';
import { EmptyColumnComponent } from "../empty-column/empty-column.component";

@Component({
    selector: 'app-column',
    standalone: true,
    templateUrl: './column.component.html',
    styleUrl: './column.component.css',
    imports: [TaskCardComponent, EmptyColumnComponent]
})
export class ColumnComponent {

    @Input() columnName!: string
    @Input() tasks: any
    @Input() taskName!: string

    constructor(public dataService: DataService, private currentBoard: CurrentBoardService) {}
    
      getSubtasksDone(task: any): number {
        return task.subtasks.filter((subtask: any) => subtask.isCompleted === true).length;
      }

      // ngOnInit(){
      //   this.dataService.ngOnInit()
      // }
    

}
