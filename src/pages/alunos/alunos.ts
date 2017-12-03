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
searchTerm : String;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.listaDeAlunos = [
            {id: 1, nome: "Cadu Santos", turma: "Turma 1", media: 6.6},
            {id: 1, nome: "Manuela Soares", turma: "Turma 2", media: 3.6},
            {id: 1, nome: "Carla da Silva", turma: "Turma 3", media: 7.6},
            {id: 1, nome: "Maria Clara", turma: "Turma 4", media: 9.6},
            {id: 1, nome: "Pablo Algusto", turma: "Turma 5", media: 2.6}
            ];
        this.listaDeAlunos = [
            {
                id: 1, nome: "Maria da Silva", turma: "Turma 123", img: "http://lorempixel.com/400/200", 
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
                id: 2, nome: "Rafael Mario", turma: "Turma 223", img: "http://lorempixel.com/400/200",
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
                id: 3, nome: "Carla Santos", turma: "Turma 323", img: "http://lorempixel.com/400/200",
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
                id: 4, nome: "Igor Rodrigues", turma: "Turma 233", img: "http://lorempixel.com/400/200",
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
                id: 5, nome: "Manuela Soares", turma: "Turma 213", img: "http://lorempixel.com/400/200",
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

        this.listaDeTurmas = [
            {id: 1, turma: "Turma 1"},
            {id: 1, turma: "Turma 2"},
            {id: 1, turma: "Turma 3"},
            {id: 1, turma: "Turma 4"},
            {id: 1, turma: "Turma 5"}
        ];    
    }

    telaVisualizarDadosDoAluno(aluno){
        this.navCtrl.push(DadosDoAlunoPage, {aluno});
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
