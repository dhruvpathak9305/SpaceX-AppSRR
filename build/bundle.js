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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // import React from "react";


var _reactRouterDom = __webpack_require__(3);

var _HomePage = __webpack_require__(15);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _LaunchesListPage = __webpack_require__(7);

var _LaunchesListPage2 = _interopRequireDefault(_LaunchesListPage);

var _App = __webpack_require__(19);

var _App2 = _interopRequireDefault(_App);

var _NotFoundPage = __webpack_require__(21);

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  background-color: #f2f2f2;\n  text-align: center;\n  padding: 10px;\n\n  h2 {\n    text-align: start;\n  }\n\n  h3:not(:first-of-type) {\n    color: red;\n    padding-bottom: 5px;\n    border-bottom: 2px solid black;\n    display: inline-block;\n  }\n"], ["\n  background-color: #f2f2f2;\n  text-align: center;\n  padding: 10px;\n\n  h2 {\n    text-align: start;\n  }\n\n  h3:not(:first-of-type) {\n    color: red;\n    padding-bottom: 5px;\n    border-bottom: 2px solid black;\n    display: inline-block;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  color: black;\n  background-color: #c5e09a;\n  border-radius: 5px;\n  padding: 5px 10px;\n  cursor: pointer;\n"], ["\n  color: black;\n  background-color: #c5e09a;\n  border-radius: 5px;\n  padding: 5px 10px;\n  cursor: pointer;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  background-color: red;\n  padding: 15px 0px;\n  margin: 0 auto;\n  display: grid;\n  grid-auto-rows: 30px;\n  grid-template-columns: repeat(2, min-content);\n  grid-auto-flow: row dense;\n  grid-row-gap: 15px;\n  align-items: center;\n  justify-items: center;\n  justify-content: space-around;\n"], ["\n  background-color: red;\n  padding: 15px 0px;\n  margin: 0 auto;\n  display: grid;\n  grid-auto-rows: 30px;\n  grid-template-columns: repeat(2, min-content);\n  grid-auto-flow: row dense;\n  grid-row-gap: 15px;\n  align-items: center;\n  justify-items: center;\n  justify-content: space-around;\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__(16);

var _Button2 = _interopRequireDefault(_Button);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FilterDiv = _styledComponents2.default.div(_templateObject);

var A = _styledComponents2.default.a(_templateObject2);

var LaunchYearDiv = _styledComponents2.default.div(_templateObject3);

function Filters() {
  //   var yearButtons = [];
  //   for (let i = 2006; i <= 2020; i++) {
  //     yearButtons.push(<Button key={i} content={i} />);
  //   }
  function handleFilter(_ref) {
    var type = _ref.type,
        value = _ref.value;

    alert(type + value);
  }

  return _react2.default.createElement(
    FilterDiv,
    null,
    _react2.default.createElement(
      "h2",
      null,
      "Filters"
    ),
    _react2.default.createElement(
      "h3",
      null,
      "Launch Year"
    ),
    _react2.default.createElement(
      LaunchYearDiv,
      null,
      [].concat(_toConsumableArray(Array(15))).map(function (x, i) {
        return _react2.default.createElement(
          A,
          { key: i, onClick: function onClick() {
              return handleFilter({ type: "year", value: i + 2006 });
            } },
          i + 2006
        );
      })
    ),
    _react2.default.createElement(
      "h3",
      null,
      "Successful Launch"
    ),
    _react2.default.createElement(
      LaunchYearDiv,
      null,
      _react2.default.createElement(
        A,
        { onClick: function onClick() {
            return handleFilter({ type: "Launch", value: "True" });
          } },
        "True"
      ),
      _react2.default.createElement(
        A,
        { onClick: function onClick() {
            return handleFilter({ type: "Launch", value: "False" });
          } },
        "False"
      )
    ),
    _react2.default.createElement(
      "h3",
      null,
      "Successful Landing"
    ),
    _react2.default.createElement(
      LaunchYearDiv,
      null,
      _react2.default.createElement(
        A,
        { onClick: function onClick() {
            return handleFilter({ type: "Landing", value: "True" });
          } },
        "True"
      ),
      _react2.default.createElement(
        A,
        { onClick: function onClick() {
            return handleFilter({ type: "Landing", value: "False" });
          } },
        "False"
      )
    )
  );
}

