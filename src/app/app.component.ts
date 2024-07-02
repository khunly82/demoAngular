import { Component, signal } from '@angular/core';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  personnes: Array<any> = [
    { id: 1, nom: 'Steve', dateN: '1983-06-28' },
    { id: 2, nom: 'Khun', dateN: '1982-05-06' },
    { id: 3, nom: 'Mike', dateN: '1982-03-20' },
    { id: 4, nom: 'Samuel', dateN: '2000-01-01' },
  ];

  menuOpen: boolean = false;

  constructor(
    public loaderService: LoaderService
  ) {
    // setTimeout(() => {
    //   this.personnes = [
    //     { id: 5, nom: 'Henry', dateN: '1983-06-28' },
    //     { id: 2, nom: 'Khun', dateN: '1982-05-06' },
    //     { id: 6, nom: 'John', dateN: '1982-03-20' },
    //     { id: 4, nom: 'Samuel', dateN: '2000-01-01' },
    //   ];
    // }, 5000)
  }

  // onClick() {
  //   this.personnes.push({ id: 42, nom: 'Simon', dateN: '2023-02-02' })
  // }

}
