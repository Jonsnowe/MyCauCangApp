import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-xecansua',
  templateUrl: 'xecansua.html',
})
export class XecansuaPage {

  xecansua:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad XecansuaPage');
    this.xecansua=[
      {
        idxe:1,
        loaixe:'Xe a',
        bienso:'16h-5538'
      },
      {
        idxe:2,
        loaixe:'Xe v',
        bienso:'16h-5538'
      },
      {
        idxe:3,
        loaixe:'Xe c',
        bienso:'16h-5538'
      }
    ];
  }


  itemSelected(id){
    console.log(id)
    this.navCtrl.push('PhuonganPage')
  }
}
