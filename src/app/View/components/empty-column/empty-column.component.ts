import { Component } from '@angular/core';
import { ThemeToggleService } from '../../../controller/theme-toggle.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-empty-column',
  standalone: true,
  imports: [NgClass],
  templateUrl: './empty-column.component.html',
  styleUrl: './empty-column.component.css'
})
export class EmptyColumnComponent {
  constructor( public themeToggleService: ThemeToggleService) { }
}
