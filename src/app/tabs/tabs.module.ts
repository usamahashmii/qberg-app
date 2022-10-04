import { CUSTOM_ELEMENTS_SCHEMA, Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
// import { HideHeaderDirective } from '../directives/hide-header.directive';

//Image lazy Loading
import { Attributes, IntersectionObserverHooks, LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS } from 'ng-lazyload-image'; // <-- include ScrollHooks
import { ComponentModule } from '../component/component.module';
import { MaterialModule } from '../material/material.module';
import { HideHeaderDirective } from '../hide-header.directive';
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [HideHeaderDirective],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    LazyLoadImageModule,
    ComponentModule,
    MaterialModule,
    TranslateModule
  ],
  declarations: [TabsPage,HideHeaderDirective],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: LazyLoadImageHooks }],
})
export class TabsPageModule {}
