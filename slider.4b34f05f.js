parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"wzuc":[function(require,module,exports) {
var e=1,t=document.querySelector(".overlay"),n=document.querySelector(".slider-track"),l=document.querySelectorAll(".slider-item"),c=t.clientWidth/e;l.forEach(function(e){e.style.minWidth="".concat(c,"px")});for(var r=document.querySelectorAll(".controls"),o=0;o<r.length;o++)r[o];var i=document.querySelectorAll(".slider-track .slider-item"),u=0,a=setInterval(d,5e3);function d(){s(u+1)}function m(){s(u-1)}function s(e){i[u].className="slider-item",u=(e+i.length)%i.length,i[u].className="slider-item showing"}function y(){playing=!1,clearInterval(a)}var f=document.getElementById("prev"),v=document.getElementById("next");next.onclick=function(){d()},prev.onclick=function(){m()};
},{}]},{},["wzuc"], null)
//# sourceMappingURL=/top-8-devs/slider.4b34f05f.js.map