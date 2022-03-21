layui.define(["jquery","laytpl","lay"],function(e){"use strict";function i(e){var i=this;i.index=++c.index,i.config=s.extend({},i.config,c.config,e),i.init()}var s=layui.$,m=layui.laytpl,t=layui.hint(),l=layui.device().mobile?"click":"mousedown",o="dropdown",r="layui_"+o+"_index",c={config:{},index:layui[o]?layui[o].index+1e4:0,set:function(e){var i=this;return i.config=s.extend({},i.config,e),i},on:function(e,i){return layui.onevent.call(this,o,e,i)}},p=function(){var i=this,e=i.config,t=e.id;return p.that[t]=i,{config:e,reload:function(e){i.reload.call(i,e)}}},n="layui-menu-item-up",a="layui-menu-item-down",y="layui-menu-body-title",u="layui-menu-item-group",f="layui-menu-item-parent",d="layui-menu-item-checked",g="layui-menu-item-checked2",v="layui-menu-body-panel",h="layui-menu-body-panel-left",w="."+u+">."+y;i.prototype.config={trigger:"click",content:"",className:"",style:"",show:!1,isAllowSpread:!0,isSpreadItem:!0,data:[],delay:300},i.prototype.reload=function(e){var i=this;i.config=s.extend({},i.config,e),i.init(!0)},i.prototype.init=function(e){var i=this,t=i.config,n=t.elem=s(t.elem);if(1<n.length)return layui.each(n,function(){c.render(s.extend({},t,{elem:this}))}),i;if(!e&&n[0]&&n.data(r)){n=p.getThis(n.data(r));return n?n.reload(t):void 0}t.id="id"in t?t.id:i.index,t.show&&i.render(e),i.events()},i.prototype.render=function(e){var i,n=this,u=n.config,t=s("body"),d=function(r,e){return layui.each(e,function(e,i){var t,n=i.child&&0<i.child.length,a=("isSpreadItem"in i?i:u).isSpreadItem,l=i.templet?m(i.templet).render(i):u.templet?m(u.templet).render(i):i.title,o=(n&&(i.type=i.type||"parent"),i.type?{group:"group",parent:"parent","-":"-"}[i.type]||"parent":"");("-"===o||i.title||i.id||n)&&((a=s(["<li"+(t={group:"layui-menu-item-group"+(u.isAllowSpread?a?" layui-menu-item-down":" layui-menu-item-up":""),parent:f,"-":"layui-menu-item-divider"},n||o?' class="'+t[o]+'"':"")+">",(l="href"in i?'<a href="'+i.href+'" target="'+(i.target||"_self")+'">'+l+"</a>":l,n?'<div class="'+y+'">'+l+("parent"===o?'<i class="layui-icon layui-icon-right"></i>':"group"===o&&u.isAllowSpread?'<i class="layui-icon layui-icon-'+(a?"up":"down")+'"></i>':"")+"</div>":'<div class="'+y+'">'+l+"</div>"),"</li>"].join(""))).data("item",i),n&&(l=s('<div class="layui-panel layui-menu-body-panel"></div>'),n=s("<ul></ul>"),"parent"===o?(l.append(d(n,i.child)),a.append(l)):a.append(d(n,i.child))),r.append(a))}),r},a=['<div class="layui-dropdown layui-border-box layui-panel layui-anim layui-anim-downbit">',"</div>"].join("");!(e="contextmenu"===u.trigger||lay.isTopElem(u.elem[0])?!0:e)&&u.elem.data(r+"_opened")||(n.elemView=s(a),n.elemView.append(u.content||(i=s('<ul class="layui-menu layui-dropdown-menu"></ul>'),0<u.data.length?d(i,u.data):i.html('<li class="layui-menu-item-none">no menu</li>'),i)),u.className&&n.elemView.addClass(u.className),u.style&&n.elemView.attr("style",u.style),c.thisId=u.id,n.remove(),t.append(n.elemView),u.elem.data(r+"_opened",!0),n.position(),p.prevElem=n.elemView,p.prevElem.data("prevElem",u.elem),n.elemView.find(".layui-menu").on(l,function(e){layui.stope(e)}),n.elemView.find(".layui-menu li").on("click",function(e){var i=s(this),t=i.data("item")||{};t.child&&0<t.child.length||"-"===t.type||(n.remove(),"function"==typeof u.click&&u.click(t,i))}),n.elemView.find(w).on("click",function(e){var i=s(this).parent();"group"===(i.data("item")||{}).type&&u.isAllowSpread&&p.spread(i)}),"mouseenter"===u.trigger&&n.elemView.on("mouseenter",function(){clearTimeout(p.timer)}).on("mouseleave",function(){n.delayRemove()}))},i.prototype.position=function(e){var i=this.config;lay.position(i.elem[0],this.elemView[0],{position:i.position,e:this.e,clickType:"contextmenu"===i.trigger?"right":null,align:i.align||null})},i.prototype.remove=function(){this.config;var e=p.prevElem;e&&(e.data("prevElem")&&e.data("prevElem").data(r+"_opened",!1),e.remove())},i.prototype.delayRemove=function(){var e=this,i=e.config;clearTimeout(p.timer),p.timer=setTimeout(function(){e.remove()},i.delay)},i.prototype.events=function(){var i=this,t=i.config;"hover"===t.trigger&&(t.trigger="mouseenter"),i.prevElem&&i.prevElem.off(t.trigger,i.prevElemCallback),i.prevElem=t.elem,i.prevElemCallback=function(e){clearTimeout(p.timer),i.e=e,i.render(),e.preventDefault(),"function"==typeof t.ready&&t.ready(i.elemView,t.elem,i.e.target)},t.elem.on(t.trigger,i.prevElemCallback),"mouseenter"===t.trigger&&t.elem.on("mouseleave",function(){i.delayRemove()})},p.that={},p.getThis=function(e){var i=p.that[e];return i||t.error(e?o+" instance with ID '"+e+"' not found":"ID argument required"),i},p.spread=function(e){var i=e.children("."+y).find(".layui-icon");e.hasClass(n)?(e.removeClass(n).addClass(a),i.removeClass("layui-icon-down").addClass("layui-icon-up")):(e.removeClass(a).addClass(n),i.removeClass("layui-icon-up").addClass("layui-icon-down"))},function(){var n=s(window),e=s(document);n.on("resize",function(){if(c.thisId){var e=p.getThis(c.thisId);if(e){if(!e.elemView[0]||!s(".layui-dropdown")[0])return!1;"contextmenu"===e.config.trigger?e.remove():e.position()}}}),e.on(l,function(e){var i,t;!c.thisId||(i=p.getThis(c.thisId))&&(t=i.config,!lay.isTopElem(t.elem[0])&&"contextmenu"!==t.trigger&&(e.target===t.elem[0]||t.elem.find(e.target)[0]||e.target===i.elemView[0]||i.elemView&&i.elemView.find(e.target)[0])||i.remove())});var i=".layui-menu:not(.layui-dropdown-menu) li";e.on("click",i,function(e){var i=s(this),t=i.parents(".layui-menu").eq(0),n=i.hasClass(u)||i.hasClass(f),a=t.attr("lay-filter")||t.attr("id"),l=lay.options(this);i.hasClass("layui-menu-item-divider")||n||(t.find("."+d).removeClass(d),t.find("."+g).removeClass(g),i.addClass(d),i.parents("."+f).addClass(g),layui.event.call(this,o,"click("+a+")",l))}),e.on("click",i+w,function(e){var i=s(this).parents("."+u+":eq(0)"),t=lay.options(i[0]);"isAllowSpread"in t&&!t.isAllowSpread||p.spread(i)});i=".layui-menu ."+f;e.on("mouseenter",i,function(e){var i,t=s(this).find("."+v);t[0]&&((i=t[0].getBoundingClientRect()).right>n.width()&&(t.addClass(h),(i=t[0].getBoundingClientRect()).left<0&&t.removeClass(h)),i.bottom>n.height()&&t.eq(0).css("margin-top",-(i.bottom-n.height())))}).on("mouseleave",i,function(e){var i=s(this).children("."+v);i.removeClass(h),i.css("margin-top",0)})}(),c.reload=function(e,i){e=p.getThis(e);return e?(e.reload(i),p.call(e)):this},c.render=function(e){e=new i(e);return p.call(e)},e(o,c)});