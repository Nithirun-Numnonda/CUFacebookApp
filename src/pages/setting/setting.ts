import { EN_TAB_PAGES } from './../../app/app.config';
import { BackbuttonService } from './../../services/backbutton.service';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { App } from 'ionic-angular';
import { Pro } from '@ionic/pro';


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
  homePage: HomePage;
  isShowCredit: boolean = false;
  public deployChannel = "";
  public isBeta = false;
  public downloadProgress = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private facebook: Facebook,
    private app: App,
    private loadingController: LoadingController,
    private backbuttonService: BackbuttonService
  ) {
    //this.checkChannel();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }
  getAccess() {
    var token = this.facebook.getAccessToken()
    console.log(token);
    alert(token);
  }
  logout() {
    let loading = this.loadingController.create({ content: "Logging Out" });
    loading.present();
    this.facebook.logout().then((response) => {
      loading.dismissAll();
      this.app.getRootNav().pop()
    }, (error) => {
      console.log(error);
    })

  }
  search() {
    this.navCtrl.push('searchPage')
  }
  showCredit() {
    this.isShowCredit = !this.isShowCredit
  }
  //live update
  async checkChannel() {
    try {
      const res = await Pro.deploy.info();
      this.deployChannel = res.channel;
      this.isBeta = (this.deployChannel === 'Beta')
    } catch (err) {
      // We encountered an error.
      // Here's how we would log it to Ionic Pro Monitoring while also catching:

      // Pro.monitoring.exception(err);
    }
  }
  ionViewWillEnter() {
    this.backbuttonService.pushPage(EN_TAB_PAGES.EN_TP_SETTING,  
    this.navCtrl);
 }

}
