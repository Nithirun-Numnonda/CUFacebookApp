import { SearchDataProvider } from './../../providers/search-data/search-data';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

/**
 * Generated class for the SearchBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-bar',
  templateUrl: 'search-bar.html'
})
export class SearchBarComponent {

  searchTerm: string = '';
    items: any;
 
    constructor(public navCtrl: NavController, public dataService: SearchDataProvider) {
 
    }
 
    ionViewDidLoad() {
 
        this.setFilteredItems();
 
    }
 
    setFilteredItems() {
 
        this.items = this.dataService.filterItems(this.searchTerm);
 
    }

}
