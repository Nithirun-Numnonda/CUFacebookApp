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
  items:any;
  constructor(public http: Http) {
    this.items = [
      {title: 'one'},
      {title: 'two'},
      {title: 'three'},
      {title: 'four'},
      {title: 'five'},
      {title: 'six'}
  ]

}

filterItems(searchTerm){

  return this.items.filter((item) => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  });    

}

}
