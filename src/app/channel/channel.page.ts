import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalController, NavController, PopoverController } from '@ionic/angular';
import { AllpressPage } from '../allpress/allpress.page';
import { DataService } from '../data.service';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.page.html',
  styleUrls: ['./channel.page.scss'],
})
export class ChannelPage implements OnInit {
  newsResponse: any;
  newsFeedResponse: any;

  newsInfo: any;
  userToken: string = '';
  socialLinksDetailsBool: boolean = false;
  newsArray: any;

  showHideSocialBool: boolean = false;
  constructor(private restService: RestService,
    private modalCtrl: ModalController,
    private dataService: DataService,
    private navCtrl: NavController) {}

  ngOnInit() {
    this.getLikesAndDetails();
    setTimeout(() => {
      this.newsArray = this.dataService.moreNewsArray;
    } , 1500);
  }

  getLikesAndDetails(){
    this.newsResponse = null;
    var userToken = localStorage.getItem('userToken');
    
      // this.loaderservice.presentLoading('Loading News Details..');
      this.userToken = localStorage.getItem('userToken');//Get User Token
      var formData = new FormData();
      formData.append('id', '227');
      this.restService.singleNewsDetails(formData , userToken).subscribe(apiResponse => {//Call API to get the News Details
        console.log(apiResponse);
        this.newsFeedResponse = apiResponse;
        if(this.newsFeedResponse.status){
          this.newsResponse = this.newsFeedResponse.data;
        }else{

        }
      } , err => {
        // this.loaderservice.dismissLoader();
        console.log(err);
      });
  }
  //Open social link details
  openSocialLinkDetails(){
    if(this.socialLinksDetailsBool){
      this.socialLinksDetailsBool = false;
      document.getElementById('arrow-down-svg').style.transform = 'rotate(0deg)';
    }else{
      this.socialLinksDetailsBool = true;
      document.getElementById('arrow-down-svg').style.transform = 'rotate(180deg)';
    }
  }
  segmentChanged(event){
    console.log(event.detail.value);
    this.newsArray = null;
    setTimeout(() => {
      this.newsArray = this.dataService.moreNewsArray;
    } , 1500);
  }
  //Go Back
  goBack(){
    this.navCtrl.navigateRoot('/tabs', { animated: true, animationDirection: 'back' });
  }
  async menuOpen(){
    const popover = await this.modalCtrl.create({
      component: AllpressPage,
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
}
