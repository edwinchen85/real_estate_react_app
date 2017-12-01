webpackJsonp([0],{

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(97);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(96);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(98);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(99);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      listingsData: _listingsData2.default
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      console.log(this.state.listingsData);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { className: 'content-area' },
          _react2.default.createElement(_Filter2.default, null),
          _react2.default.createElement(_Listings2.default, null)
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Filter, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "filter" },
        _react2.default.createElement(
          "div",
          { className: "inside" },
          _react2.default.createElement(
            "h4",
            null,
            "Filter"
          ),
          _react2.default.createElement(
            "select",
            { name: "neighbourhood", className: "filters neighbourhood" },
            _react2.default.createElement(
              "option",
              null,
              "Ridgewood"
            )
          ),
          _react2.default.createElement(
            "select",
            { name: "housetype", className: "filters housetype" },
            _react2.default.createElement(
              "option",
              null,
              "Ranch"
            )
          ),
          _react2.default.createElement(
            "select",
            { name: "bedrooms", className: "filters bedrooms" },
            _react2.default.createElement(
              "option",
              null,
              "2 BR"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "filters price" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Price"
            ),
            _react2.default.createElement("input", { type: "text", name: "min-price", className: "min-price" }),
            _react2.default.createElement("input", { type: "text", name: "max-price", className: "max-price" })
          ),
          _react2.default.createElement(
            "div",
            { className: "filters floor-space" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Floor Space"
            ),
            _react2.default.createElement("input", { type: "text", name: "min-floor-space", className: "min-floor-space" }),
            _react2.default.createElement("input", { type: "text", name: "max-floor-space", className: "max-floor-space" })
          ),
          _react2.default.createElement(
            "div",
            { className: "filters extras" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Extras"
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Elevators"
              ),
              _react2.default.createElement("input", { type: "checkbox", value: "elevator", name: "extras" })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Swimming Pool"
              ),
              _react2.default.createElement("input", { type: "checkbox", value: "swimming-pool", name: "extras" })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Finished Basement"
              ),
              _react2.default.createElement("input", { type: "checkbox", value: "finished-basement", name: "extras" })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Gym"
              ),
              _react2.default.createElement("input", { type: "checkbox", value: "gym", name: "extras" })
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "header",
        null,
        _react2.default.createElement(
          "div",
          { className: "logo" },
          "Logo"
        ),
        _react2.default.createElement(
          "nav",
          null,
          _react2.default.createElement(
            "a",
            { href: "#" },
            "Create Ads"
          ),
          _react2.default.createElement(
            "a",
            { href: "#" },
            "About Us"
          ),
          _react2.default.createElement(
            "a",
            { href: "#" },
            "Log In"
          ),
          _react2.default.createElement(
            "a",
            { href: "#", className: "register-btn" },
            "Register"
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "listings" },
        _react2.default.createElement(
          "section",
          { className: "search-area" },
          _react2.default.createElement("input", { type: "text", name: "search" })
        ),
        _react2.default.createElement(
          "section",
          { className: "sortby-area" },
          _react2.default.createElement(
            "div",
            { className: "results" },
            "390 results found"
          ),
          _react2.default.createElement(
            "div",
            { className: "sort-options" },
            _react2.default.createElement(
              "select",
              { name: "sortby", className: "sortby" },
              _react2.default.createElement(
                "option",
                { value: "price-asc" },
                "Highest Price"
              ),
              _react2.default.createElement(
                "option",
                { value: "price-dsc" },
                "Lowest Price"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "view" },
              _react2.default.createElement("i", { className: "fa fa-th-list", "aria-hidden": "true" }),
              _react2.default.createElement("i", { className: "fa fa-th", "aria-hidden": "true" })
            )
          )
        ),
        _react2.default.createElement(
          "section",
          { className: "listings-results" },
          _react2.default.createElement(
            "div",
            { className: "col-md-3" },
            _react2.default.createElement(
              "div",
              { className: "listing" },
              _react2.default.createElement(
                "div",
                { className: "listing-img" },
                _react2.default.createElement(
                  "span",
                  { className: "address" },
                  "23 Dexi Hills"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "details" },
                  _react2.default.createElement(
                    "div",
                    { className: "col-md-3" },
                    _react2.default.createElement("div", { className: "user-img" })
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "col-md-9" },
                    _react2.default.createElement(
                      "div",
                      { className: "user-details" },
                      _react2.default.createElement(
                        "span",
                        { className: "user-name" },
                        "Nina Smith"
                      ),
                      _react2.default.createElement(
                        "span",
                        { className: "post-date" },
                        "05/05/2017"
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "listing-details" },
                      _react2.default.createElement(
                        "div",
                        { className: "floor-space" },
                        _react2.default.createElement("i", { className: "fa fa-square-o", "aria-hidden": "true" }),
                        _react2.default.createElement(
                          "span",
                          null,
                          "1000 ft\xB2"
                        )
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "bedrooms" },
                        _react2.default.createElement("i", { className: "fa fa-bed", "aria-hidden": "true" }),
                        _react2.default.createElement(
                          "span",
                          null,
                          "3 bedrooms"
                        )
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "view-btn" },
                      "View Listing"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "bottom-info" },
                _react2.default.createElement(
                  "span",
                  { className: "price" },
                  "$1000 / month"
                ),
                _react2.default.createElement(
                  "span",
                  { className: "location" },
                  _react2.default.createElement("i", { className: "fa fa-map-marker", "aria-hidden": "true" }),
                  " Ridgewood, NY"
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "col-md-3" },
            _react2.default.createElement(
              "div",
              { className: "listing" },
              _react2.default.createElement(
                "div",
                { className: "listing-img" },
                _react2.default.createElement(
                  "span",
                  { className: "address" },
                  "23 Dexi Hills"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "details" },
                  _react2.default.createElement(
                    "div",
                    { className: "col-md-3" },
                    _react2.default.createElement("div", { className: "user-img" })
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "col-md-9" },
                    _react2.default.createElement(
                      "div",
                      { className: "user-details" },
                      _react2.default.createElement(
                        "span",
                        { className: "user-name" },
                        "Nina Smith"
                      ),
                      _react2.default.createElement(
                        "span",
                        { className: "post-date" },
                        "05/05/2017"
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "listing-details" },
                      _react2.default.createElement(
                        "div",
                        { className: "floor-space" },
                        _react2.default.createElement("i", { className: "fa fa-square-o", "aria-hidden": "true" }),
                        _react2.default.createElement(
                          "span",
                          null,
                          "1000 ft\xB2"
                        )
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "bedrooms" },
                        _react2.default.createElement("i", { className: "fa fa-bed", "aria-hidden": "true" }),
                        _react2.default.createElement(
                          "span",
                          null,
                          "3 bedrooms"
                        )
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "view-btn" },
                      "View Listing"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "bottom-info" },
                _react2.default.createElement(
                  "span",
                  { className: "price" },
                  "$1000 / month"
                ),
                _react2.default.createElement(
                  "span",
                  { className: "location" },
                  _react2.default.createElement("i", { className: "fa fa-map-marker", "aria-hidden": "true" }),
                  " Ridgewood, NY"
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "col-md-3" },
            _react2.default.createElement(
              "div",
              { className: "listing" },
              _react2.default.createElement(
                "div",
                { className: "listing-img" },
                _react2.default.createElement(
                  "span",
                  { className: "address" },
                  "23 Dexi Hills"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "details" },
                  _react2.default.createElement(
                    "div",
                    { className: "col-md-3" },
                    _react2.default.createElement("div", { className: "user-img" })
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "col-md-9" },
                    _react2.default.createElement(
                      "div",
                      { className: "user-details" },
                      _react2.default.createElement(
                        "span",
                        { className: "user-name" },
                        "Nina Smith"
                      ),
                      _react2.default.createElement(
                        "span",
                        { className: "post-date" },
                        "05/05/2017"
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "listing-details" },
                      _react2.default.createElement(
                        "div",
                        { className: "floor-space" },
                        _react2.default.createElement("i", { className: "fa fa-square-o", "aria-hidden": "true" }),
                        _react2.default.createElement(
                          "span",
                          null,
                          "1000 ft\xB2"
                        )
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "bedrooms" },
                        _react2.default.createElement("i", { className: "fa fa-bed", "aria-hidden": "true" }),
                        _react2.default.createElement(
                          "span",
                          null,
                          "3 bedrooms"
                        )
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "view-btn" },
                      "View Listing"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "bottom-info" },
                _react2.default.createElement(
                  "span",
                  { className: "price" },
                  "$1000 / month"
                ),
                _react2.default.createElement(
                  "span",
                  { className: "location" },
                  _react2.default.createElement("i", { className: "fa fa-map-marker", "aria-hidden": "true" }),
                  " Ridgewood, NY"
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "col-md-3" },
            _react2.default.createElement(
              "div",
              { className: "listing" },
              _react2.default.createElement(
                "div",
                { className: "listing-img" },
                _react2.default.createElement(
                  "span",
                  { className: "address" },
                  "23 Dexi Hills"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "details" },
                  _react2.default.createElement(
                    "div",
                    { className: "col-md-3" },
                    _react2.default.createElement("div", { className: "user-img" })
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "col-md-9" },
                    _react2.default.createElement(
                      "div",
                      { className: "user-details" },
                      _react2.default.createElement(
                        "span",
                        { className: "user-name" },
                        "Nina Smith"
                      ),
                      _react2.default.createElement(
                        "span",
                        { className: "post-date" },
                        "05/05/2017"
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "listing-details" },
                      _react2.default.createElement(
                        "div",
                        { className: "floor-space" },
                        _react2.default.createElement("i", { className: "fa fa-square-o", "aria-hidden": "true" }),
                        _react2.default.createElement(
                          "span",
                          null,
                          "1000 ft\xB2"
                        )
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "bedrooms" },
                        _react2.default.createElement("i", { className: "fa fa-bed", "aria-hidden": "true" }),
                        _react2.default.createElement(
                          "span",
                          null,
                          "3 bedrooms"
                        )
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "view-btn" },
                      "View Listing"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "bottom-info" },
                _react2.default.createElement(
                  "span",
                  { className: "price" },
                  "$1000 / month"
                ),
                _react2.default.createElement(
                  "span",
                  { className: "location" },
                  _react2.default.createElement("i", { className: "fa fa-map-marker", "aria-hidden": "true" }),
                  " Ridgewood, NY"
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          "section",
          { id: "pagination" },
          _react2.default.createElement(
            "ul",
            { className: "pages" },
            _react2.default.createElement(
              "li",
              { className: "active" },
              "Prev"
            ),
            _react2.default.createElement(
              "li",
              null,
              "1"
            ),
            _react2.default.createElement(
              "li",
              null,
              "2"
            ),
            _react2.default.createElement(
              "li",
              null,
              "3"
            ),
            _react2.default.createElement(
              "li",
              null,
              "4"
            ),
            _react2.default.createElement(
              "li",
              null,
              "5"
            ),
            _react2.default.createElement(
              "li",
              null,
              "Next"
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var listingsData = [{
  address: '20-34 Holland Ave',
  city: 'RidgeWood',
  state: 'NY',
  rooms: 3,
  price: 220000,
  floorSpace: 2000,
  extras: ['convenience shop', 'gym'],
  homeType: 'Apartment',
  image: 'https://res.cloudinary.com/apartmentlist/image/upload/t_fullsize/b1115a63998b7f93e0ba0d650cccbf8b.jpg'
}, {
  address: '10-77 Grand Ave',
  city: 'KenVille',
  state: 'FL',
  rooms: 2,
  price: 246660,
  floorSpace: 1430,
  extras: ['7-11', 'gym'],
  homeType: 'Apartment',
  image: 'https://lh3.googleusercontent.com/mKlO8zuV3ZzJiEY8tiyIXtYuXTHzFAWssEx2C5XwNOG3WR_BSfFGHVjVY08waFvGbknidJkXdYiyg-Dv2lPBjPtUpg'
}, {
  address: '30-14 Kent Ridge',
  city: 'Las Vegas',
  state: 'VA',
  rooms: 3,
  price: 345120,
  floorSpace: 1890,
  extras: ['elevator', 'gym'],
  homeType: 'Serviced Apartment',
  image: 'https://t-ec.bstatic.com/images/hotel/max1024x768/753/75380477.jpg'
}, {
  address: '12-80 Woodlands Ave',
  city: 'Washington',
  state: 'DC',
  rooms: 4,
  price: 470000,
  floorSpace: 2500,
  extras: ['elevator', 'gym'],
  homeType: 'Apartment',
  image: 'https://d1ctrx09lkrdha.cloudfront.net/em/wp-content/uploads/2014/06/Apartment-vs.-Condo-What%E2%80%99s-the-Difference.jpg'
}, {
  address: '30-40 Pollar Ave',
  city: 'Texas',
  state: 'DE',
  rooms: 4,
  price: 610000,
  floorSpace: 4000,
  extras: ['elevator', 'gym', 'pool'],
  homeType: 'Condominium',
  image: 'https://images3.roofandfloor.com/listing_b5ddc806946ac52ee82ef3ab09708297/1024x600/vijay-rajas-century-court-in-poonamallee-os.jpg'
}, {
  address: '01-75 Alma Ave',
  city: 'Boston',
  state: 'BT',
  rooms: 4,
  price: 550000,
  floorSpace: 3900,
  extras: ['elevator', 'gym', 'pool', 'child care'],
  homeType: 'Condominium',
  image: 'https://is1-2.housingcdn.com/4f2250e8/196a2b39d4d597ab3127d9e3e879f2e3/v5/_m/shree_chaaya_apartment_sanpada-mumbai-shree_developers.jpg'
}, {
  address: '05-31 Summer Ave',
  city: 'Commonwealth',
  state: 'CM',
  rooms: 4,
  price: 870000,
  floorSpace: 5200,
  extras: ['elevator', 'gym', 'pool', 'beach'],
  homeType: 'Resort',
  image: 'https://www.reminetwork.com/wp-content/uploads/rsz_apartment.jpg'
}];

exports.default = listingsData;

/***/ })

},[101]);