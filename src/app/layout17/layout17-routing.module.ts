import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Layout17Page } from './layout17.page';

const routes: Routes = [
  {
    path: '',
    component: Layout17Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Layout17PageRoutingModule {}
