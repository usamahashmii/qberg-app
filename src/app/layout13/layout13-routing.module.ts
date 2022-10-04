import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Layout13Page } from './layout13.page';

const routes: Routes = [
  {
    path: '',
    component: Layout13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Layout13PageRoutingModule {}
