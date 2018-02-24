import { StreamingMedia } from '@ionic-native/streaming-media';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { NewfeedPage } from '../pages/newfeed/newfeed';
import { FriendsPage } from '../pages/friends/friends';
import { SettingPage } from '../pages/setting/setting';
import { HttpProvider } from '../providers/http/http-provider';
import { HttpModule } from '@angular/http';
import { Facebook } from '@ionic-native/facebook';
import { SwingModule } from 'angular2-swing';
import { TimeProvider } from '../providers/time/time';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    NewfeedPage,
    FriendsPage,
    SettingPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SwingModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'top'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    NewfeedPage,
    FriendsPage,
    SettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    ScreenOrientation,
    StreamingMedia,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HttpProvider,
    TimeProvider

  ]
})
export class AppModule { }
