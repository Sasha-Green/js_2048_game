parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t,o){return r(t)||n(t,o)||i(t,o)||e()}function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}function r(t){if(Array.isArray(t))return t}function o(t){return l(t)||c(t)||i(t)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t,e){if(t){if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}function c(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function l(t){if(Array.isArray(t))return u(t)}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var s=document.querySelector(".container"),f=s.querySelector(".start"),d=s.querySelector(".game-score"),m=s.querySelector(".game-field"),h=m.querySelector("tbody"),y=s.querySelector(".message-container"),p=y.querySelector(".message-start"),v=y.querySelector(".message-win"),g=y.querySelector(".message-lose"),b=o(h.querySelectorAll("tr")),S=b.map(function(t){return o(t.cells).map(function(t){return t})}),w=b.map(function(t){return o(t.cells).map(function(t){return t.textContent})}),A=o(w),x=!1,C=b.length,q=b[b.length-1].cells.length;function E(){for(var t=0;t<C;t++)for(var e=0;e<q;e++)if(A[t][e]===A[t][e+1])return!1;A=j();for(var n=0;n<q;n++)for(var r=0;r<C;r++)if(A[n][r]===A[n][r+1])return!1;return!0}function L(t){var e=0;"up"!==t&&"down"!==t||(A=j()),A.forEach(function(n,r,a){var i=n.filter(function(t){return""!==t});i.length>0&&("right"!==t&&"down"!==t||i.reverse(),i.length>1&&i.forEach(function(t,n,r){r[n]===r[n+1]&&(r[n]*=2,e+=r[n],i.splice(n+1,1),2048===r[n]&&(x=!0))}),a[r]=[].concat(o(i),o(Array(q-i.length).fill(""))),"right"!==t&&"down"!==t||a[r].reverse())}),"up"!==t&&"down"!==t||(A=j()),e>0&&(d.textContent=+d.textContent+e)}function j(){return A[0].map(function(t,e){return A.map(function(t){return t[e]})})}function k(){return w.reduce(function(t,e,n){return[].concat(o(t),o(e.map(function(t,e){if(""===t)return[n,e]})))},[]).filter(function(t){return t})}function N(e,n){if(n.length)for(var r=0;r<e;){var o=Math.floor(Math.random()*n.length),a=t(n[o],2),i=a[0],c=a[1];w[i][c]=Math.random()>.9?4:2,S[i][c].textContent=String(w[i][c]),I(S[i][c]),r++,n.splice(o,1)}}function I(t){""!==t.textContent?t.className="field-cell field-cell--".concat(t.textContent):t.className="field-cell"}f.addEventListener("click",function(t){if(!x){var e=o(m.querySelectorAll(".field-cell"));e.find(function(t){return""!==t.textContent})&&(e.forEach(function(t){t.textContent="",I(t)}),w=b.map(function(t){return o(t.cells).map(function(t){return t.textContent})})),d.textContent=0,f.textContent="Restart",f.className.includes("start")&&f.classList.replace("start","restart"),g.className.includes("hidden")||g.classList.add("hidden"),v.className.includes("hidden")||v.classList.add("hidden"),p.className.includes("hidden")||p.classList.add("hidden");N(2,k())}}),document.addEventListener("keydown",function(t){if(!x){switch(A=o(w),t.key){case"ArrowLeft":L("left");break;case"ArrowRight":L("right");break;case"ArrowUp":L("up");break;case"ArrowDown":L("down");break;default:return}if(A.join()!==w.join()){b.forEach(function(t,e){o(t.cells).forEach(function(t,n){t.textContent!==A[e][n]&&(t.textContent=String(A[e][n]),I(t))})}),x&&v.classList.remove("hidden"),w=o(A);var e=k();N(1,e),!e.length&&E()&&g.classList.remove("hidden")}}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.06ea6d48.js.map