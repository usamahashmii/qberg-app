import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bypress',
  templateUrl: './bypress.page.html',
  styleUrls: ['./bypress.page.scss'],
})
export class BypressPage implements OnInit {

  newsLogo: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.newsLogo = this.dataService.newsLogo;
  }
  pickNewsPaper(event){
    console.log(event);
  }
}
