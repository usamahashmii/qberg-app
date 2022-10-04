import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {

  healthArray: Array<any> = [];
  healthArrayDisp: any;
  gamesNewsArray: any;
  sectionOneCounter: number = 0;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.healthArray = this.dataService.healthArray;
    this.gamesNewsArray = this.dataService.gamesNewsArray.splice(0,2);
    var healthArray = this.healthArray;
    this.healthArrayDisp = healthArray;
    
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
      this.healthArrayDisp = healthArray.slice(6,12);
    }else{
      var healthArray = this.healthArray;
      this.healthArrayDisp = healthArray.slice(0,6);
      this.sectionOneCounter = 0;
    }
  }

}
