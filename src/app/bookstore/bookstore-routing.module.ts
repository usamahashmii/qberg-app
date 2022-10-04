import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookstorePage } from './bookstore.page';

const routes: Routes = [
  {
    path: '',
    component: BookstorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookstorePageRoutingModule {}
