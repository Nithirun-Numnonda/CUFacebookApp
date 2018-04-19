import { Observable } from 'rxjs/Rx';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Platform, NavController, App } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Storage } from '@ionic/storage';
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

  constructor(
    public http: Http,
    private facebook: Facebook,
    private platform: Platform,
    public app: App,
    private screenOrientation: ScreenOrientation,
    private storage: Storage
  ) {
    console.log('Hello HttpProvider Provider');
  }

  init() {
    this.facebook.browserInit(this.APP_ID, "v2.11");
  }
  get navCtrl(): NavController {
    return this.app.getActiveNav();
  }
  login() {
    let permissions = new Array<string>();
    //let nav = this.navCtrl;
    permissions = ["public_profile", "user_posts", "user_friends", "user_likes"];

    this.facebook.login(permissions).then((response) => {
      let userId = response.authResponse.userID;
      let params = new Array<string>();

      this.facebook.api("/me?fields=name,gender", params)
        .then(function (profile) {
          profile.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
        })
      console.log(permissions);
      //alert('Logged in Successfully!');
      console.log(JSON.stringify(response.authResponse));
      this.authResponse = response.authResponse;
      this.uid = this.authResponse.userId;
      this.isLogged = true;
      if (this.platform.is('cordova'))
        this.screenOrientation.unlock();
      this.navCtrl.push('tabsPage');
    }, (error) => {
      //for test
      if (error == 'cordova_not_available') {
        this.isLogged = true;
        this.navCtrl.push('tabsPage');
        this.uid = "878312008845622";
        console.log(this.uid);
      } else {
        //alert("Error: " + JSON.stringify(error));
        console.log(error);
        this.isLogged = false;
      }
    });

    //console.log(this.uid);
  }
  // set uid
  setUid(uid) {
    this.uid = uid;
  }
  //get uid
  getUidForTest() {
    if (this.platform.is('cordova')) {
      this.facebook.api("/me", []).then(value => {
        this.uid = value.id;
        //alert(this.uid);
        console.log(value);
      });
    }
    else {
      this.uid = "878312008845622";
    }
  }
  getUid() {
    return this.facebook.api("/me", []);
  }
  getToken() {
    return this.facebook.getAccessToken();
  }
  //get user token from facebook
  getTokenForTest() {
    //for test in computer
    this.accessToken = 'EAACEdEose0cBAPXD4I9Prha4KMDu0Ioac5plLvjZAkKv5HnLIs751Mmkrueoshg39nfNZCpQuHsrlO7ERy4feVRaw2fDsl99Yj2Sy3auWoxINwd4saKhgZBXu3FJZCFcdr8PmvZC57iCbyxqRW1dZCLSDqnca0efaFwZCtXQYGFrt1FSzCh77U3ZCEpHumcrUJ59NwQGfGeKRAZDZD';
  }
  //set url for http request from python server
  setHttpRequest(type, top, hour, day, month, year) {
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

  getDashboard(top, hour, day, month, year): Observable<any> {
    //set header to authorize with access token
    return Observable.fromPromise(this.getToken()).mergeMap((token) => {
      let headers = new Headers();
      headers.append('access_token', token);
      return this.http.get(
        this.setHttpRequest('dashboard', top, hour, day, month, year), { headers: headers }).timeout(90000)
        .map(res => res.json());
    });
  }
  getDashboard2(id,top, hour, day, month, year): Observable<any> {
    //set header to authorize with access token
    return Observable.fromPromise(this.getToken()).mergeMap((token) => {
      let headers = new Headers();
      headers.append('access_token', token);
      return this.http.get(
        this.setHttpRequest('dashboard/page/'+id, top, hour, day, month, year), { headers: headers }).timeout(90000)
        .map(res => res.json());
    });
  }
  getDashboardForTest(top, hour, day, month, year): Observable<any> {
    //set header to authorize with access token
    this.getTokenForTest();
    let headers = new Headers();
    headers.append('access_token', this.accessToken);
    return this.http.get(
      this.setHttpRequest('dashboard', top, hour, day, month, year), { headers: headers }).timeout(90000)
      .map(res => res.json());

  }

  getDashboardAllTops() {
    return Observable.fromPromise(this.getUid()).mergeMap(obj => {
      this.uid = obj.id;
      return Observable.fromPromise(this.getToken()).mergeMap(token => {
        this.accessToken = token;
        let headers = new Headers();
        headers.append('access_token', this.accessToken);
        return this.http.get(
          this.setHttpRequest('dashboard/getalltops/' + this.uid, '', '0', '0', '0', '0'), { headers: headers }).timeout(90000)
          .map(res => res.json());
      });
    });
  }

  getDashboardAllTopsFortest() {
    this.getUidForTest();
    this.getTokenForTest();
    let headers = new Headers();
    headers.append('access_token', this.accessToken);
    return this.http.get(
      this.setHttpRequest('dashboard/getalltops/' + this.uid, '', '0', '0', '0', '0'), { headers: headers }).timeout(90000)
      .map(res => res.json());

  }


  //feature for newfeed??
  setLike(): Observable<any> {
    return Observable.fromPromise(this.getToken()).mergeMap((token) => {
      let headers = new Headers();

      headers.append('access_token', token);
      return this.http.get(
        this.setHttpRequest('likes', '', '0', '0', '0', '0'), { headers: headers });
    });


  }


  getPostForTest() {
    this.getUidForTest();
    this.getTokenForTest();
    let headers = new Headers();

    console.log(this.uid);
    console.log(this.accessToken);
    headers.append('access_token', this.accessToken);
    // return this.http.get(
    //   this.setHttpRequest("newsfeed/" + uid, '', '0', '0', '0', '0'), { headers: headers })
    //   .map(res => res.json());
    return this.http.get(
      this.setHttpRequest("newsfeed/" + this.uid, '', '0', '0', '0', '0'), { headers: headers }).timeout(90000)
      .map(res => res.json());
  }

  getPosts(): Observable<any> {
    return Observable.fromPromise(this.getUid()).mergeMap(obj => {
      this.uid = obj.id;
      return Observable.fromPromise(this.getToken()).mergeMap(token => {
        this.accessToken = token;

        let headers = new Headers();
        console.log(this.uid);
        console.log(this.accessToken);
        headers.append('access_token', this.accessToken);
        return this.http.get(
          this.setHttpRequest("newsfeed/" + this.uid, '', '0', '0', '0', '0'), { headers: headers }).timeout(90000)
          .map(res => res.json());
      })
    });
  }
  getPostsNext(): Observable<any> {
    return Observable.fromPromise(this.getUid()).mergeMap(obj => {
      this.uid = obj.id;
	  this.storage.set('uid', this.uid);
      return Observable.fromPromise(this.getToken()).mergeMap(token => {
        this.accessToken = token;

        let headers = new Headers();
        console.log(this.uid);
        console.log(this.accessToken);
        headers.append('access_token', this.accessToken);
        return this.http.get(
          this.setHttpRequest("newsfeed/next/" + this.uid, '', '0', '0', '0', '0'), { headers: headers }).timeout(90000)
          .map(res => res.json());
      })
    });
  }
  getCover(uid: String): Observable<any> {
    return Observable.fromPromise(this.getToken()).mergeMap((token) => {
      return Observable.fromPromise(this.facebook.api('/' + uid + '?fields=cover', ['user_posts']));
    });

  }
  getPostsById(uid: String): Observable<any> {
    return Observable.fromPromise(this.getToken()).mergeMap((token) => {
      return Observable.fromPromise(this.facebook.api('/' + uid + '?fields=posts{created_time,message,full_picture,reactions.summary(true),comments.summary(true),id}', ['user_posts', 'user_friends']));
    });

  }
  getSource(uid) {
    return this.facebook.api('/' + uid + '?fields=source', ['user_posts']);
  }
  getContext(uid: String): Observable<any> {
    return Observable.fromPromise(this.facebook.api('/' + uid + '?fields=context', ['user_posts']));
  }
  getMessage(postID: String) {
    return this.facebook.api('/' + postID+'?fields=message,created_time,full_picture', ['user_posts']);
  }
  getFriends() {
    return this.facebook.api('/me/friends', ['user_friends']);
  }
  getComments(postid): Observable<any> {
    return Observable.fromPromise(this.facebook.api('/' + postid + '?fields=comments', ['user_posts']));
  }
  getPages() {
    return this.facebook.api('/me/likes', ['user_likes']);
  }
  
  getWordCloudForTest() {
    this.getUidForTest();
    
    // return this.http.get(
    //   this.setHttpRequest("newsfeed/" + uid, '', '0', '0', '0', '0'), { headers: headers })
    //   .map(res => res.json());
    return this.setHttpRequest("getwordcloud/" + this.uid, '', '0', '0', '0', '0');

  }
  getWordCloud(): Observable<any> {
    return Observable.fromPromise(this.getUid()).mergeMap(obj => {
      this.uid = obj.id;
        return  this.setHttpRequest("getwordcloud/" + this.uid, '', '0', '0', '0', '0');
      });
  }

}