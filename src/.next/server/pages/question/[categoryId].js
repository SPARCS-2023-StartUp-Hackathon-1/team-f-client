"use strict";
(() => {
var exports = {};
exports.id = 131;
exports.ids = [131];
exports.modules = {

/***/ 4846:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_question_atom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5411);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_AIBubble__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4046);
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2172);
/* harmony import */ var _common_Chip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7432);
/* harmony import */ var _common_GNB__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(556);
/* harmony import */ var _common_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5359);
/* harmony import */ var _common_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4154);
/* harmony import */ var _common_UserBubble__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4793);
/* harmony import */ var _hooks_queries_useAnswerById__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4483);
/* harmony import */ var _hooks_queries_useTailQuestionByIdQuery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7051);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_queries_useAnswerById__WEBPACK_IMPORTED_MODULE_11__, _hooks_queries_useTailQuestionByIdQuery__WEBPACK_IMPORTED_MODULE_12__]);
([_hooks_queries_useAnswerById__WEBPACK_IMPORTED_MODULE_11__, _hooks_queries_useTailQuestionByIdQuery__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const TailQuestion = ({ id  })=>{
    const [order, setOrder] = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_store_question_atom__WEBPACK_IMPORTED_MODULE_2__/* .questionOrderAtom */ .ZE);
    const [mark, setMark] = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_store_question_atom__WEBPACK_IMPORTED_MODULE_2__/* .questionMarkAtom */ .CO);
    const setQuestion = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState)((0,_store_question_atom__WEBPACK_IMPORTED_MODULE_2__/* .questionAtomFamily */ .fw)(order));
    const { data: tailQuestionData , isSuccess: tailQuestionIsSuccess  } = (0,_hooks_queries_useTailQuestionByIdQuery__WEBPACK_IMPORTED_MODULE_12__/* .useTailQuestionById */ .U)(id);
    const [tailQuestion, setTailQuestion] = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)((0,_store_question_atom__WEBPACK_IMPORTED_MODULE_2__/* .tailQuestionAtomFamily */ .Y$)(tailQuestionData?.id));
    const [tailQuestionIds, setTailQuestionIds] = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)((0,_store_question_atom__WEBPACK_IMPORTED_MODULE_2__/* .tailQuestionIdAtomFamily */ .DN)(order));
    const { data: aiAnswerData , isSuccess: aiAnswerIsSuccess  } = (0,_hooks_queries_useAnswerById__WEBPACK_IMPORTED_MODULE_11__/* .useAnswerById */ .$)(tailQuestionData?.id);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (aiAnswerIsSuccess) setTailQuestion((prev)=>({
                ...prev,
                aiAnswer: aiAnswerData.answer
            }));
    }, []);
    const handleChange = (e)=>{
        setTailQuestion((prev)=>({
                ...prev,
                userAnswer: {
                    isAnswer: false,
                    answer: e.target.value
                }
            }));
    };
    const isUserAnswer = tailQuestion.userAnswer.isAnswer;
    const isDisabled = tailQuestion.userAnswer.answer === "" && !isUserAnswer;
    const tailIsDisabled = tailQuestionIds.length >= 3;
    const handleTailButtonClick = ()=>{
        if (tailQuestionIsSuccess && !tailIsDisabled) setTailQuestionIds((prev)=>[
                ...prev,
                tailQuestionData.id
            ]);
    };
    const handleNextButtonClick = ()=>{
        setOrder(mark + 1);
        setMark((prev)=>prev + 1);
    };
    const handleAnswerButtonClick = ()=>{
        setTailQuestion((prev)=>({
                ...prev,
                userAnswer: {
                    isAnswer: true,
                    answer: prev.userAnswer.answer
                }
            }));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full",
        children: [
            tailQuestionIsSuccess && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_AIBubble__WEBPACK_IMPORTED_MODULE_4__/* .AIBubble */ .k, {
                questionChip: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Chip__WEBPACK_IMPORTED_MODULE_6__/* .Chip */ .A, {
                    text: "꼬리 질문",
                    chipType: "answer"
                }),
                question: tailQuestionData.question,
                answerChip: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Chip__WEBPACK_IMPORTED_MODULE_6__/* .Chip */ .A, {
                    text: "AI 답변",
                    chipType: "default"
                }),
                answer: isUserAnswer ? tailQuestion.aiAnswer : ""
            }, tailQuestionData?.id),
            !isUserAnswer && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Input__WEBPACK_IMPORTED_MODULE_9__/* .Input */ .I, {
                value: tailQuestion.userAnswer.answer,
                onChange: handleChange
            }),
            isUserAnswer && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_UserBubble__WEBPACK_IMPORTED_MODULE_10__/* .UserBubble */ .T, {
                answer: tailQuestion.userAnswer.answer
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_GNB__WEBPACK_IMPORTED_MODULE_7__/* .GNB */ .D, {
                children: isUserAnswer ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid grid-cols-[0.8fr_0.2fr] gap-[1rem]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                            onClick: handleTailButtonClick,
                            buttonType: "primary",
                            buttonText: "꼬리 질문",
                            isDisabled: tailIsDisabled
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                            onClick: handleNextButtonClick,
                            buttonType: "sub",
                            buttonIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_8__/* .Icon */ .J, {
                                iconName: "rightArrow",
                                size: 24
                            })
                        })
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                    onClick: handleAnswerButtonClick,
                    buttonType: "primary",
                    buttonText: "작성 완료",
                    isDisabled: isDisabled
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TailQuestion);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6673:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8928);
/* harmony import */ var _common_AIBubble__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4046);
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2172);
/* harmony import */ var _common_Chip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7432);
/* harmony import */ var _common_GNB__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(556);
/* harmony import */ var _common_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5359);
/* harmony import */ var _common_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4154);
/* harmony import */ var _common_pageMark__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1493);
/* harmony import */ var _TailQuestion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4846);
/* harmony import */ var _common_UserBubble__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4793);
/* harmony import */ var _hooks_queries_useAnswerById__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4483);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TailQuestion__WEBPACK_IMPORTED_MODULE_10__, _hooks_queries_useAnswerById__WEBPACK_IMPORTED_MODULE_12__]);
([_TailQuestion__WEBPACK_IMPORTED_MODULE_10__, _hooks_queries_useAnswerById__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const Question = ()=>{
    const [order, setOrder] = (0,recoil__WEBPACK_IMPORTED_MODULE_13__.useRecoilState)(_store_question__WEBPACK_IMPORTED_MODULE_2__/* .questionOrderAtom */ .ZE);
    const [mark, setMark] = (0,recoil__WEBPACK_IMPORTED_MODULE_13__.useRecoilState)(_store_question__WEBPACK_IMPORTED_MODULE_2__/* .questionMarkAtom */ .CO);
    const [question, setQuestion] = (0,recoil__WEBPACK_IMPORTED_MODULE_13__.useRecoilState)((0,_store_question__WEBPACK_IMPORTED_MODULE_2__/* .questionAtomFamily */ .fw)(order));
    const [tailQuestionIds, setTailQuestionIds] = (0,recoil__WEBPACK_IMPORTED_MODULE_13__.useRecoilState)((0,_store_question__WEBPACK_IMPORTED_MODULE_2__/* .tailQuestionIdAtomFamily */ .DN)(order));
    const { data: aiAnswerData , isSuccess: aiAnswerIsSuccess  } = (0,_hooks_queries_useAnswerById__WEBPACK_IMPORTED_MODULE_12__/* .useAnswerById */ .$)(question.basicQuestion.id);
    const isUserAnswer = question.userAnswer.isAnswer;
    const isDisabled = question.userAnswer.answer === "" && !isUserAnswer;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (aiAnswerIsSuccess) setQuestion((prev)=>({
                ...prev,
                aiAnswer: aiAnswerData.answer
            }));
    }, [
        aiAnswerIsSuccess
    ]);
    const handleAnswerInput = (e)=>{
        setQuestion((prev)=>({
                ...prev,
                userAnswer: {
                    isAnswer: prev.userAnswer.isAnswer,
                    answer: e.target.value
                }
            }));
    };
    const handleAnswerButtonClick = ()=>{
        setQuestion((prev)=>({
                ...prev,
                userAnswer: {
                    isAnswer: true,
                    answer: prev.userAnswer.answer
                }
            }));
    };
    const handleTailButtonClick = ()=>{
        setQuestion((prev)=>({
                ...prev,
                isTailQuestion: true
            }));
    };
    const handleNextButtonClick = ()=>{
        setOrder(mark + 1);
        setMark((prev)=>prev + 1);
    };
    const handleOrderClick = (index)=>{
        setOrder(index + 1);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "h-full pb-[100px]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-[64px] flex items-center",
                children: Array(mark).fill(0).map((_, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "first:ml-0 ml-[0.8rem]",
                        onClick: ()=>handleOrderClick(index),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_pageMark__WEBPACK_IMPORTED_MODULE_9__/* .PageMark */ .N, {
                            pageNumber: index + 1,
                            isActive: order === index + 1
                        })
                    }, index))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_AIBubble__WEBPACK_IMPORTED_MODULE_3__/* .AIBubble */ .k, {
                questionChip: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Chip__WEBPACK_IMPORTED_MODULE_5__/* .Chip */ .A, {
                    text: "일반 질문",
                    chipType: "default"
                }),
                question: question.basicQuestion.question,
                answerChip: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Chip__WEBPACK_IMPORTED_MODULE_5__/* .Chip */ .A, {
                    text: "AI 답변",
                    chipType: "default"
                }),
                answer: isUserAnswer ? question.aiAnswer : ""
            }),
            !isUserAnswer && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Input__WEBPACK_IMPORTED_MODULE_8__/* .Input */ .I, {
                value: question.userAnswer.answer,
                onChange: handleAnswerInput
            }),
            isUserAnswer && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_UserBubble__WEBPACK_IMPORTED_MODULE_11__/* .UserBubble */ .T, {
                answer: question.userAnswer.answer
            }),
            question.isTailQuestion && tailQuestionIds.map((id, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TailQuestion__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    id: id
                }, index)),
            !question.isTailQuestion && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_GNB__WEBPACK_IMPORTED_MODULE_6__/* .GNB */ .D, {
                children: isUserAnswer && !question.isTailQuestion ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex gap-[1rem]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                            onClick: handleTailButtonClick,
                            buttonType: "primary",
                            buttonText: "꼬리 질문"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                            onClick: handleNextButtonClick,
                            buttonType: "sub",
                            buttonIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_7__/* .Icon */ .J, {
                                iconName: "rightArrow",
                                size: 24
                            })
                        })
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                    onClick: handleAnswerButtonClick,
                    buttonType: "primary",
                    buttonText: "작성 완료",
                    isDisabled: isDisabled
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Question);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ AIBubble)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const AIBubble = ({ questionChip , question , answerChip , answer  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: answer ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex-col relative w-full mt-[20px]",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "break-all px-[16px] py-[24px] rounded-t-[8px] rounded-bl-[0px] rounded-br-[8px] w-full bg-gray-0 text-subtitle text-gray-700",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mb-[8px]",
                            children: questionChip
                        }),
                        question,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "h-[1px] bg-gray-100 my-[16px]"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mb-[8px]",
                            children: answerChip
                        }),
                        answer
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "absolute w-0 h-0 border-r-[15px] border-r-transparent border-t-[15px] border-t-gray-0 left-0 bottom-[-11px] "
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex-col relative w-full mt-[20px]",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "break-all px-[16px] py-[24px] rounded-t-[8px] rounded-bl-[0px] rounded-br-[8px] w-full bg-gray-0 text-subtitle text-gray-700",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mb-[8px]",
                            children: questionChip
                        }),
                        question
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "absolute w-0 h-0 border-r-[15px] border-r-transparent border-t-[15px] border-t-gray-0 left-0 bottom-[-11px] "
                })
            ]
        })
    });
};


