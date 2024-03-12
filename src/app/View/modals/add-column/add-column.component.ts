import { Component, Input } from '@angular/core';
import { ModalToggleService } from '../../../controller/modal-toggle.service';
import { ThemeToggleService } from '../../../controller/theme-toggle.service';
import { NgClass } from '@angular/common';
import { CurrentBoardService } from '../../../controller/current-board.service';
import { DataService } from '../../../controller/data.service';
import { CrudService } from '../../../controller/crud.service';

@Component({
  selector: 'app-add-column',
  standalone: true,
  imports: [NgClass],
  templateUrl: './add-column.component.html',
  styleUrl: './add-column.component.css'
})
export class AddColumnComponent {

  @Input() formTitle: string =''
  @Input() columnName!: string
  columns: any

  constructor(
    public modalToggleService: ModalToggleService,
    public themeToggleService: ThemeToggleService,
    public currentBoard: CurrentBoardService, 
    private dataService: DataService, 
    public crudService: CrudService
    ) { }

    initialBoardName = this.dataService.getBoards()[0].name
    getBoardName() {
      return this.currentBoard.currentBoardName$.value
    }

    ngOnInit() {
      this.dataService.getPColumns().subscribe((data: any) => {
        this.columns = data;
      });
    }

}
