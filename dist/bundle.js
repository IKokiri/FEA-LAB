/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_main_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_main_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__js_main_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_plugins_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_plugins_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__js_plugins_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_vendor_modernizr_3_7_1_min_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_vendor_modernizr_3_7_1_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__js_vendor_modernizr_3_7_1_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__css_style_css__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__css_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__css_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__css_normalize_css__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__css_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__css_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__css_main_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__css_main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__css_main_css__);








/***/ }),
/* 1 */
/***/ (function(module, exports) {

var sucesso = document.getElementById('sucesso');
var error = document.getElementById('error');
var latitudeS = document.getElementById('latitude');         
var longitudeS = document.getElementById('longitude');
var endereco = document.getElementById('endereco');

document.querySelector('#btn-localizacao').addEventListener('click', function (event) {
    
        
    if (navigator.geolocation) {
        /* geolocation is available */
      
           navigator.geolocation.getCurrentPosition(showPosition,showError);
    }
    
    async function showPosition(position){
        
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        sucesso.innerHTML = "Você está:";
        latitudeS.innerHTML = "Latitude "+lat;
        longitudeS.innerHTML = "Longitude "+lon;
        error.innerHTML = "";

        local = await buscarEndereco(lat,lon)
        
        endereco.innerHTML = `Você está proximo de: ${local}`;
    }

    function showError(){

        navigator.permissions.query({name:'geolocation'}).then(function() {
            error.innerHTML = "Para ter acesso, é necessário permitir 'Saber sua localização'!";
            latitudeS.innerHTML = "";
            longitudeS.innerHTML = "";
            sucesso.innerHTML = "";

    });
    }

    async function buscarEndereco(lat,lon){
        local = "";

        await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=AIzaSyBUkoTXt1bL6oLyPUFFdVQXVlJpxbW-jWQ`)
        .then(function(response){
            return response.json()
        }).then(function(data){
            local = data.results[0].formatted_address;
        })

        return local;
    }
    
}); 

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*! modernizr 3.7.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csscolumns-customelements-flexbox-history-picture-pointerevents-postmessage-sizes-srcset-webgl-websockets-webworkers-addtest-domprefixes-hasevent-mq-prefixedcssvalue-prefixes-setclasses-testallprops-testprop-teststyles !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(e){var t=b.className,n=Modernizr._config.classPrefix||"";if(S&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(e.length>0&&(t+=" "+n+e.join(" "+n)),S?b.className.baseVal=t:b.className=t)}function i(e,t){if("object"==typeof e)for(var n in e)E(e,n)&&i(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),s=Modernizr[r[0]];if(2===r.length&&(s=s[r[1]]),void 0!==s)return Modernizr;t="function"==typeof t?t():t,1===r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),o([(t&&!1!==t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(){var e=t.body;return e||(e=s(S?"svg":"body"),e.fake=!0),e}function l(e,n,r,o){var i,l,u,f,c="modernizr",d=s("div"),p=a();if(parseInt(r,10))for(;r--;)u=s("div"),u.id=o?o[r]:c+(r+1),d.appendChild(u);return i=s("style"),i.type="text/css",i.id="s"+c,(p.fake?p:d).appendChild(i),p.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),d.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",f=b.style.overflow,b.style.overflow="hidden",b.appendChild(p)),l=n(d,e),p.fake?(p.parentNode.removeChild(p),b.style.overflow=f,b.offsetHeight):d.parentNode.removeChild(d),!!l}function u(e,t){return!!~(""+e).indexOf(t)}function f(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var s=i.error?"error":"log";i[s].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function d(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(f(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+f(t[o])+":"+r+")");return i=i.join(" or "),l("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"===c(e,null,"position")})}return n}function p(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function m(e,t,o,i){function a(){f&&(delete L.style,delete L.modElem)}if(i=!r(i,"undefined")&&i,!r(o,"undefined")){var l=d(e,o);if(!r(l,"undefined"))return l}for(var f,c,m,h,v,A=["modernizr","tspan","samp"];!L.style&&A.length;)f=!0,L.modElem=s(A.shift()),L.style=L.modElem.style;for(m=e.length,c=0;c<m;c++)if(h=e[c],v=L.style[h],u(h,"-")&&(h=p(h)),L.style[h]!==n){if(i||r(o,"undefined"))return a(),"pfx"!==t||h;try{L.style[h]=o}catch(e){}if(L.style[h]!==v)return a(),"pfx"!==t||h}return a(),!1}function h(e,t){return function(){return e.apply(t,arguments)}}function v(e,t,n){var o;for(var i in e)if(e[i]in t)return!1===n?e[i]:(o=t[e[i]],r(o,"function")?h(o,n||t):o);return!1}function A(e,t,n,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+z.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?m(a,t,o,i):(a=(e+" "+x.join(s+" ")+s).split(" "),v(a,t,n))}function g(e,t,r){return A(e,n,n,t,r)}var y=[],w={_version:"3.7.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){y.push({name:e,fn:t,options:n})},addAsyncTest:function(e){y.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var C=[],b=t.documentElement,S="svg"===b.nodeName.toLowerCase(),_="Moz O ms Webkit",x=w._config.usePrefixes?_.toLowerCase().split(" "):[];w._domPrefixes=x;var T=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=T;var E;!function(){var e={}.hasOwnProperty;E=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),w._l={},w.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},w._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){w.addTest=i});var P=function(){function e(e,r){var o;return!!e&&(r&&"string"!=typeof r||(r=s(r||"div")),e="on"+e,o=e in r,!o&&t&&(r.setAttribute||(r=s("div")),r.setAttribute(e,""),o="function"==typeof r[e],r[e]!==n&&(r[e]=n),r.removeAttribute(e)),o)}var t=!("onblur"in b);return e}();w.hasEvent=P;var k=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return l("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"===(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();w.mq=k;var B=function(e,t){var n=!1,r=s("div"),o=r.style;if(e in o){var i=x.length;for(o[e]=t,n=o[e];i--&&!n;)o[e]="-"+x[i]+"-"+t,n=o[e]}return""===n&&(n=!1),n};w.prefixedCSSValue=B;var z=w._config.usePrefixes?_.split(" "):[];w._cssomPrefixes=z;var O={elem:s("modernizr")};Modernizr._q.push(function(){delete O.elem});var L={style:O.elem.style};Modernizr._q.unshift(function(){delete L.style}),w.testAllProps=A,w.testAllProps=g;w.testProp=function(e,t,r){return m([e],n,t,r)},w.testStyles=l;Modernizr.addTest("customelements","customElements"in e),Modernizr.addTest("history",function(){var t=navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")||"file:"===location.protocol)&&(e.history&&"pushState"in e.history)}),Modernizr.addTest("pointerevents",function(){var e=!1,t=x.length;for(e=Modernizr.hasEvent("pointerdown");t--&&!e;)P(x[t]+"pointerdown")&&(e=!0);return e});var N=new Boolean("postMessage"in e);N.structuredclones=!0;try{e.postMessage({toString:function(){N.structuredclones=!1}},"*")}catch(e){}Modernizr.addTest("postmessage",N),Modernizr.addTest("webgl",function(){return"WebGLRenderingContext"in e});var R=!1;try{R="WebSocket"in e&&2===e.WebSocket.CLOSING}catch(e){}Modernizr.addTest("websockets",R),Modernizr.addTest("cssanimations",g("animationName","a",!0)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=g("columnCount");try{e=!!t,e&&(e=new Boolean(e))}catch(e){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=g("column"+n[r]),"breakbefore"!==e&&"breakafter"!==e&&"breakinside"!==e||(t=t||g(n[r])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("flexbox",g("flexBasis","1px",!0)),Modernizr.addTest("picture","HTMLPictureElement"in e),Modernizr.addAsyncTest(function(){var e,t,n,r=s("img"),o="sizes"in r;!o&&"srcset"in r?(t="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",n=function(){i("sizes",2===r.width)},r.onload=n,r.onerror=n,r.setAttribute("sizes","9px"),r.srcset=e+" 1w,"+t+" 8w",r.src=e):i("sizes",o)}),Modernizr.addTest("srcset","srcset"in s("img")),Modernizr.addTest("webworkers","Worker"in e),function(){var e,t,n,o,i,s,a;for(var l in y)if(y.hasOwnProperty(l)){if(e=[],t=y[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),C.push((o?"":"no-")+a.join("-"))}}(),o(C),delete w.addTest,delete w.addAsyncTest;for(var j=0;j<Modernizr._q.length;j++)Modernizr._q[j]();e.Modernizr=Modernizr}(window,document);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);