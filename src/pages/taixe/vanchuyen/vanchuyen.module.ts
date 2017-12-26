import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VanchuyenPage } from './vanchuyen';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    VanchuyenPage,
  ],
  imports: [
    IonicPageModule.forChild(VanchuyenPage),
    IonicStorageModule.forRoot(),
  ],
})
export class VanchuyenPageModule {}
