webpackJsonp([4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dados_do_aluno_dados_do_aluno__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AlunosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlunosPage = (function () {
    function AlunosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.listaDeAlunos = [
            {
                id: 1, nome: "Maria da Silva", turma: "Turma 123", img: "http://lorempixel.com/400/200",
                redimentos: {
                    disciplina: "Matemática",
                    totalNotas: 6,
                    todasNotas: [
                        { periodo: "2016.2", nota: 6.0 },
                        { periodo: "2017.1", nota: 7.5 },
                        { periodo: "2017.2", nota: 8.1 }
                    ]
                }
            },
            {
                id: 2, nome: "Rafael Mario", turma: "Turma 223", img: "http://lorempixel.com/400/200",
                redimentos: {
                    disciplina: "Matemática",
                    totalNotas: 4,
                    todasNotas: [
                        { periodo: "2016.2", nota: 6.0 },
                        { periodo: "2017.1", nota: 7.5 },
                        { periodo: "2017.2", nota: 8.1 }
                    ]
                }
            },
            {
                id: 3, nome: "Carla Santos", turma: "Turma 323", img: "http://lorempixel.com/400/200",
                redimentos: {
                    disciplina: "Matemática",
                    totalNotas: 7,
                    todasNotas: [
                        { periodo: "2016.2", nota: 6.0 },
                        { periodo: "2017.1", nota: 7.5 },
                        { periodo: "2017.2", nota: 8.1 }
                    ]
                }
            },
            {
                id: 4, nome: "Igor Rodrigues", turma: "Turma 233", img: "http://lorempixel.com/400/200",
                redimentos: {
                    disciplina: "Matemática",
                    totalNotas: 3,
                    todasNotas: [
                        { periodo: "2016.2", nota: 6.0 },
                        { periodo: "2017.1", nota: 7.5 },
                        { periodo: "2017.2", nota: 8.1 }
                    ]
                }
            },
            {
                id: 5, nome: "Manuela Soares", turma: "Turma 213", img: "http://lorempixel.com/400/200",
                redimentos: {
                    disciplina: "Matemática",
                    totalNotas: 2,
                    todasNotas: [
                        { periodo: "2016.2", nota: 6.0 },
                        { periodo: "2017.1", nota: 7.5 },
                        { periodo: "2017.2", nota: 8.1 }
                    ]
                }
            }
        ];
        this.listaDeTurmas = [
            { id: 1, turma: "Turma 1" },
            { id: 1, turma: "Turma 2" },
            { id: 1, turma: "Turma 3" },
            { id: 1, turma: "Turma 4" },
            { id: 1, turma: "Turma 5" }
        ];
    }
    AlunosPage.prototype.telaVisualizarDadosDoAluno = function (aluno) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dados_do_aluno_dados_do_aluno__["a" /* DadosDoAlunoPage */], { aluno: aluno });
    };
    AlunosPage.prototype.filterItems = function () {
        var _this = this;
        return this.listaDeAlunos.filter(function (aluno) {
            console.log(aluno.nome.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1);
            return (aluno.nome.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1);
        });
    };
    AlunosPage.prototype.redimentos = function (idAluno) {
        for (var _i = 0, _a = this.listaDeAlunos; _i < _a.length; _i++) {
            var aluno = _a[_i];
            if (aluno.id == idAluno) {
                return aluno.rendimentos;
            }
        }
    };
    AlunosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlunosPage');
    };
    AlunosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alunos',template:/*ion-inline-start:"C:\Users\Admin\Documents\GitHub\hackatonapp\src\pages\alunos\alunos.html"*/'<!--\n\n\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="fundo">\n\n    <ion-title><ion-icon ios="md-people" md="md-people"></ion-icon>\n\n    &nbsp;Alunos</ion-title>  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-searchbar\n\n    [(ngModel)]="searchTerm"\n\n    placeholder="Busque o aluno"\n\n    (search)="filterItems()"\n\n    autocomplete="on"\n\n    [debounce]="600">\n\n  </ion-searchbar>\n\n\n\n  <ion-item><br><br>\n\n -      <ion-label>Escolher turma</ion-label>\n\n -      <ion-select [(ngModel)]="gender">\n\n -        <ion-option selected>Todas turmas</ion-option>\n\n -        <ion-option *ngFor="let turma of listaDeTurmas">{{turma.turma}}</ion-option>\n\n -      </ion-select>\n\n -    </ion-item><br>\n\n\n\n    <ion-list>\n\n      <ion-item (click)="telaVisualizarDadosDoAluno(aluno)" *ngFor="let aluno of listaDeAlunos">\n\n          <ion-card>\n\n          <ion-item>\n\n             <h2><b>{{aluno.nome}}&nbsp;&nbsp;&nbsp;</b></h2>\n\n            <p>{{aluno.turma}}</p>\n\n            <ion-avatar item-end>\n\n                <ion-icon ios="ios-arrow-forward" md="md-arrow-forward" class="centro"></ion-icon>\n\n            </ion-avatar>\n\n          </ion-item>\n\n\n\n        </ion-card>\n\n\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Admin\Documents\GitHub\hackatonapp\src\pages\alunos\alunos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AlunosPage);
    return AlunosPage;
}());

