import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { DashboardPage } from '../../pages/dashboard/dashboard';

/*
  Generated class for the RequisitionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequisitionsProvider {
url: any;

constructor(public http: Http, public toastCtrl: ToastController) {
    this.url= 'teste.com';
}
  callLogin(login, password, navc)
  {
    let data = {
      'login': login, 
      'password': password
    };
    this.http.post(this.url, data) .toPromise()
    .then(data => {
      navc.push(DashboardPage);
    })
    .catch((error) => {
      this.loginfailed();
    });
  }

  loginfailed() {
    let toast = this.toastCtrl.create({
      message: 'Login e senha incorreto',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
}
