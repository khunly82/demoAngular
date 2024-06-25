import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent {
  @Input()
  nom: string = 'Khun';

  @Input()
  dateDeNaissance: string = '1982-05-06T12:30:25';

  euro: number = 42.5

  nomPlusCoeurs(){
    return  '♥' + this.nom + '♥'
  }
}
