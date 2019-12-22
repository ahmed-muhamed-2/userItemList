(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<div class=\"container\">\n  <!-- <app-item-form></app-item-form>\n  <app-items></app-items> -->\n  <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/item-form/item-form.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/item-form/item-form.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-content\">\n    <span class=\"card-title\">Add Item</span>\n    <form (ngSubmit)=\"onSubmit()\" class=\"col s6\">\n      <div class=\"row\">\n        <div class=\"input-field col s6\">\n          <input type=\"text\" [(ngModel)]=\"item.title\" name=\"title\" />\n          <label>Title</label>\n        </div>\n        <div class=\"input-field col s6\">\n          <input\n            type=\"text\"\n            [(ngModel)]=\"item.description\"\n            name=\"description\"\n          />\n          <label>Description</label>\n        </div>\n        <input type=\"submit\" value=\"Submit\" class=\"btn\" />\n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/item-mange/item-mange.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/item-mange/item-mange.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <app-item-form></app-item-form>\n  <app-items></app-items>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/items/items.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/items/items.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"items?.length > 0; else noItems\">\n  <ul *ngFor=\"let item of items\" class=\"collection\">\n    <li class=\"collection-item\">\n      <strong>{{ item.title }} :</strong> {{ item.description }}\n      <a class=\"secondary-content\"\n        ><i (click)=\"editItem($event, item)\" class=\"fa fa-pencil\"></i>\n        <i\n          *ngIf=\"editState && itemToEdit.id == item.id\"\n          (click)=\"clearState()\"\n          class=\"fa fa-compress\"\n        ></i\n      ></a>\n\n      <div *ngIf=\"editState && itemToEdit.id == item.id\">\n        <form (ngSubmit)=\"updateItem(item)\">\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <input\n                type=\"text\"\n                placeholder=\"Add Title\"\n                [(ngModel)]=\"item.title\"\n                name=\"title\"\n              />\n            </div>\n            <div class=\"input-field col s6\">\n              <input\n                type=\"text\"\n                placeholder=\"Add Description\"\n                [(ngModel)]=\"item.description\"\n                name=\"description\"\n              />\n            </div>\n            <input type=\"submit\" value=\"Update Item\" class=\"btn orange\" />\n            <button (click)=\"deleteItem($event, item)\" class=\"btn red\">\n              Delete Item\n            </button>\n          </div>\n        </form>\n      </div>\n    </li>\n  </ul>\n</div>\n\n<ng-template #noItems> </ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card blue-grey darken-1\">\n  <div class=\"card-content white-text\">\n    <div class=\"form-container\">\n      <h2>Login</h2>\n      <div class=\"card-panel\" *ngIf=\"error$ | async\">\n        {{ error$ }}\n      </div>\n      <form #formData=\"ngForm\" (ngSubmit)=\"onSubmitLogin(formData)\">\n        <input\n          type=\"text\"\n          placeholder=\"Email address..\"\n          (ngModel)=\"(email)\"\n          name=\"email\"\n          class=\"txt\"\n          required\n        />\n        <input\n          type=\"password\"\n          placeholder=\"Password\"\n          (ngModel)=\"(password)\"\n          name=\"password\"\n          class=\"txt\"\n          required\n        />\n        <button\n          type=\"submit\"\n          [disabled]=\"!formData.valid\"\n          class=\"waves-effect waves-light btn\"\n        >\n          Log in\n        </button>\n        <div class=\"card-action\">\n          <a routerLink=\"/signup\" class=\"alc\">Don't have an account?</a>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav>\n  <div class=\"nav-wrapper black\">\n    <a href=\"/\" class=\"brand-logo center\">FS {{ name }}</a>\n    <button\n      class=\"waves-effect waves-light btn\"\n      (click)=\"logout()\"\n      *ngIf=\"isLoggedIn$ | async\"\n    >\n      logOut\n    </button>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/signup.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/signup.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-content blue-grey darken-1\">\n    <div class=\"form-container white-text\">\n      <div class=\"card-action\">\n        <a routerLink=\"/login\" id=\"goback\">Go back</a>\n      </div>\n\n      <h2 class=\"card-title\">Join now</h2>\n\n      <form #formData=\"ngForm\" (ngSubmit)=\"onSubmit(formData)\">\n        <input\n          type=\"text\"\n          placeholder=\"Email address..\"\n          (ngModel)=\"(email)\"\n          name=\"email\"\n          class=\"txt\"\n          required\n        />\n        <input\n          type=\"password\"\n          placeholder=\"Password\"\n          (ngModel)=\"(password)\"\n          name=\"password\"\n          class=\"txt\"\n          required\n        />\n\n        <button\n          type=\"submit\"\n          [disabled]=\"!formData.valid\"\n          class=\"waves-effect waves-light btn\"\n        >\n          Create my account\n        </button>\n      </form>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "itemMangemant";
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_items_items_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/items/items.component */ "./src/app/components/items/items.component.ts");
/* harmony import */ var _service_item_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/item.service */ "./src/app/service/item.service.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_item_form_item_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/item-form/item-form.component */ "./src/app/components/item-form/item-form.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _components_item_mange_item_mange_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/item-mange/item-mange.component */ "./src/app/components/item-mange/item-mange.component.ts");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/auth-guard */ "./node_modules/@angular/fire/auth-guard/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_items_items_component__WEBPACK_IMPORTED_MODULE_8__["ItemsComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _components_item_form_item_form_component__WEBPACK_IMPORTED_MODULE_11__["ItemFormComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignupComponent"],
                _components_item_mange_item_mange_component__WEBPACK_IMPORTED_MODULE_15__["ItemMangeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase, "itemManagment"),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_14__["AppRoteingModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"]
            ],
            providers: [
                _service_item_service__WEBPACK_IMPORTED_MODULE_9__["ItemService"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
                _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routs, AppRoteingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routs", function() { return routs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoteingModule", function() { return AppRoteingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth-guard */ "./node_modules/@angular/fire/auth-guard/index.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_item_mange_item_mange_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/item-mange/item-mange.component */ "./src/app/components/item-mange/item-mange.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var redirectUnauthorizedToLogin = function () { return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__["redirectUnauthorizedTo"])(["login"]); };
var routs = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: "signup", component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    {
        path: "item-mange",
        component: _components_item_mange_item_mange_component__WEBPACK_IMPORTED_MODULE_5__["ItemMangeComponent"],
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuthGuard"]],
        data: { authGuardPipe: redirectUnauthorizedToLogin }
    }
];
var AppRoteingModule = /** @class */ (function () {
    function AppRoteingModule() {
    }
    AppRoteingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routs)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoteingModule);
    return AppRoteingModule;
}());



