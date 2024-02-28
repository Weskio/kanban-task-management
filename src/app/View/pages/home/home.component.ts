import { Component } from '@angular/core';
import { DataService } from '../../../controller/data.service';
import { DashboardFrameComponent } from '../../components/dashboard-frame/dashboard-frame.component';
import { AddTaskComponent } from "../../modals/add-task/add-task.component";
import { AddColumnComponent } from "../../modals/add-column/add-column.component";
import { AddBoardComponent } from "../../modals/add-board/add-board.component";
import { ModalToggleService } from '../../../controller/modal-toggle.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [DashboardFrameComponent, AddTaskComponent, AddColumnComponent, AddBoardComponent]
})
export class HomeComponent {
  constructor(public modalToggleService: ModalToggleService){}
}
