import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MacPage } from './mac';

@NgModule({
  declarations: [
    MacPage,
  ],
  imports: [
    IonicPageModule.forChild(MacPage),
  ],
  exports: [
    MacPage
  ]
})
export class MacPageModule {}
