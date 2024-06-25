import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversion'
})
export class ConversionPipe implements PipeTransform {

  transform(value: number, symbol: string): number {
    if(symbol === '$') {
      return value * 1.07;
    }
    else if(symbol === '¥') {
      return value * 170.80;
    }
    return NaN;
  }

}
