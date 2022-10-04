import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.page.html',
  styleUrls: ['./beauty.page.scss'],
})
export class BeautyPage implements OnInit {

  genderCategory: string = 'women';
  mostPopularPicksArray: any;
  fasionArray: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.mostPopularPicksArray = this.dataService.mostPopularPicksArray;
    this.fasionArray = this.dataService.fasionArray;
  }
  toggleGenderCategory(val){
    this.genderCategory = val;
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