//# sourceMappingURL=alunos.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DadosDoAlunoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DadosDoAlunoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DadosDoAlunoPage = (function () {
    function DadosDoAlunoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shownGroup = null;
        this.alunoSelecionado = navParams.get('aluno');
        this.info = {
            "disciplina": ["Matemática", "Portugues", "Artes", "Desenho",
                "Espanhol", "Filosofia", "Fisica", "Quimica"],
            "rendimento": [
                { "periodo": "1 Bimestre", "nota": 5.7 },
                { "periodo": "2 Bimestre", "nota": 3.2 },
                { "periodo": "3 Bimestre", "nota": 6.4 },
                { "periodo": "4 Bimestre", "nota": 3.5 }
            ]
        };
        this.disciplinas = [
            { title: this.info.disciplina, table: this.info.rendimento },
            { title: this.info.disciplina, table: this.info.rendimento },
            { title: this.info.disciplina, table: this.info.rendimento },
            { title: this.info.disciplina, table: this.info.rendimento },
            { title: this.info.disciplina, table: this.info.rendimento },
            { title: this.info.disciplina, table: this.info.rendimento },
            { title: this.info.disciplina, table: this.info.rendimento },
            { title: this.info.disciplina, table: this.info.rendimento }
        ];
    }
    DadosDoAlunoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DadosDoAlunoPage');
    };
    DadosDoAlunoPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    DadosDoAlunoPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    DadosDoAlunoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dados-do-aluno',template:/*ion-inline-start:"C:\Users\Admin\Documents\GitHub\hackatonapp\src\pages\dados-do-aluno\dados-do-aluno.html"*/'<!--\n\n  Generated template for the DadosDoAlunoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="fundo">\n\n    <ion-title><ion-icon ios="md-persone" md="md-person"></ion-icon>\n\n    &nbsp;Aluno</ion-title> \n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <h1>{{alunoSelecionado.nome}}</h1>\n\n    <hr>\n\n    <h4>Destaque</h4>\n\n    <ion-card>\n\n      <img src="img/advance-card-map-madison.png">\n\n        <ion-item>\n\n          <ion-icon name="football" item-start large></ion-icon>\n\n          <h2><ion-icon class="estrela" ios="md-star" md="md-star"></ion-icon>&nbsp;Futebol</h2>\n\n          <p>Ótimo jogador, tem um futuro<br> brilhante.</p>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-icon name="book" item-left large ></ion-icon>\n\n          <h2><ion-icon class="alerta" ios="md-alert" md="md-alert"></ion-icon>&nbsp;Matemática</h2>\n\n          <p>Ele precisa estudar mais.</p>\n\n        </ion-item>\n\n  </ion-card>\n\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let disciplina of disciplinas; let i=index" text-wrap (click)="toggleGroup(i)" [ngClass]="{active: isGroupShown(i)}">\n\n      <ion-card-content>\n\n      <h3 class="materias">\n\n        <ion-icon name="book" item-left large ></ion-icon>&nbsp;\n\n        {{info.disciplina[i]}}&nbsp;\n\n        <ion-icon color="success" item-right [name]="isGroupShown(i) ? \'arrow-dropdown\' : \'arrow-dropright\'"></ion-icon>\n\n      </h3>\n\n      <table *ngIf="isGroupShown(i);" cellspacing="40">\n\n        <tr>\n\n          <th></th>\n\n          <th class="nota">Notas</th>\n\n        </tr>\n\n        <tr class="posicao" *ngFor="let row of disciplina.table;">\n\n          <td style="width: 70%">{{row.periodo}}</td>\n\n          <td style="width: 20%">{{row.nota}}</td>\n\n          <hr>\n\n        </tr>\n\n      </table>\n\n  </ion-card-content>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Admin\Documents\GitHub\hackatonapp\src\pages\dados-do-aluno\dados-do-aluno.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DadosDoAlunoPage);
    return DadosDoAlunoPage;
}());

