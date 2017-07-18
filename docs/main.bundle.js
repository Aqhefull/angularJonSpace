webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/POSTS.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return POSTS; });
var POSTS = [
    {
        title: '6 reasons why Macron’s speech about the Holocaust in France was groundbreaking',
        text: 'Delivered during a ceremony at the Vel d’Hiv Holocaust memorial monument exactly 75 years after French police officers rounded up 13,152 Jews there for deportation to Nazi death camps, the 35-minute address was Macron’s first about the Holocaust since the centrist won the presidency in May. Evocative and more forthright than any of the speeches on the subject delivered by Macron’s predecessors, his address “relieved the feeling of isolation” experienced by many Jews due to anti-Semitism today, according to Rabbi Delphine Horvilleur, who leads the Liberal Jewish movement in France.'
    },
    {
        title: 'A Moment In Time: Return to Sender',
        text: 'A change in perspective can shift the focus of our day – and even our lives. We have an opportunity to harness “a moment in time,” allowing our souls to be both grounded and lifted. This blog shows how the simplest of daily experiences can become the most meaningful of life’s blessings. All it takes is a moment in time.'
    },
    {
        title: 'Parashat Pinchas: You are what you consistently do',
        text: 'No doubt, Rabbi Akiba’s choice is a worthy one. Loving your fellow person as yourself is about putting yourself in another person’s shoes. It is about the foundational ethical and emotional imperative of empathy, of being attuned and sensitized to the feelings and sentiments of another person.'
    }
];
//# sourceMappingURL=POSTS.js.map

/***/ }),

/***/ "../../../../../src/app/_services/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__POSTS__ = __webpack_require__("../../../../../src/app/POSTS.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PostService = (function () {
    function PostService() {
    }
    PostService.prototype.getPosts = function () {
        return __WEBPACK_IMPORTED_MODULE_1__POSTS__["a" /* POSTS */];
    };
    PostService.prototype.addPost = function (post) {
        __WEBPACK_IMPORTED_MODULE_1__POSTS__["a" /* POSTS */].push(post);
    };
    PostService.prototype.removePost = function (i) {
        __WEBPACK_IMPORTED_MODULE_1__POSTS__["a" /* POSTS */].splice(i, 1);
    };
    return PostService;
}());
PostService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])()
], PostService);