/***/ }),

/***/ 7432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Chip)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const CHIP_COLOR = {
    question: "bg-secondary-default text-gray-0",
    answer: "bg-primary-default text-gray-0",
    default: "bg-gray-50 text-gray-300"
};
const Chip = ({ text , chipType  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `w-fit px-[8px] py-[4px] rounded-[80px] text-caption ${CHIP_COLOR[chipType]}`,
        children: text
    });
};


/***/ }),

/***/ 4736:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2172);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5359);
/* harmony import */ var _hooks_useModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9666);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useModal__WEBPACK_IMPORTED_MODULE_3__]);
_hooks_useModal__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Header = ({ headerTitle  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { openModal , close  } = (0,_hooks_useModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const openModalBox = async ()=>{
        await openModal({
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-subtitle",
                        children: "면접 연습 나가기 "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-b1 text-gray-300 mt-[24px]",
                        children: "면접 연습을 나가겠습니까?"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-b1 text-gray-300 mt-[4px]",
                        children: "질문과 답변 내용은 기록되지 않습니다"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-2 w-full mt-[24px] gap-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .z, {
                                buttonType: "gray",
                                onClick: ()=>{
                                    close();
                                },
                                buttonText: "취소"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .z, {
                                buttonType: "red",
                                onClick: ()=>{
                                    router.push("/onboarding");
                                },
                                buttonText: "끝내기"
                            })
                        ]
                    })
                ]
            })
        });
    };
    const onClick = ()=>{
        openModalBox();
    // TODO: home으로 라우팅
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full bg-gray-50 flex pl-[6px] h-[48px] items-center pr-[46px]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "cursor-pointer",
                onClick: onClick,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_2__/* .Icon */ .J, {
                    iconName: "toGoHome"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-b1 m-auto",
                children: headerTitle
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Input = ({ onChange , value  })=>{
    const { 0: isClicked , 1: setIsClicked  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const onFocus = ()=>{
        setIsClicked(true);
    };
    const onBlur = ()=>{
        setIsClicked(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex-col relative w-full mt-[20px]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                value: value,
                id: "input",
                onFocus: onFocus,
                onBlur: onBlur,
                onChange: onChange,
                placeholder: "답변을 작성해주세요",
                className: "resize-none h-[112px] scrollbar-hide px-[16px] py-[24px] rounded-t-[8px] rounded-bl-[8px] rounded-br-[0px] w-full bg-gray-100 text-subtitle text-gray-700 placeholder:text-subtitle placeholder:text-gray-300 focus:outline-none focus:ring-gray-200 focus:ring-[2px] no-scrollbar "
            }),
            isClicked === false ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "absolute w-0 h-0 border-l-[15px] border-l-transparent border-t-[15px] border-t-gray-100 right-0 bottom-[-11px] "
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-0 h-0 before:border-l-[18px] before:border-l-transparent before:border-t-[18px] before:border-t-gray-200 before:right-[-2px] before:absolute before:bottom-[-15px] after:border-l-[14px] after:border-l-transparent after:border-t-[15px] after:border-t-gray-100 after:right-0 after:absolute after:bottom-[-11px] "
                })
            })
        ]
    });
};


