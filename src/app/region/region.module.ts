import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegionPageRoutingModule } from './region-routing.module';

import { RegionPage } from './region.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegionPageRoutingModule,
    TranslateModule
  ],
  declarations: [RegionPage]
})
export class RegionPageModule {}
