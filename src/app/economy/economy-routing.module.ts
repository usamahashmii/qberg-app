import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EconomyPage } from './economy.page';

const routes: Routes = [
  {
    path: '',
    component: EconomyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EconomyPageRoutingModule {}
