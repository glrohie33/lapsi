(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/register.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/register.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fileuploadmodal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fileuploadmodal.vue */ "./resources/js/components/fileuploadmodal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    FileUpload: _fileuploadmodal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ["user", "errors"],
  data: function data() {
    return {
      index_url: index_url,
      addFilesTo: "",
      ftitle: "",
      userFiles: [],
      showbox: false
    };
  },
  methods: {
    addBene: function addBene() {
      this.user.beneficiaries.push({
        name: "",
        phone: "",
        perc: "",
        rel: "",
        addr: "",
        identification: "",
        id_num: "",
        acc_num: "",
        acc_name: "",
        b_name: "",
        dob: "",
        files: []
      });
    },
    removeBene: function removeBene(index) {
      this.user.beneficiaries.splice(index, 1);
    },
    setChecked: function setChecked(event) {
      if (event.target.checked) {
        this.user.signature = "1";
      } else {
        this.user.signature = "0";
      }
    },
    saveData: function saveData() {
      this.$emit("saveData", this.user);
    },
    showBox: function showBox(index) {
      this.showbox = true;
      this.userFiles = this.user.beneficiaries[index].files;
      this.addFilesTo = index;
    },
    addFiles: function addFiles(files) {
      this.user.beneficiaries[this.addFilesTo].files = files;
      this.showbox = false;
    },
    removeFile: function removeFile(bene, index) {
      bene.files.splice(index, 1);
    },
    closeBox: function closeBox() {
      this.showbox = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/register.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/register.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.user-file {\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.card-title {\n  width: 100%;\n  text-align: center;\n}\n.card-title img {\n  margin-top: 1%;\n  margin-bottom: 1%;\n  width: 25%;\n  max-width: 120px;\n  -webkit-animation: mover 2s infinite alternate;\n  animation: mover 1s infinite alternate;\n}\n.v-dialog {\n  height: 90% !important;\n}\n.card .card-header {\n  padding: 10px;\n}\n.card-title p {\n  margin-bottom: 0px;\n}\n@-webkit-keyframes mover {\n0% {\n    transform: translateY(0);\n}\n100% {\n    transform: translateY(-5px);\n}\n}\n@keyframes mover {\n0% {\n    transform: translateY(0);\n}\n100% {\n    transform: translateY(-5px);\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/register.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/register.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/register.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/register.vue?vue&type=template&id=5933d499&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/register.vue?vue&type=template&id=5933d499& ***!
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
  return _c(
    "div",
    { staticClass: "col-12 col-md-8 card bg-authentication rounded-0 mb-0" },
    [
      _c("div", { staticClass: "row m-0" }, [
        _c("div", { staticClass: "col-lg-12 col-12 p-0" }, [
          _c("div", { staticClass: "card rounded-0 mb-0 px-2" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "card-content" }, [
              _c("div", { staticClass: "card-body pt-1" }, [
                _c(
                  "div",
                  { attrs: { id: "register" } },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-12 form-group" },
                        [
                          _c("label", { attrs: { for: "user-name" } }, [
                            _vm._v("Title")
                          ]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.user.title,
                                  expression: "user.title"
                                }
                              ],
                              staticClass: "form-control",
                              staticStyle: { width: "100px" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.user,
                                    "title",
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
                                    value: "HON",
                                    "data-icon": "fa fa-wordpress"
                                  }
                                },
                                [_vm._v("Hon")]
                              ),
                              _vm._v(" "),
                              _c(
                                "option",
                                {
                                  attrs: {
                                    value: "MR",
                                    "data-icon": "fa fa-male"
                                  }
                                },
                                [_vm._v("Mr")]
                              ),
                              _vm._v(" "),
                              _c(
                                "option",
                                {
                                  attrs: {
                                    value: "MRS",
                                    "data-icon": "fa fa-female"
                                  }
                                },
                                [_vm._v("Mrs")]
                              ),
                              _vm._v(" "),
                              _c(
                                "option",
                                {
                                  attrs: {
                                    value: "MISS",
                                    "data-icon": "fa fa-female"
                                  }
                                },
                                [_vm._v("Miss")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.errors.title, function(err, index) {
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
                          _c("label", [_vm._v("Firstname")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.surname,
                                expression: "user.surname"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "First Name *",
                              value: ""
                            },
                            domProps: { value: _vm.user.surname },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.user,
                                  "surname",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.errors.surname, function(err, index) {
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
                          _c("label", [_vm._v("Lastname")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.firstname,
                                expression: "user.firstname"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", placeholder: "Last Name *" },
                            domProps: { value: _vm.user.firstname },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.user,
                                  "firstname",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.errors.firstname, function(err, index) {
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
                          _c("label", [_vm._v("Middlename")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.middlename,
                                expression: "user.middlename"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "Middle Name *"
                            },
                            domProps: { value: _vm.user.middlename },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.user,
                                  "middlename",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.errors.middlename, function(err, index) {
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
                          _c("label", [_vm._v("Gender")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.user.sex,
                                  expression: "user.sex"
                                }
                              ],
                              staticClass: "form-control select2-icons",
                              staticStyle: { width: "100px" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.user,
                                    "sex",
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
                                    value: "M",
                                    "data-icon": "fa fa-male"
                                  }
                                },
                                [_vm._v("Male")]
                              ),
                              _vm._v(" "),
                              _c(
                                "option",
                                {
                                  attrs: {
                                    value: "F",
                                    "data-icon": "fa fa-female"
                                  }
                                },
                                [_vm._v("Female")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.errors.sex, function(err, index) {
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
                          _c("label", [_vm._v("Phone")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.phone,
                                expression: "user.phone"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", placeholder: "Phone *" },
                            domProps: { value: _vm.user.phone },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.user, "phone", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.errors.phone, function(err, index) {
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
                          _c("label", [_vm._v("State Of Origin")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.state,
                                expression: "user.state"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "State Of Origin *"
                            },
                            domProps: { value: _vm.user.state },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.user, "state", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.errors.state, function(err, index) {
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
                      _c("div", { staticClass: "col-md-12 form-group" }, [
                        _c("h4", [
                          _vm._v(
                            "Office Details (" + _vm._s(_vm.user.office) + ")"
                          )
                        ]),
                        _vm._v(" "),
                        _c("hr")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-6 form-group" },
                        [
                          _c("label", [_vm._v("Designation")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.designation,
                                expression: "user.designation"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "Designation *"
                            },
                            domProps: { value: _vm.user.designation },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.user,
                                  "designation",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.errors.designation, function(err, index) {
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
                      _c("div", { staticClass: "col-md-6 form-group" }, [
                        _c("label", [_vm._v("Grade")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.grade,
                              expression: "user.grade"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", placeholder: "Grade *" },
                          domProps: { value: _vm.user.grade },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.user, "grade", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-6 form-group" },
                        [
                          _c("label", [_vm._v("Date Of Birth")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.dateofbirth,
                                expression: "user.dateofbirth"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "date" },
                            domProps: { value: _vm.user.dateofbirth },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.user,
                                  "dateofbirth",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.errors.dateofbirth, function(err, index) {
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
                          _c("label", [_vm._v("Date Of First Appointment")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.dateof1stapp,
                                expression: "user.dateof1stapp"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "date" },
                            domProps: { value: _vm.user.dateof1stapp },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.user,
                                  "dateof1stapp",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.errors.dateof1stapp, function(err, index) {
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
                      _c("div", { staticClass: "col-md-6 form-group" }, [
                        _c("label", [_vm._v("Date Of Pre Appointment")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.dateofpreapp,
                              expression: "user.dateofpreapp"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "date" },
                          domProps: { value: _vm.user.dateofpreapp },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user,
                                "dateofpreapp",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6 form-group" }, [
                        _c("label", [_vm._v("Date Of Last Deployment")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.dateoflastdep,
                              expression: "user.dateoflastdep"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "date" },
                          domProps: { value: _vm.user.dateoflastdep },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user,
                                "dateoflastdep",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-6 form-group" },
                        [
                          _c("label", [_vm._v("Department")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.office,
                                expression: "user.office"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", placeholder: "Office *" },
                            domProps: { value: _vm.user.office },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.user,
                                  "office",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.errors.office, function(err, index) {
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
                    ]),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _vm._l(_vm.errors.beneLength, function(err, index) {
                      return _c(
                        "p",
                        { key: index, staticClass: "text-danger text-center" },
                        [_vm._v(_vm._s(err))]
                      )
                    }),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errors.perc))
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.user.beneficiaries, function(item, index) {
                      return _c(
                        "div",
                        { key: index, staticClass: "col-md-12" },
                        [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn-danger btn-sm",
                                staticStyle: {
                                  position: "absolute",
                                  right: "10px",
                                  "z-index": "999999"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.removeBene(index)
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "feather icon-user-minus"
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-12" }, [
                              _c("h5", [
                                _vm._v("Beneficiary " + _vm._s(index + 1))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group col-md-6" }, [
                              _c("label", [_vm._v("Name Of Beneficiaries")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.beneficiaries[index].name,
                                    expression: "user.beneficiaries[index].name"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  placeholder: "Name Of Beneficiaries *"
                                },
                                domProps: {
                                  value: _vm.user.beneficiaries[index].name
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user.beneficiaries[index],
                                      "name",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "text-danger text-center" },
                                [
                                  _vm._v(
                                    _vm._s(_vm.errors["bene" + index + "name"])
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group col-md-6" }, [
                              _c("label", [_vm._v("Telephone")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.beneficiaries[index].phone,
                                    expression:
                                      "user.beneficiaries[index].phone"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "number",
                                  placeholder: "Telephone number *"
                                },
                                domProps: {
                                  value: _vm.user.beneficiaries[index].phone
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user.beneficiaries[index],
                                      "phone",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "text-danger text-center" },
                                [
                                  _vm._v(
                                    _vm._s(_vm.errors["bene" + index + "phone"])
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group col-md-6" }, [
                              _c("label", [_vm._v("% Of Benefit")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.beneficiaries[index].perc,
                                    expression: "user.beneficiaries[index].perc"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "number",
                                  placeholder: "% of benefit *"
                                },
                                domProps: {
                                  value: _vm.user.beneficiaries[index].perc
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user.beneficiaries[index],
                                      "perc",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "text-danger text-center" },
                                [
                                  _vm._v(
                                    _vm._s(_vm.errors["bene" + index + "perc"])
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group col-md-6" }, [
                              _c("label", [
                                _vm._v("Relationship with Life Assured")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.beneficiaries[index].rel,
                                    expression: "user.beneficiaries[index].rel"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  placeholder:
                                    "Relationship with life assured *"
                                },
                                domProps: {
                                  value: _vm.user.beneficiaries[index].rel
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user.beneficiaries[index],
                                      "rel",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "text-danger text-center" },
                                [
                                  _vm._v(
                                    _vm._s(_vm.errors["bene" + index + "rel"])
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group col-md-4" }, [
                              _c("label", [
                                _vm._v("Benificiary Identification")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value:
                                      _vm.user.beneficiaries[index]
                                        .identification,
                                    expression:
                                      "user.beneficiaries[index].identification"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  placeholder: "Beneficiary Identification *"
                                },
                                domProps: {
                                  value:
                                    _vm.user.beneficiaries[index].identification
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user.beneficiaries[index],
                                      "identification",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "text-danger text-center" },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors[
                                        "bene" + index + "identification"
                                      ]
                                    )
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group col-md-4" }, [
                              _c("label", [_vm._v("Identification Number")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.beneficiaries[index].id_num,
                                    expression:
                                      "user.beneficiaries[index].id_num"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  placeholder:
                                    "Beneficiary Identification Number *"
                                },
                                domProps: {
                                  value: _vm.user.beneficiaries[index].id_num
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user.beneficiaries[index],
                                      "id_num",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "text-danger text-center" },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors["bene" + index + "id_num"]
                                    )
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group col-md-4" }, [
                              _c("label", [
                                _vm._v("Benificiary Date Of Birth")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.beneficiaries[index].dob,
                                    expression: "user.beneficiaries[index].dob"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "date",
                                  placeholder: "Date Of Birth *"
                                },
                                domProps: {
                                  value: _vm.user.beneficiaries[index].dob
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user.beneficiaries[index],
                                      "dob",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "text-danger text-center" },
                                [
                                  _vm._v(
                                    _vm._s(_vm.errors["bene" + index + "dob"])
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group col-md-4" }, [
                              _c("label", [_vm._v("Account Number")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value:
                                      _vm.user.beneficiaries[index].acc_number,
                                    expression:
                                      "user.beneficiaries[index].acc_number"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  placeholder: "Beneficiary Account Number *"
                                },
                                domProps: {
                                  value:
                                    _vm.user.beneficiaries[index].acc_number
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user.beneficiaries[index],
                                      "acc_number",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "text-danger text-center" },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors["bene" + index + "acc_name"]
                                    )
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group col-md-4" }, [
                              _c("label", [_vm._v("Account Name")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value:
                                      _vm.user.beneficiaries[index].acc_name,
                                    expression:
                                      "user.beneficiaries[index].acc_name"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  placeholder: "Beneficiary Account Name *"
                                },
                                domProps: {
                                  value: _vm.user.beneficiaries[index].acc_name
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user.beneficiaries[index],
                                      "acc_name",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "text-danger text-center" },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors["bene" + index + "acc_name"]
                                    )
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group col-md-4" }, [
                              _c("label", [_vm._v("Bank Name")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.beneficiaries[index].b_name,
                                    expression:
                                      "user.beneficiaries[index].b_name"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  placeholder: "Beneficiary Bank Name *"
                                },
                                domProps: {
                                  value: _vm.user.beneficiaries[index].b_name
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user.beneficiaries[index],
                                      "b_name",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "text-danger text-center" },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors["bene" + index + "b_name"]
                                    )
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group col-md-12" }, [
                              _c("label", [_vm._v("Address")]),
                              _vm._v(" "),
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.beneficiaries[index].addr,
                                    expression: "user.beneficiaries[index].addr"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { placeholder: "Address *" },
                                domProps: {
                                  value: _vm.user.beneficiaries[index].addr
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user.beneficiaries[index],
                                      "addr",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "text-danger text-center" },
                                [
                                  _vm._v(
                                    _vm._s(_vm.errors["bene" + index + "addr"])
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group col-md-12" }, [
                              _c("label", [_vm._v("Other Details")]),
                              _vm._v(" "),
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.beneficiaries[index].addr,
                                    expression: "user.beneficiaries[index].addr"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  placeholder: "Other details for beneficiary *"
                                },
                                domProps: {
                                  value: _vm.user.beneficiaries[index].addr
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user.beneficiaries[index],
                                      "addr",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "text-danger text-center" },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors["bene" + index + "others"]
                                    )
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-12" }, [
                              _c(
                                "div",
                                { staticClass: "row" },
                                _vm._l(item.files, function(x, ind) {
                                  return _c(
                                    "div",
                                    { key: ind, staticClass: "col-md-2" },
                                    [
                                      x.file_type == "image"
                                        ? _c("img", {
                                            staticClass:
                                              "img-thumbnail user-file",
                                            attrs: { src: x.url }
                                          })
                                        : _c("img", {
                                            staticClass:
                                              "img-thumbnail user-file",
                                            attrs: {
                                              src:
                                                _vm.index_url +
                                                "/public/images/imagefile.png"
                                            }
                                          }),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn-danger btn-sm",
                                          staticStyle: {
                                            position: "absolute",
                                            right: "10px",
                                            "z-index": "999999"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.removeFile(item, ind)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "feather icon-minus"
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                }),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-12" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-danger btn-sm",
                                  on: {
                                    click: function($event) {
                                      return _vm.showBox(index)
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "feather" }, [
                                    _vm._v("add files")
                                  ])
                                ]
                              )
                            ])
                          ])
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-info",
                          on: {
                            click: function($event) {
                              return _vm.addBene()
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "feather icon-user-plus" }),
                          _vm._v("Add Beneficiary\n                ")
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "form-group col-md-12" }, [
                          _c("label", [
                            _c("input", {
                              attrs: { type: "checkbox", value: "true" },
                              on: {
                                change: function($event) {
                                  return _vm.setChecked($event)
                                }
                              }
                            }),
                            _vm._v(
                              " I hereby nominate the following person(s) to recieve the folowing share or proportion of LASG group of life assurance benefit payable upon my death.\n                    "
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col-md-12",
                          staticStyle: { "text-align": "center" }
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary btn-inline",
                              attrs: { type: "submit" },
                              on: {
                                click: function($event) {
                                  return _vm.saveData()
                                }
                              }
                            },
                            [_vm._v("Submit")]
                          )
                        ]
                      )
                    ])
                  ],
                  2
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { id: "selectFile" },
          model: {
            value: _vm.showbox,
            callback: function($$v) {
              _vm.showbox = $$v
            },
            expression: "showbox"
          }
        },
        [
          _c("FileUpload", {
            attrs: {
              user: _vm.user,
              title: _vm.ftitle,
              inFiles: _vm.userFiles
            },
            on: { save: _vm.addFiles, cancel: _vm.closeBox }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header pb-1" }, [
      _c("div", { staticClass: "card-title" }, [
        _c("img", { attrs: { src: "public/images/logo.png" } }),
        _vm._v(" "),
        _c("h4", [_vm._v("Lagos State Ministry Of Finance")]),
        _vm._v(" "),
        _c("h5", [_vm._v("Welcome to Lagos State Service insurance Portal")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c("h4", [_vm._v("Life Assurance Death Beneficiaries")]),
      _vm._v(" "),
      _c("hr")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/register.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/pages/register.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_vue_vue_type_template_id_5933d499___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=5933d499& */ "./resources/js/components/pages/register.vue?vue&type=template&id=5933d499&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/pages/register.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_5933d499___WEBPACK_IMPORTED_MODULE_0__["render"],
  _register_vue_vue_type_template_id_5933d499___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/register.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/pages/register.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/register.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/pages/register.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/register.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/pages/register.vue?vue&type=template&id=5933d499&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/pages/register.vue?vue&type=template&id=5933d499& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_5933d499___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=template&id=5933d499& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/register.vue?vue&type=template&id=5933d499&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_5933d499___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_5933d499___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);