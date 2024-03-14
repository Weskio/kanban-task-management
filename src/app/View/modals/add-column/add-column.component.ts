import { Component, Input } from '@angular/core';
import { ModalToggleService } from '../../../controller/modal-toggle.service';
import { ThemeToggleService } from '../../../controller/theme-toggle.service';
import { NgClass } from '@angular/common';
import { CrudService } from '../../../controller/crud.service';
import {
  FormArray,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-column',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './add-column.component.html',
  styleUrl: './add-column.component.css',
})
export class AddColumnComponent {
  @Input() formTitle: string = '';
  @Input() columnName!: string;

  constructor(
    public modalToggleService: ModalToggleService,
    public themeToggleService: ThemeToggleService,
    public crudService: CrudService,
    private fb: FormBuilder
  ) {
  }

  addColumnForm = this.fb.group({
    columnName: ['', Validators.required],
  });

  addColumn(){
   let value = this.addColumnForm.value
   this.crudService.addColumn(value.columnName)
  }

  ngOnInit() {
    this.crudService.ngOnInit();
  }
}
