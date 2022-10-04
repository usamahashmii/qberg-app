import { Component, ElementRef, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.page.html',
  styleUrls: ['./scroll.page.scss'],
})
export class ScrollPage implements OnInit {

  footer: any;
  header: any;

  constructor(private el: ElementRef) { }

  ngOnInit() {
   
  }
  private lastY = 0;
  logScrolling(event){
      // Hide Header on on scroll down
      // console.log(event.detail);
    
      if (event.detail.scrollTop > this.lastY) {
        document. querySelector(".header").classList.remove('nav-down');
        document. querySelector(".header").classList.add('nav-up');

        document. querySelector(".footer").classList.remove('footer-up');
        document. querySelector(".footer").classList.add('footer-down');
      }else {
        document. querySelector(".header").classList.remove('nav-up');
        document. querySelector(".header").classList.add('nav-down');

        document. querySelector(".footer").classList.remove('footer-down');
        document. querySelector(".footer").classList.add('footer-up');
      }
  
      this.lastY = event.detail.scrollTop;
  }
}
