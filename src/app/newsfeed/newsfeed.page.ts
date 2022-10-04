import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ThemeableBrowser, ThemeableBrowserObject, ThemeableBrowserOptions } from '@ionic-native/themeable-browser/ngx';
import { ActionSheetController, IonContent, ModalController, NavController } from '@ionic/angular';
import { CameraService } from '../camera.service';
import { CountriesService } from '../countries.service';
import { DataService } from '../data.service';
import { EditimagePage } from '../editimage/editimage.page';
import { RestService } from '../rest.service';
import { StoriesPage } from '../stories/stories.page';
import { ToastService } from '../toast.service';
import { ViewyourstoryPage } from '../viewyourstory/viewyourstory.page';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.page.html',
  styleUrls: ['./newsfeed.page.scss'],
})
export class NewsfeedPage implements OnInit {

  newsPostsArray: any;
  bannerArray: any = [{
    banner_image: 'https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg'
  }];

  stories: any;
  storyContent: any;
  storyUploadedResult: any;

  weatherInfo: any; //Weather Info
  currentDate: string = '';
  //News feed api response
  newsFeedResponse: Array<any> = [];

  paginationCounter: number = 1;

  showNoDataImageBool: boolean = false;
  weatherIcons: any;
  postsCategories: any;
  postsArray: Array<any> = [];

  qpostApiResponse: any;

