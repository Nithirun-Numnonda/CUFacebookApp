import { HttpProvider } from './../../providers/http/http-provider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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

  newsData: any;
  loading: any;
  cards: Array<any>;
  // stackConfig: StackConfig;
  recentCard: string = '';
  public posts: Observable<any[]>;

  //for retry getData
  private retryTime;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private httpProvider: HttpProvider, public loadingController: LoadingController, private http: Http) {
    //for tinder
    //console.log(this.httpProvider.getPosts());
    // this.stackConfig = {
    //   throwOutConfidence: (offsetX, offsetY, element) => {
    //     return Math.min(Math.abs(offsetX) / (element.offsetWidth / 2), 1);
    //   },
    //   transform: (element, x, y, r) => {
    //     this.onItemMove(element, x, y, r);
    //   },
    //   throwOutDistance: (d) => {
    //     return 800;
    //   }
    // };

    //for retry
    this.retryTime = 0;

  }

  //call when refresh
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    //get data again
    this.getPost();
    refresher.complete();
  }
  getPost() {
    let loading = this.loadingController.create({ content: "Loading,please wait..." });
    loading.present();
    this.httpProvider.getPosts().subscribe(
      //call if get httpRequest success (But not error from getData from facebook such as access token expired!!)
      result => {
        //check if server send error back
        if (result.error) {
          //check if token expire?
          if (result.error.type == "OAuthException") {
            console.log("Token expired!!!");
            this.retryTime += 1;
            if (this.retryTime < 3)
              return this.getPost();
            else
              console.log("Access Token expired!!!");
          }
          else{
            this.setLike();
            this.getPost();
          }

        }

        //assign data to view
        this.newsData = result;
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
  setLike(){
    this.httpProvider.setLike().subscribe((value)=>{
      console.log(value);
    });
    
  }
  ionViewDidLoad(){
    console.log('ionViewDidLoad newfeedPage');
    this.getPost();
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
