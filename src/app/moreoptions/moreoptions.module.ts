import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoreoptionsPageRoutingModule } from './moreoptions-routing.module';

import { MoreoptionsPage } from './moreoptions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoreoptionsPageRoutingModule
  ],
  declarations: [MoreoptionsPage]
})
export class MoreoptionsPageModule {}
