webpackJsonp([7],{

/***/ 147:
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
    TimeProvider.prototype.getTime = function (date) {
        return new Date(date).toDateString();
        ;
    };
    TimeProvider.prototype.getCurrentTime = function () {
        return Date.now();
    };
    TimeProvider.prototype.getDiffTime = function (date) {
        var time;
        var end = Date.now();
        var start = new Date(date).getTime();
        var diff = end - start;
        var diff_hours = Math.floor(diff / 3600000);
        var diff_mins = Math.floor((diff % 3600000) / 60000);
        var diff_days = Math.floor(diff_hours / 24);
        // console.log('diff ='+new Date(diff));
        // console.log('end ='+new Date(end));
        // console.log('start ='+new Date(start));
        // console.log(diff);
        // console.log(diff.getFullYear);
        // console.log(diff_days);
        // console.log(diff_mins);
        // console.log(diff_hours);
        if (diff_days >= 1) {
            return new Date(date).toDateString();
        }
        else if (diff_hours >= 2) {
            time = String(diff_hours) + ' hrs';
            return time;
        }
        else if (diff_hours == 1) {
            time = String(diff_hours) + ' hr';
            return time;
        }
        else if (diff_mins >= 2) {
            time = String(diff_mins) + ' mins';
            return time;
        }
        else if (diff_mins == 1) {
            time = String(diff_mins) + ' min';
            return time;
        }
        else if (diff_mins < 1) {
            time = 'Just now';
            return time;
        }
    };
    return TimeProvider;
}());
TimeProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], TimeProvider);

//# sourceMappingURL=time.js.map

/***/ }),

