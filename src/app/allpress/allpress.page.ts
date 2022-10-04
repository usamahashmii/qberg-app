import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-allpress',
  templateUrl: './allpress.page.html',
  styleUrls: ['./allpress.page.scss'],
})
export class AllpressPage implements OnInit {

  pressArray: any;
  constructor(private dataService: DataService,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.pressArray = this.dataService.allPress;
  }
  closeModal(){
    this.modalCtrl.dismiss();
  }
}