/***/ }),

/***/ 917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Modal({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "z-10 relative p-[16px] rounded-[8px] align-middle text-center m-auto w-[322px] bg-gray-0",
        children: children
    });
}


/***/ }),

/***/ 4793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ UserBubble)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const UserBubble = ({ answer  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex-col relative w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "break-all px-[16px] py-[24px] rounded-t-[8px] rounded-bl-[8px] rounded-br-[0px] w-full bg-primary-default text-subtitle text-gray-0 mt-[20px]",
                children: answer
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute w-0 h-0 border-l-[15px] border-l-transparent border-t-[15px] border-t-primary-default right-0 bottom-[-11px] "
            })
        ]
    });
};


/***/ }),

/***/ 1493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ PageMark)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PageMark = ({ pageNumber , isActive  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `flex w-[36px] h-[36px] text-b2 items-center justify-center ${isActive ? "text-primary-default border-2 border-primary-default rounded-[50%] bg-gray-0" : "text-gray-300 bg-gray-0 rounded-[50%]"}`,
        children: pageNumber
    });
};


/***/ }),

/***/ 4483:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ useAnswerById)
/* harmony export */ });
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(678);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apis__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__]);
([_apis__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const useAnswerById = (questionId)=>{
    const defaultQuestion = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: [
            "answer",
            questionId
        ],
        queryFn: ()=>(0,_apis__WEBPACK_IMPORTED_MODULE_0__/* .getAnswerById */ .p)(questionId),
        enabled: !!questionId
    });
    return defaultQuestion;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 857:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ useDefaultQuestionQuery)
