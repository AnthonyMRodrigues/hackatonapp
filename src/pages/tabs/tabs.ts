import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AlunosPage } from '../alunos/alunos';
import { DashboardPage}  from '../dashboard/dashboard';
import { DadosDoAlunoPage } from '../dados-do-aluno/dados-do-aluno';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AlunosPage;
  tab3Root = DashboardPage;
  tab4Root = DadosDoAlunoPage;

  constructor() {

  }
}
