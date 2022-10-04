import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllstoresPage } from './allstores.page';

const routes: Routes = [
  {
    path: '',
    component: AllstoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllstoresPageRoutingModule {}
