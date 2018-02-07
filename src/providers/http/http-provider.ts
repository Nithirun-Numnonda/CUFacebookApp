import { Platform } from 'ionic-angular';
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
  serverIP: string = 'http://103.233.194.200:8080/';
  // private graphUrl = 'https://graph.facebook.com/';
  // private graphQuery = `date_format=U&fields=posts{from,created_time,message,attachments}`;

  constructor(public http: Http, private facebook: Facebook, private platform: Platform) {
    console.log('Hello HttpProvider Provider');
    this.init();
  }

  init() {
    this.facebook.browserInit(this.APP_ID, "v2.12");
  }
  //get user token from facebook
  getToken() {
    if (this.platform.is('cordova')) {
      this.facebook.getAccessToken().then(value => { this.accessToken = value });
      console.log("access_token:"+this.accessToken);
    }
    else {
      //for test in computer
      this.accessToken = 'EAACEdEose0cBAOmWa0HUvHe8zn58meY0eevY269bkZA81xpyVYv06bWOSk9A7hae4ZBcOwN9opX2jSuZA57V4omfKF0GJlBJV567muySGfn1ZAEi528muZBFJZAAZCqsFM0DUi4ACYC1modZCyVfr84rZB1ytIRxVdOeijDz5mQpUjUKaik4IOoIYWLwLb56HBrOT9OQdDO2riAZDZD';
    }
  }
  //set url for http request from python server
  setHttpRequest(type, top, hour, day, month, year) {

    //this.getToken();

    //console.log("token: " + this.accessToken);
    var request = this.serverIP + type;
    if (type == 'dashboard') {
      request += "?since=-";
    }
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
    if (type == 'dashboard')
      request += "&until=-0 year";
    if (top != '') {
      request += '&top=' + top;
    }

    console.log("req: " + request);
    return request;
  }

  getFacebookData(top, hour, day, month, year) {
    //set header to authorize with access token
    this.getToken();
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
    // let headers = new Headers();
    // this.getToken();
    // headers.append('access_token', this.accessToken);
    let uid = '878312008845622';
    // // this.facebook.api('/me', ['user_posts', 'user_friends', 'user_likes']).then(
    // //   (userData) => {
    // //     console.log(JSON.stringify(userData));
    // //     uid = userData.id;
    // //   }, (err) => {
    // //     if (err == 'cordova_not_available')
    // //       uid = '878312008845622';
    // //     console.log(JSON.stringify(err));
    // //     //reject(err);

    // //   });

    // this.http.get(
    //   this.setHttpRequest('likes', '', '0', '0', '0', '0'), { headers: headers })
    //   .map(res => res.json());
    let headers = new Headers();
    this.getToken();
    headers.append('access_token', this.accessToken);
    // return this.http.get(
    //   this.setHttpRequest("newsfeed/" + uid, '', '0', '0', '0', '0'), { headers: headers })
    //   .map(res => res.json());
      return this.http.get(
        this.setHttpRequest("newsfeed/"+uid.toString(), '', '0', '0', '0', '0'), { headers: headers })
        .map(res => res.json());
  }
  getCover(uid: string) {
    this.facebook.api('/' + uid + '?field=cover', ['user_posts']).then(
      (coverData) => {

        return coverData.source;

      }, (err) => {
        console.log(JSON.stringify(err));
        //reject(err);

      });
    return null;
  }
  getContext(uid: string) {
    this.facebook.api('/' + uid + '?field=context', ['user_posts']).then(
      (contextData) => {
        console.log(JSON.stringify(contextData));
        return contextData.context;
      }, (err) => {
        console.log(JSON.stringify(err));
        //reject(err);

      });
    return null;
  }

}
