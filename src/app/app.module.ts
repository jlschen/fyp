import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AppPage } from '../pages/app/app';
import { App2Page } from '../pages/app2/app2';
import { ChinesePage } from '../pages/chinese/chinese';
import { Chinese2Page } from '../pages/chinese2/chinese2';
import { MalayPage } from '../pages/malay/malay';
import { Malay2Page } from '../pages/malay2/malay2';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AppPage,
    App2Page,
    ChinesePage,
    Chinese2Page,
    MalayPage,
    Malay2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AppPage,
    App2Page,
    ChinesePage,
    Chinese2Page,
    MalayPage,
    Malay2Page

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