//# sourceMappingURL=post.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<sidebar></sidebar>\n<router-outlet></router-outlet>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__workflow_workflow_component__ = __webpack_require__("../../../../../src/app/workflow/workflow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__workflow_workflow_editor_workflow_editor_component__ = __webpack_require__("../../../../../src/app/workflow/workflow-editor/workflow-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__workflow_workflow_posts_workflow_posts_component__ = __webpack_require__("../../../../../src/app/workflow/workflow-posts/workflow-posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_5__workflow_workflow_component__["a" /* WorkflowComponent */],
            __WEBPACK_IMPORTED_MODULE_6__workflow_workflow_editor_workflow_editor_component__["a" /* WorkflowEditorComponent */],
            __WEBPACK_IMPORTED_MODULE_7__workflow_workflow_posts_workflow_posts_component__["a" /* WorkflowPostsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */]
                },
                {
                    path: 'workflow',
                    component: __WEBPACK_IMPORTED_MODULE_5__workflow_workflow_component__["a" /* WorkflowComponent */]
                }
            ])
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard\">\n    <div class=\"dashboard__title\">\n        <span>Workflow Tasks</span>\n    </div>\n    <div class=\"dashboard__item\" *ngFor=\"let post of posts; let i = index\">\n        <div class=\"dashboard__item__firstlet\">{{post.title.charAt(0).toUpperCase()}}</div>\n        <p>{{post.title}}</p>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard {\n  border-style: solid;\n  border-width: 1px;\n  border-color: #8492af;\n  background-color: white;\n  width: 476px;\n  border: 2px solid #d4d9e3;\n  padding: 30px;\n  margin: 20px;\n  font-family: 'Fira_Sans', sans-serif; }\n  .dashboard__title {\n    padding: 0 0 15px 0;\n    border-bottom: 2px solid #d4d9e3; }\n    .dashboard__title span {\n      font-size: 18px;\n      font-weight: bold; }\n  .dashboard__item {\n    padding: 30px 0;\n    padding: 20px 0;\n    margin: 20px 0;\n    position: relative; }\n    .dashboard__item p {\n      font-size: 16px;\n      font-weight: bold;\n      position: absolute;\n      box-sizing: border-box;\n      margin-left: 60px;\n      top: 0;\n      left: 0; }\n    .dashboard__item__firstlet {\n      width: 40px;\n      height: 40px;\n      border-radius: 50%;\n      background-color: #8492af;\n      font-size: 18px;\n      font-weight: 700;\n      color: #fff;\n      margin: 0 60px 0 0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      position: absolute;\n      top: 0;\n      left: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("../../../../../src/app/_services/post.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(ps) {
        this.ps = ps;
        this.posts = this.ps.getPosts();
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.sass")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"aside\">\n  <div class=\"aside__logo\">\n    Jon Space ver 1.0\n  </div>\n  <nav  class=\"menu\">\n    <a class=\"menu__link\" routerLink=\"/\" routerLinkActive=\"menu__link--active\" [routerLinkActiveOptions]=\"{exact: true}\">Dashboard</a>\n    <a class=\"menu__link\" routerLink=\"/workflow\" routerLinkActive=\"menu__link--active\" [routerLinkActiveOptions]=\"{exact: true}\">Workflow</a>\n  </nav>\n</aside>"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".aside {\n  width: 318px;\n  background-color: #0e1a35;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%; }\n  .aside__logo {\n    text-align: center;\n    padding: 20px 0;\n    background-color: #293e6d;\n    color: #fff;\n    font-family: 'Fira_Sans', sans-serif;\n    font-weight: 700;\n    text-transform: uppercase;\n    margin-bottom: 50px; }\n\n.menu__link {\n  display: block;\n  padding: 15px 0 15px 30px;\n  color: #fff;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 500;\n  font-size: 20px;\n  transition: all .3s;\n  position: relative;\n  text-decoration: none;\n    text-decoration--webkit-transition-property: padding;\n  -webkit-transition-duration: 0.5s;\n  transition-property: padding;\n  transition-duration: 0.5s; }\n  .menu__link:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 0;\n    height: 100%;\n    background-color: #1895E0;\n    transition: all .3s; }\n  .menu__link:hover, .menu__link--active {\n    background-color: #122143;\n    cursor: pointer;\n    padding: 15px 0 15px 60px; }\n    .menu__link:hover:before, .menu__link--active:before {\n      width: 10px;\n      background-color: #5584ff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'sidebar',
        template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sidebar/sidebar.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/workflow/workflow-editor/workflow-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"workflow-editor\">\n  <form #workflowForm=\"ngForm\" (ngSubmit)=\"addPost( newPostTitle, newPostText )\" autocomplete=\"off\">\n    <input #newPostTitle type=\"text\" placeholder=\"Enter title of task..\"  name=\"newPostTitle\" ngModel minlength=\"4\" maxlength=\"50\" required>\n    <textarea #newPostText type=\"text\" placeholder=\"Text..\"  name=\"newPostText\" ngModel minlength=\"5\" rows=\"10\" required></textarea>\n      <div>\n        <!-- <color-editor (changingColor)=\"chooseColor( $event )\" [color]=\"color\"></color-editor> -->\n      </div>\n    <button type=\"submit\" [disabled]=\"workflowForm.invalid\">Add Task</button>  \n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/workflow/workflow-editor/workflow-editor.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".workflow-editor {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n  .workflow-editor input, .workflow-editor textarea, .workflow-editor button {\n    width: 100%;\n    margin: 8px 0;\n    box-sizing: border-box;\n    font-family: 'Roboto', sans-serif;\n    transition: all 0.3s; }\n  .workflow-editor input {\n    border: 0;\n    border-bottom: 6px solid #0e1a35;\n    outline: none;\n    padding: 12px 0;\n    font-size: 36px;\n    font-weight: 300; }\n    .workflow-editor input::-webkit-input-placeholder {\n      color: #293e6d; }\n    .workflow-editor input:-ms-input-placeholder {\n      color: #293e6d; }\n    .workflow-editor input::placeholder {\n      color: #293e6d; }\n    .workflow-editor input:hover {\n      border-bottom: 12px solid #293e6d; }\n  .workflow-editor textarea {\n    padding: 12px 20px;\n    border: 6px solid #0e1a35;\n    outline: none;\n    background-color: #293e6d;\n    color: #fff;\n    font-size: 14px;\n    resize: vertical; }\n    .workflow-editor textarea::-webkit-input-placeholder {\n      color: #fff; }\n    .workflow-editor textarea:-ms-input-placeholder {\n      color: #fff; }\n    .workflow-editor textarea::placeholder {\n      color: #fff; }\n    .workflow-editor textarea:hover {\n      border: 6px solid #293e6d;\n      background-color: #0e1a35; }\n  .workflow-editor button {\n    padding: 12px 20px;\n    border: 6px solid #0e1a35;\n    outline: none;\n    background-color: #0e1a35;\n    text-transform: uppercase;\n    font-weight: 700;\n    color: #fff;\n    font-size: 14px;\n    cursor: pointer; }\n    .workflow-editor button:hover {\n      border: 6px solid #293e6d;\n      background-color: #293e6d; }\n    .workflow-editor button:disabled {\n      background-color: red; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/workflow/workflow-editor/workflow-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("../../../../../src/app/_services/post.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkflowEditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkflowEditorComponent = (function () {
    function WorkflowEditorComponent(ps) {
        this.ps = ps;
    }
    WorkflowEditorComponent.prototype.ngOnInit = function () {
    };
    WorkflowEditorComponent.prototype.addPost = function (postTitle, postText) {
        var post = {
            title: postTitle.value,
            text: postText.value
        };
        this.ps.addPost(post);
        postTitle.value = '';
        postText.value = '';
    };
    return WorkflowEditorComponent;
}());
WorkflowEditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'workflow-editor',
        template: __webpack_require__("../../../../../src/app/workflow/workflow-editor/workflow-editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/workflow/workflow-editor/workflow-editor.component.sass")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]) === "function" && _a || Object])
], WorkflowEditorComponent);

