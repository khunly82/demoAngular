import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function validateLength(length : number) : ValidatorFn {
  return (control : AbstractControl) : ValidationErrors | null => {

    if(control.value == null) return null
    if(!control.touched) return null
    if(control.value.length < length) return {myerror : 'string trop court'}
    if(control.value.length == length) return {myerror : 'string à la bonne taille'}

    return null
  }
}
