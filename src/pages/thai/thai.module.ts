import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThaiPage } from './thai';

@NgModule({
  declarations: [
    ThaiPage,
  ],
  imports: [
    IonicPageModule.forChild(ThaiPage),
  ],
  exports: [
    ThaiPage
  ]
})
export class ThaiPageModule {}
