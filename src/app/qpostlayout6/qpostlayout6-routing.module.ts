import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qpostlayout6Page } from './qpostlayout6.page';

const routes: Routes = [
  {
    path: '',
    component: Qpostlayout6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Qpostlayout6PageRoutingModule {}
