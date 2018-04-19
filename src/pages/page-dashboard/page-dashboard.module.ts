import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageDashboardPage } from './page-dashboard';

@NgModule({
  declarations: [
    PageDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(PageDashboardPage),
  ],
})
export class PageDashboardPageModule {}