/***/ }),

/***/ "./src/app/components/item-form/item-form.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/item-form/item-form.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaXRlbS1mb3JtL2l0ZW0tZm9ybS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/item-form/item-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/item-form/item-form.component.ts ***!
  \*************************************************************/
/*! exports provided: ItemFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemFormComponent", function() { return ItemFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/item.service */ "./src/app/service/item.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ItemFormComponent = /** @class */ (function () {
    function ItemFormComponent(itemservice) {
        this.itemservice = itemservice;
        this.item = {
            title: "",
            description: ""
        };
    }
    ItemFormComponent.prototype.ngOnInit = function () { };
    ItemFormComponent.prototype.onSubmit = function () {
        if (this.item.title !== "" && this.item.description !== "") {
            this.itemservice.addItem(this.item);
        }
    };
    ItemFormComponent.ctorParameters = function () { return [
        { type: _service_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"] }
    ]; };
    ItemFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-item-form",
            template: __importDefault(__webpack_require__(/*! raw-loader!./item-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/item-form/item-form.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./item-form.component.css */ "./src/app/components/item-form/item-form.component.css")).default]
        }),
        __metadata("design:paramtypes", [_service_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"]])
    ], ItemFormComponent);
    return ItemFormComponent;
}());



/***/ }),

/***/ "./src/app/components/item-mange/item-mange.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/item-mange/item-mange.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaXRlbS1tYW5nZS9pdGVtLW1hbmdlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/item-mange/item-mange.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/item-mange/item-mange.component.ts ***!
  \***************************************************************/
/*! exports provided: ItemMangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemMangeComponent", function() { return ItemMangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ItemMangeComponent = /** @class */ (function () {
    function ItemMangeComponent() {
    }
    ItemMangeComponent.prototype.ngOnInit = function () {
    };
    ItemMangeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-mange',
            template: __importDefault(__webpack_require__(/*! raw-loader!./item-mange.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/item-mange/item-mange.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./item-mange.component.css */ "./src/app/components/item-mange/item-mange.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ItemMangeComponent);
    return ItemMangeComponent;
}());



/***/ }),

/***/ "./src/app/components/items/items.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/items/items.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaXRlbXMvaXRlbXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/items/items.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/items/items.component.ts ***!
  \*****************************************************/
