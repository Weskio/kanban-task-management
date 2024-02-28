import { Component, HostListener } from '@angular/core';
import { ShowSidebarService } from '../../../controller/show-sidebar.service';
import { ModalToggleService } from '../../../controller/modal-toggle.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  constructor(public showsidebar:ShowSidebarService, public modalToggleService: ModalToggleService) {}
  isSmallScreen: boolean = false;

  // @HostListener('window:resize', ['$event'])
  // onResize(event: Event) {
  //   this.showsidebar.setInitialVisibility();
  // }

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
    this.showsidebar.setInitialVisibility();
  }

  checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 1024; 
  }
}
