import { Facebook } from '@ionic-native/facebook';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {
  APP_ID: number = 1894102183937616;
  token: string;

  constructor(public http: Http, public facebook: Facebook) {
    console.log('Hello HttpProvider Provider');
  }
  init() {
    this.facebook.browserInit(this.APP_ID, "v2.11");
  }

  getToken(){
    
    // this.facebook.getAccessToken().then(value => { this.token= value });
    this.facebook.getLoginStatus().then(function(response) {
      console.log(response)
      if (response.status === 'connected') {
        var accessToken = response.authResponse.accessToken;
        console.log('accessToken: '+accessToken);
        return ''+accessToken;
      } 
    });

    
  }
  getCommentsData(top, hour, day, month, year) {
    var token =this.getToken();
    console.log("token: " + token);
    var request = 'http://192.168.43.75:8080/comments?fields=id,name&since=-';
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
    request += '&access_token=' + token;
    console.log("req: " + request);
    return this.http.get(request).map(res => res.json());

  }
  getLikesData(top, hour, day, month, year) {
    var token = 'EAAa6rQfXhlABAGvZBLXSwV98t1VgfzVqLyiucxAWR5f4gzGYZCGOJyihENhNbZCcQY1Ixe7XfUZBRck1QDtlr4RnsmPJbP5SVfJvCoZAINUJWzenzP6hcNKQhglZBIrt8ZBC51A8plGq2K20qpJW7EmwKZA3kt7kk2pkhsCuQjpxAKRWfLGZAHH2ho3saGyadPxaLOO7DbM5iZCvuT6Qj1HFdMueSwAtMZCy7gZD';
    var request = 'http://192.168.43.75:8080/likes?fields=id,name&since=-';
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
    request += '&access_token=' + token;
    console.log("req: " + request);
    return this.http.get(request).map(res => res.json());

  }

}
