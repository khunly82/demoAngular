import { Component, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import { MarvelCharactersService } from '../../services/marvel-characters.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-marvel-characters',
  templateUrl: './marvel-characters.component.html',
  styleUrl: './marvel-characters.component.scss'
})
export class MarvelCharactersComponent {

  page: number = 1;

  // création d'un signal avec la valeur null
  characters: WritableSignal<any> = signal(null);

  constructor (private marvelCharactersService: MarvelCharactersService) {
    this.loadData();
  }

  changePage() {
    this.loadData();
  }

  loadData() {
    // connection à l'api de marvel
    this.marvelCharactersService.getDatas(this.page).subscribe(data => {
      // modification du signal avec les données de Marvel
      this.characters.set(data);
    });
  }
}
