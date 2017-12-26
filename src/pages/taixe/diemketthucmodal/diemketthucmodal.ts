import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-diemketthucmodal',
  templateUrl: 'diemketthucmodal.html',
})
export class DiemketthucmodalPage {

  constructor(public view:ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiemketthucmodalPage');
  }

  xacnhan(){
    this.view.dismiss();
  }
}
