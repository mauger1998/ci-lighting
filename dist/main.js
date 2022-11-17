/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://ci-lighting/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://ci-lighting/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_flag_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/flag.png */ \"./src/images/flag.png\");\n/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/search.png */ \"./src/images/search.png\");\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/logo.png */ \"./src/images/logo.png\");\n/* harmony import */ var _images_newheroone_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/newheroone.png */ \"./src/images/newheroone.png\");\n/* harmony import */ var _images_circle_vector_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/circle-vector.png */ \"./src/images/circle-vector.png\");\n/* harmony import */ var _images_icon1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/icon1.png */ \"./src/images/icon1.png\");\n/* harmony import */ var _images_icon2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/icon2.png */ \"./src/images/icon2.png\");\n/* harmony import */ var _images_icon3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/icon3.png */ \"./src/images/icon3.png\");\n/* harmony import */ var _images_Group_26_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/Group 26.png */ \"./src/images/Group 26.png\");\n/* harmony import */ var _images_customer_icon_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/customer-icon.png */ \"./src/images/customer-icon.png\");\n/* harmony import */ var _images_handshake_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/handshake.png */ \"./src/images/handshake.png\");\n/* harmony import */ var _images_tick_icon_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/tick-icon.png */ \"./src/images/tick-icon.png\");\n/* harmony import */ var _images_Hydra_Motorway_Photo_2_1_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/Hydra Motorway Photo (2) 1.png */ \"./src/images/Hydra Motorway Photo (2) 1.png\");\n/* harmony import */ var _images_cable_removebg_preview_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/cable-removebg-preview.png */ \"./src/images/cable-removebg-preview.png\");\n/* harmony import */ var _images_firstproduct_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/firstproduct.png */ \"./src/images/firstproduct.png\");\n/* harmony import */ var _images_secondproduct_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/secondproduct.png */ \"./src/images/secondproduct.png\");\n/* harmony import */ var _images_thirdproduct_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/thirdproduct.png */ \"./src/images/thirdproduct.png\");\n/* harmony import */ var _images_fourthproduct_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/fourthproduct.png */ \"./src/images/fourthproduct.png\");\n/* harmony import */ var _images_photo_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./images/photo.png */ \"./src/images/photo.png\");\n/* harmony import */ var _images_store_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./images/store.png */ \"./src/images/store.png\");\n/* harmony import */ var _images_fb_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./images/fb.png */ \"./src/images/fb.png\");\n/* harmony import */ var _images_email_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./images/email.png */ \"./src/images/email.png\");\n/* harmony import */ var _images_phone_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./images/phone.png */ \"./src/images/phone.png\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst gsyFlagImg = document.querySelector(\".guernsey-flag\");\nconst searchIconImg = document.querySelector(\".search-icon\");\nconst logoImg = document.querySelector(\".logo\");\nconst heroSection = document.querySelector(\".hero-section\");\nconst circleText = document.querySelector(\".circle-texture\");\nconst menu = document.querySelector(\".burger\");\nconst serviceIcon = document.querySelector(\".customer\");\nconst handshakeIcon = document.querySelector(\".hands\");\nconst tickIcon = document.querySelector(\".ticks\");\nconst gallery = document.querySelector(\".gallery\");\nconst cableBg = document.querySelector(\".cable\");\nconst first = document.querySelector(\".first\");\nconst second = document.querySelector(\".second\");\nconst third = document.querySelector(\".third\");\nconst fourth = document.querySelector(\".fourth\");\nconst photograph = document.querySelector(\".photo\");\nconst storeImg = document.querySelector(\".storeImg\");\nconst phoneImg = document.querySelector(\".iphone\");\nconst fbImg = document.querySelector(\".facebook\");\nconst mailImg = document.querySelector(\".mail\");\ngsyFlagImg.src = _images_flag_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nlogoImg.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\nheroSection.style.backgroundImage = `url(${_images_newheroone_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]})`;\ncircleText.src = _images_circle_vector_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\nmenu.src = _images_Group_26_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"];\nserviceIcon.src = _images_customer_icon_png__WEBPACK_IMPORTED_MODULE_10__[\"default\"];\nhandshakeIcon.src = _images_handshake_png__WEBPACK_IMPORTED_MODULE_11__[\"default\"];\ntickIcon.src = _images_tick_icon_png__WEBPACK_IMPORTED_MODULE_12__[\"default\"];\ngallery.src = _images_Hydra_Motorway_Photo_2_1_png__WEBPACK_IMPORTED_MODULE_13__[\"default\"];\ncableBg.src = _images_cable_removebg_preview_png__WEBPACK_IMPORTED_MODULE_14__[\"default\"];\nfirst.src = _images_firstproduct_png__WEBPACK_IMPORTED_MODULE_15__[\"default\"];\nsecond.src = _images_secondproduct_png__WEBPACK_IMPORTED_MODULE_16__[\"default\"];\nthird.src = _images_thirdproduct_png__WEBPACK_IMPORTED_MODULE_17__[\"default\"];\nfourth.src = _images_fourthproduct_png__WEBPACK_IMPORTED_MODULE_18__[\"default\"];\nphotograph.src = _images_photo_png__WEBPACK_IMPORTED_MODULE_19__[\"default\"];\nstoreImg.src = _images_store_png__WEBPACK_IMPORTED_MODULE_20__[\"default\"];\nphoneImg.src = _images_phone_png__WEBPACK_IMPORTED_MODULE_23__[\"default\"];\nfbImg.src = _images_fb_png__WEBPACK_IMPORTED_MODULE_21__[\"default\"];\nmailImg.src = _images_email_png__WEBPACK_IMPORTED_MODULE_22__[\"default\"];\n\n//# sourceURL=webpack://ci-lighting/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::before,\\n*::after {\\n    margin:0;\\n    padding:0;\\n    box-sizing:border-box;\\n    font-family: 'Poppins', sans-serif;\\n    overflow-x:hidden;\\n\\n}\\n\\nmain {\\n    height: 400vh;\\n    \\n}\\nheader {\\n    background-color:#0d0d0d;\\n    color:white;\\n    position:fixed;\\n    width:100vw;\\n}\\n.top-bar {\\n    display:flex;\\n    justify-content: space-between;\\n    align-items:center;\\n    padding-inline: 6rem;\\n}\\n.top-bar img {\\n    width:2rem;\\n}\\n.guernsey-flag-section {\\n    display:flex;\\n    align-items:center;\\n    gap:1rem;\\n    font-size:0.8rem;\\n    font-weight:200;\\n}\\n.opening-times-section {\\n    display:flex;\\n    align-items: center;\\n    gap:1.5rem;\\n    font-size:0.8rem;\\n    font-weight:200;\\n}\\n\\n\\n\\nnav {\\n    display:flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding-inline:6rem;\\n    z-index:2;\\n}\\nheader {\\n    z-index:2;\\n}\\n.logo-section img {\\n    width:12rem;\\n}\\n.nav-links ul {\\n    display:flex;\\n    list-style:none;\\n    align-items: center;\\n    gap:4rem;\\n    font-size:0.9rem;\\n    font-weight:600;\\n}\\n.nav-links button {\\n    padding:0.25rem 1.5rem;\\n    font-weight:700;\\n    background-color:white;\\n    border:3px solid white;\\n    transition:0.5s;\\n    border-radius:0.25rem;\\n}\\n.burger {\\n    display:none;\\n}\\n\\n/** Nav Media Queries\\n********************/\\n\\n@media (max-width:884px) {\\n    .nav-links {\\n        display:none;\\n    }\\n    nav {\\n        padding-inline:2.5rem;\\n    }\\n    .burger {\\n        display:block;\\n    }\\n}\\n\\n@media (max-width:784px) {\\n    .opening-times-section {\\n        display:none;\\n    }\\n   \\n}\\n@media (max-width:333px) {\\n    .logo-section img {\\n        width:8rem;\\n    }\\n    nav {\\n        justify-content:center;\\n        align-items:center;\\n        padding-top:0.5rem;\\n        padding-bottom:0.5rem;\\n    }\\n    .burger {\\n        padding-inline:1.5rem;  \\n          \\n    }\\n}\\n\\n\\n\\n.first-section {\\n    width:100vw;\\n    height:max-content;\\n    display:flex;\\n    justify-content: center;\\n    align-items: flex-start;\\n    background-color:#0d0d0d;\\n}\\n.hero-section {\\n    width:100vw;\\n    height:60vh;\\n    background-size:cover;\\n    display:flex;\\n    justify-content: flex-end;\\n    padding-right:6rem;\\n    align-items: center;\\n    color:white;\\n    margin-top:5rem;\\n}\\n.title-container {\\n    display:flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    gap:3rem;\\n}\\n.title-container h1 {\\n    font-size:max(2.25rem, 4vw);\\n    font-weight:700;\\n    text-align:center;\\n    padding-inline:0.5rem;\\n}\\n.title-container p {\\n    font-size:1.15rem;\\n    font-size:max(1.15rem, 1.5vw);\\n    font-weight:300;\\n    padding-inline:1rem;\\n    text-align:center;\\n\\n}\\n.title-container button {\\n    padding:0.4rem 3rem;\\n    font-size:1.25rem;\\n    background-color:white;\\n    color:black;\\n    border:3px solid white;\\n    transition:0.5s;\\n    font-weight:500;\\n}\\n.title-container button:nth-child(1) {\\n    font-weight:700;\\n}\\n\\n/**** Media Queries for hero\\n***************************/\\n@media (max-width:884px) {\\n    .hero-section {\\n        padding-right:0rem;\\n        padding-inline:1rem;\\n        justify-content:center;\\n    }\\n}\\n@media (max-width:600px) {\\n    .title-container button {\\n        word-wrap: nowrap;\\n        width:max-content;\\n        font-size:1rem;\\n        text-align:center;\\n        padding-inline:1.75rem;\\n    }\\n    \\n    .hero-section {\\n        background-position-x:-20rem;\\n        background-repeat: no-repeat;\\n        \\n    }\\n}\\n.title-container button:nth-child(2) {\\n    background-color:rgba(26, 26, 26, 1);\\n    color:white;\\n}\\n.title-container button:nth-child(2):hover {\\n    background-color:white;\\n    color:black;\\n}\\n.title-container button:hover,\\nnav button:hover {\\n    transition:0.5s;\\n    cursor:pointer;\\n    background-color:rgb(26 26 26);\\n    color:white;\\n    \\n}\\n.title-buttons {\\n    display:flex;\\n    gap:1.5rem;\\n}\\nnav ul:hover,\\nnav button {\\n    cursor:pointer;\\n}\\n\\nnav ul li::before {\\n    content:\\\"\\\";\\n    width: 0px;\\n    height:2px;\\n    background-color:white;\\n    position:absolute;\\n    top:75%;\\n    transition:0.5s;\\n}\\nnav ul li:hover::before {\\n    width:70px;\\n}\\n\\n\\n\\n\\n\\n.second-section {\\n    padding-top:5rem;\\n    display:flex;\\n    flex-direction:column;\\n    justify-content: flex-start;\\n    align-items: center;\\n    font-size:1.5rem;\\n    height:73vh;\\n    position:relative;\\n    gap:6rem;\\n    padding-inline:2rem;\\n}\\n.cards {\\n    display:flex;\\n    gap:1.5rem;\\n    overflow:visible;\\n}\\n.circle-texture {\\n    position:absolute;\\n    opacity:0.1;\\n    left:32%;\\n    top:2%;\\n    width:10rem;\\n}\\n.card {\\n    background-color:rgb(241, 240, 240);\\n    display:flex;\\n    flex-direction:column;\\n    justify-content: space-evenly;\\n    align-items: center;\\n    padding:2rem;\\n    gap:0.5rem;\\n    position:relative;\\n    padding-top:4rem;\\n    padding-bottom:1.5rem;\\n    text-align:center;\\n    z-index:-1;\\n    overflow:visible;\\n\\n}\\n.icon {\\n    position:absolute;\\n    top:-25%;\\n}\\n.hands,\\n.ticks {\\n    top:-20%;\\n}\\n.card h3 {\\n    font-weight:600;\\n    font-size:1.5rem;\\n}\\n.card p {\\n    font-size:1rem;\\n}\\n.card button {\\n    padding: 0.5rem 4rem;\\n    font-size:1rem;\\n    border:2px solid black;\\n    margin-top:0.5rem;\\n    border-radius:0.25rem;\\n    font-weight:500;\\n    background-color:white;\\n    margin-top:1.5rem;\\n}\\n\\n@media (max-width: 1216px) {\\n    .card h3 {\\n        font-size:1.25rem;\\n    }\\n    .card button {\\n        padding:0.3rem 3rem;\\n    }\\n}\\n@media (max-width: 1054px) {\\n    .hands,\\n    .ticks {\\n        top:-15%;\\n    }\\n}\\n@media (max-width:868px) {\\n    .cards {\\n        flex-direction:column;\\n        gap:5rem;\\n    }\\n    .second-section {\\n        text-align:center;\\n        height:150vh;\\n    }\\n}\\n\\n\\n\\n\\n\\n.third-section {\\n    height:60vh;\\n    background-color:rgb(236, 236, 236);\\n    display:flex;\\n    flex-direction: column;\\n    justify-content: flex-start;\\n    align-items: center;\\n    gap:3rem;\\n    font-size:1.5rem;\\n    padding:2.5rem;\\n    position:relative;\\n    overflow:hidden;\\n    text-align:center;\\n\\n   \\n}\\n.gallery-container {\\n    display:flex;\\n    justify-content: center;\\n    align-items: center;\\n    gap:2rem;\\n    overflow:hidden;\\n\\n\\n}\\n.gallery-container svg {\\n    width:50px;\\n}\\n.gallery-container svg:nth-child(1) {\\n    transform: rotateZ(-90deg)\\n}\\n.gallery-container svg:nth-child(3) {\\n    transform: rotateZ(90deg)\\n}\\n.gallery {\\n    z-index:1;\\n}\\n.cable {\\n    position:absolute;\\n    opacity:0.3;\\n    right:-2%;\\n    top:3%;\\n    transform:rotateZ(50deg) scale(1.1);\\n    z-index:0;\\n}\\n\\n@media (max-width:884px) {\\n    .cable {\\n        width:min(15rem, 22vw);\\n        transform:rotateZ(55deg);\\n        top:0%;\\n        right:-3%;\\n    }\\n    .third-section {\\n        height:max-content;\\n        padding-bottom:5rem;\\n    }\\n    \\n}\\n@media (max-width:863px) {\\n    .gallery {\\n        width: min(80vw, 50rem);\\n        \\n    }\\n    .third-section h3 {\\n        font-size:1.75rem;\\n    }\\n}\\n@media (max-width:791px) {\\n    .gallery-container svg {\\n        display:none;\\n    }\\n    .third-section h3 {\\n        font-size:1.5rem;\\n    }\\n}\\n\\n@media (max-width:500px) {\\n    .third-section h3 {\\n        font-size:1rem;\\n    }\\n}\\n\\n\\n\\n.products {\\n    display:flex;\\n    flex-direction:column;\\n    justify-content:flex-start;\\n    align-items:center;\\n    padding:6rem;\\n    padding-bottom:8rem;\\n    gap:4rem;\\n    text-align:center;\\n}\\n.product-container {\\n    display:flex;\\n    justify-content:center;\\n    align-items:center;\\n    gap:4vw;\\n}\\n.products h3 {\\n    font-size:2rem;\\n    width:max-content;\\n}\\n\\n@media (max-width:1380px) {\\n    .product-container {\\n        display:grid;\\n        grid-template-columns: 1fr 1fr;\\n        gap:3rem;\\n    }\\n\\n}\\n@media (max-width:802px) {\\n   .product-container {\\n    grid-template-columns: 1fr;\\n   }\\n}\\n@media (max-width: 492px) {\\n    .products {\\n        padding-inline:2rem;\\n    }\\n    .products h3 {\\n        font-size:1.5rem;\\n    }\\n}\\n@media (max-width:370px) {\\n    .products {\\n        padding-inline:1rem;\\n    }\\n}\\n.container {\\n    display:flex;\\n    flex-direction: column;\\n    align-items:center;\\n    justify-content: center;\\n    font-size:1.15rem;\\n    gap:0.75rem;\\n}\\n.container h4 {\\n    font-weight:600;\\n    background-color:rgb(236, 236, 236);\\n    padding-inline:1.5rem;\\n    padding-block: 0.5rem;\\n    width:100%;\\n    display:flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n.first + h4 {\\n    padding-inline:2.75rem;\\n}\\n.second + h4 {\\n    padding-inline:3.75rem;\\n}\\n.third + h4 {\\n    padding-inline:3.25rem;\\n}\\n.fourth + h4 {\\n    padding-inline:2rem;\\n}\\n\\n.contact {\\n    position:relative;\\n    display:flex;\\n    flex-direction: column;\\n    align-items:center;\\n    justify-content:center;\\n    padding:6rem;\\n    gap:1rem;\\n    height:127vh;\\n    color:white;  \\n    overflow:hidden;\\n    text-align: center;\\n\\n}\\n.contact h3 {\\n    font-size:2rem;\\n    z-index:1;\\n    overflow:hidden;\\n}\\n.contact p {\\n    font-size:1rem;\\n    z-index:1;\\n    overflow:hidden;\\n}\\n.svg {\\n    opacity:0.5;\\n    position:absolute;\\n    inset:0;\\n    height:100%;\\n\\n   \\n}\\n.rectangle {\\n    position:absolute;\\n    background-color:rgba(0, 0, 0, 0.85);\\n    height:100%;\\n    width:100vw;\\n    overflow:hidden;\\n\\n}\\n\\n\\n\\nfieldset {\\n    display:flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    gap:0.5rem;\\n    color:white;\\n    overflow:hidden;\\n}\\n.first-line {\\n    display:flex;\\n    gap:0.5rem;\\n}\\n.first-line p {\\n    display:flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    font-size:1rem;\\n}\\n.message {\\n    display:flex;\\n    flex-direction: column;\\n}\\n.message label {\\n    font-size:1rem;\\n}\\nform button {\\n    padding:0.5rem 20.5rem;\\n    font-weight:600;\\n    font-size:1rem;\\n    border-radius:0.5rem;\\n    border:none;\\n    background-color:lightgray;\\n    color:black;\\n    margin-top:0.5rem;\\n    width:100%;\\n}\\nform {\\n    overflow:hidden;\\n}\\nform button span {\\n    padding-left:1rem;\\n}\\n#name {\\n    background-color:white;\\n}\\n#email {\\n    background-color:white;\\n}\\nform {\\n    /* background-color:white; */\\n    z-index:1;\\n    border:none;\\n    outline:none;\\n    padding-top:3rem;\\n    \\n}\\nfieldset {\\n    border:none;\\n}\\nlegend {\\n    padding:0.5rem;\\n}\\nlabel {\\n    align-self:flex-start;\\n}\\ninput {\\n    width:15rem;\\n    height:2rem;\\n    border:none;\\n}\\n@media (max-width:865px) {\\n    .message {\\n        width:66%;\\n    }\\n    .first-line {\\n        display:grid;\\n        grid-template-columns:1fr;\\n    }\\n    input {\\n        width:30rem;\\n    }\\n    form button {\\n        width:30.5rem;\\n        padding-inline:0;\\n    }\\n}\\n@media (max-width:549px) {\\n    .message {\\n        width:60%;\\n    }\\n    input {\\n        width:27.5rem;\\n    }\\n    form button {\\n        width:27.5rem;\\n    }\\n}\\n@media (max-width:502px) {\\n    .message {\\n        width:50%;\\n    }\\n    input,\\n    form button {\\n        width:23rem;\\n    }\\n    .contact p {\\n        font-size:0.85rem;\\n        background-color:inherit;\\n    }\\n    .contact h3 {\\n        font-size:1.25rem;\\n    }\\n    .contact {\\n        height:112vh;\\n        \\n    }\\n    .svg {\\n        height:100vh;\\n    }\\n}\\n@media (max-width:446px) {\\n    \\n    .message {\\n        width:42.5%;\\n    }\\n    input,\\n    form button {\\n        width:19.5rem;\\n    }\\n    form button {\\n        width:100%;\\n    }\\n    .contact {\\n        padding-bottom:0;\\n        \\n    }\\n}\\n@media (max-width:360px) {\\n    .hello {\\n        width:150%;\\n    }\\n    .contact {\\n        padding-bottom:0;\\n    }\\n    \\n}\\n\\n\\n.photograph {\\n    height:max-content;\\n    width:100vw;\\n    overflow:hidden;\\n}\\n.photo {\\n    width:100vw;\\n}\\n\\n\\n\\n.store {\\n    height:110vh;\\n    width:100vw;\\n    display:flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    font-size:1.75rem;\\n    gap:4rem;\\n}\\n\\n@media (max-width:1380px) {\\n    .store {\\n        height:90vh;\\n        padding-top:1rem;\\n    }\\n}\\n@media (max-width:929px) {\\n    .store img {\\n        width:75vw;\\n        align-self: center;\\n    }\\n    .store {\\n        font-size:1.25rem;\\n\\n    }\\n}\\n@media (max-width:699px) {\\n    .store {\\n        font-size:1.25rem;\\n        padding-top:3rem;\\n        height:60vh;\\n        margin-bottom:5rem;\\n        \\n    }\\n    .store img {\\n        width:90vw;\\n    }\\n}\\n@media (max-width:507px) {\\n    .store h3 {\\n        width:50%;\\n        text-align:center;\\n    }\\n}\\n@media (max-width: 488px) {\\n    .store {\\n        font-size:1rem;\\n        height:45vh;\\n    }\\n}\\n\\n\\n\\nfooter {\\n    height:60vh;\\n    background-color:rgba(0, 0, 0, 0.9);\\n    color:white;\\n    display:flex;\\n    padding-block:4rem;\\n    gap:6rem;\\n    align-items: center;\\n    justify-content: center;\\n    overflow:hidden;\\n    position:relative;\\n}\\n.leftSide p {\\n    font-size:1.5rem;\\n    font-weight:200;\\n    \\n}\\n.leftSide p:nth-child(1) {\\n    font-size:2rem;\\n    font-weight:700;\\n}\\n\\n.rightSide img {\\n    width:50px;\\n}\\n.rightSide {\\n    display:flex;\\n    flex-direction: column;\\n    gap:3rem;\\n\\n}\\n.tainer {\\n    display:flex;\\n    flex-direction: row;\\n    justify-content: flex-start;\\n    text-align:left;\\n    gap:2rem;\\n\\n    \\n}\\nfooter > p {\\n    position:absolute;\\n    bottom:5%;\\n    left:50%;\\n    transform: translateX(-50%);\\n}\\n@media (max-width:630px) {\\n    footer {\\n        display:grid;\\n        grid-template-columns: 1fr;\\n        place-items:center;\\n        \\n    }\\n    .leftSide p {\\n        font-size:1.25rem;\\n        text-align:center;\\n    }\\n    .leftSide p:nth-child(1){\\n        font-size:1.5rem;\\n    }\\n    .rightSide {\\n        display:flex;\\n        flex-direction: row;\\n        gap:1rem;\\n        \\n    }\\n    .tainer {\\n        align-items:center;\\n        gap:0.5rem;\\n    }\\n\\n}\\n@media (max-width:575px) {\\n    .tainer {\\n        font-size:0.85rem;\\n    }\\n    .tainer img {\\n        width:40px;\\n    }\\n}\\n@media (max-width:505px) {\\n    .rightSide {\\n        display:grid;\\n        grid-template-columns: 1fr 1fr;\\n        place-items: center;\\n    }\\n    .email {\\n        grid-column: span 2;\\n        \\n    }\\n    .copy {\\n        font-size:0.75rem;\\n        text-align:center;\\n    }\\n    \\n    \\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ci-lighting/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/images/Group 26.png":
/*!*********************************!*\
  !*** ./src/images/Group 26.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/Group 26.png\");\n\n//# sourceURL=webpack://ci-lighting/./src/images/Group_26.png?");

/***/ }),

