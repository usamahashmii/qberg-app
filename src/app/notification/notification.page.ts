import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  
  notificationsResponse: Array<any> = [];
  showNoDataImageBool: boolean = false;
  paginationCounter: number = 1;
  apiResponse: any;

  notificationsArray = [
    {
      id: 1,
      title: 'The best Roblox Game',
      desc: 'Roblox is the ultimate virtual universe that lets you to be created',
      date: '10 Nov 2021',
      img: 'https://i.ytimg.com/vi/6XUy1Z9eVAI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLApm8O2B2WZn7-wQ0nlNNe4AvrA5A'
    },
    {
      id: 2,
      title: 'T20 World Cup Final',
      desc: 'NewZealand vs Australia, who fill win the championsship, click for more details',
      date: '10 Jan 2021',
      img: 'https://i.ytimg.com/vi/ghZZB_7HFS8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCnNLiJNL7M4PKibnctYgidOziSFw'
    },
    {
      id: 3,
      title: 'Countdown Begins to live broadcasts',
      desc: 'Grab your chance to vote and see live broadcast now',
      date: '22 Desc 2021',
      img: 'https://i.ytimg.com/vi/9bnVfluEVlI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwn6cU_cqrDF9d8YDEWA5jcKlzhQ'
    },
    {
      id: 4,
      title: 'Vote for Country pavilions',
      desc: 'Pick your favorite pavilion and watch the live broadcast for free',
      date: '14 Oct 2021',
      img: 'https://ae01.alicdn.com/kf/Hada97a3451904effb42c19706b6c18078/Zogaa-Brand-Men-Jacket-Army-Green-Military-Wide-waisted-Coat-Casual-Cotton-Hooded-Windbreaker-Jackets-Overcoat.jpg_Q90.jpg_.webp'
    },
  ]
  constructor(private navCtrl: NavController,
    private restService: RestService) { }

  ngOnInit() {
   this.getAllNotifications(null);
  }
  getAllNotifications(refreshEvent){
    var userToken  = localStorage.getItem('userToken');
    var formData = new FormData();
    this.restService.notifications(userToken, this.paginationCounter).subscribe(data => {
      console.log(data);
      if(refreshEvent){
        refreshEvent.target.complete();  //Hide the Refreshing event
      }
      this.apiResponse = data;
      if(this.apiResponse.status){
      
        if(this.apiResponse.Data.data && this.apiResponse.Data.data.length > 0){
          
          this.apiResponse.Data.data.forEach(value => {//append the data to the array
            this.notificationsResponse.push(value);
          });

        }else{//empty array returned from server
          this.showNoDataImageBool = true;
        }
        
      }else{
        //No data returned, some error occurred!
      }
    } , err => {
      if(refreshEvent){
        refreshEvent.target.complete();  //Hide the Refreshing event
      }
      console.log(err);
    });
  }
  goBack(){
    this.navCtrl.navigateRoot('/tabs');
  }
  //Refresh Content
  refreshData(refreshEvent) {
    this.paginationCounter = 1;
    this.notificationsResponse = [];
    this.apiResponse = null;
    this.getAllNotifications(refreshEvent);
  }
  //Load More data
  loadData(infiniteScrollevent) {
    
    this.paginationCounter++;
    this.getAllNotifications(infiniteScrollevent);
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
}
