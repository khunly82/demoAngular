import { Component, Inject, Input, inject } from '@angular/core';
import { Md5 } from 'ts-md5';


@Component({
  selector: 'app-duree',
  templateUrl: './duree.component.html',
  styleUrl: './duree.component.scss'
})
export class DureeComponent {
  @Input()
  totalesSecondes: number = 3788;

  bd: Date = new Date('1982-05-06');

  constructor(@Inject('myValue') variable: number) {
    console.log(variable)

    const md5 = new Md5();

    console.log(md5.appendStr('42').appendStr('').appendStr('').end())
  }

  afficherDuree() {
    let heures = Math.floor(this.totalesSecondes / 3600).toString().padStart(2, '0');
    let minutes = Math.floor((this.totalesSecondes % 3600) / 60).toString().padStart(2, '0');
    let secondes = (this.totalesSecondes % 60).toString().padStart(2, '0');
    return heures + ':' + minutes + ':' + secondes;
  }
}
