import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qpostlayout1Page } from './qpostlayout1.page';

const routes: Routes = [
  {
    path: '',
    component: Qpostlayout1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Qpostlayout1PageRoutingModule {}
