import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { AllstoresPage } from '../allstores/allstores.page';
import { DataService } from '../data.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  storeArray: any;
  subscribeText: string = 'Follow';
  constructor(private dataService: DataService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private navCtrl: NavController) { }

  ngOnInit() {
    setTimeout(() => {
      this.storeArray = this.dataService.moreNewsArray;
    } , 1500);
  }
  //Go Back
  goBack(){
    this.navCtrl.navigateRoot('/tabs', { animated: true, animationDirection: 'back' });
  }
  async menuOpen(){
    const popover = await this.modalCtrl.create({
      component: AllstoresPage,
      cssClass: 'press-popover',
      showBackdrop: true,
      backdropDismiss: true,
      componentProps: {
        'newsID': 1,
      }
    });
    popover.onDidDismiss().then((data: any) => {
      console.log(data);
      
    });
    return await popover.present();
  }
  followStore(val){
    if(val == 'Follow'){
      this.subscribeText = 'Unfollow';
    }else{
      this.showSimpleAlert();
    }
  }
  async showSimpleAlert(){
    let alert = await this.alertCtrl.create({
      subHeader: 'Want to unfollow this Store?',
      cssClass: 'unsubscribe-alert',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Unfollow',
          role: 'ok',
          handler: () => {
            console.log('Unfollow');
            this.subscribeText = 'Follow';
          }
        }
      ]
    });
    alert.present();
  }
}
