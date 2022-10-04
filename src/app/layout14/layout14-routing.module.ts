import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Layout14Page } from './layout14.page';

const routes: Routes = [
  {
    path: '',
    component: Layout14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Layout14PageRoutingModule {}
