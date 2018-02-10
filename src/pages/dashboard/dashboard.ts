import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
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
  //for chart.js
  @ViewChild('barCanvas') barCanvas: ElementRef;
  barChart: any;
  createTime: Array<string>;
  total_reactions: Array<string>;
  total_comments: Array<string>;
  nativeEle: any;

  //for Data facebook
  commentsData: any;
  reactionsData: any;
  postsSummaryData: any;

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
  typeData: String = 'commentsData'
  pageTriger: String = 'chart'
  constructor(public navCtrl: NavController, public navParams: NavParams, private httpProvider: HttpProvider, private loadingController: LoadingController, public modalCtrl: ModalController) {
    //initial default parameter
    this.hourValue = this.hours[0];
    this.dayValue = this.days[0];
    this.monthValue = this.months[1];
    this.yearValue = this.years[0];
    this.topValue = this.top[0];
    //for retry
    this.retryTime = 0;

    this.createTime = [];
    this.total_comments = [];
    this.total_reactions = [];

  }
  //for advance filter
  onButtonClick() {
    this.buttonClicked = !this.buttonClicked;
  }
  //call when refresh
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.createTime = [];
    this.total_comments = [];
    this.total_reactions = [];
    //get data again
    this.getFacebookData()
    refresher.complete();
  }
  //get Facebook Data from httpProvider
  getFacebookData() {
    let loading = this.loadingController.create({ content: "Loading,please wait..." });
    loading.present();
    if (this.hourValue != '0' || this.dayValue != '0' || this.monthValue != '0' || this.yearValue != '0')
      //call method from httpProvider
      this.httpProvider.getFacebookData(this.topValue, this.hourValue, this.dayValue, this.monthValue, this.yearValue).subscribe(
        //call if get httpRequest success (But not error from getData from facebook such as access token expired!!)
        result => {
          //check if server send error back
          if (result.error) {
            //check if token expire?
            if (result.error.type == "OAuthException") {
              console.log("Token expired!!!");
              this.retryTime += 1;
              if (this.retryTime < 3)
                return this.getFacebookData();
              else
                alert("Access Token expired!!!");
            }

          }
          //assign data to view
          this.commentsData = result.comments;
          this.reactionsData = result.reactions;
          this.postsSummaryData = result.post_summary;
          if (this.postsSummaryData)
            for (let data of this.postsSummaryData) {
              this.createTime.push(data.created_time);
              this.total_comments.push(data.total_comments);
              this.total_reactions.push(data.total_reactions);
            }

          this.createGraph();
//          console.log("Success : " + JSON.stringify(result));
          loading.dismissAll();
          this.retryTime = 0;
        },
        err => {
          //call if fail to get request
          console.error("Error : " + err);
          alert("Can't get Data from the server: " + err);
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
    this.httpProvider.setLike();
  }


  //for create graph
  createGraph() {

    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'bar',
      data: {
        labels: this.createTime,
        datasets: [{
          label: 'Total comments',
          data: this.total_comments,
          backgroundColor: "#baffc9",
          borderWidth: 1
        }, {
          label: 'Total reactions',
          data: this.total_reactions,
          backgroundColor: "#ffb3ba",
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            ticks: {
              minRotation: 90
            }
          }]
        }
      }

    });
  }

  trigerPage() {
    if (this.pageTriger == 'chart') {
      this.pageTriger = 'list';
    } else if (this.pageTriger == 'list') {
      this.pageTriger = 'chart';
      this.createTime = [];
      this.total_comments = [];
      this.total_reactions = [];
      this.getFacebookData();
    }

  }
  presentProfileModal(uid: string, user_name: string) {
    //console.log(uid);
    let profileModal = this.modalCtrl.create('UserProfilePage', { userId: uid, name: user_name });
    profileModal.present();
  }

}
