(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

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