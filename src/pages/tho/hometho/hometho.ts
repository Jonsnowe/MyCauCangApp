import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-hometho',
  templateUrl: 'hometho.html',
})
export class HomethoPage {
  tab1Root = 'XecansuaPage';
  tab2Root = 'CapnhattiendoPage';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomethoPage');
  }

}
