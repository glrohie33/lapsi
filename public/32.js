(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/agencytype/list.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/agencytype/list.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      headers: [{
        text: "Name",
        value: "name"
      }, {
        text: "Slug",
        value: "slug"
      }, {
        text: "Actions",
        value: "actions",
        sortable: "false"
      }],
      type: {
        name: ""
      },
      dialog: false,
      options: {},
      total: 0,
      loading: true,
      items: [],
      errors: []
    };
  },
  watch: {
    options: {
      handler: function handler() {
        this.getData();
      },
      deep: true
    }
  },
  created: function created() {
    this.getData();
  },
  methods: {
    getData: function getData() {
      var _this = this;

      console.log(this.options);
      var _this$options = this.options,
          sortBy = _this$options.sortBy,
          sortDesc = _this$options.sortDesc,
          page = _this$options.page,
          itemsPerPage = _this$options.itemsPerPage;
      var sort = sortBy[0];
      var desc = sortDesc[0];
      axios.get("".concat(index_url, "/api/agencytypes?page=").concat(page, "&limit=").concat(itemsPerPage, "&sort=").concat(sort, "&desc=").concat(desc)).then(function (resp) {
        _this.items = resp.data.types;
        _this.total = resp.data.total;
      });
    },
    addType: function addType(event) {
      var _this2 = this;

      var button = event.target;
      button.setAttribute("disabled", "true");
      this.errors = [];
      var data = setFormData(this.type);
      axios.post("".concat(index_url, "/api/agencytypes"), data).then(function (resp) {
        if (resp.data.status) {
          Swal.fire({
            title: "Agency Type Added",
            text: "You have successfully added a new role",
            icon: "success"
          });
          button.removeAttribute("disabled");
          _this2.options.page = 1;

          _this2.getData();

          _this2.dialog = false; //   this.$router.push({ path: "/admin/agencies/" });
        } else {
          _this2.errors = resp.data.errors;
          button.removeAttribute("disabled");
        }
      });
    },
    deleteItem: function deleteItem() {}
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/agencytype/list.vue?vue&type=template&id=69c9d8f3&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/agencytype/list.vue?vue&type=template&id=69c9d8f3& ***!
  \************************************************************************************************************************************************************************************************************************/
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
                  _c("div", { staticClass: "card-body card-dashboard" }, [
                    _c(
                      "div",
                      { staticClass: "table-responsive" },
                      [
                        _c("v-data-table", {
                          attrs: {
                            headers: _vm.headers,
                            items: _vm.items,
                            options: _vm.options,
                            "server-items-length": _vm.total,
                            loading: _vm.loading
                          },
                          on: {
                            "update:options": function($event) {
                              _vm.options = $event
                            }
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "top",
                              fn: function() {
                                return [
                                  _c(
                                    "v-dialog",
                                    {
                                      attrs: { "max-width": "400px" },
                                      scopedSlots: _vm._u([
                                        {
                                          key: "activator",
                                          fn: function(ref) {
                                            var on = ref.on
                                            var attrs = ref.attrs
                                            return [
                                              _c(
                                                "v-btn",
                                                _vm._g(
                                                  _vm._b(
                                                    {
                                                      staticClass: "mb-2",
                                                      attrs: {
                                                        color: "primary",
                                                        dark: ""
                                                      }
                                                    },
                                                    "v-btn",
                                                    attrs,
                                                    false
                                                  ),
                                                  on
                                                ),
                                                [_vm._v("New Item")]
                                              )
                                            ]
                                          }
                                        }
                                      ]),
                                      model: {
                                        value: _vm.dialog,
                                        callback: function($$v) {
                                          _vm.dialog = $$v
                                        },
                                        expression: "dialog"
                                      }
                                    },
                                    [
                                      _vm._v(" "),
                                      _c("div", { staticClass: "card" }, [
                                        _c(
                                          "div",
                                          { staticClass: "card-header" },
                                          [
                                            _c(
                                              "h4",
                                              { staticClass: "card-title" },
                                              [_vm._v("Add Agency type")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "card-content" },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "card-body" },
                                              [
                                                _c(
                                                  "form",
                                                  {
                                                    staticClass:
                                                      "form form-vertical",
                                                    staticStyle: {
                                                      width: "90%",
                                                      margin: "0px auto"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "form-body"
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass: "row"
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "col-12"
                                                              },
                                                              [
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "form-group"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "label",
                                                                      {
                                                                        attrs: {
                                                                          for:
                                                                            "first-name-vertical"
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "Agency Type Name"
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "input",
                                                                      {
                                                                        directives: [
                                                                          {
                                                                            name:
                                                                              "model",
                                                                            rawName:
                                                                              "v-model",
                                                                            value:
                                                                              _vm
                                                                                .type
                                                                                .name,
                                                                            expression:
                                                                              "type.name"
                                                                          }
                                                                        ],
                                                                        staticClass:
                                                                          "form-control",
                                                                        attrs: {
                                                                          type:
                                                                            "text",
                                                                          id:
                                                                            "first-name-vertical",
                                                                          placeholder:
                                                                            "agency type name",
                                                                          name:
                                                                            "name",
                                                                          required:
                                                                            ""
                                                                        },
                                                                        domProps: {
                                                                          value:
                                                                            _vm
                                                                              .type
                                                                              .name
                                                                        },
                                                                        on: {
                                                                          input: function(
                                                                            $event
                                                                          ) {
                                                                            if (
                                                                              $event
                                                                                .target
                                                                                .composing
                                                                            ) {
                                                                              return
                                                                            }
                                                                            _vm.$set(
                                                                              _vm.type,
                                                                              "name",
                                                                              $event
                                                                                .target
                                                                                .value
                                                                            )
                                                                          }
                                                                        }
                                                                      }
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _vm._l(
                                                                      _vm
                                                                        .errors[
                                                                        "name"
                                                                      ],
                                                                      function(
                                                                        error,
                                                                        index
                                                                      ) {
                                                                        return _c(
                                                                          "i",
                                                                          {
                                                                            key: index,
                                                                            staticClass:
                                                                              "text-danger"
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              _vm._s(
                                                                                error
                                                                              )
                                                                            )
                                                                          ]
                                                                        )
                                                                      }
                                                                    )
                                                                  ],
                                                                  2
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  { staticClass: "col-12" },
                                                  [
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-primary mr-1 mb-1",
                                                        attrs: {
                                                          type: "submit"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.addType(
                                                              $event
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [_vm._v("Submit")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-outline-warning mr-1 mb-1",
                                                        attrs: {
                                                          type: "reset"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            ;[
                                                              (_vm.dialog = false)
                                                            ]
                                                          }
                                                        }
                                                      },
                                                      [_vm._v("Cancel")]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ])
                                    ]
                                  )
                                ]
                              },
                              proxy: true
                            },
                            {
                              key: "item.actions",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: {
                                          path: "/admin/agency/" + item.slug
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          staticClass: "mr-2",
                                          attrs: { small: "" }
                                        },
                                        [_vm._v("mdi-pencil")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-icon",
                                    {
                                      attrs: { small: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.deleteItem(item.slug)
                                        }
                                      }
                                    },
                                    [_vm._v("mdi-delete")]
                                  )
                                ]
                              }
                            }
                          ])
                        })
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
              _vm._v("DataTables")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "breadcrumb-wrapper col-12" }, [
              _c("ol", { staticClass: "breadcrumb" }, [
                _c("li", { staticClass: "breadcrumb-item" }, [
                  _c("a", { attrs: { href: "index.html" } }, [_vm._v("Home")])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "breadcrumb-item active" }, [
                  _vm._v("Staffs")
                ])
              ])
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
      _c("h4", { staticClass: "card-title" }, [
        _vm._v("All Agency Types Table")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/agencytype/list.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/admin/agencytype/list.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_vue_vue_type_template_id_69c9d8f3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=69c9d8f3& */ "./resources/js/components/admin/agencytype/list.vue?vue&type=template&id=69c9d8f3&");
/* harmony import */ var _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/agencytype/list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_vue_vue_type_template_id_69c9d8f3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_vue_vue_type_template_id_69c9d8f3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/agencytype/list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/agencytype/list.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/admin/agencytype/list.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/agencytype/list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/agencytype/list.vue?vue&type=template&id=69c9d8f3&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/admin/agencytype/list.vue?vue&type=template&id=69c9d8f3& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_69c9d8f3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=template&id=69c9d8f3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/agencytype/list.vue?vue&type=template&id=69c9d8f3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_69c9d8f3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_69c9d8f3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);