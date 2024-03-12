import { Component, Input } from '@angular/core';
import { DropdownToggleService } from '../../../controller/dropdown-toggle.service';
import { ThemeToggleService } from '../../../controller/theme-toggle.service';
import { NgClass } from '@angular/common';
import { DataService } from '../../../controller/data.service';

@Component({
  selector: 'app-task-dropdown',
  standalone: true,
  imports: [NgClass],
  templateUrl: './task-dropdown.component.html',
  styleUrl: './task-dropdown.component.css',
})
export class TaskDropdownComponent {
  @Input() label: string = '';
  columns:any

  constructor(
    public dropdownToggleService: DropdownToggleService,
    public themeToggleService: ThemeToggleService, 
    public dataService: DataService
  ) {}

  ngOnInit() {
    this.dataService.getPColumns().subscribe((data: any) => {
      this.columns = data;
    });
  }
}
