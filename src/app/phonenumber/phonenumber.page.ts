import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AlertController, MenuController, ModalController, NavController } from '@ionic/angular';
import { CountriesPage } from '../countries/countries.page';
import { DataService } from '../data.service';
import { LoaderService } from '../loader.service';
import { RestService } from '../rest.service';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-phonenumber',
  templateUrl: './phonenumber.page.html',
  styleUrls: ['./phonenumber.page.scss'],
})
export class PhonenumberPage implements OnInit {

  formLogin: FormGroup;
  isSubmitted: boolean = false;
  countryCode: any = "92";
  
  getCodeResponse: any = {};
  apiResponse: any;

  constructor(private formBuilder: FormBuilder,
    private restService: RestService,
    private alertCtrl: AlertController,
    private toastService: ToastService,
    private menuCtrl: MenuController,
    private loaderService: LoaderService,
    private modalController: ModalController,
    private nativeStorage: NativeStorage,
    private dataService: DataService,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      mobilenumber:  ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      verificationcode: ['', [Validators.required, Validators.pattern(''),Validators.minLength(6)]]
    }, { 
    });
  }
  getCode(){
    this.loaderService.presentLoginLoading('Please wait');
    var formData = new FormData();
    formData.append('code' , '+' + this.countryCode);
    formData.append('phone' , this.formLogin.value.mobilenumber);
    this.restService.sendOtpForLogin(formData).subscribe(data => {
      console.log(data);
      this.getCodeResponse = data;
      this.loaderService.dismissLoginLoader();
      if(this.getCodeResponse.status == 'error'){
        this.toastService.presentWaitToast('Phone number doesn\'t exist');
      }else{
        this.toastService.presentWaitToast('OTP successfully sent');
      }
    } , err => {
      this.loaderService.dismissLoginLoader();
      this.toastService.presentWaitToast('Snap, its server error');
      console.log(err);
    });
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
      this.loaderService.presentLoginLoading('Please wait');
      var formData = new FormData();
      formData.append('code' , '+' + this.countryCode);
      formData.append('phone' , this.formLogin.value.mobilenumber);
      formData.append('otp' , this.formLogin.value.verificationcode);
      this.restService.loginWithOTP(formData).subscribe(data => {
        console.log(data);
        this.apiResponse = data;
        if(this.apiResponse.status == 'error'){
          this.toastService.presentWaitToast('Your entered OTP is wrong');
        }else{
          //Store profile Information
          localStorage.setItem('userToken' , this.apiResponse.token);
          this.saveProfileAndProceed();
        }
      } , err => {
        this.loaderService.dismissLoginLoader();
        this.toastService.presentWaitToast('Snap, its server error');
        console.log(err);
      });
    }
  }
  get errorControl() {
    return this.formLogin.controls;
  }
  saveProfileAndProceed(){
    var userInfo = localStorage.setItem('userInfo', JSON.stringify(this.apiResponse));
    this.nativeStorage.setItem('userInfo', this.apiResponse).then(response => {
      console.log(response);
    } , err => {
      console.log('can\'t save profile info becuase cordova is not available!');
    });
    this.saveProfileInfo(this.apiResponse.token);
    
    //Case successfull, Redirect to next page
    this.loaderService.dismissLoginLoader();
    this.menuCtrl.enable(true,'menu-main');//Enable Menu
    this.menuCtrl.enable(true,'menu-more');//Enable Menu
    this.navCtrl.navigateRoot('/welcome');
  }
  saveProfileInfo(userToken){
    this.restService.getProfile(userToken).subscribe(data => {
      // console.log('get profile');
      var profile: any = data;
      this.dataService.saveProfileInfo(profile);
      // this.dataService.saveUnreadMessageCount(profile.message);
      console.log(data);
    } , err => {
      if(err.error.message == 'Unauthenticated.'){
        //Session is expired in the DB, logout the user 
        // localStorage.clear();//Clear Local Storage
        localStorage.removeItem('userToken');
        localStorage.removeItem('userInfo');
        this.nativeStorage.clear().then(response => {//Clear Native Storage
          console.log(response);
        } , err => {
          console.log(err);
        });
        this.navCtrl.navigateRoot('/phonenumber');
        this.toastService.presentToastAdvertisement('Session expired, please login again');
      }      
    });
  }
  loginWithInfo(){
    this.navCtrl.navigateForward('/login');
  }
  async pickCountryCode(){
    const modal = await this.modalController.create({
      component: CountriesPage,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null && dataReturned.data !== null) {
        this.countryCode = dataReturned.data.number;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }
  ionViewWillLeave(){
    this.getCodeResponse = {};
  }
}
