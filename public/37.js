(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/staff/addStaff.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/staff/addStaff.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        surname: "",
        firstname: "",
        password: "",
        username: "",
        confirm_password: "",
        role_id: "",
        agency_id: []
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
        var agency = this.staff.agency_id;

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
    addStaff: function addStaff(event) {
      var _this2 = this;

      var button = event.target;
      button.setAttribute("disabled", "true");
      this.errors = [];
      var data = setFormData(this.staff);
      axios.post("".concat(index_url, "/api/staffs"), data).then(function (resp) {
        if (resp.data.status) {
          Swal.fire({
            title: "Role Added",
            text: "You have successfully added a new role",
            icon: "success"
          });
          button.removeAttribute("disabled");
          var obj = _this2;
          setTimeout(function () {
            obj.$router.push({
              path: "/admin/staffs/"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/staff/addStaff.vue?vue&type=template&id=788fbd99&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/staff/addStaff.vue?vue&type=template&id=788fbd99& ***!
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
                            _c("div", { staticClass: "col-12 col-md-6" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "label",
                                    { attrs: { for: "first-name-vertical" } },
                                    [_vm._v("Surname")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.staff.surname,
                                        expression: "staff.surname"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      id: "first-name-vertical",
                                      placeholder: "surname name",
                                      required: ""
                                    },
                                    domProps: { value: _vm.staff.surname },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.staff,
                                          "surname",
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
                            _c("div", { staticClass: "col-12 col-md-6" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "label",
                                    { attrs: { for: "first-name-vertical" } },
                                    [_vm._v("firstname")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.staff.firstname,
                                        expression: "staff.firstname"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      id: "first-name-vertical",
                                      placeholder: "first name",
                                      required: ""
                                    },
                                    domProps: { value: _vm.staff.firstname },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.staff,
                                          "firstname",
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
                            _c("div", { staticClass: "col-12 col-md-6" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "label",
                                    { attrs: { for: "first-name-vertical" } },
                                    [_vm._v("Username")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.staff.username,
                                        expression: "staff.username"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      id: "first-name-vertical",
                                      placeholder: "username",
                                      required: ""
                                    },
                                    domProps: { value: _vm.staff.username },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.staff,
                                          "username",
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
                            _c("div", { staticClass: "col-sm-6 col-12" }, [
                              _c("label", [_vm._v("Password")]),
                              _vm._v(" "),
                              _c(
                                "fieldset",
                                {
                                  staticClass:
                                    "form-label-group form-group position-relative has-icon-left"
                                },
                                [
                                  _vm.type === "checkbox"
                                    ? _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.staff.password,
                                            expression: "staff.password"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          id: "first-name-vertical",
                                          placeholder: "Confirm Password",
                                          name: "name",
                                          required: "",
                                          type: "checkbox"
                                        },
                                        domProps: {
                                          checked: Array.isArray(
                                            _vm.staff.password
                                          )
                                            ? _vm._i(_vm.staff.password, null) >
                                              -1
                                            : _vm.staff.password
                                        },
                                        on: {
                                          change: function($event) {
                                            var $$a = _vm.staff.password,
                                              $$el = $event.target,
                                              $$c = $$el.checked ? true : false
                                            if (Array.isArray($$a)) {
                                              var $$v = null,
                                                $$i = _vm._i($$a, $$v)
                                              if ($$el.checked) {
                                                $$i < 0 &&
                                                  _vm.$set(
                                                    _vm.staff,
                                                    "password",
                                                    $$a.concat([$$v])
                                                  )
                                              } else {
                                                $$i > -1 &&
                                                  _vm.$set(
                                                    _vm.staff,
                                                    "password",
                                                    $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      )
                                                  )
                                              }
                                            } else {
                                              _vm.$set(
                                                _vm.staff,
                                                "password",
                                                $$c
                                              )
                                            }
                                          }
                                        }
                                      })
                                    : _vm.type === "radio"
                                    ? _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.staff.password,
                                            expression: "staff.password"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          id: "first-name-vertical",
                                          placeholder: "Confirm Password",
                                          name: "name",
                                          required: "",
                                          type: "radio"
                                        },
                                        domProps: {
                                          checked: _vm._q(
                                            _vm.staff.password,
                                            null
                                          )
                                        },
                                        on: {
                                          change: function($event) {
                                            return _vm.$set(
                                              _vm.staff,
                                              "password",
                                              null
                                            )
                                          }
                                        }
                                      })
                                    : _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.staff.password,
                                            expression: "staff.password"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          id: "first-name-vertical",
                                          placeholder: "Confirm Password",
                                          name: "name",
                                          required: "",
                                          type: _vm.type
                                        },
                                        domProps: { value: _vm.staff.password },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.staff,
                                              "password",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-control-position" },
                                    [
                                      _c("i", {
                                        class: ["feather", _vm.icon],
                                        on: {
                                          click: function($event) {
                                            return _vm.setType()
                                          }
                                        }
                                      })
                                    ]
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-sm-6 col-12" }, [
                              _c("label", [_vm._v("Confrim password")]),
                              _vm._v(" "),
                              _c(
                                "fieldset",
                                {
                                  staticClass:
                                    "form-label-group form-group position-relative has-icon-left"
                                },
                                [
                                  _vm.type === "checkbox"
                                    ? _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.staff.confirm_password,
                                            expression: "staff.confirm_password"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          id: "first-name-vertical",
                                          placeholder: "Confirm Password",
                                          name: "name",
                                          required: "",
                                          type: "checkbox"
                                        },
                                        domProps: {
                                          checked: Array.isArray(
                                            _vm.staff.confirm_password
                                          )
                                            ? _vm._i(
                                                _vm.staff.confirm_password,
                                                null
                                              ) > -1
                                            : _vm.staff.confirm_password
                                        },
                                        on: {
                                          change: function($event) {
                                            var $$a =
                                                _vm.staff.confirm_password,
                                              $$el = $event.target,
                                              $$c = $$el.checked ? true : false
                                            if (Array.isArray($$a)) {
                                              var $$v = null,
                                                $$i = _vm._i($$a, $$v)
                                              if ($$el.checked) {
                                                $$i < 0 &&
                                                  _vm.$set(
                                                    _vm.staff,
                                                    "confirm_password",
                                                    $$a.concat([$$v])
                                                  )
                                              } else {
                                                $$i > -1 &&
                                                  _vm.$set(
                                                    _vm.staff,
                                                    "confirm_password",
                                                    $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      )
                                                  )
                                              }
                                            } else {
                                              _vm.$set(
                                                _vm.staff,
                                                "confirm_password",
                                                $$c
                                              )
                                            }
                                          }
                                        }
                                      })
                                    : _vm.type === "radio"
                                    ? _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.staff.confirm_password,
                                            expression: "staff.confirm_password"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          id: "first-name-vertical",
                                          placeholder: "Confirm Password",
                                          name: "name",
                                          required: "",
                                          type: "radio"
                                        },
                                        domProps: {
                                          checked: _vm._q(
                                            _vm.staff.confirm_password,
                                            null
                                          )
                                        },
                                        on: {
                                          change: function($event) {
                                            return _vm.$set(
                                              _vm.staff,
                                              "confirm_password",
                                              null
                                            )
                                          }
                                        }
                                      })
                                    : _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.staff.confirm_password,
                                            expression: "staff.confirm_password"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          id: "first-name-vertical",
                                          placeholder: "Confirm Password",
                                          name: "name",
                                          required: "",
                                          type: _vm.type
                                        },
                                        domProps: {
                                          value: _vm.staff.confirm_password
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.staff,
                                              "confirm_password",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-control-position" },
                                    [
                                      _c("i", {
                                        class: ["feather", _vm.icon],
                                        on: {
                                          click: function($event) {
                                            return _vm.setType()
                                          }
                                        }
                                      })
                                    ]
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-md-6 form-group" },
                              [
                                _c("label", [_vm._v("Role")]),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.staff.role_id,
                                        expression: "staff.role_id"
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
                                          _vm.staff,
                                          "role_id",
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
                                      [_vm._v("Select Role")]
                                    ),
                                    _vm._v(" "),
                                    _vm._l(_vm.roles, function(x, ind) {
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
                            _vm._l(_vm.agencies, function(x, index) {
                              return _c(
                                "div",
                                {
                                  key: index,
                                  staticClass: "col-md-6 form-group"
                                },
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
              _vm._v("Admins")
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
      _c("h4", { staticClass: "card-title" }, [_vm._v("Add Admin")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/staff/addStaff.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/admin/staff/addStaff.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addStaff_vue_vue_type_template_id_788fbd99___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addStaff.vue?vue&type=template&id=788fbd99& */ "./resources/js/components/admin/staff/addStaff.vue?vue&type=template&id=788fbd99&");
/* harmony import */ var _addStaff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addStaff.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/staff/addStaff.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _addStaff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addStaff_vue_vue_type_template_id_788fbd99___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addStaff_vue_vue_type_template_id_788fbd99___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/staff/addStaff.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/staff/addStaff.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/admin/staff/addStaff.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addStaff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addStaff.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/staff/addStaff.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addStaff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/staff/addStaff.vue?vue&type=template&id=788fbd99&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/admin/staff/addStaff.vue?vue&type=template&id=788fbd99& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addStaff_vue_vue_type_template_id_788fbd99___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addStaff.vue?vue&type=template&id=788fbd99& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/staff/addStaff.vue?vue&type=template&id=788fbd99&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addStaff_vue_vue_type_template_id_788fbd99___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addStaff_vue_vue_type_template_id_788fbd99___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);