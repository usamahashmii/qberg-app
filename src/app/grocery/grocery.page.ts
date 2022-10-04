import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.page.html',
  styleUrls: ['./grocery.page.scss'],
})
export class GroceryPage implements OnInit {

  grocerySlider: any;
  slideOpts = {
    initialSlide: 0,
    speed: 300,
    autoplay: {delay: 1500}
  };
  groceryArray: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.qMallCheckTabObservable().subscribe(data => {
      console.log(data);
      if(data == 'layout7'){
        setTimeout(() => {
          this.grocerySlider = this.dataService.grocerySlider;
          this.groceryArray = this.dataService.groceryArray;
        }, 1500);
        
      }
    });
  }
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (data.length === 1000) {
      //   event.target.disabled = true;
      // }
    }, 1000);
  }
}
