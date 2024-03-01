import { Component } from '@angular/core';
import { ModalToggleService } from '../../../controller/modal-toggle.service';

@Component({
  selector: 'app-new-column',
  standalone: true,
  imports: [],
  templateUrl: './new-column.component.html',
  styleUrl: './new-column.component.css'
})
export class NewColumnComponent {

  constructor(public modalToggleService: ModalToggleService) { }

}
