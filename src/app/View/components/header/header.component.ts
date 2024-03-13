import { Component, HostListener } from '@angular/core';
import { ShowSidebarService } from '../../../controller/show-sidebar.service';
import { ModalToggleService } from '../../../controller/modal-toggle.service';
import { DropdownToggleService } from '../../../controller/dropdown-toggle.service';
import { NgClass } from '@angular/common';
import { ThemeToggleService } from '../../../controller/theme-toggle.service';
import { CurrentBoardService } from '../../../controller/current-board.service';
import { DataService } from '../../../controller/data.service';
import { CrudService } from '../../../controller/crud.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(
    public showsidebar: ShowSidebarService,
    public modalToggleService: ModalToggleService,
    public dropdowntoggleservice: DropdownToggleService,
    public themeToggleService: ThemeToggleService,
    private currentBoard: CurrentBoardService,
    private dataService: DataService, 
    private crudeService: CrudService
  ) {}
  isSmallScreen: boolean = false;

  // @HostListener('window:resize', ['$event'])
  // onResize(event: Event) {
  //   this.showsidebar.setInitialVisibility();
  // }

  initialBoardName = ''

  ngOnInit(){
   // this.checkScreenSize();
   this.dataService.ngOnInit();
   this.initialBoardName = this.dataService.getBoards()[0].name
  // this.crudeService.ngOnInit();
  }

  getBoardName() {
    return this.currentBoard.currentBoardName$.value
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: any) {
  //   this.checkScreenSize();
  //   this.showsidebar.setInitialVisibility();
  // }

  // checkScreenSize() {
  //   this.isSmallScreen = window.innerWidth < 1024;
  // }
}
