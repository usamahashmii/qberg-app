import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QpresscategoryPageRoutingModule } from './qpresscategory-routing.module';

import { QpresscategoryPage } from './qpresscategory.page';
//Image lazy Loading
import { Attributes, IntersectionObserverHooks, LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS } from 'ng-lazyload-image'; // <-- include ScrollHooks
import { TranslateModule } from '@ngx-translate/core';
import { ComponentModule } from '../component/component.module';
import { PoliticsnewsPage } from '../politicsnews/politicsnews.page';

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
    QpresscategoryPageRoutingModule,
    LazyLoadImageModule,
    TranslateModule,
    ComponentModule
  ],
  declarations: [QpresscategoryPage],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: LazyLoadImageHooks },PoliticsnewsPage],
})
export class QpresscategoryPageModule {}
