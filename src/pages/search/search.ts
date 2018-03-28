import { SearchDataProvider } from './../../providers/search-data/search-data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'searchPage'
})
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  searchTerm: string = '';
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService:SearchDataProvider,private modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    this.setFilteredItems();
  }
  setFilteredItems() {
    this.items = this.dataService.filterItems(this.searchTerm);
  }
  presentProfileModal(uid: string, user_name: string,type:string) {
    //console.log(uid);
    let profileModal = this.modalCtrl.create('UserProfilePage', { userId: uid, name: user_name,type:type});
    profileModal.present();
  }

}
