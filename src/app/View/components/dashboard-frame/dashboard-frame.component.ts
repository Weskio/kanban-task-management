import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
    selector: 'app-dashboard-frame',
    standalone: true,
    templateUrl: './dashboard-frame.component.html',
    styleUrl: './dashboard-frame.component.css',
    imports: [HeaderComponent, SidebarComponent]
})
export class DashboardFrameComponent {

}
