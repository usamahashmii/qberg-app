import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopularsalesPage } from './popularsales.page';

const routes: Routes = [
  {
    path: '',
    component: PopularsalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopularsalesPageRoutingModule {}
