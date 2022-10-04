import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImagesdetailPage } from './imagesdetail.page';

const routes: Routes = [
  {
    path: '',
    component: ImagesdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImagesdetailPageRoutingModule {}
