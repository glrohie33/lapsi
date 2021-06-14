(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/dashboard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/dashboard.vue?vue&type=script&lang=js& ***!
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
      index_url: index_url,
      status: {
        series: [],
        chartOptions: {
          chart: {
            height: 350,
            type: "radialBar"
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
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: "22px"
                },
                value: {
                  fontSize: "16px"
                },
                total: {
                  show: true,
                  label: "Total",
                  formatter: function formatter(w) {
                    return w.config.series.reduce(function (a, b) {
                      return Number(a) + Number(b);
                    });
                  }
                }
              }
            }
          },
          labels: ["Approved Staffs", "Unapproved Staffs"]
        }
      },
      bene: {
        series: [],
        chartOptions: {
          chart: {
            height: 350,
            type: "radialBar",
            sparkline: {
              enable: true
            },
            dropShadow: {
              enabled: true,
              blur: 3,
              left: 1,
              top: 1,
              opacity: 0.1
            }
          },
          colors: [$success],
          plotOptions: {
            radialBar: {
              size: 110,
              startAngle: -150,
              endAngle: 150,
              hollow: {
                size: "77%"
              },
              track: {
                background: $strok_color,
                strokeWidth: "50%"
              },
              dataLabels: {
                name: {
                  show: false
                },
                value: {
                  offsetY: 18,
                  color: $strok_color,
                  fontSize: "3rem"
                }
              }
            }
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              type: "horizontal",
              shadeIntensity: 0.5,
              gradientToColors: ["#00b5b5"],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100]
            }
          },
          stroke: {
            lineCap: "round"
          }
        }
      }
    };
  },
  created: function created() {
    this.getData();
  },
  methods: {
    getData: function getData() {
      var _this = this;

      var url = "".concat(index_url, "/api/users");
      axios.get(url, formHeader()).then(function (resp) {
        _this.setAnalytics(resp.data.users);
      });
    },
    setAnalytics: function setAnalytics(users) {
      var obj = this;
      this.allUsers = users.length;
      this.appUsers = users.filter(function (user) {
        return user.status == 1;
      }).length;
      this.unAppUsers = users.filter(function (user) {
        return user.status == 0;
      }).length;
      this.bene.series;
      this.beneUsers = users.filter(function (user) {
        return JSON.parse(user.beneficiaries).length > 0;
      }).length;
      this.noBeneUsers = users.filter(function (user) {
        return JSON.parse(user.beneficiaries).length == 0;
      }).length;
      var appUsers = this.appUsers / this.allUsers * 100;
      var unAppUsers = this.unAppUsers / this.allUsers * 100;
      var filled = this.beneUsers / this.allUsers * 100;
      this.status.series = [Number(appUsers).toFixed(2), Number(unAppUsers).toFixed(2)];
      this.bene.series = [Number(filled).toFixed(2)];
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/dashboard.vue?vue&type=style&index=0&id=3a73534e&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/dashboard.vue?vue&type=style&index=0&id=3a73534e&scoped=true&lang=css& ***!
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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/dashboard.vue?vue&type=style&index=0&id=3a73534e&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/dashboard.vue?vue&type=style&index=0&id=3a73534e&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=style&index=0&id=3a73534e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/dashboard.vue?vue&type=style&index=0&id=3a73534e&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/dashboard.vue?vue&type=template&id=3a73534e&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/dashboard.vue?vue&type=template&id=3a73534e&scoped=true& ***!
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
              _c("div", { staticClass: "col-lg-8 col-md-12 col-sm-12" }, [
                _c("div", { staticClass: "card bg-analytics text-white" }, [
                  _c("div", { staticClass: "card-content" }, [
                    _c("div", { staticClass: "card-body text-center" }, [
                      _c("img", {
                        staticClass: "img-left",
                        attrs: {
                          src:
                            _vm.index_url +
                            "/public/app-assets/images/elements/decore-left.png",
                          alt: "card-img-left"
                        }
                      }),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "img-right",
                        attrs: {
                          src:
                            _vm.index_url +
                            "/public/app-assets/images/elements/decore-right.png",
                          alt: "card-img-right"
                        }
                      }),
                      _vm._v(" "),
                      _vm._m(0),
                      _vm._v(" "),
                      _c("div", { staticClass: "text-center" }, [
                        _c("h1", { staticClass: "mb-2 text-white" }, [
                          _vm._v(
                            "Welcome " +
                              _vm._s(_vm.user.title) +
                              " " +
                              _vm._s(_vm.user.firstname) +
                              ","
                          )
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-4 col-md-6 col-12" }, [
                _c("div", { staticClass: "card" }, [
                  _c(
                    "div",
                    { staticClass: "card-content" },
                    [_c("clock", { staticStyle: {} })],
                    1
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "col-xl-2 col-md-4 col-sm-6" }, [
                _c(
                  "div",
                  { staticClass: "card text-center" },
                  [
                    _c(
                      "router-link",
                      { attrs: { to: { path: "/admin/users" } } },
                      [
                        _c("div", { staticClass: "card-content" }, [
                          _c("div", { staticClass: "card-body" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "avatar bg-rgba-warning p-50 m-0 mb-1"
                              },
                              [
                                _c("div", { staticClass: "avatar-content" }, [
                                  _c("i", {
                                    staticClass:
                                      "feather icon-user text-warning font-medium-5"
                                  })
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("h2", { staticClass: "text-bold-700" }, [
                              _vm._v(_vm._s(_vm.allUsers))
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "mb-0 line-ellipsis" }, [
                              _vm._v("No of Staffs")
                            ])
                          ])
                        ])
                      ]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-xl-2 col-md-4 col-sm-6" }, [
                _c(
                  "div",
                  { staticClass: "card text-center" },
                  [
                    _c(
                      "router-link",
                      { attrs: { to: { path: "/admin/analytics/verified" } } },
                      [
                        _c("div", { staticClass: "card-content" }, [
                          _c("div", { staticClass: "card-body" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "avatar bg-rgba-danger p-50 m-0 mb-1"
                              },
                              [
                                _c("div", { staticClass: "avatar-content" }, [
                                  _c("i", {
                                    staticClass:
                                      "feather icon-user-check text-danger font-medium-5"
                                  })
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("h2", { staticClass: "text-bold-700" }, [
                              _vm._v(_vm._s(_vm.appUsers))
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "mb-0 line-ellipsis" }, [
                              _vm._v("Approved Staffs")
                            ])
                          ])
                        ])
                      ]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-xl-2 col-md-4 col-sm-6" }, [
                _c(
                  "div",
                  { staticClass: "card text-center" },
                  [
                    _c(
                      "router-link",
                      { attrs: { to: { path: "/admin/analytics/verified" } } },
                      [
                        _c("div", { staticClass: "card-content" }, [
                          _c("div", { staticClass: "card-body" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "avatar bg-rgba-primary p-50 m-0 mb-1"
                              },
                              [
                                _c("div", { staticClass: "avatar-content" }, [
                                  _c("i", {
                                    staticClass:
                                      "feather icon-user-x text-primary font-medium-5"
                                  })
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("h2", { staticClass: "text-bold-700" }, [
                              _vm._v(_vm._s(_vm.unAppUsers))
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "mb-0 line-ellipsis" }, [
                              _vm._v("Unapproved Staffs")
                            ])
                          ])
                        ])
                      ]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-xl-2 col-md-4 col-sm-6" }, [
                _c("div", { staticClass: "card text-center" }, [
                  _c(
                    "div",
                    { staticClass: "card-content" },
                    [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: { path: "/admin/analytics/beneficiaries" }
                          }
                        },
                        [
                          _c("div", { staticClass: "card-body" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "avatar bg-rgba-success p-50 m-0 mb-1"
                              },
                              [
                                _c("div", { staticClass: "avatar-content" }, [
                                  _c("i", {
                                    staticClass:
                                      "feather icon-user-plus text-success font-medium-5"
                                  })
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("h2", { staticClass: "text-bold-700" }, [
                              _vm._v(_vm._s(_vm.beneUsers))
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "mb-0 line-ellipsis" }, [
                              _vm._v("Users With Beneficiaries")
                            ]),
                            _vm._v(" "),
                            _c("p")
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-xl-2 col-md-4 col-sm-6" }, [
                _c("div", { staticClass: "card text-center" }, [
                  _c(
                    "div",
                    { staticClass: "card-content" },
                    [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: { path: "/admin/analytics/beneficiaries" }
                          }
                        },
                        [
                          _c("div", { staticClass: "card-body" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "avatar bg-rgba-danger p-50 m-0 mb-1"
                              },
                              [
                                _c("div", { staticClass: "avatar-content" }, [
                                  _c("i", {
                                    staticClass:
                                      "feather icon-user-minus text-danger font-medium-5"
                                  })
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("h2", { staticClass: "text-bold-700" }, [
                              _vm._v(_vm._s(_vm.noBeneUsers))
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "mb-0 line-ellipsis" }, [
                              _vm._v("Users Without Beneficiaries")
                            ])
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-6 col-12" }, [
                _c("div", { staticClass: "card" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-content" }, [
                    _c(
                      "div",
                      { staticClass: "card-body pt-50" },
                      [
                        _c("apexchart", {
                          attrs: {
                            type: "radialBar",
                            height: "350",
                            options: _vm.status.chartOptions,
                            series: _vm.status.series
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
                            _vm._m(3),
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
                            _vm._m(4),
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6 col-12" }, [
                _c("div", { staticClass: "card" }, [
                  _vm._m(5),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-content" }, [
                    _c(
                      "div",
                      { staticClass: "card-body px-0 pb-0" },
                      [
                        _c("apexchart", {
                          attrs: {
                            type: "radialBar",
                            height: "350",
                            options: _vm.bene.chartOptions,
                            series: _vm.bene.series
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "row text-center mx-0" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "col-6 border-top border-right d-flex align-items-between flex-column"
                            },
                            [
                              _c("p", { staticClass: "mb-50" }, [
                                _vm._v("Completed")
                              ]),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "font-large-1 text-bold-700 mb-50"
                                },
                                [_vm._v(_vm._s(_vm.beneUsers))]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "col-6 border-top d-flex align-items-between flex-column py-1"
                            },
                            [
                              _c("p", { staticClass: "mb-50" }, [
                                _vm._v("In Progress")
                              ]),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "font-large-1 text-bold-700 mb-50"
                                },
                                [_vm._v(_vm._s(_vm.noBeneUsers))]
                              )
                            ]
                          )
                        ])
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
      { staticClass: "avatar avatar-xl bg-primary shadow mt-0" },
      [
        _c("div", { staticClass: "avatar-content" }, [
          _c("i", { staticClass: "feather icon-award font-large-1" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xl-2 col-md-4 col-sm-6" }, [
      _c("div", { staticClass: "card text-center" }, [
        _c("div", { staticClass: "card-content" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "avatar bg-rgba-info p-50 m-0 mb-1" }, [
              _c("div", { staticClass: "avatar-content" }, [
                _c("i", {
                  staticClass: "feather icon-eye text-info font-medium-5"
                })
              ])
            ]),
            _vm._v(" "),
            _c("h2", { staticClass: "text-bold-700" }, [_vm._v("36.9k")]),
            _vm._v(" "),
            _c("p", { staticClass: "mb-0 line-ellipsis" }, [_vm._v("Views")])
          ])
        ])
      ])
    ])
  },
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "card-header d-flex justify-content-between align-items-end"
      },
      [
        _c("h4", { staticClass: "mb-0" }, [
          _vm._v("Users with beneficiaries Chart")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "font-medium-5 mb-0" }, [
          _c("i", {
            staticClass: "feather icon-help-circle text-muted cursor-pointer"
          })
        ])
      ]
    )
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

/***/ "./resources/js/components/admin/dashboard.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/admin/dashboard.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_vue_vue_type_template_id_3a73534e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.vue?vue&type=template&id=3a73534e&scoped=true& */ "./resources/js/components/admin/dashboard.vue?vue&type=template&id=3a73534e&scoped=true&");
/* harmony import */ var _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _dashboard_vue_vue_type_style_index_0_id_3a73534e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.vue?vue&type=style&index=0&id=3a73534e&scoped=true&lang=css& */ "./resources/js/components/admin/dashboard.vue?vue&type=style&index=0&id=3a73534e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dashboard_vue_vue_type_template_id_3a73534e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dashboard_vue_vue_type_template_id_3a73534e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3a73534e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/dashboard.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/admin/dashboard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/dashboard.vue?vue&type=style&index=0&id=3a73534e&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/admin/dashboard.vue?vue&type=style&index=0&id=3a73534e&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_3a73534e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=style&index=0&id=3a73534e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/dashboard.vue?vue&type=style&index=0&id=3a73534e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_3a73534e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_3a73534e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_3a73534e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_3a73534e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/admin/dashboard.vue?vue&type=template&id=3a73534e&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/admin/dashboard.vue?vue&type=template&id=3a73534e&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_3a73534e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=template&id=3a73534e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/dashboard.vue?vue&type=template&id=3a73534e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_3a73534e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_3a73534e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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