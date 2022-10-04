import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qpostlayout7Page } from './qpostlayout7.page';

const routes: Routes = [
  {
    path: '',
    component: Qpostlayout7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Qpostlayout7PageRoutingModule {}
