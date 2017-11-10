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

  constructor(public http: Http) {
    console.log('Hello HttpProvider Provider');
  }
  getJsonData(){
    var token = 'EAACEdEose0cBAKz0usZAsEChwLpZCfr8chpstg7d8ZBcmtflT8KVJcBq4mbP38qatnKYvApX9VpwvmONv4fQeBUKuTYM3kN0biLwbx7zHrXAkUVGBHrZBIHYzGd98SlhadAZA5GrSG3Azr8M7gESY0difszqSbRM908ThR6KnKCNqAivO2v18ejQgfW867PhHTKcJF7hNBAZDZD';
    // return this.http.get('https://www.reddit.com/r/worldnews/.json')
    return this.http.get('http://localhost:8080/facebook?fields=id,name&since=-2%20year&access_token='+token)
    .map(res => res.json());
    
  }

}
