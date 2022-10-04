import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage implements OnInit {

  sportsNewsArray: any;

  constructor(private dataService: DataService) { }
  ionViewWillEnter(){
    console.log('sports entered@!!');
  }
  ngOnInit() {
    this.sportsNewsArray = this.dataService.sportsNewsArray;
    console.log(this.sportsNewsArray);
  }
  //Ion Content Scroll
  logScrolling(event){
    //set store data for side menu
    this.dataService.setObservable(event);
   }
}
