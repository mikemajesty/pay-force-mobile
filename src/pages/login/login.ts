import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BasePage } from '../base/base';
import { TransactionPage } from '../transaction/transaction';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public telefone:string;

  constructor(public navCtrl: NavController, private data:Data) {}

  ionViewDidLoad() {
  }

  onLoginClick() {
    this.data.setTelefone(this.telefone);
    this.navCtrl.push(BasePage);
  }

}
