import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, NavParams } from '@ionic/angular';
import * as Hammer from 'hammerjs';
import {interval} from 'rxjs';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-viewyourstory',
  templateUrl: './viewyourstory.page.html',
  styleUrls: ['./viewyourstory.page.scss'],
})
export class ViewyourstoryPage implements OnInit {

  storyImage: any;

  progressBarValue = 0;
  statusLoaderInterval: any;

  profilePicture: string = 'https://images.unsplash.com/photo-1644909974507-43420ab69519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 387w';
  constructor(private navParams: NavParams,
    private actionSheetController: ActionSheetController,
    private toastService: ToastService,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.storyImage = this.navParams.get('image');
    this.storyImage = (<any>window).Ionic.WebView.convertFileSrc(this.storyImage);
    console.log(this.storyImage);

    this.startInterval();
    
    setTimeout(() => {
      // Get a reference to an element.
      var square = document.querySelector('.square');
      var hammer = new Hammer(square);
      hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL, threshold: 0 }); 
      hammer.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL, threshold: 0 }); 
      // hammer.get('tap').set({ direction: Hammer.DIRECTION_ALL, threshold: 0 }); 

      hammer.on('press', (press) => {
        console.log(press);
        // clearInterval(this.statusLoaderInterval);
        this.ClearAllIntervals();
      });
      hammer.on('pressup', (pressup) => {
        console.log(pressup);
        this.startInterval();
      });
      hammer.on('panmove', (touchmove) => {
        console.log(touchmove);
        // clearInterval(this.statusLoaderInterval);
        this.ClearAllIntervals();
        // this.dismiss();
      });
      hammer.on('panend', (touchend) => {
        console.log(touchend);
        this.startInterval();
      });
      ///Swipe to dismiss
      hammer.on('swipeup', (swipeup) => {
        console.log(swipeup);
        this.dismissModel();
      });
      hammer.on('swipedown', (swipedown) => {
        console.log(swipedown);
        this.dismissModel();
      });
    } , 300);
  }
  dismissModel(){
    this.ClearAllIntervals();
    this.modalCtrl.dismiss({
      'dismissed': true,
      data: null
    });
  }
  startInterval(){
    // this.statusLoaderInterval = setInterval(() => {
    this.statusLoaderInterval = interval(10).subscribe(() => {
      this.progressBarValue = this.progressBarValue + 0.002;
      document.getElementById('progressbar').setAttribute('value' , this.progressBarValue.toString());
      
      if(this.progressBarValue >= 1){
        // this.progressBarValue = 0;
        // this.next();
        this.dismissModel();
      }
    });
    //} , 10)
  }
  ClearAllIntervals(){
    // Get a reference to the last interval + 1
    const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);
    // Clear any timeout/interval up to that id
    for (let i = 1; i < interval_id; i++) {
      window.clearInterval(i);
    }
  }
  async moreOptions(){
    this.ClearAllIntervals();
    const actionSheet = await this.actionSheetController.create({
      // header: 'Albums',
      cssClass: 'more-options-action-sheet',
      // header: 'Upload Status',
      buttons: [
        {
        text: 'Remove Status',
        role: 'remove',
        icon: 'trash-outline',
        handler: () => {
          console.log('Remove Status');
          // localStorage.clear();
          this.toastService.presentToast('Story Removed successfully');
          this.dismissModel();
        }
      }, {
        // text: 'Open Gallery',
        // icon: 'images',
        // handler: () => {
        //   console.log('Gallery clicked');
        //   this.callGallery();
        // }
      }]
    });
    await actionSheet.present();

    await actionSheet.onDidDismiss().then(() => {
      this.startInterval();
    });
    // console.log('onDidDismiss resolved with role', role);
  }
}
