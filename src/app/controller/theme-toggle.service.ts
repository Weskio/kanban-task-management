import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeToggleService {
  darkTheme: boolean=true
  lightTheme: boolean= false

  constructor() {
    this.localStorageTheme();
  }

  localStorageTheme() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      this.darkTheme = true;
      this.lightTheme = false;
    } else if (storedTheme === 'light') {
      this.darkTheme = false;
      this.lightTheme = true;
    } else {
      this.darkTheme = true;
      this.lightTheme = false;
      localStorage.setItem('theme', 'dark');
    }
  }

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
    this.lightTheme = !this.lightTheme;
    localStorage.setItem('theme', this.darkTheme ? 'dark' : 'light');
  }
}