exports.default = Filters;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 20% 80%;\n"], ["\n  display: grid;\n  grid-template-columns: 20% 80%;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-rows: auto;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-flow: row;\n  grid-row-gap: 10px;\n  grid-column-gap: 15px;\n  background-color: green;\n  justify-items: center;\n"], ["\n  display: grid;\n  grid-template-rows: auto;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-flow: row;\n  grid-row-gap: 10px;\n  grid-column-gap: 15px;\n  background-color: green;\n  justify-items: center;\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(8);

var _actions = __webpack_require__(9);

var _reactHelmet = __webpack_require__(4);

var _LaunchCard = __webpack_require__(18);

var _LaunchCard2 = _interopRequireDefault(_LaunchCard);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Filters = __webpack_require__(6);

var _Filters2 = _interopRequireDefault(_Filters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HomeDiv = _styledComponents2.default.div(_templateObject);

var LaunchesDiv = _styledComponents2.default.div(_templateObject2);

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
    // renderLaunches() {
    //   return this.props.launches.map((launch) => {
    //     return <li key={launch.flight_number}>{launch.mission_name}</li>;
    //   });
    // }

  }, {
    key: "renderLaunches",
    value: function renderLaunches() {
      return this.props.launches.map(function (launch, index) {
        return _react2.default.createElement(_LaunchCard2.default, {
          key: launch.flight_number,
          index: index,
          mission_name: launch.mission_name,
          mission_id: launch.mission_id,
          launch_year: launch.launch_year,
          launch_success: launch.launch_success,
          land_success: launch.land_success,
          img: launch.img,
          img_small: launch.img_small
        });
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
          HomeDiv,
          null,
          _react2.default.createElement(_Filters2.default, null),
          _react2.default.createElement(
            LaunchesDiv,
            null,
            this.renderLaunches()
          )
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

// renderLaunches() {
//   return this.props.launches.map((launch, index) => {
//     const mission_name = launch.mission_name
//       ? launch.mission_name
//       : "Not Present";
//     const mission_id = launch.mission_id[0]
//       ? launch.mission_id[0]
//       : "Not Present";
//     const launch_year = launch.launch_year ? launch.launch_year : "2014";
//     const launch_success = launch.launch_success
//       ? "Launch Success"
//       : "Launch Failure";
//     const land_success = launch.rocket.first_stage.cores[0].land_success
//       ? "Land Success"
//       : "Land Failure";
//     const img = launch.links.mission_patch
//       ? launch.links.mission_patch
//       : "Not Present";
//     const img_small = launch.links.mission_patch_small
//       ? launch.links.mission_patch_small
//       : "Not Present";

//     return (
//       <LaunchCard
//         key={launch.flight_number}
//         index={index}
//         mission_name={mission_name}
//         mission_id={mission_id}
//         launch_year={launch_year}
//         launch_success={launch_success}
//         land_success={land_success}
//         img={img}
//         img_small={img_small}
//       />
//     );
//   });
// }

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchLaunches = exports.FETCH_LAUNCHES = undefined;

var _axios = __webpack_require__(17);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_LAUNCHES = exports.FETCH_LAUNCHES = "fetch_launches";

var fetchLaunches = exports.fetchLaunches = function fetchLaunches() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var res, payload;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _axios2.default.get("https://api.spacexdata.com/v3/launches?limit=2");

            case 2:
              res = _context.sent;

              // console.log(res.data);
              payload = res.data.map(function (data) {
                return {
                  flight_number: data.flight_number,
                  mission_name: data.mission_name ? data.mission_name : "Not Present",
                  mission_id: data.mission_id[0] ? data.mission_id[0] : "Not Present",
                  launch_year: data.launch_year ? data.launch_year : "2014",
                  launch_success: data.launch_success ? "Launch Success" : "Launch Failure",
                  land_success: data.rocket.first_stage.cores[0].land_success ? "Land Success" : "Land Failure",
                  img: data.links.mission_patch ? data.links.mission_patch : "Not Present",
                  img_small: data.links.mission_patch_small ? data.links.mission_patch_small : "Not Present"
                };
              });
              // console.log(payload);

              dispatch({
                type: FETCH_LAUNCHES,
                payload: payload
              });

            case 5:
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
/* 10 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(13);

var _express = __webpack_require__(14);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(2);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createStore = __webpack_require__(22);

var _createStore2 = _interopRequireDefault(_createStore);

var _renderer = __webpack_require__(26);

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
/* 13 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  display: flex;\n"], ["\n  display: flex;\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(4);

var _Filters = __webpack_require__(6);

var _Filters2 = _interopRequireDefault(_Filters);

var _LaunchesListPage = __webpack_require__(7);

var _LaunchesListPage2 = _interopRequireDefault(_LaunchesListPage);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HomeDiv = _styledComponents2.default.div(_templateObject);

function HomePage() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        "title",
        null,
        "Home Page"
      ),
      _react2.default.createElement("meta", { property: "og:title", content: "Home Page" })
    ),
    _react2.default.createElement(
      HomeDiv,
      null,
      _react2.default.createElement(_Filters2.default, null)
    )
  );
}
exports.default = {
  component: HomePage
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  /* width: 150px; */\n  color: black;\n  background-color: #c5e09a;\n  border-radius: 5px;\n  padding: 5px 10px;\n  cursor: pointer;\n"], ["\n  /* width: 150px; */\n  color: black;\n  background-color: #c5e09a;\n  border-radius: 5px;\n  padding: 5px 10px;\n  cursor: pointer;\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var A = _styledComponents2.default.a(_templateObject);

function Button(_ref) {
  var content = _ref.content;

  return _react2.default.createElement(
    A,
    null,
    content
  );
}

exports.default = Button;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  width: max-content;\n  text-align: center;\n  background-color: yellow;\n  border-radius: 2px;\n  padding: 10px;\n  margin:2px;\n  img {\n    width: 150px;\n    height: auto;\n    background-color: #f2f2f2;\n  }\n  h3 {\n    color: #4c5383;\n    font-weight: bold;\n    text-align: start;\n  }\n\n  h3:not(:first-of-type) {\n    color: black;\n   \n    margin:5px;\n    /* display:inline-block; */\n  }\n  span {\n    color: red;\n    font-size: 15px;\n    font-weight: 400;\n    text-align: start;\n  }\n"], ["\n  width: max-content;\n  text-align: center;\n  background-color: yellow;\n  border-radius: 2px;\n  padding: 10px;\n  margin:2px;\n  img {\n    width: 150px;\n    height: auto;\n    background-color: #f2f2f2;\n  }\n  h3 {\n    color: #4c5383;\n    font-weight: bold;\n    text-align: start;\n  }\n\n  h3:not(:first-of-type) {\n    color: black;\n   \n    margin:5px;\n    /* display:inline-block; */\n  }\n  span {\n    color: red;\n    font-size: 15px;\n    font-weight: 400;\n    text-align: start;\n  }\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Card = _styledComponents2.default.div(_templateObject);

function LaunchCard(_ref) {
  var _ref$index = _ref.index,
      index = _ref$index === undefined ? "0" : _ref$index,
      _ref$mission_name = _ref.mission_name,
      mission_name = _ref$mission_name === undefined ? "" : _ref$mission_name,
      _ref$mission_id = _ref.mission_id,
      mission_id = _ref$mission_id === undefined ? "" : _ref$mission_id,
      _ref$launch_year = _ref.launch_year,
      launch_year = _ref$launch_year === undefined ? "" : _ref$launch_year,
      _ref$launch_success = _ref.launch_success,
      launch_success = _ref$launch_success === undefined ? "" : _ref$launch_success,
      _ref$land_success = _ref.land_success,
      land_success = _ref$land_success === undefined ? "" : _ref$land_success,
      _ref$img = _ref.img,
      img = _ref$img === undefined ? "" : _ref$img,
      _ref$img_small = _ref.img_small,
      img_small = _ref$img_small === undefined ? "" : _ref$img_small;

  return _react2.default.createElement(
    Card,
    null,
    _react2.default.createElement("img", { src: img, alt: "" }),
    _react2.default.createElement(
      "h3",
      null,
      mission_name + " #" + (index + 1)
    ),
    _react2.default.createElement(
      "h3",
      null,
      "Mission Ids"
    ),
    _react2.default.createElement(
      "span",
      null,
      " * " + mission_id
    ),
    _react2.default.createElement(
      "h3",
      null,
      "Launch Year  ",
      _react2.default.createElement(
        "span",
        null,
        launch_year
      )
    ),
    _react2.default.createElement(
      "h3",
      null,
      "Successful Launch  ",
      _react2.default.createElement(
        "span",
        null,
        launch_success
      )
    ),
    _react2.default.createElement(
      "h3",
      null,
      "Successful Landing  ",
      _react2.default.createElement(
        "span",
        null,
        land_success
      )
    )
  );
}

exports.default = LaunchCard;

// {
//   mission_name = "",
//   mission_id = "",
//   launch_year = "",
//   launch_success = "",
//   land_success = "",
// }

// {`
//       ${index}
//       ${mission_name}
//       ${mission_id}
//       ${launch_year}
//       ${launch_success}
//       ${land_success}
//       ${img}
//       ${img_small}
// `}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(2);

var _Header = __webpack_require__(20);

var _Header2 = _interopRequireDefault(_Header);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Our single Styled Component definition
// const AppContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: fixed;
//   width: 100%;
//   height: 100%;
//   font-size: 40px;
//   background: linear-gradient(20deg, rgb(219, 112, 147), black);
// `;

var App = function App(_ref) {
  var route = _ref.route;

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(_Header2.default, null),
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};

exports.default = {
  component: App
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\nfont-size:40px;\nfont-weight;600;\n"], ["\nfont-size:40px;\nfont-weight;600;\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Card = _styledComponents2.default.h1(_templateObject);

exports.default = function () {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: "/" },
      "React SSR"
    ),
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: "/launches" },
      "Launches"
    ),
    _react2.default.createElement(
      "h1",
      null,
      "SpaceX Launch Programs"
    )
  );
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

  staticContext.notFound = true;
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        "title",
        null,
        "Not Found Page"
      ),
      _react2.default.createElement("meta", { property: "og:title", content: "Not Found Page" })
    ),
    _react2.default.createElement(
      "h1",
      null,
      "Ooooops, routes not found."
    )
  );
};

