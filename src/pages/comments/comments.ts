import { TimeProvider } from './../../providers/time/time';
import { HttpProvider } from './../../providers/http/http-provider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {
  //declare Variable
  postId:string;
  commentsData:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,public httpProvider:HttpProvider,private loadingController:LoadingController,private timeProvider: TimeProvider) {
    //initial Variable
    this.postId = this.navParams.get('postId');
  }
  //method for get comment from this post
  getComments(){
    //create loading
    let loading = this.loadingController.create({
      content: "LOADING, Please wait...",
    });
    //call httpProvider to call graph api
    this.httpProvider.getComments(this.postId).subscribe(
      (comments)=>{
        //assign data
        this.commentsData=comments.comments.data;
        for (let data of this.commentsData) {
          data.created_time = this.timeProvider.getDiffTime(data.created_time);
        }
        loading.dismiss();
    });
  }

  //every time enter this page
  ionViewWillEnter() {
    console.log('ionViewDidLoad UserProfilePage');
    //call method to get comments
    this.getComments();
  }
  close(){
    this.navCtrl.pop();
  }

}
