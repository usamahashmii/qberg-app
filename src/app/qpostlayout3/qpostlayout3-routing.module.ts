import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qpostlayout3Page } from './qpostlayout3.page';

const routes: Routes = [
  {
    path: '',
    component: Qpostlayout3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Qpostlayout3PageRoutingModule {}
