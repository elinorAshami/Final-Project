(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _band_band_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./band/band.component */ "./src/app/band/band.component.ts");
/* harmony import */ var _studio_studio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./studio/studio.component */ "./src/app/studio/studio.component.ts");
/* harmony import */ var _favoriets_favoriets_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favoriets/favoriets.component */ "./src/app/favoriets/favoriets.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
/* harmony import */ var _new_band_new_band_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-band/new-band.component */ "./src/app/new-band/new-band.component.ts");
/* harmony import */ var _invite_friend_invite_friend_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./invite-friend/invite-friend.component */ "./src/app/invite-friend/invite-friend.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");











var routes = [
    { path: '', component: _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] },
    { path: 'band/:id', component: _band_band_component__WEBPACK_IMPORTED_MODULE_4__["BandComponent"] },
    { path: 'studio', component: _studio_studio_component__WEBPACK_IMPORTED_MODULE_5__["StudioComponent"] },
    { path: 'favoriets', component: _favoriets_favoriets_component__WEBPACK_IMPORTED_MODULE_6__["FavorietsComponent"] },
    { path: 'board', component: _board_board_component__WEBPACK_IMPORTED_MODULE_7__["BoardComponent"] },
    { path: 'new-band', component: _new_band_new_band_component__WEBPACK_IMPORTED_MODULE_8__["NewBandComponent"] },
    { path: 'invite-friend', component: _invite_friend_invite_friend_component__WEBPACK_IMPORTED_MODULE_9__["InviteFriendComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import { BandsService} from "./bands.service";
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app-new';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _band_band_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./band/band.component */ "./src/app/band/band.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _studio_studio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./studio/studio.component */ "./src/app/studio/studio.component.ts");
/* harmony import */ var _favoriets_favoriets_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./favoriets/favoriets.component */ "./src/app/favoriets/favoriets.component.ts");
/* harmony import */ var _new_band_new_band_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./new-band/new-band.component */ "./src/app/new-band/new-band.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _invite_friend_invite_friend_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./invite-friend/invite-friend.component */ "./src/app/invite-friend/invite-friend.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_6__["IndexComponent"],
                _band_band_component__WEBPACK_IMPORTED_MODULE_7__["BandComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                _studio_studio_component__WEBPACK_IMPORTED_MODULE_9__["StudioComponent"],
                _favoriets_favoriets_component__WEBPACK_IMPORTED_MODULE_10__["FavorietsComponent"],
                _new_band_new_band_component__WEBPACK_IMPORTED_MODULE_11__["NewBandComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _invite_friend_invite_friend_component__WEBPACK_IMPORTED_MODULE_13__["InviteFriendComponent"],
                _board_board_component__WEBPACK_IMPORTED_MODULE_14__["BoardComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/band/band.component.css":
/*!*****************************************!*\
  !*** ./src/app/band/band.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n  margin: 0px;\n  padding: 0px;\n}\n\nbody{\n  height:100%;\n}\n\nmain{\n  display: block;\n  float: right;\n  width: 82%;\n  padding: 1.3%;\n  height:100%;\n  background-color:#DCDCDC;\n\n}\n\n.clear{\n  clear: both;\n}\n\n.topBand{\n  width: 800px;\n  height: 600px;\n  margin: 5%;\n}\n\n.topBand section h3{\n  font-weight: bold;\n  margin-top: 0px;\n  margin-left: 5%;\n}\n\n.topBand span{\n  background-color:#DCDCDC;\n  font-size: 12px;\n  vertical-align: top;\n  padding: 1%;\n}\n\n.topBand img{\n  width: 400px;\n  height:300px;\n  margin-bottom: 5%;\n\n}\n\n.topBand section{\n  display: inline;\n  float: right;\n  width: 400px;\n  height: 300px;\n  margin-bottom: 5%;\n}\n\n.topBand nav h3{\n  font-weight: bold;\n}\n\n.topBand p{\n  direction: ltr;\n  float: left;\n  margin-left: 5%;\n  margin-top:10%;\n  display: inline;\n}\n\n.topBand nav{\n  width: 400px;\n  height:300px;\n  float: left;\n}\n\n.members img{\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  float: left;\n}\n\n.members nav{\n  width: 300px;\n  height: 50px;\n  margin-bottom: 3%;\n  vertical-align: middle;\n  line-height: 1px;\n}\n\n.songs nav{\n  width: 300px;\n  height: 50px;\n  margin-bottom: 3%;\n  background: #796EAF;\n  vertical-align: middle;\n  line-height: 1px;\n  margin-left:5%;\n}\n\n.songs img{\n  background-color:white;\n  height:50px;\n  width:50px;\n  border:2px white solid;\n  float: left;\n  border: 2px solid #796EAF;\n}\n\n.songs h3{\n  margin-left: 5%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFuZC9iYW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtFQUNiLFdBQVc7RUFDWCx3QkFBd0I7O0FBRTFCOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjs7QUFFbkI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYmFuZC9iYW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5ib2R5e1xuICBoZWlnaHQ6MTAwJTtcbn1cbm1haW57XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiA4MiU7XG4gIHBhZGRpbmc6IDEuMyU7XG4gIGhlaWdodDoxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNEQ0RDREM7XG5cbn1cbi5jbGVhcntcbiAgY2xlYXI6IGJvdGg7XG59XG4udG9wQmFuZHtcbiAgd2lkdGg6IDgwMHB4O1xuICBoZWlnaHQ6IDYwMHB4O1xuICBtYXJnaW46IDUlO1xufVxuLnRvcEJhbmQgc2VjdGlvbiBoM3tcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuLnRvcEJhbmQgc3BhbntcbiAgYmFja2dyb3VuZC1jb2xvcjojRENEQ0RDO1xuICBmb250LXNpemU6IDEycHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHBhZGRpbmc6IDElO1xufVxuLnRvcEJhbmQgaW1ne1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDozMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG5cbn1cbi50b3BCYW5kIHNlY3Rpb257XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuLnRvcEJhbmQgbmF2IGgze1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50b3BCYW5kIHB7XG4gIGRpcmVjdGlvbjogbHRyO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tdG9wOjEwJTtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLnRvcEJhbmQgbmF2e1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDozMDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5tZW1iZXJzIGltZ3tcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ubWVtYmVycyBuYXZ7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbGluZS1oZWlnaHQ6IDFweDtcbn1cbi5zb25ncyBuYXZ7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgYmFja2dyb3VuZDogIzc5NkVBRjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbGluZS1oZWlnaHQ6IDFweDtcbiAgbWFyZ2luLWxlZnQ6NSU7XG59XG4uc29uZ3MgaW1ne1xuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICBoZWlnaHQ6NTBweDtcbiAgd2lkdGg6NTBweDtcbiAgYm9yZGVyOjJweCB3aGl0ZSBzb2xpZDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM3OTZFQUY7XG59XG4uc29uZ3MgaDN7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/band/band.component.html":
/*!******************************************!*\
  !*** ./src/app/band/band.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<app-menu></app-menu>\n  <main>\n    <div class=\"topBand\">\n      <img src={{bandData.icon}}>\n      <section>\n        <h3>{{bandData.name}}<span class=\"glyphicon glyphicon-pencil\"></span></h3>\n        <p>{{bandData.description}}</p>\n      </section>\n      <nav class=\"members\">\n        <h3>MEMBERS</h3>\n        <nav *ngFor=\"let member of bandData.members\">\n          <img src={{member.icon}}> <P>{{member.firstName}} {{member.lastName}}</P>\n        </nav>\n      </nav>\n      <nav class=\"songs\">\n        <h3>SONGS</h3>\n        <nav *ngFor=\"let song of bandData.songs\">\n          <a href=\"{{'/songstudio/?id='+song._id}}\">\n            <img src={{bandData.icon}}>\n            <p>{{song.title}}</p>\n          </a>\n        </nav>\n      </nav>\n        <div class=\"clear\"></div>\n    </div>\n  </main>\n</body>\n\n"

/***/ }),

/***/ "./src/app/band/band.component.ts":
/*!****************************************!*\
  !*** ./src/app/band/band.component.ts ***!
  \****************************************/
/*! exports provided: BandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandComponent", function() { return BandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var BandComponent = /** @class */ (function () {
    function BandComponent(http, route) {
        var _this = this;
        this.http = http;
        this.route = route;
        var id;
        this.route.params.subscribe(function (params) {
            id = params['id'];
        });
        var req = this.http.post("http://localhost:1234/bands/getBandData", { id: id });
        req.subscribe(function (data) {
            _this.bandData = data;
        });
    }
    BandComponent.prototype.ngOnInit = function () {
    };
    BandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-band',
            template: __webpack_require__(/*! ./band.component.html */ "./src/app/band/band.component.html"),
            styles: [__webpack_require__(/*! ./band.component.css */ "./src/app/band/band.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], BandComponent);
    return BandComponent;
}());



/***/ }),

/***/ "./src/app/board/board.component.css":
/*!*******************************************!*\
  !*** ./src/app/board/board.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/board/board.component.html":
/*!********************************************!*\
  !*** ./src/app/board/board.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n\n<h1>THE BOARD IN PROGRESS...</h1>\n<i class=\"fas fa-user-plus\"></i>\n"

/***/ }),

