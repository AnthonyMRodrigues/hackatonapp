import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequisitionsProvider } from '../../providers/requisitions/requisitions';
import { ModalController } from "ionic-angular/index";
import { TurmasPage } from '../turmas/turmas';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
turmas: any;
//, public requisitions: RequisitionsProvider
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.returnDataOfTurmas();
  }

  returnDataOfTurmas()
  {
    this.turmas = [
      {"descricao":"T122", "id": 1},
      {"descricao":"T234", "id": 2},
      {"descricao":"T232", "id": 3},
      {"descricao":"T334", "id": 4},
      {"descricao":"T333", "id": 5}
    ];

    //this.turmas = this.requisitions.callTurmasFromData();

    /**/
  }
  telaVisualizarDadosDaTurma(id, type)
  {
    this.navCtrl.push(TurmasPage, {id, type});
  }
}
