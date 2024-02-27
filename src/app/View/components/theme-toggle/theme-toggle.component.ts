import { Component } from '@angular/core';
import { ShowSidebarService } from '../../../controller/show-sidebar.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css'
})
export class ThemeToggleComponent {

  constructor(public hidesidebar:ShowSidebarService){}

}
