import { Component } from '@angular/core';
import { Platform, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { RequisitionsProvider } from '../../providers/requisitions/requisitions';



@Component({
  template: `
<ion-header>
  <ion-toolbar color="danger">
    <ion-title>
      <ion-icon ios="ios-alert-outline" md="ios-alert-outline"></ion-icon>
    &nbsp;Observações
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Fechar</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content class="fundo">
  <ion-list>
      <ion-item *ngFor="let item of tocando">
        <strong>{{item.id}}</strong> -
        {{item.Artist}} - 
        {{item.Title}}
      </ion-item>
  </ion-list>
</ion-content>
`
})
export class ObservacoesImportantesPage {
  tocando : any;
  //, public requisitions: RequisitionsProvider
  constructor( public platform: Platform, public params: NavParams, public viewCtrl: ViewController,
     public loadingCtrl: LoadingController)
  {
    this.carregadados();
  }

  carregadados() {
    let loading = this.loadingCtrl.create({
      content: 'Buscando observações dos alunos'
    });
    loading.present();

    this.tocando = [
        {id: 1, nome: "Teste 1", turma: "turma 1", img: "http://lorempixel.com/400/200"},
        {id: 1, nome: "Teste 2", turma: "turma 2", img: "http://lorempixel.com/400/200"},
        {id: 1, nome: "Teste 3", turma: "turma 3", img: "http://lorempixel.com/400/200"},
        {id: 1, nome: "Teste 4", turma: "turma 4", img: "http://lorempixel.com/400/200"},
        {id: 1, nome: "Teste 5", turma: "turma 5", img: "http://lorempixel.com/400/200"}
    ];
    /*this.requisitions.teste()
    .toP(result => {
      this.tocando=result.data;
      loading.dismiss();
    }, (err) => {
      loading.dismiss();
      this.dismiss();
      this.requisitions.teste();
    })*/
    loading.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}