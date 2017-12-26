import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VandonPage } from './vandon';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    VandonPage,
  ],
  imports: [
    IonicPageModule.forChild(VandonPage),
    IonicStorageModule.forRoot()
  ],
})
export class VandonPageModule {}
