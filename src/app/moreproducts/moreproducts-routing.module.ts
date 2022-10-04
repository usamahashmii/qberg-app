import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoreproductsPage } from './moreproducts.page';

const routes: Routes = [
  {
    path: '',
    component: MoreproductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoreproductsPageRoutingModule {}
