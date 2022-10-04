import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  recipeArray: any;
  seaosnalRecipe: any;
  moreRecipeArray: any;
  constructor(private dataService: DataService,
    private router: Router) { }

  ngOnInit() {
    this.dataService.qMallCheckTabObservable().subscribe(data => {
      console.log(data);
      if(data == 'layout4'){
        setTimeout(() => {
          this.recipeArray = this.dataService.recipeArray;
          this.seaosnalRecipe = this.dataService.seaosnalRecipe;
          this.moreRecipeArray = this.dataService.moreRecipeArray;
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
