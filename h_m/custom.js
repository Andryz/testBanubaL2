!function(t,e){"use strict";function r(r,a,i,u,l){function f(){L=t.devicePixelRatio>1,i=c(i),a.delay>=0&&setTimeout(function(){s(!0)},a.delay),(a.delay<0||a.combined)&&(u.e=v(a.throttle,function(t){"resize"===t.type&&(w=B=-1),s(t.all)}),u.a=function(t){t=c(t),i.push.apply(i,t)},u.g=function(){return i=n(i).filter(function(){return!n(this).data(a.loadedName)})},u.f=function(t){for(var e=0;e<t.length;e++){var r=i.filter(function(){return this===t[e]});r.length&&s(!1,r)}},s(),n(a.appendScroll).on("scroll."+l+" resize."+l,u.e))}function c(t){var i=a.defaultImage,o=a.placeholder,u=a.imageBase,l=a.srcsetAttribute,f=a.loaderAttribute,c=a._f||{};t=n(t).filter(function(){var t=n(this),r=m(this);return!t.data(a.handledName)&&(t.attr(a.attribute)||t.attr(l)||t.attr(f)||c[r]!==e)}).data("plugin_"+a.name,r);for(var s=0,d=t.length;s<d;s++){var A=n(t[s]),g=m(t[s]),h=A.attr(a.imageBaseAttribute)||u;g===N&&h&&A.attr(l)&&A.attr(l,b(A.attr(l),h)),c[g]===e||A.attr(f)||A.attr(f,c[g]),g===N&&i&&!A.attr(E)?A.attr(E,i):g===N||!o||A.css(O)&&"none"!==A.css(O)||A.css(O,"url('"+o+"')")}return t}function s(t,e){if(!i.length)return void(a.autoDestroy&&r.destroy());for(var o=e||i,u=!1,l=a.imageBase||"",f=a.srcsetAttribute,c=a.handledName,s=0;s<o.length;s++)if(t||e||A(o[s])){var g=n(o[s]),h=m(o[s]),b=g.attr(a.attribute),v=g.attr(a.imageBaseAttribute)||l,p=g.attr(a.loaderAttribute);g.data(c)||a.visibleOnly&&!g.is(":visible")||!((b||g.attr(f))&&(h===N&&(v+b!==g.attr(E)||g.attr(f)!==g.attr(F))||h!==N&&v+b!==g.css(O))||p)||(u=!0,g.data(c,!0),d(g,h,v,p))}u&&(i=n(i).filter(function(){return!n(this).data(c)}))}function d(t,e,r,i){++z;var o=function(){y("onError",t),p(),o=n.noop};y("beforeLoad",t);var u=a.attribute,l=a.srcsetAttribute,f=a.sizesAttribute,c=a.retinaAttribute,s=a.removeAttribute,d=a.loadedName,A=t.attr(c);if(i){var g=function(){s&&t.removeAttr(a.loaderAttribute),t.data(d,!0),y(T,t),setTimeout(p,1),g=n.noop};t.off(I).one(I,o).one(D,g),y(i,t,function(e){e?(t.off(D),g()):(t.off(I),o())})||t.trigger(I)}else{var h=n(new Image);h.one(I,o).one(D,function(){t.hide(),e===N?t.attr(C,h.attr(C)).attr(F,h.attr(F)).attr(E,h.attr(E)):t.css(O,"url('"+h.attr(E)+"')"),t[a.effect](a.effectTime),s&&(t.removeAttr(u+" "+l+" "+c+" "+a.imageBaseAttribute),f!==C&&t.removeAttr(f)),t.data(d,!0),y(T,t),h.remove(),p()});var m=(L&&A?A:t.attr(u))||"";h.attr(C,t.attr(f)).attr(F,t.attr(l)).attr(E,m?r+m:null),h.complete&&h.trigger(D)}}function A(t){var e=t.getBoundingClientRect(),r=a.scrollDirection,n=a.threshold,i=h()+n>e.top&&-n<e.bottom,o=g()+n>e.left&&-n<e.right;return"vertical"===r?i:"horizontal"===r?o:i&&o}function g(){return w>=0?w:w=n(t).width()}function h(){return B>=0?B:B=n(t).height()}function m(t){return t.tagName.toLowerCase()}function b(t,e){if(e){var r=t.split(",");t="";for(var a=0,n=r.length;a<n;a++)t+=e+r[a].trim()+(a!==n-1?",":"")}return t}function v(t,e){var n,i=0;return function(o,u){function l(){i=+new Date,e.call(r,o)}var f=+new Date-i;n&&clearTimeout(n),f>t||!a.enableThrottle||u?l():n=setTimeout(l,t-f)}}function p(){--z,i.length||z||y("onFinishedAll")}function y(t,e,n){return!!(t=a[t])&&(t.apply(r,[].slice.call(arguments,1)),!0)}var z=0,w=-1,B=-1,L=!1,T="afterLoad",D="load",I="error",N="img",E="src",F="srcset",C="sizes",O="background-image";"event"===a.bind||o?f():n(t).on(D+"."+l,f)}function a(a,o){var u=this,l=n.extend({},u.config,o),f={},c=l.name+"-"+ ++i;return u.config=function(t,r){return r===e?l[t]:(l[t]=r,u)},u.addItems=function(t){return f.a&&f.a("string"===n.type(t)?n(t):t),u},u.getItems=function(){return f.g?f.g():{}},u.update=function(t){return f.e&&f.e({},!t),u},u.force=function(t){return f.f&&f.f("string"===n.type(t)?n(t):t),u},u.loadAll=function(){return f.e&&f.e({all:!0},!0),u},u.destroy=function(){return n(l.appendScroll).off("."+c,f.e),n(t).off("."+c),f={},e},r(u,l,a,f,c),l.chainable?a:u}var n=t.jQuery||t.Zepto,i=0,o=!1;n.fn.Lazy=n.fn.lazy=function(t){return new a(this,t)},n.Lazy=n.lazy=function(t,r,i){if(n.isFunction(r)&&(i=r,r=[]),n.isFunction(i)){t=n.isArray(t)?t:[t],r=n.isArray(r)?r:[r];for(var o=a.prototype.config,u=o._f||(o._f={}),l=0,f=t.length;l<f;l++)(o[t[l]]===e||n.isFunction(o[t[l]]))&&(o[t[l]]=i);for(var c=0,s=r.length;c<s;c++)u[r[c]]=t[0]}},a.prototype.config={name:"lazy",chainable:!0,autoDestroy:!0,bind:"load",threshold:500,visibleOnly:!1,appendScroll:t,scrollDirection:"both",imageBase:null,defaultImage:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",placeholder:null,delay:-1,combined:!1,attribute:"data-src",srcsetAttribute:"data-srcset",sizesAttribute:"data-sizes",retinaAttribute:"data-retina",loaderAttribute:"data-loader",imageBaseAttribute:"data-imagebase",removeAttribute:!0,handledName:"handled",loadedName:"loaded",effect:"show",effectTime:0,enableThrottle:!0,throttle:250,beforeLoad:e,afterLoad:e,onError:e,onFinishedAll:e},n(t).on("load",function(){o=!0})}(window);(function(){var MutationObserver,Util,WeakMap,getComputedStyle,getComputedStyleRX,bind=function(fn,me){return function(){return fn.apply(me,arguments);};},indexOf=[].indexOf||function(item){for(var i=0,l=this.length;i<l;i++){if(i in this&&this[i]===item)return i;}return-1;};Util=(function(){function Util(){}Util.prototype.extend=function(custom,defaults){var key,value;for(key in defaults){value=defaults[key];if(custom[key]==null){custom[key]=value;}}return custom;};Util.prototype.isMobile=function(agent){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);};Util.prototype.createEvent=function(event,bubble,cancel,detail){var customEvent;if(bubble==null){bubble=false;}if(cancel==null){cancel=false;}if(detail==null){detail=null;}if(document.createEvent!=null){customEvent=document.createEvent('CustomEvent');customEvent.initCustomEvent(event,bubble,cancel,detail);}else if(document.createEventObject!=null){customEvent=document.createEventObject();customEvent.eventType=event;}else{customEvent.eventName=event;}return customEvent;};Util.prototype.emitEvent=function(elem,event){if(elem.dispatchEvent!=null){return elem.dispatchEvent(event);}else if(event in(elem!=null)){return elem[event]();}else if(("on"+event)in(elem!=null)){return elem["on"+event]();}};Util.prototype.addEvent=function(elem,event,fn){if(elem.addEventListener!=null){return elem.addEventListener(event,fn,false);}else if(elem.attachEvent!=null){return elem.attachEvent("on"+event,fn);}else{return elem[event]=fn;}};Util.prototype.removeEvent=function(elem,event,fn){if(elem.removeEventListener!=null){return elem.removeEventListener(event,fn,false);}else if(elem.detachEvent!=null){return elem.detachEvent("on"+event,fn);}else{return delete elem[event];}};Util.prototype.innerHeight=function(){if('innerHeight'in window){return window.innerHeight;}else{return document.documentElement.clientHeight;}};return Util;})();WeakMap=this.WeakMap||this.MozWeakMap||(WeakMap=(function(){function WeakMap(){this.keys=[];this.values=[];}WeakMap.prototype.get=function(key){var i,item,j,len,ref;ref=this.keys;for(i=j=0,len=ref.length;j<len;i=++j){item=ref[i];if(item===key){return this.values[i];}}};WeakMap.prototype.set=function(key,value){var i,item,j,len,ref;ref=this.keys;for(i=j=0,len=ref.length;j<len;i=++j){item=ref[i];if(item===key){this.values[i]=value;return;}}this.keys.push(key);return this.values.push(value);};return WeakMap;})());MutationObserver=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(MutationObserver=(function(){function MutationObserver(){if(typeof console!=="undefined"&&console!==null){console.warn('MutationObserver is not supported by your browser.');}if(typeof console!=="undefined"&&console!==null){console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');}}MutationObserver.notSupported=true;MutationObserver.prototype.observe=function(){};return MutationObserver;})());getComputedStyle=this.getComputedStyle||function(el,pseudo){this.getPropertyValue=function(prop){var ref;if(prop==='float'){prop='styleFloat';}if(getComputedStyleRX.test(prop)){prop.replace(getComputedStyleRX,function(_,_char){return _char.toUpperCase();});}return((ref=el.currentStyle)!=null?ref[prop]:void 0)||null;};return this;};getComputedStyleRX=/(\-([a-z]){1})/g;this.WOW=(function(){WOW.prototype.defaults={boxClass:'wow',animateClass:'animated',offset:0,mobile:true,live:true,callback:null,scrollContainer:null};function WOW(options){if(options==null){options={};}this.scrollCallback=bind(this.scrollCallback,this);this.scrollHandler=bind(this.scrollHandler,this);this.resetAnimation=bind(this.resetAnimation,this);this.start=bind(this.start,this);this.scrolled=true;this.config=this.util().extend(options,this.defaults);if(options.scrollContainer!=null){this.config.scrollContainer=document.querySelector(options.scrollContainer);}this.animationNameCache=new WeakMap();this.wowEvent=this.util().createEvent(this.config.boxClass);}WOW.prototype.init=function(){var ref;this.element=window.document.documentElement;if((ref=document.readyState)==="interactive"||ref==="complete"){this.start();}else{this.util().addEvent(document,'DOMContentLoaded',this.start);}return this.finished=[];};WOW.prototype.start=function(){var box,j,len,ref;this.stopped=false;this.boxes=(function(){var j,len,ref,results;ref=this.element.querySelectorAll("."+this.config.boxClass);results=[];for(j=0,len=ref.length;j<len;j++){box=ref[j];results.push(box);}return results;}).call(this);this.all=(function(){var j,len,ref,results;ref=this.boxes;results=[];for(j=0,len=ref.length;j<len;j++){box=ref[j];results.push(box);}return results;}).call(this);if(this.boxes.length){if(this.disabled()){this.resetStyle();}else{ref=this.boxes;for(j=0,len=ref.length;j<len;j++){box=ref[j];this.applyStyle(box,true);}}}if(!this.disabled()){this.util().addEvent(this.config.scrollContainer||window,'scroll',this.scrollHandler);this.util().addEvent(window,'resize',this.scrollHandler);this.interval=setInterval(this.scrollCallback,50);}if(this.config.live){return new MutationObserver((function(_this){return function(records){var k,len1,node,record,results;results=[];for(k=0,len1=records.length;k<len1;k++){record=records[k];results.push((function(){var l,len2,ref1,results1;ref1=record.addedNodes||[];results1=[];for(l=0,len2=ref1.length;l<len2;l++){node=ref1[l];results1.push(this.doSync(node));}return results1;}).call(_this));}return results;};})(this)).observe(document.body,{childList:true,subtree:true});}};WOW.prototype.stop=function(){this.stopped=true;this.util().removeEvent(this.config.scrollContainer||window,'scroll',this.scrollHandler);this.util().removeEvent(window,'resize',this.scrollHandler);if(this.interval!=null){return clearInterval(this.interval);}};WOW.prototype.sync=function(element){if(MutationObserver.notSupported){return this.doSync(this.element);}};WOW.prototype.doSync=function(element){var box,j,len,ref,results;if(element==null){element=this.element;}if(element.nodeType!==1){return;}element=element.parentNode||element;ref=element.querySelectorAll("."+this.config.boxClass);results=[];for(j=0,len=ref.length;j<len;j++){box=ref[j];if(indexOf.call(this.all,box)<0){this.boxes.push(box);this.all.push(box);if(this.stopped||this.disabled()){this.resetStyle();}else{this.applyStyle(box,true);}results.push(this.scrolled=true);}else{results.push(void 0);}}return results;};WOW.prototype.show=function(box){this.applyStyle(box);box.className=box.className+" "+this.config.animateClass;if(this.config.callback!=null){this.config.callback(box);}this.util().emitEvent(box,this.wowEvent);this.util().addEvent(box,'animationend',this.resetAnimation);this.util().addEvent(box,'oanimationend',this.resetAnimation);this.util().addEvent(box,'webkitAnimationEnd',this.resetAnimation);this.util().addEvent(box,'MSAnimationEnd',this.resetAnimation);return box;};WOW.prototype.applyStyle=function(box,hidden){var delay,duration,iteration;duration=box.getAttribute('data-wow-duration');delay=box.getAttribute('data-wow-delay');iteration=box.getAttribute('data-wow-iteration');return this.animate((function(_this){return function(){return _this.customStyle(box,hidden,duration,delay,iteration);};})(this));};WOW.prototype.animate=(function(){if('requestAnimationFrame'in window){return function(callback){return window.requestAnimationFrame(callback);};}else{return function(callback){return callback();};}})();WOW.prototype.resetStyle=function(){var box,j,len,ref,results;ref=this.boxes;results=[];for(j=0,len=ref.length;j<len;j++){box=ref[j];results.push(box.style.visibility='visible');}return results;};WOW.prototype.resetAnimation=function(event){var target;if(event.type.toLowerCase().indexOf('animationend')>=0){target=event.target||event.srcElement;return target.className=target.className.replace(this.config.animateClass,'').trim();}};WOW.prototype.customStyle=function(box,hidden,duration,delay,iteration){if(hidden){this.cacheAnimationName(box);}box.style.visibility=hidden?'hidden':'visible';if(duration){this.vendorSet(box.style,{animationDuration:duration});}if(delay){this.vendorSet(box.style,{animationDelay:delay});}if(iteration){this.vendorSet(box.style,{animationIterationCount:iteration});}this.vendorSet(box.style,{animationName:hidden?'none':this.cachedAnimationName(box)});return box;};WOW.prototype.vendors=["moz","webkit"];WOW.prototype.vendorSet=function(elem,properties){var name,results,value,vendor;results=[];for(name in properties){value=properties[name];elem[""+name]=value;results.push((function(){var j,len,ref,results1;ref=this.vendors;results1=[];for(j=0,len=ref.length;j<len;j++){vendor=ref[j];results1.push(elem[""+vendor+(name.charAt(0).toUpperCase())+(name.substr(1))]=value);}return results1;}).call(this));}return results;};WOW.prototype.vendorCSS=function(elem,property){var j,len,ref,result,style,vendor;style=getComputedStyle(elem);result=style.getPropertyCSSValue(property);ref=this.vendors;for(j=0,len=ref.length;j<len;j++){vendor=ref[j];result=result||style.getPropertyCSSValue("-"+vendor+"-"+property);}return result;};WOW.prototype.animationName=function(box){var animationName;try{animationName=this.vendorCSS(box,'animation-name').cssText;}catch(_error){animationName=getComputedStyle(box).getPropertyValue('animation-name');}if(animationName==='none'){return'';}else{return animationName;}};WOW.prototype.cacheAnimationName=function(box){return this.animationNameCache.set(box,this.animationName(box));};WOW.prototype.cachedAnimationName=function(box){return this.animationNameCache.get(box);};WOW.prototype.scrollHandler=function(){return this.scrolled=true;};WOW.prototype.scrollCallback=function(){var box;if(this.scrolled){this.scrolled=false;this.boxes=(function(){var j,len,ref,results;ref=this.boxes;results=[];for(j=0,len=ref.length;j<len;j++){box=ref[j];if(!(box)){continue;}if(this.isVisible(box)){this.show(box);continue;}results.push(box);}return results;}).call(this);if(!(this.boxes.length||this.config.live)){return this.stop();}}};WOW.prototype.offsetTop=function(element){var top;while(element.offsetTop===void 0){element=element.parentNode;}top=element.offsetTop;while(element=element.offsetParent){top+=element.offsetTop;}return top;};WOW.prototype.isVisible=function(box){var bottom,offset,top,viewBottom,viewTop;offset=box.getAttribute('data-wow-offset')||this.config.offset;viewTop=(this.config.scrollContainer&&this.config.scrollContainer.scrollTop)||window.pageYOffset;viewBottom=viewTop+Math.min(this.element.clientHeight,this.util().innerHeight())-offset;top=this.offsetTop(box);bottom=top+box.clientHeight;return top<=viewBottom&&bottom>=viewTop;};WOW.prototype.util=function(){return this._util!=null?this._util:this._util=new Util();};WOW.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent);};return WOW;})();}).call(this);

// $('a[href*="#"]').on('click', function (e) {
// 	e.preventDefault();

// 	$('html, body').animate({
// 		scrollTop: $($(this).attr('href')).offset().top
// 	}, 500, 'linear');
// });

$(document).ready(function() {
       $(".form-popup").click(function() {
        $('body').addClass('model-open');
           $('.contact-form').addClass('popup');
            $('.contact-form h2').removeClass('wow fadeIn animated');
			$('.contact-form p').removeClass('wow fadeIn animated');
			$('.contact-form form').removeClass('wow fadeIn animated');
         });

       $(".popup-close").click(function() {
        $('body').removeClass('model-open');
           $('.contact-form').removeClass('popup');
			$('.contact-form h2').addClass('wow fadeIn animated');
			$('.contact-form p').addClass('wow fadeIn animated');
			$('.contact-form form').addClass('wow fadeIn animated');
       });
 });

// Blog Details
function getBlogContent(t) {
   $.ajax({
       type: "post",
       url: "https://blog.mirrorfly.com/blog_feed/blogdetails.php",
       data: "type=" + t,
       beforeSend: function() {
           $(".ajaxCon").html("")
       },
       success: function(t) {
           $(".ajaxCon").html(t)
       }
   })
}
$(document).ready(function(){
    var hash = window.location.hash;
$('html, body').animate({
    // scrollTop: $(hash).offset().top - 100
}, 100);});


// Hash Tag Link
$(document).ready(function(){
  var hash = window.location.hash;
  if(hash !=""){
   Top =110;
    if(hash =="#chat-communication"){ 
     Top = 50;
     }
     else if(hash =="#screen-sharing"){
       Top =140;

     }
     else if(hash =="#push-to-talk"){
    Top =140;
     }
     else if(hash =="#infrastructure-networksecurity"){
       Top =140;
     }
     else if(hash =="#team-collaboration"){
      Top = 100;
    }
    else if(hash =="#chat-analytics"){
      Top = 80;
    }
    else if(hash =="#broadcasting-sdk"){
      Top = 80;
    } 
   $('html, body').animate({
      scrollTop: $(hash).offset().top-Top
  }, 100);
}
});
// Banner Load
$(function() {
  setTimeout(function(){
  $(".banner-left,.banner-right p,.banner-right").addClass("animated"); 
  }, 100);
});
if (jQuery(window).width() > 1199) {
  $(window).on('scroll', function() {
    var $elem = $('.bottom-cta');
    var $window = $(window);
  
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();
    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();
    if (elemBottom < docViewBottom) {
      //alert('hi')
      $('.bottom-cta').addClass('cta-animate');
    }
    else{
     $('.bottom-cta').removeClass('cta-animate');
    }
  });
  }