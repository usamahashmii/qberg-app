import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  agreeToAllTermsBool: boolean = false;
  termsBool: boolean = false;
  privacyBool: boolean = false;
  personalInfo: boolean = false

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goBack(){
    this.navCtrl.navigateBack('/login');
  }
  agreeToAllTerms(){
    if(this.agreeToAllTermsBool){
      this.agreeToAllTermsBool = false;
      this.termsBool = false;
      this.privacyBool = false;
      this.personalInfo = false;
    }else{
      this.agreeToAllTermsBool = true;
    }
  }
  agreeToIndividualTerm(){
    if(this.termsBool){
      this.termsBool = false;
    }else{
      this.termsBool = true;
    }
  }
  agreeToIndividualPrivacyPolicy(){
    if(this.privacyBool){
      this.privacyBool = false;
    }else{
      this.privacyBool = true;
    }
  }
  agreeToIndividualpersonalInfo(){
    if(this.personalInfo){
      this.personalInfo = false;
    }else{
      this.personalInfo = true;
    }
  }
  signUp(){
    if(this.agreeToAllTermsBool ||  this.termsBool && this.privacyBool && this.personalInfo){
      this.navCtrl.navigateForward('/signup2');
    }else{
      //
    }
  }
}
