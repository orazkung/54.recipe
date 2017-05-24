import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForeignPage } from './foreign';

@NgModule({
  declarations: [
    ForeignPage,
  ],
  imports: [
    IonicPageModule.forChild(ForeignPage),
  ],
  exports: [
    ForeignPage
  ]
})
export class ForeignPageModule {}
