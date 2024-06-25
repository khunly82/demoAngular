import { Component, Signal, output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen: boolean = false;
  onMenu = output<boolean>(); 

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.onMenu.emit(this.menuOpen);
  }
}
