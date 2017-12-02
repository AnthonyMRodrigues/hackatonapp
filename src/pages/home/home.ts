import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RequisitionsProvider } from '../../providers/requisitions/requisitions';
import { FormBuilder, Validators } from '@angular/forms';
import { DashboardPage } from '../dashboard/dashboard';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
loginacess: any;
login: any;
password: String;
passwordacess: any;
validation: any={};
  constructor(public navCtrl: NavController, public requisitions: RequisitionsProvider,public formBuilder: FormBuilder,) {
    this.validation = this.formBuilder.group({
      login:['', Validators.required],
      password:['', Validators.required],
    });
  }

  actionlogin()
  {
    this.loginacess = this.login;
    this.passwordacess = this.password;
    console.log(this.validation.value['login']);
    console.log(this.validation.value['password']);
    this.requisitions.callLogin(this.loginacess, this.passwordacess, this.navCtrl);
  }
  teste()
  {
    this.navCtrl.push(DashboardPage);
  }
}
