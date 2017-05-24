import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TykPage } from './tyk';

@NgModule({
  declarations: [
    TykPage,
  ],
  imports: [
    IonicPageModule.forChild(TykPage),
  ],
  exports: [
    TykPage
  ]
})
export class TykPageModule {}
