import { StreamingMedia } from '@ionic-native/streaming-media';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ImagePicker } from '@ionic-native/image-picker';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { Dashboard2Page } from '../pages/dashboard2/dashboard2';
import { NewfeedPage } from '../pages/newfeed/newfeed';
import { FriendsPage } from '../pages/friends/friends';
import { SettingPage } from '../pages/setting/setting';
import { HttpProvider } from '../providers/http/http-provider';
import { HttpModule } from '@angular/http';
import { Facebook } from '@ionic-native/facebook';
import { SwingModule } from 'angular2-swing';
import { TimeProvider } from '../providers/time/time';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { NativePageTransitions } from '@ionic-native/native-page-transitions'
import { IonicStorageModule } from '@ionic/storage';
import { SearchDataProvider } from '../providers/search-data/search-data';
import { HistoryDataProvider } from '../providers/history-data/history-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    Dashboard2Page,
    NewfeedPage,
    FriendsPage,
    SettingPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SwingModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'top'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    Dashboard2Page,
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
    ImagePicker,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HttpProvider,
    TimeProvider,
    NativePageTransitions,
    SearchDataProvider,
    HistoryDataProvider

  ]
})
export class AppModule { }
