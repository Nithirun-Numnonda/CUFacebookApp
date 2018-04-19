import { Dashboard2Page } from './../dashboard2/dashboard2';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { NewfeedPage } from '../newfeed/newfeed';
import { FriendsPage } from '../friends/friends';
import { SettingPage } from '../setting/setting';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'tabsPage'
})
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  dashboardRoot = DashboardPage
  dashboard2Root = Dashboard2Page
  newfeedRoot = NewfeedPage
  friendsRoot = FriendsPage
  settingRoot = SettingPage
  loaded: boolean = false;
  tabIndex: number = 0;

  constructor(public navCtrl: NavController, private nativePageTransitions: NativePageTransitions) {

  }
  private getAnimationDirection(index): string {
    var currentIndex = this.tabIndex;

    this.tabIndex = index;

    switch (true) {
      case (currentIndex < index):
        return ('left');
      case (currentIndex > index):
        return ('right');
    }
  }

  public transition(e): void {
    let options: NativeTransitionOptions = {
      direction: this.getAnimationDirection(e.index),
      duration: 100,
      slowdownfactor: -1,
      slidePixels: 0,
      iosdelay: 20,
      androiddelay: 0,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 0
    };

    if (!this.loaded) {
      this.loaded = true;
      return;
    }

    this.nativePageTransitions.slide(options);
  }

}
