import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopularnewsPage } from './popularnews.page';

const routes: Routes = [
  {
    path: '',
    component: PopularnewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopularnewsPageRoutingModule {}
