import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import SwiperCore,{ SwiperOptions,Pagination,EffectCube } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import * as Hammer from 'hammerjs';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import {interval} from 'rxjs';
import { ThemeableBrowser, ThemeableBrowserObject, ThemeableBrowserOptions } from '@ionic-native/themeable-browser/ngx';

SwiperCore.use([Pagination, EffectCube]);
@Component({
  selector: 'app-stories',
  templateUrl: './stories.page.html',
  styleUrls: ['./stories.page.scss'],
})
export class StoriesPage implements OnInit {

  story: any;
  progressBarValue = 0;
  statusLoaderInterval: any;
  
  status: any;
  storiesArray: any;

  @ViewChild('swiper') swiper: SwiperComponent;

  name: string = '';
  profilePicture: string = '';
  adLink: string = '';
  adDesc: string = '';

  statuses: any;

  constructor(private route: ActivatedRoute,
    private navCtrl: NavController,
    private themeableBrowser: ThemeableBrowser,
    private navParams: NavParams,
    private modalController: ModalController,
    private dataService: DataService) {
      this.storiesArray = this.navParams.get('status');
      console.log(this.storiesArray);
      // console.log(this.status);
      // this.storiesArray = this.dataService.storiesArray;

      // const myArray = [{'id':'73','foo':'bar'},{'id':'45','foo':'bar'}];
      // const res = this.storiesArray.find(x => x.id === this.status.id); // Uh oh!
      // console.log(res);

      // this.statuses = this.dataService.chatsArray;
      this.name = this.storiesArray[0].name;
      this.profilePicture = this.storiesArray[0].profilePicture;
      this.adLink = this.storiesArray[0].profilePicture;
      this.adDesc = this.storiesArray[0].desc;
      
      // this.ClearAllIntervals();
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
          // console.log(touchmove);
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
          this.dismiss();
        });
        hammer.on('swipedown', (swipedown) => {
          console.log(swipedown);
          this.dismiss();
        });
      } , 300);
    }

  ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    //   console.log(params.navigationparams);
    //   this.status = params.navigationparams;
    // });
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.ClearAllIntervals();
    this.modalController.dismiss({
      'dismissed': true
    }).then(() => {
      // this.ClearAllIntervals();
      // if(this.toastService.toast){
      //   this.toastService.dismissToast();
      // }
    });
    // this.navCtrl.back();
  }
  config: SwiperOptions = {
    slidesPerView: 'auto',
    pagination: false,
    effect: 'cube',
    cubeEffect: {
      slideShadows: false,
      shadow: false,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  };
  next(){
    this.swiper.swiperRef.slideNext(500);
    this.progressBarValue = 0;
    // clearInterval(this.statusLoaderInterval);
    this.ClearAllIntervals();
    this.startInterval();
  }
  prev(){
    this.swiper.swiperRef.slidePrev(500);
    this.progressBarValue = 0;
  }
  onSlideChange(event) {
    this.progressBarValue = 0;
    this.name = this.storiesArray[this.swiper.swiperRef.activeIndex].name;
    this.profilePicture = this.storiesArray[this.swiper.swiperRef.activeIndex].profilePicture;
    this.adLink = this.storiesArray[this.swiper.swiperRef.activeIndex].profilePicture;
    this.adDesc = this.storiesArray[this.swiper.swiperRef.activeIndex].desc;

    console.log(this.swiper.swiperRef.activeIndex);
    console.log(this.storiesArray.length);
    if(this.swiper.swiperRef.activeIndex == this.storiesArray.length - 1){
      // setTimeout(() => {
        // this.dismiss();
      // } , 5000)
    }
  }
  startInterval(){
    this.statusLoaderInterval = interval(10).subscribe(() => {
      this.progressBarValue = this.progressBarValue + 0.002;
      document.getElementById('progressbar').setAttribute('value' , this.progressBarValue.toString());
      
      if(this.progressBarValue >= 1){ //may be removed
        if(this.storiesArray.length == 1){
          this.dismiss();
        }else{
          this.progressBarValue = 0;
          this.next();
        }
      }else{
        if(this.swiper.swiperRef.activeIndex == this.storiesArray.length - 1){
          // console.log('swiper');
         if(this.progressBarValue >= 0.9){
          this.dismiss();// dismiss the popover
         }
        }
      }
    });
  }
  ClearAllIntervals(){
    this.statusLoaderInterval.unsubscribe();
    // Get a reference to the last interval + 1
    const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);
    // Clear any timeout/interval up to that id
    for (let i = 1; i < interval_id; i++) {
      window.clearInterval(i);
    }
  }

  openAdLink(){
    // if(this.newsResponse.website.url.includes('http:')){
    //   this.newsResponse.website.url = 'https:' + this.newsResponse.website.url.split(':')[1];
    //   console.log('yes http');
    // }else{
    //   console.log('no http');
    // }
    this.ClearAllIntervals();
    const options: ThemeableBrowserOptions = {
      toolbar: {
        height: 58,
        color: '#25364c'
      },
      title: {
        color: '#ffffffff',
        showPageTitle: false,
        // staticText: 'Academy Browser'
      },
      backButton: {
        wwwImage: 'assets/imgs/left.png',
        align: 'right',
        event: 'backPressed'
      },
      forwardButton: {
        wwwImage: 'assets/imgs/right.png',
        align: 'right',
        event: 'forwardPressed'
      },
      closeButton: {
        wwwImage: 'assets/imgs/logo1.png',
        align: 'left',
        event: 'closePressed'
      },
    };
 
    const browser: ThemeableBrowserObject = this.themeableBrowser.create(this.adLink, '_blank', options);
    browser.on('closePressed').subscribe(data => {
      this.startInterval();
      browser.close();
    });
  }
}
