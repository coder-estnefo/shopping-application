function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _component_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./component/cart/cart.component */
    "./src/app/component/cart/cart.component.ts");
    /* harmony import */


    var _component_display_items_display_items_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./component/display-items/display-items.component */
    "./src/app/component/display-items/display-items.component.ts");
    /* harmony import */


    var _component_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./component/login/login.component */
    "./src/app/component/login/login.component.ts");
    /* harmony import */


    var _component_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./component/home/home.component */
    "./src/app/component/home/home.component.ts");
    /* harmony import */


    var _component_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./component/add-item/add-item.component */
    "./src/app/component/add-item/add-item.component.ts");
    /* harmony import */


    var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/auth-guard */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth-guard.js");

    var redirectUnauthorizedToLogin = function redirectUnauthorizedToLogin() {
      return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__["redirectUnauthorizedTo"])(['login']);
    };

    var routes = [{
      path: '',
      component: _component_display_items_display_items_component__WEBPACK_IMPORTED_MODULE_3__["DisplayItemsComponent"]
    }, {
      path: 'shop',
      component: _component_display_items_display_items_component__WEBPACK_IMPORTED_MODULE_3__["DisplayItemsComponent"]
    }, {
      path: 'cart',
      component: _component_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]
    }, {
      path: 'login',
      component: _component_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, Object.assign(Object.assign({
      path: 'home',
      component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__["canActivate"])(redirectUnauthorizedToLogin)), {
      children: [{
        path: 'add-item',
        component: _component_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_6__["AddItemComponent"]
      }]
    })];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _component_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./component/top-bar/top-bar.component */
    "./src/app/component/top-bar/top-bar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'shopping-application';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_component_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_1__["TopBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxPZmVudHNlXFxEZXNrdG9wXFxDb2RlVHJpYmVcXEFuZ3VsYXJcXHNob3BwaW5nLWFwcGxpY2F0aW9uL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufSIsIi5leGFtcGxlLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _component_display_items_display_items_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./component/display-items/display-items.component */
    "./src/app/component/display-items/display-items.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _component_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./component/top-bar/top-bar.component */
    "./src/app/component/top-bar/top-bar.component.ts");
    /* harmony import */


    var _component_cart_cart_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./component/cart/cart.component */
    "./src/app/component/cart/cart.component.ts");
    /* harmony import */


    var _component_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./component/login/login.component */
    "./src/app/component/login/login.component.ts");
    /* harmony import */


    var _component_home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./component/home/home.component */
    "./src/app/component/home/home.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _component_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./component/add-item/add-item.component */
    "./src/app/component/add-item/add-item.component.ts");
    /* harmony import */


    var _angular_material_components_file_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular-material-components/file-input */
    "./node_modules/@angular-material-components/file-input/__ivy_ngcc__/fesm2015/angular-material-components-file-input.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__["MatDividerModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_components_file_input__WEBPACK_IMPORTED_MODULE_27__["NgxMatFileInputModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _component_display_items_display_items_component__WEBPACK_IMPORTED_MODULE_16__["DisplayItemsComponent"], _component_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_18__["TopBarComponent"], _component_cart_cart_component__WEBPACK_IMPORTED_MODULE_19__["CartComponent"], _component_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"], _component_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"], _component_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_26__["AddItemComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__["MatDividerModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_components_file_input__WEBPACK_IMPORTED_MODULE_27__["NgxMatFileInputModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _component_display_items_display_items_component__WEBPACK_IMPORTED_MODULE_16__["DisplayItemsComponent"], _component_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_18__["TopBarComponent"], _component_cart_cart_component__WEBPACK_IMPORTED_MODULE_19__["CartComponent"], _component_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"], _component_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"], _component_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_26__["AddItemComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__["MatDividerModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_components_file_input__WEBPACK_IMPORTED_MODULE_27__["NgxMatFileInputModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/component/add-item/add-item.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/component/add-item/add-item.component.ts ***!
    \**********************************************************/

  /*! exports provided: AddItemComponent */

  /***/
  function srcAppComponentAddItemAddItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddItemComponent", function () {
      return AddItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AddItemComponent = /*#__PURE__*/function () {
      function AddItemComponent(storage, firestore, router) {
        _classCallCheck(this, AddItemComponent);

        this.storage = storage;
        this.firestore = firestore;
        this.router = router;
      }

      _createClass(AddItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "uploadFile",
        value: function uploadFile(event) {
          var _this = this;

          var file = event.target.files[0];
          var filename = file.name;
          var fileExt = filename.split('.').pop();
          var filePath = Math.random().toString(36).substring(2) + '.' + fileExt;
          var fileRef = this.storage.ref("images/".concat(filePath));
          var task = this.storage.upload("images/".concat(filePath), file);
          this.uploadPercent = task.percentageChanges();
          task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
            fileRef.getDownloadURL().subscribe(function (downloadURL) {
              _this.image = downloadURL;
            });
          })).subscribe();
        }
      }, {
        key: "uploadItem",
        value: function uploadItem() {
          var _this2 = this;

          var id = this.firestore.createId();
          this.firestore.collection("items").doc(id).set({
            name: this.item,
            price: this.price,
            image: this.image
          })["catch"](function (error) {
            console.log("not added error ->" + error);
          }).then(function () {
            console.log("added");

            _this2.router.navigate(["/shop"]);
          });
        }
      }]);

      return AddItemComponent;
    }();

    AddItemComponent.ɵfac = function AddItemComponent_Factory(t) {
      return new (t || AddItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    AddItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddItemComponent,
      selectors: [["app-add-item"]],
      decls: 22,
      vars: 5,
      consts: [[1, "example-card"], [2, "text-align", "center"], [1, "example-full-width"], ["matInput", "", "placeholder", "Ex. Pizza", "type", "text", "autofocus", "", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "min", "1.00", "required", "", 3, "ngModel", "ngModelChange"], [1, "button-wrap"], ["for", "upload-image", 1, "new-button"], ["id", "upload-image", "type", "file", "accept", "image/*", "required", "", 3, "change"], [1, "spacer"], ["mode", "determinate", 3, "value"], ["mat-raised-button", "", "color", "primary", 1, "btn", 3, "click"]],
      template: function AddItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " New Item ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddItemComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.item = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddItemComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.price = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Choose Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddItemComponent_Template_input_change_16_listener($event) {
            return ctx.uploadFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-progress-bar", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddItemComponent_Template_button_click_20_listener() {
            return ctx.uploadItem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Upload Item ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.item);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.price);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 3, ctx.uploadPercent));
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]],
      styles: [".example-card[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 10px auto;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bolder;\n  text-align: center;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.new-button[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 16px;\n  cursor: pointer;\n  border-radius: 4px;\n  background-color: #673ab7;\n  font-size: 16px;\n  color: #fff;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n  border-radius: 4px;\n}\n\ninput[type=file][_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  top: 6px;\n  left: 0;\n  font-size: 15px;\n  color: #999999;\n}\n\n.button-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  margin: 4px 0 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2FkZC1pdGVtL0M6XFxVc2Vyc1xcT2ZlbnRzZVxcRGVza3RvcFxcQ29kZVRyaWJlXFxBbmd1bGFyXFxzaG9wcGluZy1hcHBsaWNhdGlvbi9zcmNcXGFwcFxcY29tcG9uZW50XFxhZGQtaXRlbVxcYWRkLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9hZGQtaXRlbS9hZGQtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaURBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNFRjs7QURBQTtFQUNFLGtCQUFBO0FDR0Y7O0FEQUE7RUFDSSxrQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2FkZC1pdGVtL2FkZC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm5ldy1idXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMCAxNnB4OyBcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzNhYjc7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtaW4td2lkdGg6IDY0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIHRvcDogNnB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiByZ2IoMTUzLDE1MywxNTMpO1xyXG59XHJcbi5idXR0b24td3JhcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuICAgIG1hcmdpbjogNHB4IDAgMTZweDtcclxufSIsIi5leGFtcGxlLWNhcmQge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IDEwcHggYXV0bztcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5ldy1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NzNhYjc7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtaW4td2lkdGg6IDY0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW5wdXRbdHlwZT1maWxlXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIHRvcDogNnB4O1xuICBsZWZ0OiAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuXG4uYnV0dG9uLXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zcGFjZXIge1xuICBtYXJnaW46IDRweCAwIDE2cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-item',
          templateUrl: './add-item.component.html',
          styleUrls: ['./add-item.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/component/cart/cart.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/component/cart/cart.component.ts ***!
    \**************************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppComponentCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../service/cart.service */
    "./src/app/service/cart.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function CartComponent_div_6_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_6_mat_card_1_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var item_r4 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r5.remove(item_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " remove ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "remove_shopping_cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "a picture of ", item_r4.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.name + " - R" + item_r4.price);
      }
    }

    function CartComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartComponent_div_6_mat_card_1_Template, 11, 3, "mat-card", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.cartItems);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total: R ", ctx_r0.total, "");
      }
    }

    function CartComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Empty Cart ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CartComponent = /*#__PURE__*/function () {
      function CartComponent(cartService) {
        _classCallCheck(this, CartComponent);

        this.cartService = cartService;
        this.cartItems = [];
      }

      _createClass(CartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cartItems = this.cartService.getCartItems();
          this.total = this.cartService.getTotalPrice();
          this.count = this.cartService.getNoItems();
        }
      }, {
        key: "remove",
        value: function remove(item) {
          this.cartService.removeFromCart(item);
          this.total = this.cartService.getTotalPrice();
          this.count = this.cartService.getNoItems();
        }
      }]);

      return CartComponent;
    }();

    CartComponent.ɵfac = function CartComponent_Factory(t) {
      return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]));
    };

    CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CartComponent,
      selectors: [["app-cart"]],
      decls: 9,
      vars: 3,
      consts: [[1, "section"], [1, "heading"], [3, "matBadge"], ["class", "card", 4, "ngIf", "ngIfElse"], ["noItems", ""], [1, "card"], ["class", "items", 4, "ngFor", "ngForOf"], [1, "label"], [1, "items"], [1, "item-img"], ["mat-card-img", "", 1, "cart-img", 3, "src", "alt"], [1, "item-desc"], [1, "item-controls"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
      template: function CartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Items In Cart ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "shopping_cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CartComponent_div_6_Template, 5, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CartComponent_ng_template_7_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matBadge", ctx.count);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartItems.length)("ngIfElse", _r1);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadge"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]],
      styles: [".section[_ngcontent-%COMP%] {\n  margin: 20px 50px;\n  padding: 10px;\n}\n\n.heading[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 34px;\n}\n\n.card[_ngcontent-%COMP%] {\n  margin: auto;\n  padding: 10px;\n  text-align: center;\n}\n\n.cart-img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 120px;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 5px;\n}\n\n.items[_ngcontent-%COMP%] {\n  display: grid;\n  height: 120px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.item-img[_ngcontent-%COMP%] {\n  grid-area: 1/1/3/2;\n  width: 200px;\n  \n}\n\n.item-desc[_ngcontent-%COMP%] {\n  grid-area: 1/2/2/3;\n  justify-items: start;\n  \n}\n\n.item-controls[_ngcontent-%COMP%] {\n  grid-area: 2/2/3/3;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2NhcnQvQzpcXFVzZXJzXFxPZmVudHNlXFxEZXNrdG9wXFxDb2RlVHJpYmVcXEFuZ3VsYXJcXHNob3BwaW5nLWFwcGxpY2F0aW9uL3NyY1xcYXBwXFxjb21wb25lbnRcXGNhcnRcXGNhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFFSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsK0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbiB7IFxyXG4gICAgbWFyZ2luOiAyMHB4IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDM0cHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJ0LWltZyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5pdGVtcyB7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5pdGVtLWltZyB7XHJcbiAgICBncmlkLWFyZWE6IDEvMS8zLzI7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6IGJsdWU7Ki9cclxufVxyXG5cclxuLml0ZW0tZGVzYyB7XHJcbiAgICBncmlkLWFyZWE6IDEvMi8yLzM7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcclxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDsqL1xyXG59XHJcblxyXG4uaXRlbS1jb250cm9scyB7XHJcbiAgICBncmlkLWFyZWE6IDIvMi8zLzM7XHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDsqL1xyXG59IiwiLnNlY3Rpb24ge1xuICBtYXJnaW46IDIwcHggNTBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmhlYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzRweDtcbn1cblxuLmNhcmQge1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcnQtaW1nIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuXG4ubGFiZWwge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uaXRlbXMge1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDEyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uaXRlbS1pbWcge1xuICBncmlkLWFyZWE6IDEvMS8zLzI7XG4gIHdpZHRoOiAyMDBweDtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyovXG59XG5cbi5pdGVtLWRlc2Mge1xuICBncmlkLWFyZWE6IDEvMi8yLzM7XG4gIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xuICAvKmJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7Ki9cbn1cblxuLml0ZW0tY29udHJvbHMge1xuICBncmlkLWFyZWE6IDIvMi8zLzM7XG4gIC8qYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kOyovXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cart',
          templateUrl: './cart.component.html',
          styleUrls: ['./cart.component.scss']
        }]
      }], function () {
        return [{
          type: _service_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/component/display-items/display-items.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/component/display-items/display-items.component.ts ***!
    \********************************************************************/

  /*! exports provided: DisplayItemsComponent */

  /***/
  function srcAppComponentDisplayItemsDisplayItemsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisplayItemsComponent", function () {
      return DisplayItemsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../service/item.service */
    "./src/app/service/item.service.ts");
    /* harmony import */


    var _service_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/cart.service */
    "./src/app/service/cart.service.ts");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function DisplayItemsComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplayItemsComponent_div_7_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var item_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.addToCart(item_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Add To Cart ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "add_shopping_cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "a picture of ", item_r1.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("R ", item_r1.price, "");
      }
    }

    var DisplayItemsComponent = /*#__PURE__*/function () {
      function DisplayItemsComponent(itemService, cartService, storage) {
        _classCallCheck(this, DisplayItemsComponent);

        this.itemService = itemService;
        this.cartService = cartService;
        this.storage = storage;
        this.cart_items = [];
      }

      _createClass(DisplayItemsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getFoodItems();
          this.count = this.cartService.getNoItems();
        }
      }, {
        key: "getFoodItems",
        value: function getFoodItems() {
          var _this3 = this;

          this.itemService.getItems().subscribe(function (item) {
            return _this3.food_items = item;
          });
        }
      }, {
        key: "addToCart",
        value: function addToCart(item) {
          this.cartService.addToCart(item);
          this.count = this.cartService.getNoItems();
        }
      }]);

      return DisplayItemsComponent;
    }();

    DisplayItemsComponent.ɵfac = function DisplayItemsComponent_Factory(t) {
      return new (t || DisplayItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]));
    };

    DisplayItemsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DisplayItemsComponent,
      selectors: [["app-display-items"]],
      decls: 8,
      vars: 2,
      consts: [[1, "section"], [1, "heading"], [3, "matBadge"], [1, "box"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [1, "item-card"], ["mat-card-img", "", 3, "src", "alt"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
      template: function DisplayItemsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Items ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "shopping_cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DisplayItemsComponent_div_7_Template, 13, 4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matBadge", ctx.count);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.food_items);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__["MatBadge"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]],
      styles: [".section[_ngcontent-%COMP%] {\n  margin: 20px 50px;\n  padding: 10px;\n}\n\n.heading[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 34px;\n}\n\n.box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.item[_ngcontent-%COMP%] {\n  width: 291px;\n  margin: 10px;\n  height: 450px;\n}\n\n.item-card[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2Rpc3BsYXktaXRlbXMvQzpcXFVzZXJzXFxPZmVudHNlXFxEZXNrdG9wXFxDb2RlVHJpYmVcXEFuZ3VsYXJcXHNob3BwaW5nLWFwcGxpY2F0aW9uL3NyY1xcYXBwXFxjb21wb25lbnRcXGRpc3BsYXktaXRlbXNcXGRpc3BsYXktaXRlbXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9kaXNwbGF5LWl0ZW1zL2Rpc3BsYXktaXRlbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvZGlzcGxheS1pdGVtcy9kaXNwbGF5LWl0ZW1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24geyBcclxuICAgIG1hcmdpbjogMjBweCA1MHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmhlYWRpbmcge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzNHB4O1xyXG59XHJcblxyXG4uYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICAgIHdpZHRoOiAyOTFweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgfVxyXG5cclxuLml0ZW0tY2FyZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG4iLCIuc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCA1MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uaGVhZGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzNHB4O1xufVxuXG4uYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uaXRlbSB7XG4gIHdpZHRoOiAyOTFweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBoZWlnaHQ6IDQ1MHB4O1xufVxuXG4uaXRlbS1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisplayItemsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-display-items',
          templateUrl: './display-items.component.html',
          styleUrls: ['./display-items.component.scss']
        }]
      }], function () {
        return [{
          type: _service_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"]
        }, {
          type: _service_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/component/home/home.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/component/home/home.component.ts ***!
    \**************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 4,
      vars: 0,
      consts: [[2, "text-align", "center", "margin-top", "50px"], ["routerLink", "./add-item", "mat-raised-button", "", "color", "primary"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add Item ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/component/login/login.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/component/login/login.component.ts ***!
    \****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(formBuilder, router, auth) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.auth = auth;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginDetails = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "login",
        value: function login(details) {
          var _this4 = this;

          if (details.value.username === 'user' && details.value.password === 'user') {
            this.auth.signInAnonymously().then(function () {
              _this4.router.navigate(['/home']);
            })["catch"](function () {
              _this4.loginError = "Invalid Login Details";
            });
          } else {
            this.auth.signInWithEmailAndPassword(details.value.username, details.value.password).then(function () {
              _this4.router.navigate(['/home']);
            })["catch"](function () {
              _this4.loginError = "Invalid Login Details";
            });
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 19,
      vars: 3,
      consts: [[1, "example-card"], [1, "error"], [3, "formGroup", "ngSubmit"], ["appearance", "outline"], ["matInput", "", "type", "text", "formControlName", "username", "placeholder", "Enter email", "required", ""], ["matInput", "", "type", "password", "formControlName", "password", "placeholder", "Enter Password", "required", ""], ["mat-raised-button", "", "color", "primary", 1, "btn", 3, "disabled"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() {
            return ctx.login(ctx.loginDetails);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.loginError, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loginDetails.invalid);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]],
      styles: [".example-card[_ngcontent-%COMP%] {\n  max-width: 200px;\n  margin: 100px auto;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bolder;\n  text-align: center;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2xvZ2luL0M6XFxVc2Vyc1xcT2ZlbnRzZVxcRGVza3RvcFxcQ29kZVRyaWJlXFxBbmd1bGFyXFxzaG9wcGluZy1hcHBsaWNhdGlvbi9zcmNcXGFwcFxcY29tcG9uZW50XFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW46IDEwMHB4IGF1dG87XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSIsIi5leGFtcGxlLWNhcmQge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDEwMHB4IGF1dG87XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0biB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/component/top-bar/top-bar.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/component/top-bar/top-bar.component.ts ***!
    \********************************************************/

  /*! exports provided: TopBarComponent */

  /***/
  function srcAppComponentTopBarTopBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopBarComponent", function () {
      return TopBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_service_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/service/cart.service */
    "./src/app/service/cart.service.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TopBarComponent_button_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopBarComponent_button_11_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Logout ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TopBarComponent_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Login ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var TopBarComponent = /*#__PURE__*/function () {
      function TopBarComponent(cartService, auth, router) {
        _classCallCheck(this, TopBarComponent);

        this.cartService = cartService;
        this.auth = auth;
        this.router = router;
      }

      _createClass(TopBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          var _this5 = this;

          this.auth.signOut().then(function () {
            _this5.router.navigate(['/login']);
          });
        }
      }]);

      return TopBarComponent;
    }();

    TopBarComponent.ɵfac = function TopBarComponent_Factory(t) {
      return new (t || TopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    TopBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopBarComponent,
      selectors: [["app-top-bar"]],
      decls: 15,
      vars: 5,
      consts: [["color", "primary"], [1, "example-spacer"], ["mat-button", "", "routerLink", "/shop"], ["mat-button", "", "routerLink", "/home"], ["mat-button", "", "routerLink", "/cart"], [3, "matBadge"], ["mat-button", "", 3, "click", 4, "ngIf", "ngIfElse"], ["showLogin", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "routerLink", "/login"]],
      template: function TopBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Shopping Application");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " shop ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "shopping_cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TopBarComponent_button_11_Template, 2, 0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TopBarComponent_ng_template_13_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matBadge", ctx.cartService.getNoItems());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 3, ctx.auth.user))("ngIfElse", _r1);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadge"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]],
      styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3RvcC1iYXIvQzpcXFVzZXJzXFxPZmVudHNlXFxEZXNrdG9wXFxDb2RlVHJpYmVcXEFuZ3VsYXJcXHNob3BwaW5nLWFwcGxpY2F0aW9uL3NyY1xcYXBwXFxjb21wb25lbnRcXHRvcC1iYXJcXHRvcC1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC90b3AtYmFyL3RvcC1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvdG9wLWJhci90b3AtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59IiwiLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-top-bar',
          templateUrl: './top-bar.component.html',
          styleUrls: ['./top-bar.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_service_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/cart.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/service/cart.service.ts ***!
    \*****************************************/

  /*! exports provided: CartService */

  /***/
  function srcAppServiceCartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartService", function () {
      return CartService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CartService = /*#__PURE__*/function () {
      function CartService() {
        _classCallCheck(this, CartService);

        this.cart = [];
        this.total = 0.00;
      }

      _createClass(CartService, [{
        key: "addToCart",
        value: function addToCart(item) {
          this.cart.push(item);
          this.total += item.price;
        }
      }, {
        key: "removeFromCart",
        value: function removeFromCart(item) {
          this.cart.splice(this.cart.indexOf(item), 1);
          this.total -= item.price;
        }
      }, {
        key: "getCartItems",
        value: function getCartItems() {
          return this.cart;
        }
      }, {
        key: "getNoItems",
        value: function getNoItems() {
          return this.cart.length;
        }
      }, {
        key: "getTotalPrice",
        value: function getTotalPrice() {
          return this.total.toFixed(2);
        }
      }]);

      return CartService;
    }();

    CartService.ɵfac = function CartService_Factory(t) {
      return new (t || CartService)();
    };

    CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CartService,
      factory: CartService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/item.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/service/item.service.ts ***!
    \*****************************************/

  /*! exports provided: ItemService */

  /***/
  function srcAppServiceItemServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemService", function () {
      return ItemService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    var ItemService = /*#__PURE__*/function () {
      function ItemService(firestore) {
        _classCallCheck(this, ItemService);

        this.firestore = firestore;
      }

      _createClass(ItemService, [{
        key: "getItems",
        value: function getItems() {
          //return of (Items);
          return this.firestore.collection('items').valueChanges();
        }
      }]);

      return ItemService;
    }();

    ItemService.ɵfac = function ItemService_Factory(t) {
      return new (t || ItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]));
    };

    ItemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ItemService,
      factory: ItemService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.prod.ts":
  /*!**********************************************!*\
    !*** ./src/environments/environment.prod.ts ***!
    \**********************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentProdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var environment = {
      production: true,
      firebaseConfig: {
        apiKey: "AIzaSyD-dQzKRS4VAkQ8ER0n2li1udXprXlX6sQ",
        authDomain: "shopping-application-f2282.firebaseapp.com",
        databaseURL: "https://shopping-application-f2282.firebaseio.com",
        projectId: "shopping-application-f2282",
        storageBucket: "shopping-application-f2282.appspot.com",
        messagingSenderId: "807261511271",
        appId: "1:807261511271:web:e270faedceed444e72bec2"
      }
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Ofentse\Desktop\CodeTribe\Angular\shopping-application\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map