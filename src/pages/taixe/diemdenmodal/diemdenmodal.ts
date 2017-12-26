import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-diemdenmodal',
  templateUrl: 'diemdenmodal.html',
})
export class DiemdenmodalPage {
  constructor(public view:ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiemdenmodalPage');
  }

  xacnhan(){
    this.view.dismiss();
  }
}
