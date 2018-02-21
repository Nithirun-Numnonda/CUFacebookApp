import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { App } from 'ionic-angular';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  homePage:HomePage;
  isShowCredit:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,private facebook:Facebook,private app:App,private loadingController:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }
  getAccess(){
    var token = this.facebook.getAccessToken()
    console.log(token);
    alert(token);
  }
  logout() {
    let loading = this.loadingController.create({ content: "Logging Out" });
    loading.present();
    this.facebook.logout().then((response) =>{
      loading.dismissAll();
      this.app.getRootNav().pop()
    }, (error) => {
      console.log(error);
    })
    
  }
  showCredit(){
    this.isShowCredit=!this.isShowCredit
  }

}
