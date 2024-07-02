import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: Date): number {
    console.log(typeof(value))
    const today = new Date();
    let age = today.getFullYear() - value.getFullYear();
    const copy = value;
    copy.setFullYear(today.getFullYear());
    if (copy > today) {
      age--;
    }
    return age;
  }

}
