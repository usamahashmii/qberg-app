import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('inputSearch') myInput ;
  constructor() { }

  ngOnInit() {}
  ionViewWillEnter() {
    setTimeout(() => {
      console.log('loaded');
      // this.myInput.setFocus();
    },150);
  }
}
