import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ShowSidebarComponent } from '../show-sidebar/show-sidebar.component';
import { NgClass } from '@angular/common';
import { ShowSidebarService } from '../../../controller/show-sidebar.service';

@Component({
  selector: 'app-dashboard-frame',
  standalone: true,
  templateUrl: './dashboard-frame.component.html',
  styleUrl: './dashboard-frame.component.css',
  imports: [HeaderComponent, SidebarComponent, ShowSidebarComponent, NgClass],
})
export class DashboardFrameComponent {
  constructor(public showsidebarservice: ShowSidebarService) {}
}
