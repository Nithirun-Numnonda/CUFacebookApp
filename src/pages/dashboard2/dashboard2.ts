import { SearchDataProvider } from './../../providers/search-data/search-data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the Dashboard2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard2',
  templateUrl: 'dashboard2.html',
})
export class Dashboard2Page {
  searchTerm: string = '';
  items: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private dataService:SearchDataProvider,private modalCtrl:ModalController) {
    
  }
  goto(){
    this.navCtrl.push('imagePickerPage');
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
