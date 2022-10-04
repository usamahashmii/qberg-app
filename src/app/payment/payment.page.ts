import { Component, Input, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  // Data passed in by componentProps
  @Input() key: string;
  showPaymentDetailsDiv: any;
  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
    console.log(this.key);
    this.popoverCtrl.dismiss({ 'data_you_sent': 'kekekke' });
  }
  payNow(){
    this.dismissPopover('amountConfirmation');
  }
  dismissPopover(value){
    this.popoverCtrl.dismiss({ 'data_you_sent': value });
  }
  creditCardNumber: string;

  cc_format(value: string) {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length > 0) {
      this.creditCardNumber = parts.join(' ');
    } else {
      this.creditCardNumber = value;
    }
  }
  //Select Your Payment Method
  itemButtonClick(value){
    // if(value == 'bank'){
      this.showPaymentDetailsDiv = value;
    // }
  }
  //Go Back on Popover
  goBack(){
    this.showPaymentDetailsDiv = null;
  }
}
