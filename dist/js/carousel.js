/*! Formstone v0.0.1 [carousel.js] 2014-12-11 | MIT License | formstone.it */

!function(a,b){"use strict";function c(){x.on(v.resize,d)}function d(){y.length&&(z=w.startTimer(z,A,function(){w.iterate.call(y,k)}))}function e(){y=a(t.base)}function f(c){c.useMargin||b.support.transform||(c.useMargin=!0);var d="";if(c.controls&&(d+='<div class="'+u.controls+'">',d+='<button class="'+[u.control,u.control_previous].join(" ")+'">'+c.labels.previous+"</button>",d+='<button class="'+[u.control,u.control_next].join(" ")+'">'+c.labels.next+"</button>",d+="</div>"),c.pagination&&(d+='<div class="'+u.pagination+'">',d+="</div>"),this.addClass([u.base,c.customClass].join(" ")).wrapInner('<div class="'+u.canister+'"></div>').append(d),c.$canister=this.find(t.canister).eq(0),c.$controls=this.find(t.controls).eq(0),c.$pagination=this.find(t.pagination).eq(0),c.$items=c.$canister.children().addClass(u.item),c.$controlItems=c.$controls.find(t.control),c.$paginationItems=c.$pagination.find(t.page),c.$images=c.$canister.find("img"),c.index=0,c.enabled=!1,c.leftPosition=0,c.totalImages=c.$images.length,c.resizeTimer=null,c.autoTimer=null,c.deltaX=null,c.deltaY=null,c.xStart=0,c.yStart=0,c.touchstart=0,c.touchEnd=0,c.maxWidth=1/0===c.maxWidth?"100000px":c.maxWidth,a.mediaquery("bind","(min-width:"+c.minWidth+") and (max-width:"+c.maxWidth+")",{enter:function(){i.call(c.$el,c)},leave:function(){h.call(c.$el,c)}}),c.totalImages>0){c.loadedImages=0;for(var f=0;f<c.totalImages;f++){var g=c.$images.eq(f);g.one(v.load,c,m),(g[0].complete||g[0].height)&&g.trigger(v.load)}}c.autoAdvance&&(c.autoTimer=w.startTimer(c.autoTimer,c.autoTime,function(){n(c)},!0)),e()}function g(a){w.clearTimer(a.autoTimer),a.canister&&a.$items.unwrap(),a.$items.removeClass(u.visible),a.pagination&&a.$pagination.remove(),a.controls&&a.$controls.remove(),this.removeClass([u.base,u.enabled,u.single,a.customClass].join(" ")),e()}function h(a){a.enabled&&(w.clearTimer(a.autoTimer),a.enabled=!1,this.removeClass(u.enabled),a.$canister.attr("style","").css(w.prefix(C,"none")),a.$controls.removeClass(u.visible),a.$pagination.removeClass(u.visible).html(""),a.$canister.css(a.useMargin?{marginLeft:""}:w.prefix(B,"translate3d(0px, 0, 0)")),a.index=0)}function i(a){a.enabled||(a.enabled=!0,this.addClass(u.enabled).on(v.clickTouchStart,t.control,a,o).on(v.clickTouchStart,t.page,a,p),a.$canister.css(w.prefix(C,"")),k.call(this,a))}function j(a,b){a.enabled&&(w.clearTimer(a.autoTimer),q(a,b-1))}function k(a){if(a.enabled){var b,c;if(a.count=a.$items.length,a.count<1)return;for(this.removeClass(u.animated),a.width=this.outerWidth(!1),a.itemWidth=Math.floor(a.width/a.show),a.pageCount=Math.ceil(a.count/a.show),a.$canister.css({width:a.width*a.pageCount}),a.$items.css({width:a.itemWidth}).removeClass(u.visible),a.pages=[],b=0,c=0;b<a.count;b+=a.show)a.pages.push({left:c*a.width,$items:a.$items.slice(b,b+a.show)}),c++;a.width+=a.extraMargin,a.maxMove=-a.pages[a.pages.length-1].left;var d="";for(b=0;b<a.pageCount;b++)d+='<button class="'+u.page+'">'+(b+1)+"</button>";a.$pagination.html(d),a.pageCount<1?(a.$controls.removeClass(u.visible),a.$pagination.removeClass(u.visible)):(a.$controls.addClass(u.visible),a.$pagination.addClass(u.visible)),a.$paginationItems=a.$el.find(t.page),q(a,a.index,!1),setTimeout(function(){a.$el.addClass(u.animated)},5),console.log(a)}}function l(a){a.enabled&&(a.$items=a.$canister.children().addClass(u.item),k.call(this,a))}function m(a){var b=a.data;b.loadedImages++,b.loadedImages===b.totalImages&&k.call(b.$roller,b)}function n(a){var b=a.index+1;b>=a.pageCount&&(b=0),q(a,b)}function o(b){w.killEvent(b);var c=b.data,d=c.index+(a(b.currentTarget).hasClass(u.control_next)?1:-1);w.clearTimer(c.autoTimer),q(c,d)}function p(b){w.killEvent(b);var c=b.data,d=c.$paginationItems.index(a(b.currentTarget));w.clearTimer(c.autoTimer),q(c,d)}function q(a,b,c){0>b&&(b=a.infinite?a.pageCount-1:0),b>=a.pageCount&&(b=a.infinite?0:a.pageCount-1),a.pages[b]&&(a.leftPosition=-a.pages[b].left+a.extraMargin),a.leftPosition<a.maxMove&&(a.leftPosition=a.maxMove),(a.leftPosition>0||isNaN(a.leftPosition))&&(a.leftPosition=0),a.useMargin?a.$canister.css({marginLeft:a.leftPosition}):c===!1?(a.$canister.css(w.prefix(C,"none")).css(w.prefix(B,"translate3d("+a.leftPosition+"px, 0, 0)")),setTimeout(function(){a.$canister.css(w.prefix(C,""))},5)):a.$canister.css(w.prefix(B,"translate3d("+a.leftPosition+"px, 0, 0)")),a.$items.removeClass(u.visible),a.pages[b].$items.addClass(u.visible),c!==!1&&b!==a.index&&(a.infinite||b>-1&&b<a.pageCount)&&a.$el.trigger(v.update,[b]),a.index=b,r(a)}function r(a){a.$paginationItems.removeClass(u.active).eq(a.index).addClass(u.active),a.infinite?a.$controlItems.addClass(u.enabled):a.pageCount<1?a.$controlItems.removeClass(u.enabled):(a.$controlItems.addClass(u.enabled),a.index<=0?a.$controlItems.filter(t.control_previous).removeClass(u.enabled):(a.index>=a.pageCount||a.leftPosition===a.maxMove)&&a.$controlItems.filter(t.control_next).removeClass(u.enabled))}var s=b.Plugin("carousel",{widget:!0,defaults:{autoAdvance:!1,autoTime:8e3,autoWidth:!1,controls:!0,customClass:"",extraMargin:0,infinite:!1,labels:{next:"Next",previous:"Previous"},maxWidth:1/0,minWidth:"0px",paged:!1,pagination:!0,show:1,touchPaged:!0,useMargin:!1},classes:["canister","item","controls","control","pagination","page","animated","enabled","visible","active","control_previous","control_next"],events:{update:"update"},methods:{_setup:c,_construct:f,_destruct:g,disable:h,enable:i,jump:j,reset:l,resize:k}}),t=s.classes,u=t.raw,v=s.events,w=s.functions,x=b.$window,y=[],z=null,A=20,B=b.transform,C=b.transition}(jQuery,Formstone);