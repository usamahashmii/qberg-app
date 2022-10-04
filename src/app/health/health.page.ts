import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.page.html',
  styleUrls: ['./health.page.scss'],
})
export class HealthPage implements OnInit {

  bannerArray = [
    {
      id: 1,
      img: 'assets/imgs/health-1.jpeg'
    },
    {
      id: 2,
      img: 'assets/imgs/health-2.jpeg'
    }
  ];
  healthArray: Array<any> = [];
  healthArrayDisp: any;
  gamesNewsArray: any;
  sectionOneCounter: number = 0;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.healthArray = this.dataService.healthArray;
    this.gamesNewsArray = this.dataService.gamesNewsArray;
    var healthArray = this.healthArray;
    this.healthArrayDisp = healthArray.slice(0,3);
  }
  //Ion Content Scroll
  logScrolling(event){
    //set store data for side menu
    console.log(event);
    this.dataService.setObservable(event);
   }
  refreshSectionOne(i , j){
    this.sectionOneCounter++;
    if(this.sectionOneCounter == 1){
      var healthArray = this.healthArray;
      this.healthArrayDisp = healthArray.slice(3,6);
    }else if(this.sectionOneCounter == 2){
      var healthArray = this.healthArray;
      this.healthArrayDisp = healthArray.slice(6,9);
    }else if(this.sectionOneCounter == 3){
      var healthArray = this.healthArray;
      this.healthArrayDisp = healthArray.slice(9,12);
    }else{
      var healthArray = this.healthArray;
      this.healthArrayDisp = healthArray.slice(0,3);
      this.sectionOneCounter = 0;
    }
  }
}
