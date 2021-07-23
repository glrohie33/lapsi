(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-role"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/role/edit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/role/edit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      role: {
        name: "",
        permissions: {}
      },
      permissions: [],
      errors: []
    };
  },
  created: function created() {
    this.getData();
    this.loadData();
  },
  methods: {
    getData: function getData() {
      var _this = this;

      var users = axios.get("".concat(index_url, "/api/rolepermissions")).then(function (resp) {
        _this.permissions = resp.data.permissions;
      });
    },
    loadData: function loadData() {
      var _this2 = this;

      axios.get("".concat(index_url, "/api/roles/").concat($route.params.slug)).then(function (resp) {
        _this2.permissions = resp.data.permissions;
      });
    },
    setActions: function setActions(event, perm) {
      if (event.target.checked) {
        this.role.permissions[perm] = {
          read: false,
          create: false,
          update: false,
          "delete": false
        };
      } else {
        this.role.permissions[perm] = false;
      }
    },
    addRole: function addRole(event) {
      var _this3 = this;

      var button = event.target;
      button.setAttribute("disabled", "true");
      this.errors = [];
      var data = setFormData(this.role);
      axios.post("".concat(index_url, "/api/roles"), data).then(function (resp) {
        if (resp.data.status) {
          Swal.fire({
            title: "Role Added",
            text: "You have successfully added a new role",
            icon: "success"
          });
          button.removeAttribute("disabled");

          _this3.$router.push({
            path: "/admin/roles/"
          });
        } else {
          _this3.errors = resp.data.errors;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/role/edit.vue?vue&type=template&id=62553448&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/role/edit.vue?vue&type=template&id=62553448& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "app-content container" }, [
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
                            _c("div", { staticClass: "col-12" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "label",
                                    { attrs: { for: "first-name-vertical" } },
                                    [_vm._v("Role Name")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.role.name,
                                        expression: "role.name"
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
                                    domProps: { value: _vm.role.name },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.role,
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
                            _vm._m(2),
                            _vm._v(" "),
                            _vm._l(_vm.permissions, function(
                              permission,
                              index
                            ) {
                              return _c(
                                "div",
                                { key: index, staticClass: "col-12" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "custom-control custom-switch mr-2 mb-1"
                                    },
                                    [
                                      _c("p", { staticClass: "mb-0" }, [
                                        _vm._v(_vm._s(permission.permission))
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              _vm.role.permissions[
                                                permission.permission
                                              ],
                                            expression:
                                              "role.permissions[permission.permission]"
                                          }
                                        ],
                                        staticClass: "custom-control-input",
                                        attrs: {
                                          type: "checkbox",
                                          id: ["permission" + index]
                                        },
                                        domProps: {
                                          checked: Array.isArray(
                                            _vm.role.permissions[
                                              permission.permission
                                            ]
                                          )
                                            ? _vm._i(
                                                _vm.role.permissions[
                                                  permission.permission
                                                ],
                                                null
                                              ) > -1
                                            : _vm.role.permissions[
                                                permission.permission
                                              ]
                                        },
                                        on: {
                                          change: [
                                            function($event) {
                                              var $$a =
                                                  _vm.role.permissions[
                                                    permission.permission
                                                  ],
                                                $$el = $event.target,
                                                $$c = $$el.checked
                                                  ? true
                                                  : false
                                              if (Array.isArray($$a)) {
                                                var $$v = null,
                                                  $$i = _vm._i($$a, $$v)
                                                if ($$el.checked) {
                                                  $$i < 0 &&
                                                    _vm.$set(
                                                      _vm.role.permissions,
                                                      permission.permission,
                                                      $$a.concat([$$v])
                                                    )
                                                } else {
                                                  $$i > -1 &&
                                                    _vm.$set(
                                                      _vm.role.permissions,
                                                      permission.permission,
                                                      $$a
                                                        .slice(0, $$i)
                                                        .concat(
                                                          $$a.slice($$i + 1)
                                                        )
                                                    )
                                                }
                                              } else {
                                                _vm.$set(
                                                  _vm.role.permissions,
                                                  permission.permission,
                                                  $$c
                                                )
                                              }
                                            },
                                            function($event) {
                                              return _vm.setActions(
                                                $event,
                                                permission.permission
                                              )
                                            }
                                          ]
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("label", {
                                        staticClass: "custom-control-label",
                                        attrs: { for: ["permission" + index] }
                                      }),
                                      _vm._v(" "),
                                      _vm.role.permissions[
                                        permission.permission
                                      ]
                                        ? _c("div", { staticClass: "row" }, [
                                            _c(
                                              "div",
                                              { staticClass: "col-md-3" },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "custom-control custom-switch-success mr-2 mb-1"
                                                  },
                                                  [
                                                    _c(
                                                      "p",
                                                      { staticClass: "mb-0" },
                                                      [_vm._v("Read")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.role
                                                              .permissions[
                                                              permission
                                                                .permission
                                                            ]["read"],
                                                          expression:
                                                            "role.permissions[permission.permission]['read']"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "custom-control-input",
                                                      attrs: {
                                                        type: "checkbox",
                                                        id: [
                                                          permission.permission +
                                                            "read"
                                                        ]
                                                      },
                                                      domProps: {
                                                        checked: Array.isArray(
                                                          _vm.role.permissions[
                                                            permission
                                                              .permission
                                                          ]["read"]
                                                        )
                                                          ? _vm._i(
                                                              _vm.role
                                                                .permissions[
                                                                permission
                                                                  .permission
                                                              ]["read"],
                                                              null
                                                            ) > -1
                                                          : _vm.role
                                                              .permissions[
                                                              permission
                                                                .permission
                                                            ]["read"]
                                                      },
                                                      on: {
                                                        change: function(
                                                          $event
                                                        ) {
                                                          var $$a =
                                                              _vm.role
                                                                .permissions[
                                                                permission
                                                                  .permission
                                                              ]["read"],
                                                            $$el =
                                                              $event.target,
                                                            $$c = $$el.checked
                                                              ? true
                                                              : false
                                                          if (
                                                            Array.isArray($$a)
                                                          ) {
                                                            var $$v = null,
                                                              $$i = _vm._i(
                                                                $$a,
                                                                $$v
                                                              )
                                                            if ($$el.checked) {
                                                              $$i < 0 &&
                                                                _vm.$set(
                                                                  _vm.role
                                                                    .permissions[
                                                                    permission
                                                                      .permission
                                                                  ],
                                                                  "read",
                                                                  $$a.concat([
                                                                    $$v
                                                                  ])
                                                                )
                                                            } else {
                                                              $$i > -1 &&
                                                                _vm.$set(
                                                                  _vm.role
                                                                    .permissions[
                                                                    permission
                                                                      .permission
                                                                  ],
                                                                  "read",
                                                                  $$a
                                                                    .slice(
                                                                      0,
                                                                      $$i
                                                                    )
                                                                    .concat(
                                                                      $$a.slice(
                                                                        $$i + 1
                                                                      )
                                                                    )
                                                                )
                                                            }
                                                          } else {
                                                            _vm.$set(
                                                              _vm.role
                                                                .permissions[
                                                                permission
                                                                  .permission
                                                              ],
                                                              "read",
                                                              $$c
                                                            )
                                                          }
                                                        }
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("label", {
                                                      staticClass:
                                                        "custom-control-label",
                                                      attrs: {
                                                        for: [
                                                          permission.permission +
                                                            "read"
                                                        ]
                                                      }
                                                    })
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "col-md-3" },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "custom-control custom-switch-success mr-2 mb-1"
                                                  },
                                                  [
                                                    _c(
                                                      "p",
                                                      { staticClass: "mb-0" },
                                                      [_vm._v("Create")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.role
                                                              .permissions[
                                                              permission
                                                                .permission
                                                            ]["create"],
                                                          expression:
                                                            "role.permissions[permission.permission]['create']"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "custom-control-input",
                                                      attrs: {
                                                        type: "checkbox",
                                                        id: [
                                                          permission.permission +
                                                            "create"
                                                        ]
                                                      },
                                                      domProps: {
                                                        checked: Array.isArray(
                                                          _vm.role.permissions[
                                                            permission
                                                              .permission
                                                          ]["create"]
                                                        )
                                                          ? _vm._i(
                                                              _vm.role
                                                                .permissions[
                                                                permission
                                                                  .permission
                                                              ]["create"],
                                                              null
                                                            ) > -1
                                                          : _vm.role
                                                              .permissions[
                                                              permission
                                                                .permission
                                                            ]["create"]
                                                      },
                                                      on: {
                                                        change: function(
                                                          $event
                                                        ) {
                                                          var $$a =
                                                              _vm.role
                                                                .permissions[
                                                                permission
                                                                  .permission
                                                              ]["create"],
                                                            $$el =
                                                              $event.target,
                                                            $$c = $$el.checked
                                                              ? true
                                                              : false
                                                          if (
                                                            Array.isArray($$a)
                                                          ) {
                                                            var $$v = null,
                                                              $$i = _vm._i(
                                                                $$a,
                                                                $$v
                                                              )
                                                            if ($$el.checked) {
                                                              $$i < 0 &&
                                                                _vm.$set(
                                                                  _vm.role
                                                                    .permissions[
                                                                    permission
                                                                      .permission
                                                                  ],
                                                                  "create",
                                                                  $$a.concat([
                                                                    $$v
                                                                  ])
                                                                )
                                                            } else {
                                                              $$i > -1 &&
                                                                _vm.$set(
                                                                  _vm.role
                                                                    .permissions[
                                                                    permission
                                                                      .permission
                                                                  ],
                                                                  "create",
                                                                  $$a
                                                                    .slice(
                                                                      0,
                                                                      $$i
                                                                    )
                                                                    .concat(
                                                                      $$a.slice(
                                                                        $$i + 1
                                                                      )
                                                                    )
                                                                )
                                                            }
                                                          } else {
                                                            _vm.$set(
                                                              _vm.role
                                                                .permissions[
                                                                permission
                                                                  .permission
                                                              ],
                                                              "create",
                                                              $$c
                                                            )
                                                          }
                                                        }
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("label", {
                                                      staticClass:
                                                        "custom-control-label",
                                                      attrs: {
                                                        for: [
                                                          permission.permission +
                                                            "create"
                                                        ]
                                                      }
                                                    })
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "col-md-3" },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "custom-control custom-switch-success mr-2 mb-1"
                                                  },
                                                  [
                                                    _c(
                                                      "p",
                                                      { staticClass: "mb-0" },
                                                      [_vm._v("Delete")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.role
                                                              .permissions[
                                                              permission
                                                                .permission
                                                            ]["delete"],
                                                          expression:
                                                            "role.permissions[permission.permission]['delete']"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "custom-control-input",
                                                      attrs: {
                                                        type: "checkbox",
                                                        id: [
                                                          permission.permission +
                                                            "delete"
                                                        ]
                                                      },
                                                      domProps: {
                                                        checked: Array.isArray(
                                                          _vm.role.permissions[
                                                            permission
                                                              .permission
                                                          ]["delete"]
                                                        )
                                                          ? _vm._i(
                                                              _vm.role
                                                                .permissions[
                                                                permission
                                                                  .permission
                                                              ]["delete"],
                                                              null
                                                            ) > -1
                                                          : _vm.role
                                                              .permissions[
                                                              permission
                                                                .permission
                                                            ]["delete"]
                                                      },
                                                      on: {
                                                        change: function(
                                                          $event
                                                        ) {
                                                          var $$a =
                                                              _vm.role
                                                                .permissions[
                                                                permission
                                                                  .permission
                                                              ]["delete"],
                                                            $$el =
                                                              $event.target,
                                                            $$c = $$el.checked
                                                              ? true
                                                              : false
                                                          if (
                                                            Array.isArray($$a)
                                                          ) {
                                                            var $$v = null,
                                                              $$i = _vm._i(
                                                                $$a,
                                                                $$v
                                                              )
                                                            if ($$el.checked) {
                                                              $$i < 0 &&
                                                                _vm.$set(
                                                                  _vm.role
                                                                    .permissions[
                                                                    permission
                                                                      .permission
                                                                  ],
                                                                  "delete",
                                                                  $$a.concat([
                                                                    $$v
                                                                  ])
                                                                )
                                                            } else {
                                                              $$i > -1 &&
                                                                _vm.$set(
                                                                  _vm.role
                                                                    .permissions[
                                                                    permission
                                                                      .permission
                                                                  ],
                                                                  "delete",
                                                                  $$a
                                                                    .slice(
                                                                      0,
                                                                      $$i
                                                                    )
                                                                    .concat(
                                                                      $$a.slice(
                                                                        $$i + 1
                                                                      )
                                                                    )
                                                                )
                                                            }
                                                          } else {
                                                            _vm.$set(
                                                              _vm.role
                                                                .permissions[
                                                                permission
                                                                  .permission
                                                              ],
                                                              "delete",
                                                              $$c
                                                            )
                                                          }
                                                        }
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("label", {
                                                      staticClass:
                                                        "custom-control-label",
                                                      attrs: {
                                                        for: [
                                                          permission.permission +
                                                            "delete"
                                                        ]
                                                      }
                                                    })
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "col-md-3" },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "custom-control custom-switch-success mr-2 mb-1"
                                                  },
                                                  [
                                                    _c(
                                                      "p",
                                                      { staticClass: "mb-0" },
                                                      [_vm._v("Update")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.role
                                                              .permissions[
                                                              permission
                                                                .permission
                                                            ]["update"],
                                                          expression:
                                                            "role.permissions[permission.permission]['update']"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "custom-control-input",
                                                      attrs: {
                                                        type: "checkbox",
                                                        id: [
                                                          permission.permission +
                                                            "update"
                                                        ]
                                                      },
                                                      domProps: {
                                                        checked: Array.isArray(
                                                          _vm.role.permissions[
                                                            permission
                                                              .permission
                                                          ]["update"]
                                                        )
                                                          ? _vm._i(
                                                              _vm.role
                                                                .permissions[
                                                                permission
                                                                  .permission
                                                              ]["update"],
                                                              null
                                                            ) > -1
                                                          : _vm.role
                                                              .permissions[
                                                              permission
                                                                .permission
                                                            ]["update"]
                                                      },
                                                      on: {
                                                        change: function(
                                                          $event
                                                        ) {
                                                          var $$a =
                                                              _vm.role
                                                                .permissions[
                                                                permission
                                                                  .permission
                                                              ]["update"],
                                                            $$el =
                                                              $event.target,
                                                            $$c = $$el.checked
                                                              ? true
                                                              : false
                                                          if (
                                                            Array.isArray($$a)
                                                          ) {
                                                            var $$v = null,
                                                              $$i = _vm._i(
                                                                $$a,
                                                                $$v
                                                              )
                                                            if ($$el.checked) {
                                                              $$i < 0 &&
                                                                _vm.$set(
                                                                  _vm.role
                                                                    .permissions[
                                                                    permission
                                                                      .permission
                                                                  ],
                                                                  "update",
                                                                  $$a.concat([
                                                                    $$v
                                                                  ])
                                                                )
                                                            } else {
                                                              $$i > -1 &&
                                                                _vm.$set(
                                                                  _vm.role
                                                                    .permissions[
                                                                    permission
                                                                      .permission
                                                                  ],
                                                                  "update",
                                                                  $$a
                                                                    .slice(
                                                                      0,
                                                                      $$i
                                                                    )
                                                                    .concat(
                                                                      $$a.slice(
                                                                        $$i + 1
                                                                      )
                                                                    )
                                                                )
                                                            }
                                                          } else {
                                                            _vm.$set(
                                                              _vm.role
                                                                .permissions[
                                                                permission
                                                                  .permission
                                                              ],
                                                              "update",
                                                              $$c
                                                            )
                                                          }
                                                        }
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("label", {
                                                      staticClass:
                                                        "custom-control-label",
                                                      attrs: {
                                                        for: [
                                                          permission.permission +
                                                            "update"
                                                        ]
                                                      }
                                                    })
                                                  ]
                                                )
                                              ]
                                            )
                                          ])
                                        : _vm._e()
                                    ]
                                  )
                                ]
                              )
                            })
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
                              return _vm.addRole($event)
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
              _vm._v("Roles")
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
      _c("h4", { staticClass: "card-title" }, [_vm._v("Add Role")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col12" }, [
      _c("h5", [_vm._v("Select Permissions")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/role/edit.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/admin/role/edit.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_vue_vue_type_template_id_62553448___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=62553448& */ "./resources/js/components/admin/role/edit.vue?vue&type=template&id=62553448&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/role/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_62553448___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_vue_vue_type_template_id_62553448___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/role/edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/role/edit.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/admin/role/edit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/role/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/role/edit.vue?vue&type=template&id=62553448&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/admin/role/edit.vue?vue&type=template&id=62553448& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_62553448___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=template&id=62553448& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/role/edit.vue?vue&type=template&id=62553448&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_62553448___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_62553448___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);