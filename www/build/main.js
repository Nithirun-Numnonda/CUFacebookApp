webpackJsonp([7],{

/***/ 156:
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
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		770,
		2
	],
	"../pages/dashboard/dashboard.module": [
		771,
		3
	],
	"../pages/friends/friends.module": [
		772,
		6
	],
	"../pages/newfeed/newfeed.module": [
		773,
		5
	],
	"../pages/setting/setting.module": [
		774,
		4
	],
	"../pages/tabs/tabs.module": [
		775,
		1
	],
	"../pages/user-profile/user-profile.module": [
		776,
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
webpackAsyncContext.id = 202;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http_provider__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__ = __webpack_require__(122);
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
        });
    }
    HomePage.prototype.login = function () {
        this.facebookService.login();
    };
    HomePage.prototype.ionViewDidEnter = function () {
        if (this.platform.is('cordova'))
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
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

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http_provider__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(695);
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
        //for scroll
    }
    DashboardPage.prototype.timeSwitchCase = function () {
        switch (this.sortByTime) {
            case "Last 1 day": {
                this.hourValue = this.hours[0];
                this.dayValue = this.days[1];
                this.monthValue = this.months[0];
                this.yearValue = this.years[0];
                this.topValue = this.top[0];
                break;
            }
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
        }
    };
    //for advance filter
    DashboardPage.prototype.onButtonClick = function () {
        this.buttonClicked = !this.buttonClicked;
    };
    //call when refresh
    // doRefresh(refresher) {
    //   console.log('Begin async operation', refresher);
    //   this.createTime = [];
    //   this.total_comments = [];
    //   this.total_reactions = [];
    //   //get data again
    //   this.getDashboard();
    //   refresher.complete();
    // }
    //get Facebook Data from httpProvider
    DashboardPage.prototype.getDashboard = function () {
        var _this = this;
        this.timeSwitchCase();
        var loading = this.loadingController.create({
            content: "LOADING, Please wait..."
        });
        loading.present();
        if (this.hourValue != '0' || this.dayValue != '0' || this.monthValue != '0' || this.yearValue != '0')
            //call method from httpProvider
            this.httpProvider.getDashboard(this.topValue, this.hourValue, this.dayValue, this.monthValue, this.yearValue).subscribe(
            //call if get httpRequest success (But not error from getData from facebook such as access token expired!!)
            function (result) {
                //check if server send error back
                if (result.error) {
                    //check if token expire?
                    if (result.error.type == "OAuthException") {
                        console.log("Token expired!!!");
                        _this.retryTime += 1;
                        if (_this.retryTime < 3) {
                            loading.dismissAll();
                            return _this.getDashboard();
                        }
                        else
                            console.log("Access Token expired!!!");
                    }
                }
                if (result.id) {
                    loading.dismissAll();
                    return null;
                }
                else {
                    //assign data to view
                    _this.commentsData = result.comments.data;
                    _this.reactionsData = result.reactions.data;
                    _this.postsSummaryData = result.post_summary.data;
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
                    if (_this.platform.is('cordova')) {
                        if (_this.postsSummaryData)
                            _this.getMessage(_this.maxCommentsPost.id, _this.maxReactionsPost.id);
                    }
                    _this.retryTime = 0;
                    _this.httpProvider.setUid(result._uid);
                    if (result.comments.next || result.reactions.next)
                        _this.isAll = false;
                    else
                        _this.isAll = true;
                    loading.dismissAll();
                }
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
        this.isAll = true;
        var loading = this.loadingController.create({ content: "LOADING, Please wait..." });
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
                _this.commentsData = result.comments.data;
                _this.reactionsData = result.reactions.data;
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
                _this.retryTime = 0;
                _this.httpProvider.setUid(result._uid);
            }, function (err) {
                //call if fail to get request
                console.error("Error : " + err);
                alert("Can't get Data from the server: " + err);
            }, function () {
                console.log('getData completed');
                loading.dismissAll();
            });
    };
    DashboardPage.prototype.setLike = function () {
        this.httpProvider.setLike().subscribe(function (value) {
            console.log(value);
        });
    };
    DashboardPage.prototype.getDashboardForTest = function () {
        var _this = this;
        this.timeSwitchCase();
        var loading = this.loadingController.create({
            content: "LOADING, Please wait..."
        });
        loading.present();
        if (this.hourValue != '0' || this.dayValue != '0' || this.monthValue != '0' || this.yearValue != '0')
            //call method from httpProvider
            this.httpProvider.getDashboardForTest(this.topValue, this.hourValue, this.dayValue, this.monthValue, this.yearValue).subscribe(
            //call if get httpRequest success (But not error from getData from facebook such as access token expired!!)
            function (result) {
                //check if server send error back
                if (result.error) {
                    //check if token expire?
                    if (result.error.type == "OAuthException") {
                        console.log("Token expired!!!");
                        _this.retryTime += 1;
                        if (_this.retryTime < 3) {
                            loading.dismissAll();
                            return _this.getDashboardForTest();
                        }
                        else
                            console.log("Access Token expired!!!");
                    }
                }
                if (result.id) {
                    loading.dismissAll();
                    return null;
                }
                else {
                    //assign data to view
                    _this.commentsData = result.comments.data;
                    _this.reactionsData = result.reactions.data;
                    _this.postsSummaryData = result.post_summary.data;
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
                    if (_this.platform.is('cordova')) {
                        if (_this.postsSummaryData)
                            _this.getMessage(_this.maxCommentsPost.id, _this.maxReactionsPost.id);
                    }
                    _this.retryTime = 0;
                    _this.httpProvider.setUid(result._uid);
                    if (result.comments.next || result.reactions.next)
                        _this.isAll = false;
                    else
                        _this.isAll = true;
                    loading.dismissAll();
                }
            }, function (err) {
                //call if fail to get request
                console.error("Error : " + err);
                alert("Can't get Data from the server: " + err);
                loading.dismissAll();
            }, function () {
                console.log('getData completed');
            });
    };
    //call when view did load
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
        if (this.platform.is('cordova')) {
            this.getDashboard();
        }
        else {
            this.getDashboardForTest();
        }
        this.setLike();
    };
    //get message
    DashboardPage.prototype.getMessage = function (uid, uid2) {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.httpProvider.getMessage(uid).then(function (result) {
                console.log(JSON.stringify(result));
                _this.maxCommentsMsg = result.message;
                _this.httpProvider.getMessage(uid2).then(function (result2) {
                    console.log(JSON.stringify(result2));
                    _this.maxReactionsMsg = result2.message;
                }, function (error) {
                    console.log(error);
                });
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
            this.content.scrollToTop();
        }
        else if (this.pageTriger == 'list') {
            this.pageTriger = 'chart';
            this.createTime = [];
            this.total_comments = [];
            this.total_reactions = [];
            this.content.scrollToTop();
            this.getDashboard();
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
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
], DashboardPage.prototype, "content", void 0);
DashboardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-dashboard',template:/*ion-inline-start:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\pages\dashboard\dashboard.html"*/'<!--\n\n  Generated template for the DashboardPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-content padding="" style="background:url(assets/imgs/background2.jpg);background-size:cover;">\n\n  <ion-header>\n\n    <ion-toolbar class="btn-wrapper">\n\n      <div [ngSwitch]="typeData" *ngIf="pageTriger.match(\'list\')">\n\n        <div>\n\n          <ion-title *ngSwitchCase="\'commentsData\'" id="subheader">Top Comments Users on Your Posts</ion-title>\n\n          <ion-title *ngSwitchCase="\'likesData\'" id="subheader">Top Likes Users on Your Posts</ion-title>\n\n\n\n          <ion-segment [(ngModel)]="typeData" color="primary">\n\n            <ion-segment-button value="commentsData">\n\n              Top Commenters\n\n            </ion-segment-button>\n\n            <ion-segment-button value="likesData">\n\n              Top Reactioners\n\n            </ion-segment-button>\n\n          </ion-segment>\n\n        </div>\n\n      </div>\n\n      <div *ngIf="pageTriger.match(\'chart\')">\n\n        <ion-title>Your Posts Summary</ion-title>\n\n      </div>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <div *ngIf="pageTriger.match(\'chart\')" class=\'dashboardContent\'>\n\n    <ion-card has-header="true">\n\n      <ion-card-header id="ion-card-header2">\n\n        Top posts in {{sortByTime}}\n\n      </ion-card-header>\n\n\n\n      <canvas height="350" item-content #barCanvas type></canvas>\n\n\n\n    </ion-card>\n\n\n\n    <ion-card *ngIf="maxCommentsPost" has-header="true">\n\n      <ion-card-header text-wrap id="ion-card-header3">\n\n        Top Post by Comments in {{sortByTime}}\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            {{maxCommentsPost.created_time}}\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-grid style="margin-top:-10px;">\n\n              <ion-row>\n\n                <ion-col>\n\n                  <img src="assets/imgs/icon/chat.png" style="width:24px;">\n\n                </ion-col>\n\n                <ion-col>\n\n                  {{maxCommentsPost.total_comments}}</ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-item text-wrap>{{maxCommentsMsg}}</ion-item>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card *ngIf="maxReactionsPost">\n\n      <ion-card-header text-wrap id="ion-card-header3">\n\n        Top Post by Reactions in {{sortByTime}}\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            {{maxReactionsPost.created_time}}\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-grid style="margin-top:-10px;">\n\n              <ion-row>\n\n                <ion-col>\n\n                  <img src="assets/imgs/icon/flame.png" style="width:24px;">\n\n                </ion-col>\n\n                <ion-col>\n\n                  {{maxReactionsPost.total_reactions}}</ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-item text-wrap>{{maxReactionsMsg}}</ion-item>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n  <div *ngIf="pageTriger.match(\'list\')" class=\'dashboardContent\'>\n\n    <div [ngSwitch]="typeData">\n\n      <div *ngSwitchCase="\'commentsData\'">\n\n        <ion-list *ngFor="let item of commentsData">\n\n          <ion-card no-padding>\n\n            <ion-card-content no-padding>\n\n              <ion-grid no-padding>\n\n                <ion-row>\n\n                  <ion-col>\n\n                    <ion-item>\n\n                      <ion-avatar>\n\n                        <img id="item-avatar" src="http://graph.facebook.com/{{item._uid}}/picture?type=square">\n\n                      </ion-avatar>\n\n                    </ion-item>\n\n                  </ion-col>\n\n                  <ion-col col-8>\n\n                    <ion-card-header (click)="presentProfileModal(item._uid,item.name)" id="ion-card-header2">\n\n                      <ion-label text-wrap style="word-wrap: break-word">{{item.name}}</ion-label>\n\n                    </ion-card-header>\n\n                    <ion-item style="margin-top:-30px">\n\n                      <ion-grid style="margin-top:-10px;">\n\n                        <ion-row>\n\n                          <ion-col>\n\n                            <label style="margin-right:5px">Comments</label>\n\n                          </ion-col>\n\n                          <ion-col>\n\n                            <img src="assets/imgs/icon/chat.png" style="width:24px;">\n\n                          </ion-col>\n\n                          <ion-col>\n\n                            <label>{{item.comments}}</label>\n\n                          </ion-col>\n\n                        </ion-row>\n\n                      </ion-grid>\n\n                    </ion-item>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-list>\n\n      </div>\n\n      <div *ngSwitchCase="\'likesData\'">\n\n        <ion-list *ngFor="let item of reactionsData">\n\n          <ion-card no-padding>\n\n            <ion-card-content no-padding>\n\n              <ion-grid no-padding>\n\n                <ion-row>\n\n                  <ion-col>\n\n                    <ion-item>\n\n                      <ion-avatar>\n\n                        <img id="item-avatar2" src="http://graph.facebook.com/{{item._uid}}/picture?type=square">\n\n                      </ion-avatar>\n\n                    </ion-item>\n\n                  </ion-col>\n\n                  <ion-col col-8>\n\n                    <ion-card-header text-wrap (click)="presentProfileModal(item._uid,item.name)" id="ion-card-header2">\n\n                        <ion-grid style="margin-top:-10px;">\n\n                          <ion-row>\n\n                              <ion-col style="word-wrap: break-word">{{item.name}}</ion-col>\n\n                            <ion-col col-4>\n\n                                <button ion-button clear small>\n\n                              <img src="assets/imgs/icon/flame.png" style="width:24px;">\n\n                              <label>{{item.total}}</label>\n\n                              </button>\n\n                            </ion-col>\n\n                          </ion-row>\n\n                        </ion-grid>\n\n                    </ion-card-header>\n\n                  </ion-col>\n\n                </ion-row>\n\n                <ion-row style="text-align: center;">\n\n                  <ion-col *ngIf="item.like>0" col-2>\n\n                    <button ion-button clear small>\n\n                      <img src="assets/imgs/icon/like.png" style="width:24px;margin-right:3px;">\n\n                      <label>{{item.like}}</label>\n\n                    </button>\n\n                  </ion-col>\n\n                  <ion-col *ngIf="item.love>0" col-2>\n\n                    <button ion-button clear small>\n\n                      <img src="assets/imgs/icon/heart.png" style="width:24px;margin-right:3px;">\n\n                      <label>{{item.love}}</label>\n\n                    </button>\n\n                  </ion-col>\n\n                  <ion-col *ngIf="item.wow>0" col-2>\n\n                    <button ion-button clear small>\n\n                      <img src="assets/imgs/icon/surprised.png" style="width:24px;margin-right:3px;">\n\n\n\n                      <label>{{item.wow}}</label>\n\n                    </button>\n\n                  </ion-col>\n\n                  <ion-col *ngIf="item.haha>0" col-2>\n\n                    <button ion-button clear small>\n\n                      <img src="assets/imgs/icon/laughing.png" style="width:24px;margin-right:3px;">\n\n\n\n                      <label>{{item.haha}}</label>\n\n                    </button>\n\n                  </ion-col>\n\n                  <ion-col *ngIf="item.sad>0" col-2>\n\n                    <button ion-button clear small>\n\n                      <img src="assets/imgs/icon/crying.png" style="width:24px;margin-right:3px;">\n\n\n\n                      <label>{{item.sad}}</label>\n\n                    </button>\n\n                  </ion-col>\n\n                  <ion-col *ngIf="item.angry>0" col-2>\n\n                    <button ion-button clear small>\n\n                      <img src="assets/imgs/icon/angry.png" style="width:24px;margin-right:3px;">\n\n\n\n                      <label>{{item.angry}}</label>\n\n                    </button>\n\n                  </ion-col>\n\n                  <ion-col *ngIf="item.thankful>0" col-2>\n\n                    <button ion-button clear small>\n\n                      <img src="assets/imgs/icon/flower.png" style="width:24px;margin-right:3px;">\n\n\n\n                      <label style="margin-left:-10px;">{{item.thankful}}</label>\n\n                    </button>\n\n                  </ion-col>\n\n                  <ion-col *ngIf="item.like==0" col-2>\n\n                    <button ion-button clear small>\n\n                      <img src="assets/imgs/icon/like.png" style="width:24px;opacity: 0.5;">\n\n                    </button>\n\n                  </ion-col>\n\n                  <ion-col *ngIf="item.love==0" col-2>\n\n                    <button ion-button clear small>\n\n                      <img src="assets/imgs/icon/heart.png" style="width:24px;opacity: 0.5;">\n\n                    </button>\n\n                  </ion-col>\n\n                  <ion-col *ngIf="item.wow==0" col-2>\n\n                    <button ion-button clear small>\n\n                      <img src="assets/imgs/icon/surprised.png" style="width:24px;opacity: 0.5;">\n\n                    </button>\n\n                  </ion-col>\n\n                  <ion-col *ngIf="item.haha==0" col-2>\n\n                    <button ion-button clear small>\n\n                      <img src="assets/imgs/icon/laughing.png" style="width:24px;opacity: 0.5;">\n\n                    </button>\n\n                  </ion-col>\n\n                  <ion-col *ngIf="item.sad==0" col-2>\n\n                    <button ion-button clear small>\n\n                      <img src="assets/imgs/icon/crying.png" style="width:24px;opacity: 0.5;">\n\n                    </button>\n\n                  </ion-col>\n\n                  <ion-col *ngIf="item.angry==0" col-2>\n\n                    <button ion-button clear small>\n\n                      <img src="assets/imgs/icon/angry.png" style="width:24px;opacity: 0.5;">\n\n                    </button>\n\n                  </ion-col>\n\n                  <ion-col *ngIf="item.thankful>0" col-2>\n\n                    <button ion-button clear small>\n\n                      <img src="assets/imgs/icon/flower.png" style="width:24px;">\n\n                    </button>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-list>\n\n      </div>\n\n      <div>\n\n        <ion-col>\n\n          <button ion-button *ngIf="!isAll" (click)="getAllTops()" color="facebook">See more ...</button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-select [(ngModel)]="sortByTime" (ionChange)="getDashboard()">\n\n            <ion-option>Last 1 day</ion-option>\n\n            <ion-option>Last 1 week</ion-option>\n\n            <ion-option>Last 1 month</ion-option>\n\n            <ion-option>Last 3 months</ion-option>\n\n            <ion-option>Last 6 months</ion-option>\n\n            <ion-option>Last 1 year</ion-option>\n\n            <ion-option>Last 2 years</ion-option>\n\n          </ion-select>\n\n        </ion-col>\n\n\n\n\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n\n  <div class="btn-wrapper">\n\n    <button ion-button icon-only color="soft" (click)=\'trigerPage()\'>\n\n      <ion-icon name="arrow-up" *ngIf="pageTriger.match(\'list\')"></ion-icon>\n\n      <ion-icon name="arrow-down" *ngIf="pageTriger.match(\'chart\')"></ion-icon>\n\n    </button>\n\n  </div>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\pages\dashboard\dashboard.html"*/,
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

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http_provider__ = __webpack_require__(50);
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
    function FriendsPage(navCtrl, navParams, httpProvider, loadingController, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.loadingController = loadingController;
        this.platform = platform;
    }
    FriendsPage.prototype.ionViewDidLoad = function () {
        if (this.platform.is('cordova'))
            this.getFriends();
    };
    FriendsPage.prototype.getFriends = function () {
        var _this = this;
        var loading = this.loadingController.create({ content: "Loading,please wait..." });
        loading.present();
        this.httpProvider.getFriends().then(function (result) {
            if (result.error)
                if (result.error.type == "OAuthException") {
                    console.log("Token expired!!!");
                    return _this.getFriends();
                }
            _this.newsData = result.data;
            console.log("Success : " + JSON.stringify(result.data[0].name));
            loading.dismissAll();
        }, function (err) {
            console.error("Error : " + err);
            loading.dismissAll();
        });
    };
    return FriendsPage;
}());
FriendsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-friends',template:/*ion-inline-start:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\pages\friends\friends.html"*/'<!--\n  Generated template for the FriendsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content style="background:url(assets/imgs/background2.jpg);background-size:cover;">\n  <ion-header>\n      <ion-toolbar class="btn-wrapper">\n          <ion-title>Your Friends Who Use this app</ion-title>\n      </ion-toolbar>\n    </ion-header>\n<div style="margin-top: 75px;">\n  <ion-list *ngFor="let item of newsData">\n    <ion-card no-padding>\n      <ion-card-content no-padding>\n        <ion-grid no-padding>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-avatar>\n                  <img id="item-avatar2" src="http://graph.facebook.com/{{item.id}}/picture?type=square">\n                </ion-avatar>\n              </ion-item>\n            </ion-col>\n            <ion-col col-8>\n              <ion-card-header text-wrap id="ion-card-header2">\n                <ion-col style="word-wrap: break-word">{{item.name}}</ion-col>\n              </ion-card-header>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n</div>'/*ion-inline-end:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\pages\friends\friends.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_http_http_provider__["a" /* HttpProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
], FriendsPage);

