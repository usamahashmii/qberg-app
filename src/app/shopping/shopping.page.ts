import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.page.html',
  styleUrls: ['./shopping.page.scss'],
})
export class ShoppingPage implements OnInit {

  shoppingItemsArray: any;
  overSeasDirectPurchase: any;
  mostPopularPicksArray: any; 
  constructor(private dataService: DataService,
    private router: Router,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.dataService.qMallCheckTabObservable().subscribe(data => {
      // console.log(data);
      if(data == 'layout1'){
        setTimeout(() => {
          this.shoppingItemsArray = this.dataService.shoppingItemsArray;
          this.overSeasDirectPurchase = this.dataService.overSeasDirectPurchase;
          this.mostPopularPicksArray = this.dataService.mostPopularPicksArray;
        } , 1500);
      }
    });
  }
  async openProductDetails(item){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        navigationparams: JSON.stringify(item)
      }
    };
    // this.navCtrl.navigateForward('/productdetails' , navigationExtras);  
    this.router.navigate(['productdetails'] , navigationExtras);
  }
}
