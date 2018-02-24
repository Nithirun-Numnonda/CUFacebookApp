import { HttpProvider } from './../../providers/http/http-provider';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content, Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
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
  newsData: any;
  loading: any;
  cards: Array<any>;
  // stackConfig: StackConfig;
  recentCard: string = '';
  public posts: Observable<any[]>;

  //for retry getData
  private retryTime = 0;

  videoOptions :StreamingVideoOptions;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpProvider: HttpProvider,
    public loadingController: LoadingController,
    private http: Http,
    private platform: Platform,
    private streamingMedia: StreamingMedia,
  ) {

    //for retry
    this.retryTime = 0;
    this.videoOptions  = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming:'+JSON.stringify(e)) },
      orientation: 'portrait'
    };

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
  getPostForTest() {
    let loading = this.loadingController.create({ content: "Loading,please wait..." });
    loading.present();
    this.httpProvider.getPostForTest().subscribe(
      //call if get httpRequest success (But not error from getData from facebook such as access token expired!!)
      result => {
        //check if server send error back
        //assign data to view

        this.newsData = result.newsfeed.data;
        console.log(this.newsData);
        try {
          for (let data of this.newsData) {
            var newDate = new Date(data.created_time);
            data.created_time = newDate.toDateString();
          }

        } catch (error) {

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
    loading.present();
    this.httpProvider.getPosts().subscribe(
      //call if get httpRequest success (But not error from getData from facebook such as access token expired!!)
      result => {
        loading.dismissAll();
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

        try {
          for (let data of this.newsData) {
            var newDate = new Date(data.created_time);
            data.created_time = newDate.toDateString();
          }

        } catch (error) {

        }
        console.log("Success : " + JSON.stringify(result));

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
  getPostsNext() {
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
            return this.getPosts();
          else
            console.log("Access Token expired!!!");

        }

        //assign data to view

        try {
          for (let data of result.newsfeed.data) {
            var newDate = new Date(data.created_time);
            data.created_time = newDate.toDateString();
            this.newsData.push(data);
          }

        } catch (error) {

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
  setLike() {
    this.httpProvider.setLike().subscribe((value) => {
      console.log(value);
    });

  }
  playVideo(url) {
    this.streamingMedia.playVideo(url, this.videoOptions);
  }
  doInfinite(infiniteScroll) {
    setTimeout(() => {
      console.log('Async operation has ended');
      this.getPostsNext();
    }, 1000);
    infiniteScroll.complete();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad newfeedPage');
    if (this.platform.is('cordova')) {
      this.getPosts();
    } else {
      this.getPostForTest()
    }
    //this.getCommentsData();
    //this.createGraph();
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
