(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/login.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/login.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue */ "./resources/js/components/pages/register.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    regForm: _register_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      user: {},
      oracleId: "",
      intro: true,
      form: false,
      alert: false,
      response: "",
      status: "",
      signatureFirstname: "",
      signatureLastname: "",
      errors: [],
      oracle: true,
      password: false,
      otp: "",
      ftitle: ""
    };
  },
  methods: {
    verifyId: function verifyId(event) {
      var _this = this;

      event.preventDefault();
      axios.post("".concat(index_url, "/api/login"), {
        oracle_id: this.oracleId
      }).then(function (resp) {
        if (resp.data.status) {
          var data = resp.data;
          _this.oracle = false;
          _this.password = true;
        } else {
          _this.errors = resp.data.errors;
        }
      });
    },
    setDate: function setDate(data) {
      return new Date(data).toISOString().substr(0, 10);
    },
    addBene: function addBene() {
      this.user.beneficiaries.push({
        name: "",
        phone: "",
        perc: "",
        rel: "",
        addr: ""
      });
    },
    removeBene: function removeBene(index) {
      this.user.beneficiaries.splice(index, 1);
    },
    saveData: function saveData(user) {
      var _this2 = this;

      this.user = user;
      var formdata = setFormData(this.user);
      axios.post("".concat(index_url, "/api/register"), formdata).then(function (resp) {
        var data = resp.data;

        if (data.status) {
          Swal.fire({
            title: "Done",
            text: "You have successfully updated your data you can now procced to login",
            icon: "success"
          });

          _this2.$store.commit("setUser", _this2.user);

          window.localStorage.setItem("lapsiToken_", data.token);

          _this2.$router.push({
            path: "/portal"
          });
        } else {
          _this2.errors = data.errors;
        }
      });
    },
    login: function login(event) {
      var _this3 = this;

      event.preventDefault();
      axios.post("".concat(index_url, "/api/otp"), {
        oracle_id: this.oracleId,
        otp: this.otp
      }).then(function (resp) {
        var data = resp.data;

        if (data.status) {
          if (resp.data.user_status == "incomplete") {
            _this3.user = data.user;
            _this3.user.beneficiaries = JSON.parse(data.user.beneficiaries);
            _this3.user.dateofbirth = _this3.setDate(data.user.dateofbirth);
            _this3.user.dateof1stapp = _this3.setDate(data.user.dateof1stapp);
            _this3.user.dateofpreapp = _this3.setDate(data.user.dateofpreapp);
            _this3.user.dateoflastdep = _this3.setDate(data.user.dateoflastdep);
            _this3.user.title = data.user.title.replace(".", "");
            _this3.user.signature = "0";
            _this3.form = true;
            _this3.intro = false;
          } else if (resp.data.user_status == "complete") {
            resp.data.user.beneficiaries = JSON.parse(resp.data.user.beneficiaries);

            _this3.$store.commit("setUser", resp.data.user);

            window.localStorage.setItem("lapsiToken_", data.token);
            Swal.fire({
              title: "Success",
              text: "Login Successful",
              icon: "success"
            });

            _this3.$router.push({
              path: "/portal"
            });
          }
        } else {
          _this3.errors = data.errors;
        }
      });
    }
  }
});

/***/ }),

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
//
//
//
//
//
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
        files: [],
        other_details: ""
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/login.vue?vue&type=style&index=0&id=609c2563&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/login.vue?vue&type=style&index=0&id=609c2563&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#register fieldset[data-v-609c2563] {\n  margin-bottom: 2px;\n}\n.card-title[data-v-609c2563] {\n  width: 100%;\n  text-align: center;\n}\n.flexbox-container[data-v-609c2563],\n.content-header[data-v-609c2563] {\n  margin: 10px;\n}\n.body.blank-page .content-wrapper .flexbox-container[data-v-609c2563] {\n  min-height: 100vh;\n  height: unset;\n}\n.card-title img[data-v-609c2563] {\n  margin-top: 1%;\n  margin-bottom: 1%;\n  width: 25%;\n  max-width: 120px;\n  -webkit-animation: mover-data-v-609c2563 2s infinite alternate;\n  animation: mover-data-v-609c2563 1s infinite alternate;\n}\n.cover[data-v-609c2563] {\n  background: -webkit-linear-gradient(left, #3931af, #00c6ff);\n  padding: 10px;\n  border-radius: 3px;\n  box-shadow: 0px 0px 13px -1px #000;\n}\n.bg-authentication[data-v-609c2563] {\n  background: unset;\n}\n.card .card-header[data-v-609c2563] {\n  padding: 10px;\n}\n.card-title p[data-v-609c2563] {\n  margin-bottom: 0px;\n}\n@-webkit-keyframes mover-data-v-609c2563 {\n0% {\n    transform: translateY(0);\n}\n100% {\n    transform: translateY(-5px);\n}\n}\n@keyframes mover-data-v-609c2563 {\n0% {\n    transform: translateY(0);\n}\n100% {\n    transform: translateY(-5px);\n}\n}\n", ""]);

