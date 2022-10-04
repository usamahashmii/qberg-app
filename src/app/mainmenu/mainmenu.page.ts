import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.page.html',
  styleUrls: ['./mainmenu.page.scss'],
})
export class MainmenuPage implements OnInit {

  //slider
  slideOptsss = {
    initialSlide: 0,
    speed: 300,
    autoplay:false,
    loop: false,
    pagination: false,
    
  };

  @ViewChild('ion-slides') slides: IonSlides;
  
  checkMe: boolean = false;
  selectedTabValue: string = '1';
  menuArray = [
    {id: 1,
    img: 'https://ae01.alicdn.com/kf/He5ecdaf443444c4da6dab378430aaba3R.jpg_Q90.jpg_.webp',
    title: 'QBox',
    desc: 'An amazing known social media platform with all features and details that a reputed social media deserves. Also many of the things are under development',
    type: '1'},
    {id: 2,
      img: 'https://ae01.alicdn.com/kf/He5ecdaf443444c4da6dab378430aaba3R.jpg_Q90.jpg_.webp',
      title: 'QWallet',
      desc: 'An amazing known wallet media platform with all features and details that a reputed social media deserves. Also many of the things are under development',
      type: '2'},
    {id: 3,
      img: 'https://ae01.alicdn.com/kf/H353c865c0cc04e979707b906bdfce3d5d.jpg_Q90.jpg_.webp',
    title: 'QTaxi',
    desc: 'An amazing known ride platform all features and details that a reputed social media deserves. Also many of the things are under development',
      type: '3'},
    {id: 4,
    img: 'https://ae01.alicdn.com/kf/He5ecdaf443444c4da6dab378430aaba3R.jpg_Q90.jpg_.webp',
    title: 'QShop',
    desc: 'An amazing known shopping platform all features and details that a reputed social media deserves. Also many of the things are under development',
    type: '4'},
    {id: 5,
    img: 'https://ae01.alicdn.com/kf/H353c865c0cc04e979707b906bdfce3d5d.jpg_Q90.jpg_.webp',
    title: 'QMessenger',
    desc: 'An amazing known messenger platform all features and details that a reputed social media deserves. Also many of the things are under development',
    type: '5'},
    {id: 6,
    img: 'https://ae01.alicdn.com/kf/He5ecdaf443444c4da6dab378430aaba3R.jpg_Q90.jpg_.webp',
    title: 'QInsurance',
    desc: 'An amazing known insurance platform all features and details that a reputed social media deserves. Also many of the things are under development',
    type: '6'},
    {id: 7,
      img: 'https://ae01.alicdn.com/kf/H353c865c0cc04e979707b906bdfce3d5d.jpg_Q90.jpg_.webp',
      title: 'Qnews',
    desc: 'An amazing known news platform all features and details that a reputed social media deserves. Also many of the things are under development',
      type: '7'},
    {id: 8,
    img: 'https://ae01.alicdn.com/kf/He5ecdaf443444c4da6dab378430aaba3R.jpg_Q90.jpg_.webp',
    title: 'QSocial',
    desc: 'An amazing known social platform all features and details that a reputed social media deserves. Also many of the things are under development',
    type: '8'},
  ];
  menu: any = {};
  displayMe: boolean = false;
  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
    this.menu = this.menuArray[0];
    setTimeout(() => {
      this.checkMe = true;
      document.getElementById('menu-obj').classList.add('display-animation');
      document.getElementById('menu-obj').classList.remove('display-animation-rev');
    } , 300);
  }
  dismissPopover(){
    this.popoverCtrl.dismiss();
  }
  selectedTab(value){
    document.getElementById('menu-obj').classList.remove('display-animation');
    document.getElementById('menu-obj').classList.add('display-animation-rev');
    this.selectedTabValue = value;
    var num = parseInt(value);
    // this.slides.slideTo(num, 300);
    this.menu = this.menuArray[num - 1];
    setTimeout(() => {
      // this.checkMe = true;
      // this.displayMe = true;
      document.getElementById('menu-obj').classList.add('display-animation');
      document.getElementById('menu-obj').classList.remove('display-animation-rev');
    } , 300);
  }
  slideChanged() { 
    this.slides.getActiveIndex().then(index => {
       console.log(index);
       this.selectedTabValue = (index + 1).toString();
    })
  }
  prev(){
    this.slides.slidePrev();
  }
  next(){
    this.slides.slideNext();
  }
}
