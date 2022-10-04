import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-secondaryheader',
  templateUrl: './secondaryheader.component.html',
  styleUrls: ['./secondaryheader.component.scss'],
})
export class SecondaryheaderComponent implements OnInit {

  constructor(private navCtrl: NavController,
    private router: Router,
    private dataService: DataService) { }

  ngOnInit() {}
  goBack(){
    // this.dataService.layoutSubject1.comple
    this.dataService.clearSubject();
    this.dataService.clearSubject();
    // this.dataService.layoutSubject2.complete();
    // this.dataService.layoutSubject3.complete();
    // this.dataService.layoutSubject4.complete();
    // this.dataService.layoutSubject5.complete();
    // this.dataService.layoutSubject6.complete();
    // this.dataService.layoutSubject7.complete();
    // this.dataService.layoutSubject8.complete();
    // this.dataService.layoutSubject9.complete();
    // this.navCtrl.back();
    // this.dataService.pressTabsChange(null);
    // this.router.navigate(['/tabs']);
    this.navCtrl.pop();
    // this.navCtrl.navigateRoot('/tabs');
    this.navCtrl.navigateRoot('/tabs', { animated: true, animationDirection: 'back' });
  }
}
