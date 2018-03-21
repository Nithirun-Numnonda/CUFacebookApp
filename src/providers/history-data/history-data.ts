import { Http,Headers, RequestOptions } from '@angular/http';
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
  }
  addSearchData(data) {
    this.searchData.push(data);
  }
  addPageData(data) {
    this.pageData.push(data);
  }
  addLikeData(data) {
    this.likeData.push(data);
    alert("like " + this.likeData.length);
    if (this.likeData.length > 5) {
      this.sendData();
    }
  }
  public addDisLikeData(data) {
    this.dislikeData.push(data);
    if (this.dislikeData.length > 5) {
      this.sendData();
    }
  }
  getSearchData() {
    return this.searchData;
  }
  sendData() {
    alert(this.likeData);
    this.storage.get('uid').then((val) => {
      if (val != null) {
        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.http.post('http://103.233.194.200:8080/historyData/' + val, JSON.stringify({ likeData: { data: this.likeData }, dislikeData: { data: this.dislikeData } }),options).subscribe((result)=>{
          alert(JSON.stringify(result.json()));
          this.likeData = [];
        this.dislikeData = [];          
        });
        
      }

    });

  }

}
