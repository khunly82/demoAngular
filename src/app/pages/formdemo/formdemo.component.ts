import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { validateLength } from '../../validators/validatelength.validator';

@Component({
  selector: 'app-formdemo',
  templateUrl: './formdemo.component.html',
  styleUrl: './formdemo.component.scss'
})
export class FormdemoComponent {

  fg : FormGroup

  constructor(private _builder : FormBuilder){

    this.fg = _builder.group({
      nom : ['Doe', Validators.required, /*Async validators*/],
      prenom : ['Jhon', [Validators.required, validateLength(8)]],
      email : [null, [Validators.required, Validators.email]],
      tel : _builder.array([
            new FormControl(null),
            new FormControl(null)
          ])
    })
  }

  validateForm() {
    console.log(this.fg.value["prenom"])
    console.log(this.fg.value)
  }


  getFormArray() : FormArray {
    return this.fg.get("tel") as FormArray
  }

  addTel() {
    this.getFormArray().push(new FormControl(null))
  }
}
