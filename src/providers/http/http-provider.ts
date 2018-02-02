import { Facebook } from '@ionic-native/facebook';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {
  //initial
  APP_ID: number = 1894102183937616;
  accessToken: string;
  // private graphUrl = 'https://graph.facebook.com/';
  // private graphQuery = `date_format=U&fields=posts{from,created_time,message,attachments}`;

  constructor(public http: Http, private facebook: Facebook) {
    console.log('Hello HttpProvider Provider');
    //for test in computer
    this.accessToken = 'EAACEdEose0cBAKZB4xS0xnZBYcrFya14Gv4EBHs2XbRRgRuLh1iMrDnHtcqpqxuf2CqXlTYDZCaUgz3B7Lf1cI1vZBtL6HzjF73ztW7iscxZBDa0Ozd0J5GzSATSI6qm4ONtnvjRSIo7JLQbf7UooAarSBkMpmF7PYxSyL2OWiQDQ9wJmDfbgYt4qqZA2cS4Gvh0ZAFEsiYcQZDZD';
  }

  init() {
    this.facebook.browserInit(this.APP_ID, "v2.11");
  }
  //get user token from facebook
  getToken() {
    this.facebook.getAccessToken().then(value => { this.accessToken = value });
  }
  //set url for http request from python server
  setHttpRequest(type, top, hour, day, month, year) {
    // this.getToken();
    console.log("token: " + this.accessToken);
    var request = 'http://103.233.194.200:8080/' + type + '?since=-';
    if (year != '0') {
      request += year + '%20years%20';
    }
    if (month != '0') {
      request += month + '%20month%20';
    }
    if (day != '0') {
      request += day + '%20days%20';
    }
    if (hour != '0') {
      request += hour + '%20hour%20';
    }
    request+="&until=-0 year";
    if (top != '') {
      request += '&top=' + top;
    }

    console.log("req: " + request);
    return request;
  }

  getFacebookData(top, hour, day, month, year) {
    //set header to authorize with access token
    let headers = new Headers();
      headers.append('access_token', this.accessToken);
      return this.http.get(
        this.setHttpRequest('dashboard', top, hour, day, month, year), { headers: headers })
        .map(res => res.json());
  }
  // getCommentsData(top, hour, day, month, year) {
  //   let headers = new Headers();
  //   headers.append('access_token', this.accessToken);
  //   return this.http.get(
  //     this.setHttpRequest('comments', top, hour, day, month, year), { headers: headers })
  //     .map(res => res.json());
  // }

  // getLikesData(top, hour, day, month, year) {
  //   let headers = new Headers();
  //   headers.append('access_token', this.accessToken);
  //   return this.http.get(
  //     this.setHttpRequest('reactions', top, hour, day, month, year))
  //     .map(res => res.json());
  // }

  //feature for newfeed??
  getPosts() {
    
    console.log(this.accessToken);
    let p = new Promise((resolve, reject) => {
      this.facebook.api('/10208259982656709?fields=feed', ['user_posts', 'user_friends', 'user_likes']).then(
        (userData) => {
          alert(JSON.stringify(userData));
          resolve(userData);
        }, (err) => {
          if(err == 'cordova_not_available')
            return null;
          alert(JSON.stringify(err));
          reject(err);
          
        });
    });
    return p;

  }

}
