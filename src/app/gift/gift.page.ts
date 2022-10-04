import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.page.html',
  styleUrls: ['./gift.page.scss'],
})
export class GiftPage implements OnInit {

  giftSectionArray: any;
  giftSectionInstaViewArray: any;
  bannerArray: any;
  todaysGiftArray: any;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(private dataService: DataService,
    private router: Router,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.dataService.qMallCheckTabObservable().subscribe(data => {
      console.log(data);
      if(data == 'layout2'){
        setTimeout(() => {
          this.giftSectionArray = this.dataService.giftSectionArray;
          this.giftSectionInstaViewArray = this.dataService.giftSectionInstaViewArray;
          this.bannerArray = this.dataService.bannerArray;
          this.todaysGiftArray = this.dataService.todaysGiftArray;
        } , 1500);
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
  openMoreProuducts(gift){
    if(typeof(gift) === 'string'){
      var navigationExtras: NavigationExtras = {
        queryParams: {
          navigationparams: JSON.stringify({ name: 'shirts' })
        }
      };
    }else{
      var navigationExtras: NavigationExtras = {
        queryParams: {
          navigationparams: JSON.stringify(gift)
        }
      };
    }
    this.router.navigate(['moreproducts'] , navigationExtras);
  }
}
