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

    var end = Date.now();
    var start = new Date(date).getTime();
    var diff = new Date(end-start);
    var diff_hours = diff.getHours();
    var diff_mins = diff.getMinutes();
    var diff_days = diff.getDay();
    if(diff_days >= 1){
      return new Date(date).toDateString();
    }
    else if(diff_hours>=2){
      var time = String(diff_hours) +' hrs';
      return time;
    }
    else if(diff_hours == 1) {
      var time = String(diff_hours) +' hr';
      return time;
    }
    else if(diff_mins>=2){
      var time = String(diff_mins) +' mins';
      return time;
    }
    else if(diff_mins==1){
      var time = String(diff_mins) +' min';
      return time;
    }
    else if(diff_mins<1){
      var time = 'Just now';
      return time;
    }

  }


}
