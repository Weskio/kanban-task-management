import { Component } from '@angular/core';
import { DataService } from '../../../controller/data.service';
import { DashboardFrameComponent } from '../../components/dashboard-frame/dashboard-frame.component';
import { AddTaskComponent } from '../../modals/add-task/add-task.component';
import { AddColumnComponent } from '../../modals/add-column/add-column.component';
import { AddBoardComponent } from '../../modals/add-board/add-board.component';
import { ModalToggleService } from '../../../controller/modal-toggle.service';
import { EditBoardDropdownComponent } from '../../shareables/edit-board-dropdown/edit-board-dropdown.component';
import { DropdownToggleService } from '../../../controller/dropdown-toggle.service';
import { NewColumnComponent } from '../../components/new-column/new-column.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { ShowSidebarComponent } from '../../components/show-sidebar/show-sidebar.component';
import { ShowSidebarService } from '../../../controller/show-sidebar.service';
import { NgClass } from '@angular/common';
import { TaskCardComponent } from '../../components/task-card/task-card.component';
import { ColumnComponent } from '../../components/column/column.component';
import { TaskDetailsComponent } from '../../modals/task-details/task-details.component';
import { ThemeToggleService } from '../../../controller/theme-toggle.service';
import { CurrentBoardService } from '../../../controller/current-board.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
} from '@angular/cdk/drag-drop';
import { DeleteComponent } from "../../modals/delete/delete.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        DashboardFrameComponent,
        AddTaskComponent,
        AddColumnComponent,
        AddBoardComponent,
        EditBoardDropdownComponent,
        NewColumnComponent,
        SidebarComponent,
        ShowSidebarComponent,
        NgClass,
        TaskCardComponent,
        ColumnComponent,
        TaskDetailsComponent,
        CdkDropList,
        CdkDrag,
        CdkDropListGroup,
        DeleteComponent
    ]
})
export class HomeComponent {
  constructor(
    public showSidebarService: ShowSidebarService,
    public modalToggleService: ModalToggleService,
    public dropdowntoggleservice: DropdownToggleService,
    public themeToggleService: ThemeToggleService,
    private dataService: DataService,
    public currentBoard: CurrentBoardService
  ) {}

  columns: any;

  ngOnInit() {
    this.dataService.ngOnInit();
    this.dataService.getPColumns().subscribe((data: any) => {
      this.columns = data;
    });
  }

  drop(event: CdkDragDrop<any>) {
   this.dataService.drop(event)
  }
}
