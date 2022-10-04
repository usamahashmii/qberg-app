import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { DataService } from '../data.service';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-bottommenu',
  templateUrl: './bottommenu.component.html',
  styleUrls: ['./bottommenu.component.scss'],
})
export class BottommenuComponent implements OnInit {

  constructor(private menuCtrl: MenuController,
    private loaderService: LoaderService,
    private navCtrl: NavController,
    private router: Router,
    private dataService: DataService
    ) { }

  ngOnInit() {
    
  }
  
  openMenu(){
    console.log('menu');
    this.menuCtrl.toggle();
  }
  openCategoryDetails(value){
    if(value == 'home'){
      this.dataService.scrollToTopClicked(true);
    }else if(value == 'news'){
      this.navCtrl.navigateForward('/qpresscategory');
    }else if(value == 'shopping'){
      this.navCtrl.navigateForward('/qmallcatgeory');
      // this.router.navigate(['/qmallcatgeory']);
    }else if(value == 'post'){
      this.navCtrl.navigateForward('/qpostcategory');
      // this.router.navigate(['/qmallcatgeory']);
    }
  }
}
