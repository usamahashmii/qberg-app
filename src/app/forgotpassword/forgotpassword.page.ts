import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  focusEmail: boolean = false;
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  focusInput(key){
    if(key == 'email'){
      this.focusEmail = true;
    }
  }
  blurInput(key){
    if(key == 'email'){
      this.focusEmail = false;
    }
  }
  goBack(){
    this.navCtrl.back();
  }
}
