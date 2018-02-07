import { HttpProvider } from './../../providers/http/http-provider';
import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {
  uid: string;
  name: string;
  cover: any;
  context: any;
  constructor(private navParams: NavParams, private view: ViewController, public httpProvider:HttpProvider) {
    this.uid = this.navParams.get('userId');
    this.name = this.navParams.get('name');
    this.cover = this.httpProvider.getCover(this.uid);
    this.context=this.httpProvider.getContext(this.uid);
    
      
    
  }
  closeModal() {
    this.view.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
    
    
  }

}
