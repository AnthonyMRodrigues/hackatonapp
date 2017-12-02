import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
loginacess: any;
login: any;
password: String;
passwordacess: any;
permited: boolean;
  constructor(public navCtrl: NavController) {

  }

  actionlogin()
  {
    this.loginacess = this.login;
    this.passwordacess = this.password;
    console.log(this.loginacess);
    console.log(this.passwordacess);
  }
}
