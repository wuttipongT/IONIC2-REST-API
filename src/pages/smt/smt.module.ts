import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmtPage } from './smt';

@NgModule({
  declarations: [
    SmtPage,
  ],
  imports: [
    IonicPageModule.forChild(SmtPage),
  ],
  exports: [
    SmtPage
  ]
})
export class MaterialPageModule {}
