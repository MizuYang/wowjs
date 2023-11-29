import{o as L,a as v,c as p,F as N,r as j,b as m,d as B}from"./index-203b9c90.js";var F=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function z(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var b={exports:{}};(function(l,d){(function(f,u){u(l,d)})(F,function(f,u){Object.defineProperty(u,"__esModule",{value:!0});var h,k;function w(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}var y=function(){function a(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(n,t,e){return t&&a(n.prototype,t),e&&a(n,e),n}}();function S(a,n){return n.indexOf(a)>=0}function O(a,n){for(var t in n)if(a[t]==null){var e=n[t];a[t]=e}return a}function M(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)}function H(a){var n=arguments.length<=1||arguments[1]===void 0?!1:arguments[1],t=arguments.length<=2||arguments[2]===void 0?!1:arguments[2],e=arguments.length<=3||arguments[3]===void 0?null:arguments[3],i=void 0;return document.createEvent!=null?(i=document.createEvent("CustomEvent"),i.initCustomEvent(a,n,t,e)):document.createEventObject!=null?(i=document.createEventObject(),i.eventType=a):i.eventName=a,i}function T(a,n){a.dispatchEvent!=null?a.dispatchEvent(n):n in(a!=null)?a[n]():"on"+n in(a!=null)&&a["on"+n]()}function c(a,n,t){a.addEventListener!=null?a.addEventListener(n,t,!1):a.attachEvent!=null?a.attachEvent("on"+n,t):a[n]=t}function C(a,n,t){a.removeEventListener!=null?a.removeEventListener(n,t,!1):a.detachEvent!=null?a.detachEvent("on"+n,t):delete a[n]}function W(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight}var P=window.WeakMap||window.MozWeakMap||function(){function a(){w(this,a),this.keys=[],this.values=[]}return y(a,[{key:"get",value:function(t){for(var e=0;e<this.keys.length;e++){var i=this.keys[e];if(i===t)return this.values[e]}}},{key:"set",value:function(t,e){for(var i=0;i<this.keys.length;i++){var s=this.keys[i];if(s===t)return this.values[i]=e,this}return this.keys.push(t),this.values.push(e),this}}]),a}(),_=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver||(k=h=function(){function a(){w(this,a),typeof console<"u"&&console!==null&&(console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))}return y(a,[{key:"observe",value:function(){}}]),a}(),h.notSupported=!0,k),E=window.getComputedStyle||function(n){var t=/(\-([a-z]){1})/g;return{getPropertyValue:function(i){i==="float"&&(i="styleFloat"),t.test(i)&&i.replace(t,function(o,r){return r.toUpperCase()});var s=n.currentStyle;return(s!=null?s[i]:void 0)||null}}},I=function(){function a(){var n=arguments.length<=0||arguments[0]===void 0?{}:arguments[0];w(this,a),this.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},this.animate=function(){return"requestAnimationFrame"in window?function(e){return window.requestAnimationFrame(e)}:function(e){return e()}}(),this.vendors=["moz","webkit"],this.start=this.start.bind(this),this.resetAnimation=this.resetAnimation.bind(this),this.scrollHandler=this.scrollHandler.bind(this),this.scrollCallback=this.scrollCallback.bind(this),this.scrolled=!0,this.config=O(n,this.defaults),n.scrollContainer!=null&&(this.config.scrollContainer=document.querySelector(n.scrollContainer)),this.animationNameCache=new P,this.wowEvent=H(this.config.boxClass)}return y(a,[{key:"init",value:function(){this.element=window.document.documentElement,S(document.readyState,["interactive","complete"])?this.start():c(document,"DOMContentLoaded",this.start),this.finished=[]}},{key:"start",value:function(){var t=this;if(this.stopped=!1,this.boxes=[].slice.call(this.element.querySelectorAll("."+this.config.boxClass)),this.all=this.boxes.slice(0),this.boxes.length)if(this.disabled())this.resetStyle();else for(var e=0;e<this.boxes.length;e++){var i=this.boxes[e];this.applyStyle(i,!0)}if(this.disabled()||(c(this.config.scrollContainer||window,"scroll",this.scrollHandler),c(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live){var s=new _(function(o){for(var r=0;r<o.length;r++)for(var A=o[r],g=0;g<A.addedNodes.length;g++){var V=A.addedNodes[g];t.doSync(V)}});s.observe(document.body,{childList:!0,subtree:!0})}}},{key:"stop",value:function(){this.stopped=!0,C(this.config.scrollContainer||window,"scroll",this.scrollHandler),C(window,"resize",this.scrollHandler),this.interval!=null&&clearInterval(this.interval)}},{key:"sync",value:function(){_.notSupported&&this.doSync(this.element)}},{key:"doSync",value:function(t){if((typeof t>"u"||t===null)&&(t=this.element),t.nodeType===1){t=t.parentNode||t;for(var e=t.querySelectorAll("."+this.config.boxClass),i=0;i<e.length;i++){var s=e[i];S(s,this.all)||(this.boxes.push(s),this.all.push(s),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(s,!0),this.scrolled=!0)}}}},{key:"show",value:function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,this.config.callback!=null&&this.config.callback(t),T(t,this.wowEvent),c(t,"animationend",this.resetAnimation),c(t,"oanimationend",this.resetAnimation),c(t,"webkitAnimationEnd",this.resetAnimation),c(t,"MSAnimationEnd",this.resetAnimation),t}},{key:"applyStyle",value:function(t,e){var i=this,s=t.getAttribute("data-wow-duration"),o=t.getAttribute("data-wow-delay"),r=t.getAttribute("data-wow-iteration");return this.animate(function(){return i.customStyle(t,e,s,o,r)})}},{key:"resetStyle",value:function(){for(var t=0;t<this.boxes.length;t++){var e=this.boxes[t];e.style.visibility="visible"}}},{key:"resetAnimation",value:function(t){if(t.type.toLowerCase().indexOf("animationend")>=0){var e=t.target||t.srcElement;e.className=e.className.replace(this.config.animateClass,"").trim()}}},{key:"customStyle",value:function(t,e,i,s,o){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",i&&this.vendorSet(t.style,{animationDuration:i}),s&&this.vendorSet(t.style,{animationDelay:s}),o&&this.vendorSet(t.style,{animationIterationCount:o}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t}},{key:"vendorSet",value:function(t,e){for(var i in e)if(e.hasOwnProperty(i)){var s=e[i];t[""+i]=s;for(var o=0;o<this.vendors.length;o++){var r=this.vendors[o];t[""+r+i.charAt(0).toUpperCase()+i.substr(1)]=s}}}},{key:"vendorCSS",value:function(t,e){for(var i=E(t),s=i.getPropertyCSSValue(e),o=0;o<this.vendors.length;o++){var r=this.vendors[o];s=s||i.getPropertyCSSValue("-"+r+"-"+e)}return s}},{key:"animationName",value:function(t){var e=void 0;try{e=this.vendorCSS(t,"animation-name").cssText}catch{e=E(t).getPropertyValue("animation-name")}return e==="none"?"":e}},{key:"cacheAnimationName",value:function(t){return this.animationNameCache.set(t,this.animationName(t))}},{key:"cachedAnimationName",value:function(t){return this.animationNameCache.get(t)}},{key:"scrollHandler",value:function(){this.scrolled=!0}},{key:"scrollCallback",value:function(){if(this.scrolled){this.scrolled=!1;for(var t=[],e=0;e<this.boxes.length;e++){var i=this.boxes[e];if(i){if(this.isVisible(i)){this.show(i);continue}t.push(i)}}this.boxes=t,!this.boxes.length&&!this.config.live&&this.stop()}}},{key:"offsetTop",value:function(t){for(;t.offsetTop===void 0;)t=t.parentNode;for(var e=t.offsetTop;t.offsetParent;)t=t.offsetParent,e+=t.offsetTop;return e}},{key:"isVisible",value:function(t){var e=t.getAttribute("data-wow-offset")||this.config.offset,i=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,s=i+Math.min(this.element.clientHeight,W())-e,o=this.offsetTop(t),r=o+t.clientHeight;return o<=s&&r>=i}},{key:"disabled",value:function(){return!this.config.mobile&&M(navigator.userAgent)}}]),a}();u.default=I,f.exports=u.default})})(b,b.exports);var q=b.exports;const D=z(q),U={class:"text-center",style:{"overflow-x":"hidden"}},R=m("div",{class:"wow animate__fadeInLeft","data-wow-duration":"2s","data-wow-offset":"10","data-wow-iteration":"1",style:{margin:"50px 0"}}," 左到右 ",-1),$=m("div",{class:"wow animate__backInDown","data-wow-duration":"2s"}," 上到下 ",-1),G=m("div",{class:"wow animate__backInUp","data-wow-duration":"2s"}," 下到上 ",-1),X=m("div",{class:"wow animate__slideInRight","data-wow-offset":"10","data-wow-duration":"2s"}," 右到左 ",-1),Y={__name:"HelloWorld",setup(l){L(()=>{d()});function d(){new D({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:function(u){},scrollContainer:null,resetAnimation:!0}).init()}return(f,u)=>(v(),p("main",U,[(v(),p(N,null,j(100,h=>(v(),p(N,{key:`test-${h}`},[R,$,G,X],64))),64))]))}},K={__name:"HomeView",setup(l){return(d,f)=>(v(),B(Y))}};export{K as default};