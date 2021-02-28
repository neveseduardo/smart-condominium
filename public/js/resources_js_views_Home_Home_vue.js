(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Home_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home/Home.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home/Home.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      cards: [{
        title: 'Basic',
        pricing: 'R$ 29',
        color: 'success'
      }, {
        title: 'Standard',
        pricing: 'R$ 59',
        color: 'danger'
      }, {
        title: 'Pro',
        pricing: 'R$ 99',
        color: 'info'
      }],
      services: [{
        title: 'Tipo de serviço 1',
        icon: 'fa fa-user'
      }, {
        title: 'Tipo de serviço 2',
        icon: 'fa fa-envelope'
      }, {
        title: 'Tipo de serviço 3',
        icon: 'fa fa-chart-line'
      }, {
        title: 'Tipo de serviço 4',
        icon: 'fa fa-city'
      }, {
        title: 'Tipo de serviço 5',
        icon: 'fa fa-clock'
      }, {
        title: 'Tipo de serviço 6',
        icon: 'fa fa-cogs'
      }, {
        title: 'Tipo de serviço 7',
        icon: 'fa fa-file-invoice-dollar'
      }, {
        title: 'Tipo de serviço 8',
        icon: 'fa fa-hands'
      }],
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      formRules: {
        name: [{
          required: true,
          trigger: 'blur',
          validator: function validator(rule, value, callback) {
            var re = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;

            if (value === '') {
              callback(new Error('Digite um nome válido.'));
            } else if (!re.test(value)) {
              callback(new Error('Formato de nome inválido.'));
            } else {
              callback();
            }
          }
        }],
        email: [{
          required: true,
          trigger: 'blur',
          validator: function validator(rule, value, callback) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (value === '') {
              callback(new Error('Digite um email.'));
            } else if (!re.test(value)) {
              callback(new Error('Digite um e-mail válido.'));
            } else {
              callback();
            }
          }
        }],
        subject: [{
          required: true,
          trigger: 'blur',
          validator: function validator(rule, value, callback) {
            var re = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;

            if (value === '') {
              return callback(new Error('Digite um assunto.'));
            }

            return callback();
          }
        }],
        message: [{
          required: true,
          trigger: 'blur',
          validator: function validator(rule, value, callback) {
            var re = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;

            if (value === '') {
              return callback(new Error('Digite uma mensagem.'));
            }

            return callback();
          }
        }]
      }
    };
  },
  methods: {
    submitForm: function submitForm() {
      var _this = this;

      this.$refs.loginForm.validate( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(valid) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!valid) {
                    _context.next = 6;
                    break;
                  }

                  return _context.abrupt("return", console.log('Deu'));

                case 6:
                  console.log('error submit!!');
                  return _context.abrupt("return", false);

                case 8:
                  return _context.abrupt("return", console.log('não deu'));

                case 9:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }
});

/***/ }),

