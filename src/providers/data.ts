import { Injectable } from '@angular/core';
import { Http, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class Data {

  // private baseUrl:string = "http://localhost:3000";
  private baseUrl:string = "https://payforce.herokuapp.com";

  private telefone:string = '';
  // private telefone:string = '11974048080';

  private baseNavCtrl:any;

  constructor(public http: Http) {
  }

  setTelefone(telefone:string) {
    this.telefone = telefone;
  }

  getTelefone() {
    return this.telefone;
  }

  setBaseNavCtrl(baseNavCtrl) {
    this.baseNavCtrl = baseNavCtrl;
  }

  getBaseNavCtrl() {
    return this.baseNavCtrl;
  }

  getUsuario() {
    const search = new URLSearchParams();
    search.set("telefone", this.telefone);

    const options = new RequestOptions({ search });

    return this.http.get(`${this.baseUrl}/api/mobile/usuario`, options)
               .map(res => res.json()).toPromise();
  }

  getTransacaoPendente() {
    const search = new URLSearchParams();
    search.set("telefone", this.telefone);

    const options = new RequestOptions({ search });

    return this.http.get(`${this.baseUrl}/api/mobile/transacao`, options)
               .map(res => {
                 if (res.text().length > 0) {
                   return res.json();
                 }

                return null;
               }).toPromise();
  }

  confirmarTransacao(transacao:string) {
    const search = new URLSearchParams();
    search.set("transacao", transacao);

    const options = new RequestOptions({ search });

    return this.http.get(`${this.baseUrl}/api/mobile/confirmar`, options)
               .map(res => {
                 if (res.text().length > 0) {
                   return res.json();
                 }

                return null;
               }).toPromise();
  }

  recusarTransacao(transacao:string) {
    const search = new URLSearchParams();
    search.set("transacao", transacao);

    const options = new RequestOptions({ search });

    return this.http.get(`${this.baseUrl}/api/mobile/recusar`, options)
               .map(res => {
                 if (res.text().length > 0) {
                   return res.json();
                 }

                return null;
               }).toPromise();
  }

}
