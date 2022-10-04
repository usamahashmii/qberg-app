import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bookstore',
  templateUrl: './bookstore.page.html',
  styleUrls: ['./bookstore.page.scss'],
})
export class BookstorePage implements OnInit {

  bestSellerArray: any;
  constructor(private dataService: DataService,
    private router: Router) { }

  ngOnInit() {
    this.dataService.qMallCheckTabObservable().subscribe(data => {
      console.log(data);
      if(data == 'layout5'){
        setTimeout(() => {
          this.bestSellerArray = this.dataService.bestSellerArray;
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
  async openProductDetails(item){
    console.log(item);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        navigationparams: JSON.stringify(item),
        flag: 'bookstore'
      }
    };
    // this.navCtrl.navigateForward('/productdetails' , navigationExtras);  
    this.router.navigate(['productdetails'] , navigationExtras);
  }
}
