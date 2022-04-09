import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timelapse'
})
export class TimelapsePipe implements PipeTransform {

  transform(value: any): any {    
    let today:Date = new Date(); 
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference1 = Math.abs(value - todayWithNoTime) 
    const secondsInDay = 86400; 
    var dateDifference1Seconds = dateDifference1*0.001; 
    var timelapse = dateDifference1Seconds/secondsInDay;

      return (timelapse +  " days have passed since this quote was submitted");
    
  } 

}
