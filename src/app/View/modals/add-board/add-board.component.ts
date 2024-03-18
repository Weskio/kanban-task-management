import { ChangeDetectorRef, Component } from '@angular/core';
import { ModalToggleService } from '../../../controller/modal-toggle.service';
import { MultiInputBoxComponent } from '../../shareables/multi-input-box/multi-input-box.component';
import { ThemeToggleService } from '../../../controller/theme-toggle.service';
import { NgClass } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../../../controller/data.service';

@Component({
  selector: 'app-add-board',
  standalone: true,
  templateUrl: './add-board.component.html',
  styleUrl: './add-board.component.css',
  imports: [MultiInputBoxComponent, NgClass, ReactiveFormsModule],
})
export class AddBoardComponent {
  constructor(
    public modalToggleService: ModalToggleService,
    public themeToggleService: ThemeToggleService,
    private fb: FormBuilder,
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ) {}

  addBoardForm = this.fb.group({
    name: ['', Validators.required]
  })
  private updateData() {
    this.cdr.detectChanges();
  }


  addBoard(){
    const name = this.addBoardForm.value.name
    this.dataService.addBoard(name)
    this.updateData();
  }

 
}
