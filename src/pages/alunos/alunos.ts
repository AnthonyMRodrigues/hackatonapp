import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DadosDoAlunoPage } from "../dados-do-aluno/dados-do-aluno";

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
            {id: 1, nome: "Teste 1", turma: "turma 1", img: "http://lorempixel.com/400/200"},
            {id: 1, nome: "Teste 2", turma: "turma 2", img: "http://lorempixel.com/400/200"},
            {id: 1, nome: "Teste 3", turma: "turma 3", img: "http://lorempixel.com/400/200"},
            {id: 1, nome: "Teste 4", turma: "turma 4", img: "http://lorempixel.com/400/200"},
            {id: 1, nome: "Teste 5", turma: "turma 5", img: "http://lorempixel.com/400/200"}
        ];
    }

    telaVisualizarDadosDoAluno(idAluno){
        this.navCtrl.push(DadosDoAlunoPage, idAluno: idAluno);
    }

    filterItems(searchTerm){
        return this.listaDeAlunos.filter((aluno) => {
            return aluno.nome.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AlunosPage');
    }

}
