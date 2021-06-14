(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/agencytype/add.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/agencytype/add.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      agency: {
        name: "",
        parent_id: "",
        agency_type: ""
      },
      types: [],
      parents: [],
      errors: [],
      formTitle: ""
    };
  },
  created: function created() {
    this.getData();
  },
  methods: {
    getData: function getData() {
      var _this = this;

      var users = axios.get("".concat(index_url, "/api/agencytypes")).then(function (resp) {
        _this.types = resp.data.types;
      });
      var users = axios.get("".concat(index_url, "/api/agencyparents")).then(function (resp) {
        _this.parents = resp.data.parents;
      });
    },
    addAgency: function addAgency(event) {
      var _this2 = this;

      var button = event.target;
      button.setAttribute("disabled", "true");
      this.errors = [];
      var data = setFormData(this.role);
      axios.post("".concat(index_url, "/api/agencies"), data).then(function (resp) {
        if (resp.data.status) {
          Swal.fire({
            title: "Agency Added",
            text: "You have successfully added a new role",
            icon: "success"
          });
          button.removeAttribute("disabled");

          _this2.$router.push({
            path: "/admin/agencies/"
          });
        } else {
          _this2.errors = resp.data.errors;
          button.removeAttribute("disabled");
        }
      });
    },
    "delete": function _delete(code) {
      console.log("here");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/agencytype/add.vue?vue&type=template&id=55da1b48&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/agencytype/add.vue?vue&type=template&id=55da1b48& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "app-content content" }, [
    _c("div", { staticClass: "content-overlay" }),
    _vm._v(" "),
    _c("div", { staticClass: "header-navbar-shadow" }),
    _vm._v(" "),
    _c("div", { staticClass: "content-wrapper" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "content-body" }, [
        _c("section", { attrs: { id: "column-selectors" } }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h4", { staticClass: "card-title" }, [
                    _vm._v(_vm._s(_vm.formTitle) + " type")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-content" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c(
                      "form",
                      {
                        staticClass: "form form-vertical",
                        staticStyle: { width: "90%", margin: "0px auto" }
                      },
                      [
                        _c("div", { staticClass: "form-body" }, [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-12" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "label",
                                    { attrs: { for: "first-name-vertical" } },
                                    [_vm._v("Agency Name")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.agency.name,
                                        expression: "agency.name"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      id: "first-name-vertical",
                                      placeholder: "role name",
                                      name: "name",
                                      required: ""
                                    },
                                    domProps: { value: _vm.agency.name },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.agency,
                                          "name",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm._l(_vm.errors["name"], function(
                                    error,
                                    index
                                  ) {
                                    return _c(
                                      "i",
                                      {
                                        key: index,
                                        staticClass: "text-danger"
                                      },
                                      [_vm._v(_vm._s(error))]
                                    )
                                  })
                                ],
                                2
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-md-6 form-group" },
                              [
                                _c("label", [_vm._v("Parent Agency")]),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.agency.parent_id,
                                        expression: "agency.parent_id"
                                      }
                                    ],
                                    staticClass: "form-control select2-icons",
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.agency,
                                          "parent_id",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "option",
                                      {
                                        attrs: {
                                          value: "",
                                          "data-icon": "fa fa-male"
                                        }
                                      },
                                      [_vm._v("Select Parent Category")]
                                    ),
                                    _vm._v(" "),
                                    _vm._l(_vm.parents, function(x, ind) {
                                      return _c(
                                        "option",
                                        { key: ind, domProps: { value: x.id } },
                                        [_vm._v(_vm._s(x.name))]
                                      )
                                    })
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _vm._l(_vm.errors.parent_id, function(
                                  err,
                                  index
                                ) {
                                  return _c(
                                    "p",
                                    {
                                      key: index,
                                      staticClass: "text-danger text-center"
                                    },
                                    [_vm._v(_vm._s(err))]
                                  )
                                })
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-md-6 form-group" },
                              [
                                _c("label", [_vm._v("Agency type")]),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.agency.agency_type,
                                        expression: "agency.agency_type"
                                      }
                                    ],
                                    staticClass: "form-control select2-icons",
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.agency,
                                          "agency_type",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("option", { attrs: { value: "" } }, [
                                      _vm._v("Select Agency Type")
                                    ]),
                                    _vm._v(" "),
                                    _vm._l(_vm.types, function(x, ind) {
                                      return _c(
                                        "option",
                                        { key: ind, domProps: { value: x.id } },
                                        [_vm._v(_vm._s(x.name))]
                                      )
                                    })
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _vm._l(_vm.errors.agency_type, function(
                                  err,
                                  index
                                ) {
                                  return _c(
                                    "p",
                                    {
                                      key: index,
                                      staticClass: "text-danger text-center"
                                    },
                                    [_vm._v(_vm._s(err))]
                                  )
                                })
                              ],
                              2
                            )
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary mr-1 mb-1",
                          attrs: { type: "submit" },
                          on: {
                            click: function($event) {
                              return _vm.addAgency($event)
                            }
                          }
                        },
                        [_vm._v("Submit")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-warning mr-1 mb-1",
                          attrs: { type: "reset" }
                        },
                        [_vm._v("Reset")]
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-header row" }, [
      _c("div", { staticClass: "content-header-left col-md-9 col-12 mb-2" }, [
        _c("div", { staticClass: "row breadcrumbs-top" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("h2", { staticClass: "content-header-title float-left mb-0" }, [
              _vm._v("Agency type")
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/agencytype/add.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/admin/agencytype/add.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_vue_vue_type_template_id_55da1b48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=55da1b48& */ "./resources/js/components/admin/agencytype/add.vue?vue&type=template&id=55da1b48&");
/* harmony import */ var _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/agencytype/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_55da1b48___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_vue_vue_type_template_id_55da1b48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/agencytype/add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/agencytype/add.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/admin/agencytype/add.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/agencytype/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/agencytype/add.vue?vue&type=template&id=55da1b48&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/admin/agencytype/add.vue?vue&type=template&id=55da1b48& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_55da1b48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=template&id=55da1b48& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/agencytype/add.vue?vue&type=template&id=55da1b48&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_55da1b48___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_55da1b48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);