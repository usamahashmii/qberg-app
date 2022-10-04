import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsfeedPageRoutingModule } from './newsfeed-routing.module';

import { NewsfeedPage } from './newsfeed.page';
import { ComponentModule } from '../component/component.module';
import { MaterialModule } from '../material/material.module';
import { Attributes, IntersectionObserverHooks, LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS } from 'ng-lazyload-image';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from '../pipes/pipes.module';
import { Injectable } from '@angular/core';

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
    NewsfeedPageRoutingModule,
    LazyLoadImageModule,
    ComponentModule,
    MaterialModule,
    PipesModule,
    TranslateModule
  ],
  declarations: [NewsfeedPage],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: LazyLoadImageHooks }],
})
export class NewsfeedPageModule {}
