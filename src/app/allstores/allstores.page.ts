import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-allstores',
  templateUrl: './allstores.page.html',
  styleUrls: ['./allstores.page.scss'],
})
export class AllstoresPage implements OnInit {

  storesArray: Array<any> = [];
  constructor(private modalCtrl: ModalController,
    private dataService: DataService) {
  }

  ngOnInit() {
    this.storesArray = this.dataService.allStores;
  }
  closeModal(){
    this.modalCtrl.dismiss();
  }
}
