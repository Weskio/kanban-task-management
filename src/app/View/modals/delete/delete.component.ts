import { Component } from '@angular/core';
import { ThemeToggleService } from '../../../controller/theme-toggle.service';
import { NgClass } from '@angular/common';
import { ModalToggleService } from '../../../controller/modal-toggle.service';
import { DataService } from '../../../controller/data.service';
import { CrudService } from '../../../controller/crud.service';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [NgClass],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css',
})
export class DeleteComponent {
  constructor(
    public themeToggleService: ThemeToggleService,
    public modalToggleService: ModalToggleService,
    public dataService: DataService,
    public crudService: CrudService
  ) {}
}