/*! exports provided: ItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var _service_item_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/item.service */ "./src/app/service/item.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(itemservice) {
        this.itemservice = itemservice;
        this.editState = false;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemservice.getItems().subscribe(function (items) {
            _this.items = items;
        });
    };
    ItemsComponent.prototype.deleteItem = function (event, item) {
        this.clearState();
        this.itemservice.removeItem(item);
    };
    ItemsComponent.prototype.editItem = function (event, item) {
        this.editState = true;
        this.itemToEdit = item;
    };
    ItemsComponent.prototype.updateItem = function (item) {
        this.itemservice.updateItem(item);
        this.clearState();
    };
    ItemsComponent.prototype.clearState = function () {
        this.editState = false;
        this.itemToEdit = null;
    };
    ItemsComponent.ctorParameters = function () { return [
        { type: _service_item_service__WEBPACK_IMPORTED_MODULE_0__["ItemService"] }
    ]; };
    ItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-items",
            template: __importDefault(__webpack_require__(/*! raw-loader!./items.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/items/items.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./items.component.css */ "./src/app/components/items/items.component.css")).default]
        }),
        __metadata("design:paramtypes", [_service_item_service__WEBPACK_IMPORTED_MODULE_0__["ItemService"]])
    ], ItemsComponent);
    return ItemsComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/authentication.service */ "./src/app/service/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onSubmitLogin = function (formData) {
        this.authService.login(formData.value).catch(function (err) { return console.log(err); });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-login",
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
        }),
        __metadata("design:paramtypes", [src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, angularFireAuth) {
        this.authService = authService;
        this.angularFireAuth = angularFireAuth;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        // this.name = this.angularFireAuth.auth.currentUser;
        this.isLoggedIn$ = this.authService.loggedIn;
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-navbar",
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")).default]
        }),
        __metadata("design:paramtypes", [_service_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/authentication.service */ "./src/app/service/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService) {
        this.authService = authService;
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent.prototype.onSubmit = function (formData) {
        this.authService.createEmail(formData.value).then(function (res) {
            console.log(res);
        });
    };
    SignupComponent.ctorParameters = function () { return [
        { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }
    ]; };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-signup",
            template: __importDefault(__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/signup.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")).default]
        }),
        __metadata("design:paramtypes", [_service_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/service/authentication.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/authentication.service.ts ***!
  \***************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(afAuth, rot) {
        this.afAuth = afAuth;
        this.rot = rot;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
    }
    AuthenticationService.prototype.createEmail = function (formData) {
        var _this = this;
        console.log(formData.email);
        return this.afAuth.auth
            .createUserWithEmailAndPassword(formData.email, formData.password)
            .then(function (res) {
            console.log(res);
            _this.rot.navigate(["/item-mange"]);
        })
            .catch(function (err) { return console.log(err); });
    };
    AuthenticationService.prototype.login = function (formData) {
        var _this = this;
        console.log(formData.email);
        return this.afAuth.auth
            .signInWithEmailAndPassword(formData.email, formData.password)
            .then(function (res) {
            _this.rot.navigate(["/item-mange"]);
            _this.loggedIn.next(true);
        })
            .catch(function (err) {
            console.log(err);
            _this.error = err.message;
        });
    };
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        return this.afAuth.auth.signOut().then(function (res) {
            _this.rot.navigate(["/login"]);
            _this.loggedIn.next(false);
        });
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/service/item.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/item.service.ts ***!
  \*****************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var ItemService = /** @class */ (function () {
    function ItemService(fas) {
        // this.items = this.fas.collection('items').valueChanges();
        this.fas = fas;
        this.itemCollection = this.fas.collection("items");
        this.items = this.itemCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    }
    ItemService.prototype.getItems = function () {
        return this.items;
    };
    ItemService.prototype.addItem = function (item) {
        this.itemCollection.add(item);
    };
    ItemService.prototype.removeItem = function (item) {
        this.itemDoc = this.fas.doc("items/" + item.id);
        this.itemDoc.delete();
    };
    ItemService.prototype.updateItem = function (item) {
        this.itemDoc = this.fas.doc("items/" + item.id);
        this.itemDoc.update(item);
    };
    ItemService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }
    ]; };
    ItemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: true,
    firebase: {
        apiKey: 'AIzaSyCj1cFnJCq6dNEd9yMOtoyLszyielCtDSk',
        authDomain: 'fs1item.firebaseapp.com',
        databaseURL: 'https://fs1item.firebaseio.com',
        projectId: 'fs1item',
        storageBucket: 'fs1item.appspot.com',
        messagingSenderId: '729734589237'
    }
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCj1cFnJCq6dNEd9yMOtoyLszyielCtDSk',
        authDomain: 'fs1item.firebaseapp.com',
        databaseURL: 'https://fs1item.firebaseio.com',
        projectId: 'fs1item',
        storageBucket: 'fs1item.appspot.com',
        messagingSenderId: '729734589237'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\IMM90\Desktop\Ahmed\itemMangemant-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map