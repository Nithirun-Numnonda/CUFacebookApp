import { EN_TAB_PAGES } from './../../app/app.config';
import { BackbuttonService } from './../../services/backbutton.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform, ModalController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http-provider';


/**
 * Generated class for the FriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-friends',
    templateUrl: 'friends.html',
})
export class FriendsPage {
    

    newsData:any;
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private httpProvider: HttpProvider,
        private loadingController: LoadingController,
        private platform:Platform,
        private modalCtrl:ModalController,
        private backbuttonService:BackbuttonService
    ) {
    }
    ionViewDidLoad() {
        if (this.platform.is('cordova'))
        this.getFriends();
        
    }
    getFriends() {
        let loading = this.loadingController.create({ content: "Loading,please wait..." });
        loading.present();
            this.httpProvider.getFriends().then(
                result => {
                    if (result.error)
                        if (result.error.type == "OAuthException") {
                            console.log("Token expired!!!");
                            return this.getFriends();
                        }
                    this.newsData = result.data;
                    console.log("Success : " + JSON.stringify(result.data[0].name));
                    loading.dismissAll();
                    
                },
                err => {
                    console.error("Error : " + err);
                    loading.dismissAll();
                }
            );
    }
    presentProfileModal(uid: string, user_name: string) {
        //console.log(uid);
        let profileModal = this.modalCtrl.create('UserProfilePage', { userId: uid, name: user_name,type:"friends"});
        profileModal.present();
      }

      ionViewWillEnter() {
        this.backbuttonService.pushPage(EN_TAB_PAGES.EN_TP_FRIENDS,  
        this.navCtrl);
     }
    
}
