import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IonSlides, NavController } from '@ionic/angular';
import { DataService } from '../data.service';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.page.html',
  styleUrls: ['./opinion.page.scss'],
})
export class OpinionPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  
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
      if(data.layouts == 'layout9' && !this.apiResponse){
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
  slidePrev() {
    this.slides.slidePrev();
  }
  slideNext() {
    this.slides.slideNext();
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
    this.apiResponse = null;
    this.newsArray = [];
    this.callData(refreshEvent);
  }
  //Load More data
  loadData(infiniteScrollevent) {
    
    this.paginationCounter++;
    this.callData(infiniteScrollevent);
  }
}
