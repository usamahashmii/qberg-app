import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BeautyPage } from '../beauty/beauty.page';
import { BookstorePage } from '../bookstore/bookstore.page';
import { DataService } from '../data.service';
import { FashionPage } from '../fashion/fashion.page';
import { GiftPage } from '../gift/gift.page';
import { GroceryPage } from '../grocery/grocery.page';
import { LivingPage } from '../living/living.page';
import { RecipePage } from '../recipe/recipe.page';
import { ShoppingPage } from '../shopping/shopping.page';

@Component({
  selector: 'app-qmallcatgeory',
  templateUrl: './qmallcatgeory.page.html',
  styleUrls: ['./qmallcatgeory.page.scss'],
})
export class QmallcatgeoryPage implements OnInit {

  categoriesArray: Array<any> = [
    { layouts: 'layout1' },
    { layouts: 'layout2' },
    { layouts: 'layout3' },
    { layouts: 'layout4' },
    { layouts: 'layout5' },
    { layouts: 'layout6' },
    { layouts: 'layout7' },
];

  shopsPage = ShoppingPage;
  giftPage = GiftPage;
  fashionPage = FashionPage;
  recipePage = RecipePage;
  bookstorePage = BookstorePage;
  livingPage = LivingPage;
  groceryPage = GroceryPage;
  
  constructor(private navCtrl: NavController,
    private dataService: DataService) { }

  ngOnInit() {
    this.dataService.qMallCheckTabClicked('layout1');
  }
  private lastY = 0;
  //Ion Content Scroll
  logScrolling(event){
    // Hide Header on on scroll down
    console.log(event.detail);
  
    if (event.detail.scrollTop > this.lastY) {
      console.log('if');
      document.querySelector(".header").classList.remove('nav-down');
      document.querySelector(".header").classList.add('nav-up');

      document.querySelector(".super-tab").classList.add('super-tab-margin-top');
      // document.querySelector(".stories-wrap-div").classList.add('stories-wrap-div-margin-top');

    }else {
      console.log('else');
      document.querySelector(".header").classList.remove('nav-up');
      document.querySelector(".header").classList.add('nav-down');

      document.querySelector(".super-tab").classList.remove('super-tab-margin-top');
      // document.querySelector(".stories-wrap-div").classList.remove('stories-wrap-div-margin-top');
    }
    this.lastY = event.detail.scrollTop;
  } 
  // ionViewWillEnter(){
  //   console.log('ionviewwill enter');
  //   this.dataService.subjectMall.subscribe();
  // }
  // ionViewWillLeave(){
  //   console.log('ionviewwill leave');
  //   this.dataService.unSubscribeObservableMallPage();
  // }
  tabChange(event){
    console.log(event);

    console.log(this.categoriesArray[event.detail.index])
    if(this.categoriesArray[event.detail.index].layouts == 'layout1'){
      this.dataService.qMallCheckTabClicked('layout1');
    }else if (this.categoriesArray[event.detail.index].layouts == 'layout2'){
      this.dataService.qMallCheckTabClicked('layout2');
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout3'){
      this.dataService.qMallCheckTabClicked('layout3');
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout4'){
      this.dataService.qMallCheckTabClicked('layout4');
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout5'){
      this.dataService.qMallCheckTabClicked('layout5');
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout6'){
      this.dataService.qMallCheckTabClicked('layout6');
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout7'){
      this.dataService.qMallCheckTabClicked('layout7');
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout8'){
      this.dataService.qMallCheckTabClicked('layout8');
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout9'){
      this.dataService.qMallCheckTabClicked('layout9');
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout10'){
      this.dataService.qMallCheckTabClicked('layout10');
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout11'){
      this.dataService.qMallCheckTabClicked('layout11');
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout12'){
      this.dataService.qMallCheckTabClicked('layout12');
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout13'){
      this.dataService.qMallCheckTabClicked('layout13');
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout14'){
      this.dataService.qMallCheckTabClicked('layout14');
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout15'){
      this.dataService.qMallCheckTabClicked('layout15');
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout16'){
      this.dataService.qMallCheckTabClicked('layout16');
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout17'){
      this.dataService.qMallCheckTabClicked('layout17');
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout18'){
      this.dataService.qMallCheckTabClicked('layout18');
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout19'){
      this.dataService.qMallCheckTabClicked('layout19');
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout20'){
      this.dataService.qMallCheckTabClicked('layout20');
    }
  }
}