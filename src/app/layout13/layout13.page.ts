import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';
import { LoaderService } from '../loader.service';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-layout13',
  templateUrl: './layout13.page.html',
  styleUrls: ['./layout13.page.scss'],
})
export class Layout13Page implements OnInit {

  newsArray: Array<any> = [];
  apiResponse: any;

  subscribableNewsArray: any;
  moreNewsArray: any;

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
      if(data.layouts == 'layout4' && !this.apiResponse){
        // console.log(data);
        this.blockNextCall = true;
        // this.subscribableNewsArray = this.dataService.subscribableNewsArray;
        // this.subscribableNewsArray = this.subscribableNewsArray.map(val => ({ id: val.id, img: val.img, choosed: false }));
        
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
  segmentChanged(event){
    console.log(event);
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
