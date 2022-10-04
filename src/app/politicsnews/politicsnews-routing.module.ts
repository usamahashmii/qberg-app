import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoliticsnewsPage } from './politicsnews.page';

const routes: Routes = [
  {
    path: '',
    component: PoliticsnewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliticsnewsPageRoutingModule {}
