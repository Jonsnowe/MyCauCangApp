import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VatTu } from '../../../entities/vattu';

@IonicPage()
@Component({
  selector: 'page-vattu',
  templateUrl: 'vattu.html',
})
export class VattuPage {
  @Input() vattus: VatTu[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YeucauPage');
  }

  itemSelected(id){
    console.log(id)
    this.navCtrl.push('XacnhanvtPage')
  }
}
