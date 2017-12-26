import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VattuPage } from './vattu';

@NgModule({
  declarations: [
    VattuPage,
  ],
  imports: [
    IonicPageModule.forChild(VattuPage),
  ],
  exports:[
    VattuPage
  ]
})
export class VattuPageModule {}
