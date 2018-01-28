import { Facebook } from '@ionic-native/facebook';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {
  APP_ID: number = 1894102183937616;
  accessToken: string;
  private graphUrl = 'https://graph.facebook.com/';
  private graphQuery = `date_format=U&fields=posts{from,created_time,message,attachments}`;

  constructor(public http: Http, private facebook:Facebook) {
    console.log('Hello HttpProvider Provider');
    this.accessToken = 'EAACEdEose0cBAOb0M0hWswgsYDZAGE7Qdgt0DJyFmuZCldiCUF3HLuNvfONZCTyeRwNpZA3XjdFy4II5ZAG3bb5YpVxIyBW21YDzhFvALEENmCJ4oMwPjTZActX1T2U2wJ4Ci3B9LWZCEKh49RRYaRz8qpGax4T5uZCQDAtfLCtwBLJTYri5cyHDX8u0WZBLjfaBYbefKC7JwdgZDZD';
  }
  init() {
    this.facebook.browserInit(this.APP_ID, "v2.10");
  }

  getToken() {
    this.facebook.getAccessToken().then(value => { this.accessToken = value });
  }
  setHttpRequest(type, top, hour, day, month, year) {
    // this.getToken();
    console.log("token: " + this.accessToken);
    var request = 'http://localhost:8080/' + type + '?since=-';
    if (year != '0') {
      request += year + '%20years%20';
    }
    if (month != '0') {
      request += month + '%20months%20';
    }
    if (day != '0') {
      request += day + '%20days%20';
    }
    if (hour != '0') {
      request += hour + '%20hour%20';
    }
    if (top != '') {
      request += '&top=' + top;
    }
    request += '&access_token=' + this.accessToken;
    console.log("req: " + request);
    return request;
  }

  getCommentsData(top, hour, day, month, year) {
    return this.http.get(
      this.setHttpRequest('comments', top, hour, day, month, year))
      .map(res => res.json());
  }
  
  getLikesData(top, hour, day, month, year) {
    return this.http.get(
      this.setHttpRequest('reactions', top, hour, day, month, year))
      .map(res => res.json());
  }
  getPosts(){
    console.log(this.accessToken);
    let p = new Promise((resolve, reject) => {
    this.facebook.api('/10208259982656709?fields=feed', ['user_posts','user_friends','user_likes']).then(
      (userData) => {
          alert(JSON.stringify(userData));
          resolve(userData);
      },(err) => {
          alert(JSON.stringify(err));
          reject(err);
      });
    });
    
   }

}
