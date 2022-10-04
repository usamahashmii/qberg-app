import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
})
export class FiltersPage implements OnInit {

  priceRangeSelection: any;
  sellersArray: any;
  dealActive: any;

  discountChoosen: any;
  minDiscount: any;
  maxDiscount: any;

  sizesArray: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.sellersArray = this.dataService.sellersArray;
    this.sizesArray = this.dataService.sizesArray;
  }
  selectPriceRange(range){
    this.priceRangeSelection = range;
  }
  //Choose Sellers
  chooseSellers(seller){
    console.log(seller);
    if(seller.choosen){
      seller.choosen = null;
      // console.log('null');
    }else{
      seller.choosen = 'yes';
      // console.log('yes');
    }
  }
  chooseDeals(){
    if(this.dealActive){
      this.dealActive = null;
    }else{
      this.dealActive = 'yes';
    }
  }
  //Choosen Discount
  discountRangeChoosen(event){
    console.log(event);
    this.discountChoosen = event;
    this.maxDiscount = this.discountChoosen.detail.value.upper;
    this.minDiscount = this.discountChoosen.detail.value.lower;
  }
  //Choose Seller
  chooseSizes(size){
    if(size.choosen){
      size.choosen = null;
    }else{
      size.choosen = 'yes';
    }
  }
}
