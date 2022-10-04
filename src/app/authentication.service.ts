import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { NavController } from '@ionic/angular';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private nativeStorage: NativeStorage,
    private navCtrl: NavController, 
    private toastService: ToastService) { }
  
  checkServerErrorAuthentication(err: any){
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
  }
}
