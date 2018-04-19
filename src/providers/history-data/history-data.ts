import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the HistoryDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistoryDataProvider {
  searchData: Array<any>;
  pageData: Array<any>;
  likeData: Array<any>;
  dislikeData: Array<any>;
  constructor(public http: Http, private storage: Storage) {
    console.log('Hello HistoryDataProvider Provider');
    this.likeData = [];
    this.dislikeData = [];
    this.storage.get('likeData').then((val) => {
      if (val != null) {
        this.likeData = val;
      }}
    );
    this.storage.get('dislikeData').then((val) => {
      if (val != null) {
        this.likeData = val;
      }}
    );
  }
  addSearchData(data) {
    this.searchData.push(data);
  }
  addPageData(data) {
    this.pageData.push(data);
  }
  addLikeData(data) {
    this.likeData.push(data);
    this.storage.set('likeData',this.likeData);
    //alert("like " + this.likeData.length);
    if (this.likeData.length >= 5) {
      this.sendLikeData();
    }
  }
  public addDisLikeData(data) {
    this.dislikeData.push(data);
    this.storage.set('dislikeData',this.dislikeData);
    if (this.dislikeData.length >= 5) {
      this.sendDislikeData();
    }
  }
  getSearchData() {
    return this.searchData;
  }
  sendLikeData() {
    //alert(JSON.stringify(this.likeData));
    this.storage.get('uid').then((val) => {
      if (val != null) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        this.http.post('http://103.233.194.200:8080/userlikes/' + val, JSON.stringify({ meta_data: this.likeData}), options).subscribe((result) => {
          alert(result);
          this.likeData = [];
        },(error
        )=>{
          alert("Error"+error);
        });

      }

    });

  }
  sendDislikeData() {
    //alert(JSON.stringify(this.likeData));
    this.storage.get('uid').then((val) => {
      if (val != null) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        this.http.post('http://103.233.194.200:8080/userdislikes/' + val, JSON.stringify({ meta_data: this.likeData}), options).subscribe((result) => {
          alert(result);
          this.dislikeData = [];
        },(error
        )=>{
          alert("Error"+error);
        });

      }

    });

  }

}
