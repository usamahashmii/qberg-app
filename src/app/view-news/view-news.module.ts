import { CUSTOM_ELEMENTS_SCHEMA,Injectable,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewNewsPageRoutingModule } from './view-news-routing.module';

import { ViewNewsPage } from './view-news.page';
import { MaterialModule } from '../material/material.module';

//Image lazy Loading
import { Attributes, IntersectionObserverHooks, LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS } from 'ng-lazyload-image'; // <-- include ScrollHooks
import { TranslateModule } from '@ngx-translate/core';
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
    MaterialModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ViewNewsPageRoutingModule,
    ReactiveFormsModule,
    LazyLoadImageModule,
    TranslateModule,
    ComponentModule
  ],
  declarations: [ViewNewsPage],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: LazyLoadImageHooks }],
})
export class ViewNewsPageModule {}