/***/ "./src/images/Hydra Motorway Photo (2) 1.png":
/*!***************************************************!*\
  !*** ./src/images/Hydra Motorway Photo (2) 1.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/Hydra Motorway Photo (2) 1.png\");\n\n//# sourceURL=webpack://ci-lighting/./src/images/Hydra_Motorway_Photo_(2)_1.png?");

/***/ }),

/***/ "./src/images/cable-removebg-preview.png":
/*!***********************************************!*\
  !*** ./src/images/cable-removebg-preview.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/cable-removebg-preview.png\");\n\n//# sourceURL=webpack://ci-lighting/./src/images/cable-removebg-preview.png?");

/***/ }),

/***/ "./src/images/circle-vector.png":
/*!**************************************!*\
  !*** ./src/images/circle-vector.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/circle-vector.png\");\n\n//# sourceURL=webpack://ci-lighting/./src/images/circle-vector.png?");

/***/ }),

/***/ "./src/images/customer-icon.png":
/*!**************************************!*\
  !*** ./src/images/customer-icon.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/customer-icon.png\");\n\n//# sourceURL=webpack://ci-lighting/./src/images/customer-icon.png?");

/***/ }),

/***/ "./src/images/email.png":
/*!******************************!*\
  !*** ./src/images/email.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/email.png\");\n\n//# sourceURL=webpack://ci-lighting/./src/images/email.png?");

/***/ }),

