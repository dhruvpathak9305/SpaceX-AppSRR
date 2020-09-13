/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // import React from "react";


var _reactRouterDom = __webpack_require__(2);

var _HomePage = __webpack_require__(11);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _LaunchesListPage = __webpack_require__(12);

var _LaunchesListPage2 = _interopRequireDefault(_LaunchesListPage);

var _App = __webpack_require__(15);

var _App2 = _interopRequireDefault(_App);

var _NotFoundPage = __webpack_require__(17);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({
    path: "/"
  }, _HomePage2.default, {
    exact: true
  }), _extends({
    path: "/launches"
  }, _LaunchesListPage2.default), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchLaunches = exports.FETCH_LAUNCHES = undefined;

var _axios = __webpack_require__(13);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_LAUNCHES = exports.FETCH_LAUNCHES = "fetch_launches";

var fetchLaunches = exports.fetchLaunches = function fetchLaunches() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _axios2.default.get("https://api.spacexdata.com/v3/launches?limit=100");

            case 2:
              res = _context.sent;


              dispatch({
                type: FETCH_LAUNCHES,
                payload: res
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(9);

var _express = __webpack_require__(10);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(1);

var _Routes = __webpack_require__(3);

var _Routes2 = _interopRequireDefault(_Routes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createStore = __webpack_require__(18);

var _createStore2 = _interopRequireDefault(_createStore);

var _renderer = __webpack_require__(22);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); // const express = require("express");
// const React = require("react");
// const renderToString = require("react-dom/server").renderToString;
// const Home = require("./client/components/Home").default;

app.use(_express2.default.static("public"));

app.get("*", function (req, res) {
  var store = (0, _createStore2.default)();

  //Some logic to initialize and load data into store
  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        promise.then(resolve).catch(resolve);
      });
    }
  });

  Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _renderer2.default)(req, store, context);

    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });
});

app.listen(3000, function () {
  console.log("Listening on port 3000");
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HomePage() {
  return _react2.default.createElement(
    "div",
    null,
    "I'm the homes Component."
  );
}
exports.default = {
  component: HomePage
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _actions = __webpack_require__(5);

var _reactHelmet = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LaunchesListPage = function (_Component) {
  _inherits(LaunchesListPage, _Component);

  function LaunchesListPage() {
    _classCallCheck(this, LaunchesListPage);

    return _possibleConstructorReturn(this, (LaunchesListPage.__proto__ || Object.getPrototypeOf(LaunchesListPage)).apply(this, arguments));
  }

  _createClass(LaunchesListPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchLaunches();
    }

    //helper function to create the list of launches.

  }, {
    key: "renderLaunches",
    value: function renderLaunches() {
      return this.props.launches.map(function (launch) {
        return _react2.default.createElement(
          "li",
          { key: launch.flight_number },
          launch.mission_name
        );
      });
    }
  }, {
    key: "head",
    value: function head() {
      return _react2.default.createElement(
        _reactHelmet.Helmet,
        null,
        _react2.default.createElement(
          "title",
          null,
          this.props.launches.length + " Launches Loaded"
        ),
        _react2.default.createElement("meta", { property: "og:title", content: "Launches App" })
      );
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        this.head(),
        "Here's is big list of Launches.",
        _react2.default.createElement(
          "ul",
          null,
          this.renderLaunches()
        )
      );
    }
  }]);

  return LaunchesListPage;
}(_react.Component);

function mapStateToProps(state) {
  return { launches: state.launches };
}

function loadData(store) {
  return store.dispatch((0, _actions.fetchLaunches)());
}

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchLaunches: _actions.fetchLaunches })(LaunchesListPage)
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  font-size: 40px;\n  background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  font-size: 40px;\n  background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(1);

var _Header = __webpack_require__(16);

var _Header2 = _interopRequireDefault(_Header);

var _styledComponents = __webpack_require__(25);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Our single Styled Component definition
var AppContainer = _styledComponents2.default.div(_templateObject);

var App = function App(_ref) {
  var route = _ref.route;

  return _react2.default.createElement(
    AppContainer,
    null,
    _react2.default.createElement(_Header2.default, null),
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};

exports.default = {
  component: App
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/' },
            'React SSR'
        ),
        _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/launches' },
            'Launches'
        )
    );
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

  staticContext.notFound = true;
  return _react2.default.createElement(
    "h1",
    null,
    "Ooooops, routes not found."
  );
};

exports.default = {
  component: NotFoundPage
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(6);

var _reduxThunk = __webpack_require__(19);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(20);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));
    return store;
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(6);

var _launchesReducer = __webpack_require__(21);

var _launchesReducer2 = _interopRequireDefault(_launchesReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  launches: _launchesReducer2.default
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(5);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_LAUNCHES:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(23);

var _reactRouterDom = __webpack_require__(2);

var _reactRouterConfig = __webpack_require__(1);

var _serializeJavascript = __webpack_require__(7);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _Routes = __webpack_require__(3);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRedux = __webpack_require__(4);

var _Html = __webpack_require__(24);

var _Html2 = _interopRequireDefault(_Html);

var _styledComponents = __webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// <-- importing ServerStyleSheet

exports.default = function (req, store, context) {

  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        "div",
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));

  // console.log(Html({content,store}));

  return (0, _Html2.default)({ content: content, store: store });
};

// `<html>
// <head></head>
// <body>
// <div id='root'>${content}</div>
// <script>window.INITIAL_STATE=${serialize(store.getState())}</script>
// <script src="bundle.js"></script>
// </body>
// </html>`;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _serializeJavascript = __webpack_require__(7);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Html = function Html(_ref) {
  var content = _ref.content,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? "SpaceX" : _ref$title,
      store = _ref.store;
  return "\n  <!DOCTYPE html>\n  <html>\n    <head>\n      <title>" + title + "</title>\n     \n    </head>\n    <body style=\"margin:0\">\n      <div id=\"root\">" + content + "</div>\n      <script>window.INITIAL_STATE=" + (0, _serializeJavascript2.default)(store.getState()) + "</script>\n      <script src=\"bundle.js\"></script>\n    </body>\n  </html>\n";
}; /**
    * Html
    * This Html.js file acts as a template that we insert all our generated
    * application strings into before sending it to the client.
    */
exports.default = Html;

//   ${styles}
// <script>window.INITIAL_STATE=${serialize(store.getState())}</script>

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })
/******/ ]);