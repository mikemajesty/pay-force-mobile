import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html'
})
export class PaymentPage {

  constructor(public alertCtrl: AlertController) { }

  openPopup() {
    let popup = this.alertCtrl.create({
      title: 'Test',
      message: 'Test message',
      inputs: [
        {
          name: 'code',
          placeholder: 'Your code...'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            console.log("Save Ok");
          }
        }
      ]
    });

    popup.present();
  }
}
