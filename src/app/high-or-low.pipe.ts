import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highOrLow'
})
export class HighOrLowPipe implements PipeTransform {

  transform(value:number): string {
    if(value>1000)
    {
      return `high`;
    }
    else{
      return `Low`;
    }

  }

}