// exports


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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/login.vue?vue&type=style&index=0&id=609c2563&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/login.vue?vue&type=style&index=0&id=609c2563&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=style&index=0&id=609c2563&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/login.vue?vue&type=style&index=0&id=609c2563&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/login.vue?vue&type=template&id=609c2563&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/login.vue?vue&type=template&id=609c2563&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
      staticClass:
        "body vertical-layout vertical-menu-modern 1-column navbar-floating footer-static bg-full-screen-image blank-page blank-page"
    },
    [
      _c("div", { staticClass: "app-content contianer" }, [
        _c("div", { staticClass: "content-wrapper" }, [
          _c("div", { staticClass: "content-header row" }),
          _vm._v(" "),
          _c("div", { staticClass: "content-body" }, [
            _c(
              "section",
              { staticClass: "row flexbox-container" },
              [
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.intro,
                        expression: "intro"
                      }
                    ],
                    staticClass: "col-lg-8 col-11 cover justify-content-center"
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "card bg-authentication rounded-0 mb-0" },
                      [
                        _c("div", { staticClass: "row m-0" }, [
                          _vm._m(0),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-lg-6 col-12 p-0 login-box" },
                            [
                              _c(
                                "div",
                                { staticClass: "card rounded-1 mb-0 px-2" },
                                [
                                  _vm._m(1),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: _vm.oracle,
                                          expression: "oracle"
                                        }
                                      ],
                                      staticClass: "card-content"
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "card-body pt-1" },
                                        [
                                          _c(
                                            "form",
                                            {
                                              on: {
                                                submit: function($event) {
                                                  return _vm.verifyId($event)
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "fieldset",
                                                {
                                                  staticClass:
                                                    "form-label-group form-group position-relative has-icon-left"
                                                },
                                                [
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: _vm.oracleId,
                                                        expression: "oracleId"
                                                      }
                                                    ],
                                                    staticClass: "form-control",
                                                    attrs: {
                                                      type: "text",
                                                      id: "user-name",
                                                      placeholder: "Oracle Id",
                                                      required: ""
                                                    },
                                                    domProps: {
                                                      value: _vm.oracleId
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.oracleId =
                                                          $event.target.value
                                                      }
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  "oracle_id" in _vm.errors
                                                    ? _c(
                                                        "div",
                                                        _vm._l(
                                                          _vm.errors.oracle_id,
                                                          function(x, index) {
                                                            return _c(
                                                              "i",
                                                              {
                                                                key: index,
                                                                staticClass:
                                                                  "text-danger"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(x)
                                                                )
                                                              ]
                                                            )
                                                          }
                                                        ),
                                                        0
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _c(
                                                    "label",
                                                    {
                                                      attrs: {
                                                        for: "user-name"
                                                      }
                                                    },
                                                    [_vm._v("Oracle Id")]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "col-md-12" },
                                                [
                                                  _c(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-primary btn-inline",
                                                      attrs: { type: "submit" },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.verifyId(
                                                            $event
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [_vm._v("Login")]
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
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: _vm.password,
                                          expression: "password"
                                        }
                                      ],
                                      staticClass: "card-content"
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "card-body pt-1" },
                                        [
                                          _c(
                                            "form",
                                            {
                                              on: {
                                                submit: function($event) {
                                                  return _vm.login($event)
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "fieldset",
                                                {
                                                  staticClass:
                                                    "form-label-group form-group position-relative has-icon-left"
                                                },
                                                [
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: _vm.otp,
                                                        expression: "otp"
                                                      }
                                                    ],
                                                    staticClass: "form-control",
                                                    attrs: {
                                                      type: "text",
                                                      id: "user-name",
                                                      placeholder: "OTP",
                                                      required: ""
                                                    },
                                                    domProps: {
                                                      value: _vm.otp
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.otp =
                                                          $event.target.value
                                                      }
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _vm._l(
                                                    _vm.errors.otp,
                                                    function(x, index) {
                                                      return _c(
                                                        "i",
                                                        {
                                                          key: index,
                                                          staticClass:
                                                            "text-danger"
                                                        },
                                                        [_vm._v(_vm._s(x))]
                                                      )
                                                    }
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "label",
                                                    {
                                                      attrs: {
                                                        for: "user-name"
                                                      }
                                                    },
                                                    [_vm._v("OTP")]
                                                  )
                                                ],
                                                2
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-md-12" },
                                            [
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-info btn-inline",
                                                  on: {
                                                    click: function($event) {
                                                      ;[
                                                        (_vm.oracle = true),
                                                        (_vm.password = false)
                                                      ]
                                                    }
                                                  }
                                                },
                                                [_vm._v("back")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-primary btn-inline",
                                                  attrs: { type: "submit" },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.login($event)
                                                    }
                                                  }
                                                },
                                                [_vm._v("Login")]
                                              )
                                            ]
                                          )
                                        ]
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
                ),
                _vm._v(" "),
                _c("regForm", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.form,
                      expression: "form"
                    }
                  ],
                  attrs: { user: _vm.user, errors: _vm.errors },
                  on: { saveData: _vm.saveData }
                })
              ],
              1
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "col-lg-6 d-lg-block d-none text-center align-self-center px-1 py-0"
      },
      [
        _c("img", {
          attrs: {
            src: "public/app-assets/images/pages/login.png",
            alt: "branding logo"
          }
        })
      ]
    )
  },
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
        _c("h5", [
          _vm._v("Welcome to Lagos State Public Service Insurance Portal")
        ])
      ])
    ])
  }
]
render._withStripped = true



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
                              attrs: { readonly: "" },
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
                          _c("label", [_vm._v("First Name")]),
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
                              readonly: "",
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
                          _c("label", [_vm._v("Last Name")]),
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
                            attrs: {
                              readonly: "",
                              type: "text",
                              placeholder: "Last Name *"
                            },
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
                              readonly: "",
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
                              attrs: { readonly: "" },
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
                            attrs: {
                              readonly: "",
                              type: "text",
                              placeholder: "Phone *"
                            },
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
                              readonly: "",
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
                              readonly: "",
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
                          attrs: {
                            readonly: "",
                            type: "text",
                            placeholder: "Grade *"
                          },
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
                            attrs: { readonly: "", type: "date" },
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
                            attrs: { readonly: "", type: "date" },
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
                          attrs: { readonly: "", type: "date" },
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
                          attrs: { readonly: "", type: "date" },
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
                            attrs: {
                              type: "text",
                              placeholder: "Office *",
                              readonly: ""
                            },
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
                              _c("label", [_vm._v("Name Of Beneficiary")]),
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
                                  placeholder: "Name Of Beneficiary *"
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
                                _vm._v("Relationship with Beneficiary")
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
                                  placeholder: "Relationship with Beneficiary *"
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
                              _c(
                                "select",
                                {
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
                                    placeholder: "Beneficiary Identification *"
                                  },
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
                                        _vm.user.beneficiaries[index],
                                        "identification",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("option", { attrs: { value: "" } }, [
                                    _vm._v(
                                      "Select Beneficiary Mode Of Identification"
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "option",
                                    { attrs: { value: "national ID" } },
                                    [_vm._v("National Identity Card")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "option",
                                    {
                                      attrs: { value: "international passport" }
                                    },
                                    [_vm._v("International Passport")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "option",
                                    { attrs: { value: "driver's licence" } },
                                    [_vm._v("Driver's Licence")]
                                  )
                                ]
                              ),
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
                                    value:
                                      _vm.user.beneficiaries[index]
                                        .other_details,
                                    expression:
                                      "user.beneficiaries[index].other_details"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  placeholder: "Other details for beneficiary *"
                                },
                                domProps: {
                                  value:
                                    _vm.user.beneficiaries[index].other_details
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user.beneficiaries[index],
                                      "other_details",
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
                                      _c("i", [_vm._v(_vm._s(x.filename))]),
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
                                  staticClass: "btn-danger btn-md",
                                  on: {
                                    click: function($event) {
                                      return _vm.showBox(index)
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "feather" }, [
                                    _vm._v("Add Files")
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
        _c("h5", [_vm._v("Welcome to Lagos State Service Insurance Portal")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c("h4", [_vm._v("Life Assurance Beneficiaries")]),
      _vm._v(" "),
      _c("hr")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/login.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/pages/login.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_609c2563_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=609c2563&scoped=true& */ "./resources/js/components/pages/login.vue?vue&type=template&id=609c2563&scoped=true&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _login_vue_vue_type_style_index_0_id_609c2563_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.vue?vue&type=style&index=0&id=609c2563&scoped=true&lang=css& */ "./resources/js/components/pages/login.vue?vue&type=style&index=0&id=609c2563&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_609c2563_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_609c2563_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "609c2563",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/login.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/pages/login.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/login.vue?vue&type=style&index=0&id=609c2563&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/pages/login.vue?vue&type=style&index=0&id=609c2563&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_609c2563_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=style&index=0&id=609c2563&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/login.vue?vue&type=style&index=0&id=609c2563&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_609c2563_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_609c2563_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_609c2563_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_609c2563_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/pages/login.vue?vue&type=template&id=609c2563&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/pages/login.vue?vue&type=template&id=609c2563&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_609c2563_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=609c2563&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/login.vue?vue&type=template&id=609c2563&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_609c2563_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_609c2563_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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