import { Component } from '@angular/core';

@Component({
  selector: 'app-listmovie',
  templateUrl: './listmovie.component.html',
  styleUrl: './listmovie.component.scss'
})
export class ListmovieComponent {
  listMovie : Array<any> = []

  selectedMovie : any

  selectMovie(movie : any){
    this.selectedMovie = movie
  }

  getNewMovieFromForm(film : any) {
    this.listMovie.push(film)
  }
}
