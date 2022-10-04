import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Layout16Page } from './layout16.page';

const routes: Routes = [
  {
    path: '',
    component: Layout16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Layout16PageRoutingModule {}
