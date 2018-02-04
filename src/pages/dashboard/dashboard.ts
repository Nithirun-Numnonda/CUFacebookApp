import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http-provider';
import { Chart } from 'chart.js';

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

  //for Data facebook
  commentsData: any;
  reactionsData: any;

  //for parameter to getFacebookData()
  hourValue: String;
  dayValue: String;
  monthValue: String;
  yearValue: String;
  topValue: String;

  //for advance filter
  hours: Array<String> = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
  days: Array<String> = ['0', '1', '2', '3', '4', '5', '6', '7'];
  months: Array<String> = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  years: Array<String> = ['0', '1', '2', '3', '4', '5', '6', '7'];
  top: Array<String> = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  
  //advance filter
  buttonClicked: boolean = false; 

  //for retry getData
  private retryTime;

  //for controlUI
  typeData: String='commentsData'
  pageTriger: String='chart'
  constructor(public navCtrl: NavController, public navParams: NavParams, private httpProvider: HttpProvider,private loadingController: LoadingController) {
    //initial default parameter
    this.hourValue = this.hours[0];
    this.dayValue = this.days[0];
    this.monthValue = this.months[3];
    this.yearValue = this.years[0];
    this.topValue = this.top[0];

    this.retryTime=0;
  }
  //for advance filter
  onButtonClick() {
            this.buttonClicked = !this.buttonClicked;
  }
  //call when refresh
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    //get data again
    this.getFacebookData()
    refresher.complete();
  }
  //get Facebook Data from httpProvider
  getFacebookData() {
    let loading = this.loadingController.create({content : "Loading,please wait..."});
    loading.present();
    if (this.hourValue != '0' || this.dayValue != '0' || this.monthValue != '0' || this.yearValue != '0')
      //call method from httpProvider
      this.httpProvider.getFacebookData(this.topValue, this.hourValue, this.dayValue, this.monthValue, this.yearValue).subscribe(
        //call if get httpRequest success (But not error from getData from facebook such as access token expired!!)
        result => {
          //check if server send error back
          if(result.error){
            //check if token expire?
            if (result.error.type == "OAuthException") {
              console.log("Token expired!!!");
              this.retryTime+=1;
              if(this.retryTime < 3)
                return this.getFacebookData();
              else
                alert("Access Token expired!!!");
            }

          }
          //assign data to view
          this.commentsData = result.comments;
          this.reactionsData = result.reactions;
          console.log("Success : " + JSON.stringify(result));
          loading.dismissAll();
          this.retryTime=0;
        },
        err => {
          //call if fail to get request
          console.error("Error : " + err);
          alert("Can't get Data from the server: "+err);
          loading.dismissAll();
        },
        () => {
          console.log('getData completed');
        }
      );
  }

  //call when view did load
  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
    this.getFacebookData();
  }
  // getLikesData() {
  //   let loading = this.loadingController.create({content : "Loading,please wait..."});
  //   loading.present();
  //   if (this.hourValue != '0' || this.dayValue != '0' || this.monthValue != '0' || this.yearValue != '0')
  //     this.httpProvider.getLikesData(this.topValue, this.hourValue, this.dayValue, this.monthValue, this.yearValue).subscribe(
  //       result => {
  //         if (result.data.error)
  //           if (result.data.error.type == "OAuthException") {
  //             console.log("Token expired!!!");
  //             return this.getLikesData();
  //           }
  //         this.newsData = result.data;
  //         console.log("Success : " + JSON.stringify(result));
  //         loading.dismissAll();
  //       },
  //       err => {
  //         console.error("Error : " + err);
  //         loading.dismissAll();
  //       },
  //       () => {
  //         console.log('getData completed');
  //       }
  //     );
  // }
  
  //for create graph
  createGraph() {
    let loading = this.loadingController.create({content : "Loading,please wait..."});
    loading.present();
    loading.dismissAll();
    // this.barChart = new Chart(this.barCanvas.nativeElement, {

    //     type: 'bar',
    //     data: {
    //         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    //         datasets: [{
    //             label: '# of Votes',
    //             data: [12, 19, 3, 5, 2, 3],
    //             backgroundColor: [
    //                 'rgba(255, 99, 132, 0.2)',
    //                 'rgba(54, 162, 235, 0.2)',
    //                 'rgba(255, 206, 86, 0.2)',
    //                 'rgba(75, 192, 192, 0.2)',
    //                 'rgba(153, 102, 255, 0.2)',
    //                 'rgba(255, 159, 64, 0.2)'
    //             ],
    //             borderColor: [
    //                 'rgba(255,99,132,1)',
    //                 'rgba(54, 162, 235, 1)',
    //                 'rgba(255, 206, 86, 1)',
    //                 'rgba(75, 192, 192, 1)',
    //                 'rgba(153, 102, 255, 1)',
    //                 'rgba(255, 159, 64, 1)'
    //             ],
    //             borderWidth: 1
    //         }]
    //     },
    //     options: {
    //         scales: {
    //             yAxes: [{
    //                 ticks: {
    //                     beginAtZero:true
    //                 }
    //             }]
    //         }
    //     }

    // });
  }

  trigerPage(){
    if(this.pageTriger == 'chart'){
      this.pageTriger='list';
    }else if(this.pageTriger == 'list'){
      this.pageTriger='chart';
    }

  }

}
