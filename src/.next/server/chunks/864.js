"use strict";
exports.id = 864;
exports.ids = [864];
exports.modules = {

/***/ 9864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const BUTTON_STYLE = {
    extra: {
        none: "",
        default: "bg-[#EDEFFF] w-[6rem] h-[4rem] rounded-[0.57rem] text-b1 text-primary-default",
        hover: "",
        press: "",
        error: ""
    },
    sub: {
        none: "",
        default: "bg-gray-200 w-[5.2rem] h-[5.2rem] rounded-[0.8rem] p-[1.6rem] text-gray-0 text-subtitle",
        hover: "bg-gray-400 w-[5.2rem] h-[5.2rem] rounded-[0.8rem] p-[1.6rem] text-gray-0 text-subtitle",
        press: "bg-gray-600",
        error: ""
    },
    primary: {
        none: "bg-gray-100 h-[5.2rem] rounded-[0.8rem] p-[1.6rem] text-gray-400 text-subtitle",
        default: "bg-primary-default h-[5.2rem] rounded-[0.8rem] p-[1.6rem] text-gray-0 text-subtitle",
        hover: "bg-primary-hover h-[5.2rem] rounded-[0.8rem] p-[1.6rem] text-gray-0 text-subtitle",
        press: "bg-primary-press",
        error: "bg-system-error h-[5.6rem] rounded-[0.8rem] p-[1.6rem] text-gray-0 text-subtitle"
    },
    gray: {
        none: "",
        default: "bg-gray-200 h-[5.2rem] rounded-[0.8rem] p-[1.6rem] text-gray-0 text-subtitle",
        hover: "bg-gray-400 h-[5.2rem] rounded-[0.8rem] p-[1.6rem] text-gray-0 text-subtitle",
        press: "bg-gray-600",
        error: ""
    },
    red: {
        none: "",
        default: "bg-system-error h-[5.6rem] rounded-[0.8rem] p-[1.6rem] text-gray-0 text-subtitle",
        hover: "",
        press: "",
        error: ""
    }
};
const Button = ({ onClick , buttonText , buttonType , buttonIcon , isDisabled  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isDisabled ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            type: "button",
            value: buttonText,
            disabled: true,
            className: `${BUTTON_STYLE[buttonType]["none"]} w-full`
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: onClick,
            className: `${BUTTON_STYLE[buttonType]["default"]} active:${BUTTON_STYLE[buttonType]["press"]} w-full`,
            children: buttonText || buttonIcon
        })
    });
};


/***/ })

};
;