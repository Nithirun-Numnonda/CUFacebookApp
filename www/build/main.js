webpackJsonp([7],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http_provider__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import {NativeStorage} from '@ionic-native/NativeStorage'




var HomePage = (function () {
    function HomePage(navCtrl, facebookService, platform, screenOrientation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.facebookService = facebookService;
        this.platform = platform;
        this.screenOrientation = screenOrientation;
        this.platform.ready().then(function () {
            _this.isLogged = false;
            _this.facebookService.init();
            if (_this.platform.is('cordova'))
                _this.screenOrientation.lock(_this.screenOrientation.ORIENTATIONS.PORTRAIT);
        });
    }
    HomePage.prototype.login = function () {
        this.facebookService.login();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\pages\home\home.html"*/'\n\n\n\n<ion-content style="background:url(assets/imgs/background.jpg);text-align: center" scroll="false" >\n\n    <div style="height:30%;" >\n\n        <img src="assets/imgs/homeLogo.png" style="margin-left:-2%;height:120%;margin-top:40%;"/>\n\n    </div>\n\n    <div >\n\n          \n\n            <button ion-button icon-start  style="margin: 0 auto;text-align: center;margin-top:40%;" color="facebook" (click)="login()">\n\n                <ion-icon name="logo-facebook"></ion-icon>\n\n                Login with Facebook</button>\n\n       </div>\n\n    \n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\pages\home\home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_http_provider__["a" /* HttpProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http_provider__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 157:
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
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		769,
		2
	],
	"../pages/dashboard/dashboard.module": [
		770,
		3
	],
	"../pages/friends/friends.module": [
		771,
		6
	],
	"../pages/newfeed/newfeed.module": [
		772,
		5
	],
	"../pages/setting/setting.module": [
		773,
		4
	],
	"../pages/tabs/tabs.module": [
		774,
		1
	],
	"../pages/user-profile/user-profile.module": [
		775,
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
webpackAsyncContext.id = 199;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http_provider__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
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
    function DashboardPage(navCtrl, navParams, httpProvider, loadingController, modalCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.loadingController = loadingController;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        //for advance filter
        this.hours = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
        this.days = ['0', '1', '2', '3', '4', '5', '6', '7'];
        this.months = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        this.years = ['0', '1', '2', '3', '4', '5', '6', '7'];
        this.top = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        //advance filter
        this.buttonClicked = false;
        this.isAll = false;
        //for controlUI
        this.typeData = 'commentsData';
        this.pageTriger = 'chart';
        //initial default parameter
        this.hourValue = this.hours[0];
        this.dayValue = this.days[0];
        this.monthValue = this.months[3];
        this.yearValue = this.years[0];
        this.topValue = this.top[0];
        //for retry
        this.retryTime = 0;
        //for graph
        this.createTime = [];
        this.total_comments = [];
        this.total_reactions = [];
        this.sortByTime = 'Last 3 months';
    }
    DashboardPage.prototype.timeSwitchCase = function () {
        switch (this.sortByTime) {
            case "Last 1 week": {
                this.hourValue = this.hours[0];
                this.dayValue = this.days[7];
                this.monthValue = this.months[0];
                this.yearValue = this.years[0];
                this.topValue = this.top[0];
                break;
            }
            case "Last 1 month": {
                this.hourValue = this.hours[0];
                this.dayValue = this.days[0];
                this.monthValue = this.months[1];
                this.yearValue = this.years[0];
                this.topValue = this.top[0];
                break;
            }
            case "Last 3 months": {
                this.hourValue = this.hours[0];
                this.dayValue = this.days[0];
                this.monthValue = this.months[3];
                this.yearValue = this.years[0];
                this.topValue = this.top[0];
                break;
            }
            case "Last 6 months": {
                this.hourValue = this.hours[0];
                this.dayValue = this.days[0];
                this.monthValue = this.months[6];
                this.yearValue = this.years[0];
                this.topValue = this.top[0];
                break;
            }
            case "Last 1 year": {
                this.hourValue = this.hours[0];
                this.dayValue = this.days[0];
                this.monthValue = this.months[0];
                this.yearValue = this.years[1];
                this.topValue = this.top[0];
                break;
            }
            case "Last 2 years": {
                this.hourValue = this.hours[0];
                this.dayValue = this.days[0];
                this.monthValue = this.months[0];
                this.yearValue = this.years[2];
                this.topValue = this.top[0];
                break;
            }
            case "Last 5 years": {
                this.hourValue = this.hours[0];
                this.dayValue = this.days[0];
                this.monthValue = this.months[0];
                this.yearValue = this.years[5];
                this.topValue = this.top[0];
                break;
            }
        }
    };
    //for advance filter
    DashboardPage.prototype.onButtonClick = function () {
        this.buttonClicked = !this.buttonClicked;
    };
    //call when refresh
    DashboardPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.createTime = [];
        this.total_comments = [];
        this.total_reactions = [];
        //get data again
        this.getFacebookData();
        refresher.complete();
    };
    //get Facebook Data from httpProvider
    DashboardPage.prototype.getFacebookData = function () {
        var _this = this;
        this.timeSwitchCase();
        var loading = this.loadingController.create({ content: "Loading,please wait..." });
        loading.present();
        if (this.hourValue != '0' || this.dayValue != '0' || this.monthValue != '0' || this.yearValue != '0')
            //call method from httpProvider
            this.httpProvider.getFacebookData(this.topValue, this.hourValue, this.dayValue, this.monthValue, this.yearValue).subscribe(
            //call if get httpRequest success (But not error from getData from facebook such as access token expired!!)
            function (result) {
                //check if server send error back
                if (result.error) {
                    //check if token expire?
                    if (result.error.type == "OAuthException") {
                        console.log("Token expired!!!");
                        _this.retryTime += 1;
                        if (_this.retryTime < 3)
                            return _this.getFacebookData();
                        else
                            console.log("Access Token expired!!!");
                    }
                }
                //assign data to view
                _this.commentsData = result.comments;
                _this.reactionsData = result.reactions;
                _this.postsSummaryData = result.post_summary;
                if (_this.postsSummaryData) {
                    var maxReactions = 0;
                    var maxComments = 0;
                    for (var _i = 0, _a = _this.postsSummaryData; _i < _a.length; _i++) {
                        var data = _a[_i];
                        if (data.total_comments != 0 || data.total_reactions != 0) {
                            var newDate = new Date(data.created_time);
                            //console.log(newDate.toDateString());
                            _this.createTime.push(newDate.toDateString());
                            _this.total_comments.push(data.total_comments);
                            _this.total_reactions.push(data.total_reactions);
                        }
                        if (data.total_comments > maxComments) {
                            maxComments = data.total_comments;
                            data.created_time = new Date(data.created_time).toDateString();
                            _this.maxCommentsPost = data;
                            //console.log(maxComments);
                        }
                        if (data.total_reactions > maxReactions) {
                            maxReactions = data.total_reactions;
                            data.created_time = new Date(data.created_time).toDateString();
                            _this.maxReactionsPost = data;
                        }
                    }
                }
                if (_this.pageTriger == "chart")
                    _this.createGraph();
                //          console.log("Success : " + JSON.stringify(result));
                _this.getMessage(_this.maxCommentsPost.id, "comments");
                _this.getMessage(_this.maxReactionsPost.id, "reactions");
                loading.dismissAll();
                _this.retryTime = 0;
                _this.httpProvider.setUid(result._uid);
                _this.isAll = true;
            }, function (err) {
                //call if fail to get request
                console.error("Error : " + err);
                alert("Can't get Data from the server: " + err);
                loading.dismissAll();
            }, function () {
                console.log('getData completed');
            });
    };
    DashboardPage.prototype.getAllTops = function () {
        var _this = this;
        var loading = this.loadingController.create({ content: "Loading,please wait..." });
        loading.present();
        if (this.hourValue != '0' || this.dayValue != '0' || this.monthValue != '0' || this.yearValue != '0')
            //call method from httpProvider
            this.httpProvider.getDashboardAllTops().subscribe(
            //call if get httpRequest success (But not error from getData from facebook such as access token expired!!)
            function (result) {
                //check if server send error back
                if (result.error) {
                    //check if token expire?
                    if (result.error.type == "OAuthException") {
                        console.log("Token expired!!!");
                        _this.retryTime += 1;
                        if (_this.retryTime < 3)
                            return _this.getAllTops();
                        else
                            console.log("Access Token expired!!!");
                    }
                }
                //assign data to view
                _this.commentsData = result.comments;
                _this.reactionsData = result.reactions;
                if (_this.postsSummaryData) {
                    for (var _i = 0, _a = _this.postsSummaryData; _i < _a.length; _i++) {
                        var data = _a[_i];
                        var newDate = new Date(data.created_time);
                        _this.createTime.push(newDate.toDateString());
                        _this.total_comments.push(data.total_comments);
                        _this.total_reactions.push(data.total_reactions);
                    }
                }
                if (_this.pageTriger == "chart")
                    _this.createGraph();
                //          console.log("Success : " + JSON.stringify(result));
                loading.dismissAll();
                _this.retryTime = 0;
                _this.httpProvider.setUid(result._uid);
            }, function (err) {
                //call if fail to get request
                console.error("Error : " + err);
                alert("Can't get Data from the server: " + err);
                loading.dismissAll();
            }, function () {
                console.log('getData completed');
            });
    };
    DashboardPage.prototype.setLike = function () {
        this.httpProvider.setLike().subscribe(function (value) {
            console.log(value);
        });
    };
    //call when view did load
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
        this.getFacebookData();
        this.setLike();
    };
    //get message
    DashboardPage.prototype.getMessage = function (uid, option) {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.httpProvider.getMessage(uid).then(function (result) {
                if (option == "comments") {
                    _this.maxCommentsMsg = result.message;
                }
                else if (option == "reactions") {
                    _this.maxReactionsMsg = result.message;
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.maxCommentsMsg = "Message";
            this.maxReactionsMsg = "Message2";
        }
    };
    //for create graph
    DashboardPage.prototype.createGraph = function () {
        this.barChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: this.createTime,
                datasets: [{
                        label: 'Total comments',
                        data: this.total_comments,
                        backgroundColor: "#bae1ff",
                        borderWidth: 1
                    }, {
                        label: 'Total reactions',
                        data: this.total_reactions,
                        backgroundColor: "#ffb3ba",
                        borderWidth: 1
                    }]
            },
            options: {
                responsive: false,
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                    xAxes: [{
                            ticks: {
                                minRotation: 90,
                                fontSize: 10
                            }
                        }]
                },
                layout: {
                    padding: {
                        left: 2,
                        right: 2,
                        top: 0,
                        bottom: 2
                    }
                }
            }
        });
    };
    DashboardPage.prototype.trigerPage = function () {
        if (this.pageTriger == 'chart') {
            this.pageTriger = 'list';
        }
        else if (this.pageTriger == 'list') {
            this.pageTriger = 'chart';
            this.createTime = [];
            this.total_comments = [];
            this.total_reactions = [];
            this.getFacebookData();
        }
    };
    DashboardPage.prototype.presentProfileModal = function (uid, user_name) {
        //console.log(uid);
        var profileModal = this.modalCtrl.create('UserProfilePage', { userId: uid, name: user_name });
        profileModal.present();
    };
    return DashboardPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('barCanvas'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], DashboardPage.prototype, "barCanvas", void 0);
DashboardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-dashboard',template:/*ion-inline-start:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\pages\dashboard\dashboard.html"*/'<!--\n\n  Generated template for the DashboardPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-content padding="" style="background:url(assets/imgs/background2.jpg);background-size:cover;">\n\n  <ion-header>\n\n    <ion-toolbar class="btn-wrapper">\n\n      <div [ngSwitch]="typeData" *ngIf="pageTriger.match(\'list\')">\n\n        <div>\n\n          <ion-title *ngSwitchCase="\'commentsData\'" id="subheader">Top Comments Users on Your Posts</ion-title>\n\n          <ion-title *ngSwitchCase="\'likesData\'" id="subheader">Top Likes Users on Your Posts</ion-title>\n\n\n\n          <ion-segment [(ngModel)]="typeData" color="primary">\n\n            <ion-segment-button value="commentsData">\n\n              Top Commenters\n\n            </ion-segment-button>\n\n            <ion-segment-button value="likesData">\n\n              Top Reactioners\n\n            </ion-segment-button>\n\n          </ion-segment>\n\n        </div>\n\n      </div>\n\n      <div *ngIf="pageTriger.match(\'chart\')">\n\n        <ion-title>Your Posts Summary</ion-title>\n\n      </div>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <div *ngIf="pageTriger.match(\'chart\')" class=\'dashboardContent\'>\n\n    <ion-card has-header="true">\n\n      <ion-card-header id="ion-card-header2">\n\n        Top posts in {{sortByTime}}\n\n      </ion-card-header>\n\n\n\n      <canvas height="350" item-content #barCanvas type></canvas>\n\n\n\n    </ion-card>\n\n\n\n    <ion-card *ngIf="maxCommentsPost" has-header="true">\n\n      <ion-card-header text-wrap id="ion-card-header2">\n\n        Top Post by Comments in {{sortByTime}}\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-row>\n\n          <ion-col col-8>\n\n            {{maxCommentsPost.created_time}}\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-icon color="facebook" name="text" style="margin-right:8px;"></ion-icon>{{maxCommentsPost.total_comments}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-item text-wrap>{{maxCommentsMsg}}</ion-item>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card *ngIf="maxReactionsPost">\n\n      <ion-card-header text-wrap id="ion-card-header3">\n\n        Top Post by Reactions in {{sortByTime}}\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-row>\n\n          <ion-col col-8>\n\n            {{maxReactionsPost.created_time}}\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-icon style="color:red;margin-right:8px;" name="md-flame"></ion-icon>{{maxReactionsPost.total_reactions}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-item text-wrap>{{maxReactionsMsg}}</ion-item>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n  <div *ngIf="pageTriger.match(\'list\')" class=\'dashboardContent\'>\n\n    <div [ngSwitch]="typeData">\n\n      <div *ngSwitchCase="\'commentsData\'">\n\n        <ion-list *ngFor="let item of commentsData">\n\n          <ion-card no-padding>\n\n            <ion-card-content no-padding>\n\n              <ion-grid no-padding>\n\n                <ion-row>\n\n                  <ion-col>\n\n                    <ion-item>\n\n                      <ion-avatar>\n\n                        <img id="item-avatar" src="http://graph.facebook.com/{{item._uid}}/picture?type=square">\n\n                      </ion-avatar>\n\n                    </ion-item>\n\n                  </ion-col>\n\n                  <ion-col col-8>\n\n                    <ion-card-header (click)="presentProfileModal(item._uid,item.name)" id="ion-card-header2">\n\n                      <ion-label text-wrap style="word-wrap: break-word">{{item.name}}</ion-label>\n\n                    </ion-card-header>\n\n                    <ion-item style="margin-top:-30px">Comments\n\n                      <ion-icon color="facebook" name="text"></ion-icon> {{item.comments}} </ion-item>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-list>\n\n      </div>\n\n      <div *ngSwitchCase="\'likesData\'">\n\n        <ion-list *ngFor="let item of reactionsData">\n\n          <ion-card>\n\n            <ion-card-content>\n\n              <ion-grid no-padding>\n\n                <ion-row>\n\n                  <ion-col>\n\n                    <ion-item>\n\n                      <ion-avatar>\n\n                        <img id="item-avatar" src="http://graph.facebook.com/{{item._uid}}/picture?type=square">\n\n                      </ion-avatar>\n\n                    </ion-item>\n\n                  </ion-col>\n\n                  <ion-col col-8>\n\n                    <ion-card-header text-wrap (click)="presentProfileModal(item._uid,item.name)" id="ion-card-header2">\n\n                      <ion-item style="word-wrap: break-word">{{item.name}}</ion-item><ion-item style="margin-top:-15px;">\n\n                        <ion-icon style="color:red;margin-right:8px;" name="md-flame"></ion-icon> {{item.total}}</ion-item>\n\n                    </ion-card-header>\n\n                  </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <ion-col>\n\n                    <ion-icon style="color:primary;margin-:" name="ios-thumbs-up"></ion-icon>{{item.like}} </ion-col>\n\n                  <ion-col>\n\n                    <ion-icon style="color:crimson;" name="ios-heart"></ion-icon>{{item.love}}</ion-col>\n\n                  <ion-col>\n\n                    <ion-icon style="color:goldenrod;" name="md-outlet"></ion-icon>{{item.wow}}</ion-col>\n\n                  <ion-col>\n\n                    <ion-icon style="color:goldenrod;" name="ios-happy"></ion-icon>{{item.haha}}</ion-col>\n\n                  <ion-col>\n\n                    <ion-icon style="color:goldenrod;" name="ios-sad"></ion-icon>{{item.sad}} </ion-col>\n\n                  <ion-col>\n\n                    <ion-icon style="color:goldenrod;" name="alert"></ion-icon>{{item.angry}}</ion-col>\n\n                  <ion-col>\n\n                    <ion-icon style="color:purple;" name="flower"></ion-icon>{{item.thankful}}</ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-list>\n\n      </div>\n\n      <div>\n\n        <ion-col>\n\n          <button ion-button (click)="getAllTops()" color="facebook">See more ...</button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-select [(ngModel)]="sortByTime" (ionChange)="getFacebookData()">\n\n            <ion-option>Last 1 week</ion-option>\n\n            <ion-option>Last 1 month</ion-option>\n\n            <ion-option>Last 3 months</ion-option>\n\n            <ion-option>Last 6 months</ion-option>\n\n            <ion-option>Last 1 year</ion-option>\n\n            <ion-option>Last 2 years</ion-option>\n\n            <ion-option>Last 5 years</ion-option>\n\n          </ion-select>\n\n        </ion-col>\n\n\n\n\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n\n  <div class="btn-wrapper">\n\n    <button ion-button icon-only color="soft" (click)=\'trigerPage()\'>\n\n      <ion-icon name="arrow-up" *ngIf="pageTriger.match(\'list\')"></ion-icon>\n\n      <ion-icon name="arrow-down" *ngIf="pageTriger.match(\'chart\')"></ion-icon>\n\n    </button>\n\n  </div>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\pages\dashboard\dashboard.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_http_provider__["a" /* HttpProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_http_http_provider__["a" /* HttpProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
], DashboardPage);

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http_provider__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
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
 * Generated class for the FriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FriendsPage = (function () {
    function FriendsPage(navCtrl, navParams, httpProvider, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.loadingController = loadingController;
    }
    FriendsPage.prototype.ionViewDidLoad = function () {
        //this.getFacebookData();
    };
    FriendsPage.prototype.getFacebookData = function () {
        var _this = this;
        var loading = this.loadingController.create({ content: "Loading,please wait..." });
        loading.present();
        this.httpProvider.getFacebookData(10, 0, 0, 3, 0).subscribe(function (result) {
            if (result.error)
                if (result.error.type == "OAuthException") {
                    console.log("Token expired!!!");
                    return _this.getFacebookData();
                }
            _this.newsData = result.data;
            console.log("Success : " + JSON.stringify(result.data[0].name));
            loading.dismissAll();
            _this.createGraph();
        }, function (err) {
            console.error("Error : " + err);
            loading.dismissAll();
        }, function () {
            console.log('getData completed');
        });
    };
    FriendsPage.prototype.createGraph = function () {
        this.barChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: [this.newsData[0].name, this.newsData[1].name, this.newsData[2].name, this.newsData[3].name, this.newsData[4].name, this.newsData[5].name],
                datasets: [{
                        label: '# of Comments',
                        data: [this.newsData[0].comments, this.newsData[1].comments, this.newsData[2].comments, this.newsData[3].comments, this.newsData[4].comments, this.newsData[5].comments],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ]
                    }]
            }
        });
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "My First dataset",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 40],
                        spanGaps: false,
                    }
                ]
            }
        });
    };
    return FriendsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('barCanvas'),
    __metadata("design:type", Object)
], FriendsPage.prototype, "barCanvas", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('doughnutCanvas'),
    __metadata("design:type", Object)
], FriendsPage.prototype, "doughnutCanvas", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('lineCanvas'),
    __metadata("design:type", Object)
], FriendsPage.prototype, "lineCanvas", void 0);
FriendsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-friends',template:/*ion-inline-start:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\pages\friends\friends.html"*/'<!--\n  Generated template for the FriendsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-title>This tab for newfeeds from friends who use our app</ion-card-title>\n    Coming Soon\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\pages\friends\friends.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_http_http_provider__["a" /* HttpProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], FriendsPage);

//# sourceMappingURL=friends.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewfeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_http_http_provider__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import {
//   StackConfig,
//   Stack,
//   Card,
//   ThrowEvent,
//   DragEvent,
//   SwingStackComponent,
//   SwingCardComponent
// } from 'angular2-swing';
/**
 * Generated class for the NewfeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewfeedPage = (function () {
    function NewfeedPage(navCtrl, navParams, httpProvider, loadingController, http) {
        //for tinder
        //console.log(this.httpProvider.getPosts());
        // this.stackConfig = {
        //   throwOutConfidence: (offsetX, offsetY, element) => {
        //     return Math.min(Math.abs(offsetX) / (element.offsetWidth / 2), 1);
        //   },
        //   transform: (element, x, y, r) => {
        //     this.onItemMove(element, x, y, r);
        //   },
        //   throwOutDistance: (d) => {
        //     return 800;
        //   }
        // };
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.loadingController = loadingController;
        this.http = http;
        // stackConfig: StackConfig;
        this.recentCard = '';
        this.mapPosts = function (post) {
            return {
                from: post.from,
                time: post.created_time * 1000,
                message: post.message,
                photos: _this.getPhotos(post)
            };
        };
        this.getPhotos = function (post) {
            if (!post.attachments)
                return [];
            var attachments = post.attachments.data[0].subattachments ||
                post.attachments;
            return attachments.data
                .filter(function (x) { return x.type == "photo"; })
                .map(function (x) { return x.media.image; });
        };
        //for retry
        this.retryTime = 0;
        this.getPost(true);
    }
    //call when refresh
    NewfeedPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        //get data again
        this.getPost(true);
        refresher.complete();
    };
    NewfeedPage.prototype.getPost = function (getLoading) {
        var _this = this;
        var loading = this.loadingController.create({ content: "Loading,please wait..." });
        if (getLoading) {
            loading.present();
        }
        this.httpProvider.getPosts().subscribe(
        //call if get httpRequest success (But not error from getData from facebook such as access token expired!!)
        function (result) {
            //check if server send error back
            if (result.error) {
                //check if token expire?
                if (result.error.type == "OAuthException") {
                    console.log("Token expired!!!");
                    _this.retryTime += 1;
                    if (_this.retryTime < 3)
                        return _this.getPost(true);
                    else
                        console.log("Access Token expired!!!");
                }
                else {
                    _this.setLike();
                    _this.getPost(true);
                }
            }
            //assign data to view
            _this.newsData = result;
            if (_this.newsData) {
                for (var _i = 0, _a = _this.newsData; _i < _a.length; _i++) {
                    var data = _a[_i];
                    var newDate = new Date(data.created_time);
                    data.created_time = newDate.toDateString();
                }
            }
            //alert(typeof (this.newsData));
            console.log("Success : " + JSON.stringify(result));
            if (getLoading)
                loading.dismissAll();
            _this.retryTime = 0;
        }, function (err) {
            //call if fail to get request
            console.error("Error : " + err);
            alert("Can't get Data from the server: " + err);
            if (getLoading)
                loading.dismissAll();
        }, function () {
            console.log('getData completed');
        });
    };
    NewfeedPage.prototype.setLike = function () {
        this.httpProvider.setLike().subscribe(function (value) {
            console.log(value);
        });
    };
    NewfeedPage.prototype.merge = function (dest, src) {
        for (var _i = 0, src_1 = src; _i < src_1.length; _i++) {
            var kvp = src_1[_i];
            dest[kvp.key] = kvp.value;
        }
    };
    NewfeedPage.prototype.doInfinite = function (infiniteScroll) {
        setTimeout(function () {
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 1000);
    };
    NewfeedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad newfeedPage');
        //this.getCommentsData();
        //this.createGraph();
    };
    // ngAfterViewInit() {
    //   // Either subscribe in controller or set in HTML
    //   this.swingStack.throwin.subscribe((event: DragEvent) => {
    //     event.target.style.background = '#ffffff';
    //   });
    //   this.cards = [{ email: '' }];
    //   this.addNewCards(2);
    // }
    ////part tinder
    // Called whenever we drag an element
    NewfeedPage.prototype.onItemMove = function (element, x, y, r) {
        var color = '';
        var abs = Math.abs(x);
        var min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
        var hexCode = this.decimalToHex(min, 2);
        if (x < 0) {
            color = '#FF' + hexCode + hexCode;
        }
        else {
            color = '#' + hexCode + 'FF' + hexCode;
        }
        element.style.background = color;
        element.style['transform'] = "translate3d(0, 0, 0) translate(" + x + "px, " + y + "px) rotate(" + r + "deg)";
    };
    // Connected through HTML
    NewfeedPage.prototype.voteUp = function (like) {
        var removedCard = this.cards.pop();
        this.addNewCards(1);
        if (like) {
            this.recentCard = 'You liked: ' + removedCard.email;
        }
        else {
            this.recentCard = 'You disliked: ' + removedCard.email;
        }
    };
    NewfeedPage.prototype.addNewCards = function (count) {
        var _this = this;
        this.http.get('https://randomuser.me/api/?results=' + count)
            .map(function (data) { return data.json().results; })
            .subscribe(function (result) {
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var val = result_1[_i];
                _this.cards.push(val);
            }
        });
    };
    // http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
    NewfeedPage.prototype.decimalToHex = function (d, padding) {
        var hex = Number(d).toString(16);
        padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;
        while (hex.length < padding) {
            hex = "0" + hex;
        }
        return hex;
    };
    return NewfeedPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Content */])
], NewfeedPage.prototype, "content", void 0);
NewfeedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-newfeed',template:/*ion-inline-start:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\pages\newfeed\newfeed.html"*/'<!--\n\n  Generated template for the NewfeedPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-content no-bounce style="background:url(assets/imgs/background2.jpg);background-size:cover;">\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  \n\n  <ion-list *ngFor="let item of newsData">\n\n\n\n    <ion-card>\n\n\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src={{item.page_picture}}>\n\n        </ion-avatar>\n\n        <h2>{{item.page_name}}</h2>\n\n        <p>{{item.created_time}}</p>\n\n      </ion-item>\n\n\n\n      <img src={{item.full_picture}} />\n\n\n\n      <ion-card-content>\n\n        <p>{{item.message}}</p>\n\n      </ion-card-content>\n\n      <div>\n\n        <ion-row>\n\n\n\n\n\n          <ion-label>\n\n            <ion-icon style="color:red;margin-left:10px;margin-right:5px;" name="md-flame"></ion-icon>\n\n            {{item.reactions_summary}}\n\n          </ion-label>\n\n          <ion-label>\n\n            <ion-icon color="facebook" style="margin-right:5px;" name="text"></ion-icon>\n\n            {{item.comments_summary}}\n\n          </ion-label>\n\n\n\n        </ion-row>\n\n      </div>\n\n      <ion-row>\n\n        <ion-col>\n\n          <button ion-button full icon-center clear small>\n\n            <ion-icon color="facebook" style="margin-left:10px;margin-right:5px;" name="ios-thumbs-up"></ion-icon>\n\n            <div>Likes</div>\n\n          </button>\n\n        </ion-col>\n\n       <!-- <button class="button circle text-center">\n\n          <i class="ion-crop"></i>\n\n        </button>!-->\n\n        <ion-col>\n\n          <button ion-button full icon-center clear small>\n\n            <ion-icon color="facebook" style="margin-right:5px;" name="text"></ion-icon>\n\n            <div>Comments</div>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </ion-card>\n\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more feed..."></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\pages\newfeed\newfeed.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_0__providers_http_http_provider__["a" /* HttpProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__providers_http_http_provider__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
], NewfeedPage);

