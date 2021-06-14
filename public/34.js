(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/menu.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/menu.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["user", "role"],
  data: function data() {
    return {
      index_url: index_url,
      menus: [{
        title: "Dashboard",
        items: [],
        path: {
          path: "/admin/"
        },
        icon: "mdi-home",
        active: true
      }, {
        title: "Staffs",
        items: [{
          title: "List",
          path: {
            path: "/admin/users"
          },
          permission: "read"
        }, {
          title: "Add New",
          path: {
            path: "/admin/adduser"
          },
          permission: "create"
        }],
        icon: "mdi-account-group",
        role: "user"
      }, {
        title: "Agency",
        items: [{
          title: "List",
          path: {
            path: "/admin/agencies"
          }
        }, {
          title: "Add New",
          path: {
            path: "/admin/addagency"
          }
        }],
        icon: "mdi-briefcase-account"
      }, {
        title: "Role",
        items: [{
          title: "List",
          path: {
            path: "/admin/roles"
          }
        }, {
          title: "Add New",
          path: {
            path: "/admin/addrole"
          }
        }],
        icon: "mdi-account-key"
      }, {
        title: "Admins",
        items: [{
          title: "List",
          path: {
            path: "/admin/staffs"
          }
        }, {
          title: "Add New",
          path: {
            path: "/admin/addstaff"
          }
        }],
        icon: "mdi-account-box"
      }, {
        title: "Agency Types",
        items: [{
          title: "List",
          path: {
            path: "/admin/agencytypes"
          }
        }],
        icon: "mdi-shield-check"
      }]
    };
  },
  created: function created() {// this.role = this.$store.state.role;
  },
  methods: {
    permissions: function permissions(name) {
      var permit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var permission = this.role.permissions != null ? JSON.parse(this.role.permissions) : "";

      if (this.role.name == "admin") {
        return true;
      } else {
        if (permission[name]) {
          if (permit != null) {
            return !!permission[name][permit];
          }

          return true;
        } else {
          return false;
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/menu.vue?vue&type=template&id=27b455ac&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/menu.vue?vue&type=template&id=27b455ac& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "main-menu menu-fixed menu-light menu-accordion menu-shadow",
      attrs: { "data-scroll-to-active": "true" }
    },
    [
      _c("div", { staticClass: "navbar-header" }, [
        _c("ul", { staticClass: "nav navbar-nav flex-row" }, [
          _c(
            "li",
            { staticClass: "nav-item mr-auto" },
            [
              _c(
                "router-link",
                {
                  staticClass: "navbar-brand",
                  attrs: { to: { path: "/admin/" } }
                },
                [
                  _c("div", { staticClass: "brand-logo" }, [
                    _c("img", {
                      staticStyle: { width: "100%" },
                      attrs: {
                        src: _vm.index_url + "/public/images/logo.png",
                        alt: ""
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("h2", { staticClass: "brand-text mb-0" }, [
                    _vm._v("LAPSI")
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(0)
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "shadow-bottom" }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "main-menu-content" },
        [
          _c(
            "v-list",
            _vm._l(_vm.menus, function(menu) {
              return _c(
                "v-list-group",
                {
                  key: menu.title,
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "activator",
                        fn: function() {
                          return [
                            _c(
                              "v-list-item",
                              { attrs: { to: menu.path } },
                              [
                                _c(
                                  "v-list-item-icon",
                                  [_c("v-icon", [_vm._v(_vm._s(menu.icon))])],
                                  1
                                ),
                                _vm._v(" "),
                                _c("v-list-item-title", {
                                  domProps: { textContent: _vm._s(menu.title) },
                                  model: {
                                    value: menu.active,
                                    callback: function($$v) {
                                      _vm.$set(menu, "active", $$v)
                                    },
                                    expression: "menu.active"
                                  }
                                })
                              ],
                              1
                            )
                          ]
                        },
                        proxy: true
                      }
                    ],
                    null,
                    true
                  )
                },
                [
                  _vm._v(" "),
                  _vm._l(menu.items, function(item) {
                    return _c(
                      "v-list-item",
                      { key: item.title, attrs: { to: item.path } },
                      [
                        _c(
                          "v-list-item-icon",
                          [_c("v-icon", [_vm._v(_vm._s(item.icon))])],
                          1
                        ),
                        _vm._v(" "),
                        _c("v-list-item-title", {
                          domProps: { textContent: _vm._s(item.title) }
                        })
                      ],
                      1
                    )
                  })
                ],
                2
              )
            }),
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item nav-toggle" }, [
      _c(
        "a",
        {
          staticClass: "nav-link modern-nav-toggle pr-0",
          attrs: { "data-toggle": "collapse" }
        },
        [
          _c("i", {
            staticClass:
              "feather icon-x d-block d-xl-none font-medium-4 primary toggle-icon"
          }),
          _vm._v(" "),
          _c("i", {
            staticClass:
              "toggle-icon feather icon-disc font-medium-4 d-none d-xl-block collapse-toggle-icon primary",
            attrs: { "data-ticon": "icon-disc" }
          })
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/menu.vue":
/*!************************************************!*\
  !*** ./resources/js/components/admin/menu.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_vue_vue_type_template_id_27b455ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.vue?vue&type=template&id=27b455ac& */ "./resources/js/components/admin/menu.vue?vue&type=template&id=27b455ac&");
/* harmony import */ var _menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _menu_vue_vue_type_template_id_27b455ac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _menu_vue_vue_type_template_id_27b455ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/menu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/menu.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/admin/menu.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./menu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/menu.vue?vue&type=template&id=27b455ac&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/admin/menu.vue?vue&type=template&id=27b455ac& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_27b455ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./menu.vue?vue&type=template&id=27b455ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/menu.vue?vue&type=template&id=27b455ac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_27b455ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_27b455ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);