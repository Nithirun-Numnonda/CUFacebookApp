import { EN_TAB_PAGES } from './../../app/app.config';
import { BackbuttonService } from './../../services/backbutton.service';
import { SearchDataProvider } from './../../providers/search-data/search-data';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController, Platform, Content, Navbar } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http-provider';
import { Chart } from 'chart.js';

import { Storage } from '@ionic/storage';



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
  total_reactions: Array<any>;
  total_comments: Array<any>;
  nativeEle: any;
  maxReactionsPost: any;
  maxReactionsMsg: any;
  maxReactionsPic: any;
  maxCommentsPost: any;
  maxCommentsMsg: any;
  maxCommentsPic: any;
  dayComments: Array<any>;
  dayLikes: Array<any>;
  hoursComments: Array<any>;
  hoursLikes: Array<any>;
  amComments: Array<any>;
  amLikes: Array<any>;
  pmComments: Array<any>;
  pmLikes: Array<any>;
  monthLabels: Array<any>;
  monthComments: Array<any>;
  monthLikes: Array<any>;
  segment: any;

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
  //word cloud
  wordCloud: any;
  hasData: boolean;

  //for controlUI
  typeData: String = 'commentsData';
  pageTriger: String = 'chart';
  @ViewChild(Content) content: Content;
  // @ViewChild(Navbar) navBar: Navbar;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private httpProvider: HttpProvider,
    private loadingController: LoadingController,
    public modalCtrl: ModalController,
    private platform: Platform,
    private storage: Storage,
    private searchData: SearchDataProvider,
    private backbuttonService:BackbuttonService
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
    this.dayComments = [0, 0, 0, 0, 0, 0, 0];
    this.dayLikes = [0, 0, 0, 0, 0, 0, 0];
    this.hoursComments = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.hoursLikes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.amLikes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.amComments = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.pmLikes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.pmComments = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.monthLabels = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
    this.monthComments = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.monthLikes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.segment = "post";
    this.sortByTime = 'Last 3 months';

  }
  //call when view did load
  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
    // this.navBar.backButtonClick = (e: UIEvent) => {
    //   console.log("Back button clicked");
    //   this.navCtrl.parent.viewCtrl.dismiss();
    // };
    this.getSaveStorage();
    this.storage.get('hasDashboardData').then((val) => {
      if (val != null) {
        this.hasData = val;
        this.httpProvider.getPages().then((result)=>{
          for(let data of result.data){
            this.searchData.addItem(data.name,data.id,"pages");
          }
        })
      }
      else {
        this.hasData = false;
      }
      if (this.platform.is('cordova')) {
        this.getDashboard();
        this.setLike();
      } else {
        this.getDashboardForTest();
      }
    });

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
  //get Facebook Data from httpProvider
  getDashboard() {
    this.timeSwitchCase();
    let loading = this.loadingController.create({
      content: "LOADING, Please wait...",
    });
    if (!this.hasData) {
      loading.present();
    }
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
                if (!this.hasData)
                  loading.dismissAll();
                return this.getDashboard();
              }
              else
                console.log("Access Token expired!!!");
            }

          }
          if (result.id) {
            if (!this.hasData)
              loading.dismissAll();
            return null;
          } else {
            //assign data to view
            this.commentsData = result.comments.data;
            this.reactionsData = result.reactions.data;
            this.postsSummaryData = result.post_summary.data;

            if (this.postsSummaryData) {
              this.prepareGraphData();
            }

            if (this.pageTriger == "chart")
              this.createGraph(this.segment);
            this.storage.set('commentsData', this.commentsData);
            this.storage.set('reactionsData', this.reactionsData);
            this.storage.set('postsSummaryData', this.postsSummaryData);

            this.storage.set('hasDashboardData', true);
            if (this.platform.is('cordova')) {
              if (this.postsSummaryData)
                this.getMessage(this.maxCommentsPost.id, this.maxReactionsPost.id);
            }
            this.retryTime = 0;
            this.httpProvider.setUid(result._uid);
            if (result.comments.next || result.reactions.next)
              this.isAll = false;
            else
              this.isAll = true;
            if (!this.hasData)
              loading.dismissAll();
            this.hasData = true;
          }
        },
        err => {
          //call if fail to get request
          console.error("Error : " + err);
          alert("Can't get Data from the server: " + err);
          if (!this.hasData)
            loading.dismissAll();
        },
        () => {
          console.log('getData completed');
        }
      );
  }
  getAllTops() {
    this.isAll = true;
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
            this.createGraph("post");
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
      content: "LOADING, Please wait...",

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
              this.createGraph(this.segment);
            //          console.log("Success : " + JSON.stringify(result));
            if (this.platform.is('cordova')) {
              if (this.postsSummaryData)
                this.getMessage(this.maxCommentsPost.id, this.maxReactionsPost.id);
            }

            this.retryTime = 0;
            this.httpProvider.setUid(result._uid);
            if (result.comments.next || result.reactions.next)
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
  getWordCloud() {
    this.wordCloud = "";
    this.httpProvider.getWordCloud().subscribe((result) => {

      this.wordCloud += result;
      this.storage.set('wordCloud', this.wordCloud);
    });

  }
  getWordCloudForTest() {

    this.wordCloud = this.httpProvider.getWordCloudForTest();
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
          this.storage.set('maxCommentsMsg', this.maxCommentsMsg);
          this.storage.set('maxCommentsPic', this.maxCommentsPic);
          this.storage.set('maxCommentsPost', this.maxCommentsPost);
          this.storage.set('maReactionsMsg', this.maxReactionsMsg);
          this.storage.set('maxReactionsPic', this.maxReactionsPic);
          this.storage.set('maxReactionsPost', this.maxReactionsPost);
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
  getSaveStorage() {

    this.storage.get('commentsData').then((val) => {
      if (val != null) {
        this.commentsData = val;
      }
    });
    this.storage.get('reactionsData').then((val) => {
      if (val != null) {
        this.reactionsData = val;
      }
    });
    this.storage.get('postsSummaryData').then((val) => {
      if (val != null) {
        this.postsSummaryData = val;
      }
    });
    this.storage.get('createTime').then((val) => {
      if (val != null) {
        this.createTime = val;
      }
    });
    this.storage.get('total_comments').then((val) => {
      if (val != null) {
        this.total_comments = val;
      }
    });
    this.storage.get('total_reactions').then((val) => {
      if (val != null) {
        this.total_reactions = val;
        this.createGraph(this.segment);
      }
    });
    this.storage.get('wordCloud').then((val) => {
      if (val != null) {
        this.wordCloud = val;
      }
    });
    this.storage.get('dayComments').then((val) => {
      if (val != null) {
        this.dayComments = val;
      }
    });
    this.storage.get('dayLikes').then((val) => {
      if (val != null) {
        this.dayLikes = val;
      }
    });
    this.storage.get('amComments').then((val) => {
      if (val != null) {
        this.amComments = val;
      }
    });
    this.storage.get('amLikes').then((val) => {
      if (val != null) {
        this.amLikes = val;
      }
    });
    this.storage.get('pmComments').then((val) => {
      if (val != null) {
        this.pmComments = val;
      }
    });
    this.storage.get('pmLikes').then((val) => {
      if (val != null) {
        this.pmLikes = val;
      }
    });
    this.storage.get('monthLabels').then((val) => {
      if (val != null) {
        this.monthLabels = val;
      }
    });
    this.storage.get('monthComments').then((val) => {
      if (val != null) {
        this.monthComments = val;
      }
    });
    this.storage.get('monthLikes').then((val) => {
      if (val != null) {
        this.monthLikes = val;
      }
    });
    this.storage.get('maxCommentsMsg').then((val) => {
      if (val != null) {
        this.maxCommentsMsg = val;
      }
    });
    this.storage.get('maxCommentsPic').then((val) => {
      if (val != null) {
        this.maxCommentsPic = val;
      }
    });
    this.storage.get('maxCommentsPost').then((val) => {
      if (val != null) {
        this.maxCommentsPost = val;
      }
    });
    this.storage.get('maxReactionsMsg').then((val) => {
      if (val != null) {
        this.maxReactionsMsg = val;
      }
    });
    this.storage.get('maxReactionsPic').then((val) => {
      if (val != null) {
        this.maxReactionsPic = val;
      }
    });
    this.storage.get('maxReactionsPost').then((val) => {
      if (val != null) {
        this.maxReactionsPost = val;
      }
    });
  }


  segmentChanged(segment) {
    this.createGraph(segment);
  }
  //prepare data
  prepareGraphData() {
    //initial data
    var maxReactions = 0;
    var maxComments = 0;
    this.createTime = [];
    this.total_comments = [];
    this.total_reactions = [];
    this.dayComments = [0, 0, 0, 0, 0, 0, 0];
    this.dayLikes = [0, 0, 0, 0, 0, 0, 0];
    this.hoursComments = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.hoursLikes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.monthLabels = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
    this.monthComments = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.monthLikes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let data of this.postsSummaryData) {
      if (data.total_comments != 0 || data.total_reactions != 0) {
        var newDate = new Date(data.created_time);

        //day
        this.dayComments[newDate.getDay()] = this.dayComments[newDate.getDay()] + data.total_comments;
        this.dayLikes[newDate.getDay()] = this.dayLikes[newDate.getDay()] + data.total_reactions;
        //am and pm
        this.hoursComments[newDate.getHours()] = this.hoursComments[newDate.getHours()] + data.total_comments;
        this.hoursLikes[newDate.getHours()] = this.hoursLikes[newDate.getHours()] + data.total_reactions;
        //month
        this.monthComments[newDate.getMonth()] = this.monthComments[newDate.getMonth()] + data.total_comments;
        this.monthLikes[newDate.getMonth()] = this.monthLikes[newDate.getMonth()] + data.total_reactions;
        //post
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

    for (var i = 0; i < 12; i++) {
      this.amComments[i] = this.hoursComments[i + 1];
      this.amLikes[i] = this.hoursLikes[i + 1];
    }
    for (var i = 0; i < 11; i++) {
      this.pmComments[i] = this.hoursComments[i + 13];
      this.pmLikes[i] = this.hoursLikes[i + 13];
    }
    for (var i = 0; i < 12; i++) {
      if (this.monthComments[i] == 0 && this.monthLikes[i] == 0)
        this.monthLabels[i] = "";
    }
    this.monthLabels = this.monthLabels.filter(month => month != "");
    this.pmComments[11] = this.hoursComments[0];
    this.pmLikes[11] = this.hoursLikes[0];
    this.storage.set('createTime', this.createTime);
    this.storage.set('total_comments', this.total_comments);
    this.storage.set('total_reactions', this.total_reactions);
    this.storage.set('dayComments', this.dayComments);
    this.storage.set('dayLikes', this.dayLikes);
    this.storage.set('amComments', this.amComments);
    this.storage.set('amLikes', this.amLikes);
    this.storage.set('pmComments', this.pmComments);
    this.storage.set('pmLikes', this.pmLikes);
    this.storage.set('monthLabels',this.monthLabels);
    this.storage.set('monthComments',this.monthComments);
    this.storage.set('monthLikes',this.monthLikes);
  }
  //for create graph
  createGraph(typeOfGraph) {
    if (typeof this.barChart != 'undefined') {
      this.barChart.destroy();
    }
    if (typeOfGraph == "post") {
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
    } else if (typeOfGraph == "day") {
      this.barChart = new Chart(this.barCanvas.nativeElement, {

        type: 'bar',
        data: {
          labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          datasets: [{
            label: 'Total comments',
            data: this.dayComments,
            backgroundColor: "#bae1ff",
            borderWidth: 1
          }, {
            label: 'Total reactions',
            data: this.dayLikes,
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
    } else if (typeOfGraph == "am") {
      this.barChart = new Chart(this.barCanvas.nativeElement, {

        type: 'bar',
        data: {
          labels: ["1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 AM"],
          datasets: [{
            label: 'Total comments',
            data: this.amComments,
            backgroundColor: "#bae1ff",
            borderWidth: 1
          }, {
            label: 'Total reactions',
            data: this.amLikes,
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
    } else if (typeOfGraph == "pm") {
      this.barChart = new Chart(this.barCanvas.nativeElement, {

        type: 'bar',
        data: {
          labels: ["1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM", "12 PM"],
          datasets: [{
            label: 'Total comments',
            data: this.pmComments,
            backgroundColor: "#bae1ff",
            borderWidth: 1
          }, {
            label: 'Total reactions',
            data: this.pmLikes,
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
    } else if (typeOfGraph == "month") {
      this.barChart = new Chart(this.barCanvas.nativeElement, {

        type: 'bar',
        data: {
          labels: this.monthLabels,
          datasets: [{
            label: 'Total comments',
            data: this.monthComments,
            backgroundColor: "#bae1ff",
            borderWidth: 1
          }, {
            label: 'Total reactions',
            data: this.monthLikes,
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
  }
  //for switch UI
  trigerPage() {
    if (this.pageTriger == 'chart') {
      this.pageTriger = 'list';
      this.content.scrollToTop();
    } else if (this.pageTriger == 'list') {
      this.pageTriger = 'chart';
      this.content.scrollToTop();
      setTimeout(() => {
        this.createGraph(this.segment);
      }, 200);

    }

  }
  //for open profile user
  presentProfileModal(uid: string, user_name: string) {
    let profileModal = this.modalCtrl.create('UserProfilePage', { userId: uid, name: user_name, type: "friends" });
    profileModal.present();
  }
  ionViewWillEnter() {
    this.backbuttonService.pushPage(EN_TAB_PAGES.EN_TP_DASHBOARD,  
    this.navCtrl);
 }
}
