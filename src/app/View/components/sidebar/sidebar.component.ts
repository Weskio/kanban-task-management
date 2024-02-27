import { Component } from '@angular/core';
import { ThemeToggleComponent } from "../theme-toggle/theme-toggle.component";
import { AddBoardComponent } from "../add-board/add-board.component";
import { BoardComponent } from "../board/board.component";

@Component({
    selector: 'app-sidebar',
    standalone: true,
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css',
    imports: [ThemeToggleComponent, AddBoardComponent, BoardComponent]
})
export class SidebarComponent {

}
