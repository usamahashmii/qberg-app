import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Layout18Page } from './layout18.page';

const routes: Routes = [
  {
    path: '',
    component: Layout18Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Layout18PageRoutingModule {}
