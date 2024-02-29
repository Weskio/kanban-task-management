import { Component } from '@angular/core';
import { ModalToggleService } from '../../../controller/modal-toggle.service';
import { DropdownToggleService } from '../../../controller/dropdown-toggle.service';
import { MultiInputBoxComponent } from "../../shareables/multi-input-box/multi-input-box.component";

@Component({
    selector: 'app-add-board',
    standalone: true,
    templateUrl: './add-board.component.html',
    styleUrl: './add-board.component.css',
    imports: [MultiInputBoxComponent]
})
export class AddBoardComponent {

  constructor(public modalToggleService: ModalToggleService){}

}
