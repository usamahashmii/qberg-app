import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toast: any;
  constructor(private toastController: ToastController) { }
  async presentToast(msg) {
    this.toast = await this.toastController.create({
      message: msg,
      duration: 1200,
      cssClass: 'add-to-fav-toast'
    });
    return this.toast.present();
    
  }
  async dismissToast(){
    this.toast.dismiss();
  }
  async presentToastAdvertisement(msg){
    this.toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      cssClass: 'advertisement-toast'
    });
    return this.toast.present();
  }
  async presentWaitToast(msg) {
    let toast = await this.toastController.create({
      message: msg,
      duration: 1200,
      cssClass: 'add-to-fav-toast'
    });
    return toast.present();
  }
}
