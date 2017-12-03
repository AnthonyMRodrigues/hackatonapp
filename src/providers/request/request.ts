import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/**
* Classe criada para gerenciar os requests do mobile para o hackathon
* @author Charley Oliveira <charleycesar@gmail.com>
**/
@Injectable()
export class RequestProvider {
  endpoint: any;
  params: any;
  token: any;

  constructor(public http: Http) {
    this.endpoint = "http://localhost:3000";
  }

  //funcao criada para setar dados para a classe de requisicao via API
  setParam(data){
    this.params = data;
  }

  //Funcao criada para receber o token e setar na variavel de tokenm
  setToken(token){
    if(!token){
      alert('Token inválido para realizar a operação.')
      return false;
    }
    this.token = token;
  }

  sendPost(url){
    this.hasToken();
    return this.http.post(url, this.params).toPromise()
  }

  sendGet(url){
    this.hasToken();
    return this.http.get(url, this.params).toPromise()
  }

  //verifica se a pessoa tem token para enviar a requisicao
  hasToken(){
    if(!this.token){
      throw "Não foi passado token para a requisição!";
    }
    return true;
  }

  //Requisicao para fazer o login
  login(params){
     this.http.post(this.endpoint + '/login', params).toPromise()
    .then(data => {
        //redirecionar o usuario para a tela de dashboard
        //talvez passar o navCtrl por parazmetro do construtor
        //navc.push(TabsPage);
    })
    .catch((error) => {
          //deve negar as requisicoes caso de falha
        //navc.push(TabsPage);
          /** this.loginfailed(); **/
    });
  }
  //Pega alunos por professor
  getStudent(idProfessor){
    if(!idProfessor){
      throw "Erro ao solicitar os alunos!";
    }
    this.sendGet(this.endpoint + '/student?idProfessor='+idProfessor)
    .then(data => {
      return data;
    })
    .catch((error) => {
        return false;
    });
  }
  //Pega alunos por turma e filtrando por professor pois o token sera enviado e os dados vao vir no token.
  getStudentsByClassroom(idTurma){
    if(!idTurma){
      throw "Paramêtro de turma é obrigatório!";
    }
    this.sendGet(this.endpoint + '/student?idTurma='+idTurma)
    .then(data => {
      return data;
    })
    .catch((error) => {
        return false;
    });
  }
  //Pega as turmas de acordo com o professor
  getClassroom(idProfessor){
    if(!idProfessor){
      throw "Erro ao realizar a solicitação!";
    }
    this.sendGet(this.endpoint + '/classroom?idProfessor='+idProfessor)
    .then(data => {
      return data;
    })
    .catch((error) => {
        return false;
    });
  }

}
