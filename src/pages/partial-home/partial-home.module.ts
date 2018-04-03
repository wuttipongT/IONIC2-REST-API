import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartialHomePage } from './partial-home';
import {SharedModule} from "../../app/shared.module";

@NgModule({
  declarations: [
    PartialHomePage,
  ],
  imports: [
    IonicPageModule.forChild(PartialHomePage),
    SharedModule
  ],
  exports: [
    PartialHomePage
  ]
})
export class PartialHomePageModule {}
