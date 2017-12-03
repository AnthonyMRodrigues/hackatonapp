import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

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
	alunoSelecionado: any;
	disciplinas: any;
	info: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
		this.alunoSelecionado = navParams.get('aluno');
		this.info = {
			"disciplina": ["Matemática", "Portugues", "Artes", "Desenho",
			 "Espanhol", "Filosofia", "Fisica", "Quimica"],
			"rendimento" : [
				{"periodo": "1 Bimestre", "nota": 5.7 },
				{"periodo": "2 Bimestre", "nota": 3.2 },
				{"periodo": "3 Bimestre", "nota": 6.4 },
				{"periodo": "4 Bimestre", "nota": 3.5 }

			]
		}

		this.disciplinas = [
		    { title: this.info.disciplina, table: this.info.rendimento },
		    { title: this.info.disciplina, table: this.info.rendimento },
			{ title: this.info.disciplina, table: this.info.rendimento },
		    { title: this.info.disciplina, table: this.info.rendimento },
		    { title: this.info.disciplina, table: this.info.rendimento },
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

    createobservation()
    {
        let alert = this.alertCtrl.create({
          title: 'Realizar observação',
          inputs: [
      {
        name: 'observacao',
        placeholder: 'Observação'
      }
    ],
          buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
    },{text: 'Enviar'}],
        });
        alert.present();
    }

}