  @ViewChild(IonContent, {read: IonContent, static: false}) myContent: IonContent;
  constructor(private dataService: DataService,
    private actionSheetController: ActionSheetController,
    private modalController: ModalController,
    private cameraService: CameraService,
    private restService: RestService,
    private countryService: CountriesService,
    private themeableBrowser: ThemeableBrowser,
    private nativeStorage: NativeStorage,
    private toastService: ToastService,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.dataService.scrollToTopObservable().subscribe(data => {
      setTimeout(() => {
        this.myContent.scrollToTop(300);
      } , 300);
    });
    this.newsPostsArray = this.dataService.newsPostsArray;
    this.stories = this.dataService.storiesArray;
    this.postsCategories = this.dataService.postCategories;
    this.postsArray = this.dataService.qpostsArray;
    //Weather Widget Info
    this.restService.getWeatherDetails().subscribe(weatherResponse => {
      console.log(weatherResponse);
      this.weatherInfo = weatherResponse;
      this.weatherIcons = this.dataService.weatherIcons;
      // document.getElementById('weather-card').style.background = "url(https://images.unsplash.com/photo-1419928167799-e84a9ba9f751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNTM0MDh8MHwxfHNlYXJjaHwxfHxTYW4lMjBGcmFuY2lzY298ZW58MHwxfHx8MTY0OTM5MDkyMA&ixlib=rb-1.2.1&q=80&w=400)";
      // document.body.style.backgroundImage = "url(sky3.gif)";
      // this.weatherInfo.weather.icon = 'https://openweathermap.org/img/w/' + this.weatherInfo.weather[0].icon + '.png'
      console.log(this.weatherInfo);
    } , err => {
      console.log(err);
    });
   this.callNewsFeedData(null);
  }
  //Call News Data
  callNewsFeedData(refreshEvent){
    //Get NewsFeed data
    var userToken  = localStorage.getItem('userToken');

    this.restService.newsFeed(userToken, this.paginationCounter).subscribe(data => {
      console.log(data);
      if(refreshEvent){
        refreshEvent.target.complete();  //Hide the Refreshing event
      }
      var apiResponse: any = data;
      if(apiResponse.status){
      
        if(apiResponse.data.data && apiResponse.data.data.length > 0){
          
          apiResponse.data.data.forEach(value => {//append the data to the array
            this.newsFeedResponse.push(value);
          });

        }else{//empty array returned from server
          this.showNoDataImageBool = true;
        }
        if(apiResponse.BannerData && apiResponse.BannerData.length > 0){
          this.bannerArray = apiResponse.BannerData;
        }
      }else{
        //No data returned, some error occurred!
      }
    } , err => {
      if(refreshEvent){
        refreshEvent.target.complete();  
      }
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
    });
  }
  //Open Weather Details
  openWeatherDetails(){
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
 
    const browser: ThemeableBrowserObject = this.themeableBrowser.create('https://www.accuweather.com/', '_blank', options);
    browser.on('closePressed').subscribe(data => {
      browser.close();
    });
  }
  //Ion Content Scroll
  logScrolling(event){
    //set store data for side menu
    this.dataService.setObservable(event);
   }
   openCategoryDetails(value){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        navigationparams: value
      }
    };
    this.navCtrl.navigateRoot('/categorydetails' , navigationExtras);  
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
  //Stories
  async openStory(story, index){
    
    var storyArray: Array<any> = this.stories;
    storyArray = storyArray.slice(index);
    const modal = await this.modalController.create({
      component: StoriesPage,
      cssClass: 'status-page',
      componentProps: {
        'status': storyArray,
      }
    });
    modal.onDidDismiss().then(() => {
      // this.ClearAllIntervals();
    });
    return await modal.present();
  }
  moreStories(){
    
  }
  //Uplaod Story
  async uploadStory(){
    if(localStorage.getItem('setStory')){
      this.viewYourStoryModal(localStorage.getItem('setStory'));
    }else{
      const actionSheet = await this.actionSheetController.create({
        // header: 'Albums',
        cssClass: 'more-options-action-sheet',
        buttons: [
         
          {
          text: 'Open Camera',
          role: 'camera',
          icon: 'camera',
          handler: () => {
            console.log('Camera clicked');
            this.callCamera();
          }
        }, {
          text: 'Open Gallery',
          icon: 'images',
          handler: () => {
            console.log('Gallery clicked');
            this.callGallery();
          }
        }]
      });
      await actionSheet.present();
  
      const { role } = await actionSheet.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }
  }
  async callCamera(){
    this.cameraService.openCameraFileUri().then(value => {
      console.log(value);
      this.storyContent = value;
      this.openImageEditModalController(this.storyContent);
    });
  }
  imageResponse: any;
  options: any;
  callGallery(){
    this.options = {
    
      width: 200,
      //height: 200,

      // quality of resized image, defaults to 100
      quality: 25,

      // output type, defaults to FILE_URIs.
      // available options are 
      // window.imagePicker.OutputType.FILE_URI (0) or 
      // window.imagePicker.OutputType.BASE64_STRING (1)
      outputType: 1
    };
    this.imageResponse = [];
    // this.imagePicker.getPictures(this.options).then((results) => {
    //   for (var i = 0; i < results.length; i++) {
    //     this.imageResponse.push('data:image/jpeg;base64,' + results[i]);
    //   }
    // }, (err) => {
    //   alert(err);
    // });
    this.cameraService.openGalleryFileUri().then(value => {
      console.log(value);
      this.storyContent = value;
      this.openImageEditModalController(this.storyContent);
    });
  }
  async openImageEditModalController(storyContent){
    const modal = await this.modalController.create({
      component: EditimagePage,
      cssClass: 'status-page',
      componentProps: {
        'image': storyContent,
      }
    });
    modal.onDidDismiss().then((storyContent: any) => {
      console.log(storyContent);
      // if()
      // this.storyUploadedResult = storyContent;
      if(storyContent.data.data){
        //story uploadeded successfully
        this.storyUploadedResult = storyContent.data.data.storyContent;
      }else{
        //story didn't uploaded
        // this.storyUploadedResult = null;
      }
    });
    return await modal.present();

  }
  async viewYourStoryModal(storyContent){
    const modal = await this.modalController.create({
      component: ViewyourstoryPage,
      cssClass: 'status-page',
      componentProps: {
        'image': storyContent,
      }
    });
    modal.onDidDismiss().then((storyContent: any) => {
      console.log(storyContent);
      if(storyContent.data.data){
        //story uploadeded successfully
        this.storyUploadedResult = storyContent.data.data.storyContent;
      }else{
        //story didn't uploaded
        // this.storyUploadedResult = null;
      }
    });
    return await modal.present();
  }
  //Parse to Int
  parseInt(value){
    return parseInt(value);
  }
  getCountryName(country){
    let obj = this.countryService.countries. find(o => o. code === country);
    return obj.name;
  } 

  //Refresh Content
  refreshData(refreshEvent) {
    this.paginationCounter = 1;
    this.newsFeedResponse = [];
    this.callNewsFeedData(refreshEvent);
  }
  //Load More data
  loadData(infiniteScrollevent) {
    
    this.paginationCounter++;
    this.callNewsFeedData(infiniteScrollevent);
  }
  //Open News Details
  openNewsDetails(news){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        navigationparams: news.id,
        getFromCategory: false
      }
    };
    this.navCtrl.navigateForward('/newsdetails' , navigationExtras);
  }
  //QPosts
  postSegments(event){
    console.log(event.detail.value);
    this.postsArray = [];
    setTimeout(() => {
      this.postsArray = this.dataService.qpostsArray;
    } , 2000);
  }
}