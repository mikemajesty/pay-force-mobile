import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TransactionPage } from '../transaction/transaction';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-base',
  templateUrl: 'base.html',

})
export class BasePage {

  public rootPage:any = TransactionPage;
  public telefone:string;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
  }

}
