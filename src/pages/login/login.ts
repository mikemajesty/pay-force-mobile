import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BasePage } from '../base/base';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
  }

  onLoginClick() {
    this.navCtrl.push(BasePage);
  }

}
