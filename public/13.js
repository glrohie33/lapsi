(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/portal/dashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/portal/dashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../clock */ "./resources/js/components/clock.vue");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      bene: [],
      options: {
        chart: {
          height: "100px",
          type: "area",
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: true
          },
          grid: {
            show: false,
            padding: {
              left: 0,
              right: 0
            }
          },
          id: "vuechart-example"
        },
        colors: ["#7367F0"],
        datalabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth",
          width: 2.5
        },
        xaxis: {
          labels: {
            show: false
          },
          axisBorder: {
            show: false
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 0.9,
            opacityFrom: 0.7,
            opacityTo: 0.5,
            stops: [0, 80, 100]
          }
        },
        yaxis: [{
          y: 0,
          offsetX: 0,
          offsetY: 0,
          padding: {
            left: 0,
            right: 0
          }
        }],
        tooltip: {
          x: {
            show: false
          }
        }
      },
      series: [{
        name: "data",
        data: [90, 100, 90, 100, 90]
      }],
      beneCharts: {
        options: {
          chart: {
            width: "300px",
            type: "pie",
            dropShadow: {
              enabled: false,
              blur: 5,
              left: 1,
              top: 1,
              opacity: 0.2
            },
            toolbar: {
              show: false
            }
          },
          labels: [],
          legend: {
            show: false
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }],
          plotOptions: {
            pie: {
              dataLabels: {
                offset: -5
              }
            }
          },
          dataLabels: {
            formatter: function formatter(val, opts) {
              var name = opts.w.globals.labels[opts.seriesIndex];
              return [name, val.toFixed(1) + "%"];
            }
          },
          fill: {
            type: "gradient",
            gradient: {
              gradientToColors: [$primary_light, $warning_light, $danger_light]
            }
          }
        },
        series: []
      }
    };
  },
  created: function created() {
    this.setActions();
    this.user = this.$store.state.user;

    if (_typeof(this.user.beneficiaries) != "object") {
      this.bene = JSON.parse(this.user.beneficiaries);
    } else {
      this.bene = this.user.beneficiaries;
    }

    var obj = this;
    var i = 0;
    this.beneCharts.series = this.bene.map(function (x) {
      return Number(x.perc);
    });
    this.beneCharts.options.labels = this.bene.map(function (x) {
      return x.name;
    });
    var i = 0; // var length = this.bene.length;
    // while (i < length) {
    //   var color = Math.floor(Math.random() * 16777215).toString(16);
    //   var gradcolor = Math.floor(Math.random() * 16777215).toString(16);
    //   this.$set(this.beneCharts.options.colors, i, `#${color}`);
    //   this.$set(
    //     this.beneCharts.options.fill.gradient.gradientToColors,
    //     i,
    //     `#${gradcolor}`
    //   );
    //   i++;
    // }
  },
  methods: {
    setActions: function setActions() {
      var token = window.localStorage.getItem("lapsiToken_");
      axios.get("".concat(index_url, "/api/actions?limit=5"), {
        headers: {
          Authorization: "Bearer ".concat(token)
        }
      }).then(function (resp) {
        var data = resp.data;
        console.log(data); //   if (data.status) {
        //     store.commit("setUser", data.user);
        //     store.commit("setRole", data.role);
        //     next();
        //   }
      });
    },
    getSeries: function getSeries() {
      return [10, 20, 30];
    }
  }
});

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/portal/dashboard.vue?vue&type=template&id=7dce3e7c&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/portal/dashboard.vue?vue&type=template&id=7dce3e7c& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
              _c("div", { staticClass: "col-lg-6 col-md-12 col-sm-12" }, [
                _c("div", { staticClass: "card bg-analytics text-white" }, [
                  _c("div", { staticClass: "card-content" }, [
                    _c("div", { staticClass: "card-body text-center" }, [
                      _c("img", {
                        staticClass: "img-left",
                        attrs: {
                          src:
                            "public/app-assets/images/elements/decore-left.png",
                          alt: "card-img-left"
                        }
                      }),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "img-right",
                        attrs: {
                          src:
                            "public/app-assets/images/elements/decore-right.png",
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
              _c("div", { staticClass: "col-lg-3 col-md-6 col-12" }, [
                _c("div", { staticClass: "card" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "card-header d-flex flex-column align-items-start pb-0"
                    },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("h2", { staticClass: "text-bold-700 mt-1 mb-25" }, [
                        _vm._v(_vm._s(_vm.bene.length))
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mb-0" }, [
                        _vm._v("No Of Beneficiaries")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "card-content" },
                    [
                      _c("apexchart", {
                        attrs: {
                          type: "area",
                          height: "100px",
                          options: _vm.options,
                          series: _vm.series
                        }
                      })
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-3 col-md-6 col-12" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", {
                    staticClass:
                      "card-header d-flex flex-column align-items-start pb-0"
                  }),
                  _vm._v(" "),
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
              _c("div", { staticClass: "col-md-6 col-12" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-content" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "row pb-50" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-lg-4 col-12 d-flex justify-content-between flex-column order-lg-1 order-2 mt-lg-0 mt-2"
                          },
                          [
                            _c("div", [
                              _c("h2", { staticClass: "text-bold-700 mb-25" }, [
                                _vm._v(_vm._s(_vm.bene.length))
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-bold-500 mb-75" }, [
                                _vm._v("Number Beneficiaries")
                              ]),
                              _vm._v(" "),
                              _vm._m(2)
                            ]),
                            _vm._v(" "),
                            _vm._m(3)
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-lg-8 col-12 d-flex justify-content-between flex-column text-right order-lg-2 order-1"
                          },
                          [
                            _c("apexchart", {
                              attrs: {
                                type: "pie",
                                width: "300px",
                                height: "300px",
                                options: _vm.beneCharts.options,
                                series: _vm.beneCharts.series
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "row avg-sessions pt-50" },
                        _vm._l(_vm.bene, function(b, index) {
                          return _c(
                            "div",
                            { key: index, staticClass: "col-6" },
                            [
                              _c("p", { staticClass: "mb-0" }, [
                                _vm._v(
                                  _vm._s(b.name) + ": " + _vm._s(b.perc) + "%"
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "progress progress-bar-primary mt-25"
                                },
                                [
                                  _c("div", {
                                    staticClass: "progress-bar",
                                    style: "width:" + b.perc + "%",
                                    attrs: {
                                      role: "progressbar",
                                      "aria-valuenow": b.perc,
                                      "aria-valuemax": "100"
                                    }
                                  })
                                ]
                              )
                            ]
                          )
                        }),
                        0
                      )
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _vm._m(4)
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
    return _c("div", { staticClass: "avatar bg-rgba-primary p-50 m-0" }, [
      _c("div", { staticClass: "avatar-content" }, [
        _c("i", {
          staticClass: "feather icon-users text-primary font-medium-5"
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "font-medium-2" }, [
      _c("span", { staticClass: "text-success" }, [_vm._v("100%")]),
      _vm._v(" "),
      _c("span", [_vm._v("shared in total")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "btn btn-primary shadow", attrs: { href: "#" } },
      [
        _vm._v(
          "\n                          View Details\n                          "
        ),
        _c("i", { staticClass: "feather icon-chevrons-right" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-6 col-12" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-header" }, [
          _c("h4", { staticClass: "card-title" }, [_vm._v("Activity Timeline")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-content" }, [
          _c("div", { staticClass: "card-body" }, [
            _c(
              "ul",
              { staticClass: "activity-timeline timeline-left list-unstyled" },
              [
                _c("li", [
                  _c("div", { staticClass: "timeline-icon bg-primary" }, [
                    _c("i", {
                      staticClass:
                        "feather icon-plus font-medium-2 align-middle"
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "timeline-info" }, [
                    _c("p", { staticClass: "font-weight-bold mb-0" }, [
                      _vm._v("Client Meeting")
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "font-small-3" }, [
                      _vm._v(
                        "Bonbon macaroon jelly beans gummi bears jelly lollipop apple"
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted" }, [
                    _vm._v("25 mins ago")
                  ])
                ])
              ]
            )
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



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



/***/ }),

/***/ "./resources/js/components/portal/dashboard.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/portal/dashboard.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_vue_vue_type_template_id_7dce3e7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.vue?vue&type=template&id=7dce3e7c& */ "./resources/js/components/portal/dashboard.vue?vue&type=template&id=7dce3e7c&");
/* harmony import */ var _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/portal/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dashboard_vue_vue_type_template_id_7dce3e7c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dashboard_vue_vue_type_template_id_7dce3e7c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/portal/dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/portal/dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/portal/dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/portal/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/portal/dashboard.vue?vue&type=template&id=7dce3e7c&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/portal/dashboard.vue?vue&type=template&id=7dce3e7c& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_7dce3e7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=template&id=7dce3e7c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/portal/dashboard.vue?vue&type=template&id=7dce3e7c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_7dce3e7c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_7dce3e7c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);