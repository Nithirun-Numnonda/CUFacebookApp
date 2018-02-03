import { Facebook } from '@ionic-native/facebook';
// import {NativeStorage} from '@ionic-native/NativeStorage'
import { Component } from '@angular/core';
import { NavController,Platform} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { HttpProvider } from '../../providers/http/http-provider';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HttpProvider]
})
export class HomePage {
  tabsPage = TabsPage;
  authResponse: any;
  isLogged: boolean;
  constructor(public navCtrl: NavController,private facebook:Facebook,public facebookService:HttpProvider,public platform: Platform) {
    this.platform.ready().then(() => {
      this.isLogged = false;
      this.facebookService.init();
   });
  }
  login() {
    let permissions = new Array<string>();
   //let nav = this.navCtrl;
    permissions = ["public_profile","user_posts","user_friends"];
       
    this.facebook.login(permissions).then((response) => {
     let userId = response.authResponse.userID;
     let params = new Array<string>();
      
     this.facebook.api("/me?fields=name,gender", params)
     .then(function(profile) {
       profile.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
     })
     console.log(permissions);
     alert('Logged in Successfully!');
     console.log(JSON.stringify(response.authResponse));
     this.authResponse = response.authResponse;
     this.isLogged = true;
     this.navCtrl.push(TabsPage);
   }, (error) => {
     
     if(error == 'cordova_not_available'){      
       this.navCtrl.push(TabsPage);
     }else
        alert("Error: "+JSON.stringify(error));
     console.log(error);
   });
 }

}
