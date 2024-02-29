import { Component, Input } from '@angular/core';

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

  inputBoxes: number[] =[1];

  addInputBox() {
    this.inputBoxes.push(2);
  }

  deleteInputBox(index: number){
    this.inputBoxes.splice(index, 1)
  }


}