/***/ "./src/app/board/board.component.ts":
/*!******************************************!*\
  !*** ./src/app/board/board.component.ts ***!
  \******************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BoardComponent = /** @class */ (function () {
    function BoardComponent() {
    }
    BoardComponent.prototype.ngOnInit = function () {
    };
    BoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.css */ "./src/app/board/board.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/favoriets/favoriets.component.css":
/*!***************************************************!*\
  !*** ./src/app/favoriets/favoriets.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpZXRzL2Zhdm9yaWV0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZmF2b3JpZXRzL2Zhdm9yaWV0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/favoriets/favoriets.component.html":
/*!****************************************************!*\
  !*** ./src/app/favoriets/favoriets.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<h1>FAVORIETS IN PROGRESS...</h1>\n"

/***/ }),

/***/ "./src/app/favoriets/favoriets.component.ts":
/*!**************************************************!*\
  !*** ./src/app/favoriets/favoriets.component.ts ***!
  \**************************************************/
/*! exports provided: FavorietsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavorietsComponent", function() { return FavorietsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FavorietsComponent = /** @class */ (function () {
    function FavorietsComponent() {
    }
    FavorietsComponent.prototype.ngOnInit = function () {
    };
    FavorietsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favoriets',
            template: __webpack_require__(/*! ./favoriets.component.html */ "./src/app/favoriets/favoriets.component.html"),
            styles: [__webpack_require__(/*! ./favoriets.component.css */ "./src/app/favoriets/favoriets.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FavorietsComponent);
    return FavorietsComponent;
}());



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n  margin: 0px;\n  padding: 0px;\n}\nhtml{\n  height:100%;\n}\nbody{\n  background-color:#DCDCDC;\n  height:100%;\n}\n#wrapper{\n  height: 100%;\n  overflow:hidden;\n}\nmain{\n  display: block;\n  float: right;\n  width: 82%;\n  padding: 1.3%;\n  height:100%;\n}\n.clear{\n  clear: both;\n}\n.search-box{\n  background-color:white;\n  border-radius: 40px;\n  width:400px;\n  margin-left:1.5%;\n  margin-bottom: 2%;\n}\nul{\n  height:100%;\n}\ninput{\n  border:none;\n  border-radius: 40px;\n  width:340px;\n  height:20px;\n  padding: 5%;\n\n}\n.mainContainer{\n  width: 73%;\n}\n.Top{\n  background:white;\n  width:97%;\n  height: 200px;\n  margin:1.8%;\n  vertical-align: middle;\n  text-align:right;\n  line-height:180px;\n}\n.mainDiv{\n  background-color:white;\n  width: 22%;\n  height: 200px;\n  display: block;\n  float:left;\n  margin: 1.5%;\n}\n.topRight{\n  width: 25%;\n  float:right;\n}\n.topRight div{\n  background-color:#191970;\n  color: white;\n  text-align: center;\n  padding:4%;\n}\n.topRight>div:first-child{\n  margin-bottom:3%;\n}\n.topRight nav{\n  background-color:#796EAF;\n  height:50px;\n  margin: 3.5%;\n  text-align:left;\n  vertical-align: middle;\n  line-height:300%;\n  padding-left:3%;\n}\n.topRight img{\n  background-color:white;\n  height:48px;\n  width:50px;\n\n  margin-left:2%;\n  border: 2px solid #796EAF;\n\n}\n#wrapper p{\n  margin-right:4%;\n  float:right;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYixXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVzs7QUFFYjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGFBQWE7RUFDYixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsYUFBYTtFQUNiLGNBQWM7RUFDZCxVQUFVO0VBQ1YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxVQUFVOztFQUVWLGNBQWM7RUFDZCx5QkFBeUI7O0FBRTNCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5odG1se1xuICBoZWlnaHQ6MTAwJTtcbn1cbmJvZHl7XG4gIGJhY2tncm91bmQtY29sb3I6I0RDRENEQztcbiAgaGVpZ2h0OjEwMCU7XG59XG4jd3JhcHBlcntcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzpoaWRkZW47XG59XG5tYWlue1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogODIlO1xuICBwYWRkaW5nOiAxLjMlO1xuICBoZWlnaHQ6MTAwJTtcbn1cbi5jbGVhcntcbiAgY2xlYXI6IGJvdGg7XG59XG4uc2VhcmNoLWJveHtcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgd2lkdGg6NDAwcHg7XG4gIG1hcmdpbi1sZWZ0OjEuNSU7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xufVxudWx7XG4gIGhlaWdodDoxMDAlO1xufVxuaW5wdXR7XG4gIGJvcmRlcjpub25lO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICB3aWR0aDozNDBweDtcbiAgaGVpZ2h0OjIwcHg7XG4gIHBhZGRpbmc6IDUlO1xuXG59XG4ubWFpbkNvbnRhaW5lcntcbiAgd2lkdGg6IDczJTtcbn1cbi5Ub3B7XG4gIGJhY2tncm91bmQ6d2hpdGU7XG4gIHdpZHRoOjk3JTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luOjEuOCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246cmlnaHQ7XG4gIGxpbmUtaGVpZ2h0OjE4MHB4O1xufVxuLm1haW5EaXZ7XG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gIHdpZHRoOiAyMiU7XG4gIGhlaWdodDogMjAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDpsZWZ0O1xuICBtYXJnaW46IDEuNSU7XG59XG4udG9wUmlnaHR7XG4gIHdpZHRoOiAyNSU7XG4gIGZsb2F0OnJpZ2h0O1xufVxuLnRvcFJpZ2h0IGRpdntcbiAgYmFja2dyb3VuZC1jb2xvcjojMTkxOTcwO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzo0JTtcbn1cbi50b3BSaWdodD5kaXY6Zmlyc3QtY2hpbGR7XG4gIG1hcmdpbi1ib3R0b206MyU7XG59XG4udG9wUmlnaHQgbmF2e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiM3OTZFQUY7XG4gIGhlaWdodDo1MHB4O1xuICBtYXJnaW46IDMuNSU7XG4gIHRleHQtYWxpZ246bGVmdDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbGluZS1oZWlnaHQ6MzAwJTtcbiAgcGFkZGluZy1sZWZ0OjMlO1xufVxuLnRvcFJpZ2h0IGltZ3tcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgaGVpZ2h0OjQ4cHg7XG4gIHdpZHRoOjUwcHg7XG5cbiAgbWFyZ2luLWxlZnQ6MiU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM3OTZFQUY7XG5cbn1cbiN3cmFwcGVyIHB7XG4gIG1hcmdpbi1yaWdodDo0JTtcbiAgZmxvYXQ6cmlnaHQ7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/index/index.component.html":
/*!********************************************!*\
  !*** ./src/app/index/index.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<body>\n<div id=\"wrapper\">\n<app-menu></app-menu>\n  <main>\n    <div class=\"search-box\">\n      <input type=\"text\" name=\"\" placeholder=\"Searh Library\">\n    </div>\n    <div class=\"topRight\">\n\n      <div> TOP 5 SONGS\n        <nav *ngFor=\"let band of bands; let i=index\">\n          <!--<img src=\"#\">-->\n          <!--<p> {{band.songs[0].songname}} </p>-->\n        </nav>\n      </div>\n\n      <div> TOP 5 BANDS\n        <!--<nav>-->\n          <!--<img src=\"#\">-->\n          <!--<p> {{bands[0].bandname}} </p>-->\n        <!--</nav>-->\n        <!--<nav>-->\n          <!--<img src=\"#\">-->\n          <!--<p> {{bands[1].bandname}} </p>-->\n        <!--</nav>-->\n        <!--<nav>-->\n          <!--<img src=\"#\">-->\n          <!--<p> {{bands[2].bandname}} </p>-->\n        <!--</nav>-->\n        <!--<nav>-->\n          <!--<img src=\"#\">-->\n          <!--<p> {{bands[3].bandname}} </p>-->\n        <!--</nav>-->\n        <!--<nav>-->\n          <!--<img src=\"#\">-->\n          <!--<p> {{bands[4].bandname}} </p>-->\n        <!--</nav>-->\n      </div>\n\n    </div>\n    <div class=\"mainContainer\">\n      <div class=\"Top\"> <p>TOP ARTIST THIS WEEK</p> </div>\n      <div class=\"mainDiv\"></div><div class=\"mainDiv\"></div><div class=\"mainDiv\"></div><div class=\"mainDiv\"></div>\n      <div class=\"mainDiv\"></div><div class=\"mainDiv\"></div><div class=\"mainDiv\"></div><div class=\"mainDiv\"></div>\n    </div>\n\n    <div class=\"clear\"></div>\n  </main>\n\n</div>\n</body>\n\n"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IndexComponent = /** @class */ (function () {
    // bands : Bands[] =[];
    function IndexComponent() {
        // this.bandService.getBands()
        //   .subscribe(bands => {
        //     this.bands = bands;
        //     console.log(this.bands);
        //   })
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/invite-friend/invite-friend.component.css":
/*!***********************************************************!*\
  !*** ./src/app/invite-friend/invite-friend.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52aXRlLWZyaWVuZC9pbnZpdGUtZnJpZW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9pbnZpdGUtZnJpZW5kL2ludml0ZS1mcmllbmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/invite-friend/invite-friend.component.html":
/*!************************************************************!*\
  !*** ./src/app/invite-friend/invite-friend.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<h1>INVITE A FRIEND IN PROGRESS...</h1>\n"

/***/ }),

/***/ "./src/app/invite-friend/invite-friend.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/invite-friend/invite-friend.component.ts ***!
  \**********************************************************/
/*! exports provided: InviteFriendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteFriendComponent", function() { return InviteFriendComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InviteFriendComponent = /** @class */ (function () {
    function InviteFriendComponent() {
    }
    InviteFriendComponent.prototype.ngOnInit = function () {
    };
    InviteFriendComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invite-friend',
            template: __webpack_require__(/*! ./invite-friend.component.html */ "./src/app/invite-friend/invite-friend.component.html"),
            styles: [__webpack_require__(/*! ./invite-friend.component.css */ "./src/app/invite-friend/invite-friend.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InviteFriendComponent);
    return InviteFriendComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n  margin: 0px;\n  padding: 0px;\n}\nul{\n  height:100%;\n  margin-top: 50%;\n}\n#logo{\n  display: block;\n  background: url('BanditLogo.png') no-repeat;\n  width:100px;\n  height:100px;\n  position:absolute;\n  margin-top: 10%;\n}\n#menu{\n  background-color: #191970;\n  width: 18%;\n  float: left;\n  height:100%;\n  position:fixed;\n  bottom: 0;\n}\na{\n  color: white;\n  text-decoration: none;\n}\na:hover{\n  color: #FF8C00;\n  text-decoration: none;\n}\na.active{\n  color:#FF8C00;\n}\nli{\n  padding: 10%;\n  list-style-type: none;\n  padding-left: 30px;\n}\nli.active{\n  background-color: #708090;\n}\nli:hover{\n  background-color: #708090;\n}\n.line{\n  border-bottom: 1px solid white;\n  padding-bottom: 20%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLDJDQUF3RDtFQUN4RCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztFQUNkLFNBQVM7QUFDWDtBQUNBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG51bHtcbiAgaGVpZ2h0OjEwMCU7XG4gIG1hcmdpbi10b3A6IDUwJTtcbn1cbiNsb2dve1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvQmFuZGl0TG9nby5wbmcnKSBuby1yZXBlYXQ7XG4gIHdpZHRoOjEwMHB4O1xuICBoZWlnaHQ6MTAwcHg7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG4jbWVudXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTk3MDtcbiAgd2lkdGg6IDE4JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDoxMDAlO1xuICBwb3NpdGlvbjpmaXhlZDtcbiAgYm90dG9tOiAwO1xufVxuYXtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5hOmhvdmVye1xuICBjb2xvcjogI0ZGOEMwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuYS5hY3RpdmV7XG4gIGNvbG9yOiNGRjhDMDA7XG59XG5saXtcbiAgcGFkZGluZzogMTAlO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cbmxpLmFjdGl2ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwODA5MDtcbn1cbmxpOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA4MDkwO1xufVxuLmxpbmV7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgcGFkZGluZy1ib3R0b206IDIwJTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"menu\">\n  <a routerLink=\"/\" id=\"logo\"></a>\n  <ul>\n    <li><a routerLink=\"/\" >EXPLORE</a> </li>\n    <li > <a routerLink=\"/studio\" >MY STUDIO</a> </li>\n    <li > <a routerLink=\"/favoriets\" >FAVORITES</a> </li>\n    <li class=\"line\" ><a routerLink=\"/board\" >THE BOARD</a> </li>\n    <li *ngFor=\"let band of bands\" style=\"color:white;\">\n      <a routerLink=\"{{'/band/'+band._id}}\">{{band.name}}</a>\n    </li>\n    <li class=\"line\" ><a routerLink=\"/new-band\" >CREATE NEW BAND</a> </li>\n    <li ><a routerLink=\"/invite-friend\" >INVITE A FRIEND</a> </li>\n    <li ><a routerLink=\"/profile\" >MY PROFILE</a> </li>\n  </ul>\n</nav>\n\n\n\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MenuComponent = /** @class */ (function () {
    function MenuComponent(http) {
        var _this = this;
        this.http = http;
        var req = this.http.post("http://localhost:1234/users/getUserData", { id: "5cd6c54ca53c5805d94023e1" });
        req.subscribe(function (data) {
            _this.bands = data.bands;
        });
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/new-band/new-band.component.css":
/*!*************************************************!*\
  !*** ./src/app/new-band/new-band.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n  display: block;\n}\nform{\n  width: 65%;\n  float: right;\n  margin-top: 10%;\n}\ntextarea{\n  width: 25%;\n}\ninput{\n  width: 25%;\n}\nselect{\n  width: 25%;\n}\n.custom-file-label{\n  width: 36%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWJhbmQvbmV3LWJhbmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvbmV3LWJhbmQvbmV3LWJhbmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuZm9ybXtcbiAgd2lkdGg6IDY1JTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG50ZXh0YXJlYXtcbiAgd2lkdGg6IDI1JTtcbn1cbmlucHV0e1xuICB3aWR0aDogMjUlO1xufVxuc2VsZWN0e1xuICB3aWR0aDogMjUlO1xufVxuLmN1c3RvbS1maWxlLWxhYmVse1xuICB3aWR0aDogMzYlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/new-band/new-band.component.html":
/*!**************************************************!*\
  !*** ./src/app/new-band/new-band.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<main>\n      <form (submit)=\"createBand($event)\">\n          <label> Band name: </label> <input type=\"text\" [(ngModel)]=\"bandName\" name=\"bandName\"><br>\n          <label> Janner: </label>\n            <select [(ngModel)]=\"janner\" name=\"janner\">\n              <option> Janner1 </option>\n              <option> Janner2 </option>\n              <option> Janner3 </option>\n              <option> Janner4 </option>\n            </select><br>\n          <label> Description: </label>\n          <textarea [(ngModel)]=\"description\" name=\"description\"></textarea><br>\n          <label> Add members: </label> <input type=\"text\"><br>\n          <div class=\"custom-file mb-3\">\n            <input type=\"file\" class=\"custom-file-input\">\n            <label for=\"file\" class=\"custom-file-label\"> Add band photo </label><br>\n            <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary\">\n          </div>\n      </form>\n</main>\n\n"

/***/ }),

/***/ "./src/app/new-band/new-band.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-band/new-band.component.ts ***!
  \************************************************/
/*! exports provided: NewBandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBandComponent", function() { return NewBandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var NewBandComponent = /** @class */ (function () {
    function NewBandComponent(http) {
    }
    NewBandComponent.prototype.ngOnInit = function () {
    };
    NewBandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-band',
            template: __webpack_require__(/*! ./new-band.component.html */ "./src/app/new-band/new-band.component.html"),
            styles: [__webpack_require__(/*! ./new-band.component.css */ "./src/app/new-band/new-band.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NewBandComponent);
    return NewBandComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<h1>MY PROFILE IN PROGRESS...</h1>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/studio/studio.component.css":
/*!*********************************************!*\
  !*** ./src/app/studio/studio.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGlvL3N0dWRpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGlvL3N0dWRpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/studio/studio.component.html":
/*!**********************************************!*\
  !*** ./src/app/studio/studio.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n\n<h1>STUDIO IN PROGRESS...</h1>\n"

/***/ }),

/***/ "./src/app/studio/studio.component.ts":
/*!********************************************!*\
  !*** ./src/app/studio/studio.component.ts ***!
  \********************************************/
/*! exports provided: StudioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudioComponent", function() { return StudioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StudioComponent = /** @class */ (function () {
    function StudioComponent() {
    }
    StudioComponent.prototype.ngOnInit = function () {
    };
    StudioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-studio',
            template: __webpack_require__(/*! ./studio.component.html */ "./src/app/studio/studio.component.html"),
            styles: [__webpack_require__(/*! ./studio.component.css */ "./src/app/studio/studio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StudioComponent);
    return StudioComponent;
}());



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
var environment = {
    production: false
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

module.exports = __webpack_require__(/*! /Users/gadyezra/Sites/Bandit/app-new/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map