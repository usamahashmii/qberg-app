import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-qpostlayout4',
  templateUrl: './qpostlayout4.page.html',
  styleUrls: ['./qpostlayout4.page.scss'],
})
export class Qpostlayout4Page implements OnInit {

  apiResponse: Array<any> = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.apiResponse = this.dataService.qpostlayout1Data;
  }

}
