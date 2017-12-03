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
  presenca: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = navParams.get('id');
    this.type = navParams.get('type');
    this.getTurmaDescricao(this.id);
    this.getAlunosTurma(this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TurmasPage');
  }

  getTurmaDescricao(id)
  {
    this.descricao = 'Turma 222';
    //chamar o provider e realizar a busca
  }

  getAlunosTurma(id)
  {

    this.alunos = [
      {"nome": "Ana Claudia", "nota": 1,"id": 1 },
      {"nome": "Barbara Ramos", "nota": 4,"id": 2 },      
      {"nome": "Beatriz Barbosa", "nota": 7,"id": 3 },
      {"nome": "Beto Souza", "nota": 4,"id": 4 },
      {"nome": "Carlos Silva", "nota": 4,"id": 5 },      
      {"nome": "Diego Gomes", "nota": 4,"id": 6 },
      {"nome": "Eduardo Carlos", "nota": 4,"id": 7 },
      {"nome": "Fernada Soares", "nota": 4,"id": 8 },
      {"nome": "Nathalia Silva", "nota": 4,"id": 9 }           
    ];
     //chamar o provider e realizar a busca
  }

  changePresence(ida)
  {
    let id = this.navParams.get('aluno.id');
    console.log(id);
  }
}
