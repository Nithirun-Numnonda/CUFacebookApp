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
  }
  
  ionViewDidLoad() {
   this.httpProvider.getPosts();
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
