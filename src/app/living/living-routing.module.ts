import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivingPage } from './living.page';

const routes: Routes = [
  {
    path: '',
    component: LivingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivingPageRoutingModule {}
