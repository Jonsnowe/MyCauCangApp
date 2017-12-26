import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-thongke',
  templateUrl: 'thongke.html',
})
export class ThongkePage {
  tau: string = "1";
  loai:string="0";
  batdau:string=new Date().toISOString();
  ketthuc:string=new Date().toISOString();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThongkePage');
  }

}
