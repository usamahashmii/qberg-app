import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-region',
  templateUrl: './region.page.html',
  styleUrls: ['./region.page.scss'],
})
export class RegionPage implements OnInit {

  selectedIndex: number = 0;
  regions = [
    {
      id: 1,
      name: 'Pakistan'
    },
    {
      id: 2,
      name: 'Mongolian'
    },
    {
      id: 3,
      name: 'Africa'
    },
  ]
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  pickRegion(lang, index){
    this.selectedIndex = index;
    // this.selectedIndex = index;
  }
  saveChanges(){
    this.navCtrl.back();
  }
  goBack(){
    this.navCtrl.back();
  }
}
