(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[411],{5602:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/onboarding",function(){return n(5854)}])},5854:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return b},default:function(){return j}});var r=n(5893),c=n(9864),a=n(7111),s=n(4616),i=n(828),u=n(4480),l=(0,u.xu)({key:"selectedCategoryId",default:0}),d=n(7294),o=function(e){var t=e.type,n=(0,d.useRef)(null),r=(0,i.Z)((0,u.FV)(l(t)),2),c=r[0],a=r[1];return{selectRef:n,handleSelect:function(){n.current&&a(+n.current.id)},selectedId:c}},f={default:"bg-gray-0",selected:"bg-gray-0 border-2 border-primary-default"},m=function(e){var t=e.id,n=e.name,c=o({type:"main"}),a=c.selectRef,i=c.handleSelect,u=t===c.selectedId?"selected":"default";return(0,r.jsxs)("li",{id:"".concat(t),ref:a,className:"flex justify-between items-center h-[5.6rem] rounded-[0.8rem] p-[1.6rem] mt-[1rem] ".concat(f[u]),onClick:i,children:[(0,r.jsx)("p",{className:"text-b1",children:n}),"selected"===u?(0,r.jsx)(s.J,{width:18,height:14,iconName:"check"}):(0,r.jsx)("div",{className:"w-[1.8rem] h-[1.4rem]"})]})},h=function(e){var t=e.categories;return(0,r.jsx)("ul",{className:"mt-[4rem]",children:t.map((function(e,t){return(0,r.jsx)(m,{id:e.id,name:e.name},t)}))})},x=n(1280),p=n(8934),y=n(1163),_=function(e){var t=e.type,n=(0,u.sJ)(l(t)),r=(0,y.useRouter)();return{handleClick:function(){r.push("".concat(r.asPath,"/").concat(n))},isDisabled:0===n}},b=!0,j=function(){var e=(0,p.a)({queryKey:["mainCategories"],queryFn:x.ij}),t=e.data,n=e.isSuccess,s=_({type:"main"}),i=s.handleClick,u=s.isDisabled;return(0,r.jsxs)("div",{className:"h-full",children:[(0,r.jsx)("h1",{className:"text-h2 text-gray-800 text-center pt-[8rem]",children:"\ud76c\ub9dd\ud558\ub294 \uc9c1\ubb34\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694"}),n&&(0,r.jsx)(h,{categories:t}),(0,r.jsx)(a.D,{children:(0,r.jsx)(c.z,{onClick:i,buttonType:"primary",buttonText:"\uc791\uc131 \uc644\ub8cc",isDisabled:u})})]})}}},function(e){e.O(0,[800,137,774,888,179],(function(){return t=5602,e(e.s=t);var t}));var t=e.O();_N_E=t}]);