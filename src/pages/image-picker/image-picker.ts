import { HttpProvider } from './../../providers/http/http-provider';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
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
  imageURL: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private imagePicker: ImagePicker, private transfer: FileTransfer,
    private camera: Camera, private loadingCtrl: LoadingController, private toastCtrl: ToastController, private httpProvider: HttpProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagePickerPage');
  }
  openImagePicker() {
    let options = {
      maximumImagesCount: 1,
      outputType: 1
    }

    this.imagePicker.getPictures(options)
      .then((results) => {
        this.imageURL = results[0];
        //alert(this.imageURL);
      }, (err) => { console.log(err) });
  }
  getImage() {
    const options: CameraOptions = {
      quality: 40,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType:this.camera.PictureSourceType.SAVEDPHOTOALBUM
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageURL = imageData;
      //alert(this.imageURL);
    }, (err) => {
      this.presentToast(err);
    });
  }
  uploadImage() {
    //alert(this.imageURL);
    this.httpProvider.uploadImage(JSON.stringify(this.imageURL)).subscribe((result) => {
      alert(result);
    }, (err) => {
      alert("Err:"+err);
    })
  }
  uploadFile() {
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      chunkedMode: false,
      fileKey: 'file',
      fileName: 'filename.jpg',
      mimeType: "text/plain",
      headers: {}
    }
    var imageRetry = 0;
    this.httpProvider.getUid().then((uid) => {

      fileTransfer.upload(this.imageURL, 'http://103.233.194.200:8080/image/' + uid.id, options)
        .then((data) => {
          alert(data);
          loader.dismiss();
          this.presentToast("Upload Success");
        }, (err) => {
          console.log(err);
          loader.dismiss();
          alert(JSON.stringify(err));
        });
    })
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
