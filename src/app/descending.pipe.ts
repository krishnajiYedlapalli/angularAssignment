import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descending'
})
export class DescendingPipe implements PipeTransform {

  transform(value: number[]): number[] 
  {
     return  value.sort(function(a,b) {
      return b-a;
    });   
  }

}
