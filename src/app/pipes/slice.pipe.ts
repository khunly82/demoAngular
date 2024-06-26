import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice',
  pure : false
})
export class SlicePipe implements PipeTransform {

  transform(value: Array<any>, nb : number): Array<any> {
    if(nb == 0) return value
    return value.slice(0, nb)
  }

}
