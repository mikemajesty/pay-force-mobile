import { Component } from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-transaction',
  templateUrl: 'transaction.html',
})
export class TransactionPage {

  public type:string = 'extrato';
  public user:any = {};

  constructor(public navCtrl: NavController, private data:Data, private loadingCtrl: LoadingController, private alertCtrl:AlertController) {}

  ionViewDidLoad() {
    this.loadData();
  }

  loadData() {
    let loading = this.loadingCtrl.create({
      content: 'Buscando dados...',
      spinner: 'crescent',
    });

    loading.present();

    this.data.getUsuario().then((data) => {
      this.user = data;

      loading.dismiss();

      setTimeout(this.pollingTransacao(), 10000);
    });
  }

  pollingTransacao() {
    this.data.getTransacaoPendente().then((data) => {
      if (data) {
          let confirm = this.alertCtrl.create({
          title: 'Compra',
          message: 'Você confirma a compra de R$ ' + data.valor + ' ?',
          buttons: [
            {
              text: 'Recusar',
              handler: () => {
                this.data.recusarTransacao(data._id).then(() => {
                  setTimeout(this.pollingTransacao(), 10000);
                });
              }
            },
            {
              text: 'Confirmar',
              handler: () => {
                this.data.confirmarTransacao(data._id).then(() => {
                  this.loadData();
                });
              }
            }
          ]
        });

        confirm.present();
      } else {
        setTimeout(this.pollingTransacao(), 4000);
      }

    });
  }

}