/***/ "./src/images/fb.png":
/*!***************************!*\
  !*** ./src/images/fb.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/fb.png\");\n\n//# sourceURL=webpack://ci-lighting/./src/images/fb.png?");

/***/ }),

/***/ "./src/images/firstproduct.png":
/*!*************************************!*\
  !*** ./src/images/firstproduct.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/firstproduct.png\");\n\n//# sourceURL=webpack://ci-lighting/./src/images/firstproduct.png?");

/***/ }),

/***/ "./src/images/flag.png":
/*!*****************************!*\
  !*** ./src/images/flag.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/flag.png\");\n\n//# sourceURL=webpack://ci-lighting/./src/images/flag.png?");

/***/ }),

/***/ "./src/images/fourthproduct.png":
/*!**************************************!*\
  !*** ./src/images/fourthproduct.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/fourthproduct.png\");\n\n//# sourceURL=webpack://ci-lighting/./src/images/fourthproduct.png?");

/***/ }),

/***/ "./src/images/handshake.png":
/*!**********************************!*\
  !*** ./src/images/handshake.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/handshake.png\");\n\n//# sourceURL=webpack://ci-lighting/./src/images/handshake.png?");

/***/ }),

/***/ "./src/images/icon1.png":
/*!******************************!*\
  !*** ./src/images/icon1.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/icon1.png\");\n\n//# sourceURL=webpack://ci-lighting/./src/images/icon1.png?");

/***/ }),

