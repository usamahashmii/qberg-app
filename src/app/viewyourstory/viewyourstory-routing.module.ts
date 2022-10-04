import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewyourstoryPage } from './viewyourstory.page';

const routes: Routes = [
  {
    path: '',
    component: ViewyourstoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewyourstoryPageRoutingModule {}
