import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.page.html',
  styleUrls: ['./business.page.scss'],
})
export class BusinessPage implements OnInit {

  businessVideosArray: any;
  moreNewsArray: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.businessVideosArray = this.dataService.businessVideosArray;
    this.moreNewsArray = this.dataService.sportsNewsArray;
  }
  //Ion Content Scroll
  logScrolling(event){
    //set store data for side menu
    this.dataService.setObservable(event);
   }
}
