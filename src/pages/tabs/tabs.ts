import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { NewfeedPage } from '../newfeed/newfeed';
import { FriendsPage } from '../friends/friends';
import { SettingPage } from '../setting/setting';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'tabsPage'
})
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  dashboardRoot = DashboardPage
  newfeedRoot = NewfeedPage
  friendsRoot = FriendsPage
  settingRoot = SettingPage


  constructor(public navCtrl: NavController) {}

}
