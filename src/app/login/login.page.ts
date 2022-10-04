import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { LoaderService } from '../loader.service';
import { RestService } from '../rest.service';
import { ToastService } from '../toast.service';

import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { DataService } from '../data.service';
import { FingerprintAIO, FingerprintSecretOptions } from '@ionic-native/fingerprint-aio/ngx';
// import FingerprintAIO from 'cordova-plugin-fingerprint-aio';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  focusUsername: boolean = false;
  focusPassword: boolean = false;
  
  formLogin: FormGroup;
  isSubmitted: boolean = false;

  apiResponse: any;

  bioMetricVal: boolean = false;
  constructor(private formBuilder: FormBuilder,
    private toastService: ToastService,
    private nativeStorage: NativeStorage,
    private alertCtrl: AlertController,
    private loadService: LoaderService,
    private dataService: DataService,
    private barcodeScanner: BarcodeScanner,
    private restService: RestService,
    private faio: FingerprintAIO,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_][a-zA-Z0-9_.]*'),,Validators.minLength(7)]],
      password: ['', [Validators.required, Validators.pattern(''),Validators.minLength(8)]]
    }, { 
    });
    //enable toggle if biometric is enable in the localstoage
    if(!localStorage.getItem('userToken')){
      console.log('No user token exsist, echoing from Login Page!');
      if(localStorage.getItem('enableBiometric')){
        this.bioMetricVal = Boolean(localStorage.getItem('enableBiometric'));
        setTimeout(() => {
          this.showFingerprintAuthDlg();
        } , 1500);
        
      }
    }
  }
  async privacyPolicyAlert(){
    let alert = await this.alertCtrl.create({
      header: 'Terms & Conditions',
      cssClass: 'privacy-policy-alert',
      mode: 'ios',
      message: 'To protect your legal rights and interests, please read the conditions and accept them',
      buttons: [
        {
          text: 'Disagree',
          role: 'cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    await alert.present();
  }
  loginMe(){
    this.isSubmitted = true;
    if (!this.formLogin.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      this.loadService.presentLoading('Login, Please wait..');
      console.log(this.formLogin.value);
      //Send request on server
      
      var formData = new FormData();
      formData.append('username' , this.formLogin.value.username);
      formData.append('password' , this.formLogin.value.password);
      this.restService.login(formData).subscribe(respone => {
        console.log(respone);
        this.apiResponse = respone;
        
        if(this.apiResponse.status == 'success'){
    
          //Store profile Information
          localStorage.setItem('userToken' , this.apiResponse.token);
          
          console.log('bioMetricVal');
          console.log(this.bioMetricVal);
          if(this.bioMetricVal){
            this.showBioInfoAlert('Enable Biometric and login to QBerg?');
          }else{
            this.saveProfileAndProceed();
          }

          setTimeout(() => {
            this.loadService.dismissLoader();
            // this.toastService.presentToast(this.apiResponse.msg);
          } , 300);
          
        }else{
          this.toastService.presentToast(this.apiResponse.msg);
          this.loadService.dismissLoader();
        }
        
      }, err => {
        this.loadService.dismissLoader();
        console.log(err);
        this.toastService.presentToast('Opps! Server Error!')
      });
    }
  }
  get errorControl() {
    return this.formLogin.controls;
  }
  //Login with QR Code
  qrCodeLogin(){
    const options: BarcodeScannerOptions = {
      preferFrontCamera: false,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: 'Place the QRCode inside the Scanning Area',
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
  focusInput(key){
    if(key == 'username'){
      this.focusUsername = true;
      this.focusPassword = false;
    }else if(key == 'password'){
      this.focusUsername = false;
      this.focusPassword = true;
    }
  }
  blurInput(key){
    if(key == 'username'){
      this.focusUsername = false;
    }else if(key == 'password'){
      this.focusPassword = false;
    }
  }
  forgotPassword(){
    this.navCtrl.navigateForward('/forgotpassword');
  }
  saveProfileInfo(userToken){
    this.restService.getProfile(userToken).subscribe(data => {
      console.log('get profile');
      var profile: any = data;
      console.log(profile);
      this.dataService.saveProfileInfo(profile);
      this.dataService.saveUnreadMessageCount(profile.message);
      console.log(data);
    } , err => {
      if(err.error.message == 'Unauthenticated.'){
        //Session is expired in the DB, logout the user 
        // localStorage.clear();//Clear Local Storage
        localStorage.removeItem('userToken');
        this.nativeStorage.clear().then(response => {//Clear Native Storage
          console.log(response);
        } , err => {
          console.log(err);
        });
        this.navCtrl.navigateRoot('/login');
        this.toastService.presentToastAdvertisement('Session expired, please login again');
      }      
    });
  }

  showFingerprintAuthDlg(){
    if(Boolean(localStorage.getItem('enableBiometric'))){
      this.faio.isAvailable().then(data => {
        console.log('isAvailable');
        console.log(data);
        if(data){
          this.faio.show({
            cancelButtonTitle: 'Cancel',
            disableBackup: true,
            title: 'Authenticate with Biometric',
            subtitle: 'Use your Biometric to access QBerg app',
            fallbackButtonTitle: 'FB Back Button',
          }).then(data => {
            console.log(data);
            
            this.loadService.presentLoading('Login, Please wait..');
            var formData = new FormData();
            formData.append('username' , localStorage.getItem('username'));
            formData.append('password' , localStorage.getItem('password'));
            this.restService.login(formData).subscribe(respone => {
              console.log(respone);
              this.apiResponse = respone;
              
              if(this.apiResponse.status == 'success'){
                localStorage.setItem('userToken' , this.apiResponse.token);//Store profile Information
                this.saveProfileAndProceed();
              }else{
                this.toastService.presentToast(this.apiResponse.msg);
                this.loadService.dismissLoader();
              }
              
            }, err => {
              this.loadService.dismissLoader();
              console.log(err);
              this.toastService.presentToast('Opps! Server Error!')
            });
            
          }).catch((error: any) => {
            console.log(error , 'Finger print error!');
            // if(error.code == -113){
            //   //No biometric secret found, first register a biometric secret
      
            // }
          });
        }else{
          this.simpleAlert('Biometric not availble on your device');
        }
      } , err => {
        this.simpleAlert(err.message);
      });
    }else{
      // this.simpleAlert('For Biometric Authentication you need to login with username and password first, We\'ll ask you about username and password once!');
    }
  }
  biometricToggle(event){
    console.log(event.detail.checked);
    this.bioMetricVal = event.detail.checked;
    if(event.detail.checked){
      this.simpleAlert('For Biometric Authentication you need to login with username and password first, We\'ll ask you about username and password once!');
    }else{
      this.simpleAlert('If you turn off Biometric, then you need to give again username and password to enable Biometric');
    }
  }
  async showBioInfoAlert(message){
    
    let alert = await this.alertCtrl.create({
      subHeader: message,
      backdropDismiss: false,
      cssClass: 'unsubscribe-alert',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.clearBioMetricInfo();
            this.saveProfileAndProceed();
          }
        },
        {
          text: 'Enable & proceed',
          role: 'ok',
          handler: () => {
            console.log('ok');
            localStorage.setItem('enableBiometric', String(this.bioMetricVal));
            localStorage.setItem('username', this.formLogin.value.username);
            localStorage.setItem('password', this.formLogin.value.password);
            this.saveProfileAndProceed();
          }
        }
      ]
    });
    alert.present();
  }
  saveProfileAndProceed(){
    this.nativeStorage.setItem('userInfo', this.apiResponse).then(response => {
      console.log(response);
    } , err => {
      console.log('can\'t save profile info becuase cordova is not available!');
    });
    this.saveProfileInfo(this.apiResponse.token);
    
    //Case successfull, Redirect to next page
    this.loadService.dismissLoader();
    this.navCtrl.navigateRoot('/tabs');
  }
  async simpleAlert(message){
    
    let alert = await this.alertCtrl.create({
      subHeader: message,
      backdropDismiss: false,
      cssClass: 'unsubscribe-alert',
      buttons: [
        // {
        //   text: 'Cancel',
        //   role: 'cancel',
        //   handler: () => {
        //     console.log('Cancel clicked');
            
        //   }
        // },
        {
          text: 'Ok',
          role: 'ok',
          handler: () => {
            console.log('ok');
            this.clearBioMetricInfo();
          }
        }
      ]
    });
    alert.present();
  }
  clearBioMetricInfo(){
    // this.bioMetricVal = false;
    localStorage.removeItem('enableBiometric');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }
  signup(){
    this.navCtrl.navigateForward('/signup');
  }
  loginWithPhone(){
    this.navCtrl.navigateRoot('/phonenumber');
  }
}
