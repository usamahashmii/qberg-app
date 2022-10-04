import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { BottommenuComponent } from '../bottommenu/bottommenu.component';
import { SecondaryheaderComponent } from '../secondaryheader/secondaryheader.component';
import { TertiaryheaderComponent } from '../tertiaryheader/tertiaryheader.component';
import { NewsskeltonComponent } from '../newsskelton/newsskelton.component';



@NgModule({
  exports: [HeaderComponent,FooterComponent, BottommenuComponent, SecondaryheaderComponent,TertiaryheaderComponent,NewsskeltonComponent],
  declarations: [HeaderComponent,FooterComponent, BottommenuComponent, SecondaryheaderComponent,TertiaryheaderComponent,NewsskeltonComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentModule { }
