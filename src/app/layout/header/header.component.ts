import { Component, Signal, output } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen: boolean = false;
  onMenu = output<boolean>(); 

  constructor(public authService: AuthService) {
    
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.onMenu.emit(this.menuOpen);
  }
}
