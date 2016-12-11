import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TransactionPage } from '../transaction/transaction';

@Component({
  selector: 'page-base',
  templateUrl: 'base.html'
})
export class BasePage {

  private rootPage:any = TransactionPage;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
  }

}
