import { Component, output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { validateDate } from '../date.validator';

@Component({
  selector: 'app-createmovie',
  templateUrl: './createmovie.component.html',
  styleUrl: './createmovie.component.scss'
})
export class CreatemovieComponent {
  fg : FormGroup

  newMovieAdd = output<any>()

  constructor(private _builder : FormBuilder){
    this.fg = _builder.group({
      titre : [null, Validators.required],
      synopsis : [null, [Validators.minLength(10)]],
      dateDeSortie : [null, validateDate],
      casting : _builder.array([])
    })
  }

  getCasting() : FormArray {
    return this.fg.get('casting') as FormArray
  }

  addCastingRow() {
    this.getCasting().push(new FormControl())
  }

  validateForm() {
    this.newMovieAdd.emit(this.fg.value)
    this.fg.reset()
    this.getCasting().clear()
  }
}
