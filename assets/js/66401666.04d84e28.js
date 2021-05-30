(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[778],{2122:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return r}})},9756:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,{Z:function(){return r}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),p=u(n),f=o,d=p["".concat(s,".").concat(f)]||p[f]||h[f]||i;return n?r.createElement(d,a(a({ref:e},l),{},{components:n})):r.createElement(d,a({ref:e},l))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1479:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s},default:function(){return l}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a={id:"introduction",title:"Introduction"},c={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"What is this?",source:"@site/../contents/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/introduction",editUrl:"https://github.com/yangshun/tech-interview-handbook/edit/master/contents/../contents/introduction.md",version:"current",lastUpdatedBy:"Yangshun Tay",lastUpdatedAt:1563182749,formattedLastUpdatedAt:"7/15/2019",frontMatter:{id:"introduction",title:"Introduction"},sidebar:"docs",next:{title:"Landscape",permalink:"/landscape"}},s=[{value:"What is this?",id:"what-is-this",children:[]},{value:"Why do I want this?",id:"why-do-i-want-this",children:[]},{value:"Who is this for?",id:"who-is-this-for",children:[]}],u={toc:s};function l(t){var e=t.components,n=(0,o.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-this"},"What is this?"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Tech Interview Handbook")," contains carefully curated content to help you ace your next technical interview with a focus on algorithms. While there are a ton of interview resources on the internet, the best ones are either not free, or they do not cover the complete interview process, usually only focusing on algorithms."),(0,i.kt)("h2",{id:"why-do-i-want-this"},"Why do I want this?"),(0,i.kt)("p",null,"This repository has ",(0,i.kt)("strong",{parentName:"p"},"practical")," content that covers all phases of a technical interview, from applying for a job to passing the interviews to offer negotiation. Technically competent candidates might still find the non-technical content helpful as well."),(0,i.kt)("h2",{id:"who-is-this-for"},"Who is this for?"),(0,i.kt)("p",null,"Whether you are a beginner to technical interviews or a seasoned engineer who have not been on the other side of the interviewing table in a while and want to get back into the game, the Tech Interview Handbook has got you covered."))}l.isMDXComponent=!0}}]);