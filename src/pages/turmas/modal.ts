import { Component } from '@angular/core';
import { Platform, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { RequisitionsProvider } from '../../providers/requisitions/requisitions';
import { AlertController } from 'ionic-angular';

@Component({
  template: `
<ion-header>
  <ion-toolbar color="fundo">
    <ion-title>
      <ion-icon ios="ios-alert-outline" md="ios-alert-outline"></ion-icon>
      Envio de notas
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

</ion-content>
`
})
export class ObservacoesImportantesPage {
    constructor() {
    }

}
