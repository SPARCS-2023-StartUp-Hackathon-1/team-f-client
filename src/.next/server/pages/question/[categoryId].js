"use strict";
(() => {
var exports = {};
exports.id = 131;
exports.ids = [131];
exports.modules = {

/***/ 2577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/common/Header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/Question'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/hooks/queries/useDefaultQuestionQuery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/store/question'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/hooks/queries/useMidCategoryByIdQuery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);









const QuestionPage = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const midCategoryId = router?.query?.categoryId;
    const { data: midCategory , isSuccess: midCategoryIsSuccess  } = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/hooks/queries/useMidCategoryByIdQuery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Number(midCategoryId));
    const { data: defaultQuestion , isSuccess: defaultQuestionIsSuccess , refetch: defaultQuestionRefetch , isRefetching: defaultQuestionIsRefetching ,  } = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/hooks/queries/useDefaultQuestionQuery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Number(midCategoryId));
    const order = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilValue)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/store/question'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    const mark = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilValue)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/store/question'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    const setQuestion = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useSetRecoilState)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/store/question'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(order));
    const setTailQuestionIds = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useSetRecoilState)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/store/question'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(order));
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (mark === order) defaultQuestionRefetch();
    }, [
        order
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (defaultQuestionIsSuccess) {
            setQuestion((prev)=>({
                    ...prev,
                    basicQuestion: {
                        id: defaultQuestion.id,
                        question: defaultQuestion.question
                    }
                }));
            setTailQuestionIds([
                defaultQuestion.id
            ]);
        }
    }, [
        defaultQuestionIsSuccess,
        defaultQuestionIsRefetching
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full",
        children: [
            midCategoryIsSuccess && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/common/Header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                headerTitle: midCategory.name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/Question'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionPage);


/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("recoil");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2577));
module.exports = __webpack_exports__;

})();