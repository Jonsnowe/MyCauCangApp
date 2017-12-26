import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-lenhangmodal',
  templateUrl: 'lenhangmodal.html',
})
export class LenhangmodalPage {

  constructor(public view:ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LenhangmodalPage');
  }

  xacnhan(){
    this.view.dismiss();
  }
}
