import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhuonganPage } from './phuongan';
import { VattuPageModule } from '../vattu/vattu.module';

@NgModule({
  declarations: [
    PhuonganPage,
  ],
  imports: [
    IonicPageModule.forChild(PhuonganPage),
    VattuPageModule
  ],
})
export class PhuonganPageModule {}
