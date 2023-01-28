"use strict";
exports.id = 10;
exports.ids = [10];
exports.modules = {

/***/ 556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ GNB)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const GNB = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: "fixed bottom-0 left-0 w-full p-[1.6rem] bg-gray-0",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "",
            children: children
        })
    });
};


/***/ }),

/***/ 5411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CO": () => (/* binding */ questionMarkAtom),
/* harmony export */   "DN": () => (/* binding */ tailQuestionIdAtomFamily),
/* harmony export */   "Y$": () => (/* binding */ tailQuestionAtomFamily),
/* harmony export */   "ZE": () => (/* binding */ questionOrderAtom),
/* harmony export */   "fw": () => (/* binding */ questionAtomFamily)
/* harmony export */ });
/* unused harmony export questionIsSubmitAtom */
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const questionAtomFamily = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atomFamily)({
    key: "questionAtomFamily",
    default: (inputKey)=>{
        return {
            basicQuestion: {
                id: 0,
                question: ""
            },
            userAnswer: {
                isAnswer: false,
                answer: ""
            },
            aiAnswer: "",
            isTailQuestion: false
        };
    }
});
const tailQuestionAtomFamily = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atomFamily)({
    key: "tailQuestionAtomFamily",
    default: (inputKey)=>{
        return {
            userAnswer: {
                isAnswer: false,
                answer: ""
            },
            aiAnswer: ""
        };
    }
});
const tailQuestionIdAtomFamily = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atomFamily)({
    key: "tailQuestionIdAtomFamily",
    default: []
});
const questionIsSubmitAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "questionIsSubmitAtom",
    default: false
});
const questionOrderAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "questionOrderAtom",
    default: 1
});
const questionMarkAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "questionMarkAtom",
    default: 1
});



/***/ }),

/***/ 8928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CO": () => (/* reexport safe */ _atom__WEBPACK_IMPORTED_MODULE_0__.CO),
/* harmony export */   "DN": () => (/* reexport safe */ _atom__WEBPACK_IMPORTED_MODULE_0__.DN),
/* harmony export */   "ZE": () => (/* reexport safe */ _atom__WEBPACK_IMPORTED_MODULE_0__.ZE),
/* harmony export */   "fw": () => (/* reexport safe */ _atom__WEBPACK_IMPORTED_MODULE_0__.fw)
/* harmony export */ });
/* harmony import */ var _atom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5411);




/***/ })

};
;