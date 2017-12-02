import { Component } from '@angular/core';

import { AlunosPage } from '../alunos/alunos';
import { DashboardPage}  from '../dashboard/dashboard';
import { DadosDoAlunoPage } from '../dados-do-aluno/dados-do-aluno';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DashboardPage;
  tab2Root = AlunosPage;
  tab3Root = DadosDoAlunoPage;

  constructor() {

  }
}
