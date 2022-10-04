import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-living',
  templateUrl: './living.page.html',
  styleUrls: ['./living.page.scss'],
})
export class LivingPage implements OnInit {

  livingArray: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.qMallCheckTabObservable().subscribe(data => {
      console.log(data);
      if(data == 'layout6'){
        setTimeout(() => {
          this.livingArray = this.dataService.livingArray;
        } , 1500);
      }
    });
  }

}
