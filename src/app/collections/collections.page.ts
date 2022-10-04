import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.page.html',
  styleUrls: ['./collections.page.scss'],
})
export class CollectionsPage implements OnInit {

  myCollections: any;
  constructor(private navCtrl: NavController,
    private dataService: DataService) { }

  ngOnInit() {
    this.myCollections = this.dataService.justNowArray;
  }
  goBack(){
    this.navCtrl.back();
  }
}
