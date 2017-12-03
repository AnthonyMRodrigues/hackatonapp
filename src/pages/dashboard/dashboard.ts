import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequisitionsProvider } from '../../providers/requisitions/requisitions';
import { ModalController } from "ionic-angular/index";
import { ObservacoesImportantesPage } from './modal';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController) {
    this.returnDataOfTurmas();
    this.instanceModal();
  }

  returnDataOfTurmas()
  {
    this.turmas = [
      {"descricao":"122", "id": 1},
      {"descricao":"234", "id": 2},
      {"descricao":"232", "id": 3},
      {"descricao":"334", "id": 4},
      {"descricao":"333", "id": 5}
      
    ];
    
    //this.turmas = this.requisitions.callTurmasFromData();

    /**/
  }
  telaVisualizarDadosDaTurma(id, type)
  {
    this.navCtrl.push(TurmasPage, {id, type});
  }

  instanceModal()
  {
    let modalobservacao = this.modal.create(ObservacoesImportantesPage);
    modalobservacao.present();
  }

}
