(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/analytics.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/analytics.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../clock */ "./resources/js/components/clock.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var $primary = "#7367F0";
var $danger = "#EA5455";
var $warning = "#FF9F43";
var $info = "#00cfe8";
var $success = "#00db89";
var $primary_light = "#9c8cfc";
var $warning_light = "#FFC085";
var $danger_light = "#f29292";
var $info_light = "#1edec5";
var $strok_color = "#b9c3cd";
var $label_color = "#e7eef7";
var $purple = "#df87f2";
var $white = "#fff";
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    clock: _clock__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ["user"],
  data: function data() {
    return {
      allUsers: "",
      appUsers: "",
      unAppUsers: "",
      beneUsers: "",
      noBeneUsers: "",
      agencyTypes: [],
      selectAgencyType: "",
      dataType: "",
      chart: {
        series: [],
        chartOptions: {
          chart: {
            type: "bar",
            height: 350,
            stacked: true,
            stackType: "100%"
          },
          colors: [$primary, $warning],
          fill: {
            type: "gradient",
            gradient: {
              // enabled: true,
              shade: "dark",
              type: "vertical",
              shadeIntensity: 0.5,
              gradientToColors: [$primary_light, $warning_light, $danger_light],
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100]
            }
          },
          xaxis: {
            categories: []
          }
        }
      }
    };
  },
  watch: {
    selectAgencyType: {
      handler: function handler() {
        var _this = this;

        this.agencies = this.agencyTypes.find(function (agency) {
          return agency.id == _this.selectAgencyType;
        }).agencies;
        this.setGraph();
      }
    }
  },
  created: function created() {
    var _this2 = this;

    this.dataType = this.$route.params.datatype;
    var url = "".concat(index_url, "/api/agencywithtype");
    axios.get(url, formHeader()).then(function (resp) {
      _this2.agencyTypes = resp.data.types;
      _this2.selectAgencyType = _this2.agencyTypes[0].id;
      _this2.agencies = _this2.agencyTypes[0].agencies;
    });
  },
  methods: {
    setGraph: function setGraph() {
      var _this3 = this;

      //   this.chart.chartOptions.xaxis.categories = this.agencies.map(
      //     agency => agency.name
      //   );
      //   console.log(this.chart.chartOptions.xaxis.categories);
      var ids = this.agencies.map(function (agency) {
        return agency.id;
      });
      var url = "".concat(index_url, "/api/userbyagency");
      axios.post(url, {
        agencyids: ids
      }, formHeader()).then(function (resp) {
        var users = resp.data.users;
        var label1 = "verified";
        var label2 = "unverified";

        if (_this3.dataType == "beneficiaries") {
          var label1 = "Users With Beneficiaries";
          var label2 = "Users With No Beneficiaries";
        }

        var series = [{
          name: label1,
          data: []
        }, {
          name: label2,
          data: []
        }];
        var i = 0;

        _this3.chart.chartOptions.xaxis.categories.splice(0);

        ids.forEach(function (id) {
          _this3.chart.chartOptions.xaxis.categories.push(_this3.agencies[i].name);

          if (_this3.dataType == "verified") {
            var verified = users.filter(function (user) {
              return JSON.parse(user.agency_id).includes(id) && user.status == "1";
            }).length;
            var unverified = users.filter(function (user) {
              return JSON.parse(user.agency_id).includes(id) && user.status == "0";
            }).length;
            series[0].data.push(verified);
            series[1].data.push(unverified);
          } else if (_this3.dataType == "beneficiaries") {
            var bene = users.filter(function (user) {
              return JSON.parse(user.agency_id).includes(id) && JSON.parse(user.beneficiaries).length > 0;
            }).length;
            var nobene = users.filter(function (user) {
              return JSON.parse(user.agency_id).includes(id) && JSON.parse(user.beneficiaries).length == 0;
            }).length;
            series[0].data.push(bene);
            series[1].data.push(nobene);
          }

          i++;
        });
        _this3.chart.series = series;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/clock.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/clock.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      time: "00:00:00"
    };
  },
  mounted: function mounted() {
    this.startTime();
  },
  methods: {
    startTime: function startTime() {
      var min = this.$refs.min,
          sec = this.$refs.sec,
          hour = this.$refs.hour;
      var now = new Date(),
          hValue = now.getHours(),
          mValue = now.getMinutes(),
          sValue = now.getSeconds(),
          then = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0),
          //midnight
      diffInMil = now.getTime() - then.getTime(),
          // difference in milliseconds
      h = diffInMil / (1000 * 60 * 60),
          //hours
      m = h * 60; //minutes
      //rotate the hands accordingly

      sec.style.webkitTransform = "rotate(" + sValue * 6 + "deg)";
      hour.style.webkitTransform = "rotate(" + h * 30 + "deg)";
      min.style.webkitTransform = "rotate(" + m * 6 + "deg)";
      setTimeout(this.startTime, 1000); // 数字时间

      mValue = this.checkTime(mValue);
      sValue = this.checkTime(sValue);
      this.time = hValue + ":" + mValue + ":" + sValue;
    },
    checkTime: function checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }

      return i;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/analytics.vue?vue&type=style&index=0&id=8767836a&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/analytics.vue?vue&type=style&index=0&id=8767836a&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../assets/app-assets/css/pages/card-analytics.min.css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./resources/js/assets/app-assets/css/pages/card-analytics.min.css"), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./resources/js/assets/app-assets/css/pages/card-analytics.min.css":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./resources/js/assets/app-assets/css/pages/card-analytics.min.css ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".customer-info.list-group .list-group-item:last-child{border-bottom-left-radius:.5rem;border-bottom-right-radius:.5rem}.customer-info.list-group .list-group-item .series-info i{top:0;margin-right:.3rem}.avg-sessions .progress{margin-top:.5rem}.analytics-list.list-group .list-group-item{border:0}.analytics-list.list-group .list-group-item:first-child{border-top-left-radius:0;border-top-right-radius:0}.analytics-list.list-group .list-group-item .btn{display:none}.analytics-list.list-group .list-group-item:hover .btn{display:inline-block}.chart-dropdown .btn{font-size:.8rem;font-weight:500}.chart-dropdown .btn:after{left:0;position:relative}@media only screen and (max-width:992px) and (min-width:768px){.analytics-list .float-left,.analytics-list .float-right{display:block}}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){#dashboard-analytics .avatar .avatar-content,#statistics-card .avatar .avatar-content{padding:0!important}}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/analytics.vue?vue&type=style&index=0&id=8767836a&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/analytics.vue?vue&type=style&index=0&id=8767836a&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./analytics.vue?vue&type=style&index=0&id=8767836a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/analytics.vue?vue&type=style&index=0&id=8767836a&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/analytics.vue?vue&type=template&id=8767836a&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/analytics.vue?vue&type=template&id=8767836a&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "body" }, [
    _c("div", { staticClass: "app-content content" }, [
      _c("div", { staticClass: "content-overlay" }),
      _vm._v(" "),
      _c("div", { staticClass: "header-navbar-shadow" }),
      _vm._v(" "),
      _c("div", { staticClass: "content-wrapper" }, [
        _c("div", { staticClass: "content-header row" }),
        _vm._v(" "),
        _c("div", { staticClass: "content-body" }, [
          _c("section", { attrs: { id: "dashboard-analytics" } }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12 col-12" }, [
                _c("div", { staticClass: "card" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticStyle: { overflow: "hidden" } }, [
                    _c(
                      "div",
                      {
                        staticClass: "form-group",
                        staticStyle: {
                          float: "right",
                          "margin-right": "10px",
                          width: "100px"
                        }
                      },
                      [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.selectAgencyType,
                                expression: "selectAgencyType"
                              }
                            ],
                            staticClass: "form-control select2-icons",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.selectAgencyType = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          _vm._l(_vm.agencyTypes, function(type, index) {
                            return _c(
                              "option",
                              { key: index, domProps: { value: type.id } },
                              [_vm._v(_vm._s(type.name))]
                            )
                          }),
                          0
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-content" }, [
                    _c(
                      "div",
                      { staticClass: "card-body pt-50" },
                      [
                        _c("apexchart", {
                          attrs: {
                            type: "bar",
                            height: "400",
                            options: _vm.chart.chartOptions,
                            series: _vm.chart.series
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "chart-info d-flex justify-content-between mb-1"
                          },
                          [
                            _vm._m(1),
                            _vm._v(" "),
                            _c("div", { staticClass: "product-result" }, [
                              _c("span", [_vm._v(_vm._s(_vm.appUsers))])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "chart-info d-flex justify-content-between mb-1"
                          },
                          [
                            _vm._m(2),
                            _vm._v(" "),
                            _c("div", { staticClass: "product-result" }, [
                              _c("span", [_vm._v(_vm._s(_vm.unAppUsers))])
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "sidenav-overlay" }),
    _vm._v(" "),
    _c("div", { staticClass: "drag-target" })
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card-header d-flex justify-content-between" },
      [
        _c("h4", { staticClass: "card-title" }, [
          _vm._v("Staff Approval Status Chart")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "series-info d-flex align-items-center" }, [
      _c("i", { staticClass: "fa fa-circle-o text-bold-700 text-primary" }),
      _vm._v(" "),
      _c("span", { staticClass: "text-bold-600 ml-50" }, [_vm._v("Approved")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "series-info d-flex align-items-center" }, [
      _c("i", { staticClass: "fa fa-circle-o text-bold-700 text-warning" }),
      _vm._v(" "),
      _c("span", { staticClass: "text-bold-600 ml-50" }, [_vm._v("Pending")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/clock.vue?vue&type=template&id=23297dd3&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/clock.vue?vue&type=template&id=23297dd3& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      [
        _c("div", { attrs: { id: "clock" } }, [
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c("div", { ref: "min", attrs: { id: "min" } }),
          _vm._v(" "),
          _c("div", { ref: "hour", attrs: { id: "hour" } }),
          _vm._v(" "),
          _c("div", { ref: "sec", attrs: { id: "sec" } }),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _c("div", { ref: "time", attrs: { id: "time" } }, [
            _vm._v(_vm._s(_vm.time))
          ])
        ])
      ]
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "hour" }, [
      _c("div", { staticClass: "min" }),
      _vm._v(" "),
      _c("div", { staticClass: "min" }),
      _vm._v(" "),
      _c("div", { staticClass: "min" }),
      _vm._v(" "),
      _c("div", { staticClass: "min" }),
      _vm._v(" "),
      _c("div", { staticClass: "min" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "hour" }, [
      _c("div", { staticClass: "min" }),
      _vm._v(" "),
      _c("div", { staticClass: "min" }),
      _vm._v(" "),
      _c("div", { staticClass: "min" }),
      _vm._v(" "),
      _c("div", { staticClass: "min" }),
      _vm._v(" "),
      _c("div", { staticClass: "min" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ol", [
      _c("li"),
      _vm._v(" "),
      _c("li"),
      _vm._v(" "),
      _c("li"),
      _vm._v(" "),
      _c("li"),
      _vm._v(" "),
      _c("li"),
      _vm._v(" "),
      _c("li"),
      _vm._v(" "),
      _c("li"),
      _vm._v(" "),
      _c("li"),
      _vm._v(" "),
      _c("li"),
      _vm._v(" "),
      _c("li"),
      _vm._v(" "),
      _c("li"),
      _vm._v(" "),
      _c("li")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/analytics.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/admin/analytics.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _analytics_vue_vue_type_template_id_8767836a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analytics.vue?vue&type=template&id=8767836a&scoped=true& */ "./resources/js/components/admin/analytics.vue?vue&type=template&id=8767836a&scoped=true&");
/* harmony import */ var _analytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analytics.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/analytics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _analytics_vue_vue_type_style_index_0_id_8767836a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analytics.vue?vue&type=style&index=0&id=8767836a&scoped=true&lang=css& */ "./resources/js/components/admin/analytics.vue?vue&type=style&index=0&id=8767836a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _analytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _analytics_vue_vue_type_template_id_8767836a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _analytics_vue_vue_type_template_id_8767836a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8767836a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/analytics.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/analytics.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/admin/analytics.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_analytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./analytics.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/analytics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_analytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/analytics.vue?vue&type=style&index=0&id=8767836a&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/admin/analytics.vue?vue&type=style&index=0&id=8767836a&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_analytics_vue_vue_type_style_index_0_id_8767836a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./analytics.vue?vue&type=style&index=0&id=8767836a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/analytics.vue?vue&type=style&index=0&id=8767836a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_analytics_vue_vue_type_style_index_0_id_8767836a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_analytics_vue_vue_type_style_index_0_id_8767836a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_analytics_vue_vue_type_style_index_0_id_8767836a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_analytics_vue_vue_type_style_index_0_id_8767836a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/admin/analytics.vue?vue&type=template&id=8767836a&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/admin/analytics.vue?vue&type=template&id=8767836a&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_analytics_vue_vue_type_template_id_8767836a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./analytics.vue?vue&type=template&id=8767836a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/analytics.vue?vue&type=template&id=8767836a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_analytics_vue_vue_type_template_id_8767836a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_analytics_vue_vue_type_template_id_8767836a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/clock.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/clock.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clock_vue_vue_type_template_id_23297dd3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clock.vue?vue&type=template&id=23297dd3& */ "./resources/js/components/clock.vue?vue&type=template&id=23297dd3&");
/* harmony import */ var _clock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock.vue?vue&type=script&lang=js& */ "./resources/js/components/clock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _clock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _clock_vue_vue_type_template_id_23297dd3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _clock_vue_vue_type_template_id_23297dd3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/clock.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/clock.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/clock.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_clock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./clock.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/clock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_clock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/clock.vue?vue&type=template&id=23297dd3&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/clock.vue?vue&type=template&id=23297dd3& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_clock_vue_vue_type_template_id_23297dd3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./clock.vue?vue&type=template&id=23297dd3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/clock.vue?vue&type=template&id=23297dd3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_clock_vue_vue_type_template_id_23297dd3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_clock_vue_vue_type_template_id_23297dd3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);