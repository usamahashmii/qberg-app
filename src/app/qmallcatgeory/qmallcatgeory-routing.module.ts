import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QmallcatgeoryPage } from './qmallcatgeory.page';

const routes: Routes = [
  {
    path: '',
    component: QmallcatgeoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QmallcatgeoryPageRoutingModule {}
