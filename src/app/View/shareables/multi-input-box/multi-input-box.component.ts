import { Component, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { ThemeToggleService } from '../../../controller/theme-toggle.service';
import { NgClass } from '@angular/common';
import { FormBuilder, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-multi-input-box',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './multi-input-box.component.html',
  styleUrl: './multi-input-box.component.css'
})
export class MultiInputBoxComponent {
constructor( public themeToggleService: ThemeToggleService, private fb: FormBuilder){}
 
addBoardColumnForm = this.fb.group({
  columnName: ['', Validators.required],
});


  @Input() label:string=''
  @Input() buttonName:string = ''
  @Input() isDeleteSvgShown?:boolean

  inputBoxes: string[] =[""];
 
  addInputBox() {
    if(this.inputBoxes.length < 6){
      this.inputBoxes.push("");
    }
    else{
      Swal.fire({
         position: 'top-end',
         icon: 'warning',
         title: 'Oops...',
         text: `oops! you can only add 6 ${this.label.toLocaleLowerCase()}`,
         showConfirmButton: false,
         timer: 2000,
       });
    }
  }

  deleteInputBox(index: number){
    this.inputBoxes.splice(index, 1)
  }
}
