import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController, Platform ,Content} from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http-provider';
import { Chart } from 'chart.js';

import {DomSanitizer} from '@angular/platform-browser';



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
  maxReactionsPost: any;
  maxReactionsMsg: any;
  maxReactionsPic:any;
  maxCommentsPost: any;
  maxCommentsMsg: any;
  maxCommentsPic:any;

  //for Data facebook
  commentsData: any;
  reactionsData: any;
  postsSummaryData: any;

  //for parameter to getDashboard()
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

  sortByTime: String;
  //advance filter
  buttonClicked: boolean = false;

  //for retry getData
  private retryTime;
  isAll: boolean = false;

  wordCloud:any;

  //for controlUI
  typeData: String = 'commentsData';
  pageTriger: String = 'chart';
  @ViewChild(Content) content: Content;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private httpProvider: HttpProvider,
    private loadingController: LoadingController,
    public modalCtrl: ModalController,
    private platform: Platform,
    public _DomSanitizer: DomSanitizer
  ) {
    //initial default parameter
    this.hourValue = this.hours[0];
    this.dayValue = this.days[0];
    this.monthValue = this.months[3];
    this.yearValue = this.years[0];
    this.topValue = this.top[0];
    //for retry
    this.retryTime = 0;
    //for graph
    this.createTime = [];
    this.total_comments = [];
    this.total_reactions = [];
    this.sortByTime = 'Last 3 months';
    //for scroll
    
    

  }
  timeSwitchCase() {
    switch (this.sortByTime) {
      case "Last 1 day": {
        this.hourValue = this.hours[0];
        this.dayValue = this.days[1];
        this.monthValue = this.months[0];
        this.yearValue = this.years[0];
        this.topValue = this.top[0];
        break;
      }
      case "Last 1 week": {
        this.hourValue = this.hours[0];
        this.dayValue = this.days[7];
        this.monthValue = this.months[0];
        this.yearValue = this.years[0];
        this.topValue = this.top[0];
        break;
      }
      case "Last 1 month": {
        this.hourValue = this.hours[0];
        this.dayValue = this.days[0];
        this.monthValue = this.months[1];
        this.yearValue = this.years[0];
        this.topValue = this.top[0];
        break;
      }
      case "Last 3 months": {
        this.hourValue = this.hours[0];
        this.dayValue = this.days[0];
        this.monthValue = this.months[3];
        this.yearValue = this.years[0];
        this.topValue = this.top[0];
        break;
      }
      case "Last 6 months": {
        this.hourValue = this.hours[0];
        this.dayValue = this.days[0];
        this.monthValue = this.months[6];
        this.yearValue = this.years[0];
        this.topValue = this.top[0];
        break;
      }
      case "Last 1 year": {
        this.hourValue = this.hours[0];
        this.dayValue = this.days[0];
        this.monthValue = this.months[0];
        this.yearValue = this.years[1];
        this.topValue = this.top[0];
        break;
      }
      case "Last 2 years": {
        this.hourValue = this.hours[0];
        this.dayValue = this.days[0];
        this.monthValue = this.months[0];
        this.yearValue = this.years[2];
        this.topValue = this.top[0];
        break;
      }

    }
  }
  //for advance filter
  onButtonClick() {
    this.buttonClicked = !this.buttonClicked;
  }
  //call when refresh
  // doRefresh(refresher) {
  //   console.log('Begin async operation', refresher);
  //   this.createTime = [];
  //   this.total_comments = [];
  //   this.total_reactions = [];
  //   //get data again
  //   this.getDashboard();
  //   refresher.complete();

  // }
  //get Facebook Data from httpProvider
  getDashboard() {
    this.timeSwitchCase();
    let loading = this.loadingController.create({
      content: "LOADING, Please wait..."
    });
    loading.present();
    if (this.hourValue != '0' || this.dayValue != '0' || this.monthValue != '0' || this.yearValue != '0')
      //call method from httpProvider
      this.httpProvider.getDashboard(this.topValue, this.hourValue, this.dayValue, this.monthValue, this.yearValue).subscribe(
        //call if get httpRequest success (But not error from getData from facebook such as access token expired!!)
        result => {
          //check if server send error back
          if (result.error) {
            //check if token expire?
            if (result.error.type == "OAuthException") {
              console.log("Token expired!!!");
              this.retryTime += 1;
              if (this.retryTime < 3) {
                loading.dismissAll();
                return this.getDashboard();
              }
              else
                console.log("Access Token expired!!!");
            }

          }
          if (result.id) {
            loading.dismissAll();
            return null;
          } else {
            //assign data to view
            this.commentsData = result.comments.data;
            this.reactionsData = result.reactions.data;
            this.postsSummaryData = result.post_summary.data;
            if (this.postsSummaryData) {
              var maxReactions = 0;
              var maxComments = 0;
              for (let data of this.postsSummaryData) {
                if (data.total_comments != 0 || data.total_reactions != 0) {
                  var newDate = new Date(data.created_time);
                  //console.log(newDate.toDateString());
                  this.createTime.push(newDate.toDateString());
                  this.total_comments.push(data.total_comments);
                  this.total_reactions.push(data.total_reactions);
                }
                if (data.total_comments > maxComments) {
                  maxComments = data.total_comments
                  data.created_time = new Date(data.created_time).toDateString();
                  this.maxCommentsPost = data;
                  //console.log(maxComments);
                }
                if (data.total_reactions > maxReactions) {
                  maxReactions = data.total_reactions
                  data.created_time = new Date(data.created_time).toDateString();
                  this.maxReactionsPost = data;
                }
              }
            }
            if (this.pageTriger == "chart")
              this.createGraph();
            //          console.log("Success : " + JSON.stringify(result));
            if (this.platform.is('cordova')) {
              if (this.postsSummaryData)
                this.getMessage(this.maxCommentsPost.id, this.maxReactionsPost.id);
            }

            this.retryTime = 0;
            this.httpProvider.setUid(result._uid);
            if(result.comments.next||result.reactions.next)
              this.isAll = false;
            else
              this.isAll = true;
            
            loading.dismissAll();
          }
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
  getAllTops() {
    this.isAll=true;
    let loading = this.loadingController.create({ content: "LOADING, Please wait..." });
    loading.present();
    if (this.hourValue != '0' || this.dayValue != '0' || this.monthValue != '0' || this.yearValue != '0')
      //call method from httpProvider
      this.httpProvider.getDashboardAllTops().subscribe(
        //call if get httpRequest success (But not error from getData from facebook such as access token expired!!)
        result => {
          //check if server send error back
          if (result.error) {
            //check if token expire?
            if (result.error.type == "OAuthException") {
              console.log("Token expired!!!");
              this.retryTime += 1;
              if (this.retryTime < 3)
                return this.getAllTops();
              else
                console.log("Access Token expired!!!");
            }

          }
          //assign data to view
          this.commentsData = result.comments.data;
          this.reactionsData = result.reactions.data;
          if (this.postsSummaryData) {
            for (let data of this.postsSummaryData) {
              var newDate = new Date(data.created_time);
              this.createTime.push(newDate.toDateString());
              this.total_comments.push(data.total_comments);
              this.total_reactions.push(data.total_reactions);
            }
          }
          if (this.pageTriger == "chart")
            this.createGraph();
          //          console.log("Success : " + JSON.stringify(result));

          this.retryTime = 0;
          this.httpProvider.setUid(result._uid);
        },
        err => {
          //call if fail to get request
          console.error("Error : " + err);
          alert("Can't get Data from the server: " + err);

        },
        () => {
          console.log('getData completed');
          loading.dismissAll();
        }
      );
  }
  setLike() {
    this.httpProvider.setLike().subscribe((value) => {
      console.log(value);
    });

  }

  getDashboardForTest() {
    this.timeSwitchCase();
    let loading = this.loadingController.create({
      content: "LOADING, Please wait..."
    });
    loading.present();
    if (this.hourValue != '0' || this.dayValue != '0' || this.monthValue != '0' || this.yearValue != '0')
      //call method from httpProvider
      this.httpProvider.getDashboardForTest(this.topValue, this.hourValue, this.dayValue, this.monthValue, this.yearValue).subscribe(
        //call if get httpRequest success (But not error from getData from facebook such as access token expired!!)
        result => {
          //check if server send error back
          if (result.error) {
            //check if token expire?
            if (result.error.type == "OAuthException") {
              console.log("Token expired!!!");
              this.retryTime += 1;
              if (this.retryTime < 3) {
                loading.dismissAll();
                return this.getDashboardForTest();
              }
              else
                console.log("Access Token expired!!!");
            }

          }
          if (result.id) {
            loading.dismissAll();
            return null;
          } else {
            //assign data to view
            this.commentsData = result.comments.data;
            this.reactionsData = result.reactions.data;
            this.postsSummaryData = result.post_summary.data;
            if (this.postsSummaryData) {
              var maxReactions = 0;
              var maxComments = 0;
              for (let data of this.postsSummaryData) {
                if (data.total_comments != 0 || data.total_reactions != 0) {
                  var newDate = new Date(data.created_time);
                  //console.log(newDate.toDateString());
                  this.createTime.push(newDate.toDateString());
                  this.total_comments.push(data.total_comments);
                  this.total_reactions.push(data.total_reactions);
                }
                if (data.total_comments > maxComments) {
                  maxComments = data.total_comments
                  data.created_time = new Date(data.created_time).toDateString();
                  this.maxCommentsPost = data;
                  //console.log(maxComments);
                }
                if (data.total_reactions > maxReactions) {
                  maxReactions = data.total_reactions
                  data.created_time = new Date(data.created_time).toDateString();
                  this.maxReactionsPost = data;
                }
              }
            }
            if (this.pageTriger == "chart")
              this.createGraph();
            //          console.log("Success : " + JSON.stringify(result));
            if (this.platform.is('cordova')) {
              if (this.postsSummaryData)
                this.getMessage(this.maxCommentsPost.id, this.maxReactionsPost.id);
            }

            this.retryTime = 0;
            this.httpProvider.setUid(result._uid);
            if(result.comments.next||result.reactions.next)
              this.isAll = false;
            else
              this.isAll = true;
            this.getWordCloudForTest();
            loading.dismissAll();
            
          }
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
  getWordCloud(){
    this.wordCloud="";
    this.httpProvider.getWordCloud().subscribe((result)=>{
      
      this.wordCloud+=result;
      //alert(this.wordCloud);
    });
    
  }
  getWordCloudForTest(){
    
    this.wordCloud=this.httpProvider.getWordCloudForTest();
  }
  //call when view did load
  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
    if (this.platform.is('cordova')) {
      this.getDashboard();
    } else {
      this.getDashboardForTest();
    }
    this.setLike();
  }
  //get message
  getMessage(uid, uid2) {
    if (this.platform.is('cordova')) {
      this.httpProvider.getMessage(uid).then((result) => {
        console.log(JSON.stringify(result));
        this.maxCommentsMsg = result.message;
        this.maxCommentsPic = result.full_picture;
        this.httpProvider.getMessage(uid2).then((result2) => {
          console.log(JSON.stringify(result2));
          this.maxReactionsMsg = result2.message;
          this.maxReactionsPic = result2.full_picture;
          this.getWordCloud();
        }, (error) => {

          console.log(error);

        });
      }, (error) => {

        console.log(error);

      });

    } else {
      this.maxCommentsMsg = "Message"
      this.maxReactionsMsg = "Message2"
    }
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
          backgroundColor: "#bae1ff",
          borderWidth: 1
        }, {
          label: 'Total reactions',
          data: this.total_reactions,
          backgroundColor: "#ffb3ba",
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            ticks: {
              minRotation: 90,
              fontSize: 10
            }
          }]
        },
        layout: {
          padding: {
            left: 2,
            right: 2,
            top: 0,
            bottom: 2
          }
        }
      }

    });
  }

  trigerPage() {
    if (this.pageTriger == 'chart') {
      this.pageTriger = 'list';
      this.content.scrollToTop();
    } else if (this.pageTriger == 'list') {
      this.pageTriger = 'chart';
      this.createTime = [];
      this.total_comments = [];
      this.total_reactions = [];
      this.content.scrollToTop();
      this.getDashboard();
      
    }

  }
  presentProfileModal(uid: string, user_name: string) {
    //console.log(uid);
    let profileModal = this.modalCtrl.create('UserProfilePage', { userId: uid, name: user_name ,type:"friends"});
    profileModal.present();
  }

}