/* harmony export */ });
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(678);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apis__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__]);
([_apis__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const useDefaultQuestionQuery = (midCategoryId)=>{
    const defaultQuestion = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: [
            "defaultQuestion"
        ],
        queryFn: ()=>(0,_apis__WEBPACK_IMPORTED_MODULE_0__/* .getDefaultQuestion */ .U3)(midCategoryId),
        enabled: !!midCategoryId
    });
    return defaultQuestion;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8605:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useMidCategoryByIdQuery)
/* harmony export */ });
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(678);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apis__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__]);
([_apis__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const useMidCategoryByIdQuery = (midCategoryId)=>{
    const midCategoryByIdQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: [
            "midCategoryById",
            midCategoryId
        ],
        queryFn: ()=>(0,_apis__WEBPACK_IMPORTED_MODULE_0__/* .getMidCategoryById */ .k0)(midCategoryId),
        enabled: !!midCategoryId
    });
    return midCategoryByIdQuery;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7051:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ useTailQuestionById)
/* harmony export */ });
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(678);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apis__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__]);
([_apis__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const useTailQuestionById = (questionId)=>{
    const TailQuestion = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: [
            "tailQuestion",
            questionId
        ],
        queryFn: ()=>(0,_apis__WEBPACK_IMPORTED_MODULE_0__/* .getTailQuestionById */ .BI)(questionId),
        enabled: !!questionId
    });
    return TailQuestion;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9666:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export useModal */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(917);
/* harmony import */ var _toss_use_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_toss_use_overlay__WEBPACK_IMPORTED_MODULE_2__]);
_toss_use_overlay__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function useModal() {
    const overlay = (0,_toss_use_overlay__WEBPACK_IMPORTED_MODULE_2__.useOverlay)();
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const openModal = (props)=>new Promise((resolve)=>{
            overlay.open(({ isOpen , close  })=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: isOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            position: "fixed",
                            top: "0",
                            backgroundColor: "rgba(0, 0, 0, 0.5)"
                        },
                        className: "w-full flex h-full items-center",
                        ref: ref,
                        onClick: (e)=>{
                            {
                                e.target === ref.current ? close() : null;
                            }
                            resolve(false);
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Modal__WEBPACK_IMPORTED_MODULE_1__/* .Modal */ .u, {
                            ...props
                        })
                    }) : null
                });
            });
        });
    return {
        openModal,
        close: overlay.close
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2577:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8928);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_common_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4736);
/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6673);
/* harmony import */ var _hooks_queries_useDefaultQuestionQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(857);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_queries_useMidCategoryByIdQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8605);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_Header__WEBPACK_IMPORTED_MODULE_3__, _components_Question__WEBPACK_IMPORTED_MODULE_4__, _hooks_queries_useDefaultQuestionQuery__WEBPACK_IMPORTED_MODULE_5__, _hooks_queries_useMidCategoryByIdQuery__WEBPACK_IMPORTED_MODULE_7__]);
([_components_common_Header__WEBPACK_IMPORTED_MODULE_3__, _components_Question__WEBPACK_IMPORTED_MODULE_4__, _hooks_queries_useDefaultQuestionQuery__WEBPACK_IMPORTED_MODULE_5__, _hooks_queries_useMidCategoryByIdQuery__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









async function getServerSideProps({ params  }) {
    const categoryId = params.categoryId;
    return {
        props: {
            categoryId
        }
    };
}
const QuestionPage = ({ categoryId  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const midCategoryId = categoryId;
    const { data: midCategory , isSuccess: midCategoryIsSuccess  } = (0,_hooks_queries_useMidCategoryByIdQuery__WEBPACK_IMPORTED_MODULE_7__/* .useMidCategoryByIdQuery */ .F)(Number(midCategoryId));
    const { data: defaultQuestion , isSuccess: defaultQuestionIsSuccess , refetch: defaultQuestionRefetch , isRefetching: defaultQuestionIsRefetching ,  } = (0,_hooks_queries_useDefaultQuestionQuery__WEBPACK_IMPORTED_MODULE_5__/* .useDefaultQuestionQuery */ .l)(Number(midCategoryId));
    const order = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_store_question__WEBPACK_IMPORTED_MODULE_1__/* .questionOrderAtom */ .ZE);
    const mark = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_store_question__WEBPACK_IMPORTED_MODULE_1__/* .questionMarkAtom */ .CO);
    const [question, setQuestion] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)((0,_store_question__WEBPACK_IMPORTED_MODULE_1__/* .questionAtomFamily */ .fw)(order));
    const setTailQuestionIds = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState)((0,_store_question__WEBPACK_IMPORTED_MODULE_1__/* .tailQuestionIdAtomFamily */ .DN)(order));
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (mark === order) defaultQuestionRefetch();
    }, [
        order
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
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
            midCategoryIsSuccess && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Header__WEBPACK_IMPORTED_MODULE_3__/* .Header */ .h, {
                headerTitle: midCategory.name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Question__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionPage);

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

/***/ }),

/***/ 1999:
/***/ ((module) => {

module.exports = import("@toss/use-overlay");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172,796,10], () => (__webpack_exec__(2577)));
module.exports = __webpack_exports__;

})();