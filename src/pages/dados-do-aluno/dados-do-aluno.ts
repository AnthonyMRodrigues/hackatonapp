import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DadosDoAlunoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dados-do-aluno',
  templateUrl: 'dados-do-aluno.html',
})

export class DadosDoAlunoPage {

	disciplinas: any;
	info: any;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.info = {
			disciplina: "Matemática",
			rendimento: [
				{ periodo: "2016.1", nota: 9.7 },
				{ periodo: "2017.1", nota: 7.1 },
				{ periodo: "2017.2", nota: 6.7 }
			]
		};

		this.disciplinas = [
		    { title: this.info.disciplina, table: this.info.rendimento },
		    { title: this.info.disciplina, table: this.info.rendimento },
		    { title: this.info.disciplina, table: this.info.rendimento }
		];

	}

    ionViewDidLoad() {
		console.log('ionViewDidLoad DadosDoAlunoPage');
    }

	shownGroup = null;

	toggleGroup(group) {
		if (this.isGroupShown(group)) {
			this.shownGroup = null;
		} else {
			this.shownGroup = group;
		}
	};

	isGroupShown(group) {
		return this.shownGroup === group;
	};

}