/***/ 158:
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
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		775,
		2
	],
	"../pages/dashboard/dashboard.module": [
		776,
		3
	],
	"../pages/friends/friends.module": [
		777,
		6
	],
	"../pages/newfeed/newfeed.module": [
		778,
		5
	],
	"../pages/setting/setting.module": [
		779,
		4
	],
	"../pages/tabs/tabs.module": [
		780,
		1
	],
	"../pages/user-profile/user-profile.module": [
		781,
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
webpackAsyncContext.id = 204;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http_provider__ = __webpack_require__(51);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http_provider__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http_provider__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(123);
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
    // @ViewChild(Navbar) navBar: Navbar;
    function DashboardPage(navCtrl, navParams, httpProvider, loadingController, modalCtrl, platform, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.loadingController = loadingController;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.storage = storage;
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
    //call when view did load
    DashboardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad DashboardPage');
        // this.navBar.backButtonClick = (e: UIEvent) => {
        //   console.log("Back button clicked");
        //   this.navCtrl.parent.viewCtrl.dismiss();
        // };
        this.getSaveStorage();
        this.storage.get('hasDashboardData').then(function (val) {
            if (val != null) {
                _this.hasData = val;
            }
            else {
                _this.hasData = false;
            }
            if (_this.platform.is('cordova')) {
                _this.getDashboard();
                _this.setLike();
            }
            else {
                _this.getDashboardForTest();
            }
        });
    };
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
    //get Facebook Data from httpProvider
    DashboardPage.prototype.getDashboard = function () {
        var _this = this;
        this.timeSwitchCase();
        var loading = this.loadingController.create({
            content: "LOADING, Please wait...",
        });
        if (!this.hasData) {
            loading.present();
        }
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
                            if (!_this.hasData)
                                loading.dismissAll();
                            return _this.getDashboard();
                        }
                        else
                            console.log("Access Token expired!!!");
                    }
                }
                if (result.id) {
                    if (!_this.hasData)
                        loading.dismissAll();
                    return null;
                }
                else {
                    //assign data to view
                    _this.commentsData = result.comments.data;
                    _this.reactionsData = result.reactions.data;
                    _this.postsSummaryData = result.post_summary.data;
                    _this.createTime = [];
                    _this.total_comments = [];
                    _this.total_reactions = [];
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
                    _this.storage.set('commentsData', _this.commentsData);
                    _this.storage.set('reactionsData', _this.reactionsData);
                    _this.storage.set('postsSummaryData', _this.postsSummaryData);
                    _this.storage.set('createTime', _this.createTime);
                    _this.storage.set('total_comments', _this.total_comments);
                    _this.storage.set('total_reactions', _this.total_reactions);
                    _this.storage.set('hasDashboardData', true);
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
                    if (!_this.hasData)
                        loading.dismissAll();
                    _this.hasData = true;
                }
            }, function (err) {
                //call if fail to get request
                console.error("Error : " + err);
                alert("Can't get Data from the server: " + err);
                if (!_this.hasData)
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
            content: "LOADING, Please wait...",
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
                    _this.getWordCloudForTest();
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
    DashboardPage.prototype.getWordCloud = function () {
        var _this = this;
        this.wordCloud = "";
        this.httpProvider.getWordCloud().subscribe(function (result) {
            _this.wordCloud += result;
            _this.storage.set('wordCloud', _this.wordCloud);
        });
    };
    DashboardPage.prototype.getWordCloudForTest = function () {
        this.wordCloud = this.httpProvider.getWordCloudForTest();
    };
    //get message
    DashboardPage.prototype.getMessage = function (uid, uid2) {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.httpProvider.getMessage(uid).then(function (result) {
                console.log(JSON.stringify(result));
                _this.maxCommentsMsg = result.message;
                _this.maxCommentsPic = result.full_picture;
                _this.httpProvider.getMessage(uid2).then(function (result2) {
                    console.log(JSON.stringify(result2));
                    _this.maxReactionsMsg = result2.message;
                    _this.maxReactionsPic = result2.full_picture;
                    _this.storage.set('maxCommentsMsg', _this.maxCommentsMsg);
                    _this.storage.set('maxCommentsPic', _this.maxCommentsPic);
                    _this.storage.set('maxCommentsPost', _this.maxCommentsPost);
                    _this.storage.set('maReactionsMsg', _this.maxReactionsMsg);
                    _this.storage.set('maxReactionsPic', _this.maxReactionsPic);
                    _this.storage.set('maxReactionsPost', _this.maxReactionsPost);
                    _this.getWordCloud();
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
    DashboardPage.prototype.getSaveStorage = function () {
        var _this = this;
        this.storage.get('commentsData').then(function (val) {
            if (val != null) {
                _this.commentsData = val;
            }
        });
        this.storage.get('reactionsData').then(function (val) {
            if (val != null) {
                _this.reactionsData = val;
            }
        });
        this.storage.get('postsSummaryData').then(function (val) {
            if (val != null) {
                _this.postsSummaryData = val;
            }
        });
        this.storage.get('createTime').then(function (val) {
            if (val != null) {
                _this.createTime = val;
            }
        });
        this.storage.get('total_comments').then(function (val) {
            if (val != null) {
                _this.total_comments = val;
            }
        });
        this.storage.get('total_reactions').then(function (val) {
            if (val != null) {
                _this.total_reactions = val;
                _this.createGraph();
            }
        });
        this.storage.get('wordCloud').then(function (val) {
            if (val != null) {
                _this.wordCloud = val;
            }
        });
        this.storage.get('maxCommentsMsg').then(function (val) {
            if (val != null) {
                _this.maxCommentsMsg = val;
            }
        });
        this.storage.get('maxCommentsPic').then(function (val) {
            if (val != null) {
                _this.maxCommentsPic = val;
            }
        });
        this.storage.get('maxCommentsPost').then(function (val) {
            if (val != null) {
                _this.maxCommentsPost = val;
            }
        });
        this.storage.get('maxReactionsMsg').then(function (val) {
            if (val != null) {
                _this.maxReactionsMsg = val;
            }
        });
        this.storage.get('maxReactionsPic').then(function (val) {
            if (val != null) {
                _this.maxReactionsPic = val;
            }
        });
        this.storage.get('maxReactionsPost').then(function (val) {
            if (val != null) {
                _this.maxReactionsPost = val;
            }
        });
    };
    //for create graph
    DashboardPage.prototype.createGraph = function () {
        if (typeof this.barChart != 'undefined') {
            this.barChart.destroy();
        }
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
    //for switch UI
    DashboardPage.prototype.trigerPage = function () {
        var _this = this;
        if (this.pageTriger == 'chart') {
            this.pageTriger = 'list';
            this.content.scrollToTop();
        }
        else if (this.pageTriger == 'list') {
            this.pageTriger = 'chart';
            this.content.scrollToTop();
            setTimeout(function () {
                _this.createGraph();
            }, 200);
        }
    };
    //for open profile user
    DashboardPage.prototype.presentProfileModal = function (uid, user_name) {
        var profileModal = this.modalCtrl.create('UserProfilePage', { userId: uid, name: user_name, type: "friends" });
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
        selector: 'page-dashboard',template:/*ion-inline-start:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\pages\dashboard\dashboard.html"*/'<!--\n\n  Generated template for the DashboardPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-content padding="" style="background:url(assets/imgs/background2.jpg);background-size:cover;">\n\n  <ion-header>\n\n    <ion-toolbar class="btn-wrapper">\n\n      <div [ngSwitch]="typeData" *ngIf="pageTriger.match(\'list\')">\n\n        <div>\n\n          <ion-title *ngSwitchCase="\'commentsData\'" id="subheader">Top Comments Users on Your Posts</ion-title>\n\n          <ion-title *ngSwitchCase="\'likesData\'" id="subheader">Top Likes Users on Your Posts</ion-title>\n\n\n\n          <ion-segment [(ngModel)]="typeData" color="primary">\n\n            <ion-segment-button value="commentsData">\n\n              Top Commenters\n\n            </ion-segment-button>\n\n            <ion-segment-button value="likesData">\n\n              Top Reactioners\n\n            </ion-segment-button>\n\n          </ion-segment>\n\n        </div>\n\n      </div>\n\n      <div *ngIf="pageTriger.match(\'chart\')">\n\n        <ion-title>Your Posts Summary</ion-title>\n\n      </div>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <div *ngIf="pageTriger.match(\'chart\')" class=\'dashboardContent\'>\n\n    <ion-card has-header="true">\n\n      <ion-card-header id="ion-card-header2">\n\n        Top posts in {{sortByTime}}\n\n      </ion-card-header>\n\n\n\n      <canvas height="350" item-content #barCanvas type></canvas>\n\n\n\n    </ion-card>\n\n\n\n    <ion-card *ngIf="maxCommentsPost" has-header="true">\n\n      <ion-card-header text-wrap id="ion-card-header3">\n\n        Top Post by Comments in {{sortByTime}}\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            {{maxCommentsPost.created_time}}\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-grid style="margin-top:-10px;">\n\n              <ion-row>\n\n                <ion-col>\n\n                  <img src="assets/imgs/icon/chat.png" style="width:24px;">\n\n                </ion-col>\n\n                <ion-col>\n\n                  {{maxCommentsPost.total_comments}}</ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-item text-wrap>{{maxCommentsMsg}}\n\n          <img *ngIf="maxCommentsPic" src={{maxCommentsPic}}>\n\n        </ion-item>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card *ngIf="maxReactionsPost">\n\n      <ion-card-header text-wrap id="ion-card-header3">\n\n        Top Post by Reactions in {{sortByTime}}\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            {{maxReactionsPost.created_time}}\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-grid style="margin-top:-10px;">\n\n              <ion-row>\n\n                <ion-col>\n\n                  <img src="assets/imgs/icon/flame.png" style="width:24px;">\n\n                </ion-col>\n\n                <ion-col>\n\n                  {{maxReactionsPost.total_reactions}}</ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-item text-wrap>{{maxReactionsMsg}}\n\n          <img *ngIf="maxReactionsPic" src={{maxReactionsPic}}>\n\n        </ion-item>\n\n\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n      <ion-card-header text-wrap id="ion-card-header3">\n\n        Word Cloud in {{sortByTime}}\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <img [src]=\'wordCloud\'>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n  </div>\n\n  <div *ngIf="pageTriger.match(\'list\')" class=\'dashboardContent\'>\n\n    <div [ngSwitch]="typeData">\n\n      <div *ngSwitchCase="\'commentsData\'">\n\n        <ion-list *ngFor="let item of commentsData">\n\n          <ion-card no-padding>\n\n            <ion-card-content no-padding>\n\n              <ion-grid no-padding>\n\n                <ion-row>\n\n                  <ion-col>\n\n                    <ion-item>\n\n                      <ion-avatar>\n\n                        <img id="item-avatar" src="http://graph.facebook.com/{{item._uid}}/picture?type=large">\n\n                      </ion-avatar>\n\n                    </ion-item>\n\n                  </ion-col>\n\n                  <ion-col col-8>\n\n                    <ion-card-header (click)="presentProfileModal(item._uid,item.name)" id="ion-card-header2">\n\n                      <ion-label text-wrap style="word-wrap: break-word">{{item.name}}</ion-label>\n\n                    </ion-card-header>\n\n                    <ion-item style="margin-top:-30px">\n\n                      <ion-grid style="margin-top:-10px;">\n\n                        <ion-row>\n\n                          <ion-col>\n\n                            <label style="margin-right:5px">Comments</label>\n\n                          </ion-col>\n\n                          <ion-col>\n\n                            <img src="assets/imgs/icon/chat.png" style="width:24px;">\n\n                          </ion-col>\n\n                          <ion-col>\n\n                            <label>{{item.comments}}</label>\n\n                          </ion-col>\n\n                        </ion-row>\n\n                      </ion-grid>\n\n                    </ion-item>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-list>\n\n      </div>\n\n      <div *ngSwitchCase="\'likesData\'">\n\n        <ion-list *ngFor="let item of reactionsData">\n\n          <ion-card no-padding>\n\n            <ion-card-content no-padding>\n\n              <ion-grid no-padding>\n\n                <ion-row>\n\n                  <ion-col>\n\n                    <ion-item>\n\n                      <ion-avatar>\n\n                        <img id="item-avatar2" src="http://graph.facebook.com/{{item._uid}}/picture?type=large">\n\n                      </ion-avatar>\n\n                    </ion-item>\n\n                  </ion-col>\n\n                  <ion-col col-8>\n\n                    <ion-card-header text-wrap (click)="presentProfileModal(item._uid,item.name)" id="ion-card-header2">\n\n                      <ion-grid style="margin-top:-10px;">\n\n                        <ion-row>\n\n                          <ion-col style="word-wrap: break-word">{{item.name}}</ion-col>\n\n                          <ion-col col-4>\n\n                            <button ion-button clear small>\n\n                              <img src="assets/imgs/icon/flame.png" style="width:24px;">\n\n                              <label>{{item.total}}</label>\n\n                            </button>\n\n                          </ion-col>\n\n                        </ion-row>\n\n                      </ion-grid>\n\n                    </ion-card-header>\n\n                  </ion-col>\n\n                </ion-row>\n\n                <ion-row style="text-align: center;">\n\n                  <ion-col *ngIf="item.like>0" col-2>\n\n                    <button ion-button clear small>\n\n                      <img src="assets/imgs/icon/like.png" style="width:24px;margin-right:3px;">\n\n                      <label>{{item.like}}</label>\n\n                    </button>\n\n                  </ion-col>\n\n                  <ion-col *ngIf="item.love>0" col-2>\n\n                    <button ion-button clear small>\n\n                      <img src="assets/imgs/icon/heart.png" style="width:24px;margin-right:3px;">\n\n                      <label>{{item.love}}</label>\n\n                    </button>\n\n                  </ion-col>\n\n                  <ion-col *ngIf="item.wow>0" col-2>\n\n                    <button ion-button clear small>\n\n                      <img src="assets/imgs/icon/surprised.png" style="width:24px;margin-right:3px;">\n\n\n\n                      <label>{{item.wow}}</label>\n\n                    </button>\n\n                  </ion-col>\n\n                  <ion-col *ngIf="item.haha>0" col-2>\n\n                    <button ion-button clear small>\n\n                      <img src="assets/imgs/icon/laughing.png" style="width:24px;margin-right:3px;">\n\n\n\n                      <label>{{item.haha}}</label>\n\n                    </button>\n\n                  </ion-col>\n\n                  <ion-col *ngIf="item.sad>0" col-2>\n\n                    <button ion-button clear small>\n\n                      <img src="assets/imgs/icon/crying.png" style="width:24px;margin-right:3px;">\n\n\n\n                      <label>{{item.sad}}</label>\n\n                    </button>\n\n                  </ion-col>\n\n                  <ion-col *ngIf="item.angry>0" col-2>\n\n                    <button ion-button clear small>\n\n                      <img src="assets/imgs/icon/angry.png" style="width:24px;margin-right:3px;">\n\n\n\n                      <label>{{item.angry}}</label>\n\n                    </button>\n\n                  </ion-col>\n\n                  <ion-col *ngIf="item.thankful>0" col-2>\n\n                    <button ion-button clear small>\n\n                      <img src="assets/imgs/icon/flower.png" style="width:24px;margin-right:3px;">\n\n\n\n                      <label style="margin-left:-10px;">{{item.thankful}}</label>\n\n                    </button>\n\n                  </ion-col>\n\n                  <ion-col *ngIf="item.like==0" col-2>\n\n                    <button ion-button clear small>\n\n                      <img src="assets/imgs/icon/like.png" style="width:24px;opacity: 0.5;">\n\n                    </button>\n\n                  </ion-col>\n\n                  <ion-col *ngIf="item.love==0" col-2>\n\n                    <button ion-button clear small>\n\n                      <img src="assets/imgs/icon/heart.png" style="width:24px;opacity: 0.5;">\n\n                    </button>\n\n                  </ion-col>\n\n                  <ion-col *ngIf="item.wow==0" col-2>\n\n                    <button ion-button clear small>\n\n                      <img src="assets/imgs/icon/surprised.png" style="width:24px;opacity: 0.5;">\n\n                    </button>\n\n                  </ion-col>\n\n                  <ion-col *ngIf="item.haha==0" col-2>\n\n                    <button ion-button clear small>\n\n                      <img src="assets/imgs/icon/laughing.png" style="width:24px;opacity: 0.5;">\n\n                    </button>\n\n                  </ion-col>\n\n                  <ion-col *ngIf="item.sad==0" col-2>\n\n                    <button ion-button clear small>\n\n                      <img src="assets/imgs/icon/crying.png" style="width:24px;opacity: 0.5;">\n\n                    </button>\n\n                  </ion-col>\n\n                  <ion-col *ngIf="item.angry==0" col-2>\n\n                    <button ion-button clear small>\n\n                      <img src="assets/imgs/icon/angry.png" style="width:24px;opacity: 0.5;">\n\n                    </button>\n\n                  </ion-col>\n\n                  <ion-col *ngIf="item.thankful>0" col-2>\n\n                    <button ion-button clear small>\n\n                      <img src="assets/imgs/icon/flower.png" style="width:24px;">\n\n                    </button>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-list>\n\n      </div>\n\n      <div>\n\n        <ion-col>\n\n          <button ion-button *ngIf="!isAll" (click)="getAllTops()" color="facebook">See more ...</button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-select [(ngModel)]="sortByTime" (ionChange)="getDashboard()">\n\n            <ion-option>Last 1 day</ion-option>\n\n            <ion-option>Last 1 week</ion-option>\n\n            <ion-option>Last 1 month</ion-option>\n\n            <ion-option>Last 3 months</ion-option>\n\n            <ion-option>Last 6 months</ion-option>\n\n            <ion-option>Last 1 year</ion-option>\n\n            <ion-option>Last 2 years</ion-option>\n\n          </ion-select>\n\n        </ion-col>\n\n\n\n\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n\n  <div class="btn-wrapper">\n\n    <button ion-button icon-only color="soft" (click)=\'trigerPage()\'>\n\n      <ion-icon name="arrow-up" *ngIf="pageTriger.match(\'list\')"></ion-icon>\n\n      <ion-icon name="arrow-down" *ngIf="pageTriger.match(\'chart\')"></ion-icon>\n\n    </button>\n\n  </div>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\pages\dashboard\dashboard.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_http_provider__["a" /* HttpProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_http_http_provider__["a" /* HttpProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], DashboardPage);

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http_provider__ = __webpack_require__(51);
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
    function FriendsPage(navCtrl, navParams, httpProvider, loadingController, platform, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.loadingController = loadingController;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
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
    FriendsPage.prototype.presentProfileModal = function (uid, user_name) {
        //console.log(uid);
        var profileModal = this.modalCtrl.create('UserProfilePage', { userId: uid, name: user_name, type: "friends" });
        profileModal.present();
    };
    return FriendsPage;
}());
FriendsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-friends',template:/*ion-inline-start:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\pages\friends\friends.html"*/'<!--\n\n  Generated template for the FriendsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content style="background:url(assets/imgs/background2.jpg);background-size:cover;">\n\n  <ion-header>\n\n      <ion-toolbar class="btn-wrapper">\n\n          <ion-title>Your Friends Who Use this app</ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n<div style="margin-top: 75px;">\n\n  <ion-list *ngFor="let item of newsData">\n\n    <ion-card no-padding>\n\n      <ion-card-content no-padding>\n\n        <ion-grid no-padding>\n\n          <ion-row (click)="presentProfileModal(item.id,item.name)">\n\n            <ion-col>\n\n              <ion-item>\n\n                <ion-avatar>\n\n                  <img id="item-avatar2" src="http://graph.facebook.com/{{item.id}}/picture?type=large">\n\n                </ion-avatar>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-8>\n\n              <ion-card-header text-wrap id="ion-card-header2" >\n\n                <ion-col style="word-wrap: break-word">{{item.name}}</ion-col>\n\n              </ion-card-header>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-list>\n\n</div>'/*ion-inline-end:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\pages\friends\friends.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_http_http_provider__["a" /* HttpProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
], FriendsPage);

//# sourceMappingURL=friends.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewfeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_time_time__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_http_http_provider__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
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
    function NewfeedPage(navCtrl, navParams, httpProvider, loadingController, http, platform, streamingMedia, modalCtrl, timeProvider, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.loadingController = loadingController;
        this.http = http;
        this.platform = platform;
        this.streamingMedia = streamingMedia;
        this.modalCtrl = modalCtrl;
        this.timeProvider = timeProvider;
        this.storage = storage;
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
    NewfeedPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // this.navBar.backButtonClick = (e: UIEvent) => {
        //   console.log("Back button clicked");
        //   this.navCtrl.parent.viewCtrl.dismiss();
        // };
        console.log('ionViewDidLoad newfeedPage');
        this.getSaveStorage();
        this.storage.get('hasPagesFeedData').then(function (val) {
            if (val != null) {
                _this.hasData = val;
            }
            else {
                _this.hasData = false;
            }
            if (_this.platform.is('cordova')) {
                _this.getPosts();
            }
            else {
                _this.getPostForTest();
            }
        });
        //this.getCommentsData();
        //this.createGraph();
    };
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
    NewfeedPage.prototype.getSaveStorage = function () {
        var _this = this;
        this.storage.get('pagesFeed').then(function (val) {
            if (val != null) {
                _this.newsData = val;
            }
        });
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
                    data.created_time = _this.timeProvider.getDiffTime(data.created_time);
                }
            }
            catch (error) {
                alert(error);
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
        // if(!this.hasData)
        // loading.present();
        this.httpProvider.getPosts().subscribe(
        //call if get httpRequest success (But not error from getData from facebook such as access token expired!!)
        function (result) {
            // if(!this.hasData)
            // loading.dismissAll();
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
                    data.created_time = _this.timeProvider.getDiffTime(data.created_time);
                }
            }
            catch (error) {
            }
            _this.storage.set('pagesFeed', _this.newsData);
            _this.storage.set('hasData', true);
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
            // loading.dismissAll();
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
                        data.created_time = _this.timeProvider.getDiffTime(data.created_time);
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
                        data.created_time = _this.timeProvider.getDiffTime(data.created_time);
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
    NewfeedPage.prototype.presentProfileModal = function (uid, user_name) {
        //console.log(uid);
        var profileModal = this.modalCtrl.create('UserProfilePage', { userId: uid, name: user_name, type: "pages" });
        profileModal.present();
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
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Content */])
], NewfeedPage.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* Navbar */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* Navbar */])
], NewfeedPage.prototype, "navBar", void 0);
NewfeedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'page-newfeed',template:/*ion-inline-start:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\pages\newfeed\newfeed.html"*/'<!--\n\n  Generated template for the NewfeedPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-navbar style="display:none"></ion-navbar> \n\n<ion-content no-bounce style="background:url(assets/imgs/background2.jpg);background-size:cover;">\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-list *ngFor="let item of newsData">\n\n\n\n    <ion-card>\n\n\n\n      <ion-item (click)="presentProfileModal(item.page_id,item.page_name)">\n\n        <ion-avatar item-start>\n\n          <img src={{item.page_picture}}>\n\n        </ion-avatar>\n\n        <h2>{{item.page_name}}</h2>\n\n        <p>{{item.created_time}}</p>\n\n      </ion-item>\n\n\n\n      <img  (click)=\'playVideo(item.id)\' src={{item.full_picture}} />\n\n\n\n      <ion-card-content>\n\n        <div *ngFor="let str of item.message.split(\'\n\')">\n\n          {{ str }}\n\n    </div>\n\n      </ion-card-content>\n\n      <div>\n\n        <ion-row style="border-bottom: 1px solid gray;">\n\n\n\n          <ion-col col-2>\n\n          <ion-label style="margin-left:10px;">\n\n            <img src="assets/imgs/icon/flame.png" style="width:24px;">\n\n          </ion-label>\n\n          </ion-col>\n\n          <ion-col col-3>\n\n          <ion-label>{{item.reactions_summary}}</ion-label>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <ion-label>\n\n            <img src="assets/imgs/icon/chat.png" style="width:24px;">\n\n          </ion-label>\n\n        </ion-col>\n\n        <ion-col col-5>\n\n          <ion-label>{{item.comments_summary}}</ion-label>\n\n        </ion-col>\n\n\n\n        </ion-row>\n\n      </div>\n\n      <ion-row>\n\n        <ion-col>\n\n          <button ion-button full icon-center clear small>\n\n            <img src="assets/imgs/icon/like.png" style="width:24px;margin-right:5px">\n\n            <div>Likes</div>\n\n          </button>\n\n        </ion-col>\n\n        <button class="button circle text-center">\n\n          <i class="ion-crop"></i>\n\n        </button>\n\n        <ion-col>\n\n          <button ion-button full icon-center clear small>\n\n            <img src="assets/imgs/icon/chat.png" style="width:24px;margin-right:5px">\n\n            <div>Comments</div>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </ion-card>\n\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more feed..."></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\pages\newfeed\newfeed.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_1__providers_http_http_provider__["a" /* HttpProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1__providers_http_http_provider__["a" /* HttpProvider */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__["a" /* StreamingMedia */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_time_time__["a" /* TimeProvider */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
], NewfeedPage);

