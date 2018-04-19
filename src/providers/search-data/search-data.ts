import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the SearchDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SearchDataProvider {
  items:Array<any>;
  constructor(public http: Http) {
    this.items = [];
    
}
addItem(name,id,type){
  this.items.push({title:name,id:id,type:type});
}

filterItems(searchTerm){

  return this.items.filter((item) => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  });    

}

}
