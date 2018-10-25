import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ascending'
})
export class AscendingPipe implements PipeTransform {

  transform(value: number[]): number[] 
  {
        return  value.sort(function(a,b){
            return a-b;
          });      
  }

}
