import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detailmovie',
  templateUrl: './detailmovie.component.html',
  styleUrl: './detailmovie.component.scss'
})
export class DetailmovieComponent {

  @Input() currentMovie : any

}
