import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import {TabsPage } from '../tabs/tabs';
import { RequestProvider } from '../../providers/request/request';
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
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public provider: RequestProvider) {
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
    this.provider.login({ login: this.login, pasword: this.password });
  }
}
