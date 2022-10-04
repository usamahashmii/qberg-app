import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-qpostlayout3',
  templateUrl: './qpostlayout3.page.html',
  styleUrls: ['./qpostlayout3.page.scss'],
})
export class Qpostlayout3Page implements OnInit {
  apiResponse: Array<any> = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.apiResponse = this.dataService.qpostlayout1Data;
  }

}
