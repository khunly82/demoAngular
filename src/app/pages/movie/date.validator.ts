import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function validateDate() : ValidatorFn {
  return (control : AbstractControl) : ValidationErrors | null => {
    let date : Date = new Date(control.value)
    if(!control.touched) return null
    if(date.getFullYear() < 1977) return {myerror : 'Le cinéma n\'existait pas avant Star Wars'}
    return null
  }
}
