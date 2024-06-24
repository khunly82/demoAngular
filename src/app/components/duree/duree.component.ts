import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-duree',
  templateUrl: './duree.component.html',
  styleUrl: './duree.component.scss'
})
export class DureeComponent {
  @Input()
  totalesSecondes: number = 3788;

  afficherDuree() {
    let heures = Math.floor(this.totalesSecondes / 3600).toString().padStart(2, '0');
    let minutes = Math.floor((this.totalesSecondes % 3600) / 60).toString().padStart(2, '0');
    let secondes = (this.totalesSecondes % 60).toString().padStart(2, '0');
    return heures + ':' + minutes + ':' + secondes;
  }
}
