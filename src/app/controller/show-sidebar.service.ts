import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShowSidebarService {
  constructor() {}

  isSidebarShown: boolean = true;

  setInitialVisibility() {
    const screenWidth = window.innerWidth;
    this.isSidebarShown = screenWidth <= 1024;
  }

  toggleSidebar() {
    this.isSidebarShown = !this.isSidebarShown;
  }
}
