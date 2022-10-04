import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-qpostlayout8',
  templateUrl: './qpostlayout8.page.html',
  styleUrls: ['./qpostlayout8.page.scss'],
})
export class Qpostlayout8Page implements OnInit {

  apiResponse: Array<any> = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.apiResponse = this.dataService.gamesNewsArray;
  }

}
