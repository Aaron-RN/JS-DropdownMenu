!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=4)}([function(n,e,t){var r=t(1),o=t(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});n.exports=a},function(n,e,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function s(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},r=[],o=0;o<n.length;o++){var i=n[o],c=e.base?i[0]+e.base:i[0],u=t[c]||0,d="".concat(c," ").concat(u);t[c]=u+1;var l=s(d),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(f)):a.push({identifier:d,updater:v(f,e),references:1}),r.push(d)}return r}function u(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,l=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function f(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var h=null,m=0;function v(n,e){var t,r,o;if(e.singleton){var i=m++;t=h||(h=u(e)),r=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=u(e),r=p.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=s(t[r]);a[o].references--}for(var i=c(n,e),u=0;u<t.length;u++){var d=s(t[u]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}t=i}}}},function(n,e,t){(e=t(3)(!1)).push([n.i,"html { box-sizing: border-box; }\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  -webkit-transition-duration: 0.25s;\r\n  -moz-transition-duration: 0.25s;\r\n  transition-duration: 0.25s;\r\n}\r\n\r\n.horizontalBar{\r\n  z-index: 99;\r\n  position: relative;\r\n  display: flex;\r\n  background-color: cadetblue;\r\n  color: white;\r\n}\r\n\r\n.horizontalBar *{\r\n  padding: 4px 8px;\r\n}\r\n\r\n.aa-menuBG{\r\n  z-index: 97;\r\n  display: block;\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.aa-dropDownMenu{\r\n  cursor: pointer;\r\n}\r\n.aa-dropDownContent{\r\n  display: none;\r\n  z-index: 98;\r\n  position: absolute;\r\n  align-items: flex-start;\r\n  flex-direction: column;\r\n  background-color: #FFF;\r\n  border: 2px solid #EEE;\r\n  box-shadow: 2px 4px 8px rgba(0,0,0,0.1);\r\n  border-radius: 8px;\r\n}\r\n\r\n.aa-dropDown-item{\r\n  \r\n}\r\n\r\n.aa-dropDown-item:hover{\r\n  background-color: #EEE;\r\n}\r\n\r\n.aa-dropDown-show{ display: flex; }\r\n.aa-dropDown-hide{ display: none; }",""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}var a,s,c;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},function(n,e,t){"use strict";t.r(e);t(0);var r=class{constructor(n,e){this.handler=e,this.mainElement=n;const t=Array.from(this.mainElement.children);this.content=t.find(n=>n.getAttribute("data-dropDownContent","true")),this.dropDownItems=Array.from(this.content.children),this.mainElement.classList.add("aa-dropDownMenu"),this.content.classList.add("aa-dropDownContent"),this.dropDownItems.forEach(n=>n.classList.add("aa-dropDown-item")),this.mainElement.addEventListener("click",()=>{this.handler.hideMenus(this),this.handler.menuBackground.classList.remove("aa-dropDown-hide"),this.content.classList.toggle("aa-dropDown-show")})}hideMenu(){this.content.classList.remove("aa-dropDown-show")}};e.default=class{constructor(){this.menus=[]}constructMenus(){document.querySelectorAll("*[data-dropDownMenu]").forEach(n=>{this.addMenu(new r(n,this))});const n=document.createElement("div");this.menuBackground=n,n.classList.add("aa-menuBG"),n.classList.add("aa-dropDown-hide"),n.addEventListener("click",()=>{this.hideMenus()}),document.body.appendChild(n)}allMenus(){return this.menus}addMenu(n){this.menus.push(n)}hideMenus(n){const e=this.allMenus();this.menuBackground.classList.add("aa-dropDown-hide"),e.forEach(e=>{n!==e&&e.hideMenu()})}}}]);