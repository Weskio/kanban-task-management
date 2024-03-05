import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MultiInputBoxComponent } from './View/shareables/multi-input-box/multi-input-box.component';
import { ThemeToggleService } from './controller/theme-toggle.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MultiInputBoxComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kanban-task-management';

  constructor(
    public themeToggleService: ThemeToggleService
  ) {}
}
