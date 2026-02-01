"use strict";
(self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []).push([["src_pages_homePage_tsx"],{

/***/ "./src/container/home/HomeChat.tsx":
/*!*****************************************!*\
  !*** ./src/container/home/HomeChat.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeChat: () => (/* binding */ HomeChat)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/TextField/TextField.js");


const HomeChat = () => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: `bg-gradient-to-br from-[#CAEBF5] via-[#B0E0E6] to-[#F5CAEB] flex-1 ml-2 mr-2 mt-2 mb-0 rounded-[20px_20px_0px_0px]`, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "text-end", children: "Start your trial for $0" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "text-4xl font-bold bg-gradient-to-r from-[#4CB4FF] via-[#5A6BFF] to-[#8A2BE2] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(138,43,226,0.4)] text-center", children: "What will you design today?" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "flex justify-center", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], { placeholder: "Ask your AI companion", className: "w-[70%]" }) })] }));
};


/***/ }),

/***/ "./src/pages/homePage.tsx":
/*!********************************!*\
  !*** ./src/pages/homePage.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _container_container_home_HomeChat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @container/container/home/HomeChat */ "./src/container/home/HomeChat.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function HomePage() {
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        console.log("Home page arrived ");
    });
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_container_container_home_HomeChat__WEBPACK_IMPORTED_MODULE_1__.HomeChat, {}) }));
}


/***/ })

}]);
//# sourceMappingURL=src_pages_homePage_tsx.bundle.js.map