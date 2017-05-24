import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SfsfPage } from './sfsf';

@NgModule({
  declarations: [
    SfsfPage,
  ],
  imports: [
    IonicPageModule.forChild(SfsfPage),
  ],
  exports: [
    SfsfPage
  ]
})
export class SfsfPageModule {}
