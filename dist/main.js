(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(204),t.b),l=i()(o());l.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap);"]);var p=s()(d);l.push([e.id,"body{\r\n    margin: 0px;\r\n    overflow: hidden;\r\n    font-family: 'Poppins', sans-serif;\r\n}\r\n.background {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    width: 100%;\r\n    height: 200px;\r\n    background: url("+p+");\r\n    background-size: cover;\r\n    background-position: 0px -100px;\r\n    background-repeat: no-repeat;\r\n    border-bottom: 1px black solid;\r\n}\r\n\r\n.title-text {\r\n    color: snow;\r\n    color: black;\r\n    -webkit-text-fill-color: white; /* Will override color (regardless of order) */\r\n    -webkit-text-stroke-width: 2px;\r\n    -webkit-text-stroke-color: black;\r\n    font-size: 3.5em;\r\n}\r\n\r\n.content-container {\r\n    display: flex;\r\n    width: 100%;\r\n}\r\n.content-container img{\r\n    width: 50vw;\r\n    height: calc(100vh - 200px);\r\n}\r\n.text-container {\r\n    padding: 40px;\r\n    text-align: center;\r\n}\r\n\r\n.center {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    border-bottom: black 1px solid;\r\n}\r\n.header h4 {\r\n    margin: 5px;\r\n}\r\n\r\n.tab-container {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: 25%;\r\n}\r\n.tab-container div{\r\n    margin: 4px;\r\n}\r\n\r\n.selected {\r\n    color: snow;\r\n    background-color: black;\r\n    border-radius: 5px;\r\n    border: 2px black solid;\r\n}\r\n@media (max-width: 700px) {\r\n    .background {\r\n        height: 20vh;\r\n        background-size: cover;\r\n        background-position: 0px -50px;\r\n    }\r\n    .content-container {\r\n        flex-direction: column-reverse;\r\n    }\r\n    .content-container img {\r\n        width: auto;\r\n        height: 63vh;\r\n    }\r\n    .title-text {\r\n        font-size: 2em;\r\n        -webkit-text-stroke-width: 1px;\r\n    }\r\n}\r\n\r\n@media (max-width: 300px) {\r\n    .background {\r\n        background-position: 0px 0px;\r\n    }\r\n    .title-text {\r\n        font-size: 1.5em;\r\n    }\r\n    .content-container img {\r\n        height: 57vh;\r\n    }\r\n}",""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},204:(e,n,t)=>{e.exports=t.p+"b79985f5a52259eafe86.jpg"},561:(e,n,t)=>{e.exports=t.p+"6415c7826f02854f060e.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(28),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var h=t(561);const v=document.querySelector("#content");v.appendChild((()=>{let e=document.createElement("header");e.classList.add("header");let n=document.createElement("div"),t=document.createElement("div");t.innerHTML="Home";let r=document.createElement("div");r.innerHTML="Menu";let o=document.createElement("div");o.innerHTML="Contact",n.classList.add("tab-container"),n.appendChild(t),n.appendChild(r),n.appendChild(o);let a=document.createElement("h4");return a.innerHTML="REST AU RANT",e.appendChild(a),e.appendChild(n),t.classList.add("selected"),e})()),v.appendChild((()=>{let e=document.createElement("main"),n=document.createElement("div"),t=document.createElement("h1");t.innerHTML="REST AU RANT",t.classList.add("title-text"),n.classList.add("background"),n.appendChild(t);let r=document.createElement("div"),o=document.createElement("div"),a=document.createElement("h2");a.innerHTML="LOREM AU RANT";let i=document.createElement("p");i.innerHTML='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet malesuada sapien. Proin in"',o.appendChild(a),o.appendChild(i),o.classList.add("center"),o.classList.add("text-container");let c=new Image;return c.src=h,r.appendChild(c),r.appendChild(o),r.classList.add("content-container"),e.appendChild(n),e.appendChild(r),e})())})()})();