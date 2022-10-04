import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Layout10Page } from './layout10.page';

const routes: Routes = [
  {
    path: '',
    component: Layout10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Layout10PageRoutingModule {}