/***/ "./src/images/icon2.png":
/*!******************************!*\
  !*** ./src/images/icon2.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/icon2.png\");\n\n//# sourceURL=webpack://ci-lighting/./src/images/icon2.png?");

/***/ }),

/***/ "./src/images/icon3.png":
/*!******************************!*\
  !*** ./src/images/icon3.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/icon3.png\");\n\n//# sourceURL=webpack://ci-lighting/./src/images/icon3.png?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/logo.png\");\n\n//# sourceURL=webpack://ci-lighting/./src/images/logo.png?");

/***/ }),

/***/ "./src/images/newheroone.png":
/*!***********************************!*\
  !*** ./src/images/newheroone.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/newheroone.png\");\n\n//# sourceURL=webpack://ci-lighting/./src/images/newheroone.png?");

/***/ }),

/***/ "./src/images/phone.png":
/*!******************************!*\
  !*** ./src/images/phone.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/phone.png\");\n\n//# sourceURL=webpack://ci-lighting/./src/images/phone.png?");

/***/ }),

/***/ "./src/images/photo.png":
/*!******************************!*\
  !*** ./src/images/photo.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/photo.png\");\n\n//# sourceURL=webpack://ci-lighting/./src/images/photo.png?");

/***/ }),

/***/ "./src/images/search.png":
/*!*******************************!*\
  !*** ./src/images/search.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/search.png\");\n\n//# sourceURL=webpack://ci-lighting/./src/images/search.png?");

/***/ }),

/***/ "./src/images/secondproduct.png":
/*!**************************************!*\
  !*** ./src/images/secondproduct.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/secondproduct.png\");\n\n//# sourceURL=webpack://ci-lighting/./src/images/secondproduct.png?");

/***/ }),

/***/ "./src/images/store.png":
/*!******************************!*\
  !*** ./src/images/store.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/store.png\");\n\n//# sourceURL=webpack://ci-lighting/./src/images/store.png?");

/***/ }),

/***/ "./src/images/thirdproduct.png":
/*!*************************************!*\
  !*** ./src/images/thirdproduct.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/thirdproduct.png\");\n\n//# sourceURL=webpack://ci-lighting/./src/images/thirdproduct.png?");

/***/ }),

/***/ "./src/images/tick-icon.png":
/*!**********************************!*\
  !*** ./src/images/tick-icon.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/tick-icon.png\");\n\n//# sourceURL=webpack://ci-lighting/./src/images/tick-icon.png?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://ci-lighting/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ci-lighting/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://ci-lighting/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://ci-lighting/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://ci-lighting/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://ci-lighting/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://ci-lighting/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;