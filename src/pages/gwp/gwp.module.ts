import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GwpPage } from './gwp';

@NgModule({
  declarations: [
    GwpPage,
  ],
  imports: [
    IonicPageModule.forChild(GwpPage),
  ],
  exports: [
    GwpPage
  ]
})
export class GwpPageModule {}
