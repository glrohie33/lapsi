(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/portal/editBeneficiaries.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/portal/editBeneficiaries.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fileuploadmodal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fileuploadmodal.vue */ "./resources/js/components/fileuploadmodal.vue");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FileUpload: _fileuploadmodal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ["user"],
  data: function data() {
    return {
      index_url: index_url,
      errors: [],
      showbox: false,
      addFilesTo: [],
      ftitle: "",
      userFiles: []
    };
  },
  created: function created() {
    this.user = this.$store.state.user;

    if (_typeof(this.user.beneficiaries) != "object") {
      this.user.beneficiaries = JSON.parse(this.user.beneficiaries);
    }
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
    saveData: function saveData() {
      var _this = this;

      var token = window.localStorage.getItem("lapsiToken_");
      var data = setFormData(this.user);
      data.append("_method", "PUT");
      axios.post("".concat(index_url, "/api/users/").concat(this.user.id), data, {
        headers: {
          Authorization: "Bearer ".concat(token)
        }
      }).then(function (resp) {
        var data = resp.data;

        if (data.status) {
          _this.$store.commit("storeUser", data.user);

          Swal.fire({
            title: "Success",
            text: "Beneficiaries Successfully Edited",
            icon: "success"
          });
        } else {
          _this.errors = data.errors;
        }
      });
    },
    showBox: function showBox(index) {
      this.showbox = true;
      this.userFiles = this.user.beneficiaries[index].files;
      this.addFilesTo = index;
    },
    addFiles: function addFiles(files) {
      this.user.beneficiaries[this.addFilesTo].files = files;
      this.addFilesTo = "";
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/portal/editBeneficiaries.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/portal/editBeneficiaries.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#selectFile {\n  z-index: 99999999;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/portal/editBeneficiaries.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/portal/editBeneficiaries.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./editBeneficiaries.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/portal/editBeneficiaries.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/portal/editBeneficiaries.vue?vue&type=template&id=5d2c447e&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/portal/editBeneficiaries.vue?vue&type=template&id=5d2c447e& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "app-content content" },
    [
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
                  _c("div", { staticClass: "card-content" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "form-body" }, [
                        _c(
                          "div",
                          { staticClass: "row" },
                          [
                            _vm._m(1),
                            _vm._v(" "),
                            _vm._l(_vm.errors.beneLength, function(err, index) {
                              return _c(
                                "p",
                                {
                                  key: index,
                                  staticClass: "text-danger text-center"
                                },
                                [_vm._v(_vm._s(err))]
                              )
                            }),
                            _vm._v(" "),
                            _vm._l(_vm.user.beneficiaries, function(
                              item,
                              index
                            ) {
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
                                        _vm._v(
                                          "Beneficiary " + _vm._s(index + 1)
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group col-md-6" },
                                      [
                                        _c("label", [
                                          _vm._v("Name Of Beneficiaries")
                                        ]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.user.beneficiaries[index]
                                                  .name,
                                              expression:
                                                "user.beneficiaries[index].name"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            type: "text",
                                            placeholder:
                                              "Name Of Beneficiaries *"
                                          },
                                          domProps: {
                                            value:
                                              _vm.user.beneficiaries[index].name
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
                                          {
                                            staticClass:
                                              "text-danger text-center"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors[
                                                  "bene" + index + "name"
                                                ]
                                              )
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group col-md-6" },
                                      [
                                        _c("label", [_vm._v("Telephone")]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.user.beneficiaries[index]
                                                  .phone,
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
                                            value:
                                              _vm.user.beneficiaries[index]
                                                .phone
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
                                          {
                                            staticClass:
                                              "text-danger text-center"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors[
                                                  "bene" + index + "phone"
                                                ]
                                              )
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group col-md-6" },
                                      [
                                        _c("label", [_vm._v("% Of Benefit")]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.user.beneficiaries[index]
                                                  .perc,
                                              expression:
                                                "user.beneficiaries[index].perc"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            type: "number",
                                            placeholder: "% of benefit *"
                                          },
                                          domProps: {
                                            value:
                                              _vm.user.beneficiaries[index].perc
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
                                          {
                                            staticClass:
                                              "text-danger text-center"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors[
                                                  "bene" + index + "perc"
                                                ]
                                              )
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group col-md-6" },
                                      [
                                        _c("label", [
                                          _vm._v(
                                            "Relationship with Life Assured"
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.user.beneficiaries[index]
                                                  .rel,
                                              expression:
                                                "user.beneficiaries[index].rel"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            type: "text",
                                            placeholder:
                                              "Relationship with life assured *"
                                          },
                                          domProps: {
                                            value:
                                              _vm.user.beneficiaries[index].rel
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
                                          {
                                            staticClass:
                                              "text-danger text-center"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors[
                                                  "bene" + index + "rel"
                                                ]
                                              )
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group col-md-4" },
                                      [
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
                                            placeholder:
                                              "Beneficiary Identification *"
                                          },
                                          domProps: {
                                            value:
                                              _vm.user.beneficiaries[index]
                                                .identification
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
                                          {
                                            staticClass:
                                              "text-danger text-center"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors[
                                                  "bene" +
                                                    index +
                                                    "identification"
                                                ]
                                              )
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group col-md-4" },
                                      [
                                        _c("label", [
                                          _vm._v("Identification Number")
                                        ]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.user.beneficiaries[index]
                                                  .id_num,
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
                                            value:
                                              _vm.user.beneficiaries[index]
                                                .id_num
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
                                          {
                                            staticClass:
                                              "text-danger text-center"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors[
                                                  "bene" + index + "id_num"
                                                ]
                                              )
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group col-md-4" },
                                      [
                                        _c("label", [
                                          _vm._v("Benificiary Date Of Birth")
                                        ]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.user.beneficiaries[index]
                                                  .dob,
                                              expression:
                                                "user.beneficiaries[index].dob"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            type: "date",
                                            placeholder: "Date Of Birth *"
                                          },
                                          domProps: {
                                            value:
                                              _vm.user.beneficiaries[index].dob
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
                                          {
                                            staticClass:
                                              "text-danger text-center"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors[
                                                  "bene" + index + "dob"
                                                ]
                                              )
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group col-md-4" },
                                      [
                                        _c("label", [_vm._v("Account Number")]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.user.beneficiaries[index]
                                                  .acc_number,
                                              expression:
                                                "user.beneficiaries[index].acc_number"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            type: "text",
                                            placeholder:
                                              "Beneficiary Account Number *"
                                          },
                                          domProps: {
                                            value:
                                              _vm.user.beneficiaries[index]
                                                .acc_number
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
                                          {
                                            staticClass:
                                              "text-danger text-center"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors[
                                                  "bene" + index + "acc_name"
                                                ]
                                              )
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group col-md-4" },
                                      [
                                        _c("label", [_vm._v("Account Name")]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.user.beneficiaries[index]
                                                  .acc_name,
                                              expression:
                                                "user.beneficiaries[index].acc_name"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            type: "text",
                                            placeholder:
                                              "Beneficiary Account Name *"
                                          },
                                          domProps: {
                                            value:
                                              _vm.user.beneficiaries[index]
                                                .acc_name
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
                                          {
                                            staticClass:
                                              "text-danger text-center"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors[
                                                  "bene" + index + "acc_name"
                                                ]
                                              )
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group col-md-4" },
                                      [
                                        _c("label", [_vm._v("Bank Name")]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.user.beneficiaries[index]
                                                  .b_name,
                                              expression:
                                                "user.beneficiaries[index].b_name"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            type: "text",
                                            placeholder:
                                              "Beneficiary Bank Name *"
                                          },
                                          domProps: {
                                            value:
                                              _vm.user.beneficiaries[index]
                                                .b_name
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
                                          {
                                            staticClass:
                                              "text-danger text-center"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors[
                                                  "bene" + index + "b_name"
                                                ]
                                              )
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group col-md-12" },
                                      [
                                        _c("label", [_vm._v("Address")]),
                                        _vm._v(" "),
                                        _c("textarea", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.user.beneficiaries[index]
                                                  .addr,
                                              expression:
                                                "user.beneficiaries[index].addr"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          attrs: { placeholder: "Address *" },
                                          domProps: {
                                            value:
                                              _vm.user.beneficiaries[index].addr
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
                                          {
                                            staticClass:
                                              "text-danger text-center"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors[
                                                  "bene" + index + "addr"
                                                ]
                                              )
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group col-md-12" },
                                      [
                                        _c("label", [_vm._v("Other Details")]),
                                        _vm._v(" "),
                                        _c("textarea", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.user.beneficiaries[index]
                                                  .addr,
                                              expression:
                                                "user.beneficiaries[index].addr"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            placeholder:
                                              "Other details for beneficiary *"
                                          },
                                          domProps: {
                                            value:
                                              _vm.user.beneficiaries[index].addr
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
                                          {
                                            staticClass:
                                              "text-danger text-center"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors[
                                                  "bene" + index + "others"
                                                ]
                                              )
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-md-12" }, [
                                      _c(
                                        "div",
                                        { staticClass: "row" },
                                        _vm._l(item.files, function(x, ind) {
                                          return _c(
                                            "div",
                                            {
                                              key: ind,
                                              staticClass: "col-md-2"
                                            },
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
                                                  staticClass:
                                                    "btn-danger btn-sm",
                                                  staticStyle: {
                                                    position: "absolute",
                                                    right: "10px",
                                                    "z-index": "999999"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.removeFile(
                                                        item,
                                                        ind
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass:
                                                      "feather icon-minus"
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
                                  _c("i", {
                                    staticClass: "feather icon-user-plus"
                                  }),
                                  _vm._v(
                                    "Add Beneficiary\n                        "
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-12" }, [
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
                                    [_vm._v("Add Beneficiaries")]
                                  )
                                ]
                              )
                            ])
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-danger text-center" }, [
                        _vm._v(_vm._s(_vm.errors.perc))
                      ])
                    ])
                  ])
                ])
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
    return _c("div", { staticClass: "content-header row" }, [
      _c("div", { staticClass: "content-header-left col-md-9 col-12 mb-2" }, [
        _c("div", { staticClass: "row breadcrumbs-top" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("h2", { staticClass: "content-header-title float-left mb-0" }, [
              _vm._v("Edit Beneficiaries")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "breadcrumb-wrapper col-12" }, [
              _c("ol", { staticClass: "breadcrumb" }, [
                _c("li", { staticClass: "breadcrumb-item" }, [
                  _c("a", { attrs: { href: "index.html" } }, [_vm._v("Portal")])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "breadcrumb-item active" }, [
                  _vm._v("Edit Beneficiaries")
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
    return _c("div", { staticClass: "col-md-12" }, [
      _c("h4", [_vm._v("Life Assurance Death Beneficiaries")]),
      _vm._v(" "),
      _c("hr")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/portal/editBeneficiaries.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/portal/editBeneficiaries.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editBeneficiaries_vue_vue_type_template_id_5d2c447e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editBeneficiaries.vue?vue&type=template&id=5d2c447e& */ "./resources/js/components/portal/editBeneficiaries.vue?vue&type=template&id=5d2c447e&");
/* harmony import */ var _editBeneficiaries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editBeneficiaries.vue?vue&type=script&lang=js& */ "./resources/js/components/portal/editBeneficiaries.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _editBeneficiaries_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editBeneficiaries.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/portal/editBeneficiaries.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _editBeneficiaries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editBeneficiaries_vue_vue_type_template_id_5d2c447e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _editBeneficiaries_vue_vue_type_template_id_5d2c447e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/portal/editBeneficiaries.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/portal/editBeneficiaries.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/portal/editBeneficiaries.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editBeneficiaries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./editBeneficiaries.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/portal/editBeneficiaries.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editBeneficiaries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/portal/editBeneficiaries.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/portal/editBeneficiaries.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_editBeneficiaries_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./editBeneficiaries.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/portal/editBeneficiaries.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_editBeneficiaries_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_editBeneficiaries_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_editBeneficiaries_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_editBeneficiaries_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/portal/editBeneficiaries.vue?vue&type=template&id=5d2c447e&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/portal/editBeneficiaries.vue?vue&type=template&id=5d2c447e& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editBeneficiaries_vue_vue_type_template_id_5d2c447e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./editBeneficiaries.vue?vue&type=template&id=5d2c447e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/portal/editBeneficiaries.vue?vue&type=template&id=5d2c447e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editBeneficiaries_vue_vue_type_template_id_5d2c447e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editBeneficiaries_vue_vue_type_template_id_5d2c447e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);