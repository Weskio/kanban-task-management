import { Component } from '@angular/core';
import { ModalToggleService } from '../../../controller/modal-toggle.service';
import { DropdownToggleService } from '../../../controller/dropdown-toggle.service';
import { MultiInputBoxComponent } from "../../shareables/multi-input-box/multi-input-box.component";
import { ThemeToggleService } from '../../../controller/theme-toggle.service';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-add-board',
    standalone: true,
    templateUrl: './add-board.component.html',
    styleUrl: './add-board.component.css',
    imports: [MultiInputBoxComponent, NgClass]
})
export class AddBoardComponent {

  constructor(public modalToggleService: ModalToggleService, public themeToggleService: ThemeToggleService){}

}
