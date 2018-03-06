webpackJsonp([0],{

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function() { return UserProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_profile__ = __webpack_require__(781);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_profile__["a" /* UserProfilePage */]),
        ],
    })
], UserProfilePageModule);

//# sourceMappingURL=user-profile.module.js.map

/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_http_http_provider__ = __webpack_require__(51);
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
    function UserProfilePage(navParams, view, httpProvider, modalCtrl) {
        this.navParams = navParams;
        this.view = view;
        this.httpProvider = httpProvider;
        this.modalCtrl = modalCtrl;
        this.uid = this.navParams.get('userId');
        this.name = this.navParams.get('name');
    }
    UserProfilePage.prototype.getCover = function () {
        var _this = this;
        //alert(this.uid);
        this.httpProvider.getCover(this.uid).subscribe(function (coverData) {
            console.log(JSON.stringify(coverData));
            _this.cover = coverData.cover.source;
            _this.offset_y = (-1 * coverData.cover.offset_y) + '%';
            _this.getContext();
            //alert(JSON.stringify(coverData));
        }, function (err) {
            console.log(JSON.stringify(err));
            //reject(err);
            //alert(JSON.stringify(err));
        });
    };
    UserProfilePage.prototype.getPosts = function () {
        var _this = this;
        //alert(this.uid);
        this.httpProvider.getPostsById(this.uid).subscribe(function (postsData) {
            console.log(JSON.stringify(postsData));
            _this.postsData = postsData.data;
            //alert(JSON.stringify(coverData));
        }, function (err) {
            console.log(JSON.stringify(err));
            //reject(err);
            //alert(JSON.stringify(err));
        });
    };
    UserProfilePage.prototype.getContext = function () {
        var _this = this;
        this.httpProvider.getContext(this.uid).subscribe(function (contextData) {
            console.log(JSON.stringify(contextData));
            _this.mutual_friends = contextData.context.mutual_friends.data;
            _this.mutual_friends_count = contextData.context.mutual_friends.summary.total_count;
            _this.mutual_likes = contextData.context.mutual_likes.data;
            _this.mutual_likes_count = contextData.context.mutual_likes.summary.total_count;
            _this.getPosts();
            //alert(JSON.stringify(this.mutual_likes));
        }, function (err) {
            console.log(JSON.stringify(err));
            //reject(err);
        });
    };
    UserProfilePage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    UserProfilePage.prototype.presentProfileModal = function (uid, user_name) {
        //console.log(uid);
        var profileModal = this.modalCtrl.create('UserProfilePage', { userId: uid, name: user_name });
        profileModal.present();
    };
    UserProfilePage.prototype.ionViewWillEnter = function () {
        console.log('ionViewDidLoad UserProfilePage');
        this.getCover();
    };
    return UserProfilePage;
}());
UserProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
<<<<<<< HEAD
        selector: 'page-user-profile',template:/*ion-inline-start:"C:\Users\Computer\Desktop\J\Work\Project\CUFacebookApp\src\pages\user-profile\user-profile.html"*/'<!--\n\n  Generated template for the UserProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{name}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="closeModal()">Close</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n\n\n\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <img [src]="cover" [style.top]="offset_y" id="myOverlay">\n\n\n\n\n\n  <img src="http://graph.facebook.com/{{uid}}/picture?type=square" id="myOverlay2">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-label *ngIf="mutual_friends">Mutual Friends Who use this app</ion-label>\n\n        <ion-list *ngFor="let item of mutual_friends">\n\n          <ion-card no-padding>\n\n            <ion-card-content no-padding>\n\n              <ion-grid no-padding>\n\n                <ion-row>\n\n                  <ion-col>\n\n                    <ion-item>\n\n                      <ion-avatar>\n\n                        <img id="item-avatar" src="http://graph.facebook.com/{{item.id}}/picture?type=square">\n\n                      </ion-avatar>\n\n                    </ion-item>\n\n                  </ion-col>\n\n                  <ion-col col-8>\n\n                    <ion-card-header (click)="presentProfileModal(item.id,item.name)" id="ion-card-header2">\n\n                      <ion-label text-wrap style="word-wrap: break-word">{{item.name}}</ion-label>\n\n                    </ion-card-header>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col>\n\n            <ion-label *ngIf="mutual_likes">Mutual Likes</ion-label>\n\n            <ion-list *ngFor="let item of mutual_likes">\n\n              <ion-card no-padding>\n\n                <ion-card-content no-padding>\n\n                  <ion-grid no-padding>\n\n                    <ion-row>\n\n                      <ion-col>\n\n                        <ion-item>\n\n                          <ion-avatar>\n\n                            <img id="item-avatar" src="http://graph.facebook.com/{{item.id}}/picture?type=square">\n\n                          </ion-avatar>\n\n                        </ion-item>\n\n                      </ion-col>\n\n                      <ion-col col-8>\n\n                        <ion-card-header (click)="presentProfileModal(item.id,item.name)" id="ion-card-header2">\n\n                          <ion-label text-wrap style="word-wrap: break-word">{{item.name}}</ion-label>\n\n                        </ion-card-header>\n\n                      </ion-col>\n\n                    </ion-row>\n\n                  </ion-grid>\n\n                </ion-card-content>\n\n              </ion-card>\n\n            </ion-list>\n\n          </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Computer\Desktop\J\Work\Project\CUFacebookApp\src\pages\user-profile\user-profile.html"*/,
