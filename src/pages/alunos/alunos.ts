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
    listaDeTurmas : any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.listaDeAlunos = [
            {id: 1, nome: "Cadu Santos", turma: "Turma 1"},
            {id: 1, nome: "Manuela Soares", turma: "Turma 2"},
            {id: 1, nome: "Carla da Silva", turma: "Turma 3"},
            {id: 1, nome: "Maria Clara", turma: "Turma 4",},
            {id: 1, nome: "Pablo Algusto", turma: "Turma 5"}
        ];

        this.listaDeTurmas = [
            {id: 1, turma: "Turma 1"},
            {id: 1, turma: "Turma 2"},
            {id: 1, turma: "Turma 3"},
            {id: 1, turma: "Turma 4"},
            {id: 1, turma: "Turma 5"}
        ];    
    }

    telaVisualizarDadosDoAluno(idAluno){
        this.navCtrl.push(DadosDoAlunoPage, {idAluno: idAluno});
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
