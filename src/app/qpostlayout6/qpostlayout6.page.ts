import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-qpostlayout6',
  templateUrl: './qpostlayout6.page.html',
  styleUrls: ['./qpostlayout6.page.scss'],
})
export class Qpostlayout6Page implements OnInit {

  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 10,
  };
  postsResponse: Array<any> = [];
  @ViewChild(IonSlides) slides: IonSlides;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.postsResponse = this.dataService.economyNewsArray;
  }

}
