"use strict";
(() => {
var exports = {};
exports.id = 411;
exports.ids = [411];
exports.modules = {

/***/ 8146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_Select)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/common/Icon/index.tsx + 10 modules
var Icon = __webpack_require__(5359);
// EXTERNAL MODULE: ./store/select/index.ts + 1 modules
var store_select = __webpack_require__(3987);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
;// CONCATENATED MODULE: ./hooks/useSelect.ts



const useSelect = ({ type  })=>{
    const selectRef = (0,external_react_.useRef)(null);
    const [selectedId, setSelectedId] = (0,external_recoil_.useRecoilState)((0,store_select/* default */.Z)(type));
    const handleSelect = ()=>{
        if (selectRef.current) setSelectedId(+selectRef.current.id);
    };
    return {
        selectRef,
        handleSelect,
        selectedId
    };
};
/* harmony default export */ const hooks_useSelect = (useSelect);

;// CONCATENATED MODULE: ./components/common/Select/Option.tsx



const OPTION_STYLE = {
    default: "bg-gray-0",
    selected: "bg-gray-0 border-2 border-primary-default"
};
const Option = ({ id , name  })=>{
    const { selectRef , handleSelect , selectedId  } = hooks_useSelect({
        type: "main"
    });
    const selected = id === selectedId ? "selected" : "default";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        id: `${id}`,
        ref: selectRef,
        className: `flex justify-between items-center h-[5.6rem] rounded-[0.8rem] p-[1.6rem] mt-[1rem] ${OPTION_STYLE[selected]}`,
        onClick: handleSelect,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-b1",
                children: name
            }),
            selected === "selected" ? /*#__PURE__*/ jsx_runtime_.jsx(Icon/* Icon */.J, {
                width: 18,
                height: 14,
                iconName: "check"
            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-[1.8rem] h-[1.4rem]"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/common/Select/index.tsx


const Select = ({ categories  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "mt-[4rem]",
        children: categories.map((category, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Option, {
                id: category.id,
                name: category.name
            }, index))
    });
};
/* harmony default export */ const common_Select = (Select);


/***/ }),

/***/ 6386:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ useMainCategoryQuery)
/* harmony export */ });
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(678);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apis__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__]);
([_apis__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const useMainCategoryQuery = ()=>{
    const mainCategoryQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: [
            "mainCategories"
        ],
        queryFn: _apis__WEBPACK_IMPORTED_MODULE_0__/* .getMainCategories */ .ij
    });
    return mainCategoryQuery;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3987);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



const useCategoryButton = ({ type  })=>{
    const selectedId = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilValue)((0,_store_select__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(type));
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const isDisabled = selectedId === 0 ? true : false;
    const handleClick = ()=>{
        router.push(`${router.asPath}/${selectedId}`);
    };
    return {
        handleClick,
        isDisabled
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCategoryButton);


/***/ }),

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
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9752);
/* harmony import */ var _store_question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8928);
/* harmony import */ var _components_common_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2172);
/* harmony import */ var _components_common_GNB__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(556);
/* harmony import */ var _components_common_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8146);
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(678);
/* harmony import */ var _hooks_useCategoryButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5435);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _hooks_queries_useMainCategoryQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6386);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, _apis__WEBPACK_IMPORTED_MODULE_6__, _hooks_queries_useMainCategoryQuery__WEBPACK_IMPORTED_MODULE_9__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, _apis__WEBPACK_IMPORTED_MODULE_6__, _hooks_queries_useMainCategoryQuery__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












async function getStaticProps() {
    const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient();
    await queryClient.prefetchQuery([
        "mainCategories"
    ], _apis__WEBPACK_IMPORTED_MODULE_6__/* .getMainCategories */ .ij);
    return {
        props: {
            dehydratedState: (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.dehydrate)(queryClient)
        }
    };
}
const Onboarding = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    const order = (0,recoil__WEBPACK_IMPORTED_MODULE_10__.useRecoilValue)(_store_question__WEBPACK_IMPORTED_MODULE_2__/* .questionOrderAtom */ .ZE);
    const question = (0,recoil__WEBPACK_IMPORTED_MODULE_10__.useRecoilValue)((0,_store_question__WEBPACK_IMPORTED_MODULE_2__/* .questionAtomFamily */ .fw)(order));
    const { data , isSuccess  } = (0,_hooks_queries_useMainCategoryQuery__WEBPACK_IMPORTED_MODULE_9__/* .useMainCategoryQuery */ .r)();
    const { handleClick , isDisabled  } = (0,_hooks_useCategoryButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
        type: "main"
    });
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
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
            isSuccess && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Select__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                categories: data
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_GNB__WEBPACK_IMPORTED_MODULE_4__/* .GNB */ .D, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .z, {
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

/***/ 3987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ store_select)
});

// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
;// CONCATENATED MODULE: ./store/select/atom.ts

const selectAtomFamily = (0,external_recoil_.atomFamily)({
    key: "selectedCategoryId",
    default: 0
});
/* harmony default export */ const atom = (selectAtomFamily);

;// CONCATENATED MODULE: ./store/select/index.ts

/* harmony default export */ const store_select = (atom);


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

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172,796,10], () => (__webpack_exec__(8361)));
module.exports = __webpack_exports__;

})();