import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ThemeableBrowser, ThemeableBrowserObject, ThemeableBrowserOptions } from '@ionic-native/themeable-browser/ngx';
import { IonContent, IonSlides, MenuController, ModalController, NavController } from '@ionic/angular';
import { DataService } from '../data.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { ToastService } from '../toast.service';
import { MoreoptionsPage } from '../moreoptions/moreoptions.page';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.page.html',
  styleUrls: ['./productdetails.page.scss'],
})
export class ProductdetailsPage implements OnInit {
  private win: any = window;
  @ViewChild(IonSlides) slides: IonSlides;
  @ViewChild(IonContent) content: IonContent;

  product: any;
  postsArray: any;

  slideBtnActive: string = 'right';
  activeSlideIndex: number = 0;
  flag: string = '';
  showBookDetailsBool: boolean = false;
  screenShotBool: boolean = false;
  screenshotImg: string = '';

  constructor(private route: ActivatedRoute,
    private clipboard: Clipboard,
    private themeableBrowser: ThemeableBrowser,
    private socialSharing: SocialSharing,
    private screenshot: Screenshot,
    private menuCtrl: MenuController,
    private navCtrl: NavController,
    private popoverController: ModalController,
    private toastService: ToastService,
    private dataService: DataService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      // this.product = this.dataService.shoppingItems[0];
      this.product = JSON.parse(params.navigationparams);
      this.flag = params.flag;
      if(this.flag == 'bookstore'){
        this.showBookDetailsBool = true;
      }
      console.log(this.product);
      this.postsArray = this.dataService.shoppingItems;
    });
  }
  //Sliders get index and slide prev and next
  slideChanged() { 
    this.slides.getActiveIndex().then(index => {
       console.log(index);
       this.activeSlideIndex = index;
    });
  }
  slidePrev() {
    this.slides.slidePrev();
  }
  slideNext() {
    this.slides.slideNext();
  }
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (data.length == 1000) {
        event.target.disabled = true;
      // }
    }, 500);
  }
  private lastY = 0;
  logScrolling(event){
    // Hide Header on on scroll down
    if (event.detail.scrollTop > this.lastY) {
      // document. querySelector(".footer").classList.remove('footer-up');
      // document.getElementById('footer').style.bottom = '-72px';
      // document.getElementById('footer').style.transition = '0.2s ease-in-out';
    }else {
      // document. querySelector(".footer").classList.remove('footer-down');
      // document.getElementById('footer').style.bottom = '0';
      // document.getElementById('footer').style.transition = 'none';
      // document. querySelector(".footer").classList.add('footer-up');
    }
    this.lastY = event.detail.scrollTop;
  }
  buyNow(){
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
 
    const browser: ThemeableBrowserObject = this.themeableBrowser.create(this.product.url, '_blank', options);
    browser.on('closePressed').subscribe(data => {
      browser.close();
    });
  }
  async openProductDetails(item){
    this.showBookDetailsBool = false; //If you want to show recommendation item same as of the product detail item then remove me.
    this.activeSlideIndex = 0;
    console.log(item);
    this.product = item;
    this.scrollToTop();
    this.slides.slideTo(0,0);
    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     navigationparams: item
    //   }
    // };
    // this.navCtrl.navigateForward('/productdetails' , navigationExtras);  
  }
  scrollToTop() {
    this.content.scrollToTop(300);
  }
  socialShare(){
    const url = this.product.url;
    const text = 'Read news'+'\n'
    console.log(this.product.url);
    this.socialSharing.share(text, 'MEDIUM', null, url).then(data => {
      console.log(data);
    });
  }
  //Footer buttons 
  footerBtnAction(value){
    if(value == 'refresh'){

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
        'newsID': '218',
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
          this.clipboard.copy(this.product.url).then(data => {
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
  visitStore(){
    this.navCtrl.navigateRoot('/tabs', { animated: true, animationDirection: 'back' });
    setTimeout(() => {
      this.navCtrl.navigateRoot('/store', { animated: true, animationDirection: 'forward' });
    } , 300);
  }
}