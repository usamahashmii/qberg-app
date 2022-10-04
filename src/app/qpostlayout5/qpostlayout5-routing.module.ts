import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qpostlayout5Page } from './qpostlayout5.page';

const routes: Routes = [
  {
    path: '',
    component: Qpostlayout5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Qpostlayout5PageRoutingModule {}
