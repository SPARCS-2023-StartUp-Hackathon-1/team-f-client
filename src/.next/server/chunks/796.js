"use strict";
exports.id = 796;
exports.ids = [796];
exports.modules = {

/***/ 678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BI": () => (/* binding */ getTailQuestionById),
/* harmony export */   "U3": () => (/* binding */ getDefaultQuestion),
/* harmony export */   "ij": () => (/* binding */ getMainCategories),
/* harmony export */   "k0": () => (/* binding */ getMidCategoryById),
/* harmony export */   "l": () => (/* binding */ getMidCategories),
/* harmony export */   "p": () => (/* binding */ getAnswerById)
/* harmony export */ });
/* unused harmony export axiosClient */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const axiosClient = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "https://qtail.hackathon.sparcs.org/api/v1"
});
const getMainCategories = async ()=>{
    const { data: { categories  } ,  } = await axiosClient.get("/categories/main");
    return categories;
};
const getMidCategories = async ({ id  })=>{
    const { data  } = await axiosClient.get("/categories/mid", {
        params: {
            mainCategoryId: id
        }
    });
    return data;
};
const getMidCategoryById = async (midCategoryId)=>{
    const { data: { id , name , imageUrl  } ,  } = await axiosClient.get(`/categories/mid/${midCategoryId}`);
    return {
        id,
        name,
        imageUrl
    };
};
const getDefaultQuestion = async (midCategoryId)=>{
    const { data: { id , question  } ,  } = await axiosClient.get(`/questions?midCategoryId=${midCategoryId}`);
    return {
        id,
        question
    };
};
const getAnswerById = async (questionId)=>{
    const { data: { id , answer  } ,  } = await axiosClient.get(`/questions/${questionId}/answer`);
    return {
        id,
        answer
    };
};
const getTailQuestionById = async (questionId)=>{
    const { data: { id , question  } ,  } = await axiosClient.get(`/questions/${questionId}/tail`);
    return {
        id,
        question
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ Icon)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/common/Icon/icons/check.svg
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCheck = function SvgCheck(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: 16,
    height: 12,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m1.25 5.25 4.875 4.875L14.75 1.5",
    stroke: "#4F61FF",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};
/* harmony default export */ const check = (SvgCheck);
;// CONCATENATED MODULE: ./components/common/Icon/icons/downArrow.svg
var downArrow_path;
function downArrow_extends() { downArrow_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return downArrow_extends.apply(this, arguments); }

var SvgDownArrow = function SvgDownArrow(props) {
  return /*#__PURE__*/external_react_.createElement("svg", downArrow_extends({
    width: 18,
    height: 10,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), downArrow_path || (downArrow_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M17 1 9 9 1 1",
    stroke: "#8787A2",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};
/* harmony default export */ const downArrow = (SvgDownArrow);
;// CONCATENATED MODULE: ./components/common/Icon/icons/leftArrow.svg
var leftArrow_path;
function leftArrow_extends() { leftArrow_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return leftArrow_extends.apply(this, arguments); }

var SvgLeftArrow = function SvgLeftArrow(props) {
  return /*#__PURE__*/external_react_.createElement("svg", leftArrow_extends({
    width: 10,
    height: 18,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), leftArrow_path || (leftArrow_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M9 17 1 9l8-8",
    stroke: "#8787A2",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};
/* harmony default export */ const leftArrow = (SvgLeftArrow);
;// CONCATENATED MODULE: ./components/common/Icon/icons/logo.svg
var logo_path;
function logo_extends() { logo_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return logo_extends.apply(this, arguments); }

var SvgLogo = function SvgLogo(props) {
  return /*#__PURE__*/external_react_.createElement("svg", logo_extends({
    width: 41,
    height: 15,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), logo_path || (logo_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M13.644 7.7c0-3.708-2.934-6.552-6.552-6.552C3.474 1.148.54 3.992.54 7.7c0 3.708 2.934 6.552 6.552 6.552 1.062 0 2.07-.252 2.952-.684l1.35 1.422 2.07-1.836-1.26-1.332a6.514 6.514 0 0 0 1.44-4.122Zm-6.552 3.744C5.04 11.444 3.42 9.95 3.42 7.7s1.62-3.744 3.672-3.744S10.764 5.45 10.764 7.7a4.11 4.11 0 0 1-.522 2.034L8.226 7.592l-2.07 1.836 1.818 1.926c-.288.054-.576.09-.882.09ZM22.843 1.4h-9.36v2.772h3.24V14h2.88V4.172h3.24V1.4ZM28.68 5v.846c-.594-.684-1.476-1.098-2.682-1.098-2.358 0-4.302 2.07-4.302 4.752s1.944 4.752 4.302 4.752c1.206 0 2.088-.414 2.682-1.098V14h2.7V5h-2.7Zm-2.142 6.696c-1.242 0-2.142-.846-2.142-2.196s.9-2.196 2.142-2.196S28.68 8.15 28.68 9.5s-.9 2.196-2.142 2.196ZM34.461 4.208c.882 0 1.62-.738 1.62-1.62 0-.882-.738-1.62-1.62-1.62-.882 0-1.62.738-1.62 1.62 0 .882.738 1.62 1.62 1.62ZM33.111 14h2.7V5h-2.7v9ZM37.537 14h2.7V.86h-2.7V14Z",
    fill: "#5445FF"
  })));
};
/* harmony default export */ const logo = (SvgLogo);
;// CONCATENATED MODULE: ./components/common/Icon/icons/reload.svg
var reload_path, _path2, _path3;
function reload_extends() { reload_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return reload_extends.apply(this, arguments); }

var SvgReload = function SvgReload(props) {
  return /*#__PURE__*/external_react_.createElement("svg", reload_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), reload_path || (reload_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 16H5v5",
    stroke: "#9CA7C0",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path2 || (_path2 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M19.418 14.997a8 8 0 0 1-14.332 1.027M14 8h5V3",
    stroke: "#9CA7C0",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path3 || (_path3 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M4.583 9.003a8 8 0 0 1 14.331-1.027",
    stroke: "#9CA7C0",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};
/* harmony default export */ const reload = (SvgReload);
;// CONCATENATED MODULE: ./components/common/Icon/icons/rightArrow.svg
var rightArrow_path;
function rightArrow_extends() { rightArrow_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return rightArrow_extends.apply(this, arguments); }

var SvgRightArrow = function SvgRightArrow(props) {
  return /*#__PURE__*/external_react_.createElement("svg", rightArrow_extends({
    width: 24,
    height: 24,
    viewBox: "0 0 26 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), rightArrow_path || (rightArrow_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m8 19 7-7-7-7",
    stroke: "#9CA7C0",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};
/* harmony default export */ const rightArrow = (SvgRightArrow);
;// CONCATENATED MODULE: ./components/common/Icon/icons/setting.svg
var setting_path, setting_path2;
function setting_extends() { setting_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return setting_extends.apply(this, arguments); }

var SvgSetting = function SvgSetting(props) {
  return /*#__PURE__*/external_react_.createElement("svg", setting_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), setting_path || (setting_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
    stroke: "#8787A2",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), setting_path2 || (setting_path2 = /*#__PURE__*/external_react_.createElement("path", {
    d: "m19.167 7.94-.066-.114a2 2 0 0 1-.268-1.034l.03-1.779a1 1 0 0 0-.5-.883l-2.737-1.577a1 1 0 0 0-1.013.009l-1.519.91a2 2 0 0 1-1.027.283h-.132a2 2 0 0 1-1.03-.285L9.38 2.554a1 1 0 0 0-1.016-.008L5.635 4.13a1 1 0 0 0-.498.881l.03 1.781a2 2 0 0 1-.268 1.034l-.065.113a2 2 0 0 1-.762.748l-1.555.862a1 1 0 0 0-.516.877l.008 3.152a1 1 0 0 0 .513.872l1.548.86a2 2 0 0 1 .763.755l.07.121a2 2 0 0 1 .264 1.027l-.03 1.773a1 1 0 0 0 .5.884l2.737 1.577a1 1 0 0 0 1.013-.009l1.52-.91a2 2 0 0 1 1.027-.283h.131a2 2 0 0 1 1.03.285l1.526.916a1 1 0 0 0 1.016.008l2.729-1.584a1 1 0 0 0 .497-.881l-.03-1.781a2 2 0 0 1 .268-1.034l.065-.113a2 2 0 0 1 .763-.749l1.555-.861a1 1 0 0 0 .515-.877l-.007-3.152a1 1 0 0 0-.514-.872l-1.551-.863a2 2 0 0 1-.76-.747Z",
    stroke: "#8787A2",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};
/* harmony default export */ const setting = (SvgSetting);
;// CONCATENATED MODULE: ./components/common/Icon/icons/toGoHome.svg
var toGoHome_path;
function toGoHome_extends() { toGoHome_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return toGoHome_extends.apply(this, arguments); }

var SvgToGoHome = function SvgToGoHome(props) {
  return /*#__PURE__*/external_react_.createElement("svg", toGoHome_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), toGoHome_path || (toGoHome_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m18.076 6.025-12.05 12.05M18.076 18.075 6.026 6.025",
    stroke: "#888",
    strokeWidth: 2,
    strokeLinecap: "round"
  })));
};
/* harmony default export */ const toGoHome = (SvgToGoHome);
;// CONCATENATED MODULE: ./components/common/Icon/icons/upArrow.svg
var upArrow_path;
function upArrow_extends() { upArrow_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return upArrow_extends.apply(this, arguments); }

var SvgUpArrow = function SvgUpArrow(props) {
  return /*#__PURE__*/external_react_.createElement("svg", upArrow_extends({
    width: 18,
    height: 10,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), upArrow_path || (upArrow_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m1 9 8-8 8 8",
    stroke: "#8787A2",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};
/* harmony default export */ const upArrow = (SvgUpArrow);
;// CONCATENATED MODULE: ./components/common/Icon/icons.ts









const ICONS = {
    check: check,
    downArrow: downArrow,
    leftArrow: leftArrow,
    rightArrow: rightArrow,
    setting: setting,
    toGoHome: toGoHome,
    upArrow: upArrow,
    logo: logo,
    reload: reload
};

;// CONCATENATED MODULE: ./components/common/Icon/index.tsx


const Icon = ({ size =22 , width , height , iconName , wrapperProps , ...rest })=>{
    const IconComponent = ICONS[iconName];
    return /*#__PURE__*/ jsx_runtime_.jsx("i", {
        ...wrapperProps,
        children: /*#__PURE__*/ jsx_runtime_.jsx(IconComponent, {
            ...rest,
            width: width || size,
            height: height || size
        })
    });
};


/***/ })

};
;