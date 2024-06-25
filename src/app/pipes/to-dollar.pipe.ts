import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toDollar'
})
export class ToDollarPipe implements PipeTransform {

  transform(value: number): number {
    return value * 1.07;
  }

}
