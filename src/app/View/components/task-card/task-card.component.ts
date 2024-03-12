import { Component, Input } from '@angular/core';
import { ModalToggleService } from '../../../controller/modal-toggle.service';
import { ThemeToggleService } from '../../../controller/theme-toggle.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  constructor( public modalToggleService: ModalToggleService, public themeToggleService: ThemeToggleService
    ) { }

    @Input() taskName!:string
    @Input() subTasksTotal!:number
    @Input() subTasksDone!:number
    @Input() subTasks!:[]
    @Input() taskDesc!:string
    @Input() subtaskName!:string[]


}
