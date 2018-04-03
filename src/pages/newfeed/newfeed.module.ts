import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewfeedPage } from './newfeed';

@NgModule({
  declarations: [
    NewfeedPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(NewfeedPage),
    
  ],
})
export class NewfeedPageModule {}
