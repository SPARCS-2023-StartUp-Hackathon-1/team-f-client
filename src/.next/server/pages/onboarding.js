"use strict";
(() => {
var exports = {};
exports.id = 411;
exports.ids = [411];
exports.modules = {

/***/ 8361:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/apis'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/common/Button'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/common/GNB'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/common/Select'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/hooks/queries/useMainCategoryQuery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/hooks/useCategoryButton'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/store/question'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9752);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












async function getStaticProps() {
    const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient();
    await queryClient.prefetchQuery([
        "mainCategories"
    ], Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/apis'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    return {
        props: {
            dehydratedState: (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.dehydrate)(queryClient)
        }
    };
}
const Onboarding = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const order = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilValue)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/store/question'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    const question = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilValue)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/store/question'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(order));
    const { data , isSuccess  } = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/hooks/queries/useMainCategoryQuery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    const { handleClick , isDisabled  } = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/hooks/useCategoryButton'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
        type: "main"
    });
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (question.basicQuestion.id !== 0) router.reload();
    }, [
        order
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "h-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-h2 text-gray-800 text-center pt-[8rem]",
                children: "희망하는 직무를 선택해주세요"
            }),
            isSuccess && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/common/Select'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                categories: data
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/common/GNB'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/common/Button'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                    onClick: handleClick,
                    buttonType: "primary",
                    buttonText: "작성 완료",
                    isDisabled: isDisabled
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Onboarding);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ }),

/***/ 9752:
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8361));
module.exports = __webpack_exports__;

})();