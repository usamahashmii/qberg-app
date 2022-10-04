import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-layout15',
  templateUrl: './layout15.page.html',
  styleUrls: ['./layout15.page.scss'],
})
export class Layout15Page implements OnInit {
  subscribableNewsArray: any;

  newsArray: Array<any> = [];
  apiResponse: any;

  blockNextCall: boolean = false;
  paginationCounter: number = 1;
  categoryData: any;

  constructor(private dataService: DataService,
    private navCtrl: NavController,
    private router: Router,
    private restService: RestService) { }

  ngOnInit() {
    this.dataService.qPressCheckTabObservable().subscribe(data => {
      // console.log(data);
      if(data.layouts == 'layout6' && !this.apiResponse){
        // console.log(data);
        this.blockNextCall = true;
        
        this.categoryData = data;
        //Get First Category Data
        this.callData(null);
      }
    });
  }
  callData(refreshEvent){
    var userToken  = localStorage.getItem('userToken');
    this.restService.getCategoryNews(userToken, this.categoryData.category, this.paginationCounter).subscribe(data => {

      if(refreshEvent){
        refreshEvent.target.complete();  //Hide the Refreshing event
      }
      this.apiResponse = data;
      if(this.apiResponse.status){
        if(this.apiResponse.data.data && this.apiResponse.data.data.length > 0){
        
          // this.newsArray = this.apiResponse.data.data;
          this.apiResponse.data.data.forEach(value => {//append the data to the array
            this.newsArray.push(value);
          });
        
        }else{}
      }else{
        //No data returned, some error occurred!
      }
    }, err => {
      
      console.log(err);
    });
  }
  addToSubscription(news, index){
    if(this.subscribableNewsArray[index].choosed){
      this.subscribableNewsArray[index].choosed = false;
    }else{
      this.subscribableNewsArray[index].choosed = true;
    }   
  }
  //Open News Details
  openNewsDetails(news){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        navigationparams: news.id,
      getFromCategory: true
      }
    };
    // this.router.navigate(['/newsdetails'] , navigationExtras);
    this.navCtrl.navigateForward('/newsdetails', navigationExtras);
  }
   //Refresh Content
   refreshData(refreshEvent) {
    this.paginationCounter = 1;
    this.newsArray = [];
    this.apiResponse = null;
    this.callData(refreshEvent);
  }
  //Load More data
  loadData(infiniteScrollevent) {
    
    this.paginationCounter++;
    this.callData(infiniteScrollevent);
  }
}
