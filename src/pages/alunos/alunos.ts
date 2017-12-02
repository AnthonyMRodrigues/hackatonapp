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
    searchTerm : String;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.listaDeAlunos = [
            {
                id: 1, nome: "Teste 1", turma: "turma 1", img: "http://lorempixel.com/400/200", 
                redimentos: 
                {
                    disciplina: "Matemática",
                    todasNotas: [
                        {periodo: "2016.2", nota: 6.0},
                        {periodo: "2017.1", nota: 7.5},
                        {periodo: "2017.2", nota: 8.1}
                    ]
                }
            },
            {
                id: 2, nome: "Teste 2", turma: "turma 2", img: "http://lorempixel.com/400/200",
                redimentos: 
                {
                    disciplina: "Matemática",
                    todasNotas: [
                        {periodo: "2016.2", nota: 6.0},
                        {periodo: "2017.1", nota: 7.5},
                        {periodo: "2017.2", nota: 8.1}
                    ]
                }
            },
            {
                id: 3, nome: "Teste 3", turma: "turma 3", img: "http://lorempixel.com/400/200",
                redimentos: 
                {
                    disciplina: "Matemática",
                    todasNotas: [
                        {periodo: "2016.2", nota: 6.0},
                        {periodo: "2017.1", nota: 7.5},
                        {periodo: "2017.2", nota: 8.1}
                    ]
                }
            },
            {
                id: 4, nome: "Teste 4", turma: "turma 4", img: "http://lorempixel.com/400/200",
                redimentos: 
                {
                    disciplina: "Matemática",
                    todasNotas: [
                        {periodo: "2016.2", nota: 6.0},
                        {periodo: "2017.1", nota: 7.5},
                        {periodo: "2017.2", nota: 8.1}
                    ]
                }
            },
            {
                id: 5, nome: "Teste 5", turma: "turma 5", img: "http://lorempixel.com/400/200",
                redimentos: 
                {
                    disciplina: "Matemática",
                    todasNotas: [
                        {periodo: "2016.2", nota: 6.0},
                        {periodo: "2017.1", nota: 7.5},
                        {periodo: "2017.2", nota: 8.1}
                    ]
                }
            }
        ];
    }

    telaVisualizarDadosDoAluno(idAluno){
        this.navCtrl.push(DadosDoAlunoPage, {idAluno});
    }

    filterItems(){
        return this.listaDeAlunos.filter((aluno) => {
            console.log(this.searchTerm);
            return (aluno.nome.toLowerCase().search(this.searchTerm.toLowerCase())>1);
        });
    }

    redimentos(idAluno) {
        for (let aluno of this.listaDeAlunos){
            if(aluno.id == idAluno) {
                return aluno.rendimentos
            }
        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AlunosPage');
    }

}
