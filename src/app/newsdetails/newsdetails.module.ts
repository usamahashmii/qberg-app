import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsdetailsPageRoutingModule } from './newsdetails-routing.module';

import { NewsdetailsPage } from './newsdetails.page';
import { ComponentModule } from '../component/component.module';
import { PipesModule } from '../pipes/pipes.module';
import { Attributes, IntersectionObserverHooks, LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS } from 'ng-lazyload-image';
import { TranslateModule } from '@ngx-translate/core';

@Injectable()
export class LazyLoadImageHooks extends IntersectionObserverHooks{
  setup(attributes: Attributes){
    attributes.offset = 10;
    attributes.defaultImagePath = './assets/imgs/black-img.jpeg';
    attributes.errorImagePath = './assets/imgs/black-img.jpeg';
    return super.setup(attributes);
  }
}
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsdetailsPageRoutingModule,
    ComponentModule,
    PipesModule,
    LazyLoadImageModule,
    TranslateModule
  ],
  declarations: [NewsdetailsPage],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: LazyLoadImageHooks }],
})
export class NewsdetailsPageModule {}
