import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TurmasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-turmas',
  templateUrl: 'turmas.html',
})
export class TurmasPage {

  descricao: String;
  id: any;
  alunos: any;
  type : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = navParams.get('id');
    this.type = navParams.get('type');
    this.getTurmaDescricao(this.id);
    this.getAlunosTurma(this.id, this.type);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TurmasPage');
  }

  getTurmaDescricao(id)
  {
    this.descricao = 'teste';
    //chamar o provider e realizar a busca
  }

  getAlunosTurma(id, type)
  {
    this.alunos = [
      {"nome": "Maria", "nota": 1,"id": 2 },
      {"nome": "Outro", "nota": 7,"id": 1 },
      {"nome": "teste", "nota": 4,"id": 3 }
    ];
     //chamar o provider e realizar a busca
  }
}
