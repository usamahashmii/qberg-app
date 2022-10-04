import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopularnewsPageRoutingModule } from './popularnews-routing.module';

import { PopularnewsPage } from './popularnews.page';
//Image lazy Loading
import { Attributes, IntersectionObserverHooks, LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS } from 'ng-lazyload-image'; // <-- include ScrollHooks
import { ComponentModule } from '../component/component.module';
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
    PopularnewsPageRoutingModule,
    LazyLoadImageModule,
    ComponentModule,
    TranslateModule
  ],
  declarations: [PopularnewsPage],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: LazyLoadImageHooks }],
})
export class PopularnewsPageModule {}
