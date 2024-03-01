import { Component, Input } from '@angular/core';
import { ModalToggleService } from '../../../controller/modal-toggle.service';

@Component({
  selector: 'app-add-column',
  standalone: true,
  imports: [],
  templateUrl: './add-column.component.html',
  styleUrl: './add-column.component.css'
})
export class AddColumnComponent {

  @Input() formTitle: string =''

  constructor(
    public modalToggleService: ModalToggleService
    ) { }

}
