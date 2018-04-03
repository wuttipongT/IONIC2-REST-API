import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreparationPage } from './preparation';

@NgModule({
  declarations: [
    PreparationPage,
  ],
  imports: [
    IonicPageModule.forChild(PreparationPage),
  ],
  exports: [
    PreparationPage
  ]
})
export class PreparationPageModule {}