//# sourceMappingURL=friends.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewfeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_http_http_provider__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_streaming_media__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
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
    function NewfeedPage(navCtrl, navParams, httpProvider, loadingController, http, platform, streamingMedia) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.loadingController = loadingController;
        this.http = http;
        this.platform = platform;
        this.streamingMedia = streamingMedia;
        // stackConfig: StackConfig;
        this.recentCard = '';
        //for retry getData
        this.retryTime = 0;
        this.nextData = false;
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
        this.videoOptions = {
            successCallback: function () { console.log('Video played'); },
            errorCallback: function (e) { console.log('Error streaming:' + JSON.stringify(e)); }
        };
    }
    //call when refresh
    NewfeedPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.retryTime = 0;
        //get data again
        if (this.platform.is('cordova')) {
            this.getPosts();
        }
        else {
            this.getPostForTest();
        }
        refresher.complete();
    };
    NewfeedPage.prototype.getPostForTest = function () {
        var _this = this;
        var loading = this.loadingController.create({ content: "Loading,please wait..." });
        loading.present();
        this.httpProvider.getPostForTest().subscribe(
        //call if get httpRequest success (But not error from getData from facebook such as access token expired!!)
        function (result) {
            //check if server send error back
            //assign data to view
            _this.newsData = result.newsfeed.data;
            console.log(_this.newsData);
            try {
                for (var _i = 0, _a = _this.newsData; _i < _a.length; _i++) {
                    var data = _a[_i];
                    var newDate = new Date(data.created_time);
                    data.created_time = newDate.toDateString();
                }
            }
            catch (error) {
            }
            console.log("Success : " + JSON.stringify(result));
            loading.dismissAll();
            _this.retryTime = 0;
        }, function (err) {
            //call if fail to get request
            console.error("Error : " + err);
            alert("Can't get Data from the server: " + err);
            loading.dismissAll();
        }, function () {
            console.log('getData completed');
        });
    };
    NewfeedPage.prototype.getPosts = function () {
        var _this = this;
        var loading = this.loadingController.create({ content: "Loading,please wait..." });
        loading.present();
        this.httpProvider.getPosts().subscribe(
        //call if get httpRequest success (But not error from getData from facebook such as access token expired!!)
        function (result) {
            loading.dismissAll();
            console.log(result);
            //check if server send error back
            if (result.__proto__ === Object) {
                //check if token expire?
                console.log("error!!!");
                _this.retryTime += 1;
                if (_this.retryTime < 3)
                    return _this.getPosts();
                else
                    console.log("Access Token expired!!!");
            }
            //assign data to view
            _this.newsData = result.newsfeed.data;
            try {
                for (var _i = 0, _a = _this.newsData; _i < _a.length; _i++) {
                    var data = _a[_i];
                    var newDate = new Date(data.created_time);
                    data.created_time = newDate.toDateString();
                }
            }
            catch (error) {
            }
            console.log("Success : " + JSON.stringify(result));
            _this.retryTime = 0;
            if (result.next) {
                _this.nextData = true;
            }
            else {
                _this.nextData = false;
            }
        }, function (err) {
            //call if fail to get request
            console.error("Error : " + err);
            alert("Can't get Data from the server: " + err);
            loading.dismissAll();
        }, function () {
            console.log('getData completed');
        });
    };
    NewfeedPage.prototype.getPostsNext = function (infiniteScroll) {
        var _this = this;
        if (this.nextData) {
            this.httpProvider.getPostsNext().subscribe(
            //call if get httpRequest success (But not error from getData from facebook such as access token expired!!)
            function (result) {
                console.log(result);
                //check if server send error back
                if (result.__proto__ === Object) {
                    //check if token expire?
                    console.log("error!!!");
                    _this.retryTime += 1;
                    if (_this.retryTime < 3)
                        return _this.getPostsNext(infiniteScroll);
                    else
                        console.log("Access Token expired!!!");
                }
                //assign data to view
                try {
                    for (var _i = 0, _a = result.newsfeed.data; _i < _a.length; _i++) {
                        var data = _a[_i];
                        var newDate = new Date(data.created_time);
                        data.created_time = newDate.toDateString();
                        _this.newsData.push(data);
                    }
                }
                catch (error) {
                }
                if (result.next) {
                    _this.nextData = true;
                }
                else {
                    _this.nextData = false;
                }
                console.log("Success : " + JSON.stringify(result));
                _this.retryTime = 0;
                infiniteScroll.complete();
            }, function (err) {
                //call if fail to get request
                console.error("Error : " + err);
                alert("Can't get Data from the server: " + err);
            }, function () {
                console.log('getData completed');
            });
        }
        else {
            this.httpProvider.getPosts().subscribe(
            //call if get httpRequest success (But not error from getData from facebook such as access token expired!!)
            function (result) {
                console.log(result);
                //check if server send error back
                if (result.__proto__ === Object) {
                    //check if token expire?
                    console.log("error!!!");
                    _this.retryTime += 1;
                    if (_this.retryTime < 3)
                        return _this.getPosts();
                    else
                        console.log("Access Token expired!!!");
                }
                //assign data to view
                try {
                    for (var _i = 0, _a = result.newsfeed.data; _i < _a.length; _i++) {
                        var data = _a[_i];
                        var newDate = new Date(data.created_time);
                        data.created_time = newDate.toDateString();
                        _this.newsData.push(data);
                    }
                }
                catch (error) {
                }
                if (result.next) {
                    _this.nextData = true;
                }
                else {
                    _this.nextData = false;
                }
                console.log("Success : " + JSON.stringify(result));
                _this.retryTime = 0;
            }, function (err) {
                //call if fail to get request
                console.error("Error : " + err);
                alert("Can't get Data from the server: " + err);
            }, function () {
                console.log('getData completed');
            });
        }
    };
    NewfeedPage.prototype.setLike = function () {
        this.httpProvider.setLike().subscribe(function (value) {
            console.log(value);
        });
    };
    NewfeedPage.prototype.playVideo = function (uid) {
        var _this = this;
        this.httpProvider.getSource(uid).then(function (result) {
            //alert(JSON.stringify(result));
            _this.streamingMedia.playVideo(result.source, _this.videoOptions);
        });
    };
    NewfeedPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            _this.getPostsNext(infiniteScroll);
            console.log('Async operation has ended');
        }, 500);
    };
    NewfeedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad newfeedPage');
        if (this.platform.is('cordova')) {
            this.getPosts();
        }
        else {
            this.getPostForTest();
        }
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
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Content */])
], NewfeedPage.prototype, "content", void 0);
NewfeedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-newfeed',template:/*ion-inline-start:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\pages\newfeed\newfeed.html"*/'<!--\n\n  Generated template for the NewfeedPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-content no-bounce style="background:url(assets/imgs/background2.jpg);background-size:cover;">\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-list *ngFor="let item of newsData">\n\n\n\n    <ion-card>\n\n\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src={{item.page_picture}}>\n\n        </ion-avatar>\n\n        <h2>{{item.page_name}}</h2>\n\n        <p>{{item.created_time}}</p>\n\n      </ion-item>\n\n\n\n      <img  (click)=\'playVideo(item.id)\' src={{item.full_picture}} />\n\n\n\n      <ion-card-content>\n\n        <div *ngFor="let str of item.message.split(\'\n\')">\n\n          {{ str }}\n\n    </div>\n\n      </ion-card-content>\n\n      <div>\n\n        <ion-row style="border-bottom: 1px solid gray;">\n\n\n\n          <ion-col col-2>\n\n          <ion-label style="margin-left:10px;">\n\n            <img src="assets/imgs/icon/flame.png" style="width:24px;">\n\n          </ion-label>\n\n          </ion-col>\n\n          <ion-col col-3>\n\n          <ion-label>{{item.reactions_summary}}</ion-label>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <ion-label>\n\n            <img src="assets/imgs/icon/chat.png" style="width:24px;">\n\n          </ion-label>\n\n        </ion-col>\n\n        <ion-col col-5>\n\n          <ion-label>{{item.comments_summary}}</ion-label>\n\n        </ion-col>\n\n\n\n        </ion-row>\n\n      </div>\n\n      <ion-row>\n\n        <ion-col>\n\n          <button ion-button full icon-center clear small>\n\n            <img src="assets/imgs/icon/like.png" style="width:24px;margin-right:5px">\n\n            <div>Likes</div>\n\n          </button>\n\n        </ion-col>\n\n        <button class="button circle text-center">\n\n          <i class="ion-crop"></i>\n\n        </button>\n\n        <ion-col>\n\n          <button ion-button full icon-center clear small>\n\n            <img src="assets/imgs/icon/chat.png" style="width:24px;margin-right:5px">\n\n            <div>Comments</div>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </ion-card>\n\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more feed..."></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\pages\newfeed\newfeed.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_0__providers_http_http_provider__["a" /* HttpProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__providers_http_http_provider__["a" /* HttpProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_streaming_media__["a" /* StreamingMedia */]])
], NewfeedPage);

