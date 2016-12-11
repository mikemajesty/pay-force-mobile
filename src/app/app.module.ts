import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { BasePage } from '../pages/base/base';
import { TransactionPage } from '../pages/transaction/transaction';
import { Data } from '../providers/data';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    BasePage,
    TransactionPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      mode: 'md'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    BasePage,
    TransactionPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Data]
})
export class AppModule {}
