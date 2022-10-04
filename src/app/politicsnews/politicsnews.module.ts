import { CUSTOM_ELEMENTS_SCHEMA, Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoliticsnewsPageRoutingModule } from './politicsnews-routing.module';

import { PoliticsnewsPage } from './politicsnews.page';
//Image lazy Loading
import { Attributes, IntersectionObserverHooks, LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS } from 'ng-lazyload-image'; // <-- include ScrollHooks
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from '../pipes/pipes.module';
import { ComponentModule } from '../component/component.module';

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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoliticsnewsPageRoutingModule,
    LazyLoadImageModule,
    TranslateModule,
    PipesModule,
    ComponentModule
  ],
  declarations: [PoliticsnewsPage],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: LazyLoadImageHooks }],
})
export class PoliticsnewsPageModule {}
