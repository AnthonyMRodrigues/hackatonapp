import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';

/*
  Generated class for the RequisitionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequisitionsProvider {
url: any;

constructor(public http: Http, public toastCtrl: ToastController) {
    this.url= 'https://google.com.br/';
}
  callLogin(login, password, navc)
  {
    let data = {
      'login': login,
      'password': password
    };
    this.http.post(this.url, data) .toPromise()
    .then(data => {
      navc.push(TabsPage);
    })
    .catch((error) => {
        //navc.push(TabsPage);
        this.toastedfailed('Login e senha incorreto');
    });
  }
  
  toastedfailed(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  getObservacoesAlunos(login, password, navc)
  {
    this.http.get(this.url) .toPromise()
  .then(data => {
      return data;
  })
  .catch((error) => {
      return false;
  });
  }

  callTurmasFromData()
  {
    this.http.get(this.url)
    .toPromise()
    .then(data => {
      return data.json()
    })
    .catch((erro) => {
      return '';
    });
  //console.log(data);
   // return this.http.get(this.url);
}

}
