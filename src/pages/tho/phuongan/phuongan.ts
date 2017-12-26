import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VatTu } from '../../../entities/vattu';

@IonicPage()
@Component({
  selector: 'page-phuongan',
  templateUrl: 'phuongan.html',
})
export class PhuonganPage {

  phuongans: any[];
  vattus: VatTu[];//vật tư
  showphuonan: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.vattus = [
      {
        id: 1,
        tenvattu: 'Hơi đá'
      },
      {
        id: 2,
        tenvattu: 'Hơi gió'
      },
      {
        id: 3,
        tenvattu: 'Bánh xe'
      },
      {
        id: 4,
        tenvattu: 'Nhớt'
      },
    ]
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad PhuonganPage');
    this.showphuonan = true;
    this.phuongans = [
      {
        idpa: 1,
        text: "tí tèo tủn lộc trung long phúc",
        clicked: false,
        vattus: this.vattus
      },
      {
        idpa: 2,
        text: 2,
        clicked: false,
        vattus: this.vattus
      },
    ]
  }

  itemSelected(index) {
    let phuongan = this.phuongans.find(s => s.idpa == index.idpa);
    console.log(this.phuongans.find(s => s.idpa == index.idpa));
    if (phuongan.clicked == true) {
      phuongan.clicked = false;
    } else {
      phuongan.clicked = true;
    }
  }
}
