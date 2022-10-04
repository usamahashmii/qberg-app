import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imagesdetail',
  templateUrl: './imagesdetail.page.html',
  styleUrls: ['./imagesdetail.page.scss'],
})
export class ImagesdetailPage implements OnInit {

  imageDetails: any;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params.navigationparams);
      this.imageDetails = params.navigationparams;
    });
  }

}
