(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[131],{5375:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/question/[categoryId]",function(){return n(8122)}])},8122:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return V}});var t=n(9722),s=n(169),i=n(4246),a=n(9853),u=n(3842),o=n(9312),l=n(2172),c=n(5359);function d(e){var r=e.children;return(0,i.jsx)("div",{className:"z-10 relative p-[16px] rounded-[8px] align-middle text-center m-auto w-[322px] bg-gray-0",children:r})}var x=n(1563),f=n(7378),p=n(6079),b=(0,f.forwardRef)((function(e,r){var n=e.overlayElement,t=e.onExit,s=(0,f.useState)(!1),a=(0,x.ZQ)(s,2),u=a[0],o=a[1],l=(0,f.useCallback)((function(){return o(!1)}),[]);return(0,f.useImperativeHandle)(r,(function(){return{close:l}}),[l]),(0,f.useEffect)((function(){requestAnimationFrame((function(){o(!0)}))}),[]),(0,i.jsx)(n,{isOpen:u,close:l,exit:t})})),m=1;var v=function(){var e=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).exitOnUnmount,r=void 0===e||e,n=(0,f.useContext)(p.i);if(null==n)throw new Error("useOverlay is only available within OverlayProvider.");var t=n.mount,s=n.unmount,a=(0,f.useState)((function(){return String(m++)})),u=(0,x.ZQ)(a,1)[0],o=(0,f.useRef)(null);return(0,f.useEffect)((function(){return function(){r&&s(u)}}),[r,u,s]),(0,f.useMemo)((function(){return{open:function(e){t(u,(0,i.jsx)(b,{ref:o,overlayElement:e,onExit:function(){s(u)}},Date.now()))},close:function(){var e;null===(e=o.current)||void 0===e||e.close()},exit:function(){s(u)}}}),[u,t,s])}(),r=(0,f.useRef)(null);return{openModal:function(n){return new Promise((function(s){e.open((function(e){var a=e.isOpen,u=e.close;return(0,i.jsx)(i.Fragment,{children:a?(0,i.jsx)("div",{style:{position:"fixed",top:"0",backgroundColor:"rgba(0, 0, 0, 0.5)"},className:"w-full flex h-full items-center",ref:r,onClick:function(e){e.target===r.current&&u(),s(!1)},children:(0,i.jsx)(d,(0,t.Z)({},n))}):null})}))}))},close:e.close}},w=n(6677),h=function(e){var r=e.headerTitle,n=(0,w.useRouter)(),t=v(),s=t.openModal,a=t.close,d=function(){var e=(0,u.Z)((function(){return(0,o.__generator)(this,(function(e){switch(e.label){case 0:return[4,s({children:(0,i.jsxs)("div",{className:"w-full",children:[(0,i.jsx)("div",{className:"text-subtitle",children:"\uba74\uc811 \uc5f0\uc2b5 \ub098\uac00\uae30 "}),(0,i.jsx)("div",{className:"text-b1 text-gray-300 mt-[24px]",children:"\uba74\uc811 \uc5f0\uc2b5\uc744 \ub098\uac00\uaca0\uc2b5\ub2c8\uae4c?"}),(0,i.jsx)("div",{className:"text-b1 text-gray-300 mt-[4px]",children:"\uc9c8\ubb38\uacfc \ub2f5\ubcc0 \ub0b4\uc6a9\uc740 \uae30\ub85d\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"}),(0,i.jsxs)("div",{className:"grid grid-cols-2 w-full mt-[24px] gap-4",children:[(0,i.jsx)(l.z,{buttonType:"gray",onClick:function(){a()},buttonText:"\ucde8\uc18c"}),(0,i.jsx)(l.z,{buttonType:"red",onClick:function(){n.push("/onboarding")},buttonText:"\ub05d\ub0b4\uae30"})]})]})})];case 1:return e.sent(),[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,i.jsxs)("div",{className:"w-full bg-gray-50 flex pl-[6px] h-[48px] items-center pr-[46px]",children:[(0,i.jsx)("div",{className:"cursor-pointer",onClick:function(){d()},children:(0,i.jsx)(c.J,{iconName:"toGoHome"})}),(0,i.jsx)("div",{className:"text-b1 m-auto",children:r})]})},y=n(2050),g=n(678),j=n(739),N=function(e){return(0,j.a)({queryKey:["answer",e],queryFn:function(){return(0,g.p)(e)},enabled:!!e})},Z=n(8928),A=function(e){var r=e.questionChip,n=e.question,t=e.answerChip,s=e.answer;return(0,i.jsx)(i.Fragment,{children:s?(0,i.jsxs)("div",{className:"flex-col relative w-full mt-[20px]",children:[(0,i.jsxs)("div",{className:"break-all px-[16px] py-[24px] rounded-t-[8px] rounded-bl-[0px] rounded-br-[8px] w-full bg-gray-0 text-subtitle text-gray-700",children:[(0,i.jsx)("div",{className:"mb-[8px]",children:r}),n,(0,i.jsx)("div",{className:"h-[1px] bg-gray-100 my-[16px]"}),(0,i.jsx)("div",{className:"mb-[8px]",children:t}),s]}),(0,i.jsx)("div",{className:"absolute w-0 h-0 border-r-[15px] border-r-transparent border-t-[15px] border-t-gray-0 left-0 bottom-[-11px] "})]}):(0,i.jsxs)("div",{className:"flex-col relative w-full mt-[20px]",children:[(0,i.jsxs)("div",{className:"break-all px-[16px] py-[24px] rounded-t-[8px] rounded-bl-[0px] rounded-br-[8px] w-full bg-gray-0 text-subtitle text-gray-700",children:[(0,i.jsx)("div",{className:"mb-[8px]",children:r}),n]}),(0,i.jsx)("div",{className:"absolute w-0 h-0 border-r-[15px] border-r-transparent border-t-[15px] border-t-gray-0 left-0 bottom-[-11px] "})]})})},C={question:"bg-secondary-default text-gray-0",answer:"bg-primary-default text-gray-0",default:"bg-gray-50 text-gray-300"},T=function(e){var r=e.text,n=e.chipType;return(0,i.jsx)("div",{className:"w-fit px-[8px] py-[4px] rounded-[80px] text-caption ".concat(C[n]),children:r})},q=n(556),k=function(e){var r=e.onChange,n=e.value,t=(0,f.useState)(!1),s=t[0],a=t[1];return(0,i.jsxs)("div",{className:"flex-col relative w-full mt-[20px]",children:[(0,i.jsx)("textarea",{value:n,id:"input",onFocus:function(){a(!0)},onBlur:function(){a(!1)},onChange:r,placeholder:"\ub2f5\ubcc0\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694",className:"resize-none h-[112px] scrollbar-hide px-[16px] py-[24px] rounded-t-[8px] rounded-bl-[8px] rounded-br-[0px] w-full bg-gray-100 text-subtitle text-gray-700 placeholder:text-subtitle placeholder:text-gray-300 focus:outline-none focus:ring-gray-200 focus:ring-[2px] no-scrollbar "}),!1===s?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"absolute w-0 h-0 border-l-[15px] border-l-transparent border-t-[15px] border-t-gray-100 right-0 bottom-[-11px] "})}):(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"w-0 h-0 before:border-l-[18px] before:border-l-transparent before:border-t-[18px] before:border-t-gray-200 before:right-[-2px] before:absolute before:bottom-[-15px] after:border-l-[14px] after:border-l-transparent after:border-t-[15px] after:border-t-gray-100 after:right-0 after:absolute after:bottom-[-11px] "})})]})},E=function(e){var r=e.pageNumber,n=e.isActive;return(0,i.jsx)("div",{className:"flex w-[36px] h-[36px] text-b2 items-center justify-center ".concat(n?"text-primary-default border-2 border-primary-default rounded-[50%] bg-gray-0":"text-gray-300 bg-gray-0 rounded-[50%]"),children:r})},F=function(e){var r=e.answer;return(0,i.jsxs)("div",{className:"flex-col relative w-full",children:[(0,i.jsx)("div",{className:"break-all px-[16px] py-[24px] rounded-t-[8px] rounded-bl-[8px] rounded-br-[0px] w-full bg-primary-default text-subtitle text-gray-0 mt-[20px]",children:r}),(0,i.jsx)("div",{className:"absolute w-0 h-0 border-l-[15px] border-l-transparent border-t-[15px] border-t-primary-default right-0 bottom-[-11px] "})]})},_=n(719);var z=n(2126);var I=n(2164);function Q(e){return function(e){if(Array.isArray(e))return(0,_.Z)(e)}(e)||(0,z.Z)(e)||(0,I.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var O=n(5411),S=function(e){var r,n=e.id,u=(0,y.Z)((0,a.FV)(O.ZE),2),o=u[0],d=u[1],x=(0,y.Z)((0,a.FV)(O.CO),2),p=x[0],b=x[1],m=((0,a.Zl)((0,O.fw)(o)),r=n,(0,j.a)({queryKey:["tailQuestion",r],queryFn:function(){return(0,g.BI)(r)},enabled:!!r})),v=m.data,w=m.isSuccess,h=(0,y.Z)((0,a.FV)((0,O.Y$)(null===v||void 0===v?void 0:v.id)),2),Z=h[0],C=h[1],E=(0,y.Z)((0,a.FV)((0,O.DN)(o)),2),_=(E[0],E[1]),z=N(null===v||void 0===v?void 0:v.id),I=z.data,S=z.isSuccess;(0,f.useEffect)((function(){S&&C((function(e){return(0,s.Z)((0,t.Z)({},e),{aiAnswer:I.answer})}))}),[]);var D=Z.userAnswer.isAnswer,V=""===Z.userAnswer.answer&&!D;return(0,i.jsxs)("div",{className:"w-full",children:[w&&(0,i.jsx)(A,{questionChip:(0,i.jsx)(T,{text:"\uaf2c\ub9ac \uc9c8\ubb38",chipType:"answer"}),question:v.question,answerChip:(0,i.jsx)(T,{text:"AI \ub2f5\ubcc0",chipType:"default"}),answer:D?Z.aiAnswer:""},null===v||void 0===v?void 0:v.id),!D&&(0,i.jsx)(k,{value:Z.userAnswer.answer,onChange:function(e){C((function(r){return(0,s.Z)((0,t.Z)({},r),{userAnswer:{isAnswer:!1,answer:e.target.value}})}))}}),D&&(0,i.jsx)(F,{answer:Z.userAnswer.answer}),(0,i.jsx)(q.D,{children:D?(0,i.jsxs)("div",{className:"grid grid-cols-[0.8fr_0.2fr] gap-[1rem]",children:[(0,i.jsx)(l.z,{onClick:function(){w&&_((function(e){return Q(e).concat([v.id])}))},buttonType:"primary",buttonText:"\uaf2c\ub9ac \uc9c8\ubb38"}),(0,i.jsx)(l.z,{onClick:function(){d(p+1),b((function(e){return e+1}))},buttonType:"sub",buttonIcon:(0,i.jsx)(c.J,{iconName:"rightArrow",size:24})})]}):(0,i.jsx)(l.z,{onClick:function(){C((function(e){return(0,s.Z)((0,t.Z)({},e),{userAnswer:{isAnswer:!0,answer:e.userAnswer.answer}})}))},buttonType:"primary",buttonText:"\uc791\uc131 \uc644\ub8cc",isDisabled:V})})]})},D=function(){var e=(0,y.Z)((0,a.FV)(Z.ZE),2),r=e[0],n=e[1],u=(0,y.Z)((0,a.FV)(Z.CO),2),o=u[0],d=u[1],x=(0,y.Z)((0,a.FV)((0,Z.fw)(r)),2),p=x[0],b=x[1],m=(0,y.Z)((0,a.FV)((0,Z.DN)(r)),2),v=m[0],w=(m[1],N(p.basicQuestion.id)),h=w.data,g=w.isSuccess,j=p.userAnswer.isAnswer,C=""===p.userAnswer.answer&&!j;(0,f.useEffect)((function(){g&&b((function(e){return(0,s.Z)((0,t.Z)({},e),{aiAnswer:h.answer})}))}),[g]);return(0,i.jsxs)("div",{className:"h-full pb-[100px]",children:[(0,i.jsx)("div",{className:"h-[64px] flex items-center",children:Array(o).fill(0).map((function(e,t){return(0,i.jsx)("div",{className:"first:ml-0 ml-[0.8rem]",onClick:function(){return function(e){n(e+1)}(t)},children:(0,i.jsx)(E,{pageNumber:t+1,isActive:r===t+1})},t)}))}),(0,i.jsx)(A,{questionChip:(0,i.jsx)(T,{text:"\uc77c\ubc18 \uc9c8\ubb38",chipType:"default"}),question:p.basicQuestion.question,answerChip:(0,i.jsx)(T,{text:"AI \ub2f5\ubcc0",chipType:"default"}),answer:j?p.aiAnswer:""}),!j&&(0,i.jsx)(k,{value:p.userAnswer.answer,onChange:function(e){b((function(r){return(0,s.Z)((0,t.Z)({},r),{userAnswer:{isAnswer:r.userAnswer.isAnswer,answer:e.target.value}})}))}}),j&&(0,i.jsx)(F,{answer:p.userAnswer.answer}),p.isTailQuestion&&v.map((function(e,r){return(0,i.jsx)(S,{id:e},r)})),!p.isTailQuestion&&(0,i.jsx)(q.D,{children:j&&!p.isTailQuestion?(0,i.jsxs)("div",{className:"grid grid-cols-[0.8fr_0.2fr] gap-[1rem]",children:[(0,i.jsx)(l.z,{onClick:function(){b((function(e){return(0,s.Z)((0,t.Z)({},e),{isTailQuestion:!0})}))},buttonType:"primary",buttonText:"\uaf2c\ub9ac \uc9c8\ubb38"}),(0,i.jsx)(l.z,{onClick:function(){n(o+1),d((function(e){return e+1}))},buttonType:"sub",buttonIcon:(0,i.jsx)(c.J,{iconName:"rightArrow",size:24})})]}):(0,i.jsx)(l.z,{onClick:function(){b((function(e){return(0,s.Z)((0,t.Z)({},e),{userAnswer:{isAnswer:!0,answer:e.userAnswer.answer}})}))},buttonType:"primary",buttonText:"\uc791\uc131 \uc644\ub8cc",isDisabled:C})})]})},V=function(){var e,r=(0,w.useRouter)(),n=null===r||void 0===r||null===(e=r.query)||void 0===e?void 0:e.categoryId,u=function(e){return(0,j.a)({queryKey:["midCategoryById",e],queryFn:function(){return(0,g.k0)(e)},enabled:!!e})}(Number(n)),o=u.data,l=u.isSuccess,c=function(e){return(0,j.a)({queryKey:["defaultQuestion"],queryFn:function(){return(0,g.U3)(e)},enabled:!!e})}(Number(n)),d=c.data,x=c.isSuccess,p=c.refetch,b=c.isRefetching,m=(0,a.sJ)(Z.ZE),v=(0,a.sJ)(Z.CO),y=(0,a.Zl)((0,Z.fw)(m)),N=(0,a.Zl)((0,Z.DN)(m));return(0,f.useEffect)((function(){v===m&&p()}),[m]),(0,f.useEffect)((function(){x&&(y((function(e){return(0,s.Z)((0,t.Z)({},e),{basicQuestion:{id:d.id,question:d.question}})})),N([d.id]))}),[x,b]),(0,i.jsxs)("div",{className:"w-full",children:[l&&(0,i.jsx)(h,{headerTitle:o.name}),(0,i.jsx)(D,{})]})}}},function(e){e.O(0,[39,616,774,888,179],(function(){return r=5375,e(e.s=r);var r}));var r=e.O();_N_E=r}]);