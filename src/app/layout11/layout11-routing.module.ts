import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Layout11Page } from './layout11.page';

const routes: Routes = [
  {
    path: '',
    component: Layout11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Layout11PageRoutingModule {}
