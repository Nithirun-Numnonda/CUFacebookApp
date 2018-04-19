import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';

/**
 * Generated class for the ImagePickerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'imagePickerPage'
})
@Component({
  selector: 'page-image-picker',
  templateUrl: 'image-picker.html',
})
export class ImagePickerPage {
  photos:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private imagePicker:ImagePicker) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagePickerPage');
  }
  openImagePicker(){
    let options= {
      maximumImagesCount: 1,
    }
    
    this.imagePicker.getPictures(options)
    .then((results) => {
      this.photos=results;
      alert(results[0]);
    }, (err) => { console.log(err) });
  }

}
