import { Component, OnInit } from '@angular/core';
import { Qpostlayout1Page } from '../qpostlayout1/qpostlayout1.page';
import { Qpostlayout2Page } from '../qpostlayout2/qpostlayout2.page';
import { Qpostlayout3Page } from '../qpostlayout3/qpostlayout3.page';
import { Qpostlayout4Page } from '../qpostlayout4/qpostlayout4.page';
import { Qpostlayout5Page } from '../qpostlayout5/qpostlayout5.page';
import { Qpostlayout6Page } from '../qpostlayout6/qpostlayout6.page';
import { Qpostlayout7Page } from '../qpostlayout7/qpostlayout7.page';
import { Qpostlayout8Page } from '../qpostlayout8/qpostlayout8.page';

@Component({
  selector: 'app-qpostcategory',
  templateUrl: './qpostcategory.page.html',
  styleUrls: ['./qpostcategory.page.scss'],
})
export class QpostcategoryPage implements OnInit {
  categoriesArray: Array<any> = [
    {
      id: 1,
      name: 'Travel'
    },
    {
      id: 2,
      name: 'Culture'
    },
    {
      id: 2,
      name: 'Hot issues'
    },
    {
      id: 2,
      name: 'Tech'
    },
    {
      id: 2,
      name: 'Fashion'
    },
    {
      id: 2,
      name: 'Language'
    },
    {
      id: 2,
      name: 'Food'
    },
    {
      id: 2,
      name: 'Living'
    },
    {
      id: 2,
      name: 'Game'
    },
  ];
  layout1 = Qpostlayout1Page;
  layout2 = Qpostlayout2Page;
  layout3 = Qpostlayout3Page;
  layout4 = Qpostlayout4Page;
  layout5 = Qpostlayout5Page;
  layout6 = Qpostlayout6Page;
  layout7 = Qpostlayout7Page;
  layout8 = Qpostlayout8Page;
  // layout8 = ViewNewsPage;
  // layout9 = OpinionPage;
  // layout10 = Layout10Page;
  // layout11 = Layout11Page;
  // layout12 = Layout12Page;
  // layout13 = Layout13Page;
  // layout14 = Layout14Page;
  // layout15 = Layout15Page;
  // layout16 = Layout16Page;
  // layout17 = Layout17Page;
  // layout18 = Layout18Page;
  constructor() { }

  ngOnInit() {
  }

}