//# sourceMappingURL=dados-do-aluno.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__turmas_turmas__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = (function () {
    function DashboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.returnDataOfTurmas();
    }
    DashboardPage.prototype.returnDataOfTurmas = function () {
        this.turmas = [
            { "descricao": "T122", "id": 1 },
            { "descricao": "T234", "id": 2 },
            { "descricao": "T232", "id": 3 },
            { "descricao": "T334", "id": 4 },
            { "descricao": "T333", "id": 5 }
        ];
        //this.turmas = this.requisitions.callTurmasFromData();
        /**/
    };
    DashboardPage.prototype.telaVisualizarDadosDaTurma = function (id, type) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__turmas_turmas__["a" /* TurmasPage */], { id: id, type: type });
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\Users\Admin\Documents\GitHub\hackatonapp\src\pages\dashboard\dashboard.html"*/'<!--\n\n  Generated template for the DashboardPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="fundo">\n\n    <ion-title><ion-icon ios="ios-home" md="ios-home"></ion-icon>\n\n    &nbsp;Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n      <h3>Minhas turmas</h3><hr>\n\n\n\n  <ion-list *ngIf="turmas!= null">\n\n    <ion-item *ngFor="let turma of turmas">\n\n      <h2 >{{turma.descricao}}</h2>\n\n      <ion-avatar item-end>\n\n      <ion-grid>\n\n          <ion-row>\n\n              <ion-col>\n\n                 <button ion-button right outline (click)="telaVisualizarDadosDaTurma(turma.id, \'presenca\')">Presença</button>\n\n              </ion-col>\n\n              <ion-col>\n\n                 <button color="danger" ion-button right outline (click)="telaVisualizarDadosDaTurma(turma.id, \'nota\')">Nota</button>\n\n              </ion-col>\n\n          </ion-row>\n\n      </ion-grid>\n\n    </ion-avatar>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list *ngIf="turmas == null">\n\n      <ion-item>\n\n        <h2>Sem turma para esse dia</h2>\n\n      </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Admin\Documents\GitHub\hackatonapp\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurmasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TurmasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TurmasPage = (function () {
    function TurmasPage(navCtrl, navParams, modal, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.alertCtrl = alertCtrl;
        this.id = navParams.get('id');
        this.type = navParams.get('type');
        this.getTurmaDescricao(this.id);
        this.getAlunosTurma(this.id);
    }
    TurmasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TurmasPage');
    };
    TurmasPage.prototype.getTurmaDescricao = function (id) {
        this.descricao = 'Turma 222';
        //chamar o provider e realizar a busca
    };
    TurmasPage.prototype.getAlunosTurma = function (id) {
        this.alunos = [
            { "nome": "Ana Claudia", "nota": 1, "id": 1 },
            { "nome": "Barbara Ramos", "nota": 4, "id": 2 },
            { "nome": "Beatriz Barbosa", "nota": 7, "id": 3 },
            { "nome": "Beto Souza", "nota": 4, "id": 4 },
            { "nome": "Carlos Silva", "nota": 4, "id": 5 },
            { "nome": "Diego Gomes", "nota": 4, "id": 6 },
            { "nome": "Eduardo Carlos", "nota": 4, "id": 7 },
            { "nome": "Fernada Soares", "nota": 4, "id": 8 },
            { "nome": "Nathalia Silva", "nota": 4, "id": 9 }
        ];
        //chamar o provider e realizar a busca
    };
    TurmasPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Dados Salvos',
            subTitle: 'Os dados foram salvos com sucesso.',
            buttons: ['OK'],
        });
        alert.present();
    };
    TurmasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-turmas',template:/*ion-inline-start:"C:\Users\Admin\Documents\GitHub\hackatonapp\src\pages\turmas\turmas.html"*/'<!--\n\n  Generated template for the TurmasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="fundo">\n\n    <ion-title>{{descricao}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <h3>Lista de chamada</h3><hr>\n\n    <ion-list *ngIf="alunos!= null">\n\n        <ion-item *ngFor="let aluno of alunos; let i=$index">\n\n          <ion-item item-end *ngIf="type==\'presenca\'">\n\n               <ion-label>{{aluno.nome}}</ion-label>\n\n              <ion-checkbox></ion-checkbox>\n\n          </ion-item>\n\n          <ion-item item-end *ngIf="type==\'nota\'">\n\n                        <ion-label>{{aluno.nome}}</ion-label>\n\n                      <ion-label color="danger" class="nota">Nota</ion-label>\n\n                      <ion-input max=\'10\' min=\'0\' class="inputNota"></ion-input>\n\n            </ion-item>\n\n        </ion-item>\n\n      </ion-list>\n\n      <ion-list *ngIf="alunos == null">\n\n          <ion-item>\n\n            <h2>Sem Alunos nessa turma</h2>\n\n          </ion-item>\n\n        </ion-list>\n\n                <button class="centro" ion-button right outline (click) = "showAlert()">Enviar dados</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Admin\Documents\GitHub\hackatonapp\src\pages\turmas\turmas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], TurmasPage);
    return TurmasPage;
}());

