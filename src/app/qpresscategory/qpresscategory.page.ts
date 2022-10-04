import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { EMPTY, Observable, Subscriber } from 'rxjs';
import { BypressPage } from '../bypress/bypress.page';
import { DataService } from '../data.service';
import { EconomyPage } from '../economy/economy.page';
import { Layout10Page } from '../layout10/layout10.page';
import { Layout11Page } from '../layout11/layout11.page';
import { Layout12Page } from '../layout12/layout12.page';
import { Layout13Page } from '../layout13/layout13.page';
import { Layout14Page } from '../layout14/layout14.page';
import { Layout15Page } from '../layout15/layout15.page';
import { Layout16Page } from '../layout16/layout16.page';
import { Layout17Page } from '../layout17/layout17.page';
import { Layout18Page } from '../layout18/layout18.page';
import { LifePage } from '../life/life.page';
import { LoaderService } from '../loader.service';
import { OpinionPage } from '../opinion/opinion.page';
import { PoliticsnewsPage } from '../politicsnews/politicsnews.page';
import { RankingPage } from '../ranking/ranking.page';
import { RestService } from '../rest.service';
import { SciencePage } from '../science/science.page';
import { SocialPage } from '../social/social.page';
import { ViewNewsPage } from '../view-news/view-news.page';
import { WorldPage } from '../world/world.page';

@Component({
  selector: 'app-qpresscategory',
  templateUrl: './qpresscategory.page.html',
  styleUrls: ['./qpresscategory.page.scss'],
})
export class QpresscategoryPage implements OnInit {

  selectedTabIndex: number = 0;
  scrollingCategoriesArray = [
    {
      id: 1,
      name: 'Politics',
    },
    {
      id: 2,
      name: 'Economy',
    },
    {
      id: 3,
      name: 'Social',
    },
    {
      id: 4,
      name: 'Life/Culture',
    },
    {
      id: 5,
      name: 'IT/Science',
    },
    {
      id: 6,
      name: 'Games',
    },
    {
      id: 7,
      name: 'Entertainment',
    },
    {
      id: 8,
      name: 'Health',
    },
    {
      id: 9,
      name: 'Business',
    },
    // {
    //   id: 10,
    //   name: 'TV',
    // },
    // {
    //   id: 11,
    //   name: 'Fact Check',
    // },
    {
      id: 12,
      name: 'By Press',
    },
  ];
  layout1 = PoliticsnewsPage;
  layout2 = EconomyPage;
  layout3 = SocialPage;
  layout4 = LifePage;
  layout5 = SciencePage;
  layout6 = WorldPage;
  layout7 = RankingPage;
  layout8 = ViewNewsPage;
  layout9 = OpinionPage;
  layout10 = Layout10Page;
  layout11 = Layout11Page;
  layout12 = Layout12Page;
  layout13 = Layout13Page;
  layout14 = Layout14Page;
  layout15 = Layout15Page;
  layout16 = Layout16Page;
  layout17 = Layout17Page;
  layout18 = Layout18Page;

  categoriesArray: Array<any> = [];
  subscription: any;

  constructor(private navCtrl: NavController,
    private dataService: DataService,
    private loaderService: LoaderService,
    private layout1Page: PoliticsnewsPage,
    private restService: RestService) { }

