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
    
  }
  getCover(){
    this.cover = this.httpProvider.getCover(this.uid).then(
      (coverData) => {
        console.log(JSON.stringify(coverData));
        this.cover = coverData.source;

      }, (err) => {
        console.log(JSON.stringify(err));
        //reject(err);

      });
  }
  getContext(){
    this.context=this.httpProvider.getContext(this.uid).then(
      (contextData) => {
        console.log(JSON.stringify(contextData));
        this.context=contextData.context;
      }, (err) => {
        console.log(JSON.stringify(err));
        //reject(err);

      });
  }
  closeModal() {
    this.view.dismiss();
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad UserProfilePage');
    this.getCover();
    this.getContext();
    
    
  }

}
