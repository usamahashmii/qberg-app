import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeableBrowser, ThemeableBrowserObject, ThemeableBrowserOptions } from '@ionic-native/themeable-browser/ngx';
import { AlertController, MenuController, ModalController, NavController, PopoverController } from '@ionic/angular';
import { CommentPage } from '../comment/comment.page';
import { DataService } from '../data.service';
import { LoaderService } from '../loader.service';
import { RestService } from '../rest.service';
import { ToastService } from '../toast.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { MoreoptionsPage } from '../moreoptions/moreoptions.page';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';

@Component({
  selector: 'app-newsdetails',
  templateUrl: './newsdetails.page.html',
  styleUrls: ['./newsdetails.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NewsdetailsPage implements OnInit {
  private win: any = window;

  newsFeedResponse: any;
  newsResponse: any;
  newsInfo: any;
  likeBtn: string = 'assets/imgs/like.png';
  userToken: string = '';
  likesArray: Array<any> = [];
  getFromCategoryBool: boolean = false;

  subscribeText: string = 'subscribe';

  emojis = [
    {
    icon: '😃',
    text: 'Happy',
    count: 2,
    },
    {
      icon: '❤️',
      text: 'Love',
      count: 1,
    },
    {
      icon: '🥺',
      text: 'Emotional',
      count: 1,
    },
    {
      icon: '😐',
      text: 'Speechless',
      count: 4,
    },
    {
      icon: '😡',
      text: 'Angry',
      count: 0,
    },
  ];
  reactionVar: string = '😃';
  hideShowDiv: boolean = false;

  screenShotBool: boolean = false;
  screenshotImg: string = '';

  constructor(private restService: RestService,
    private loaderservice: LoaderService,
    private dataService: DataService,
    private navCtrl: NavController,
    private popoverController: ModalController,
    private themeableBrowser: ThemeableBrowser,
    private toastService: ToastService,
    private alertCtrl: AlertController,
    private clipboard: Clipboard,
    private screenshot: Screenshot,
    private socialSharing: SocialSharing,
    private menuCtrl: MenuController,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.newsInfo = JSON.parse(params.navigationparams);
      this.getFromCategoryBool = params.getFromCategory;
      this.getLikesAndDetails();//Get the likes and the details about the post
    });

  }
  getLikesAndDetails(){
    this.newsResponse = null;
    var userToken = localStorage.getItem('userToken');
    this.likesArray = this.dataService.getLikes();//Get temporary stored likes Array
      if(this.likesArray.find(x => x.article_id == this.newsInfo) && this.likesArray.find(x => x.article_id == this.newsInfo) != undefined ){//Check if like exist for the above article ID
        this.likeBtn = 'assets/imgs/like-active.png';
      }

      // this.loaderservice.presentLoading('Loading News Details..');
      this.userToken = localStorage.getItem('userToken');//Get User Token
      var formData = new FormData();
      formData.append('id', this.newsInfo);
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
  //Like Post
  likePost(){
    if(this.likeBtn == 'assets/imgs/like.png'){
      this.likeBtn = 'assets/imgs/like-active.png';
      // this.toastService.presentToast('News liked');

      //Store a temporary session for the news article likes
      this.dataService.saveLike(this.newsResponse.id, true);

      var formData = new FormData();
      formData.append('article_id', this.newsResponse.id);
      this.restService.likeNews(formData, this.userToken).subscribe(data => {// Call API for Like counter
        console.log(data);
      } , err => {
        console.log(err);
      });
      if(this.newsResponse.likes){
        this.newsResponse.likes.likes = parseInt(this.newsResponse.likes.likes) + 1;
      }else{
        this.newsResponse.likes = { likes: '2' };
      }
    }
  }
  //Get Catgeory Name
  filterCategory(categoryId){
    // console.log(categoryId);
    if(this.newsResponse.categories.length > 0){
      // console.log(this.newsResponse.categories.find(x => x.id == parseInt(categoryId)));
      if(this.newsResponse.categories.find(x => x.id == parseInt(categoryId)) && this.newsResponse.categories.find(x => x.id == parseInt(categoryId)) != undefined ){
        return this.newsResponse.categories.find(x => x.id == parseInt(categoryId)).title;
      }
    }
  }
  //Go Back to Tabs Page
  goBack(){
    if(this.getFromCategoryBool){
      // this.navCtrl.navigateRoot('/qpresscategory');
       this.navCtrl.navigateRoot('/qpresscategory', { animated: true, animationDirection: 'back' });
    }else{
      // this.navCtrl.navigateRoot('/tabs');
      this.navCtrl.navigateRoot('/tabs', { animated: true, animationDirection: 'back' });
    }   
  }
  //Open News Site on in App Browser
  openSite(){
    this.navCtrl.navigateRoot('/tabs', { animated: true, animationDirection: 'back' });
    setTimeout(() => {
      this.navCtrl.navigateRoot('/channel', { animated: true, animationDirection: 'forward' });
    } , 300);  
  }
  subscribeNews(val){
    if(val == 'subscribe'){
      this.subscribeText = 'subscribed';
    }else{
      this.showSimpleAlert();
    }
  }
  async showSimpleAlert(){
    let alert = await this.alertCtrl.create({
      subHeader: 'Want to unsubsribe to this channel?',
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
          text: 'Unsubscribe',
          role: 'ok',
          handler: () => {
            console.log('Unsubscribe');
            this.subscribeText = 'subscribe';
          }
        }
      ]
    });
    alert.present();
  }
  hideShowEmojiDiv(){
    if(this.hideShowDiv){
      this.hideShowDiv = false;
      document.getElementById('id-emojis-selection-div').style.opacity = '0';
      document.getElementById('id-emojis-selection-div').style.visibility = 'hidden';
    }else{
      this.hideShowDiv = true;
      document.getElementById('id-emojis-selection-div').style.opacity = '1';
      document.getElementById('id-emojis-selection-div').style.visibility = 'visible';
    }
  }
  giveReaction(emoji){
    this.reactionVar = emoji.icon;
    this.hideShowDiv = false;
    
    document.getElementById('id-emojis-selection-div').style.opacity = '0';
    document.getElementById('id-emojis-selection-div').style.visibility = 'hidden';
  }
  async openComments(){
    const popover = await this.popoverController.create({
      component: CommentPage,
      cssClass: 'comments-popover',
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
  socialShare(){
    const url = this.newsResponse.source_link;
    const text = 'Read news'+'\n'
    this.socialSharing.share(text, 'MEDIUM', null, url).then(data => {
      console.log(data);
    });
  }
  //Footer buttons 
  footerBtnAction(value){
    if(value == 'refresh'){
      this.getLikesAndDetails();
    }else if(value == 'socialShare'){
      this.socialShare();
    }else if('moreOptions'){
      
    }
  }
  openMenu(){
    console.log('menu');
    this.menuCtrl.toggle();
  }
  async moreOptions(){
    const popover = await this.popoverController.create({
      component: MoreoptionsPage,
      cssClass: 'more-options-popover',
      showBackdrop: true,
      backdropDismiss: true,
      componentProps: {
        'newsID': this.newsInfo,
      }
    });
    popover.onDidDismiss().then((data: any) => {
      console.log(data);
      if(data.data != undefined){

        if(data.data.data == 'screenshot'){
          // Take a screenshot and save to file
          var date = new Date();
          // this.screenshot.URI(80).then(data => {//capture screenshot and show on the small display
          //   console.log(data);
          //   this.screenshotImg = data.URI;
          //   // this.screenshotImg = this.win.Ionic.WebView.convertFileSrc(fileImg);
          
            this.screenshot.save('jpg', 80, date + '.jpg').then(data => {//save your screenshot in gallery
              console.log(data);
              var filePath = 'file://' + data.filePath;
              this.screenshotImg = this.win.Ionic.WebView.convertFileSrc(filePath);
              this.screenShotBool = true;
              this.toastService.presentToast('screenshot saved');
            // }).catch(err => {
            //   console.log(err);
            // });

          } , err =>  {
            console.log(err);
          });
          
        }else if(data.data.data == 'copy'){
          this.clipboard.copy(this.newsResponse.source_link).then(data => {
            console.log(data);
            this.toastService.presentToast('URL copied to Clipboard');
          }).catch(err => {
            console.log(err);
          });
        }else if(data.data.data == 'bookmark'){
          this.toastService.presentToast('News added to bookmarks');
        }

      }

      //Hide Screenshot image
      setTimeout(() => {
        this.screenShotBool = false;
      } , 5000);
    });
    return await popover.present();
  }
}