//# sourceMappingURL=newfeed.js.map

/***/ }),

/***/ 399:
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
        selector: 'page-setting',template:/*ion-inline-start:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\pages\setting\setting.html"*/'<!--\n\n  Generated template for the SettingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <button ion-button full clear (click)=\'logout()\'>Log Out</button>\n\n    <button ion-button *ngIf=\'!isShowCredit\' (click)=\'showCredit()\'>Show Credit</button>\n\n    <button ion-button *ngIf=\'isShowCredit\' (click)=\'showCredit()\'>Hide Credit</button>\n\n    <ion-card *ngIf=\'isShowCredit\'>\n\n      <div>Icons made by\n\n        <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from\n\n        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by\n\n        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"\n\n          target="_blank">CC 3.0 BY</a>\n\n      </div>\n\n      <div>Icons made by\n\n        <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from\n\n        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by\n\n        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"\n\n          target="_blank">CC 3.0 BY</a>\n\n      </div>\n\n      <div>Icons made by\n\n        <a href="https://www.flaticon.com/authors/pixel-buddha" title="Pixel Buddha">Pixel Buddha</a> from\n\n        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by\n\n        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"\n\n          target="_blank">CC 3.0 BY</a>\n\n      </div>\n\n      <div>Icons made by\n\n        <a href="http://www.freepik.com" title="Freepik">Freepik</a> from\n\n        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by\n\n        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"\n\n          target="_blank">CC 3.0 BY</a>\n\n      </div>\n\n      <div>Icons made by\n\n        <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> from\n\n        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by\n\n        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"\n\n          target="_blank">CC 3.0 BY</a>\n\n      </div>\n\n    </ion-card>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\pages\setting\setting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], SettingPage);

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(406);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_streaming_media__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_newfeed_newfeed__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_friends_friends__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_setting_setting__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_http_http_provider__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_facebook__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_swing__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_time_time__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_screen_orientation__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_native_page_transitions__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_storage__ = __webpack_require__(123);
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
            __WEBPACK_IMPORTED_MODULE_19__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
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
            __WEBPACK_IMPORTED_MODULE_16__providers_time_time__["a" /* TimeProvider */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(205);
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
        this.accessToken = 'EAAa6rQfXhlABAKNe3M8K97s2WwxEvDAtR2iNnDYZAOVvS9xTvfOOYzccszhddczVtEJ0lpdgwEa7Bg2zG5SIcgedTifyIeVTnUmw5ZBMFIvmkp1OJI7DtrGsG4LofeUhnesWqKmu4ZB2ps1UTsWKzTGhCZAAudJvFLOQoLz4tlmkBfSvZAMzddXPHdGv0GzlFfQx14KdW1gZDZD';
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
            return _this.http.get(_this.setHttpRequest('dashboard', top, hour, day, month, year), { headers: headers }).timeout(90000)
                .map(function (res) { return res.json(); });
        });
    };
    HttpProvider.prototype.getDashboardForTest = function (top, hour, day, month, year) {
        //set header to authorize with access token
        this.getTokenForTest();
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('access_token', this.accessToken);
        return this.http.get(this.setHttpRequest('dashboard', top, hour, day, month, year), { headers: headers }).timeout(90000)
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
                return _this.http.get(_this.setHttpRequest('dashboard/getalltops/' + _this.uid, '', '0', '0', '0', '0'), { headers: headers }).timeout(90000)
                    .map(function (res) { return res.json(); });
            });
        });
    };
    HttpProvider.prototype.getDashboardAllTopsFortest = function () {
        this.getUidForTest();
        this.getTokenForTest();
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('access_token', this.accessToken);
        return this.http.get(this.setHttpRequest('dashboard/getalltops/' + this.uid, '', '0', '0', '0', '0'), { headers: headers }).timeout(90000)
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
        return this.http.get(this.setHttpRequest("newsfeed/" + this.uid, '', '0', '0', '0', '0'), { headers: headers }).timeout(90000)
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
                return _this.http.get(_this.setHttpRequest("newsfeed/" + _this.uid, '', '0', '0', '0', '0'), { headers: headers }).timeout(90000)
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
                return _this.http.get(_this.setHttpRequest("newsfeed/next/" + _this.uid, '', '0', '0', '0', '0'), { headers: headers }).timeout(90000)
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
    HttpProvider.prototype.getPostsById = function (uid) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].fromPromise(this.getToken()).mergeMap(function (token) {
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].fromPromise(_this.facebook.api('/' + uid + '?fields=posts{created_time,message,full_picture,reactions.summary(true),comments.summary(true),id}', ['user_posts', 'user_friends']));
        });
    };
    HttpProvider.prototype.getSource = function (uid) {
        return this.facebook.api('/' + uid + '?fields=source', ['user_posts']);
    };
    HttpProvider.prototype.getContext = function (uid) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].fromPromise(this.facebook.api('/' + uid + '?fields=context', ['user_posts']));
    };
    HttpProvider.prototype.getMessage = function (postID) {
        return this.facebook.api('/' + postID + '?fields=message,created_time,full_picture', ['user_posts']);
    };
    HttpProvider.prototype.getFriends = function () {
        return this.facebook.api('/me/friends', ['user_friends']);
    };
    HttpProvider.prototype.getWordCloudForTest = function () {
        this.getUidForTest();
        // return this.http.get(
        //   this.setHttpRequest("newsfeed/" + uid, '', '0', '0', '0', '0'), { headers: headers })
        //   .map(res => res.json());
        return this.setHttpRequest("getwordcloud/" + this.uid, '', '0', '0', '0', '0');
    };
    HttpProvider.prototype.getWordCloud = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].fromPromise(this.getUid()).mergeMap(function (obj) {
            _this.uid = obj.id;
            return _this.setHttpRequest("getwordcloud/" + _this.uid, '', '0', '0', '0', '0');
        });
    };
    return HttpProvider;
}());
HttpProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
], HttpProvider);