//# sourceMappingURL=newfeed.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(115);
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
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingPage = (function () {
    function SettingPage(navCtrl, navParams, facebook, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.facebook = facebook;
        this.app = app;
    }
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
    };
    SettingPage.prototype.getAccess = function () {
        var token = this.facebook.getAccessToken();
        console.log(token);
        alert(token);
    };
    SettingPage.prototype.logout = function () {
        this.facebook.logout().then(function (response) {
            alert(JSON.stringify(response));
        }, function (error) {
            alert(error);
        });
        var nav = this.app.getRootNav();
        nav.push(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    return SettingPage;
}());
SettingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-setting',template:/*ion-inline-start:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\pages\setting\setting.html"*/'<!--\n  Generated template for the SettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding>\n  <button ion-button (click)=\'logout()\'>LOG OUT</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\pages\setting\setting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */]])
], SettingPage);

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(402);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_newfeed_newfeed__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_friends_friends__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_setting_setting__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_http_http_provider__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_swing__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_time_time__ = __webpack_require__(768);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_screen_orientation__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_newfeed_newfeed__["a" /* NewfeedPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_friends_friends__["a" /* FriendsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_setting_setting__["a" /* SettingPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_14_angular2_swing__["SwingModule"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                tabsPlacement: 'top'
            }, {
                links: [
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/friends/friends.module#FriendsPageModule', name: 'FriendsPage', segment: 'friends', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/newfeed/newfeed.module#NewfeedPageModule', name: 'NewfeedPage', segment: 'newfeed', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'tabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/user-profile/user-profile.module#UserProfilePageModule', name: 'UserProfilePage', segment: 'user-profile', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_newfeed_newfeed__["a" /* NewfeedPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_friends_friends__["a" /* FriendsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_setting_setting__["a" /* SettingPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_11__providers_http_http_provider__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_time_time__["a" /* TimeProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 210,
	"./af.js": 210,
	"./ar": 211,
	"./ar-dz": 212,
	"./ar-dz.js": 212,
	"./ar-kw": 213,
	"./ar-kw.js": 213,
	"./ar-ly": 214,
	"./ar-ly.js": 214,
	"./ar-ma": 215,
	"./ar-ma.js": 215,
	"./ar-sa": 216,
	"./ar-sa.js": 216,
	"./ar-tn": 217,
	"./ar-tn.js": 217,
	"./ar.js": 211,
	"./az": 218,
	"./az.js": 218,
	"./be": 219,
	"./be.js": 219,
	"./bg": 220,
	"./bg.js": 220,
	"./bn": 221,
	"./bn.js": 221,
	"./bo": 222,
	"./bo.js": 222,
	"./br": 223,
	"./br.js": 223,
	"./bs": 224,
	"./bs.js": 224,
	"./ca": 225,
	"./ca.js": 225,
	"./cs": 226,
	"./cs.js": 226,
	"./cv": 227,
	"./cv.js": 227,
	"./cy": 228,
	"./cy.js": 228,
	"./da": 229,
	"./da.js": 229,
	"./de": 230,
	"./de-at": 231,
	"./de-at.js": 231,
	"./de-ch": 232,
	"./de-ch.js": 232,
	"./de.js": 230,
	"./dv": 233,
	"./dv.js": 233,
	"./el": 234,
	"./el.js": 234,
	"./en-au": 235,
	"./en-au.js": 235,
	"./en-ca": 236,
	"./en-ca.js": 236,
	"./en-gb": 237,
	"./en-gb.js": 237,
	"./en-ie": 238,
	"./en-ie.js": 238,
	"./en-nz": 239,
	"./en-nz.js": 239,
	"./eo": 240,
	"./eo.js": 240,
	"./es": 241,
	"./es-do": 242,
	"./es-do.js": 242,
	"./es.js": 241,
	"./et": 243,
	"./et.js": 243,
	"./eu": 244,
	"./eu.js": 244,
	"./fa": 245,
	"./fa.js": 245,
	"./fi": 246,
	"./fi.js": 246,
	"./fo": 247,
	"./fo.js": 247,
	"./fr": 248,
	"./fr-ca": 249,
	"./fr-ca.js": 249,
	"./fr-ch": 250,
	"./fr-ch.js": 250,
	"./fr.js": 248,
	"./fy": 251,
	"./fy.js": 251,
	"./gd": 252,
	"./gd.js": 252,
	"./gl": 253,
	"./gl.js": 253,
	"./gom-latn": 254,
	"./gom-latn.js": 254,
	"./he": 255,
	"./he.js": 255,
	"./hi": 256,
	"./hi.js": 256,
	"./hr": 257,
	"./hr.js": 257,
	"./hu": 258,
	"./hu.js": 258,
	"./hy-am": 259,
	"./hy-am.js": 259,
	"./id": 260,
	"./id.js": 260,
	"./is": 261,
	"./is.js": 261,
	"./it": 262,
	"./it.js": 262,
	"./ja": 263,
	"./ja.js": 263,
	"./jv": 264,
	"./jv.js": 264,
	"./ka": 265,
	"./ka.js": 265,
	"./kk": 266,
	"./kk.js": 266,
	"./km": 267,
	"./km.js": 267,
	"./kn": 268,
	"./kn.js": 268,
	"./ko": 269,
	"./ko.js": 269,
	"./ky": 270,
	"./ky.js": 270,
	"./lb": 271,
	"./lb.js": 271,
	"./lo": 272,
	"./lo.js": 272,
	"./lt": 273,
	"./lt.js": 273,
	"./lv": 274,
	"./lv.js": 274,
	"./me": 275,
	"./me.js": 275,
	"./mi": 276,
	"./mi.js": 276,
	"./mk": 277,
	"./mk.js": 277,
	"./ml": 278,
	"./ml.js": 278,
	"./mr": 279,
	"./mr.js": 279,
	"./ms": 280,
	"./ms-my": 281,
	"./ms-my.js": 281,
	"./ms.js": 280,
	"./my": 282,
	"./my.js": 282,
	"./nb": 283,
	"./nb.js": 283,
	"./ne": 284,
	"./ne.js": 284,
	"./nl": 285,
	"./nl-be": 286,
	"./nl-be.js": 286,
	"./nl.js": 285,
	"./nn": 287,
	"./nn.js": 287,
	"./pa-in": 288,
	"./pa-in.js": 288,
	"./pl": 289,
	"./pl.js": 289,
	"./pt": 290,
	"./pt-br": 291,
	"./pt-br.js": 291,
	"./pt.js": 290,
	"./ro": 292,
	"./ro.js": 292,
	"./ru": 293,
	"./ru.js": 293,
	"./sd": 294,
	"./sd.js": 294,
	"./se": 295,
	"./se.js": 295,
	"./si": 296,
	"./si.js": 296,
	"./sk": 297,
	"./sk.js": 297,
	"./sl": 298,
	"./sl.js": 298,
	"./sq": 299,
	"./sq.js": 299,
	"./sr": 300,
	"./sr-cyrl": 301,
	"./sr-cyrl.js": 301,
	"./sr.js": 300,
	"./ss": 302,
	"./ss.js": 302,
	"./sv": 303,
	"./sv.js": 303,
	"./sw": 304,
	"./sw.js": 304,
	"./ta": 305,
	"./ta.js": 305,
	"./te": 306,
	"./te.js": 306,
	"./tet": 307,
	"./tet.js": 307,
	"./th": 308,
	"./th.js": 308,
	"./tl-ph": 309,
	"./tl-ph.js": 309,
	"./tlh": 310,
	"./tlh.js": 310,
	"./tr": 311,
	"./tr.js": 311,
	"./tzl": 312,
	"./tzl.js": 312,
	"./tzm": 313,
	"./tzm-latn": 314,
	"./tzm-latn.js": 314,
	"./tzm.js": 313,
	"./uk": 315,
	"./uk.js": 315,
	"./ur": 316,
	"./ur.js": 316,
	"./uz": 317,
	"./uz-latn": 318,
	"./uz-latn.js": 318,
	"./uz.js": 317,
	"./vi": 319,
	"./vi.js": 319,
	"./x-pseudo": 320,
	"./x-pseudo.js": 320,
	"./yo": 321,
	"./yo.js": 321,
	"./zh-cn": 322,
	"./zh-cn.js": 322,
	"./zh-hk": 323,
	"./zh-hk.js": 323,
	"./zh-tw": 324,
	"./zh-tw.js": 324
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 456;

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_screen_orientation__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
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
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpProvider = (function () {
    // private graphUrl = 'https://graph.facebook.com/';
    // private graphQuery = `date_format=U&fields=posts{from,created_time,message,attachments}`;
    function HttpProvider(http, facebook, platform, app, screenOrientation) {
        this.http = http;
        this.facebook = facebook;
        this.platform = platform;
        this.app = app;
        this.screenOrientation = screenOrientation;
        //initial
        this.APP_ID = 1894102183937616;
        this.serverIP = 'http://103.233.194.200:8080/';
        console.log('Hello HttpProvider Provider');
    }
    HttpProvider.prototype.init = function () {
        this.facebook.browserInit(this.APP_ID, "v2.12");
    };
    Object.defineProperty(HttpProvider.prototype, "navCtrl", {
        get: function () {
            return this.app.getActiveNav();
        },
        enumerable: true,
        configurable: true
    });
    HttpProvider.prototype.login = function () {
        var _this = this;
        var permissions = new Array();
        //let nav = this.navCtrl;
        permissions = ["public_profile", "user_posts", "user_friends", "user_likes"];
        this.facebook.login(permissions).then(function (response) {
            var userId = response.authResponse.userID;
            var params = new Array();
            _this.facebook.api("/me?fields=name,gender", params)
                .then(function (profile) {
                profile.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
            });
            console.log(permissions);
            //alert('Logged in Successfully!');
            console.log(JSON.stringify(response.authResponse));
            _this.authResponse = response.authResponse;
            _this.uid = _this.authResponse.userId;
            _this.isLogged = true;
            if (_this.platform.is('cordova'))
                _this.screenOrientation.unlock();
            _this.navCtrl.push('tabsPage');
        }, function (error) {
            //for test
            if (error == 'cordova_not_available') {
                _this.isLogged = true;
                _this.navCtrl.push('tabsPage');
                _this.uid = "878312008845622";
                console.log(_this.uid);
            }
            else {
                //alert("Error: " + JSON.stringify(error));
                console.log(error);
                _this.isLogged = false;
            }
        });
        //console.log(this.uid);
    };
    // set uid
    HttpProvider.prototype.setUid = function (uid) {
        this.uid = uid;
    };
    //get uid
    HttpProvider.prototype.getUid = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.facebook.api("/me", []).then(function (value) {
                _this.uid = value.id;
                //alert(this.uid);
                console.log(value);
            });
        }
        else {
            this.uid = "878312008845622";
        }
    };
    //get user token from facebook
    HttpProvider.prototype.getToken = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.facebook.getAccessToken().then(function (value) {
                _this.accessToken = value;
                console.log(_this.accessToken);
            });
        }
        else {
            //for test in computer
            this.accessToken = 'EAACEdEose0cBAMDWvHZBPUF4RF7QKbIvTniXidzBA6YAQhZCy44YKtDvsOUlN4aYkxqrLx6zxfcWKUDczQLnBxmS0CZAs20QfqagIO6n7xrlxChHCbSc8pEaS1LjTgvcSq9sMgxnMiTs0ylGy016NLksi4vgncZBoAj5VkTOJ8nnQfPZA05RM4wz1jyOSDKap6aU7rbOhDQZDZD';
        }
    };
    //set url for http request from python server
    HttpProvider.prototype.setHttpRequest = function (type, top, hour, day, month, year) {
        //this.getToken();
        //console.log("token: " + this.accessToken);
        var request = this.serverIP + type;
        if (type == 'dashboard') {
            request += "?since=-";
        }
        if (year != '0') {
            request += year + '%20years%20';
        }
        if (month != '0') {
            request += month + '%20month%20';
        }
        if (day != '0') {
            request += day + '%20days%20';
        }
        if (hour != '0') {
            request += hour + '%20hour%20';
        }
        if (type == 'dashboard')
            request += "&until=-0 year";
        if (top != '') {
            request += '&top=' + top;
        }
        console.log("req: " + request);
        return request;
    };
    HttpProvider.prototype.getFacebookData = function (top, hour, day, month, year) {
        //set header to authorize with access token
        this.getToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('access_token', this.accessToken);
        return this.http.get(this.setHttpRequest('dashboard', top, hour, day, month, year), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HttpProvider.prototype.getDashboardAllTops = function () {
        this.getUid();
        //set header to authorize with access token
        this.getToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('access_token', this.accessToken);
        return this.http.get(this.setHttpRequest('dashboard/getalltops/' + this.uid, '', '0', '0', '0', '0'), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //feature for newfeed??
    HttpProvider.prototype.setLike = function () {
        this.getToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('access_token', this.accessToken);
        return this.http.get(this.setHttpRequest('likes', '', '0', '0', '0', '0'), { headers: headers });
    };
    HttpProvider.prototype.getPosts = function () {
        this.getUid();
        this.getToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        console.log(this.uid);
        console.log(this.accessToken);
        headers.append('access_token', this.accessToken);
        // return this.http.get(
        //   this.setHttpRequest("newsfeed/" + uid, '', '0', '0', '0', '0'), { headers: headers })
        //   .map(res => res.json());
        return this.http.get(this.setHttpRequest("newsfeed/" + this.uid, '', '0', '0', '0', '0'), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HttpProvider.prototype.getCover = function (uid) {
        return this.facebook.api('/' + uid.toString() + '?field=cover', ['user_posts']);
    };
    HttpProvider.prototype.getContext = function (uid) {
        return this.facebook.api('/' + uid + '?field=context', ['user_posts']);
    };
    HttpProvider.prototype.getMessage = function (postID) {
        return this.facebook.api('/' + postID, ['user_posts']);
    };
    HttpProvider.prototype.getFriends = function () {
        return this.facebook.api('/me/friends', ['user_friends']);
    };
    return HttpProvider;
}());
HttpProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__ionic_native_screen_orientation__["a" /* ScreenOrientation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ionic_native_screen_orientation__["a" /* ScreenOrientation */]) === "function" && _e || Object])
], HttpProvider);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=http-provider.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_alert_alert_controller__ = __webpack_require__(95);
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
    function MyApp(platform, statusBar, splashScreen, app, alertCtrl) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            platform.registerBackButtonAction(function () {
                var nav = app.getActiveNavs()[0];
                var activeView = nav.getActive();
                if (activeView.name === "TabsPage") {
                    if (nav.canGoBack()) {
                        nav.pop();
                    }
                    else {
                        var alert_1 = alertCtrl.create({
                            title: 'App termination',
                            message: 'Do you want to close the app?',
                            buttons: [{
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Application exit prevented!');
                                    }
                                }, {
                                    text: 'Close App',
                                    handler: function () {
                                        platform.exitApp(); // Close this application
                                    }
                                }]
                        });
                        alert_1.present();
                    }
                }
                else if (activeView.name === "HomePage") {
                    var alert_2 = alertCtrl.create({
                        title: 'App termination',
                        message: 'Do you want to close the app?',
                        buttons: [{
                                text: 'Cancel',
                                role: 'cancel',
                                handler: function () {
                                    console.log('Application exit prevented!');
                                }
                            }, {
                                text: 'Close App',
                                handler: function () {
                                    platform.exitApp(); // Close this application
                                }
                            }]
                    });
                    alert_2.present();
                }
            });
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
  Generated class for the TimeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TimeProvider = (function () {
    function TimeProvider(http) {
        this.http = http;
        console.log('Hello TimeProvider Provider');
    }
    return TimeProvider;
}());
TimeProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], TimeProvider);

//# sourceMappingURL=time.js.map

/***/ })

},[397]);
//# sourceMappingURL=main.js.map