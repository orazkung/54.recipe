import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BccPage } from './bcc';

@NgModule({
  declarations: [
    BccPage,
  ],
  imports: [
    IonicPageModule.forChild(BccPage),
  ],
  exports: [
    BccPage
  ]
})
export class BccPageModule {}
