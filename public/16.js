(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/user/list.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/user/list.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["role"],
  data: function data() {
    return {
      headers: [{
        text: "Oracle Id",
        value: "oracle"
      }, {
        text: "Title",
        value: "title"
      }, {
        text: "Surname",
        value: "surname"
      }, {
        text: "Firstname",
        value: "firstname"
      }, {
        text: "Designation",
        value: "designation"
      }, {
        text: "Beneficiaries",
        value: "beneficiaries"
      }, {
        text: "Status",
        value: "status"
      }, {
        text: "Actions",
        value: "actions",
        sortable: "false"
      }],
      selected: [],
      options: {},
      total: 0,
      loading: true,
      items: [],
      viewProfile: false,
      users: true,
      user: {},
      roles: [],
      errors: [],
      approvalText: "Approve",
      setStatus: "1",
      roleDialog: false,
      select: false,
      search: "",
      filter: "all",
      approvalButton: false
    };
  },
  watch: {
    options: {
      handler: function handler() {
        this.getData();
      },
      deep: true
    },
    search: {
      handler: function handler() {
        this.getData();
      }
    },
    filter: {
      handler: function handler() {
        if (this.filter == "unverified") {
          this.approvalText = "Approve";
          this.setStatus = "1";
          this.approvalButton = true;
          this.select = true;
        } else if (this.filter == "verified") {
          this.approvalText = "Unapprove";
          this.setStatus = "0";
          this.approvalButton = true;
          this.select = true;
        } else {
          this.select = false;
          this.approvalButton = false;
        }

        this.getData();
      }
    }
  },
  created: function created() {
    if (this.permissions("user", "update") == false) {
      this.select = false;
    }

    this.getData();
    this.getRoles();
  },
  methods: {
    getData: function getData() {
      var _this = this;

      var _this$options = this.options,
          sortBy = _this$options.sortBy,
          sortDesc = _this$options.sortDesc,
          page = _this$options.page,
          itemsPerPage = _this$options.itemsPerPage;
      var sort = sortBy[0];
      var desc = sortDesc[0];
      var url = "".concat(index_url, "/api/users?page=").concat(page, "&limit=").concat(itemsPerPage, "&sort=").concat(sort, "&desc=").concat(desc, "&search=").concat(this.search, "&filter=").concat(this.filter);
      axios.get(url, formHeader()).then(function (resp) {
        _this.items = resp.data.users;
        _this.total = resp.data.total;
      });
    },
    getRoles: function getRoles() {
      var _this2 = this;

      var users = axios.get("".concat(index_url, "/api/roles")).then(function (resp) {
        _this2.roles = resp.data.roles;
      });
    },
    view: function view(item) {
      this.user = item;
      this.user.beneficiaries = _typeof(item.beneficiaries) == "object" ? item.beneficiaries : JSON.parse(item.beneficiaries);
      this.users = false;
      this.viewProfile = true;
    },
    beneLen: function beneLen(item) {
      if (_typeof(item.beneficiaries) != "object") {
        return JSON.parse(item.beneficiaries).length;
      } else {
        return item.beneficiaries.length;
      }
    },
    showList: function showList() {
      this.users = true;
      this.viewProfile = false;
    },
    verify: function verify(event, status) {
      var _this3 = this;

      var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      if (this.selected.length > 0 || id != null) {
        var users = this.selected.map(function (user) {
          return user.id;
        });

        if (id != null) {
          users = [id];
        }

        var approvalText = "Approved";

        if (status == "0") {
          approvalText = "Unapproved";
        }

        var button = event.target;
        button.setAttribute("disabled", "true");
        this.errors = [];
        axios.post("".concat(index_url, "/api/user/verify"), {
          users: users,
          status: status
        }, formHeader()).then(function (resp) {
          if (resp.data.status) {
            Swal.fire({
              title: "Users ".concat(approvalText),
              text: "Users nominal roles has been ".concat(approvalText),
              icon: "success"
            });
            button.removeAttribute("disabled");
            _this3.users = true;
            _this3.viewProfile = false;

            _this3.getData();
          } else {
            button.removeAttribute("disabled");
          }
        });
      }
    },
    getAgency: function getAgency(item, index) {
      var _this4 = this;

      var url = "".concat(index_url, "/api/useragencies/").concat(item.agency_id);
      var agency = [{
        name: "glory"
      }];
      var ag = axios.get(url).then(function (resp) {
        _this4.items[index].agency = resp.data.agencies;
        agency = resp.data.agency;
      });
    },
    "delete": function _delete(code) {
      console.log("here");
    },
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
    },
    status: function status(_status) {
      return _status == 1 ? "<span style='color:green;'>Approved</span>" : "<span style='color:red;'>Unapproved</span>";
    },
    setRole: function setRole(item) {
      Object.assign(this.user, item);
      this.roleDialog = true;
    },
    addRole: function addRole(event) {
      var _this5 = this;

      var button = event.target;
      button.setAttribute("disabled", "true");
      this.errors = [];
      var data = {
        id: this.user.id,
        role_id: this.user.role_id
      };
      axios.post("".concat(index_url, "/api/user/addrole/").concat(this.user.id), data).then(function (resp) {
        if (resp.data.status) {
          Swal.fire({
            title: "Role Added",
            text: "You have successfully added a new role",
            icon: "success"
          });
          button.removeAttribute("disabled");
          _this5.user = {};
          _this5.roleDialog = false;
        } else {
          _this5.errors = resp.data.errors;
          button.removeAttribute("disabled");
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/user/list.vue?vue&type=style&index=0&id=da52ddb2&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/user/list.vue?vue&type=style&index=0&id=da52ddb2&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.users-view table[data-v-da52ddb2] {\n  width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/user/list.vue?vue&type=style&index=0&id=da52ddb2&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/user/list.vue?vue&type=style&index=0&id=da52ddb2&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=style&index=0&id=da52ddb2&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/user/list.vue?vue&type=style&index=0&id=da52ddb2&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/user/list.vue?vue&type=template&id=da52ddb2&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/user/list.vue?vue&type=template&id=da52ddb2&scoped=true& ***!
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
  return _c("div", { staticClass: "app-content content" }, [
    _c("div", { staticClass: "content-overlay" }),
    _vm._v(" "),
    _c("div", { staticClass: "header-navbar-shadow" }),
    _vm._v(" "),
    _c("div", { staticClass: "content-wrapper" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "content-body" }, [
        _c(
          "section",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.viewProfile,
                expression: "viewProfile"
              }
            ],
            staticClass: "page-users-view users-view"
          },
          [
            _c(
              "div",
              { staticClass: "row" },
              [
                _c("div", { staticClass: "col-12" }, [
                  _c("div", { staticClass: "card" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-12" }, [
                          _c("h3", [_vm._v(_vm._s(_vm.user.oracle))])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-12 col-sm-9 col-md-6 col-lg-5" },
                          [
                            _c("table", [
                              _c("tr", [
                                _c("td", { staticClass: "font-weight-bold" }, [
                                  _vm._v("Surname")
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(_vm.user.surname))])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { staticClass: "font-weight-bold" }, [
                                  _vm._v("Firstname")
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(_vm.user.firstname))])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { staticClass: "font-weight-bold" }, [
                                  _vm._v("Middlename")
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(_vm.user.middlename))])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { staticClass: "font-weight-bold" }, [
                                  _vm._v("Gender")
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(_vm.user.sex))])
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-12 col-md-12 col-lg-5" },
                          [
                            _c(
                              "table",
                              { staticClass: "ml-0 ml-sm-0 ml-lg-0" },
                              [
                                _c("tr", [
                                  _c(
                                    "td",
                                    { staticClass: "font-weight-bold" },
                                    [_vm._v("Phone")]
                                  ),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(_vm.user.phone))])
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c(
                                    "td",
                                    { staticClass: "font-weight-bold" },
                                    [_vm._v("State Of Origin")]
                                  ),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(_vm.user.state))])
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c(
                                    "td",
                                    { staticClass: "font-weight-bold" },
                                    [_vm._v("Date of Birth")]
                                  ),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(_vm.user.dateofbirth))
                                  ])
                                ])
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12" }, [
                          _vm.permissions("user", "update")
                            ? _c(
                                "a",
                                { staticClass: "btn btn-primary mr-1 btn-sm" },
                                [
                                  _c("i", {
                                    staticClass: "feather icon-edit-1"
                                  }),
                                  _vm._v(" Edit\n                    ")
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.permissions("user", "update") &&
                          _vm.user.status == "0"
                            ? _c(
                                "button",
                                {
                                  staticClass: "btn btn-outline-danger btn-sm",
                                  on: {
                                    click: function($event) {
                                      return _vm.verify(
                                        $event,
                                        "1",
                                        _vm.user.id
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "feather icon-user-check"
                                  }),
                                  _vm._v(" Approve\n                    ")
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.permissions("user", "update") &&
                          _vm.user.status == "1"
                            ? _c(
                                "button",
                                {
                                  staticClass: "btn btn-outline-danger btn-sm",
                                  on: {
                                    click: function($event) {
                                      return _vm.verify(
                                        $event,
                                        "0",
                                        _vm.user.id
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "feather icon-user-x"
                                  }),
                                  _vm._v(" Unapprove\n                    ")
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.permissions("user", "delete")
                            ? _c(
                                "button",
                                {
                                  staticClass: "btn btn-outline-danger btn-sm"
                                },
                                [
                                  _c("i", {
                                    staticClass: "feather icon-trash-2"
                                  }),
                                  _vm._v(" Delete\n                    ")
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-info btn-sm",
                              on: {
                                click: function($event) {
                                  return _vm.showList()
                                }
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "feather icon-corner-up-left"
                              }),
                              _vm._v(" Back to list\n                    ")
                            ]
                          )
                        ])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12" }, [
                  _c("div", { staticClass: "card" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-12 col-sm-6 col-md-12 col-lg-6" },
                          [
                            _c("table", [
                              _c("tr", [
                                _c("td", { staticClass: "font-weight-bold" }, [
                                  _vm._v("Designation")
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(_vm.user.designation))])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { staticClass: "font-weight-bold" }, [
                                  _vm._v("Agency")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  _vm._l(_vm.user.agency, function(x, index) {
                                    return _c("p", { key: index }, [
                                      _vm._v(_vm._s(x.name))
                                    ])
                                  }),
                                  0
                                )
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { staticClass: "font-weight-bold" }, [
                                  _vm._v("Office")
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(_vm.user.office))])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { staticClass: "font-weight-bold" }, [
                                  _vm._v("Grade")
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(_vm.user.grade))])
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-12 col-md-12 col-lg-6" },
                          [
                            _c("table", [
                              _c("tr", [
                                _c("td", { staticClass: "font-weight-bold" }, [
                                  _vm._v("first Appointment")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.user.dateof1stapp))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { staticClass: "font-weight-bold" }, [
                                  _vm._v("present appointment")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.user.dateofpreapp))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { staticClass: "font-weight-bold" }, [
                                  _vm._v("last deployment")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.user.dateoflastdep))
                                ])
                              ])
                            ])
                          ]
                        )
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _vm._l(_vm.user.beneficiaries, function(item, index) {
                  return _c(
                    "div",
                    { key: index, staticClass: "col-md-6 col-12" },
                    [
                      _c("div", { staticClass: "card" }, [
                        _c("div", { staticClass: "card-header" }, [
                          _c("div", { staticClass: "card-title mb-2" }, [
                            _vm._v("Beneficiary " + _vm._s(index + 1))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "card-body" }, [
                          _c("table", [
                            _c("tr", [
                              _c("td", { staticClass: "font-weight-bold" }, [
                                _vm._v("Name")
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.name))])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { staticClass: "font-weight-bold" }, [
                                _vm._v("Phone")
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.phone))])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { staticClass: "font-weight-bold" }, [
                                _vm._v("Percentage")
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.perc) + "%")])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { staticClass: "font-weight-bold" }, [
                                _vm._v("Relationship")
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.rel))])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { staticClass: "font-weight-bold" }, [
                                _vm._v("Address")
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.addr))])
                            ])
                          ])
                        ])
                      ])
                    ]
                  )
                })
              ],
              2
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "section",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.users,
                expression: "users"
              }
            ],
            attrs: { id: "column-selectors" }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12" }, [
                _c("div", { staticClass: "card" }, [
                  _vm._m(3),
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
                              loading: _vm.loading,
                              "item-key": "oracle",
                              "show-select": _vm.select
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
                                      "div",
                                      { staticStyle: { overflow: "hidden" } },
                                      [
                                        _vm.permissions("user", "update")
                                          ? _c(
                                              "v-btn",
                                              {
                                                directives: [
                                                  {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value: _vm.approvalButton,
                                                    expression: "approvalButton"
                                                  }
                                                ],
                                                staticClass: "mb-2 btn-primary",
                                                staticStyle: { float: "left" },
                                                attrs: { dark: "" },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.verify(
                                                      $event,
                                                      _vm.setStatus
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.approvalText) +
                                                    " Staffs"
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass: "form-group",
                                            staticStyle: { float: "right" }
                                          },
                                          [
                                            _c(
                                              "select",
                                              {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: _vm.filter,
                                                    expression: "filter"
                                                  }
                                                ],
                                                staticClass:
                                                  "form-control select2-icons",
                                                on: {
                                                  change: function($event) {
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
                                                    _vm.filter = $event.target
                                                      .multiple
                                                      ? $$selectedVal
                                                      : $$selectedVal[0]
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "option",
                                                  {
                                                    attrs: {
                                                      value: "all",
                                                      "data-icon": "fa fa-male"
                                                    }
                                                  },
                                                  [_vm._v("All staffs")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "option",
                                                  {
                                                    attrs: { value: "verified" }
                                                  },
                                                  [_vm._v("Approved Staffs")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "option",
                                                  {
                                                    attrs: {
                                                      value: "unverified"
                                                    }
                                                  },
                                                  [_vm._v("Unapproved Staffs")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "option",
                                                  {
                                                    attrs: { value: "admins" }
                                                  },
                                                  [_vm._v("Administrators")]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.search,
                                            expression: "search"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "first-name-vertical",
                                          placeholder: "Search",
                                          name: "name",
                                          required: ""
                                        },
                                        domProps: { value: _vm.search },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.search = $event.target.value
                                          }
                                        }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "v-dialog",
                                      {
                                        attrs: { "max-width": "400px" },
                                        model: {
                                          value: _vm.roleDialog,
                                          callback: function($$v) {
                                            _vm.roleDialog = $$v
                                          },
                                          expression: "roleDialog"
                                        }
                                      },
                                      [
                                        _c("div", { staticClass: "card" }, [
                                          _c(
                                            "div",
                                            { staticClass: "card-header" },
                                            [
                                              _c(
                                                "h4",
                                                { staticClass: "card-title" },
                                                [_vm._v("Add Role")]
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
                                                          staticClass:
                                                            "form-body"
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
                                                                            "User Name"
                                                                          )
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "input",
                                                                        {
                                                                          staticClass:
                                                                            "form-control",
                                                                          attrs: {
                                                                            type:
                                                                              "text",
                                                                            id:
                                                                              "first-name-vertical",
                                                                            placeholder:
                                                                              "user name",
                                                                            name:
                                                                              "name",
                                                                            required:
                                                                              ""
                                                                          },
                                                                          domProps: {
                                                                            value:
                                                                              _vm
                                                                                .user
                                                                                .surname +
                                                                              " " +
                                                                              _vm
                                                                                .user
                                                                                .firstname
                                                                          }
                                                                        }
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
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
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "col-md-12 form-group"
                                                                },
                                                                [
                                                                  _c("label", [
                                                                    _vm._v(
                                                                      "Role"
                                                                    )
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "select",
                                                                    {
                                                                      directives: [
                                                                        {
                                                                          name:
                                                                            "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            _vm
                                                                              .user
                                                                              .role_id,
                                                                          expression:
                                                                            "user.role_id"
                                                                        }
                                                                      ],
                                                                      staticClass:
                                                                        "form-control select2-icons",
                                                                      on: {
                                                                        change: function(
                                                                          $event
                                                                        ) {
                                                                          var $$selectedVal = Array.prototype.filter
                                                                            .call(
                                                                              $event
                                                                                .target
                                                                                .options,
                                                                              function(
                                                                                o
                                                                              ) {
                                                                                return o.selected
                                                                              }
                                                                            )
                                                                            .map(
                                                                              function(
                                                                                o
                                                                              ) {
                                                                                var val =
                                                                                  "_value" in
                                                                                  o
                                                                                    ? o._value
                                                                                    : o.value
                                                                                return val
                                                                              }
                                                                            )
                                                                          _vm.$set(
                                                                            _vm.user,
                                                                            "role_id",
                                                                            $event
                                                                              .target
                                                                              .multiple
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
                                                                            value:
                                                                              "",
                                                                            "data-icon":
                                                                              "fa fa-male"
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "Select Role"
                                                                          )
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _vm._l(
                                                                        _vm.roles,
                                                                        function(
                                                                          x,
                                                                          ind
                                                                        ) {
                                                                          return _c(
                                                                            "option",
                                                                            {
                                                                              key: ind,
                                                                              domProps: {
                                                                                value:
                                                                                  x.id
                                                                              }
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                _vm._s(
                                                                                  x.name
                                                                                )
                                                                              )
                                                                            ]
                                                                          )
                                                                        }
                                                                      )
                                                                    ],
                                                                    2
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _vm._l(
                                                                    _vm.errors
                                                                      .parent_id,
                                                                    function(
                                                                      err,
                                                                      index
                                                                    ) {
                                                                      return _c(
                                                                        "p",
                                                                        {
                                                                          key: index,
                                                                          staticClass:
                                                                            "text-danger text-center"
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            _vm._s(
                                                                              err
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
                                                              return _vm.addRole(
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
                                                                (_vm.roleDialog = false)
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
                                    _vm.permissions("user", "read")
                                      ? _c(
                                          "v-btn",
                                          {
                                            staticClass: "mx-2",
                                            attrs: { small: "", icon: "" },
                                            on: {
                                              click: function($event) {
                                                return _vm.view(item)
                                              }
                                            }
                                          },
                                          [_c("v-icon", [_vm._v("mdi-eye")])],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.permissions("user", "update")
                                      ? _c(
                                          "v-btn",
                                          {
                                            staticClass: "mx-2",
                                            attrs: { small: "", icon: "" },
                                            on: {
                                              click: function($event) {
                                                return _vm.setRole(item)
                                              }
                                            }
                                          },
                                          [
                                            _c("v-icon", [_vm._v("mdi-pencil")])
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.permissions("user", "delete")
                                      ? _c(
                                          "v-btn",
                                          {
                                            staticClass: "mx-2",
                                            attrs: { small: "", icon: "" },
                                            on: {
                                              click: function($event) {
                                                return _vm.deleteItem(
                                                  item.oracle
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("v-icon", [_vm._v("mdi-delete")])
                                          ],
                                          1
                                        )
                                      : _vm._e()
                                  ]
                                }
                              },
                              {
                                key: "item.beneficiaries",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [_vm._v(_vm._s(_vm.beneLen(item)))]
                                }
                              },
                              {
                                key: "item.status",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _c("p", {
                                      domProps: {
                                        innerHTML: _vm._s(
                                          _vm.status(item.status)
                                        )
                                      }
                                    })
                                  ]
                                }
                              }
                            ]),
                            model: {
                              value: _vm.selected,
                              callback: function($$v) {
                                _vm.selected = $$v
                              },
                              expression: "selected"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ])
                ])
              ])
            ])
          ]
        )
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
      _c("div", { staticClass: "card-title" }, [_vm._v("Account")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("div", { staticClass: "card-title" }, [_vm._v("Office")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", { staticClass: "card-title" }, [_vm._v("All Staffs Table")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/user/list.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/admin/user/list.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_vue_vue_type_template_id_da52ddb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=da52ddb2&scoped=true& */ "./resources/js/components/admin/user/list.vue?vue&type=template&id=da52ddb2&scoped=true&");
/* harmony import */ var _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/user/list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _list_vue_vue_type_style_index_0_id_da52ddb2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.vue?vue&type=style&index=0&id=da52ddb2&scoped=true&lang=css& */ "./resources/js/components/admin/user/list.vue?vue&type=style&index=0&id=da52ddb2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_vue_vue_type_template_id_da52ddb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_vue_vue_type_template_id_da52ddb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "da52ddb2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/user/list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/user/list.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/admin/user/list.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/user/list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/user/list.vue?vue&type=style&index=0&id=da52ddb2&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/admin/user/list.vue?vue&type=style&index=0&id=da52ddb2&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_da52ddb2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=style&index=0&id=da52ddb2&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/user/list.vue?vue&type=style&index=0&id=da52ddb2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_da52ddb2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_da52ddb2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_da52ddb2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_da52ddb2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/admin/user/list.vue?vue&type=template&id=da52ddb2&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/admin/user/list.vue?vue&type=template&id=da52ddb2&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_da52ddb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=template&id=da52ddb2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/user/list.vue?vue&type=template&id=da52ddb2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_da52ddb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_da52ddb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);