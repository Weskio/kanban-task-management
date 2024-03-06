import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeToggleService {
  darkTheme: boolean=true
  lightTheme: boolean= false

  constructor() {
    // Call the function to check and set the theme from local storage during service initialization
    this.localStorageTheme();
  }

  localStorageTheme() {
    // Use 'theme' instead of 'key' in localStorage.getItem
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      this.darkTheme = true;
      this.lightTheme = false;
    } else if (storedTheme === 'light') {
      this.darkTheme = false;
      this.lightTheme = true;
    } else {
      // If there's no theme in local storage, set a default theme
      this.darkTheme = true;
      this.lightTheme = false;
      localStorage.setItem('theme', 'dark');
    }
  }

  toggleTheme() {
    // Toggle the themes and update the local storage accordingly
    this.darkTheme = !this.darkTheme;
    this.lightTheme = !this.lightTheme;
    localStorage.setItem('theme', this.darkTheme ? 'dark' : 'light');
  }
}
