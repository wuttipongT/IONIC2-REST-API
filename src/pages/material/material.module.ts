import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaterialPage } from './material';

@NgModule({
  declarations: [
    MaterialPage,
  ],
  imports: [
    IonicPageModule.forChild(MaterialPage),
  ],
  exports: [
    MaterialPage
  ]
})
export class MaterialPageModule {}
