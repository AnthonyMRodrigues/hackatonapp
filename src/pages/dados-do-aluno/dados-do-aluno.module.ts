import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DadosDoAlunoPage } from './dados-do-aluno';

@NgModule({
  declarations: [
    DadosDoAlunoPage,
  ],
  imports: [
    IonicPageModule.forChild(DadosDoAlunoPage),
  ],
})
export class DadosDoAlunoPageModule {}
