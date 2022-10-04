import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-qpostlayout1',
  templateUrl: './qpostlayout1.page.html',
  styleUrls: ['./qpostlayout1.page.scss'],
})
export class Qpostlayout1Page implements OnInit {

  qPostsPublishers: Array<any> = [];
  qPostsMore: Array<any> = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.qPostsPublishers = this.dataService.qpostlayout1Data;
    this.qPostsMore = this.dataService.qpostlayout1Section2Data;
  }

}
