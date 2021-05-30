(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3081],{2122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},9756:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3108:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return s}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o={id:"permutation",title:"Permutation"},l={unversionedId:"algorithms/permutation",id:"algorithms/permutation",isDocsHomePage:!1,title:"Permutation",description:"Sample questions",source:"@site/../contents/algorithms/permutation.md",sourceDirName:"algorithms",slug:"/algorithms/permutation",permalink:"/algorithms/permutation",editUrl:"https://github.com/yangshun/tech-interview-handbook/edit/master/contents/../contents/algorithms/permutation.md",version:"current",lastUpdatedBy:"Yangshun Tay",lastUpdatedAt:1569463535,formattedLastUpdatedAt:"9/26/2019",frontMatter:{id:"permutation",title:"Permutation"},sidebar:"docs",previous:{title:"Object-Oriented Programming",permalink:"/algorithms/oop"},next:{title:"Queue",permalink:"/algorithms/queue"}},u=[{value:"Sample questions",id:"sample-questions",children:[]}],p={toc:u};function s(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"sample-questions"},"Sample questions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You are given a 7 digit phone number, and you should find all possible letter combinations based on the digit-to-letter mapping on numeric pad and return only the ones that have valid match against a given dictionary of words."),(0,a.kt)("li",{parentName:"ul"},"Give all possible letter combinations from a phone number."),(0,a.kt)("li",{parentName:"ul"},"Generate all subsets of a string."),(0,a.kt)("li",{parentName:"ul"},"Print all possible ",(0,a.kt)("inlineCode",{parentName:"li"},"N")," pairs of balanced parentheses.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"E.g. when ",(0,a.kt)("inlineCode",{parentName:"li"},"N")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"2"),", the function should print ",(0,a.kt)("inlineCode",{parentName:"li"},"(())")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"()()"),"."),(0,a.kt)("li",{parentName:"ul"},"E.g. when ",(0,a.kt)("inlineCode",{parentName:"li"},"N")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"3"),", we should get ",(0,a.kt)("inlineCode",{parentName:"li"},"((()))"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"(()())"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"(())()"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"()(())"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"()()()"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://blog.gainlo.co/index.php/2016/12/23/uber-interview-questions-permutations-parentheses/"},"Source")))),(0,a.kt)("li",{parentName:"ul"},"Given a list of arrays, return a list of arrays, where each array is a combination of one element in each given array.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"E.g. If the input is ",(0,a.kt)("inlineCode",{parentName:"li"},"[[1, 2, 3], [4], [5, 6]]"),", the output should be ",(0,a.kt)("inlineCode",{parentName:"li"},"[[1, 4, 5], [1, 4, 6], [2, 4, 5], [2, 4, 6], [3, 4, 5], [3, 4, 6]]"),".")))))}s.isMDXComponent=!0}}]);