/***/ "./resources/js/views/Home/Home.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Home/Home.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_3afadaa0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=3afadaa0& */ "./resources/js/views/Home/Home.vue?vue&type=template&id=3afadaa0&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/views/Home/Home.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Home_vue_vue_type_template_id_3afadaa0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_3afadaa0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Home/Home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Home/Home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Home/Home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home/Home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Home/Home.vue?vue&type=template&id=3afadaa0&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Home/Home.vue?vue&type=template&id=3afadaa0& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_3afadaa0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_3afadaa0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_3afadaa0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=3afadaa0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home/Home.vue?vue&type=template&id=3afadaa0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home/Home.vue?vue&type=template&id=3afadaa0&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home/Home.vue?vue&type=template&id=3afadaa0& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "home-introduction d-flex align-items-center" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col col-12 col-md-6" }, [
            _c("div", { staticClass: "col-container" }, [
              _c("h1", [
                _vm._v(
                  "\n                            Seja bem vindo ao SMART CONDOMINIUM, o mais novo\n                            sistema de gestão de condomínios.\n                        "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n                            Aqui você pode se cadastrar, gerar seus boletos,\n                            administrar contas anteriores, fazer café da\n                            manhã e servir no jantar, sem complicação. Tudo\n                            rápido, fácil e acessível.\n                        "
                )
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-round btn-default btn-large",
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.scrollToElement(".home-about")
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                            Conheça mais\n                        "
                  )
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _vm._m(0)
        ])
      ])
    ]),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "home-services d-flex align-items-center",
        attrs: { id: "home-services" }
      },
      [
        _c("div", { staticClass: "container" }, [
          _vm._m(2),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row" },
            _vm._l(_vm.services, function(item, index) {
              return _c(
                "div",
                { key: index, staticClass: "col col-12 col-md-3" },
                [
                  _c("span", [_c("i", { class: item.icon })]),
                  _vm._v(" "),
                  _c("h5", [_vm._v(_vm._s(item.title))]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "\n                        Lorem ipsum dolor sit amet consectetur adipisicing\n                        elit. Rerum, facilis?\n                    "
                    )
                  ])
                ]
              )
            }),
            0
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "home-pricing d-flex align-items-center" }, [
      _c("div", { staticClass: "container" }, [
        _vm._m(3),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "row" },
          _vm._l(_vm.cards, function(item, index) {
            return _c(
              "div",
              { key: index, staticClass: "col col-12 col-md-4" },
              [
                _c(
                  "div",
                  { class: "pricing-card pricing-card-" + item.color },
                  [
                    _c("header", [
                      _c("h1", { staticClass: "card-title" }, [
                        _vm._v(_vm._s(item.title))
                      ]),
                      _vm._v(" "),
                      _c("h2", { staticClass: "card-price" }, [
                        _vm._v(_vm._s(item.pricing))
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(4, true),
                    _vm._v(" "),
                    _c("footer", [
                      _c(
                        "button",
                        { class: "btn btn-round btn-block btn-" + item.color },
                        [
                          _vm._v(
                            "\n                                Comprar agora\n                            "
                          )
                        ]
                      )
                    ])
                  ]
                )
              ]
            )
          }),
          0
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "home-contact d-flex align-items-center" }, [
      _c("div", { staticClass: "container" }, [
        _vm._m(5),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card card-body" },
          [
            _c(
              "el-form",
              {
                ref: "loginForm",
                staticClass: "login-form",
                attrs: {
                  model: _vm.form,
                  rules: _vm.formRules,
                  "auto-complete": "off",
                  "label-position": "top"
                },
                nativeOn: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.submitForm($event)
                  }
                }
              },
              [
                _c(
                  "el-row",
                  { attrs: { gutter: 20 } },
                  [
                    _c(
                      "el-col",
                      { attrs: { span: 24, md: 12 } },
                      [
                        _c(
                          "el-form-item",
                          { attrs: { label: "Nome", prop: "name" } },
                          [
                            _c("el-input", {
                              attrs: {
                                placeholder: "Nome",
                                type: "text",
                                autocomplete: "off"
                              },
                              model: {
                                value: _vm.form.name,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "name", $$v)
                                },
                                expression: "form.name"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "el-col",
                      { attrs: { span: 24, md: 12 } },
                      [
                        _c(
                          "el-form-item",
                          { attrs: { label: "E-mail", prop: "email" } },
                          [
                            _c("el-input", {
                              attrs: {
                                placeholder: "E-mail",
                                type: "email",
                                autocomplete: "off"
                              },
                              model: {
                                value: _vm.form.email,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "email", $$v)
                                },
                                expression: "form.email"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "el-col",
                      { attrs: { span: 24 } },
                      [
                        _c(
                          "el-form-item",
                          { attrs: { label: "Assunto", prop: "subject" } },
                          [
                            _c("el-input", {
                              attrs: {
                                placeholder: "Assunto",
                                type: "text",
                                autocomplete: "off"
                              },
                              model: {
                                value: _vm.form.subject,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "subject", $$v)
                                },
                                expression: "form.subject"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "el-col",
                      { attrs: { span: 24 } },
                      [
                        _c(
                          "el-form-item",
                          { attrs: { label: "Mensagem", prop: "message" } },
                          [
                            _c("el-input", {
                              attrs: {
                                placeholder: "Mensagem",
                                type: "textarea",
                                autocomplete: "off",
                                maxlength: "250",
                                "show-word-limit": ""
                              },
                              model: {
                                value: _vm.form.message,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "message", $$v)
                                },
                                expression: "form.message"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("el-form-item", [
                  _c("div", { staticClass: "d-flex justify-content-end" }, [
                    _c("button", { staticClass: "btn btn-round btn-primary" }, [
                      _vm._v(
                        "\n                                Enviar\n                            "
                      )
                    ])
                  ])
                ])
              ],
              1
            )
          ],
          1
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
    return _c("div", { staticClass: "col col-12 col-md-6" }, [
      _c("img", { attrs: { src: "/img/condominios.png" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "home-about d-flex align-items-center",
        attrs: { id: "home-about" }
      },
      [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col col-12 col-md-6" }, [
              _c("img", { attrs: { src: "/img/negocios.png" } })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col col-12 col-md-6" }, [
              _c("div", { staticClass: "col-container" }, [
                _c("h1", [
                  _vm._v(
                    "\n                            Temos acompenhado o mercado e as tecnologias de\n                            gerenciamento à anos.\n                        "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                            Nos colocando nos lugar do cliente para entender\n                            as reais necessidades nos sistemas de\n                            gerenciamento de condoínios.\n                        "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "btn btn-round btn-warning btn-large" },
                  [
                    _vm._v(
                      "\n                            Nossos planos\n                        "
                    )
                  ]
                )
              ])
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title" }, [
      _c("h1", [_vm._v("Nossos serviços")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n                    Lorem ipsum dolor sit, amet consectetur adipisicing\n                    elit. Nesciunt dolores reiciendis distinctio fugiat\n                    repudiandae hic nemo voluptatum quisquam unde autem.\n                "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title" }, [
      _c("h1", [_vm._v("Conheça nossos planos")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n                    Lorem ipsum dolor sit amet consectetur, adipisicing\n                    elit. Soluta deleniti quo esse quisquam pariatur! Magni\n                    ullam ducimus reprehenderit quibusdam quasi deleniti\n                    quam! Aspernatur repudiandae deserunt delectus soluta\n                    autem placeat quaerat.\n                "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", [
      _c("ul", [
        _c("li", [_vm._v("Geração de boletos")]),
        _vm._v(" "),
        _c("li", [_vm._v("Café da manhã")]),
        _vm._v(" "),
        _c("li", [_vm._v("Louças lavadas")]),
        _vm._v(" "),
        _c("li", [_vm._v("envio de torpedos")]),
        _vm._v(" "),
        _c("li", [_vm._v("Por ai vai")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title" }, [
      _c("h1", [_vm._v("Entre em contato")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n                    Tire suas dúvidas diretamente com nossos atendentes na\n                    central, enviamos um e-mail e retorno automático para\n                    confirmar o contato e um email de responsta assim que\n                    possível\n                "
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);