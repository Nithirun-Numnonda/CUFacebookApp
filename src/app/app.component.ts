import { Facebook } from '@ionic-native/facebook';
import { Component } from '@angular/core';
import { Platform, App, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, app: App, alertCtrl: AlertController, private facebook: Facebook, loadingController: LoadingController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      platform.registerBackButtonAction(() => {
        let nav = app.getActiveNavs()[0];
        let activeView = nav.getActive();

        if (activeView.name === "TabsPage") {
          const alert = alertCtrl.create({
            title: 'App termination',
            message: 'Do you want to Log out from the app?',
            buttons: [{
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Application Logout prevented!');
              }
            }, {
              text: 'Log out',
              handler: () => {
                let loading =  loadingController.create({ content: "Logging Out..." });
                loading.present();
                this.facebook.logout().then((response) => {
                  loading.dismiss();
                  let nav = app.getActiveNav();
                  nav.popToRoot();

                }, (error) => {

                })

              }
            }]
          });
          alert.present();

        } else if (activeView.name === "HomePage") {
          const alert = alertCtrl.create({
            title: 'App termination',
            message: 'Do you want to close the app?',
            buttons: [{
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Application exit prevented!');
              }
            }, {
              text: 'Close App',
              handler: () => {
                platform.exitApp(); // Close this application
              }
            }]
          });
          alert.present();
        }
        else{
          nav.pop();
        }
      });
    });
  }
}