var _a;
//# sourceMappingURL=workflow-editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/workflow/workflow-posts/workflow-posts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"workflow-posts\">\n  <div *ngFor=\"let post of posts; let i = index\">\n    <div class=\"workflow-item\">\n      <div class=\"workflow-item__title\">\n        <h4>{{post.title}}</h4>\n        <div class=\"workflow-item__remove\" (click)=\"removePost(i)\">&#10006;</div>\n      </div>\n      <div class=\"workflow-item__text\">\n        <p>{{post.text}}</p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/workflow/workflow-posts/workflow-posts.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".workflow-posts {\n  box-sizing: border-box; }\n\n.workflow-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  min-width: 300px;\n  padding: 20px;\n  background-color: #f6f7fa;\n  border: 4px dashed #293e6d;\n  box-sizing: border-box;\n  margin: 15px 0;\n  position: relative; }\n  .workflow-item__title, .workflow-item__text {\n    margin: 8px 0;\n    box-sizing: border-box;\n    font-family: 'Roboto', sans-serif; }\n    .workflow-item__title h4, .workflow-item__text h4 {\n      font-size: 24px;\n      font-weight: 600;\n      color: #0e1a35;\n      display: inline-block; }\n  .workflow-item__text p {\n    font-size: 14px;\n    color: #293e6d; }\n  .workflow-item__remove {\n    padding: 5px;\n    cursor: pointer;\n    position: absolute;\n    top: 0;\n    right: 0;\n    text-align: center;\n    vertical-align: bottom;\n    display: table-cell;\n    font-size: 16px;\n    color: #fff;\n    transition: all 0.3s;\n    border-left: 4px dashed #293e6d;\n    border-bottom: 4px dashed #293e6d;\n    background-color: #293e6d; }\n    .workflow-item__remove:hover {\n      color: #fff;\n      background-color: #0e1a35;\n      transition: all 0.3s; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/workflow/workflow-posts/workflow-posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("../../../../../src/app/_services/post.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkflowPostsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkflowPostsComponent = (function () {
    function WorkflowPostsComponent(ps) {
        this.ps = ps;
        this.posts = this.ps.getPosts();
    }
    WorkflowPostsComponent.prototype.ngOnInit = function () {
    };
    WorkflowPostsComponent.prototype.removePost = function (i) {
        this.ps.removePost(i);
    };
    return WorkflowPostsComponent;
}());
WorkflowPostsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'workflow-posts',
        template: __webpack_require__("../../../../../src/app/workflow/workflow-posts/workflow-posts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/workflow/workflow-posts/workflow-posts.component.sass")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]) === "function" && _a || Object])
], WorkflowPostsComponent);

var _a;
//# sourceMappingURL=workflow-posts.component.js.map

/***/ }),

/***/ "../../../../../src/app/workflow/workflow.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"workflow\">\n    <h1>// Workflow</h1>\n    <section class=\"workflow-editor_section\">\n      <workflow-editor></workflow-editor>\n    </section>\n    <section class=\"workflow-posts_section\">\n        <workflow-posts></workflow-posts>\n    </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/workflow/workflow.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".workflow {\n  border-style: solid;\n  border-width: 1px;\n  border-color: #8492af;\n  background-color: white;\n  min-height: 500px;\n  border: 2px solid #d4d9e3;\n  padding: 30px;\n  margin: 20px;\n  box-sizing: content-box; }\n  .workflow h1 {\n    border-bottom: 6px solid #8492af;\n    color: #8492af;\n    font-family: 'Fira_Sans', sans-serif;\n    font-size: 56px;\n    font-weight: 400;\n    padding: 0 0 15px 0; }\n  .workflow:after {\n    content: \".\";\n    display: block;\n    height: 0;\n    clear: both;\n    visibility: hidden; }\n\n.workflow-editor_section {\n  float: left; }\n\n.workflow-posts_section {\n  float: right; }\n\n.workflow-editor_section, .workflow-posts_section {\n  width: 50%;\n  padding: 30px;\n  box-sizing: border-box; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/workflow/workflow.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkflowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkflowComponent = (function () {
    function WorkflowComponent() {
    }
    WorkflowComponent.prototype.ngOnInit = function () {
    };
    return WorkflowComponent;
}());
WorkflowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'workflow',
        template: __webpack_require__("../../../../../src/app/workflow/workflow.component.html"),
        styles: [__webpack_require__("../../../../../src/app/workflow/workflow.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], WorkflowComponent);

//# sourceMappingURL=workflow.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map