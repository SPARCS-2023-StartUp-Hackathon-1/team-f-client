"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[137],{1280:function(t,r,e){e.d(r,{BI:function(){return h},U3:function(){return c},ij:function(){return i},k0:function(){return u},l:function(){return s},p:function(){return l}});var n=e(7568),o=e(655),a=e(8945).Z.create({baseURL:"https://qtail.hackathon.sparcs.org/api/v1"}),i=function(){var t=(0,n.Z)((function(){var t;return(0,o.__generator)(this,(function(r){switch(r.label){case 0:return[4,a.get("/categories/main")];case 1:return t=r.sent(),[2,t.data.categories]}}))}));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)((function(t){var r;return(0,o.__generator)(this,(function(e){switch(e.label){case 0:return r=t.id,[4,a.get("/categories/mid",{params:{mainCategoryId:r}})];case 1:return[2,e.sent().data]}}))}));return function(r){return t.apply(this,arguments)}}(),u=function(){var t=(0,n.Z)((function(t){var r,e,n,i,s;return(0,o.__generator)(this,(function(o){switch(o.label){case 0:return[4,a.get("/categories/mid/".concat(t))];case 1:return r=o.sent(),e=r.data,n=e.id,i=e.name,s=e.imageUrl,[2,{id:n,name:i,imageUrl:s}]}}))}));return function(r){return t.apply(this,arguments)}}(),c=function(){var t=(0,n.Z)((function(t){var r,e,n,i;return(0,o.__generator)(this,(function(o){switch(o.label){case 0:return[4,a.get("/questions?midCategoryId=".concat(t))];case 1:return r=o.sent(),e=r.data,n=e.id,i=e.question,[2,{id:n,question:i}]}}))}));return function(r){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)((function(t){var r,e,n,i;return(0,o.__generator)(this,(function(o){switch(o.label){case 0:return[4,a.get("/questions/".concat(t,"/answer"))];case 1:return r=o.sent(),e=r.data,n=e.id,i=e.answer,[2,{id:n,answer:i}]}}))}));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)((function(t){var r,e,n,i;return(0,o.__generator)(this,(function(o){switch(o.label){case 0:return[4,a.get("/questions/".concat(t,"/tail"))];case 1:return r=o.sent(),e=r.data,n=e.id,i=e.question,[2,{id:n,question:i}]}}))}));return function(r){return t.apply(this,arguments)}}()},9864:function(t,r,e){e.d(r,{z:function(){return a}});var n=e(5893),o={extra:{none:"",default:"bg-[#EDEFFF] w-[6rem] h-[4rem] rounded-[0.57rem] text-b1 text-primary-default",hover:"",press:"",error:""},sub:{none:"",default:"bg-gray-200 w-[5.2rem] h-[5.2rem] rounded-[0.8rem] p-[1.6rem] text-gray-0 text-subtitle",hover:"bg-gray-400 w-[5.2rem] h-[5.2rem] rounded-[0.8rem] p-[1.6rem] text-gray-0 text-subtitle",press:"bg-gray-600",error:""},primary:{none:"bg-gray-100 h-[5.2rem] rounded-[0.8rem] p-[1.6rem] text-gray-400 text-subtitle",default:"bg-primary-default h-[5.2rem] rounded-[0.8rem] p-[1.6rem] text-gray-0 text-subtitle",hover:"bg-primary-hover h-[5.2rem] rounded-[0.8rem] p-[1.6rem] text-gray-0 text-subtitle",press:"bg-primary-press",error:"bg-system-error h-[5.6rem] rounded-[0.8rem] p-[1.6rem] text-gray-0 text-subtitle"},gray:{none:"",default:"bg-gray-200 h-[5.2rem] rounded-[0.8rem] p-[1.6rem] text-gray-0 text-subtitle",hover:"bg-gray-400 h-[5.2rem] rounded-[0.8rem] p-[1.6rem] text-gray-0 text-subtitle",press:"bg-gray-600",error:""},red:{none:"",default:"bg-system-error h-[5.6rem] rounded-[0.8rem] p-[1.6rem] text-gray-0 text-subtitle",hover:"",press:"",error:""}},a=function(t){var r=t.onClick,e=t.buttonText,a=t.buttonType,i=t.buttonIcon,s=t.isDisabled;return(0,n.jsx)(n.Fragment,{children:s?(0,n.jsx)("input",{type:"button",value:e,disabled:!0,className:"".concat(o[a].none," w-full")}):(0,n.jsx)("button",{onClick:r,className:"".concat(o[a].default," active:").concat(o[a].press," w-full"),children:e||i})})}},7111:function(t,r,e){e.d(r,{D:function(){return o}});var n=e(5893),o=function(t){var r=t.children;return(0,n.jsx)("nav",{className:"fixed bottom-0 left-0 w-full p-[1.6rem] bg-gray-0",children:(0,n.jsx)("div",{className:"",children:r})})}},4616:function(t,r,e){e.d(r,{J:function(){return _}});var n,o=e(1799),a=e(9396),i=e(9534),s=e(5893),u=e(7294);function c(){return c=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},c.apply(this,arguments)}var l;function h(){return h=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},h.apply(this,arguments)}var d;function p(){return p=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},p.apply(this,arguments)}var f;function g(){return g=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},g.apply(this,arguments)}var m,v,b;function w(){return w=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},w.apply(this,arguments)}var y;function k(){return k=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},k.apply(this,arguments)}var j,x;function O(){return O=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},O.apply(this,arguments)}var Z;function E(){return E=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},E.apply(this,arguments)}var L;function A(){return A=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},A.apply(this,arguments)}var C={check:function(t){return u.createElement("svg",c({width:16,height:12,fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),n||(n=u.createElement("path",{d:"m1.25 5.25 4.875 4.875L14.75 1.5",stroke:"#4F61FF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))},downArrow:function(t){return u.createElement("svg",h({width:18,height:10,fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),l||(l=u.createElement("path",{d:"M17 1 9 9 1 1",stroke:"#8787A2",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))},leftArrow:function(t){return u.createElement("svg",p({width:10,height:18,fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),d||(d=u.createElement("path",{d:"M9 17 1 9l8-8",stroke:"#8787A2",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))},rightArrow:function(t){return u.createElement("svg",k({width:24,height:24,viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),y||(y=u.createElement("path",{d:"m8 19 7-7-7-7",stroke:"#9CA7C0",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))},setting:function(t){return u.createElement("svg",O({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),j||(j=u.createElement("path",{d:"M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",stroke:"#8787A2",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),x||(x=u.createElement("path",{d:"m19.167 7.94-.066-.114a2 2 0 0 1-.268-1.034l.03-1.779a1 1 0 0 0-.5-.883l-2.737-1.577a1 1 0 0 0-1.013.009l-1.519.91a2 2 0 0 1-1.027.283h-.132a2 2 0 0 1-1.03-.285L9.38 2.554a1 1 0 0 0-1.016-.008L5.635 4.13a1 1 0 0 0-.498.881l.03 1.781a2 2 0 0 1-.268 1.034l-.065.113a2 2 0 0 1-.762.748l-1.555.862a1 1 0 0 0-.516.877l.008 3.152a1 1 0 0 0 .513.872l1.548.86a2 2 0 0 1 .763.755l.07.121a2 2 0 0 1 .264 1.027l-.03 1.773a1 1 0 0 0 .5.884l2.737 1.577a1 1 0 0 0 1.013-.009l1.52-.91a2 2 0 0 1 1.027-.283h.131a2 2 0 0 1 1.03.285l1.526.916a1 1 0 0 0 1.016.008l2.729-1.584a1 1 0 0 0 .497-.881l-.03-1.781a2 2 0 0 1 .268-1.034l.065-.113a2 2 0 0 1 .763-.749l1.555-.861a1 1 0 0 0 .515-.877l-.007-3.152a1 1 0 0 0-.514-.872l-1.551-.863a2 2 0 0 1-.76-.747Z",stroke:"#8787A2",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))},toGoHome:function(t){return u.createElement("svg",E({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),Z||(Z=u.createElement("path",{d:"m18.076 6.025-12.05 12.05M18.076 18.075 6.026 6.025",stroke:"#888",strokeWidth:2,strokeLinecap:"round"})))},upArrow:function(t){return u.createElement("svg",A({width:18,height:10,fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),L||(L=u.createElement("path",{d:"m1 9 8-8 8 8",stroke:"#8787A2",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))},logo:function(t){return u.createElement("svg",g({width:41,height:15,fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),f||(f=u.createElement("path",{d:"M13.644 7.7c0-3.708-2.934-6.552-6.552-6.552C3.474 1.148.54 3.992.54 7.7c0 3.708 2.934 6.552 6.552 6.552 1.062 0 2.07-.252 2.952-.684l1.35 1.422 2.07-1.836-1.26-1.332a6.514 6.514 0 0 0 1.44-4.122Zm-6.552 3.744C5.04 11.444 3.42 9.95 3.42 7.7s1.62-3.744 3.672-3.744S10.764 5.45 10.764 7.7a4.11 4.11 0 0 1-.522 2.034L8.226 7.592l-2.07 1.836 1.818 1.926c-.288.054-.576.09-.882.09ZM22.843 1.4h-9.36v2.772h3.24V14h2.88V4.172h3.24V1.4ZM28.68 5v.846c-.594-.684-1.476-1.098-2.682-1.098-2.358 0-4.302 2.07-4.302 4.752s1.944 4.752 4.302 4.752c1.206 0 2.088-.414 2.682-1.098V14h2.7V5h-2.7Zm-2.142 6.696c-1.242 0-2.142-.846-2.142-2.196s.9-2.196 2.142-2.196S28.68 8.15 28.68 9.5s-.9 2.196-2.142 2.196ZM34.461 4.208c.882 0 1.62-.738 1.62-1.62 0-.882-.738-1.62-1.62-1.62-.882 0-1.62.738-1.62 1.62 0 .882.738 1.62 1.62 1.62ZM33.111 14h2.7V5h-2.7v9ZM37.537 14h2.7V.86h-2.7V14Z",fill:"#5445FF"})))},reload:function(t){return u.createElement("svg",w({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),m||(m=u.createElement("path",{d:"M10 16H5v5",stroke:"#9CA7C0",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),v||(v=u.createElement("path",{d:"M19.418 14.997a8 8 0 0 1-14.332 1.027M14 8h5V3",stroke:"#9CA7C0",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),b||(b=u.createElement("path",{d:"M4.583 9.003a8 8 0 0 1 14.331-1.027",stroke:"#9CA7C0",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}},_=function(t){var r=t.size,e=void 0===r?22:r,n=t.width,u=t.height,c=t.iconName,l=t.wrapperProps,h=(0,i.Z)(t,["size","width","height","iconName","wrapperProps"]),d=C[c];return(0,s.jsx)("i",(0,a.Z)((0,o.Z)({},l),{children:(0,s.jsx)(d,(0,a.Z)((0,o.Z)({},h),{width:n||e,height:u||e}))}))}},943:function(t,r,e){function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}e.d(r,{Z:function(){return n}})},3375:function(t,r,e){function n(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}e.d(r,{Z:function(){return n}})},828:function(t,r,e){e.d(r,{Z:function(){return a}});var n=e(3375);var o=e(1566);function a(t,r){return function(t){if(Array.isArray(t))return t}(t)||(0,n.Z)(t,r)||(0,o.Z)(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1566:function(t,r,e){e.d(r,{Z:function(){return o}});var n=e(943);function o(t,r){if(t){if("string"===typeof t)return(0,n.Z)(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?(0,n.Z)(t,r):void 0}}}}]);