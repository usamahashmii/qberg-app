import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgoPipe } from '../ago.pipe';
import { SafePipe } from '../safe.pipe';



@NgModule({
  exports: [AgoPipe, SafePipe],
  declarations: [AgoPipe, SafePipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
