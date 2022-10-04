import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { NavController } from '@ionic/angular';
import { LoaderService } from '../loader.service';
import { RestService } from '../rest.service';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  apiResponse: any;
  constructor(private navCtrl: NavController,
    private nativeStorage: NativeStorage,
    private loaderService: LoaderService,
    private restService: RestService,
    private toastService: ToastService) { }

  ngOnInit() {
  }
  buttonClick(value){
    if(value == 'changepassword'){
      this.navCtrl.navigateForward('/changepassword');
    }else if(value == 'lang'){
      this.navCtrl.navigateForward('/language');
    }else if(value == 'region'){
      this.navCtrl.navigateForward('/region');
    }
  }
  goBack(){
    this.navCtrl.back();
  }
}
