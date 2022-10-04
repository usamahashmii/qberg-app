import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tertiaryheader',
  templateUrl: './tertiaryheader.component.html',
  styleUrls: ['./tertiaryheader.component.scss'],
})
export class TertiaryheaderComponent implements OnInit {

  constructor(private navCtrl: NavController,
    private router: Router) { }

  ngOnInit() {}
  //GO Back
  goBack(){
  // this.navCtrl.back();
    this.navCtrl.back();
  // this.navCtrl.navigateBack('/qmallcatgeory');
  
  }
}
