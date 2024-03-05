import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeToggleService {

  darkTheme:boolean = true
  lightTheme:boolean = false

  toggleTheme(){
   this.darkTheme = !this.darkTheme
   this.lightTheme = !this.lightTheme
  }

  constructor() { }
}
