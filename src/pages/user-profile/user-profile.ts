import { HttpProvider } from './../../providers/http/http-provider';
import { Component } from '@angular/core';
import { IonicPage, NavParams, ModalController } from 'ionic-angular';
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
  mutual_friends: any;
  mutual_likes: any;
  offset_y:any;
  constructor(private navParams: NavParams, private view: ViewController, public httpProvider:HttpProvider,public modalCtrl: ModalController) {
    this.uid = this.navParams.get('userId');
    this.name = this.navParams.get('name');
    this.getCover();
    this.getContext();
  }
  getCover(){
    //alert(this.uid);
    this.cover = this.httpProvider.getCover(this.uid).subscribe(
      (coverData) => {
        console.log(JSON.stringify(coverData));
        this.cover = coverData.cover.source;
        this.offset_y= (-1 * coverData.cover.offset_y) + '%'
        //alert(JSON.stringify(coverData));
      }, (err) => {
        console.log(JSON.stringify(err));
        //reject(err);
        //alert(JSON.stringify(err));

      });
  }
  getContext(){
    this.httpProvider.getContext(this.uid).subscribe(
      (contextData) => {
        console.log(JSON.stringify(contextData));
        this.mutual_friends=contextData.context.mutual_friends.data;
        this.mutual_likes=contextData.context.mutual_likes.data;
        alert(JSON.stringify(this.mutual_likes));
      }, (err) => {
        console.log(JSON.stringify(err));
        //reject(err);

      });
  }
  closeModal() {
    this.view.dismiss();
  }
  presentProfileModal(uid: string, user_name: string) {
    //console.log(uid);
    let profileModal = this.modalCtrl.create('UserProfilePage', { userId: uid, name: user_name });
    profileModal.present();
  }
  ionViewDidEnter() {
    console.log('ionViewDidLoad UserProfilePage');
    
    
    
  }

}
