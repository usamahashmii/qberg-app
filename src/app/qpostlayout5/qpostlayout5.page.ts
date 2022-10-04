import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-qpostlayout5',
  templateUrl: './qpostlayout5.page.html',
  styleUrls: ['./qpostlayout5.page.scss'],
})
export class Qpostlayout5Page implements OnInit {

  responseArray: Array<any> = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.responseArray = this.dataService.economyNewsArray;
    console.log(this.responseArray);
  }

}
