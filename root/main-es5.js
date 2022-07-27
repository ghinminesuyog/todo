function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"app flex-column\">\n    <app-header (toggleSidebar)=\"toggleSidebar($event)\"> </app-header>\n    <div class=\"app-content flex-row\">\n        <app-side-bar [ngClass]=\"{'sidebar-invisible': showSidebar !== true, 'sidebar-visible': showSidebar === true}\"\n            [collections]=\"collections\" (selectedCollection)=\"selectCollection($event)\"></app-side-bar>\n        <app-todo class=\"flex-column align-center flex-100\" [collection]=\"selectedCollection\"\n            (saveCollectionChanges)=\"saveAllCollections($event)\"></app-todo>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>footer works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar class=\"header-container flex-row space-between\">\n    <div class=\"title flex-row align-center\">\n        <button class=\"menu-btn\" mat-icon-button (click)=\"toggleSidebarMenu()\">\n            <mat-icon>menu</mat-icon>\n        </button>\n        <mat-icon>dashboard</mat-icon>\n        <span> {{'dashboard' |translate}} </span>\n    </div>\n    <button mat-mini-fab (click)=\"addNewCollection()\">\n        <mat-icon>add</mat-icon>\n    </button>\n</mat-toolbar>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/side-bar/side-bar.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/side-bar/side-bar.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSideBarSideBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ul class=\"sidenav-container\">\n    <li class=\"sidenav-content flex-row\" *ngFor=\"let collection of collections\" (click)=\"selectCollection(collection)\"\n        [ngClass]=\"{'selectedCollection' : selectedCollectionId === collection.id }\">\n        <mat-icon>wysiwyg</mat-icon>\n        <input [(ngModel)]=\"collection.title\" (keyup.enter)=\"renameCollection(collection.title)\"\n            (keyup.blur)=\"renameCollection(collection.title)\" placeholder=\"{{'collections.newCollection' |translate}}\">\n    </li>\n</ul>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodoTodoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"collection\" class=\"collection-content flex-column\">\n\n    <div class=\"collection-header flex-row space-between\">\n        <input class=\"collection-name\" [(ngModel)]=\"collection.title\" (keyup.enter)=\"renameCollection(collection.title)\"\n            (keyup.blur)=\"renameCollection(collection.title)\" placeholder=\"{{'collections.newCollection' |translate}}\">\n\n        <button mat-icon-button [matMenuTriggerFor]=\"collectionsOptionsMenu\">\n            <mat-icon>more_horiz</mat-icon>\n            <mat-menu #collectionsOptionsMenu=\"matMenu\">\n                <button mat-menu-item (click)=\"markAllAsDone()\">\n                    <mat-icon>done_all</mat-icon>\n                    <span>{{'todo.doAll' | translate}} </span>\n                </button>\n                <button mat-menu-item (click)=\"markAllAsTodo()\">\n                    <mat-icon>remove_done</mat-icon>\n                    <span>{{'todo.undoAll' | translate}} </span>\n                </button>\n                <button mat-menu-item (click)=\"clearAll()\">\n                    <mat-icon>clear_all</mat-icon>\n                    <span>{{'todo.clearAll' | translate}} </span>\n                </button>\n                <button mat-menu-item (click)=\"removeAllCompleted()\">\n                    <mat-icon>playlist_remove</mat-icon>\n                    <span>{{'todo.removeAllCompleted' | translate}} </span>\n                </button>\n                <button mat-menu-item (click)=\"deleteCollection()\">\n                    <mat-icon>delete</mat-icon>\n                    <span>{{'collections.deleteCollection' | translate}} </span>\n                </button>\n            </mat-menu>\n        </button>\n    </div>\n\n    <div class=\"flex-row new-todo-pill\">\n        <mat-icon class=\"add-circle\" color=\"accent\" (click)=\"addNewTask()\">add</mat-icon>\n        <input class=\"flex-100\" matInput type=\"text\" [(ngModel)]=\"newTaskTitle\"\n            placeholder=\"{{'todo.newTask.title' |translate}}\" (keyup.enter)=\"addNewTask()\">\n    </div>\n\n    <div class=\"collection-body\">\n        <ul class=\"collection-todos\">\n            <p class=\"todo-header\">{{'todo.tasks' | translate}}\n                <span> - </span>\n                <span>{{collection.todos.length}}</span>\n            </p>\n            <li class=\"todo-pill\" *ngFor=\"let todo of collection.todos\"\n                [ngClass]=\"{'completedTask': todo.isDone === true}\">\n                <mat-checkbox [(ngModel)]=\"todo.isDone\" (click)=\"toggleDoneStatus(todo)\">\n                </mat-checkbox>\n                <input [(ngModel)]=\"todo.title\" (keyup.enter)=\"changeTaskTitle(collection.id,todo.id)\"\n                    (keyup.blur)=\"changeTaskTitle(collection.id,todo.id)\">\n                <mat-icon class=\"delete-task\" (click)=\"deleteTask(todo)\">delete</mat-icon>\n            </li>\n        </ul>\n\n        <ul class=\"collection-todos\">\n            <p class=\"todo-header\">{{'todo.completed' | translate}}\n                <span> - </span>\n                <span>{{collection.completedTasks.length}}</span>\n            </p>\n            <li class=\"todo-pill completedTask\" *ngFor=\"let todo of collection.completedTasks\">\n                <mat-checkbox [(ngModel)]=\"todo.isDone\" (click)=\"toggleDoneStatus(todo)\">\n                </mat-checkbox>\n                <input [(ngModel)]=\"todo.title\" (keyup.enter)=\"changeTaskTitle(collection.id,todo.id)\"\n                    (keyup.blur)=\"changeTaskTitle(collection.id,todo.id)\">\n                <mat-icon class=\"delete-task\" (click)=\"deleteTask(todo)\">delete</mat-icon>\n            </li>\n        </ul>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".app {\n  height: 100%;\n  width: 100%;\n}\n.app .app-content {\n  height: 100%;\n  width: 100%;\n  min-height: 0;\n}\n.app .app-content * {\n  transition: all 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.app app-side-bar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.app app-side-bar.sidebar-visible {\n  transform: translateX(0px);\n  min-width: 10%;\n  height: 100%;\n}\n.app app-side-bar.sidebar-invisible {\n  transform: translateX(-100%);\n  min-width: 0;\n  width: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXlvZy90b2RvL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0NKO0FEQUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNFUjtBRERRO0VBQ0kscURBQUE7QUNHWjtBREFJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFEQUFBO0FDRVI7QUREUTtFQUNJLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNHWjtBRERRO0VBQ0ksNEJBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQ0daIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5hcHAtY29udGVudCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgICAgICoge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuOXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXBwLXNpZGUtYmFyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xuICAgICAgICAmLnNpZGViYXItdmlzaWJsZSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgICYuc2lkZWJhci1pbnZpc2libGUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLmFwcCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYXBwIC5hcHAtY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDA7XG59XG4uYXBwIC5hcHAtY29udGVudCAqIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuOXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG59XG4uYXBwIGFwcC1zaWRlLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcbn1cbi5hcHAgYXBwLXNpZGUtYmFyLnNpZGViYXItdmlzaWJsZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICBtaW4td2lkdGg6IDEwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmFwcCBhcHAtc2lkZS1iYXIuc2lkZWJhci1pbnZpc2libGUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICBtaW4td2lkdGg6IDA7XG4gIHdpZHRoOiAwO1xufSJdfQ== */";
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.service */
    "./src/app/app.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(appService) {
        _classCallCheck(this, AppComponent);

        this.appService = appService;
        this.showSidebar = true;
        this.collections = [];
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCollections();
        }
      }, {
        key: "getCollections",
        value: function getCollections() {
          var _this = this;

          this.appService.getCollections().subscribe(function (collections) {
            _this.collections = collections;
          });
        }
      }, {
        key: "toggleSidebar",
        value: function toggleSidebar(toggle) {
          this.showSidebar = toggle;
        }
      }, {
        key: "selectCollection",
        value: function selectCollection(collection) {
          this.selectedCollection = collection;
        }
      }, {
        key: "saveAllCollections",
        value: function saveAllCollections(collection) {
          this.appService.saveCollections(this.collections).subscribe(function (response) {// this.getCollections();
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.model.ts":
  /*!******************************!*\
    !*** ./src/app/app.model.ts ***!
    \******************************/

  /*! exports provided: Todo, Collection */

  /***/
  function srcAppAppModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Todo", function () {
      return Todo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Collection", function () {
      return Collection;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Todo = /*#__PURE__*/_createClass(function Todo(title) {
      _classCallCheck(this, Todo);

      this.title = title;
      this.isDone = false;
      this.id = 'id' + Math.random().toString(16).slice(2);
    });

    var Collection = /*#__PURE__*/function () {
      function Collection(title) {
        _classCallCheck(this, Collection);

        this.title = title;
        this.todos = [];
        this.completedTasks = [];
        this.id = 'collectionId' + Math.random().toString(16).slice(2);
      }

      _createClass(Collection, [{
        key: "addTask",
        value: function addTask(title) {
          var newTodo = new Todo(title);
          this.todos.splice(0, 0, newTodo);
          return newTodo;
        }
      }, {
        key: "removeTask",
        value: function removeTask(id) {
          var todoIndex = this.todos.findIndex(function (todo) {
            return todo.id === id;
          });

          if (todoIndex > -1) {
            this.todos.splice(todoIndex, 1);
          } else {
            var completedTaskIndex = this.completedTasks.findIndex(function (todo) {
              return todo.id === id;
            });
            console.log(completedTaskIndex);

            if (completedTaskIndex > -1) {
              this.completedTasks.splice(completedTaskIndex, 1);
            }
          }
        }
      }, {
        key: "markAsTodo",
        value: function markAsTodo(id) {
          var todoObject = this.completedTasks.find(function (toDo) {
            return toDo.id === id;
          });
          var todoIndex = this.completedTasks.indexOf(todoObject);
          this.completedTasks.splice(todoIndex, 1);
          console.log(todoObject);
          todoObject.isDone = false;
          this.todos.push(todoObject);
        }
      }, {
        key: "markAsComplete",
        value: function markAsComplete(id) {
          var todoObject = this.todos.find(function (toDo) {
            return toDo.id === id;
          });
          var todoIndex = this.todos.indexOf(todoObject);
          this.todos.splice(todoIndex, 1);
          todoObject.isDone = true;
          this.completedTasks.push(todoObject);
        }
      }, {
        key: "markAllAsTodo",
        value: function markAllAsTodo() {
          var _this2 = this;

          this.completedTasks.forEach(function (todo) {
            todo.isDone = false;

            _this2.todos.push(todo);
          });
          this.completedTasks = [];
        }
      }, {
        key: "markAllAsComplete",
        value: function markAllAsComplete() {
          var _this3 = this;

          this.todos.forEach(function (todo) {
            todo.isDone = true;

            _this3.completedTasks.push(todo);
          });
          this.todos = [];
        }
      }]);

      return Collection;
    }();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: HttpLoaderFactory, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./side-bar/side-bar.component */
    "./src/app/side-bar/side-bar.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _todo_todo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./todo/todo.component */
    "./src/app/todo/todo.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js"); // AoT requires an exported function for factories


    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http);
    }

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_11__["SideBarComponent"], _todo_todo_component__WEBPACK_IMPORTED_MODULE_13__["TodoComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
        },
        defaultLanguage: 'en-US'
      }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.service.ts":
  /*!********************************!*\
    !*** ./src/app/app.service.ts ***!
    \********************************/

  /*! exports provided: AppService */

  /***/
  function srcAppAppServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppService", function () {
      return AppService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _app_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.model */
    "./src/app/app.model.ts");

    var AppService = /*#__PURE__*/function () {
      function AppService() {
        _classCallCheck(this, AppService);

        this.collections = [];
        this.constantKeyName = 'constantKeyNameForTodo';
      }

      _createClass(AppService, [{
        key: "addCollection",
        value: function addCollection(title) {
          var collection = new _app_model__WEBPACK_IMPORTED_MODULE_3__["Collection"](title);
          this.collections.splice(0, 0, collection);
        }
      }, {
        key: "getCollections",
        value: function getCollections() {
          this.readFromLocalStorage();
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.collections);
        }
      }, {
        key: "readFromLocalStorage",
        value: function readFromLocalStorage() {
          try {
            var collections = JSON.parse(localStorage.getItem("".concat(this.constantKeyName)));
            this.collections = [];

            var _iterator = _createForOfIteratorHelper(collections),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var collectionObject = _step.value;
                var collection = new _app_model__WEBPACK_IMPORTED_MODULE_3__["Collection"](collectionObject.title);
                collection.todos = collectionObject.todos;
                collection.completedTasks = collectionObject.completedTasks;
                this.collections.push(collection);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          } catch (error) {
            console.error(error);
            this.collections = [];
          }

          return this.collections;
        }
      }, {
        key: "saveCollections",
        value: function saveCollections(collections) {
          collections ? localStorage.setItem("".concat(this.constantKeyName), JSON.stringify(collections)) : localStorage.setItem("".concat(this.constantKeyName), JSON.stringify(this.collections)); // this.readFromLocalStorage();

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('Success');
        }
      }, {
        key: "deleteCollection",
        value: function deleteCollection(id) {
          var collectionObj = this.collections.find(function (collection) {
            return collection.id === id;
          });
          var collectionIndex = this.collections.indexOf(collectionObj);

          if (collectionIndex > -1) {
            this.collections.splice(collectionIndex, 1);
            this.saveCollections(this.collections);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
          } else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
          }
        }
      }]);

      return AppService;
    }();

    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AppService);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/footer/footer.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/header/header.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-container {\n  background-color: #21212b;\n}\n.header-container .title {\n  color: #fff;\n}\n.header-container .title .menu-btn {\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXlvZy90b2RvL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zdXlvZy90b2RvL3NyYy9hc3NldHMvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx5QkNDeUI7QUNGN0I7QUZFSTtFQUNJLFdDRUE7QUNGUjtBRkNRO0VBQ0ksbUJBQUE7QUVDWiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vYXNzZXRzL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I7XG4gICAgLnRpdGxlIHtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgLm1lbnUtYnRuIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIkcHJpbWFyeS1jb2xvcjogI2Q2MzY5MTtcbiRzZWNvbmRhcnktY29sb3I6IHJnYigxMTIsIDE5NiwgMTkxKTtcbiRuZWdhdGl2ZS1hY3Rpb24tY29sb3I6ICNGODRDNkY7XG4kYmFja2dyb3VuZC1jb2xvcjogIzE3MTgxZjtcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyYjtcbiRwcmltYXJ5LWZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiRmb250LWNvbG9yOiAjZDNkM2QzO1xuJHdoaXRlOiAjZmZmXG4iLCIuaGVhZGVyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMmI7XG59XG4uaGVhZGVyLWNvbnRhaW5lciAudGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5oZWFkZXItY29udGFpbmVyIC50aXRsZSAubWVudS1idG4ge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app.service */
    "./src/app/app.service.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(appService, translateService) {
        _classCallCheck(this, HeaderComponent);

        this.appService = appService;
        this.translateService = translateService;
        this.toggleSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showSideBar = true;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleSidebarMenu",
        value: function toggleSidebarMenu() {
          this.showSideBar = !this.showSideBar;
          this.toggleSidebar.emit(this.showSideBar);
        }
      }, {
        key: "addNewCollection",
        value: function addNewCollection() {
          var collectionName = this.translateService.instant('collections.newCollection');
          this.appService.addCollection(collectionName);
          this.appService.saveCollections(this.appService.collections);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], HeaderComponent.prototype, "toggleSidebar", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/side-bar/side-bar.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/side-bar/side-bar.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSideBarSideBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sidenav-container {\n  background-color: #21212b;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  margin: 0;\n  overflow-x: auto;\n}\n.sidenav-container .sidenav-content {\n  cursor: pointer;\n  padding: 5px 20px;\n  align-items: center;\n}\n.sidenav-container .sidenav-content p {\n  padding-left: 10px;\n  margin: 8px;\n}\n.sidenav-container .sidenav-content:hover, .sidenav-container .sidenav-content.selectedCollection {\n  background-color: #17181f;\n}\n.sidenav-container .sidenav-content mat-icon {\n  border: 1px solid;\n  border-radius: 50%;\n  padding: 5px;\n  margin: 10px 0;\n  color: #fff;\n}\n.sidenav-container .sidenav-content:nth-child(odd) mat-icon {\n  background-color: #d63691;\n  border-color: #d63691;\n}\n.sidenav-container .sidenav-content:nth-child(even) mat-icon {\n  background-color: #70c4bf;\n  border-color: #70c4bf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXlvZy90b2RvL3NyYy9hcHAvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc3V5b2cvdG9kby9zcmMvYXNzZXRzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9zaWRlLWJhci9zaWRlLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHlCQ0N5QjtFREF6QiwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBRURKO0FGRUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBRUFSO0FGQ1E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUVDWjtBRkNRO0VBQ0kseUJDakJPO0FDa0JuQjtBRkNRO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0NwQko7QUNxQlI7QUZFWTtFQUNJLHlCQy9CQTtFRGdDQSxxQkNoQ0E7QUNnQ2hCO0FGSVk7RUFDSSx5QkNwQ0U7RURxQ0YscUJDckNFO0FDbUNsQiIsImZpbGUiOiJzcmMvYXBwL3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy92YXJpYWJsZXMuc2Nzc1wiO1xuXG4uc2lkZW5hdi1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIC5zaWRlbmF2LWNvbnRlbnQge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogOHB4O1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIsICYuc2VsZWN0ZWRDb2xsZWN0aW9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xuICAgICAgICB9XG4gICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgICY6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJjpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIC5zZWxlY3RlZENvbGxlY3Rpb24ge1xuICAgIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcbiAgICAvLyB9XG59XG4iLCIkcHJpbWFyeS1jb2xvcjogI2Q2MzY5MTtcbiRzZWNvbmRhcnktY29sb3I6IHJnYigxMTIsIDE5NiwgMTkxKTtcbiRuZWdhdGl2ZS1hY3Rpb24tY29sb3I6ICNGODRDNkY7XG4kYmFja2dyb3VuZC1jb2xvcjogIzE3MTgxZjtcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyYjtcbiRwcmltYXJ5LWZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiRmb250LWNvbG9yOiAjZDNkM2QzO1xuJHdoaXRlOiAjZmZmXG4iLCIuc2lkZW5hdi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTJiO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuLnNpZGVuYXYtY29udGFpbmVyIC5zaWRlbmF2LWNvbnRlbnQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNpZGVuYXYtY29udGFpbmVyIC5zaWRlbmF2LWNvbnRlbnQgcCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbWFyZ2luOiA4cHg7XG59XG4uc2lkZW5hdi1jb250YWluZXIgLnNpZGVuYXYtY29udGVudDpob3ZlciwgLnNpZGVuYXYtY29udGFpbmVyIC5zaWRlbmF2LWNvbnRlbnQuc2VsZWN0ZWRDb2xsZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTgxZjtcbn1cbi5zaWRlbmF2LWNvbnRhaW5lciAuc2lkZW5hdi1jb250ZW50IG1hdC1pY29uIHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDEwcHggMDtcbiAgY29sb3I6ICNmZmY7XG59XG4uc2lkZW5hdi1jb250YWluZXIgLnNpZGVuYXYtY29udGVudDpudGgtY2hpbGQob2RkKSBtYXQtaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNjM2OTE7XG4gIGJvcmRlci1jb2xvcjogI2Q2MzY5MTtcbn1cbi5zaWRlbmF2LWNvbnRhaW5lciAuc2lkZW5hdi1jb250ZW50Om50aC1jaGlsZChldmVuKSBtYXQtaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MGM0YmY7XG4gIGJvcmRlci1jb2xvcjogIzcwYzRiZjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/side-bar/side-bar.component.ts":
  /*!************************************************!*\
    !*** ./src/app/side-bar/side-bar.component.ts ***!
    \************************************************/

  /*! exports provided: SideBarComponent */

  /***/
  function srcAppSideBarSideBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideBarComponent", function () {
      return SideBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app.service */
    "./src/app/app.service.ts");

    var SideBarComponent = /*#__PURE__*/function () {
      function SideBarComponent(appService) {
        _classCallCheck(this, SideBarComponent);

        this.appService = appService;
        this.selectedCollection = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(SideBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.collections.length > 0) {
            this.selectCollection(this.collections[0]);
          }
        }
      }, {
        key: "selectCollection",
        value: function selectCollection(collection) {
          this.selectedCollectionId = collection.id;
          this.selectedCollection.emit(collection);
        }
      }, {
        key: "renameCollection",
        value: function renameCollection(newName) {
          if (newName) {
            this.appService.saveCollections(this.appService.collections);
          }
        }
      }]);

      return SideBarComponent;
    }();

    SideBarComponent.ctorParameters = function () {
      return [{
        type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SideBarComponent.prototype, "collections", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SideBarComponent.prototype, "selectedCollection", void 0);
    SideBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-side-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./side-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/side-bar/side-bar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./side-bar.component.scss */
      "./src/app/side-bar/side-bar.component.scss"))["default"]]
    })], SideBarComponent);
    /***/
  },

  /***/
  "./src/app/todo/todo.component.scss":
  /*!******************************************!*\
    !*** ./src/app/todo/todo.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodoTodoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".collection-content {\n  padding: 10px 40px;\n  width: 70%;\n  min-height: 0;\n}\n.collection-content .collection-header {\n  margin-bottom: 15px;\n}\n.collection-content .collection-header .collection-name {\n  margin: 0;\n}\n.collection-content .new-todo-pill {\n  border: 1px solid #21212b;\n  border-radius: 10px;\n  padding: 10px;\n}\n.collection-content .new-todo-pill .add-circle {\n  background-color: #ff4081;\n  color: #fff;\n  border-radius: 50%;\n  margin-right: 20px;\n}\n.collection-content .collection-body {\n  height: 100%;\n  overflow: auto;\n}\n.collection-content .collection-body .collection-todos .todo-header {\n  font-weight: 300;\n  font-size: 1vw;\n}\n.collection-content .collection-body .collection-todos .todo-pill {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  background-color: #21212b;\n  padding: 10px;\n  margin: 5px 0;\n  border-radius: 10px;\n  -moz-column-gap: 10px;\n       column-gap: 10px;\n}\n.collection-content .collection-body .collection-todos .todo-pill input {\n  width: 100%;\n}\n.collection-content .collection-body .collection-todos .todo-pill .delete-task {\n  opacity: 0;\n  color: #d63691;\n  cursor: pointer;\n}\n.collection-content .collection-body .collection-todos .todo-pill:hover .delete-task {\n  opacity: 1;\n}\n.collection-content .collection-body .collection-todos .completedTask input {\n  -webkit-text-decoration: line-through #d63691;\n          text-decoration: line-through #d63691;\n  text-decoration-thickness: 0.1px;\n}\n::ng-deep .mat-checkbox-frame {\n  border-color: #d63691;\n  border-radius: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXlvZy90b2RvL3NyYy9hcHAvdG9kby90b2RvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90b2RvL3RvZG8uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc3V5b2cvdG9kby9zcmMvYXNzZXRzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQ0RKO0FERUk7RUFDSSxtQkFBQTtBQ0FSO0FEQ1E7RUFDSSxTQUFBO0FDQ1o7QURFSTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDQVI7QURDUTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDWjtBREVJO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUNBUjtBREVZO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDQWhCO0FERVk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCRS9CYTtFRmdDYixhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7T0FBQSxnQkFBQTtBQ0FoQjtBRENnQjtFQUNJLFdBQUE7QUNDcEI7QURDZ0I7RUFDSSxVQUFBO0VBQ0EsY0U3Q0o7RUY4Q0ksZUFBQTtBQ0NwQjtBREVvQjtFQUNJLFVBQUE7QUNBeEI7QURLZ0I7RUFDSSw2Q0FBQTtVQUFBLHFDQUFBO0VBQ0EsZ0NBQUE7QUNIcEI7QURVQTtFQUNJLHFCRWpFWTtFRmtFWiw2QkFBQTtBQ1BKIiwiZmlsZSI6InNyYy9hcHAvdG9kby90b2RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy92YXJpYWJsZXMuc2Nzc1wiO1xuXG4uY29sbGVjdGlvbi1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHg7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBtaW4taGVpZ2h0OiAwO1xuICAgIC5jb2xsZWN0aW9uLWhlYWRlciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIC5jb2xsZWN0aW9uLW5hbWUge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5uZXctdG9kby1waWxsIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAuYWRkLWNpcmNsZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MDgxO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNvbGxlY3Rpb24tYm9keSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIC5jb2xsZWN0aW9uLXRvZG9zIHtcbiAgICAgICAgICAgIC50b2RvLWhlYWRlciB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDF2dztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50b2RvLXBpbGwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIGNvbHVtbi1nYXA6IDEwcHg7XG4gICAgICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRlbGV0ZS10YXNrIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAuZGVsZXRlLXRhc2sge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb21wbGV0ZWRUYXNrIHtcbiAgICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAwLjFweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbjo6bmctZGVlcCAubWF0LWNoZWNrYm94LWZyYW1lIHtcbiAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xufVxuIiwiLmNvbGxlY3Rpb24tY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHggNDBweDtcbiAgd2lkdGg6IDcwJTtcbiAgbWluLWhlaWdodDogMDtcbn1cbi5jb2xsZWN0aW9uLWNvbnRlbnQgLmNvbGxlY3Rpb24taGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5jb2xsZWN0aW9uLWNvbnRlbnQgLmNvbGxlY3Rpb24taGVhZGVyIC5jb2xsZWN0aW9uLW5hbWUge1xuICBtYXJnaW46IDA7XG59XG4uY29sbGVjdGlvbi1jb250ZW50IC5uZXctdG9kby1waWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzIxMjEyYjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5jb2xsZWN0aW9uLWNvbnRlbnQgLm5ldy10b2RvLXBpbGwgLmFkZC1jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MDgxO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uY29sbGVjdGlvbi1jb250ZW50IC5jb2xsZWN0aW9uLWJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmNvbGxlY3Rpb24tY29udGVudCAuY29sbGVjdGlvbi1ib2R5IC5jb2xsZWN0aW9uLXRvZG9zIC50b2RvLWhlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMXZ3O1xufVxuLmNvbGxlY3Rpb24tY29udGVudCAuY29sbGVjdGlvbi1ib2R5IC5jb2xsZWN0aW9uLXRvZG9zIC50b2RvLXBpbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMmI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogNXB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbHVtbi1nYXA6IDEwcHg7XG59XG4uY29sbGVjdGlvbi1jb250ZW50IC5jb2xsZWN0aW9uLWJvZHkgLmNvbGxlY3Rpb24tdG9kb3MgLnRvZG8tcGlsbCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbGxlY3Rpb24tY29udGVudCAuY29sbGVjdGlvbi1ib2R5IC5jb2xsZWN0aW9uLXRvZG9zIC50b2RvLXBpbGwgLmRlbGV0ZS10YXNrIHtcbiAgb3BhY2l0eTogMDtcbiAgY29sb3I6ICNkNjM2OTE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb2xsZWN0aW9uLWNvbnRlbnQgLmNvbGxlY3Rpb24tYm9keSAuY29sbGVjdGlvbi10b2RvcyAudG9kby1waWxsOmhvdmVyIC5kZWxldGUtdGFzayB7XG4gIG9wYWNpdHk6IDE7XG59XG4uY29sbGVjdGlvbi1jb250ZW50IC5jb2xsZWN0aW9uLWJvZHkgLmNvbGxlY3Rpb24tdG9kb3MgLmNvbXBsZXRlZFRhc2sgaW5wdXQge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCAjZDYzNjkxO1xuICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAwLjFweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtZnJhbWUge1xuICBib3JkZXItY29sb3I6ICNkNjM2OTE7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xufSIsIiRwcmltYXJ5LWNvbG9yOiAjZDYzNjkxO1xuJHNlY29uZGFyeS1jb2xvcjogcmdiKDExMiwgMTk2LCAxOTEpO1xuJG5lZ2F0aXZlLWFjdGlvbi1jb2xvcjogI0Y4NEM2RjtcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxODFmO1xuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTJiO1xuJHByaW1hcnktZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuJGZvbnQtY29sb3I6ICNkM2QzZDM7XG4kd2hpdGU6ICNmZmZcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/todo/todo.component.ts":
  /*!****************************************!*\
    !*** ./src/app/todo/todo.component.ts ***!
    \****************************************/

  /*! exports provided: TodoComponent */

  /***/
  function srcAppTodoTodoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoComponent", function () {
      return TodoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app.service */
    "./src/app/app.service.ts");

    var TodoComponent = /*#__PURE__*/function () {
      function TodoComponent(appService) {
        _classCallCheck(this, TodoComponent);

        this.appService = appService;
        this.saveCollectionChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(TodoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addNewTask",
        value: function addNewTask() {
          if (this.newTaskTitle) {
            this.collection.addTask(this.newTaskTitle);
            this.newTaskTitle = '';
            this.saveCollectionChanges.emit(this.collection);
          }
        }
      }, {
        key: "changeTaskTitle",
        value: function changeTaskTitle(collectionId, taskId) {
          this.saveCollectionChanges.emit(this.collection);
        }
      }, {
        key: "toggleDoneStatus",
        value: function toggleDoneStatus(todo) {
          todo.isDone ? this.collection.markAsTodo(todo.id) : this.collection.markAsComplete(todo.id);
          this.saveCollectionChanges.emit(this.collection);
        }
      }, {
        key: "deleteTask",
        value: function deleteTask(todo) {
          this.collection.removeTask(todo.id);
          console.log(this.collection);
          this.saveCollectionChanges.emit(this.collection);
        }
      }, {
        key: "markAllAsDone",
        value: function markAllAsDone() {
          this.collection.markAllAsComplete();
          this.saveCollectionChanges.emit(this.collection);
        }
      }, {
        key: "markAllAsTodo",
        value: function markAllAsTodo() {
          this.collection.markAllAsTodo();
          this.saveCollectionChanges.emit(this.collection);
        }
      }, {
        key: "renameCollection",
        value: function renameCollection(newName) {
          if (newName) {
            this.appService.saveCollections(this.appService.collections);
          }
        }
      }, {
        key: "removeAllCompleted",
        value: function removeAllCompleted() {
          this.collection.completedTasks = [];
          this.saveCollectionChanges.emit(this.collection);
        }
      }, {
        key: "clearAll",
        value: function clearAll() {
          this.collection.todos = [];
          this.collection.completedTasks = [];
          this.saveCollectionChanges.emit(this.collection);
        }
      }, {
        key: "deleteCollection",
        value: function deleteCollection() {
          var _this4 = this;

          this.appService.deleteCollection(this.collection.id).subscribe(function (response) {
            console.log('Collection deleted', response);
            _this4.collection = null;
          });
        }
      }]);

      return TodoComponent;
    }();

    TodoComponent.ctorParameters = function () {
      return [{
        type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TodoComponent.prototype, "collection", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TodoComponent.prototype, "saveCollectionChanges", void 0);
    TodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-todo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./todo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./todo.component.scss */
      "./src/app/todo/todo.component.scss"))["default"]]
    })], TodoComponent);
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
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
    /*! /Users/suyog/todo/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map