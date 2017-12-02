import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlunosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alunos',
  templateUrl: 'alunos.html',
})
export class AlunosPage {

    listaDeAlunos : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.listaDeAlunos = [
        {nome: "Teste 1", turma: "turma 1", img: "http://lorempixel.com/400/200"},
        {nome: "Teste 2", turma: "turma 2", img: "http://lorempixel.com/400/200"},
        {nome: "Teste 3", turma: "turma 3", img: "http://lorempixel.com/400/200"},
        {nome: "Teste 4", turma: "turma 4", img: "http://lorempixel.com/400/200"},
        {nome: "Teste 5", turma: "turma 5", img: "http://lorempixel.com/400/200"}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlunosPage');
  }

}
