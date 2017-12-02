import { Component } from '@angular/core';

import { AlunosPage } from '../alunos/alunos';
import { DashboardPage}  from '../dashboard/dashboard';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeTab = DashboardPage;
  alunoTab = AlunosPage;

  constructor() {

  }
}
