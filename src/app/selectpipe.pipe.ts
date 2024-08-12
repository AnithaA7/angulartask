import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectpipe',
  
})
export class SelectpipePipe implements PipeTransform {
 
   transform( /*value : number, length : number, width:number,*/  area:number, /* fnumber:number,snumber:number*/): number {
    // return Math.sqrt(value);
    // return length * width;
    return Math.sqrt(area/Math.PI);
    // return Math.max(fnumber , snumber);
  }
}
