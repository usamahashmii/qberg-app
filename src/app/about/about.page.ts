import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(private navCtrl: NavController,
    private toastService: ToastService) { }

  ngOnInit() {
  }
  goBack(){
    this.navCtrl.navigateBack('/profile');
  } 
  clickItem(){
    this.toastService.presentToast('Your application is up to date');
  }
}
