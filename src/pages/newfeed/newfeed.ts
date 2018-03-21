import { HistoryDataProvider } from './../../providers/history-data/history-data';
import { TimeProvider } from './../../providers/time/time';
import { HttpProvider } from './../../providers/http/http-provider';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content, Platform, ModalController, Navbar } from 'ionic-angular';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
// import {
//   StackConfig,
//   Stack,
//   Card,
//   ThrowEvent,
//   DragEvent,
//   SwingStackComponent,
//   SwingCardComponent
// } from 'angular2-swing';

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
  providers: [HttpProvider]
})
export class NewfeedPage {
  // @ViewChild('myswing1') swingStack: SwingStackComponent;
  // @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>; 
  @ViewChild(Content) content: Content;
  @ViewChild(Navbar) navBar: Navbar;
  newsData: any;
  loading: any;
  cards: Array<any>;
  // stackConfig: StackConfig;
  recentCard: string = '';
  public posts: Observable<any[]>;

  //for retry getData
  private retryTime = 0;



  videoOptions: StreamingVideoOptions;

  nextData = false;

  hasData: boolean;
  userId:any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpProvider: HttpProvider,
    public loadingController: LoadingController,
    private http: Http,
    private platform: Platform,
    private streamingMedia: StreamingMedia,
    private modalCtrl: ModalController,
    private timeProvider: TimeProvider,
    private storage: Storage,
    private historyData:HistoryDataProvider
  ) {
    //for retry
    this.retryTime = 0;
    this.videoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming:' + JSON.stringify(e)) }
    };

  }
  ionViewDidLoad() {
    // this.navBar.backButtonClick = (e: UIEvent) => {
    //   console.log("Back button clicked");
    //   this.navCtrl.parent.viewCtrl.dismiss();
    // };
    console.log('ionViewDidLoad newfeedPage');
    this.getSaveStorage();
    this.storage.get('hasPagesFeedData').then((val) => {
      if (val != null) {
        this.hasData = val;
      }
      else {
        this.hasData = false;
      }
      if (this.platform.is('cordova')) {
        this.getPosts();
      } else {
        this.getPostForTest()
      }
    });

    //this.getCommentsData();
    //this.createGraph();
  }
  //call when refresh
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.retryTime = 0;
    //get data again
    if (this.platform.is('cordova')) {
      this.getPosts();
    } else {
      this.getPostForTest()
    }
    refresher.complete();
  }
  getSaveStorage() {

    this.storage.get('pagesFeed').then((val) => {
      if (val != null) {
        this.newsData = val;
        try {
          for (let data of this.newsData) {
            data.created_time = this.timeProvider.getDiffTime(data.created_time);
          }

        } catch (error) {

        }
      }
    });
  }
  getPostForTest() {
    let loading = this.loadingController.create({ content: "Loading,please wait..." });
    loading.present();
    this.httpProvider.getPostForTest().subscribe(
      //call if get httpRequest success (But not error from getData from facebook such as access token expired!!)
      result => {
        //check if server send error back
        //assign data to view

        this.newsData = result.newsfeed.data;
        this.storage.set('pagesFeed', this.newsData);
        console.log(this.newsData);
        try {
          for (let data of this.newsData) {
            data.created_time = this.timeProvider.getDiffTime(data.created_time);
          }

        } catch (error) {
          alert(error);
        }
        console.log("Success : " + JSON.stringify(result));
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
  getPosts() {
    let loading = this.loadingController.create({ content: "Loading,please wait..." });
    // if(!this.hasData)
    // loading.present();
    this.httpProvider.getPosts().subscribe(
      //call if get httpRequest success (But not error from getData from facebook such as access token expired!!)
      result => {
        // if(!this.hasData)
        // loading.dismissAll();
        console.log(result);
        //check if server send error back
        if (result.__proto__ === Object) {
          //check if token expire?
          console.log("error!!!");
          this.retryTime += 1;
          if (this.retryTime < 3)
            return this.getPosts();
          else
            console.log("Access Token expired!!!");

        }

        //assign data to view
        this.newsData = result.newsfeed.data;
        this.storage.set('pagesFeed', this.newsData);
        try {
          for (let data of this.newsData) {
            data.created_time = this.timeProvider.getDiffTime(data.created_time);
          }

        } catch (error) {

        }
        
        this.storage.set('hasData', true);
        console.log("Success : " + JSON.stringify(result));

        this.retryTime = 0;
        if (result.next) {
          this.nextData = true;
        } else {
          this.nextData = false;
        }

      },
      err => {
        //call if fail to get request
        console.error("Error : " + err);
        alert("Can't get Data from the server: " + err);
        // loading.dismissAll();
      },
      () => {
        console.log('getData completed');
      }
    );
  }
  getPostsNext(infiniteScroll) {
    if (this.nextData) {
      this.httpProvider.getPostsNext().subscribe(
        //call if get httpRequest success (But not error from getData from facebook such as access token expired!!)
        result => {

          console.log(result);
          //check if server send error back
          if (result.__proto__ === Object) {
            //check if token expire?
            console.log("error!!!");
            this.retryTime += 1;
            if (this.retryTime < 3)
              return this.getPostsNext(infiniteScroll);
            else
              console.log("Access Token expired!!!");

          }

          //assign data to view

          try {
            for (let data of result.newsfeed.data) {

              data.created_time = this.timeProvider.getDiffTime(data.created_time);
              this.newsData.push(data);
            }

          } catch (error) {

          }


          if (result.next) {
            this.nextData = true;
          } else {
            this.nextData = false;
          }
          console.log("Success : " + JSON.stringify(result));

          this.retryTime = 0;
          infiniteScroll.complete();

        },
        err => {
          //call if fail to get request
          console.error("Error : " + err);
          alert("Can't get Data from the server: " + err);
        },
        () => {
          console.log('getData completed');
        }
      );
    } else {
      this.httpProvider.getPosts().subscribe(
        //call if get httpRequest success (But not error from getData from facebook such as access token expired!!)
        result => {

          console.log(result);
          //check if server send error back
          if (result.__proto__ === Object) {
            //check if token expire?
            console.log("error!!!");
            this.retryTime += 1;
            if (this.retryTime < 3)
              return this.getPosts();
            else
              console.log("Access Token expired!!!");

          }

          //assign data to view

          try {
            for (let data of result.newsfeed.data) {

              data.created_time = this.timeProvider.getDiffTime(data.created_time);
              this.newsData.push(data);
            }

          } catch (error) {

          }


          if (result.next) {
            this.nextData = true;
          } else {
            this.nextData = false;
          }
          console.log("Success : " + JSON.stringify(result));

          this.retryTime = 0;

        },
        err => {
          //call if fail to get request
          console.error("Error : " + err);
          alert("Can't get Data from the server: " + err);
        },
        () => {
          console.log('getData completed');
        }
      );
    }
  }
  setLike() {
    this.httpProvider.setLike().subscribe((value) => {
      console.log(value);
    });

  }
  likePost(pageid,postid){
    this.historyData.addLikeData({pageid:pageid,postid:postid});
  }
  dislikePost(postid,pageid){
    this.historyData.addDisLikeData({pageid:pageid,postid:postid});
  }
  playVideo(uid) {
    this.httpProvider.getSource(uid).then((result) => {
      //alert(JSON.stringify(result));
      this.streamingMedia.playVideo(result.source, this.videoOptions);
    })

  }
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.getPostsNext(infiniteScroll);
      console.log('Async operation has ended');
    }, 500);

  }


  presentProfileModal(uid: string, user_name: string) {
    //console.log(uid);
    let profileModal = this.modalCtrl.create('UserProfilePage', { userId: uid, name: user_name, type: "pages" });
    profileModal.present();
  }

  // ngAfterViewInit() {
  //   // Either subscribe in controller or set in HTML
  //   this.swingStack.throwin.subscribe((event: DragEvent) => {
  //     event.target.style.background = '#ffffff';
  //   });

  //   this.cards = [{ email: '' }];
  //   this.addNewCards(2);
  // }

  ////part tinder
  // Called whenever we drag an element
  onItemMove(element, x, y, r) {
    var color = '';
    var abs = Math.abs(x);
    let min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
    let hexCode = this.decimalToHex(min, 2);

    if (x < 0) {
      color = '#FF' + hexCode + hexCode;
    } else {
      color = '#' + hexCode + 'FF' + hexCode;
    }

    element.style.background = color;
    element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
  }
  // Connected through HTML
  voteUp(like: boolean) {
    let removedCard = this.cards.pop();
    this.addNewCards(1);
    if (like) {
      this.recentCard = 'You liked: ' + removedCard.email;
    } else {
      this.recentCard = 'You disliked: ' + removedCard.email;
    }
  }

  addNewCards(count: number) {
    this.http.get('https://randomuser.me/api/?results=' + count)
      .map(data => data.json().results)
      .subscribe(result => {
        for (let val of result) {
          this.cards.push(val);
        }
      })
  }

  // http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
  decimalToHex(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
      hex = "0" + hex;
    }

    return hex;
  }
  mapPosts = (post) => {
    return {
      from: post.from,
      time: post.created_time * 1000, // convert to milliseconds
      message: post.message,
      photos: this.getPhotos(post)
    };
  }
  getPhotos = (post) => {
    if (!post.attachments)
      return [];

    let attachments = post.attachments.data[0].subattachments ||
      post.attachments;

    return attachments.data
      .filter(x => x.type == "photo")
      .map(x => x.media.image);
  }
  ////end part tinder
}
