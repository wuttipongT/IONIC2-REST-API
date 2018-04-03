import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssemblyPage } from './assembly';

@NgModule({
  declarations: [
    AssemblyPage,
  ],
  imports: [
    IonicPageModule.forChild(AssemblyPage),
  ],
  exports: [
    AssemblyPage
  ]
})
export class MaterialPageModule {}
