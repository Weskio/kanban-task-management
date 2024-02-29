import { Component, Input } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-multi-input-box',
  standalone: true,
  imports: [],
  templateUrl: './multi-input-box.component.html',
  styleUrl: './multi-input-box.component.css'
})
export class MultiInputBoxComponent {
  @Input() label:string=''
  @Input() buttonName:string = ''
  @Input() isDeleteSvgShown?:boolean

  inputBoxes: number[] =[1];

  addInputBox() {
    if(this.inputBoxes.length < 6){
      this.inputBoxes.push(2);
    }
    else{
      //alert('You can only add 6 input boxes')
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
