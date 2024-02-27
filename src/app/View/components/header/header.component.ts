import { Component, HostListener } from '@angular/core';
import { ShowSidebarService } from '../../../controller/show-sidebar.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(public showsidebar:ShowSidebarService) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.showsidebar.setInitialVisibility();
  }
}