=======
        selector: 'page-user-profile',template:/*ion-inline-start:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\pages\user-profile\user-profile.html"*/'<!--\n\n  Generated template for the UserProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{name}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="closeModal()">Close</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  \n\n  <img id="myavatar" src="http://graph.facebook.com/{{uid}}/picture?type=square">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <div class="ed-cover">\n\n          <img [src]="cover" id="myOverlay">\n\n        </div>\n\n    </ion-row>\n\n    <ion-row>\n\n        <img id="item-avatar2" src="http://graph.facebook.com/{{uid}}/picture?type=large">\n\n      </ion-row>\n\n    <ion-row id="cardList">\n\n      <ion-col>\n\n        <ion-label *ngIf="mutual_friends != []&&mutual_friends != null">Mutual Friends Who use this app ({{mutual_friends_count}})</ion-label>\n\n        <ion-list *ngFor="let item of mutual_friends">\n\n          <ion-card no-padding>\n\n            <ion-card-content no-padding>\n\n              <ion-grid no-padding>\n\n                <ion-row>\n\n                  <ion-col>\n\n                    <ion-item>\n\n                      <ion-avatar>\n\n                        <img id="item-avatar" src="http://graph.facebook.com/{{item.id}}/picture?type=large">\n\n                      </ion-avatar>\n\n                    </ion-item>\n\n                  </ion-col>\n\n                  <ion-col col-8>\n\n                    <ion-card-header (click)="presentProfileModal(item.id,item.name)" id="ion-card-header2">\n\n                      <ion-label text-wrap style="word-wrap: break-word">{{item.name}}</ion-label>\n\n                    </ion-card-header>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-label *ngIf="mutual_likes != []&&mutual_likes != null">Mutual Likes ({{mutual_likes_count}})</ion-label>\n\n        <ion-list *ngFor="let item of mutual_likes">\n\n          <ion-card no-padding>\n\n            <ion-card-content no-padding>\n\n              <ion-grid no-padding>\n\n                <ion-row>\n\n                  <ion-col>\n\n                    <ion-item>\n\n                      <ion-avatar>\n\n                        <img id="item-avatar" src="http://graph.facebook.com/{{item.id}}/picture?type=square">\n\n                      </ion-avatar>\n\n                    </ion-item>\n\n                  </ion-col>\n\n                  <ion-col col-8>\n\n                    <ion-card-header (click)="presentProfileModal(item.id,item.name)" id="ion-card-header2">\n\n                      <ion-label text-wrap style="word-wrap: break-word">{{item.name}}</ion-label>\n\n                    </ion-card-header>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col>\n\n            <ion-label *ngIf="postsData != []&&postsData != null">My Posts</ion-label>\n\n        <ion-list *ngFor="let item of postsData">\n\n\n\n            <ion-card>\n\n        \n\n              <ion-item>\n\n                <ion-avatar item-start>\n\n                  <img src=http://graph.facebook.com/{{uid}}/picture?type=square>\n\n                </ion-avatar>\n\n                <h2>{{name}}</h2>\n\n                <p>{{item.created_time}}</p>\n\n              </ion-item>\n\n        \n\n              <img  src={{item.full_picture}} />\n\n        \n\n              <ion-card-content>\n\n                <div *ngFor="let str of item.message.split(\'\n\')">\n\n                  {{ str }}\n\n            </div>\n\n              </ion-card-content>\n\n              <div>\n\n                <ion-row style="border-bottom: 1px solid gray;">\n\n        \n\n                  <ion-col col-2>\n\n                  <ion-label style="margin-left:10px;">\n\n                    <img src="assets/imgs/icon/flame.png" style="width:24px;">\n\n                  </ion-label>\n\n                  </ion-col>\n\n                  <ion-col col-3>\n\n                  <ion-label>{{item.reactions.summary.total_count}}</ion-label>\n\n                </ion-col>\n\n                <ion-col col-2>\n\n                  <ion-label>\n\n                    <img src="assets/imgs/icon/chat.png" style="width:24px;">\n\n                  </ion-label>\n\n                </ion-col>\n\n                <ion-col col-5>\n\n                  <ion-label>{{item.comments.summary.total_count}}</ion-label>\n\n                </ion-col>\n\n        \n\n                </ion-row>\n\n              </div>\n\n              <ion-row>\n\n                <ion-col>\n\n                  <button ion-button full icon-center clear small>\n\n                    <img src="assets/imgs/icon/like.png" style="width:24px;margin-right:5px">\n\n                    <div>Likes</div>\n\n                  </button>\n\n                </ion-col>\n\n                <button class="button circle text-center">\n\n                  <i class="ion-crop"></i>\n\n                </button>\n\n                <ion-col>\n\n                  <button ion-button full icon-center clear small>\n\n                    <img src="assets/imgs/icon/chat.png" style="width:24px;margin-right:5px">\n\n                    <div>Comments</div>\n\n                  </button>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-card>\n\n          </ion-list>\n\n          </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\pages\user-profile\user-profile.html"*/,
>>>>>>> c587fca3fbcc93069c25a3b8b0fe6fc98f9562a5
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_view_controller__["a" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__providers_http_http_provider__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */]])
], UserProfilePage);

//# sourceMappingURL=user-profile.js.map

/***/ })

});
//# sourceMappingURL=0.js.map