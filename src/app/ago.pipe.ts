import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'ago'
})
export class AgoPipe implements PipeTransform {

  translateFile: any = {};
  constructor(private translate: TranslateService){}

  transform(value: any, ...args: unknown[]): unknown {

    this.translate.get('years_ago').subscribe(data => {
      this.translateFile.yearsAgo = data;
    });
    this.translate.get('months_ago').subscribe(data => {
      this.translateFile.monthsAgo = data;
    });
    this.translate.get('days_ago').subscribe(data => {
      this.translateFile.daysAgo = data;
    });
    this.translate.get('hours_ago').subscribe(data => {
      this.translateFile.hoursAgo = data;
    });
    this.translate.get('minutes_ago').subscribe(data => {
      this.translateFile.minutesAgo = data;
    });
    this.translate.get('days_ago').subscribe(data => {
      this.translateFile.daysAgo = data;
    });
    
    this.translate.get('year_ago').subscribe(data => {
      this.translateFile.yearAgo = data;
    });
    this.translate.get('month_ago').subscribe(data => {
      this.translateFile.monthsAgo = data;
    });
    this.translate.get('day_ago').subscribe(data => {
      this.translateFile.dayAgo = data;
    });
    this.translate.get('hour_ago').subscribe(data => {
      this.translateFile.hourAgo = data;
    });
    this.translate.get('minute_ago').subscribe(data => {
      this.translateFile.minuteAgo = data;
    });
    this.translate.get('day_ago').subscribe(data => {
      this.translateFile.dayAgo = data;
    });

    const date2 = new Date(value);
    // console.log(date2); // 👉️ Thu Jul 21 2022 09:35:31 GMT+0300
    var seconds = Math.floor((new Date().valueOf() - new Date(date2).valueOf()) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes ago";
    }
    console.log(seconds);
    if(seconds < 0){
      return "0 seconds ago";
    }else{
      return Math.floor(seconds) + " seconds ago";
    }
    
  }
}
