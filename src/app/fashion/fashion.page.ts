import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.page.html',
  styleUrls: ['./fashion.page.scss'],
})
export class FashionPage implements OnInit {

  genderCategory: string = 'women';
  mostPopularPicksArray: any;
  fasionArray: any;
  constructor(private dataService: DataService,
    private router: Router) { }

  ngOnInit() {
    this.dataService.qMallCheckTabObservable().subscribe(data => {
      console.log(data);
      if(data == 'layout3'){
        setTimeout(() => {
          this.mostPopularPicksArray = this.dataService.mostPopularPicksArray;
          this.fasionArray = this.dataService.fasionArray;
        } , 1500);
      }
    });
  }
  toggleGenderCategory(val){
    this.genderCategory = val;
  }
  loadData(event) {
    setTimeout(() => {
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (data.length === 1000) {
      //   event.target.disabled = true;
      // }
    }, 1000);
  }
  async openProductDetails(item){
    var navigationExtras: NavigationExtras = {
      queryParams: {
        navigationparams: JSON.stringify(item)
      }
    };
    this.router.navigate(['productdetails'] , navigationExtras);
  }
  async openMoreProduct(item){
    if(typeof(item) === 'string'){
      if(item == 'headsets'){
        var navigationExtras: NavigationExtras = {
          queryParams: {
            navigationparams: JSON.stringify({ name: 'headsets' })
          }
        };
      }else if(item == 'fashionclothes'){
        var navigationExtras: NavigationExtras = {
          queryParams: {
            navigationparams: JSON.stringify({ name: 'fashionclothes' })
          }
        };
      }
    
    }else{
      var navigationExtras: NavigationExtras = {
        queryParams: {
          navigationparams: JSON.stringify(item)
        }
      };
    }
    this.router.navigate(['moreproducts'] , navigationExtras);
  }
}
