import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TimeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TimeProvider {

  constructor(public http: Http) {

    console.log('Hello TimeProvider Provider');
  }

  getTime(date) {
    return new Date(date).toDateString();;

  }
  getCurrentTime(){
    return Date.now();
  }
  getDiffTime (date:Date){
    var time;
    var end = Date.now();
    var start = new Date(date).getTime();
    var diff = end-start;
    var diff_hours = Math.floor(diff / 3600000); // 1 Hour = 36000 Milliseconds
    var diff_mins = Math.floor((diff % 3600000) / 60000); // 1 Minutes = 60000 Milliseconds
    var diff_days = Math.floor(diff_hours/24);
    console.log('diff ='+new Date(diff));
    console.log('end ='+new Date(end));
    console.log('start ='+new Date(start));

    // console.log(diff);
    // console.log(diff.getFullYear);
    // console.log(diff_days);
    // console.log(diff_mins);
    // console.log(diff_hours);


    if(diff_days >= 1){
      return new Date(date).toDateString();
    }
    else if(diff_hours>=2){
      time = String(diff_hours) +' hrs';
      return time;
    }
    else if(diff_hours == 1) {
      time = String(diff_hours) +' hr';
      return time;
    }
    else if(diff_mins>=2){
      time = String(diff_mins) +' mins';
      return time;
    }
    else if(diff_mins==1){
      time = String(diff_mins) +' min';
      return time;
    }
    else if(diff_mins<1){
      time = 'Just now';
      return time;
    }

  }


}
