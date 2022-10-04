import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.page.html',
  styleUrls: ['./covid.page.scss'],
})
export class CovidPage implements OnInit {
  covidNewsShortArray: any;
  covidNewsArray: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.covidNewsShortArray = this.dataService.covidNewsShortArray;
    this.covidNewsArray = this.dataService.covidNewsArray;
    this.dataService.getcheckTabClickedObservable().subscribe(data => {
      if(data == 'Covid-19'){
        console.log(data);
      }
    });
  }
  //Ion Content Scroll
  logScrolling(event){
    //set store data for side menu
    this.dataService.setObservable(event);
   }
}

