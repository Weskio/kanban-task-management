import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-dashboard-frame',
    standalone: true,
    templateUrl: './dashboard-frame.component.html',
    styleUrl: './dashboard-frame.component.css',
    imports: [HeaderComponent]
})
export class DashboardFrameComponent {

}
