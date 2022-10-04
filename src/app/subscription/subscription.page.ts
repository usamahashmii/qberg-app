import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, ModalController, NavController, PopoverController } from '@ionic/angular';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { PaymentPage } from '../payment/payment.page';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
})
export class SubscriptionPage implements OnInit {

  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    // loop: true,
    spaceBetween: 10,
    // autoplay:true,
  };
  @ViewChild(IonSlides) slides: IonSlides;
  subscriptonArray = [
    {'id': 0,
    'discount': '30%',
    'durationCount': '3',
    'duration': 'Months',
    'price': 'MNT 9999.99',
    'packageName': 'Standard',
    'offer': [{'desc': 'Advertise your products(upto 15)', 'offering': 'yes'},{'desc': 'Enjoy purchases', 'offering': 'yes'},{'desc': 'Show your product at the Feed page', 'offering': 'no'},{'desc': 'Unlimited Advertisements', 'offering': 'no'}]},
    {'id': 1,
    'discount': '40%',
    'durationCount': '6',
    'duration': 'Months',
    'price': 'MNT 99999.99',
    'packageName': 'Premium',
    'offer': [{'desc': 'Advertise your products(upto 15)', 'offering': 'yes'},{'desc': 'Enjoy purchases', 'offering': 'yes'},{'desc': 'Show your product at the Feed page', 'offering': 'yes'},{'desc': 'Unlimited Advertisements', 'offering': 'no'}]},
    {'id': 2,
    'discount': '50%',
    'durationCount': '12',
    'duration': 'Months',
    'price': 'MNT 129999.99',
    'packageName': 'Ultra',
    'offer': [{'desc': 'Advertise your products(upto 15)', 'offering': 'yes'},{'desc': 'Enjoy purchases', 'offering': 'yes'},{'desc': 'Show your product at the Feed page', 'offering': 'yes'},{'desc': 'Unlimited Advertisements', 'offering': 'yes'}]}
  ];
  activeSlide: number = 0;
  activeSubscriptionInformation: any = {};
  popover: any;
  constructor(private navCtrl: NavController,
    private router: Router,
    private popoverController: PopoverController,
    private modalController: ModalController) { }

  ngOnInit() {
    this.activeSubscriptionInformation = this.subscriptonArray[0];
  }
  slideChanged() {
    this.slides.getActiveIndex().then(currentIndex => {
      console.log('Current index is', currentIndex);
      this.activeSlide = currentIndex;
      this.activeSubscriptionInformation = this.subscriptonArray[this.activeSlide];
    });
  }
  goBack(){
    this.navCtrl.navigateBack('/profile');
  }
  async payNow(){
    const modal = await this.popoverController.create({
      component: PaymentPage,
      cssClass: 'payment-popover',
      backdropDismiss: false,
      componentProps: {
        'subscription': this.activeSubscriptionInformation,
      }
    });
    modal.onDidDismiss().then((data: any) => {
      console.log(data);
      if(data.data.data_you_sent == 'amountConfirmation'){
        //go to Advertisement Page
        // this.navCtrl.navigateForward('/advertisement');
        this.router.navigate(['advertisement']);
      }else{
        //nothing
      }
    });
    return await modal.present();
  }
}