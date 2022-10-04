import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, NavController } from '@ionic/angular';
import { CameraService } from '../camera.service';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.page.html',
  styleUrls: ['./advertisement.page.scss'],
})
export class AdvertisementPage implements OnInit {

  advertisementImage: string = 'assets/imgs/ad-background-image.png';
  customActionSheetOptions: any = {
    header: 'Pick your Category',
    // subHeader: 'Select your favorite color'
  };
  constructor(private navCtrl: NavController,
    private actionSheetController: ActionSheetController,
    private router: Router,
    private cameraService: CameraService,
    private toastService: ToastService) { }

  ngOnInit() {
  }
  goBack(){
    this.navCtrl.navigateBack('/profile');
  }
  postNow(){
    this.toastService.presentToastAdvertisement('Your advertisement has been received and our team is reviewing it for further process.');
    this.navCtrl.navigateRoot('/tabs');
    // this.router.navigate(['profile']);
  }
  //Pick Image for advertisement
  async changeAdvertisementPic() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Pick photo from',
      cssClass: 'profile-pic-action-sheet',
      buttons: [ {
        text: 'Camera',
        handler: () => {
          console.log('Camera');
          this.cameraService.openCamera().then(imageData => {
            this.advertisementImage = 'data:image/jpeg;base64,' + imageData;
          })
        }
      },
      {
        text: 'Gallery',
        handler: () => {
          console.log('Gallery');
          this.cameraService.openGallery().then(imageData => {
            this.advertisementImage = 'data:image/jpeg;base64,' + imageData;
          })
        }
      }
    ]
    });
    await actionSheet.present();
    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }


  //Convert Base64 of image to blob
  settingUpImage(imageData){
    var img = 'data:image/jpeg;base64,' + imageData;
    const blobImg = this.dataURItoBlob(img);
    const formData: FormData = new FormData();
    formData.append('avatar', blobImg, 'image.jpeg');
    console.log(blobImg);
  }
  dataURItoBlob(dataURI: any) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    let byteString: any;
    if (dataURI.split(',')[0].indexOf('base64') >= 0) {
      byteString = atob(dataURI.split(',')[1]);
    } else {
      byteString = unescape(dataURI.split(',')[1]);
    }
    // separate out the mime component
    const mimeString = dataURI
      .split(',')[0]
      .split(':')[1]
      .split(';')[0];
    // write the bytes of the string to a typed array
    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], { type: mimeString });
  }
}