//# sourceMappingURL=http-provider.js.map

/***/ }),

/***/ 727:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 233,
	"./af.js": 233,
	"./ar": 234,
	"./ar-dz": 235,
	"./ar-dz.js": 235,
	"./ar-kw": 236,
	"./ar-kw.js": 236,
	"./ar-ly": 237,
	"./ar-ly.js": 237,
	"./ar-ma": 238,
	"./ar-ma.js": 238,
	"./ar-sa": 239,
	"./ar-sa.js": 239,
	"./ar-tn": 240,
	"./ar-tn.js": 240,
	"./ar.js": 234,
	"./az": 241,
	"./az.js": 241,
	"./be": 242,
	"./be.js": 242,
	"./bg": 243,
	"./bg.js": 243,
	"./bn": 244,
	"./bn.js": 244,
	"./bo": 245,
	"./bo.js": 245,
	"./br": 246,
	"./br.js": 246,
	"./bs": 247,
	"./bs.js": 247,
	"./ca": 248,
	"./ca.js": 248,
	"./cs": 249,
	"./cs.js": 249,
	"./cv": 250,
	"./cv.js": 250,
	"./cy": 251,
	"./cy.js": 251,
	"./da": 252,
	"./da.js": 252,
	"./de": 253,
	"./de-at": 254,
	"./de-at.js": 254,
	"./de-ch": 255,
	"./de-ch.js": 255,
	"./de.js": 253,
	"./dv": 256,
	"./dv.js": 256,
	"./el": 257,
	"./el.js": 257,
	"./en-au": 258,
	"./en-au.js": 258,
	"./en-ca": 259,
	"./en-ca.js": 259,
	"./en-gb": 260,
	"./en-gb.js": 260,
	"./en-ie": 261,
	"./en-ie.js": 261,
	"./en-nz": 262,
	"./en-nz.js": 262,
	"./eo": 263,
	"./eo.js": 263,
	"./es": 264,
	"./es-do": 265,
	"./es-do.js": 265,
	"./es.js": 264,
	"./et": 266,
	"./et.js": 266,
	"./eu": 267,
	"./eu.js": 267,
	"./fa": 268,
	"./fa.js": 268,
	"./fi": 269,
	"./fi.js": 269,
	"./fo": 270,
	"./fo.js": 270,
	"./fr": 271,
	"./fr-ca": 272,
	"./fr-ca.js": 272,
	"./fr-ch": 273,
	"./fr-ch.js": 273,
	"./fr.js": 271,
	"./fy": 274,
	"./fy.js": 274,
	"./gd": 275,
	"./gd.js": 275,
	"./gl": 276,
	"./gl.js": 276,
	"./gom-latn": 277,
	"./gom-latn.js": 277,
	"./he": 278,
	"./he.js": 278,
	"./hi": 279,
	"./hi.js": 279,
	"./hr": 280,
	"./hr.js": 280,
	"./hu": 281,
	"./hu.js": 281,
	"./hy-am": 282,
	"./hy-am.js": 282,
	"./id": 283,
	"./id.js": 283,
	"./is": 284,
	"./is.js": 284,
	"./it": 285,
	"./it.js": 285,
	"./ja": 286,
	"./ja.js": 286,
	"./jv": 287,
	"./jv.js": 287,
	"./ka": 288,
	"./ka.js": 288,
	"./kk": 289,
	"./kk.js": 289,
	"./km": 290,
	"./km.js": 290,
	"./kn": 291,
	"./kn.js": 291,
	"./ko": 292,
	"./ko.js": 292,
	"./ky": 293,
	"./ky.js": 293,
	"./lb": 294,
	"./lb.js": 294,
	"./lo": 295,
	"./lo.js": 295,
	"./lt": 296,
	"./lt.js": 296,
	"./lv": 297,
	"./lv.js": 297,
	"./me": 298,
	"./me.js": 298,
	"./mi": 299,
	"./mi.js": 299,
	"./mk": 300,
	"./mk.js": 300,
	"./ml": 301,
	"./ml.js": 301,
	"./mr": 302,
	"./mr.js": 302,
	"./ms": 303,
	"./ms-my": 304,
	"./ms-my.js": 304,
	"./ms.js": 303,
	"./my": 305,
	"./my.js": 305,
	"./nb": 306,
	"./nb.js": 306,
	"./ne": 307,
	"./ne.js": 307,
	"./nl": 308,
	"./nl-be": 309,
	"./nl-be.js": 309,
	"./nl.js": 308,
	"./nn": 310,
	"./nn.js": 310,
	"./pa-in": 311,
	"./pa-in.js": 311,
	"./pl": 312,
	"./pl.js": 312,
	"./pt": 313,
	"./pt-br": 314,
	"./pt-br.js": 314,
	"./pt.js": 313,
	"./ro": 315,
	"./ro.js": 315,
	"./ru": 316,
	"./ru.js": 316,
	"./sd": 317,
	"./sd.js": 317,
	"./se": 318,
	"./se.js": 318,
	"./si": 319,
	"./si.js": 319,
	"./sk": 320,
	"./sk.js": 320,
	"./sl": 321,
	"./sl.js": 321,
	"./sq": 322,
	"./sq.js": 322,
	"./sr": 323,
	"./sr-cyrl": 324,
	"./sr-cyrl.js": 324,
	"./sr.js": 323,
	"./ss": 325,
	"./ss.js": 325,
	"./sv": 326,
	"./sv.js": 326,
	"./sw": 327,
	"./sw.js": 327,
	"./ta": 328,
	"./ta.js": 328,
	"./te": 329,
	"./te.js": 329,
	"./tet": 330,
	"./tet.js": 330,
	"./th": 331,
	"./th.js": 331,
	"./tl-ph": 332,
	"./tl-ph.js": 332,
	"./tlh": 333,
	"./tlh.js": 333,
	"./tr": 334,
	"./tr.js": 334,
	"./tzl": 335,
	"./tzl.js": 335,
	"./tzm": 336,
	"./tzm-latn": 337,
	"./tzm-latn.js": 337,
	"./tzm.js": 336,
	"./uk": 338,
	"./uk.js": 338,
	"./ur": 339,
	"./ur.js": 339,
	"./uz": 340,
	"./uz-latn": 341,
	"./uz-latn.js": 341,
	"./uz.js": 340,
	"./vi": 342,
	"./vi.js": 342,
	"./x-pseudo": 343,
	"./x-pseudo.js": 343,
	"./yo": 344,
	"./yo.js": 344,
	"./zh-cn": 345,
	"./zh-cn.js": 345,
	"./zh-hk": 346,
	"./zh-hk.js": 346,
	"./zh-tw": 347,
	"./zh-tw.js": 347
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
webpackContext.id = 727;

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_facebook__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(389);
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
        this.facebook = facebook;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            // platform.registerBackButtonAction(() => {
            //   let nav = app.getActiveNavs()[0];
            //   let activeView = nav.getActive();
            //   if (activeView.name === "TabsPage") {
            //     const alert = alertCtrl.create({
            //       title: 'App termination',
            //       message: 'Do you want to Log out from the app?',
            //       buttons: [{
            //         text: 'Cancel',
            //         role: 'cancel',
            //         handler: () => {
            //           console.log('Application Logout prevented!');
            //         }
            //       }, {
            //         text: 'Log out',
            //         handler: () => {
            //           let loading =  loadingController.create({ content: "Logging Out..." });
            //           loading.present();
            //           this.facebook.logout().then((response) => {
            //             loading.dismiss();
            //             let nav = app.getActiveNav();
            //             nav.popToRoot();
            //           }, (error) => {
            //           })
            //         }
            //       }]
            //     });
            //     alert.present();
            //   } else if (activeView.name === "HomePage") {
            //     const alert = alertCtrl.create({
            //       title: 'App termination',
            //       message: 'Do you want to close the app?',
            //       buttons: [{
            //         text: 'Cancel',
            //         role: 'cancel',
            //         handler: () => {
            //           console.log('Application exit prevented!');
            //         }
            //       }, {
            //         text: 'Close App',
            //         handler: () => {
            //           platform.exitApp(); // Close this application
            //         }
            //       }]
            //     });
            //     alert.present();
            //   }
            //   else{
            //     app.getRootNav().pop();
            //   }
            // });
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Bigfern\CUFacebook\CUFacebookApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_alert_alert_controller__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[401]);
//# sourceMappingURL=main.js.map