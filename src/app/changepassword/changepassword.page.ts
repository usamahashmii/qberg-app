import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';
import { LoaderService } from '../loader.service';
import { RestService } from '../rest.service';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {

  showNewPassDiv: boolean = false;
  focusOldPass: boolean = false;
  focusNewPass: boolean = false;
  focusConfirmPass: boolean = false;

  oldPassword: string = '';
  userToken: string = '';

  inputFields: FormGroup;
  isSubmitted: boolean = false;
  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value
    return pass === confirmPass ? null : { notSame: true }
  }
  constructor(private navCtrl: NavController,
    private restService: RestService,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private loaderSerice: LoaderService,
    private authenticationService: AuthenticationService) {
      this.inputFields = this.formBuilder.group({
        password: ['', [Validators.required, Validators.pattern(''),Validators.minLength(8)]],
        
        newpPssword: ['', [Validators.required, Validators.pattern(''),Validators.minLength(8)]],
        confirmPassword: ['', {Validators: this.checkPasswords},Validators.minLength(8)],
      }, {
        validator: this.ConfirmedValidator('newpPssword', 'confirmPassword')
      });
    }

  ngOnInit() {
    this.userToken = localStorage.getItem('userToken');
  }
  confirmOldPassword(){
    this.loaderSerice.presentLoading('Checking old password ..');
    var formData = new FormData();
    formData.append('current_password', this.oldPassword);
    this.restService.matchOldPassword(this.userToken, formData).subscribe(data => {
      this.loaderSerice.dismissLoader();
      console.log(data);
      var apiResponse: any = data;
      if(apiResponse.status){
        this.showNewPassDiv = true;
      }else{
        this.toastService.presentToastAdvertisement(apiResponse.message);
        this.inputFields.value.password = '';
      }
    } , err => {
      this.loaderSerice.dismissLoader();
      this.authenticationService.checkServerErrorAuthentication(err);
    });
  }
  focusInput(key){
    if(key == 'oldPass'){
      this.focusOldPass = true;
    }else if(key == 'newPass'){
      this.focusNewPass = true;
    }else if(key == 'confirmPass'){
      this.focusConfirmPass = true;
    }
  }
  blurInput(key){
    if(key == 'oldPass'){
      this.focusOldPass = false;
    }else if(key == 'newPass'){
      this.focusNewPass = false;
    }else if(key == 'confirmPass'){
      this.focusConfirmPass = false;
    }
  }
  goBack(){
    this.navCtrl.back();
  }
  submit(){
    this.isSubmitted = true;
    if (!this.inputFields.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      this.loaderSerice.presentLoading('Please wait ..');
      var formData = new FormData();
      formData.append('new_password', this.inputFields.value.newpPssword);
      formData.append('confirm_password', this.inputFields.value.confirmPassword);
      this.restService.changePassword(this.userToken, formData).subscribe(data => {
        this.loaderSerice.dismissLoader();
        console.log(data);
        var apiResponse: any = data;
        if(apiResponse.status){
          this.toastService.presentToastAdvertisement(apiResponse.message);
          this.navCtrl.navigateRoot('/tabs');
        }else{
          this.toastService.presentToastAdvertisement(apiResponse.message);
        }
      } , err => {
        this.loaderSerice.dismissLoader();
        this.authenticationService.checkServerErrorAuthentication(err);
      });
    }
  }
  get errorControl() {
    return this.inputFields.controls;
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
}
