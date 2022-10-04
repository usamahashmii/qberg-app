import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-moreproducts',
  templateUrl: './moreproducts.page.html',
  styleUrls: ['./moreproducts.page.scss'],
})
export class MoreproductsPage implements OnInit {

  gift: any;
  postsArray: any;
  constructor(private route: ActivatedRoute,
    private navCtrl: NavController,
    private router: Router,
    private dataService: DataService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.gift = JSON.parse(params.navigationparams);
      console.log(this.gift);
      if(this.gift.name.toLowerCase() == 'rings'){
        this.postsArray = this.dataService.ringsArray;
      }else if(this.gift.name.toLowerCase() == 'shirts'){
        this.postsArray = this.dataService.shoppingItems;
      }else if(this.gift.name.toLowerCase() == 'fashionclothes'){
        this.postsArray = this.dataService.shoppingItems;
      }else if(this.gift.name.toLowerCase() == 'headsets'){
        this.postsArray = this.dataService.headphonesArray;
      }else{
        this.postsArray = this.dataService.todaysGiftArray;
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
  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  goBack(){
    this.navCtrl.navigateBack('/qmallcatgeory');
  }
}