//# sourceMappingURL=turmas.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/alunos/alunos.module": [
		278,
		3
	],
	"../pages/dados-do-aluno/dados-do-aluno.module": [
		279,
		2
	],
	"../pages/dashboard/dashboard.module": [
		280,
		1
	],
	"../pages/turmas/turmas.module": [
		281,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_requisitions_requisitions__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, requisitions, formBuilder) {
        this.navCtrl = navCtrl;
        this.requisitions = requisitions;
        this.formBuilder = formBuilder;
        this.validation = {};
        this.validation = this.formBuilder.group({
            login: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
    }
    HomePage.prototype.actionlogin = function () {
        this.loginacess = this.login;
        this.passwordacess = this.password;
        console.log(this.validation.value['login']);
        console.log(this.validation.value['password']);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
        //this.requisitions.callLogin(this.loginacess, this.passwordacess, this.navCtrl);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Admin\Documents\GitHub\hackatonapp\src\pages\home\home.html"*/'<ion-content padding>\n\n    <ion-grid text-center>\n\n        <ion-row>\n\n            <ion-col>\n\n                <h2></h2><br><br>\n\n                <img src="../assets/imgs/logo.png"><br><br><br><br>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n    <form [formGroup]="validation" (ngSubmit)="actionlogin()">\n\n        <ion-list>\n\n            <ion-item>\n\n              <ion-label color="primary" ><ion-icon ios="md-person" md="md-person"></ion-icon>\n\n&nbsp;Login: </ion-label>\n\n              <ion-input name="name" formControlName="login"></ion-input>\n\n            </ion-item>\n\n          \n\n            <ion-item>\n\n                <ion-label color="primary" >\n\n                  <ion-icon ios="md-lock" md="md-lock"></ion-icon>  &nbsp;Senha: </ion-label>\n\n              <ion-input name="password" formControlName="password" type="password"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n          <ion-grid text-center>\n\n              <ion-row>\n\n                  <ion-col>\n\n                     <button [disabled]="validation.invalid" ion-button large right block>Entrar</button>\n\n                  </ion-col>\n\n              </ion-row>\n\n          </ion-grid>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Admin\Documents\GitHub\hackatonapp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_requisitions_requisitions__["a" /* RequisitionsProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequisitionsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the RequisitionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RequisitionsProvider = (function () {
    function RequisitionsProvider(http, toastCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.url = 'https://google.com.br/';
    }
    RequisitionsProvider.prototype.callLogin = function (login, password, navc) {
        var data = {
            'login': login,
            'password': password
        };
        this.http.post(this.url, data).toPromise()
            .then(function (data) {
            navc.push(__WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */]);
        })
            .catch(function (error) {
            navc.push(__WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */]);
            /** this.loginfailed(); **/
        });
    };
    RequisitionsProvider.prototype.toastedfailed = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    RequisitionsProvider.prototype.getObservacoesAlunos = function (login, password, navc) {
        this.http.get(this.url).toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (error) {
            return false;
        });
    };
    RequisitionsProvider.prototype.callTurmasFromData = function () {
        this.http.get(this.url)
            .toPromise()
            .then(function (data) {
            return data.json();
        })
            .catch(function (erro) {
            return '';
        });
        //console.log(data);
        // return this.http.get(this.url);
    };
    RequisitionsProvider.prototype.findstudent = function (id) {
        this.http.post(this.url, id)
            .toPromise()
            .then(function (data) {
        })
            .catch(function (erro) {
        });
    };
    RequisitionsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */]])
    ], RequisitionsProvider);
    return RequisitionsProvider;
}());

//# sourceMappingURL=requisitions.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_alunos_alunos__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_turmas_turmas__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_dados_do_aluno_dados_do_aluno__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_requisitions_requisitions__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_alunos_alunos__["a" /* AlunosPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_turmas_turmas__["a" /* TurmasPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_dados_do_aluno_dados_do_aluno__["a" /* DadosDoAlunoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/alunos/alunos.module#AlunosPageModule', name: 'AlunosPage', segment: 'alunos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dados-do-aluno/dados-do-aluno.module#DadosDoAlunoPageModule', name: 'DadosDoAlunoPage', segment: 'dados-do-aluno', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/turmas/turmas.module#TurmasPageModule', name: 'TurmasPage', segment: 'turmas', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_alunos_alunos__["a" /* AlunosPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_turmas_turmas__["a" /* TurmasPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_dados_do_aluno_dados_do_aluno__["a" /* DadosDoAlunoPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__providers_requisitions_requisitions__["a" /* RequisitionsProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Admin\Documents\GitHub\hackatonapp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Admin\Documents\GitHub\hackatonapp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alunos_alunos__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.homeTab = __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */];
        this.alunoTab = __WEBPACK_IMPORTED_MODULE_1__alunos_alunos__["a" /* AlunosPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Admin\Documents\GitHub\hackatonapp\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="homeTab" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="alunoTab" tabTitle="Alunos" tabIcon="people"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Admin\Documents\GitHub\hackatonapp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map