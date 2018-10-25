import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
   name : 'pipes'
})

export class CustomPipe implements PipeTransform {
  
    transform(val : number) : number {
      return (val*val);
   }
}