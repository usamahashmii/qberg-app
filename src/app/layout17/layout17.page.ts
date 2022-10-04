import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';
import { LoaderService } from '../loader.service';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-layout17',
  templateUrl: './layout17.page.html',
  styleUrls: ['./layout17.page.scss'],
})
export class Layout17Page implements OnInit {

  @Output() 
  dateChange:EventEmitter< MatDatepickerInputEvent< any>>;
  datePicked: any;

  apiResponse: any;
  newsArray: Array<any> = [];
  blockNextCall: boolean = false;

  paginationCounter: number = 1;
  categoryData: any;
  constructor(private dataService: DataService,
    private navCtrl: NavController,
    private loaderService: LoaderService,
    private router: Router,
    private restService: RestService) { }

  ngOnInit() {
    this.dataService.qPressCheckTabObservable().subscribe(data => {
      // console.log(data);
      if(data.layouts == 'layout8' && !this.apiResponse){
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
  dateChanged(ev: any){
    this.datePicked = ev.value;
    this.datePicked = this.formatDate(this.datePicked);
    console.log(this.datePicked);
  }
  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    return [year, month, day].join('-');
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
