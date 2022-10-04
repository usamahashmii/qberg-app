import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  
  searchData: Array<any> = [];
  finalSearch: Array<any> = [];
  searchValue: string = '';

  constructor(private navCtrl: NavController,
    private dataService: DataService) { }

  ngOnInit() {
    this.searchData = this.dataService.headphonesArray;
    
  }
  goBack(){
    this.navCtrl.navigateBack('/tabs');
  }
  searchItem(event){
    var data = event.detail.value;
    // this.searchValue = event.detail.value;
        // this.chatArrayFiltered = this.chatArray.chats;
        // console.log(data)
        if (data) {
          this.finalSearch = this.searchData.filter(function (ele, i, array) {
            let arrayelement = ele.desc.toLowerCase()
            return arrayelement.includes(data)
          })
        }
        else {
          this.finalSearch = [];
        }
  }
}
