import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-qpostlayout2',
  templateUrl: './qpostlayout2.page.html',
  styleUrls: ['./qpostlayout2.page.scss'],
})
export class Qpostlayout2Page implements OnInit {
  apiResponse: Array<any> = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.apiResponse = this.dataService.qpostlayout1Data;
  }

}
