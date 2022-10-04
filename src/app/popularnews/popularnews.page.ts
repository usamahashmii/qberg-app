import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RestService } from '../rest.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ToastService } from '../toast.service';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-popularnews',
  templateUrl: './popularnews.page.html',
  styleUrls: ['./popularnews.page.scss'],
})
export class PopularnewsPage implements OnInit {

  gamesNewsArray: any;

  //Popular News API response
  popularNewsResponse: Array<any> = [];
  paginationCounter: number = 1;

  showNoDataImageBool: boolean = false;
  constructor(private dataService: DataService,
    private restService: RestService,
    private nativeStorage: NativeStorage,
    private toastService: ToastService,
    private navCtrl: NavController) { }

  ngOnInit() {
    // this.gamesNewsArray = this.dataService.gamesNewsArray;
    this.callNewsFeedData(null);
  }
  logScrolling(event){     //Ion Content Scroll
    this.dataService.setObservable(event);    //set store data for side menu
   }
  callNewsFeedData(refreshEvent){  //Call Popular News Data
    //Get Popular News Data
    var userToken  = localStorage.getItem('userToken');

    this.showNoDataImageBool = false;

    this.restService.popularNews(userToken, this.paginationCounter).subscribe(data => {
      console.log(data);
      if(refreshEvent){
        refreshEvent.target.complete();  //Hide the Refreshing event
      }
      var apiResponse: any = data;
      if(apiResponse.status){
      
        if(apiResponse.data.data && apiResponse.data.data.length > 0){
          
          apiResponse.data.data.forEach(value => {//append the data to the array
            this.popularNewsResponse.push(value);
          }); 
        }else{//empty array returned from server
          this.showNoDataImageBool = true;
        }
        
      }else{
        //No data returned, some error occurred!
      }
    } , err => {
      if(refreshEvent){
        refreshEvent.target.complete();  
      }
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
  }

  //Refresh Content
  refreshData(refreshEvent) {
    this.paginationCounter = 1;
    this.popularNewsResponse = [];
    this.callNewsFeedData(refreshEvent);
  }
  //Load More data
  loadData(infiniteScrollevent) {
    
    this.paginationCounter++;
    this.callNewsFeedData(infiniteScrollevent);
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
