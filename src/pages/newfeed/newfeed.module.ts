import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewfeedPage } from './newfeed';

@NgModule({
  declarations: [
    NewfeedPage,
  ],
  imports: [
    IonicPageModule.forChild(NewfeedPage),
  ],
})
export class NewfeedPageModule {}
