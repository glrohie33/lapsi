(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/user/add.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/user/add.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      staff: {
        agency_id: [],
        nominal: ""
      },
      type: "password",
      icon: "icon-eye",
      roles: [],
      errors: [],
      agencies: []
    };
  },
  watch: {
    staff: {
      handler: function handler() {
        var agency = this.staff.agency_id.filter(function (el) {
          return el != "";
        }); // this.staff.agency_id = agency;

        if (agency.length > 0) {
          var val = agency[agency.length - 1];
          this.setAgencies(val);
        }
      },
      deep: true
    }
  },
  created: function created() {
    this.getData();
    this.setAgencies(this.staff.agency_id);
  },
  methods: {
    getData: function getData() {
      var _this = this;

      var users = axios.get("".concat(index_url, "/api/roles")).then(function (resp) {
        _this.roles = resp.data.roles;
      });
    },
    setType: function setType() {
      if (this.type == "password") {
        this.type = "text";
        this.icon = "icon-eye-off";
      } else {
        this.type = "password";
        this.icon = "icon-eye";
      }
    },
    setNominal: function setNominal(event) {
      var file = event.target.files;
      var fileReader = new FileReader();
      var obj = this;
      this.staff.nominal = file[0]; //   if (!!file) {
      //     fileReader.onload = function(evt) {
      //       obj.staff.nominal = evt.target.result;
      //     };
      //     fileReader.readAsDataURL(file);
      //     console.log("here");
      //   } else {
      //     console.log("here");
      //     this.staff.nominal = "";
      //   }
    },
    addStaff: function addStaff(event) {
      var _this2 = this;

      var button = event.target;
      button.setAttribute("disabled", "true");
      this.errors = [];
      var nominal = this.staff;
      nominal.agency_id = this.staff.agency_id.filter(Boolean);
      var data = setFormData(nominal);
      axios.post("".concat(index_url, "/api/users"), data, formHeader()).then(function (resp) {
        if (resp.data.status) {
          Swal.fire({
            title: "Nominal Added",
            text: "You have successfully added a new Nominal Roles",
            icon: "success"
          });
          button.removeAttribute("disabled");
          var obj = _this2;
          setTimeout(function () {
            obj.$router.push({
              path: "/admin/users/"
            });
          }, 2000);
        } else {
          _this2.errors = resp.data.errors;
          button.removeAttribute("disabled");
        }
      });
    },
    setAgencies: function setAgencies(val) {
      var _this3 = this;

      var url = "".concat(index_url, "/api/agencychildren?parent_id=").concat(val);
      axios.get(url).then(function (resp) {
        var agencies = resp.data.agencies;

        if (agencies.length > 0) {
          _this3.$set(_this3.agencies, _this3.agencies.length, agencies);
        }
      });
    },
    change: function change(index) {
      this.staff.agency_id.splice(index + 1);
      this.agencies.splice(index + 1);
    },
    "delete": function _delete(code) {
      console.log("here");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/user/add.vue?vue&type=template&id=103463a8&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/user/add.vue?vue&type=template&id=103463a8& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "card-content" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("form", { staticClass: "form form-vertical" }, [
                      _c("div", { staticClass: "form-body" }, [
                        _c(
                          "div",
                          { staticClass: "row" },
                          [
                            _vm._l(_vm.agencies, function(x, index) {
                              return _c(
                                "div",
                                {
                                  key: index,
                                  staticClass: "col-md-6 form-group"
                                },
                                [
                                  _c("label", [_vm._v("Agency")]),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.staff.agency_id[index],
                                          expression: "staff.agency_id[index]"
                                        }
                                      ],
                                      staticClass: "form-control select2-icons",
                                      on: {
                                        change: [
                                          function($event) {
                                            var $$selectedVal = Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function(o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function(o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
                                                return val
                                              })
                                            _vm.$set(
                                              _vm.staff.agency_id,
                                              index,
                                              $event.target.multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            )
                                          },
                                          function($event) {
                                            return _vm.change(index)
                                          }
                                        ]
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
                                        [_vm._v("Select Agency")]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(x, function(y, ind) {
                                        return _c(
                                          "option",
                                          {
                                            key: ind,
                                            domProps: { value: y.id }
                                          },
                                          [_vm._v(_vm._s(y.name))]
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
                              )
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-12 col-md-12" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "label",
                                    { attrs: { for: "first-name-vertical" } },
                                    [_vm._v("Select Nominal")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "file",
                                      id: "first-name-vertical",
                                      placeholder: "surname name",
                                      required: "",
                                      accept: ".xlsx, .xlsx, .csv"
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.setNominal($event)
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
                            ])
                          ],
                          2
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary mr-1 mb-1",
                          attrs: { type: "submit" },
                          on: {
                            click: function($event) {
                              return _vm.addStaff($event)
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
              _vm._v("Staffs")
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", { staticClass: "card-title" }, [_vm._v("Add Staff")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/user/add.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/admin/user/add.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_vue_vue_type_template_id_103463a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=103463a8& */ "./resources/js/components/admin/user/add.vue?vue&type=template&id=103463a8&");
/* harmony import */ var _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/user/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_103463a8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_vue_vue_type_template_id_103463a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/user/add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/user/add.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/admin/user/add.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/user/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/user/add.vue?vue&type=template&id=103463a8&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/admin/user/add.vue?vue&type=template&id=103463a8& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_103463a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=template&id=103463a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/user/add.vue?vue&type=template&id=103463a8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_103463a8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_103463a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);