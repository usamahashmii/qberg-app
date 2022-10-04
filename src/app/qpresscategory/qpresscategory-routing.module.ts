import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QpresscategoryPage } from './qpresscategory.page';

const routes: Routes = [
  {
    path: '',
    component: QpresscategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QpresscategoryPageRoutingModule {}
