import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ActionSheetController, AlertController, NavController } from '@ionic/angular';
import { CameraService } from '../camera.service';
import { LoaderService } from '../loader.service';
import { RestService } from '../rest.service';
import { ToastService } from '../toast.service';
//BarCode Scanner
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profileImage: string = 'https://ae01.alicdn.com/kf/H964507f75cb8489ea81b3cb99250001f3/BAOGELA-New-Skull-Men-Watches-Military-Silicone-Brand-Pirate-Hollow-Watch-Men-Luminous-Sports-Wristwatch-Relogio.jpg_Q90.jpg_.webp';
  profileName = 'Andrew Nelson';
  showProfileName: boolean = false;

  apiResponse: any;
  profileApiResponse: any = {};
  profileTSLanguage: any = {};

  profileInfo: any = {};
  unreadMessage: any;
  constructor(private navCtrl: NavController,
    private alertController: AlertController,
    private toastService: ToastService,
    private cameraService: CameraService,
    private router: Router,
    private restService: RestService,
    private loaderService: LoaderService,
    private nativeStorage: NativeStorage,
    private translate: TranslateService,
    private barcodeScanner: BarcodeScanner,
    private dataService: DataService,
    public actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.getProfileData();
  }
  getProfileData(){
    //Get Profile data
    this.profileInfo = this.dataService.getProfileInfo();
    this.unreadMessage = this.dataService.getUnreadMessageCount();
    console.log(this.unreadMessage);
  }
  async logScrolling(scroll) {
    console.log(scroll);
    if (scroll.detail.scrollTop >= 123) {
      console.log('more than 123');
      this.showProfileName = true;
      if(document.querySelector('.profile-data-wrap-div-header')){
        document.querySelector('.profile-data-wrap-div-header').classList.add('change');
      }
      
    }else{
      console.log('less than 123');
      this.showProfileName = false;
      if(document.querySelector('.profile-data-wrap-div-header')){
        document.querySelector('.profile-data-wrap-div-header').classList.add('change-low');
      }
    }
  }
  goBack(){
    this.navCtrl.navigateBack('/tabs');
  }
  //Go To Notification Page
  goToNotificationsPage(){
    this.navCtrl.navigateForward('/notification');
  }
  buttonClick(value){
    if(value == 'qrcode'){
      this.openQRCodeScaner();
    }else if(value == 'settings'){
      this.navCtrl.navigateForward('/settings');
    }else if(value == 'about'){
      this.navCtrl.navigateForward('/about');
    }else if(value == 'support'){
      this.navCtrl.navigateForward('/support');
    }else if(value == 'privacy'){
      this.navCtrl.navigateForward('/privacypolicy');
    }else if(value == 'advertise'){
      // this.router.navigate(['subscription']);
      this.navCtrl.navigateForward('/advertisement');
    }else if(value == 'logout'){
      this.loaderService.presentLoading('Logging out, Please wait..');
      //Get Token from Local Storage 
      var userToken = localStorage.getItem('userToken');
      var formData = new FormData();
      this.restService.logout(formData , userToken).subscribe(response => {
        this.apiResponse = response;
        console.log(this.apiResponse);
        this.loaderService.dismissLoader();
        if(this.apiResponse.status == 'success'){
          //Clear Local Storage
          localStorage.removeItem('userToken');
          //Clear Native Storage
          this.nativeStorage.clear().then(response => {
            console.log(response);
          });
          this.navCtrl.navigateRoot('/login');
          this.toastService.presentToast(this.apiResponse.msg);
        }else{
          this.toastService.presentToast(this.apiResponse.msg);
        }
      } , err => {
        console.log(err);
        this.loaderService.dismissLoader();
      });
    }
  }
  async changeProfilePic() {
    const actionSheet = await this.actionSheetController.create({
      header: this.profileTSLanguage.pick_photo_from,
      cssClass: 'profile-pic-action-sheet',
      buttons: [ {
        text: this.profileTSLanguage.camera,
        handler: () => {
          console.log('Camera');
          this.cameraService.openCamera().then(imageData => {
            this.profileImage = 'data:image/jpeg;base64,' + imageData;
            this.settingUpImage(this.profileImage);
          })
        }
      },
      {
        text: this.profileTSLanguage.gallery,
        handler: () => {
          console.log('Gallery');
          this.cameraService.openGallery().then(imageData => {
            this.profileImage = 'data:image/jpeg;base64,' + imageData;
            this.settingUpImage(this.profileImage);
          })
        }
      }
    ]
    });
    await actionSheet.present();
    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }
  async changeName() {
    const alert = await this.alertController.create({
      cssClass: 'edit-name-alert',
      header: this.profileTSLanguage.edit_name,
      inputs: [
        {
          name: 'name',
          type: 'text',
          value: this.profileInfo.name,
          placeholder: this.profileTSLanguage.name
        },
      ],
      buttons: [
        {
          text: this.profileTSLanguage.cancel,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: this.profileTSLanguage.confirm,
          role: '',
          handler: (data) => {
            console.log('Confirm Ok' , data);
            if(data.name == ''){
              // this.profileName = 'Enter Name';
              this.toastService.presentToastAdvertisement('Name cannot be empty ..');
            }else{
              const formData: FormData = new FormData();
              formData.append('name', data.name);
              this.updateProfile(formData);
            }
          }
        }
      ]
    });
    await alert.present();
  }
  openWidget(value){
    console.log(value);
    if(value == 'history'){
      this.navCtrl.navigateForward('/history');
    }else if(value == 'collections'){
      this.navCtrl.navigateForward('/collections');      
    }else if(value == 'interest'){
      this.navCtrl.navigateForward('/interest');
    }
  }
  //Open QRCode scanner
  openQRCodeScaner(){
    const options: BarcodeScannerOptions = {
      preferFrontCamera: false,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: this.profileTSLanguage.scanningText,
      resultDisplayDuration: 500,
      formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
      orientation: 'portrait',
    };
    this.barcodeScanner.scan(options).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      }).catch(err => {
          console.log('Error', err);
    });
  }
  ionViewWillEnter(){
    this.getFileLanguage();
  }
  //File Language
  getFileLanguage(){
    this.translate.get('edit_name').subscribe(data => {
      this.profileTSLanguage.edit_name = data;
    });
    this.translate.get('pick_photo_from').subscribe(data => {
      this.profileTSLanguage.pick_photo_from = data;
    });
    this.translate.get('camera').subscribe(data => {
      this.profileTSLanguage.camera = data;
    });
    this.translate.get('gallery').subscribe(data => {
      this.profileTSLanguage.gallery = data;
    });
    this.translate.get('pick_photo_from').subscribe(data => {
      this.profileTSLanguage.pick_photo_from = data;
    });
    this.translate.get('cancel').subscribe(data => {
      this.profileTSLanguage.cancel = data;
    });
    this.translate.get('confirm').subscribe(data => {
      this.profileTSLanguage.confirm = data;
    });
    this.translate.get('submit').subscribe(data => {
      this.profileTSLanguage.submit = data;
    });
    this.translate.get('name').subscribe(data => {
      this.profileTSLanguage.name = data;
    });
    this.translate.get('place_qr_in_scanning_area').subscribe(data => {
      this.profileTSLanguage.scanningText = data;
    });
  }
  //Setup Image to convert it into a blob and send on API
  settingUpImage(imageData){
    var img = imageData;
    const blobImg = this.dataURItoBlob(img);
    console.log(blobImg);
    const formData: FormData = new FormData();
    formData.append('profile_image', blobImg, 'image.jpeg');
    console.log(formData);
    this.updateProfile(formData);
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
  updateProfile(formData: FormData){
    this.loaderService.presentLoading('Updating Profile ..');
    var userToken  = localStorage.getItem('userToken');
    this.restService.updateProfile(formData, userToken).subscribe(data => {
      this.loaderService.dismissLoader();
      console.log(data);
      var apiResponse: any = data;
      if(apiResponse.status){
        this.toastService.presentToast('Profile updated');
        if(formData.has('name')){
          this.profileInfo.name = formData.get('name');
        }else if(formData.has('profile_image')){
          this.profileInfo.image_url = this.profileImage;
        }
        this.dataService.saveProfileInfo(this.profileInfo);
      }else{
        this.toastService.presentToast('Profile not updated due to server error');
      }
    }, err => {
      this.loaderService.dismissLoader();
      this.toastService.presentToast('Oops! Some server error occurred ..');
    });
  }
}
