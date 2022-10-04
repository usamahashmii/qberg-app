import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QpostcategoryPage } from './qpostcategory.page';

const routes: Routes = [
  {
    path: '',
    component: QpostcategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QpostcategoryPageRoutingModule {}
