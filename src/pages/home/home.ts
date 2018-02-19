
// import {NativeStorage} from '@ionic-native/NativeStorage'
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http-provider';
import { ScreenOrientation } from '@ionic-native/screen-orientation';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HttpProvider]
})
export class HomePage {

  authResponse: any;
  isLogged: boolean;
  constructor(public navCtrl: NavController, public facebookService: HttpProvider, public platform: Platform, private screenOrientation: ScreenOrientation) {
    this.platform.ready().then(() => {
      this.isLogged = false;
      this.facebookService.init();
      if (this.platform.is('cordova'))
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    });
  }
  login() {
    this.facebookService.login();
  }

}
