import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { IonContent, ModalController, NavController } from '@ionic/angular';
import { CountriesPage } from '../countries/countries.page';
import { DataService } from '../data.service';
import { LoaderService } from '../loader.service';
import { RestService } from '../rest.service';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.page.html',
  styleUrls: ['./signup2.page.scss'],
})
export class Signup2Page implements OnInit {

  @ViewChild(IonContent) content: IonContent;
  
  countryCode: any = "92";
  registeration: FormGroup;
  isSubmitted: boolean = false;

  apiResponse: any = {};
  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value
    return pass === confirmPass ? null : { notSame: true }
  }
  constructor(private formBuilder: FormBuilder,
    private loadService: LoaderService,
    private dataService: DataService,
    private restService: RestService,
    private toastService: ToastService,
    private nativeStorage: NativeStorage,
    private modalController: ModalController,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.registeration = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_][a-zA-Z0-9_.]*'),,Validators.minLength(7)]],
      password: ['', [Validators.required, Validators.pattern(''),Validators.minLength(8)]],
      passwordconfirm: ['', {Validators: this.checkPasswords},Validators.minLength(8)],
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'),Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'),Validators.minLength(3)]],
      dob: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      // phoneCode: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$'),Validators.minLength(8)]],
      // verificationCode: ['', [Validators.required, Validators.pattern('^[0-9]*$'),Validators.minLength(6)]],
    }, { 
      validator: this.ConfirmedValidator('password', 'passwordconfirm')
    });
  }
  signMeUp(){
    this.isSubmitted = true;
    if (!this.registeration.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      this.loadService.presentLoading('Creating account, Please wait..');
      console.log(this.registeration.value);
      //Send request on server
      //new Date(birthdate), "yyyy-MM-dd"
      var date = this.registeration.value.dob.split('T')[0];
      console.log(date);
      var formData = new FormData();
      formData.append('username' , this.registeration.value.username);
      formData.append('password' , this.registeration.value.password);
      formData.append('password_confirm' , this.registeration.value.passwordconfirm);
      formData.append('name' , this.registeration.value.firstName);
      formData.append('last_name' , this.registeration.value.lastName);
      formData.append('date_of_birth' , date);
      formData.append('email' , this.registeration.value.email);
      formData.append('phone_code' , this.countryCode);
      formData.append('phone_number' , this.registeration.value.phoneNumber);
      formData.append('verificationCode' , this.registeration.value.verificationCode);
      this
      this.restService.createAccount(formData).subscribe(respone => {
        console.log(respone);
        this.apiResponse = respone;

        if(this.apiResponse.status == 'success'){
          this.toastService.presentToast(this.apiResponse.message);

          //Store profile Information
          localStorage.setItem('userToken' , this.apiResponse.token);
          // var userToken = localStorage.getItem('userToken');
          // console.log(userToken);
          // if(userToken){
          //   this.restService.headerInfo.Authorization = 'Bearer ' + userToken; //Save token in the rest Service Header subject
          // }else{
          //   //
          // }

          this.nativeStorage.setItem('userInfo', this.apiResponse).then(response => {
            console.log(response);
          } , err => {
            //
          });
          this.saveProfileInfo(this.apiResponse.token);
          //Case successfull, Redirect to next page 
          this.navCtrl.navigateRoot('/tabs');
          setTimeout(() => {
            this.loadService.dismissLoader();
            this.toastService.presentToast(this.apiResponse.msg);
          } , 300);

        }else{
          // this.toastService.presentToast(this.apiResponse.msg);
          // if(this.apiResponse.msg.hasOwnProperty('username')){
          //   this.  
          // }
          this.scrollToTop();
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
    return this.registeration.controls;
  }

  ConfirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
  }
  //Scroll Screen if error comes
  scrollToTop() {
    this.content.scrollToTop(400);
  }
  saveProfileInfo(userToken){
    this.restService.getProfile(userToken).subscribe(data => {
      // console.log('get profile');
      var profile: any = data;
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
        });
        this.navCtrl.navigateRoot('/login');
        this.toastService.presentToastAdvertisement('Session expired, please login again');
      }      
    });
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
  goBack(){
    this.navCtrl.navigateBack('/signup');
  }
}
