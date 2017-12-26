import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  rootPage:string = 'LoginPage';
  loading: any;
  private login: FormGroup;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {
      this.login = this.formBuilder.group({
        email: ['john.d2ae@toptal.com', Validators.required],
        password: ['toptal123', Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  logIn_taixe() {
    this.showLoader();
    // this.authService.login(this.login.value).then((result) => {
    //   this.loading.dismiss();
    //   this.data = result;
    // //   localStorage.setItem('token', this.data);
    //   this.presentToast(this.data.data.api_token);
    //   this.navCtrl.setRoot(TabsPage);
    // }, (err) => {
    //   this.loading.dismiss();
    //   this.presentToast(err);
    // });
    setTimeout(() => {
      this.loading.dismiss();
      this.navCtrl.setRoot('MainPage'); 
    }, 0);
    
  }

  logIn_tho() {
    this.showLoader();
    // this.authService.login(this.login.value).then((result) => {
    //   this.loading.dismiss();
    //   this.data = result;
    // //   localStorage.setItem('token', this.data);
    //   this.presentToast(this.data.data.api_token);
    //   this.navCtrl.setRoot(TabsPage);
    // }, (err) => {
    //   this.loading.dismiss();
    //   this.presentToast(err);
    // });
    setTimeout(() => {
      this.loading.dismiss();
      this.navCtrl.setRoot('MainthoPage'); 
    }, 0);
    
  }

    showLoader(){
      this.loading = this.loadingCtrl.create({
          content: 'Authenticating...'
      });

      this.loading.present();
    }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
