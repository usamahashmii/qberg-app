import { Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { MenuController, NavController, Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core'
import { RestService } from './rest.service';
// import { OneSignal } from '@ionic-native/onesignal/ngx';
import OneSignal from 'onesignal-cordova-plugin';
import { DataService } from './data.service';
import { Router } from '@angular/router';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  languageChoosen:string = '';
  menuOpenedBool: boolean = false;
  constructor(private translate: TranslateService,
    private navCtrl: NavController,
    // private OneSignal: OneSignal,
    private platform: Platform,
    private dataService: DataService,
    private router: Router,
    private nativeStorage: NativeStorage,
    private restService: RestService,
    private toastService: ToastService,
    private menuCtrl: MenuController) {
    // localStorage.clear();
    // localStorage.setItem('setStory', 'https://images.unsplash.com/photo-1644915573773-ff0827323c4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60 600w');
    //Language setup

    // this.platform.pause.subscribe(() => {
    //   navigator['app'].exitApp();
    // } , err => {
    //   console.log(err);
    // });
    // localStorage.removeItem('showAlert');
    this.platform.ready().then(() => {
      if(this.platform.is('cordova')){
        this.OneSignalInit();
      }
    });
    var lang = localStorage.getItem('language');
    translate.setDefaultLang(lang ? lang : 'en');
    this.languageChoosen = lang;

    //Check User Token
    var userToken = localStorage.getItem('userToken');
    console.log(userToken);
    // if(userToken){
    //   this.restService.headerInfo.Authorization = 'Bearer ' + userToken; //Save token in the rest Service Header subject
    // }else{
    //   //
    // }
    this.restService.getProfile(userToken).subscribe(data => {
      console.log('get profile');
      console.log(data);
      var profile: any = data;
      this.dataService.saveProfileInfo(profile);
      this.dataService.saveUnreadMessageCount(profile.message);
      // console.log(data);
    } , err => {
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
    //Check the session to make login or not
    this.nativeStorage.getItem('userInfo').then(response => {
      if(response){
        //Session is active
        this.navCtrl.navigateRoot('/tabs');
      //   this.restService.getProfile(userToken).subscribe(data => {

      //   } , err => {

      //   });
      // }else{
      //   // do nothing (stay on login page)
      }
    } , err => {
      //cordova not available
    });
  }
  menuOpened(){
    console.log('menuOpened');
    this.menuOpenedBool = true;
  }
  menuClosed(){
    console.log('menuClosed');
    this.menuOpenedBool = false;
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }
  OneSignalInit(){
    // NOTE: Update the setAppId value below with your OneSignal AppId.
    OneSignal.setAppId(this.restService.oneSignalAppID);
    OneSignal.setNotificationOpenedHandler((jsonData) => {
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      this.router.navigate(['/notification']);
    });
    // iOS - Prompts the user for notification permissions.
    //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 6) to better communicate to your users what notifications they will get.
    OneSignal.promptForPushNotificationsWithUserResponse((accepted) => {
        console.log("User accepted notifications: " + accepted);
    });
    OneSignal.getDeviceState(function(data) {
      console.log(data);
    })
     }
}
