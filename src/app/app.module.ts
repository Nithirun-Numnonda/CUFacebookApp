import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { NewfeedPage } from '../pages/newfeed/newfeed';
import { FriendsPage } from '../pages/friends/friends';
import { SettingPage } from '../pages/setting/setting';
import { HttpProvider } from '../providers/http/http-provider';
import {HttpModule} from '@angular/http';
import { Facebook } from '@ionic-native/facebook';
import { SwingModule } from 'angular2-swing';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    DashboardPage,
    NewfeedPage,
    FriendsPage,
    SettingPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SwingModule,
    IonicModule.forRoot(MyApp,{
      tabsPlacement: 'top'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    DashboardPage,
    NewfeedPage,
    FriendsPage,
    SettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
    
  ]
})
export class AppModule {}