exports.default = {
  component: NotFoundPage
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(10);

var _reduxThunk = __webpack_require__(23);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(24);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));
    return store;
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(10);

var _launchesReducer = __webpack_require__(25);

var _launchesReducer2 = _interopRequireDefault(_launchesReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  launches: _launchesReducer2.default
});

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(9);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_LAUNCHES:
      return action.payload;
    // return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(27);

var _reactRouterDom = __webpack_require__(3);

var _reactRouterConfig = __webpack_require__(2);

var _serializeJavascript = __webpack_require__(11);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRedux = __webpack_require__(8);

var _Html = __webpack_require__(28);

var _Html2 = _interopRequireDefault(_Html);

var _styledComponents = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// <-- importing ServerStyleSheet

exports.default = function (req, store, context) {
  var sheet = new _styledComponents.ServerStyleSheet(); // <-- creating out stylesheet

  var content = (0, _server.renderToString)(sheet.collectStyles(_react2.default.createElement(
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
  )));

  var styles = sheet.getStyleTags(); // <-- getting all the tags from the sheet

  var title = 'Styled Components';

  // console.log(Html({content,store}));

  return (0, _Html2.default)({ content: content, styles: styles, title: title, store: store });
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
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _serializeJavascript = __webpack_require__(11);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Html = function Html(_ref) {
  var content = _ref.content,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? "SpaceX" : _ref$title,
      styles = _ref.styles,
      store = _ref.store;
  return "\n  <!DOCTYPE html>\n  <html>\n    <head>\n      <title>" + title + "</title>\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n      " + styles + "\n    </head>\n    <body style=\"margin:0\">\n      <div id=\"root\">" + content + "</div>\n      <script>window.INITIAL_STATE=" + (0, _serializeJavascript2.default)(store.getState()) + "</script>\n      <script src=\"bundle.js\"></script>\n    </body>\n  </html>\n";
}; /**
    * Html
    * This Html.js file acts as a template that we insert all our generated
    * application strings into before sending it to the client.
    */
exports.default = Html;

//   ${styles}
// <script>window.INITIAL_STATE=${serialize(store.getState())}</script>

/***/ })
/******/ ]);