//# sourceMappingURL=newfeed.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(82);
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
    function SettingPage(navCtrl, navParams, facebook, app, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.facebook = facebook;
        this.app = app;
        this.loadingController = loadingController;
        this.isShowCredit = false;
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
        var _this = this;
        var loading = this.loadingController.create({ content: "Logging Out" });
        loading.present();
        this.facebook.logout().then(function (response) {
            loading.dismissAll();
            _this.app.getRootNav().pop();
        }, function (error) {
            console.log(error);
        });
    };
    SettingPage.prototype.showCredit = function () {
        this.isShowCredit = !this.isShowCredit;
    };
    return SettingPage;
}());
SettingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-setting',template:/*ion-inline-start:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\pages\setting\setting.html"*/'<!--\n  Generated template for the SettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-button full clear (click)=\'logout()\'>Log Out</button>\n    <button ion-button *ngIf=\'!isShowCredit\' (click)=\'showCredit()\'>Show Credit</button>\n    <button ion-button *ngIf=\'isShowCredit\' (click)=\'showCredit()\'>Hide Credit</button>\n    <ion-card *ngIf=\'isShowCredit\'>\n      <div>Icons made by\n        <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from\n        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by\n        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"\n          target="_blank">CC 3.0 BY</a>\n      </div>\n      <div>Icons made by\n        <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from\n        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by\n        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"\n          target="_blank">CC 3.0 BY</a>\n      </div>\n      <div>Icons made by\n        <a href="https://www.flaticon.com/authors/pixel-buddha" title="Pixel Buddha">Pixel Buddha</a> from\n        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by\n        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"\n          target="_blank">CC 3.0 BY</a>\n      </div>\n      <div>Icons made by\n        <a href="http://www.freepik.com" title="Freepik">Freepik</a> from\n        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by\n        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"\n          target="_blank">CC 3.0 BY</a>\n      </div>\n      <div>Icons made by\n        <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> from\n        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by\n        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"\n          target="_blank">CC 3.0 BY</a>\n      </div>\n    </ion-card>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\pages\setting\setting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], SettingPage);

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(403);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_streaming_media__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_newfeed_newfeed__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_friends_friends__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_setting_setting__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_http_http_provider__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_facebook__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_swing__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_time_time__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_screen_orientation__ = __webpack_require__(122);
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
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__["a" /* DashboardPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_newfeed_newfeed__["a" /* NewfeedPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_friends_friends__["a" /* FriendsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_setting_setting__["a" /* SettingPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_15_angular2_swing__["SwingModule"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
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
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__["a" /* DashboardPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_newfeed_newfeed__["a" /* NewfeedPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_friends_friends__["a" /* FriendsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_setting_setting__["a" /* SettingPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_streaming_media__["a" /* StreamingMedia */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_12__providers_http_http_provider__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_16__providers_time_time__["a" /* TimeProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_screen_orientation__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
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
        this.facebook.browserInit(this.APP_ID, "v2.11");
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
    HttpProvider.prototype.getUidForTest = function () {
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
    HttpProvider.prototype.getUid = function () {
        return this.facebook.api("/me", []);
    };
    HttpProvider.prototype.getToken = function () {
        return this.facebook.getAccessToken();
    };
    //get user token from facebook
    HttpProvider.prototype.getTokenForTest = function () {
        //for test in computer
        this.accessToken = 'EAACEdEose0cBACR0QyqI0sYfoFkZCnH2scHoyCbaIhZC40nLD6j5livGiK8chEQwImhJXwWkkIiqQWrtDGSW1ZBSD2y1olZAyddyzTuGprQ9m50FCCWJA2hNnXqKCFWjhaZBygoVecSjZCQQMxmRH1lLjhpqmSDNHcIGJkppYTa61ZA29rtpQ0b7Tvv8KE1mTHQxzhuVMONKgZDZD';
    };
    //set url for http request from python server
    HttpProvider.prototype.setHttpRequest = function (type, top, hour, day, month, year) {
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
    HttpProvider.prototype.getDashboard = function (top, hour, day, month, year) {
        var _this = this;
        //set header to authorize with access token
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].fromPromise(this.getToken()).mergeMap(function (token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
            headers.append('access_token', token);
            return _this.http.get(_this.setHttpRequest('dashboard', top, hour, day, month, year), { headers: headers }).timeout(180000)
                .map(function (res) { return res.json(); });
        });
    };
    HttpProvider.prototype.getDashboardForTest = function (top, hour, day, month, year) {
        //set header to authorize with access token
        this.getTokenForTest();
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('access_token', this.accessToken);
        return this.http.get(this.setHttpRequest('dashboard', top, hour, day, month, year), { headers: headers }).timeout(180000)
            .map(function (res) { return res.json(); });
    };
    HttpProvider.prototype.getDashboardAllTops = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].fromPromise(this.getUid()).mergeMap(function (obj) {
            _this.uid = obj.id;
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].fromPromise(_this.getToken()).mergeMap(function (token) {
                _this.accessToken = token;
                var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
                headers.append('access_token', _this.accessToken);
                return _this.http.get(_this.setHttpRequest('dashboard/getalltops/' + _this.uid, '', '0', '0', '0', '0'), { headers: headers }).timeout(180000)
                    .map(function (res) { return res.json(); });
            });
        });
    };
    HttpProvider.prototype.getDashboardAllTopsFortest = function () {
        this.getUidForTest();
        this.getTokenForTest();
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('access_token', this.accessToken);
        return this.http.get(this.setHttpRequest('dashboard/getalltops/' + this.uid, '', '0', '0', '0', '0'), { headers: headers }).timeout(180000)
            .map(function (res) { return res.json(); });
    };
    //feature for newfeed??
    HttpProvider.prototype.setLike = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].fromPromise(this.getToken()).mergeMap(function (token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
            headers.append('access_token', token);
            return _this.http.get(_this.setHttpRequest('likes', '', '0', '0', '0', '0'), { headers: headers });
        });
    };
    HttpProvider.prototype.getPostForTest = function () {
        this.getUidForTest();
        this.getTokenForTest();
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        console.log(this.uid);
        console.log(this.accessToken);
        headers.append('access_token', this.accessToken);
        // return this.http.get(
        //   this.setHttpRequest("newsfeed/" + uid, '', '0', '0', '0', '0'), { headers: headers })
        //   .map(res => res.json());
        return this.http.get(this.setHttpRequest("newsfeed/" + this.uid, '', '0', '0', '0', '0'), { headers: headers }).timeout(180000)
            .map(function (res) { return res.json(); });
    };
    HttpProvider.prototype.getPosts = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].fromPromise(this.getUid()).mergeMap(function (obj) {
            _this.uid = obj.id;
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].fromPromise(_this.getToken()).mergeMap(function (token) {
                _this.accessToken = token;
                var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
                console.log(_this.uid);
                console.log(_this.accessToken);
                headers.append('access_token', _this.accessToken);
                return _this.http.get(_this.setHttpRequest("newsfeed/" + _this.uid, '', '0', '0', '0', '0'), { headers: headers }).timeout(180000)
                    .map(function (res) { return res.json(); });
            });
        });
    };
    HttpProvider.prototype.getPostsNext = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].fromPromise(this.getUid()).mergeMap(function (obj) {
            _this.uid = obj.id;
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].fromPromise(_this.getToken()).mergeMap(function (token) {
                _this.accessToken = token;
                var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
                console.log(_this.uid);
                console.log(_this.accessToken);
                headers.append('access_token', _this.accessToken);
                return _this.http.get(_this.setHttpRequest("newsfeed/next/" + _this.uid, '', '0', '0', '0', '0'), { headers: headers }).timeout(180000)
                    .map(function (res) { return res.json(); });
            });
        });
    };
    HttpProvider.prototype.getCover = function (uid) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].fromPromise(this.getToken()).mergeMap(function (token) {
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].fromPromise(_this.facebook.api('/' + uid + '?fields=cover', ['user_posts']));
        });
    };
    HttpProvider.prototype.getSource = function (uid) {
        return this.facebook.api('/' + uid + '?fields=source', ['user_posts']);
    };
    HttpProvider.prototype.getContext = function (uid) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].fromPromise(this.facebook.api('/' + uid + '?fields=context', ['user_posts']));
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
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
], HttpProvider);

//# sourceMappingURL=http-provider.js.map

/***/ }),

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 231,
	"./af.js": 231,
	"./ar": 232,
	"./ar-dz": 233,
	"./ar-dz.js": 233,
	"./ar-kw": 234,
	"./ar-kw.js": 234,
	"./ar-ly": 235,
	"./ar-ly.js": 235,
	"./ar-ma": 236,
	"./ar-ma.js": 236,
	"./ar-sa": 237,
	"./ar-sa.js": 237,
	"./ar-tn": 238,
	"./ar-tn.js": 238,
	"./ar.js": 232,
	"./az": 239,
	"./az.js": 239,
	"./be": 240,
	"./be.js": 240,
	"./bg": 241,
	"./bg.js": 241,
	"./bn": 242,
	"./bn.js": 242,
	"./bo": 243,
	"./bo.js": 243,
	"./br": 244,
	"./br.js": 244,
	"./bs": 245,
	"./bs.js": 245,
	"./ca": 246,
	"./ca.js": 246,
	"./cs": 247,
	"./cs.js": 247,
	"./cv": 248,
	"./cv.js": 248,
	"./cy": 249,
	"./cy.js": 249,
	"./da": 250,
	"./da.js": 250,
	"./de": 251,
	"./de-at": 252,
	"./de-at.js": 252,
	"./de-ch": 253,
	"./de-ch.js": 253,
	"./de.js": 251,
	"./dv": 254,
	"./dv.js": 254,
	"./el": 255,
	"./el.js": 255,
	"./en-au": 256,
	"./en-au.js": 256,
	"./en-ca": 257,
	"./en-ca.js": 257,
	"./en-gb": 258,
	"./en-gb.js": 258,
	"./en-ie": 259,
	"./en-ie.js": 259,
	"./en-nz": 260,
	"./en-nz.js": 260,
	"./eo": 261,
	"./eo.js": 261,
	"./es": 262,
	"./es-do": 263,
	"./es-do.js": 263,
	"./es.js": 262,
	"./et": 264,
	"./et.js": 264,
	"./eu": 265,
	"./eu.js": 265,
	"./fa": 266,
	"./fa.js": 266,
	"./fi": 267,
	"./fi.js": 267,
	"./fo": 268,
	"./fo.js": 268,
	"./fr": 269,
	"./fr-ca": 270,
	"./fr-ca.js": 270,
	"./fr-ch": 271,
	"./fr-ch.js": 271,
	"./fr.js": 269,
	"./fy": 272,
	"./fy.js": 272,
	"./gd": 273,
	"./gd.js": 273,
	"./gl": 274,
	"./gl.js": 274,
	"./gom-latn": 275,
	"./gom-latn.js": 275,
	"./he": 276,
	"./he.js": 276,
	"./hi": 277,
	"./hi.js": 277,
	"./hr": 278,
	"./hr.js": 278,
	"./hu": 279,
	"./hu.js": 279,
	"./hy-am": 280,
	"./hy-am.js": 280,
	"./id": 281,
	"./id.js": 281,
	"./is": 282,
	"./is.js": 282,
	"./it": 283,
	"./it.js": 283,
	"./ja": 284,
	"./ja.js": 284,
	"./jv": 285,
	"./jv.js": 285,
	"./ka": 286,
	"./ka.js": 286,
	"./kk": 287,
	"./kk.js": 287,
	"./km": 288,
	"./km.js": 288,
	"./kn": 289,
	"./kn.js": 289,
	"./ko": 290,
	"./ko.js": 290,
	"./ky": 291,
	"./ky.js": 291,
	"./lb": 292,
	"./lb.js": 292,
	"./lo": 293,
	"./lo.js": 293,
	"./lt": 294,
	"./lt.js": 294,
	"./lv": 295,
	"./lv.js": 295,
	"./me": 296,
	"./me.js": 296,
	"./mi": 297,
	"./mi.js": 297,
	"./mk": 298,
	"./mk.js": 298,
	"./ml": 299,
	"./ml.js": 299,
	"./mr": 300,
	"./mr.js": 300,
	"./ms": 301,
	"./ms-my": 302,
	"./ms-my.js": 302,
	"./ms.js": 301,
	"./my": 303,
	"./my.js": 303,
	"./nb": 304,
	"./nb.js": 304,
	"./ne": 305,
	"./ne.js": 305,
	"./nl": 306,
	"./nl-be": 307,
	"./nl-be.js": 307,
	"./nl.js": 306,
	"./nn": 308,
	"./nn.js": 308,
	"./pa-in": 309,
	"./pa-in.js": 309,
	"./pl": 310,
	"./pl.js": 310,
	"./pt": 311,
	"./pt-br": 312,
	"./pt-br.js": 312,
	"./pt.js": 311,
	"./ro": 313,
	"./ro.js": 313,
	"./ru": 314,
	"./ru.js": 314,
	"./sd": 315,
	"./sd.js": 315,
	"./se": 316,
	"./se.js": 316,
	"./si": 317,
	"./si.js": 317,
	"./sk": 318,
	"./sk.js": 318,
	"./sl": 319,
	"./sl.js": 319,
	"./sq": 320,
	"./sq.js": 320,
	"./sr": 321,
	"./sr-cyrl": 322,
	"./sr-cyrl.js": 322,
	"./sr.js": 321,
	"./ss": 323,
	"./ss.js": 323,
	"./sv": 324,
	"./sv.js": 324,
	"./sw": 325,
	"./sw.js": 325,
	"./ta": 326,
	"./ta.js": 326,
	"./te": 327,
	"./te.js": 327,
	"./tet": 328,
	"./tet.js": 328,
	"./th": 329,
	"./th.js": 329,
	"./tl-ph": 330,
	"./tl-ph.js": 330,
	"./tlh": 331,
	"./tlh.js": 331,
	"./tr": 332,
	"./tr.js": 332,
	"./tzl": 333,
	"./tzl.js": 333,
	"./tzm": 334,
	"./tzm-latn": 335,
	"./tzm-latn.js": 335,
	"./tzm.js": 334,
	"./uk": 336,
	"./uk.js": 336,
	"./ur": 337,
	"./ur.js": 337,
	"./uz": 338,
	"./uz-latn": 339,
	"./uz-latn.js": 339,
	"./uz.js": 338,
	"./vi": 340,
	"./vi.js": 340,
	"./x-pseudo": 341,
	"./x-pseudo.js": 341,
	"./yo": 342,
	"./yo.js": 342,
	"./zh-cn": 343,
	"./zh-cn.js": 343,
	"./zh-hk": 344,
	"./zh-hk.js": 344,
	"./zh-tw": 345,
	"./zh-tw.js": 345
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
webpackContext.id = 724;

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_facebook__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_alert_alert_controller__ = __webpack_require__(97);
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
    function MyApp(platform, statusBar, splashScreen, app, alertCtrl, facebook, loadingController) {
        var _this = this;
        this.facebook = facebook;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            platform.registerBackButtonAction(function () {
                var nav = app.getActiveNavs()[0];
                var activeView = nav.getActive();
                if (activeView.name === "TabsPage") {
                    // if (nav.canGoBack()) { //Can we go back?
                    //   nav.pop();
                    // } else {
                    var alert_1 = alertCtrl.create({
                        title: 'App termination',
                        message: 'Do you want to Log out from the app?',
                        buttons: [{
                                text: 'Cancel',
                                role: 'cancel',
                                handler: function () {
                                    console.log('Application Logout prevented!');
                                }
                            }, {
                                text: 'Log out',
                                handler: function () {
                                    var loading = loadingController.create({ content: "Logging Out..." });
                                    loading.present();
                                    _this.facebook.logout().then(function (response) {
                                        loading.dismiss();
                                        var nav = app.getActiveNav();
                                        nav.popToRoot();
                                    }, function (error) {
                                    });
                                }
                            }]
                    });
                    alert_1.present();
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_alert_alert_controller__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(81);
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

},[398]);
//# sourceMappingURL=main.js.map