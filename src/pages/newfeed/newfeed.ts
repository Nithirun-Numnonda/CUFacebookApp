import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController} from 'ionic-angular';
import {HttpProvider} from '../../providers/http/http-provider';

/**
 * Generated class for the NewfeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newfeed',
  templateUrl: 'newfeed.html',
  providers:[HttpProvider]
})
export class NewfeedPage {

  newsData:  any;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpProvider:HttpProvider, public loadingCtrl:LoadingController) {
    this.loading = this.loadingCtrl.create({
      content: `
      <ion-spinner ></ion-spinner>`
    });
    //this.getdata();
  }

  getdata(){
    this.httpProvider.getCommentsData('','3','0','0','0').subscribe(
      result => {
        this.newsData=result.data;
        console.log("Success : "+JSON.stringify(result));
      },
      err =>{
        console.error("Error : "+err);
      } ,
      () => {
        console.log('getData completed');
      }
    );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewfeedPage');
  }

}
