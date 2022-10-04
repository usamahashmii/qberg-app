import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-popularsales',
  templateUrl: './popularsales.page.html',
  styleUrls: ['./popularsales.page.scss'],
})
export class PopularsalesPage implements OnInit {

  entertainmentArray: any;
  moreNewsArray: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.entertainmentArray = this.dataService.entertainmentArray;
    this.moreNewsArray = this.dataService.sportsNewsArray;
  }
  //Ion Content Scroll
  logScrolling(event){
    //set store data for side menu
    this.dataService.setObservable(event);
   }
}
