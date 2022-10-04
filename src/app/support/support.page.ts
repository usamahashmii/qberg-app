import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonContent, NavController, ToastController } from '@ionic/angular';
import { from, interval, Observable } from 'rxjs';
import { RestService } from '../rest.service';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {

  @ViewChild(IonContent, {read: IonContent, static: false}) myContent: IonContent;
  messageTxt: string = '';
  date: string = '';

  chatArray: Array<any> = [];
  chatArrayCheck: Array<any> = [];

  chatInterval: any = {};
  userToken: any;

  showSendLoader: boolean = false;
  apiResponse: any;
  scrollApiResponse: any;
  
  scrollValue: number = 6;
  scrollBool: boolean = true;
  showChatLoader: boolean = false;

  paginationCounter: number = 1;

  constructor(private navCtrl: NavController,
    private restService: RestService,
    private toastService: ToastService,
    private alertCtrl: AlertController) {}

  ngOnInit() {
    this.userToken = localStorage.getItem('userToken');
    this.callChatApi();
    this.getChats();
    if(!localStorage.getItem('showAlert')){
      this.showAlert();
    }else{}
    this.getcurrentDate();
  }
  async showAlert() {
    let alert = await this.alertCtrl.create({
      header: 'Customer Support',
      message: 'Send message to our customer support and get help immediately',
      cssClass: 'start-chat-alert',
      buttons: [
        {
          text: 'Start Chat',
          role: '',
          handler: () => {
            this.alertCtrl.dismiss();
            localStorage.setItem('showAlert', 'false');
          }
        },
      ],
      backdropDismiss: false // <- Here! :)
    });

    await alert.present();
  }
  send(){
    if(this.messageTxt != ''){
      var formData = new FormData();
      formData.append('message', this.messageTxt);
      formData.append('document', '');
      // formData.append('message_type', 'user');
      this.showSendLoader = true;
      this.restService.sendMessage(this.userToken, formData).subscribe(response => {
        // console.log(response);
        var apiResponse: any = response;
        if(apiResponse.status){
          this.chatArray.push(apiResponse.message);
          this.scrollToBottomOnInit(300);
          this.showSendLoader = false;
        }else{
          this.toastService.presentToast('Opps Some error!');  
        }
      } , err => {
        this.toastService.presentToast('Message not sent');
        this.showSendLoader = false;
      });
      this.messageTxt = '';
    }
  }
  scrollToBottomOnInit(val) {
    setTimeout(() => {
      this.myContent.scrollToBottom(val);
   }, val);
  }
  goBack(){
    this.navCtrl.navigateBack('/profile');
  }
  getcurrentDate(){
    this.date = (new Date()).toString().split(' ').splice(1,3).join(' ');
    // console.log(this.date);
  }
  getChats(){
    this.chatInterval = interval(2500).subscribe(data => {
     this.callChatApi();
    });
  }
  callChatApi(){
    this.restService.getChat(this.userToken, 1).subscribe(response => {
      // console.log(response);
      this.apiResponse = response;
      if(this.apiResponse.status){
        if(this.chatArrayCheck.length == this.apiResponse.Data.length){ //this.chatArray.length > 0 && (this.chatArray[this.chatArray.length -1].id == apiResponse.Data[apiResponse.Data.length - 1].id)
          // console.log(this.apiResponse.Data);

        }else{
          this.chatArrayCheck = this.apiResponse.Data;
          this.chatArray = this.apiResponse.Data;

          // this.apiResponse.Data.forEach(value => {//append the data to the array
          //   this.chatArray.push(value);
          // });
        
          // console.log(this.apiResponse.Data);
          this.scrollToBottomOnInit(1);
        }
      }
    } , err=> {
    });
  }
  ionViewWillLeave(){
    this.chatInterval.unsubscribe();
  }
  
  logScrolling(event) {
    
    if(event.detail.scrollTop < 2){
      if(this.scrollBool){
      //   this.scrollBool = false;
      //   this.showChatLoader = true;
      //   console.log(event.detail.scrollTop);
      //   //call API here
      //   this.paginationCounter++;
        
      //   this.restService.getChat(this.userToken, this.paginationCounter).subscribe(response => {
      //     console.log(response);
      //     this.scrollApiResponse = response;
      //     if(this.scrollApiResponse.status){
      //       this.showChatLoader = false;
      //       if(this.scrollApiResponse.Data.data.length > 0){
              
      //         for(let i = this.scrollApiResponse.Data.data.length - 1; i >= 1; i--){
      //           this.chatArray.unshift(this.scrollApiResponse.Data.data[i]);
      //         }
      //         // console.log(this.chatArray);
      //       }
      //     }
      //   } , err=> {
      //   });

      // }
    // }else{
    //   // console.log(event.detail.scrollTop);
    //   this.scrollBool = true;
    // }
      }
    }
  }
}
