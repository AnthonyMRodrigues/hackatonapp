import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AlunosPage } from '../pages/alunos/alunos';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { TurmasPage } from '../pages/turmas/turmas';
import { DadosDoAlunoPage } from '../pages/dados-do-aluno/dados-do-aluno';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RequisitionsProvider } from '../providers/requisitions/requisitions';
import { RequestProvider } from '../providers/request/request';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    AlunosPage,
    DashboardPage,
    TurmasPage,
    DadosDoAlunoPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    AlunosPage,
    DashboardPage,
    TurmasPage,
    DadosDoAlunoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RequisitionsProvider,
    RequestProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
