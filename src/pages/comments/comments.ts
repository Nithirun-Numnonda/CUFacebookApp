import { TimeProvider } from './../../providers/time/time';
import { HttpProvider } from './../../providers/http/http-provider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the CommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {
  postId:string;
  commentsData:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public httpProvider:HttpProvider,private loadingController:LoadingController,private timeProvider: TimeProvider) {
    this.postId = this.navParams.get('postId');
  }
  getComments(){
    let loading = this.loadingController.create({
      content: "LOADING, Please wait...",
    });
    this.httpProvider.getComments(this.postId).subscribe(
      (comments)=>{
        this.commentsData=comments.comments.data;
        //alert(JSON.stringify(this.commentsData));
        for (let data of this.commentsData) {
          data.created_time = this.timeProvider.getDiffTime(data.created_time);
        }
        loading.dismiss();
    });
  }
  ionViewWillEnter() {
    console.log('ionViewDidLoad UserProfilePage');
    this.getComments();
  }

}
