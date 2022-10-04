import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Layout12Page } from './layout12.page';

const routes: Routes = [
  {
    path: '',
    component: Layout12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Layout12PageRoutingModule {}
