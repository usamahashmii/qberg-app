import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-qpostlayout7',
  templateUrl: './qpostlayout7.page.html',
  styleUrls: ['./qpostlayout7.page.scss'],
})
export class Qpostlayout7Page implements OnInit {
  postsResponse: Array<any> = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.postsResponse = this.dataService.economyNewsArray;
  }

}
