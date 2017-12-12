import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http-provider';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  providers: [HttpProvider]
})
export class DashboardPage {
  newsData: any;
  hourValue: String;
  dayValue: String;
  monthValue: String;
  yearValue: String;
  topValue: String;
  hours: Array<String> = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
  days: Array<String> = ['0', '1', '2', '3', '4', '5', '6', '7'];
  months: Array<String> = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  years: Array<String> = ['0', '1', '2', '3', '4', '5', '6', '7'];
  top: Array<String> = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  buttonClicked: boolean = false; //Whatever you want to initialise it as

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpProvider: HttpProvider,private loadingController: LoadingController) {
    this.hourValue = this.hours[0];
    this.dayValue = this.days[0];
    this.monthValue = this.months[3];
    this.yearValue = this.years[0];
    this.topValue = this.top[0];
    
    
        

  }
  onButtonClick() {
            this.buttonClicked = !this.buttonClicked;
  }
  getCommentsData() {
    let loading = this.loadingController.create({content : "Loading,please wait..."});
    loading.present();
    if (this.hourValue != '0' || this.dayValue != '0' || this.monthValue != '0' || this.yearValue != '0')
      this.httpProvider.getCommentsData(this.topValue, this.hourValue, this.dayValue, this.monthValue, this.yearValue).subscribe(
        result => {
          if (result.data.error)
            if (result.data.error.type == "OAuthException") {
              console.log("Token expired!!!");
              return this.getCommentsData();
            }
          this.newsData = result.data;
          console.log("Success : " + JSON.stringify(result));
          loading.dismissAll();
        },
        err => {
          console.error("Error : " + err);
          loading.dismissAll();
        },
        () => {
          console.log('getData completed');
        }
      );
  }
  getLikesData() {
    let loading = this.loadingController.create({content : "Loading,please wait..."});
    loading.present();
    if (this.hourValue != '0' || this.dayValue != '0' || this.monthValue != '0' || this.yearValue != '0')
      this.httpProvider.getLikesData(this.topValue, this.hourValue, this.dayValue, this.monthValue, this.yearValue).subscribe(
        result => {
          if (result.data.error)
            if (result.data.error.type == "OAuthException") {
              console.log("Token expired!!!");
              return this.getLikesData();
            }
          this.newsData = result.data;
          console.log("Success : " + JSON.stringify(result));
          loading.dismissAll();
        },
        err => {
          console.error("Error : " + err);
          loading.dismissAll();
        },
        () => {
          console.log('getData completed');
        }
      );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
