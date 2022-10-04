import { Component, OnInit } from '@angular/core';
import { ToastService } from '../toast.service';
import { ModalController, NavParams, Platform } from '@ionic/angular';
import { RestService } from '../rest.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-moreoptions',
  templateUrl: './moreoptions.page.html',
  styleUrls: ['./moreoptions.page.scss'],
})
export class MoreoptionsPage implements OnInit {

  postID: any;
  newsResponse: any;
  userToken: string = '';
  newsFeedResponse: any;
  constructor(
    private toastService: ToastService,
    private iab: InAppBrowser,
    private navParams: NavParams,
    private platform: Platform,
    private restService: RestService,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.postID = this.navParams.get('newsID');
    this.getPostDetails();
  }
  moreOptions(val){
    if(val == 'bookmark'){
      this.dismissModel(val);
    }else if(val == 'copy'){
      this.dismissModel(val);
    }else if(val == 'screenshot'){
      this.dismissModel(val);
    }else if(val == 'browser'){

      if(this.platform.is("android")){
        const browser = this.iab.create(this.newsResponse.source_link, '_system');
      }else if(this.platform.is("ios")){
        const browser = this.iab.create(this.newsResponse.source_link, '_system');
      }

    }
  }
  getPostDetails(){
    this.newsResponse = null;
    var userToken = localStorage.getItem('userToken');
    // this.loaderservice.presentLoading('Loading News Details..');
    this.userToken = localStorage.getItem('userToken');//Get User Token
    var formData = new FormData();
    formData.append('id', this.postID);
    this.restService.singleNewsDetails(formData , userToken).subscribe(apiResponse => {//Call API to get the News Details
    
      console.log(apiResponse);
      this.newsFeedResponse = apiResponse;
      if(this.newsFeedResponse.status){
        this.newsResponse = this.newsFeedResponse.data;
      }else{}
    
    } , err => {
      // this.loaderservice.dismissLoader();
      console.log(err);
    });
  }
  dismissModel(val){
    this.modalCtrl.dismiss({
      'dismissed': true,
      data: val
    });
  }
}
