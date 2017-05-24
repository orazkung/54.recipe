import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DessertPage} from '../pages/dessert/dessert';
import { ForeignPage} from '../pages/foreign/foreign';
import { ThaiPage} from '../pages/thai/thai';
import {TykPage} from '../pages/tyk/tyk';
import {SfsfPage} from '../pages/sfsf/sfsf';
import { SfobPage } from '../pages/sfob/sfob';
import { MacPage} from '../pages/mac/mac';
import { GwpPage} from '../pages/gwp/gwp';
import {EditPage} from '../pages/edit/edit';
import {AddPage} from '../pages/add/add';
import {BccPage} from'../pages/bcc/bcc';





import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DessertPage,
    ForeignPage,
    ThaiPage,
    TykPage,
    SfsfPage,
    SfobPage,
    MacPage,
    GwpPage,
    AddPage,
    EditPage,
    BccPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DessertPage,
    ForeignPage,
    ThaiPage,
    TykPage,
    SfsfPage,
    SfobPage,
    MacPage,
    GwpPage,
    AddPage,
    EditPage,
    BccPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
 
  ]
})
export class AppModule {}
