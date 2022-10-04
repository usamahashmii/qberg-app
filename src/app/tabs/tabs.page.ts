import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, IonContent, IonSlides, NavController, Platform } from '@ionic/angular';
import { DataService } from '../data.service';
import { NewsfeedPage } from '../newsfeed/newsfeed.page';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

import { CovidPage } from '../covid/covid.page';
import { SportsPage } from '../sports/sports.page';
import { BusinessPage } from '../business/business.page';
import { HealthPage } from '../health/health.page';
import { EventPage } from '../event/event.page';

import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { PopularnewsPage } from '../popularnews/popularnews.page';
import { PopularsalesPage } from '../popularsales/popularsales.page';
import { LoaderService } from '../loader.service';

// import * as $ from 'jquery';
declare var window: any;
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  @ViewChild(IonContent, {read: IonContent, static: false}) myContent: IonContent;
  @ViewChild('slides') slides: IonSlides;
  
  @ViewChild('barChart') barChart;
  bars: any;
  colorArray: any;

  justNowArray: any;
  applicationsArray: any;
  scrollingCategoriesArray: any;

  private scrollDepthTriggered = false;
  highlightScrollingCategoryIndex = 0;
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  slidingOptionsBanner = {
    initialSlide: 0,
    speed: 400,
    loop: true,
    autoplay: true
  }
  showHeader: boolean = false;
  newsPostsArray: Array<any> = [];
  bannerArray: any;

  burgerBtnBool: boolean = false;
  profileImage: string = 'https://ae01.alicdn.com/kf/H964507f75cb8489ea81b3cb99250001f3/BAOGELA-New-Skull-Men-Watches-Military-Silicone-Brand-Pirate-Hollow-Watch-Men-Luminous-Sports-Wristwatch-Relogio.jpg_Q90.jpg_.webp';

  appMenuChoosen: string = 'qbox';
  appMenuTitle: string = 'Qbox';
  appMenuDesc: string = 'social media';

  newsFeed = NewsfeedPage;
  covidPage = CovidPage;
  sportsPage = SportsPage;
  popularNews = PopularnewsPage;
  businessPage = BusinessPage;
  popularSales = PopularsalesPage;
  healthPage = HealthPage;
  eventPage = EventPage;


  // profilePicture = 'https://images.unsplash.com/photo-1644909974507-43420ab69519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 387w';
  profileInfo: any = {};
  constructor(private dataService: DataService,
    private actionSheetController: ActionSheetController,
    private platform: Platform,
    private inAppBrowser: InAppBrowser,
    private speechRecognition: SpeechRecognition,
    private nativeStorage: NativeStorage,
    private loaderService: LoaderService,
    private navCtrl: NavController) {
  }
  ngOnInit() {

    this.justNowArray = this.dataService.justNowArray;
    this.applicationsArray = this.dataService.applicationsArray;
    
    this.scrollingCategoriesArray = this.dataService.scrollingCategoriesArray;
    this.newsPostsArray = this.dataService.newsPostsArray;
    this.bannerArray = this.dataService.bannerArray;

    //Get Observable to check it the window is scrolled in the root of the super tabs ion nav
    this.dataService.getObservable().subscribe(event => {
      // console.log(event);
      this.logScrolling(event);
    });

    //get profile information from storage
    this.nativeStorage.getItem('userInfo').then(response => {
      console.log(response);
    } , err => {
      //
    });
  }
  //Search Page
  goToSearchPage(){
    this.navCtrl.navigateForward('/search');
  }
  //For scrolling  Categories
  scollingCategriesFun(category, index){
    // console.log(index);
    this.highlightScrollingCategoryIndex = index;
  }
  //Follow
  followClick(news){
    if(news.followStatus == 'Follow'){
      news.followStatus = 'Unfollow';
    }else{
      news.followStatus = 'Follow';
    }
  }
  //More Options Action Sheet
  async presentActionSheet(news) {
    const actionSheet = await this.actionSheetController.create({
      // header: 'Albums',
      cssClass: 'more-options-action-sheet',
      buttons: [{
        text: 'Share',
        role: 'share',
        icon: 'share',
        handler: () => {
          console.log('share clicked');
        }
      }, {
        text: 'Show less content like this',
        icon: 'sad',
        handler: () => {
          console.log('Show less content like this clicked');
        }
      }, {
        text: 'Dislike' + ' ' + news.profileName,
        icon: 'thumbs-down',
        handler: () => {
          console.log('Dislike clicked');
        }
      }, {
        text: 'Manage interests',
        icon: 'heart',
        handler: () => {
          console.log('Manage Interests clicked');
        }
      }, {
        text: 'Report bad content',
        icon: 'information-circle',
        role: 'cancel',
        handler: () => {
          console.log('Report Bad Content clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  ScrollToTop(){
    setTimeout(() => {
      this.myContent.scrollToTop(10);
   }, 10);
  }
  ChooseAppsMenuItem(name){
    this.appMenuChoosen = name;
    this.appMenuTitle = name;
    document.getElementById('menu-obj').classList.remove('show-application-transition');
    setTimeout(() => {
      document.getElementById('menu-obj').classList.add('show-application-transition');
    } , 500);
    if(name == 'qbox'){
      this.appMenuDesc = 'social media';
    }else if(name == 'qinsurance'){
      this.appMenuDesc = 'insurance';
    }else if(name == 'qnews'){
      this.appMenuDesc = 'news media';
    }else if(name == 'qshop'){
      this.appMenuDesc = 'shopping';
    }else if(name == 'qtaxi'){
      this.appMenuDesc = 'travelling';
    }else if(name == 'qwallet'){
      this.appMenuDesc = 'internet banking';
    }else if(name == 'qjob'){
      this.appMenuDesc = 'job media';
    }else if(name == 'qlearn'){
      this.appMenuDesc = 'learning';
    }else if(name == 'qcloud'){
      this.appMenuDesc = 'storage';
    }else if(name == 'map'){
      this.appMenuDesc = 'map';
    }else if(name == 'qlive'){
      this.appMenuDesc = 'watch TV';
    }else if(name == 'qgame'){
      this.appMenuDesc = 'gaming';
    }
  }
  onTabSelect(category: any) {
    this.bannerArray = [];
    this.dataService.checkTabClicked(category.name);
  }
  goToProfile(){
    this.navCtrl.navigateForward('/profile');
  }
  //Go To Notification Page
  goToNotificationsPage(){
    this.navCtrl.navigateForward('/notification');
  }
  listeningWords(){
    this.speechRecognition.hasPermission().then((permission)=>{
      if(permission){
        this.listen();
      }
      else{
        this.speechRecognition.requestPermission().then((data)=>{
         this.listen();
        }, (err)=>{
          alert(JSON.stringify(err))
        })
      }
    
    }, (err)=>{
     alert(JSON.stringify(err))
    })
  }
  listen(){
    this.speechRecognition.startListening().subscribe((speeches)=>{
      console.log(speeches);
    },(err)=>{
      alert(JSON.stringify(err))
    });  
  }
  goToSettings(){
    this.navCtrl.navigateForward('/settings');
  }
  private lastY = 0;
  //Ion Content Scroll
  logScrolling(event){
    // Hide Header on on scroll down
    if (event.detail.scrollTop > this.lastY) {  
      document.querySelector(".header").classList.remove('nav-down');
      document.querySelector(".header").classList.add('nav-up');

      document.querySelector(".super-tab").classList.add('super-tab-margin-top');
      document.querySelector(".stories-wrap-div").classList.add('stories-wrap-div-margin-top');

    }else {
      document.querySelector(".header").classList.remove('nav-up');
      document.querySelector(".header").classList.add('nav-down');
      
      document.querySelector(".super-tab").classList.remove('super-tab-margin-top');
      document.querySelector(".stories-wrap-div").classList.remove('stories-wrap-div-margin-top');
    }
    this.lastY = event.detail.scrollTop;
  } 
  settingUpImage(imageData){
    var img = 'data:image/jpeg;base64,' + imageData;
    const blobImg = this.dataURItoBlob(img);
    const formData: FormData = new FormData();
    formData.append('avatar', blobImg, 'image.jpeg');
    console.log(blobImg);
  }
  dataURItoBlob(dataURI: any) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    let byteString: any;
    if (dataURI.split(',')[0].indexOf('base64') >= 0) {
      byteString = atob(dataURI.split(',')[1]);
    } else {
      byteString = unescape(dataURI.split(',')[1]);
    }
    // separate out the mime component
    const mimeString = dataURI
      .split(',')[0]
      .split(':')[1]
      .split(';')[0];
    // write the bytes of the string to a typed array
    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], { type: mimeString });
  }
  ionViewWillEnter(){
    console.log('ionViewWillEnter');
    //Get Profile data
    this.profileInfo = this.dataService.getProfileInfo();

  //   document.getElementById('footer').classList.add('ion-footer-bottom-0');
  //   document.getElementById('bottom-home-icon').classList.add('bottom-icons-div');
  //   document.getElementById('bottom-mall-icon').classList.add('bottom-icons-div');
  //   document.getElementById('bottom-press-icon').classList.add('bottom-icons-div');
  //   document.getElementById('bottom-post-icon').classList.add('bottom-icons-div');

  //   document.getElementById('active-home-div').classList.add('bottom-0');
  }
  // ionViewWillLeave(){
  //   console.log('ionViewWillLeave');
  //   document.getElementById('active-home-div').classList.remove('bottom-0');
  // }
}
