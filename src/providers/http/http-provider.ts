import { Platform, NavController, App } from 'ionic-angular';
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
  uid: string;
  authResponse: any;
  isLogged: boolean;

  // private graphUrl = 'https://graph.facebook.com/';
  // private graphQuery = `date_format=U&fields=posts{from,created_time,message,attachments}`;

  constructor(public http: Http, private facebook: Facebook, private platform: Platform, public app: App) {
    console.log('Hello HttpProvider Provider');

  }

  init() {
    this.facebook.browserInit(this.APP_ID, "v2.12");
  }
  get navCtrl(): NavController {
    return this.app.getActiveNav();
  }
  login() {
    let permissions = new Array<string>();
    //let nav = this.navCtrl;
    permissions = ["public_profile", "user_posts", "user_friends"];

    this.facebook.login(permissions).then((response) => {
      let userId = response.authResponse.userID;
      let params = new Array<string>();

      this.facebook.api("/me?fields=name,gender", params)
        .then(function (profile) {
          profile.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
        })
      console.log(permissions);
      alert('Logged in Successfully!');
      console.log(JSON.stringify(response.authResponse));
      this.authResponse = response.authResponse;
      this.uid = this.authResponse.userId;
      this.isLogged = true;
      this.navCtrl.push('tabsPage');
    }, (error) => {

      if (error == 'cordova_not_available') {
        this.isLogged = true;
        this.navCtrl.push('tabsPage');
        this.uid = "878312008845622";
        console.log(this.uid);
      } else {
        alert("Error: " + JSON.stringify(error));
        console.log(error);
        this.isLogged = false;
      }
    });

    //console.log(this.uid);
  }

  //get user token from facebook
  getToken() {
    if (this.platform.is('cordova')) {
      this.facebook.getAccessToken().then(value => {
        this.accessToken = value;
        console.log(this.accessToken);
      });
    }
    else {
      //for test in computer
      this.accessToken = 'EAACEdEose0cBAPohbJecxyDWO4otsb3yd9ZC3Nh59q9lHQaxbTUChh13bQD9UruSjuY5mLhhB5Uv4X6ZBR9ZAIXNI1KlLTrEf94PyZCUZCUM9if7DiiwD52u9CRPtTaDx5daZCOgb8Ezri0FL8FX7XCaq7pObZCO6dRatFwrZBZBlXE41BIzcirRo3qnQIZCXzgGZBLAyimM1qOnQZDZD';
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
  setLike() {
    this.getToken();
    let headers = new Headers();
    
    headers.append('access_token', this.accessToken);
    this.http.get(
      this.setHttpRequest('likes', '', '0', '0', '0', '0'), { headers: headers })
      .map(res => res.json());
  }


  getPosts() {
    this.getToken();
    let headers = new Headers();
    
    console.log(this.uid);
    console.log(this.accessToken);
    headers.append('access_token', this.accessToken);
    // return this.http.get(
    //   this.setHttpRequest("newsfeed/" + uid, '', '0', '0', '0', '0'), { headers: headers })
    //   .map(res => res.json());
    return this.http.get(
      this.setHttpRequest("newsfeed/878312008845622", '', '0', '0', '0', '0'), { headers: headers })
      .map(res => res.json());
  }
  getCover(uid: string) {
    this.facebook.api('/' + uid.toString() + '?field=cover', ['user_posts']).then(
      (coverData) => {

        return coverData.source;

      }, (err) => {
        console.log(JSON.stringify(err));
        //reject(err);

      });

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
  }

}
