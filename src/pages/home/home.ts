import { Facebook } from '@ionic-native/facebook';
// import {NativeStorage} from '@ionic-native/NativeStorage'
import { Component } from '@angular/core';
import { NavController,Platform} from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http-provider';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HttpProvider]
})
export class HomePage {
  
  authResponse: any;
  isLogged: boolean;
  constructor(public navCtrl: NavController,private facebook:Facebook,public facebookService:HttpProvider,public platform: Platform) {
    this.platform.ready().then(() => {
      this.isLogged = false;
      this.facebookService.init();
   });
  }
  login() {
    this.facebookService.login();
 }

}
