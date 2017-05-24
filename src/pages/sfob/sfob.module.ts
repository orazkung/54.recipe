import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SfobPage } from './sfob';

@NgModule({
  declarations: [
    SfobPage,
  ],
  imports: [
    IonicPageModule.forChild(SfobPage),
  ],
  exports: [
    SfobPage
  ]
})
export class SfobPageModule {}
