import { Component } from '@angular/core';
import { ModalToggleService } from '../../../controller/modal-toggle.service';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  constructor( public modalToggleService: ModalToggleService
    ) { }

}
