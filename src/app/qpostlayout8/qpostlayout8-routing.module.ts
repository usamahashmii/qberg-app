import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qpostlayout8Page } from './qpostlayout8.page';

const routes: Routes = [
  {
    path: '',
    component: Qpostlayout8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Qpostlayout8PageRoutingModule {}
