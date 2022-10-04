import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qpostlayout2Page } from './qpostlayout2.page';

const routes: Routes = [
  {
    path: '',
    component: Qpostlayout2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Qpostlayout2PageRoutingModule {}
