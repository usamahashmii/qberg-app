import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qpostlayout4Page } from './qpostlayout4.page';

const routes: Routes = [
  {
    path: '',
    component: Qpostlayout4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Qpostlayout4PageRoutingModule {}
