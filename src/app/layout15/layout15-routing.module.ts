import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Layout15Page } from './layout15.page';

const routes: Routes = [
  {
    path: '',
    component: Layout15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Layout15PageRoutingModule {}