  ngOnInit() {
    //Get Categories data
    var userToken  = localStorage.getItem('userToken');

    // this.loaderService.presentLoading('Loading, Please wait..');

    var formData = new FormData();

    
    this.restService.newsCategories(formData, userToken).subscribe(data => {
      console.log(data);
      
      var apiResponse: any = data;
      if(apiResponse.status){
        if(apiResponse.data && apiResponse.data.length > 0){
          this.categoriesArray = apiResponse.data;
          
        if(this.categoriesArray[0].layouts == 'layout1'){
          this.dataService.qPressCheckTabClicked(this.categoriesArray[0]);
        }else if (this.categoriesArray[0].layouts == 'layout2'){
          this.dataService.qPressCheckTabClicked(this.categoriesArray[0]);
        }else if(this.categoriesArray[0].layouts == 'layout3'){
          this.dataService.qPressCheckTabClicked(this.categoriesArray[0]);
        }else if(this.categoriesArray[0].layouts == 'layout4'){
          this.dataService.qPressCheckTabClicked(this.categoriesArray[0]);
        }else if(this.categoriesArray[0].layouts == 'layout5'){
          this.dataService.qPressCheckTabClicked(this.categoriesArray[0]);
        }else if(this.categoriesArray[0].layouts == 'layout6'){
          this.dataService.qPressCheckTabClicked(this.categoriesArray[0]);
        }else if(this.categoriesArray[0].layouts == 'layout7'){
          this.dataService.qPressCheckTabClicked(this.categoriesArray[0]);
        }else if(this.categoriesArray[0].layouts == 'layout8'){
          this.dataService.qPressCheckTabClicked(this.categoriesArray[0]);
        }else if(this.categoriesArray[0].layouts == 'layout9'){
          this.dataService.qPressCheckTabClicked(this.categoriesArray[0]);
        }else if(this.categoriesArray[0].layouts == 'layout10'){
          this.dataService.qPressCheckTabClicked(this.categoriesArray[0]);
        }else if(this.categoriesArray[0].layouts == 'layout11'){
          this.dataService.qPressCheckTabClicked(this.categoriesArray[0]);
        }else if(this.categoriesArray[0].layouts == 'layout12'){
          this.dataService.qPressCheckTabClicked(this.categoriesArray[0]);
        }else if(this.categoriesArray[0].layouts == 'layout13'){
          this.dataService.qPressCheckTabClicked(this.categoriesArray[0]);
        }else if(this.categoriesArray[0].layouts == 'layout14'){
          this.dataService.qPressCheckTabClicked(this.categoriesArray[0]);
        }else if(this.categoriesArray[0].layouts == 'layout15'){
          this.dataService.qPressCheckTabClicked(this.categoriesArray[0]);
        }else if(this.categoriesArray[0].layouts == 'layout16'){
          this.dataService.qPressCheckTabClicked(this.categoriesArray[0]);
        }else if(this.categoriesArray[0].layouts == 'layout17'){
          this.dataService.qPressCheckTabClicked(this.categoriesArray[0]);
        }else if(this.categoriesArray[0].layouts == 'layout18'){
          this.dataService.qPressCheckTabClicked(this.categoriesArray[0]);
        }else if(this.categoriesArray[0].layouts == 'layout19'){
          this.dataService.qPressCheckTabClicked(this.categoriesArray[0]);
        }else if(this.categoriesArray[0].layouts == 'layout20'){
          this.dataService.qPressCheckTabClicked(this.categoriesArray[0]);
        }
        }else{}
        
      }else{
        //No data returned, some error occurred!
      }
    } , err => {
      // this.loaderService.dismissLoader();
      console.log(err);
    });


  }
  //Tabs switched
  apiResponse: any;
  newsArray: Array<any> = [];
  
  tabChange(event){
    console.log(event);
  
    console.log(this.categoriesArray[event.detail.index])
    if(this.categoriesArray[event.detail.index].layouts == 'layout1'){
      this.dataService.qPressCheckTabClicked(this.categoriesArray[event.detail.index]);
    }else if (this.categoriesArray[event.detail.index].layouts == 'layout2'){
      this.dataService.qPressCheckTabClicked(this.categoriesArray[event.detail.index]);
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout3'){
      this.dataService.qPressCheckTabClicked(this.categoriesArray[event.detail.index]);
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout4'){
      this.dataService.qPressCheckTabClicked(this.categoriesArray[event.detail.index]);
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout5'){
      this.dataService.qPressCheckTabClicked(this.categoriesArray[event.detail.index]);
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout6'){
      this.dataService.qPressCheckTabClicked(this.categoriesArray[event.detail.index]);
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout7'){
      this.dataService.qPressCheckTabClicked(this.categoriesArray[event.detail.index]);
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout8'){
      this.dataService.qPressCheckTabClicked(this.categoriesArray[event.detail.index]);
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout9'){
      this.dataService.qPressCheckTabClicked(this.categoriesArray[event.detail.index]);
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout10'){
      this.dataService.qPressCheckTabClicked(this.categoriesArray[event.detail.index]);
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout11'){
      this.dataService.qPressCheckTabClicked(this.categoriesArray[event.detail.index]);
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout12'){
      this.dataService.qPressCheckTabClicked(this.categoriesArray[event.detail.index]);
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout13'){
      this.dataService.qPressCheckTabClicked(this.categoriesArray[event.detail.index]);
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout14'){
      this.dataService.qPressCheckTabClicked(this.categoriesArray[event.detail.index]);
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout15'){
      this.dataService.qPressCheckTabClicked(this.categoriesArray[event.detail.index]);
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout16'){
      this.dataService.qPressCheckTabClicked(this.categoriesArray[event.detail.index]);
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout17'){
      this.dataService.qPressCheckTabClicked(this.categoriesArray[event.detail.index]);
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout18'){
      this.dataService.qPressCheckTabClicked(this.categoriesArray[event.detail.index]);
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout19'){
      this.dataService.qPressCheckTabClicked(this.categoriesArray[event.detail.index]);
    }else if(this.categoriesArray[event.detail.index].layouts == 'layout20'){
      this.dataService.qPressCheckTabClicked(this.categoriesArray[event.detail.index]);
    }
  }
  activetabChange(event){
    console.log(event);
  }
  ionViewWillLeave(){
    // this.dataService.clearSubject();
  }
}

