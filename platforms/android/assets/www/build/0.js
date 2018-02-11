webpackJsonp([0],{

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function() { return UserProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_profile__ = __webpack_require__(778);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserProfilePageModule = (function () {
    function UserProfilePageModule() {
    }
    return UserProfilePageModule;
}());
UserProfilePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__user_profile__["a" /* UserProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_profile__["a" /* UserProfilePage */]),
        ],
    })
], UserProfilePageModule);

//# sourceMappingURL=user-profile.module.js.map

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_http_http_provider__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_view_controller__ = __webpack_require__(11);
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
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserProfilePage = (function () {
    function UserProfilePage(navParams, view, httpProvider) {
        this.navParams = navParams;
        this.view = view;
        this.httpProvider = httpProvider;
        this.uid = this.navParams.get('userId');
        this.name = this.navParams.get('name');
        this.cover = this.httpProvider.getCover(this.uid);
        this.context = this.httpProvider.getContext(this.uid);
    }
    UserProfilePage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    UserProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserProfilePage');
    };
    return UserProfilePage;
}());
UserProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-user-profile',template:/*ion-inline-start:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\pages\user-profile\user-profile.html"*/'<!--\n\n  Generated template for the UserProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{name}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="closeModal()">Close</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n\n\n\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <img src="{{cover}}">\n\n\n\n  <img src="http://graph.facebook.com/{{uid}}/picture?type=square">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-card>\n\n          <ion-card-header>Mutual Friend:{{this.context}}</ion-card-header>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\pages\user-profile\user-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_view_controller__["a" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__providers_http_http_provider__["a" /* HttpProvider */]])
], UserProfilePage);

//# sourceMappingURL=user-profile.js.map

/***/ })

});
//# sourceMappingURL=0.js.map