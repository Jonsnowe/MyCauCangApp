import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController  } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-baohu',
  templateUrl: 'baohu.html',
})
export class BaohuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BaohuPage');
  }

  baohu_confirm(){
    
      let alert = this.alertCtrl.create({
        title: 'Xác nhận báo cáo hư hỏng',
        message: 'Bạn chắc đây không phải là sơ ý nhấn nhằm và muốn báo cáo hư hỏng',
        buttons: [
          {
            text: 'Hủy bỏ',
            handler: () => {
              console.log('Hủy bỏ clicked');
            }
          },
          {
            text: 'Đồng ý',
            handler: () => {
              console.log('Đồng ý clicked');
            }
          }
        ]
      });
      alert.present();
    
  }
}
