(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-516b60b8"],{"0418":function(t,e,i){},"09ae":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",t._b({attrs:{id:"core-navigation-drawer",dark:"rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)"!==t.barColor,"expand-on-hover":t.expandOnHover,right:t.$vuetify.rtl,src:i("1771")("./"+(t.barImage||"sidebar.png")),"mobile-break-point":"960",app:"","mini-variant-width":"80",width:"260"},scopedSlots:t._u([{key:"img",fn:function(e){return[n("v-img",t._b({attrs:{gradient:"to bottom, "+t.barColor}},"v-img",e,!1))]}}]),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},"v-navigation-drawer",t.$attrs,!1),[n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-uppercase font-weight-regular display-2"},[n("span",{staticClass:"logo-mini"},[n("a",{attrs:{target:"_blank",href:"http://obsestadosocial.com.br/"}},[n("v-img",{staticStyle:{"border-style":"none"},attrs:{src:i("cf05")}})],1)]),n("span",{staticClass:"logo-normal"},[n("a",{staticClass:"link",attrs:{target:"_blank",href:"http://obsestadosocial.com.br/"}},[t._v(" "+t._s(t.$t("tim"))+" ")])])])],1)],1),n("v-divider",{staticClass:"mb-1"}),n("v-list",{attrs:{expand:"",nav:""}},[n("div"),t._l(t.computedItems,(function(t,e){return[t.children?n("base-item-group",{key:"group-"+e,attrs:{item:t}}):n("base-item",{key:"item-"+e,attrs:{item:t}})]})),n("div")],2)],1)},a=[],r=(i("d81d"),i("5530")),o=i("2f62"),s={name:"DashboardCoreDrawer",props:{expandOnHover:{type:Boolean,default:!1}},data:function(){return{items:[{icon:"mdi-view-dashboard",title:"dashboard",to:"/"},{icon:"mdi-food-variant",title:"alim",to:"/map/alim"},{icon:"mdi-cash-multiple",title:"bolsa_familia",to:"/map/bolsaFamilia"},{icon:"mdi-account",title:"cad_unico",to:"/map/cadUnico"},{icon:"mdi-credit-card",title:"crd",to:"/map/crd"},{icon:"mdi-school",title:"edu",to:"/map/edu"},{icon:"mdi-account-group",title:"prev_social",to:"/map/prevSocial"},{icon:"mdi-heart-pulse",title:"saude",to:"/map/saude"},{icon:"mdi-account-hard-hat",title:"trabalho",to:"/map/trabalho"}]}},computed:Object(r["a"])(Object(r["a"])({},Object(o["c"])(["barColor","barImage"])),{},{drawer:{get:function(){return this.$store.state.drawer},set:function(t){this.$store.commit("SET_DRAWER",t)}},computedItems:function(){return this.items.map(this.mapItem)},profile:function(){return{avatar:!0,group:"",title:this.$t("avatar"),children:[{href:"",title:this.$t("my-profile")},{to:"",title:this.$t("edit-profile")},{to:"",title:this.$t("settings")}]}}}),watch:{"$vuetify.breakpoint.smAndDown":function(t){this.$emit("update:expandOnHover",!t)}},methods:{mapItem:function(t){return Object(r["a"])(Object(r["a"])({},t),{},{children:t.children?t.children.map(this.mapItem):void 0,title:this.$t(t.title)})}}},c=s,l=(i("f9cb"),i("2877")),h=i("6544"),u=i.n(h),d=i("ce7e"),p=i("adda"),v=i("8860"),m=i("da13"),f=i("5d23"),g=(i("99af"),i("a9e3"),i("c7cd"),i("7958"),i("3a66")),b=i("a9ad"),y=i("b848"),w=i("e707"),O=i("d10f"),$=i("7560"),A=i("a293"),C=i("dc22"),x=i("c3f0"),k=i("80d2"),_=i("58df"),M=Object(_["a"])(Object(g["a"])("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),b["a"],y["a"],w["a"],O["a"],$["a"]),j=M.extend({name:"v-navigation-drawer",provide:function(){return{isInNav:"nav"===this.tag}},directives:{ClickOutside:A["a"],Resize:C["a"],Touch:x["a"]},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default:function(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},mobileBreakPoint:{type:[Number,String],default:1264},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default:function(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:function(){return{isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}},computed:{applicationProperty:function(){return this.right?"right":"left"},classes:function(){return Object(r["a"])({"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary},this.themeClasses)},computedMaxHeight:function(){if(!this.hasApp)return null;var t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop:function(){if(!this.hasApp)return 0;var t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform:function(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth:function(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp:function(){return this.app&&!this.isMobile&&!this.temporary},isBottom:function(){return this.bottom&&this.isMobile},isMiniVariant:function(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile:function(){return!this.stateless&&!this.permanent&&this.$vuetify.breakpoint.width<parseInt(this.mobileBreakPoint,10)},reactsToClick:function(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile:function(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize:function(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute:function(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay:function(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles:function(){var t=this.isBottom?"translateY":"translateX",e={height:Object(k["f"])(this.height),top:this.isBottom?"auto":Object(k["f"])(this.computedTop),maxHeight:null!=this.computedMaxHeight?"calc(100% - ".concat(Object(k["f"])(this.computedMaxHeight),")"):void 0,transform:"".concat(t,"(").concat(Object(k["f"])(this.computedTransform,"%"),")"),width:Object(k["f"])(this.computedWidth)};return e}},watch:{$route:"onRouteChange",isActive:function(t){this.$emit("input",t)},isMobile:function(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent:function(t){t&&(this.isActive=!0)},showOverlay:function(t){t?this.genOverlay():this.removeOverlay()},value:function(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover:function(t){this.updateMiniVariant(!t)}},beforeMount:function(){this.init()},methods:{calculateTouchArea:function(){var t=this.$el.parentNode;if(t){var e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}}},closeConditional:function(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend:function(){return this.genPosition("append")},genBackground:function(){var t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(p["a"],{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives:function(){var t=this,e=[{name:"click-outside",value:function(){return t.isActive=!1},args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||e.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),e},genListeners:function(){var t=this,e={transitionend:function(e){if(e.target===e.currentTarget){t.$emit("transitionend",e);var i=document.createEvent("UIEvents");i.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(i)}}};return this.miniVariant&&(e.click=function(){return t.$emit("update:mini-variant",!1)}),this.expandOnHover&&(e.mouseenter=function(){return t.isMouseover=!0},e.mouseleave=function(){return t.isMouseover=!1}),e},genPosition:function(t){var e=Object(k["m"])(this,t);return e?this.$createElement("div",{staticClass:"v-navigation-drawer__".concat(t)},e):e},genPrepend:function(){return this.genPosition("prepend")},genContent:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init:function(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange:function(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft:function(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight:function(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication:function(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;var t=Number(this.computedWidth);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant:function(t){this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render:function(t){var e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||Object(k["m"])(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}}),E=Object(l["a"])(c,n,a,!1,null,null,null);e["default"]=E.exports;u()(E,{VDivider:d["a"],VImg:p["a"],VList:v["a"],VListItem:m["a"],VListItemContent:f["a"],VListItemTitle:f["c"],VNavigationDrawer:j})},1771:function(t,e,i){var n={"./banner-observatorio.jpg":"94e5","./banner.jpg":"4c4a","./footer.png":"d9a5","./logo.png":"cf05","./pricing.jpg":"429c","./sidebar.jpg":"3a2d","./sidebar.png":"e04d"};function a(t){var e=r(t);return i(e)}function r(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=r,t.exports=a,a.id="1771"},"3a2d":function(t,e,i){t.exports=i.p+"img/sidebar.5ba87809.jpg"},"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i("fe6c"),a=i("58df");function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(a["a"])(Object(n["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"3c93":function(t,e,i){},"429c":function(t,e,i){t.exports=i.p+"img/pricing.f76b550f.jpg"},"4c4a":function(t,e,i){t.exports=i.p+"img/banner.d3c3c57a.jpg"},7958:function(t,e,i){},"94e5":function(t,e,i){t.exports=i.p+"img/banner-observatorio.d3c3c57a.jpg"},cf05:function(t,e,i){t.exports=i.p+"img/logo.9a803a39.png"},d9a5:function(t,e,i){t.exports=i.p+"img/footer.2ea11294.png"},e04d:function(t,e,i){t.exports=i.p+"img/sidebar.7e382ac5.png"},e707:function(t,e,i){"use strict";i("caad"),i("a9e3"),i("2532");var n=i("5530"),a=(i("3c93"),i("a9ad")),r=i("7560"),o=i("f2e7"),s=i("58df"),c=Object(s["a"])(a["a"],r["a"],o["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(n["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}}),l=c,h=i("80d2"),u=i("2b0e");e["a"]=u["default"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new l({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(h["o"])(t.$el)))})),this.overlay&&(this.overlay.value=!0),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(h["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[h["q"].up,h["q"].pageup],i=[h["q"].down,h["q"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll:function(t,e){return 0===t.scrollTop&&e<0||t.scrollTop+t.clientHeight===t.scrollHeight&&e>0},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=t.path||this.composedPath(t),i=t.deltaY;if("keydown"===t.type&&e[0]===document.body){var n=this.$refs.dialog,a=window.getSelection().anchorNode;return!(n&&this.hasScrollbar(n)&&this.isInside(a,n))||this.shouldScroll(n,i)}for(var r=0;r<e.length;r++){var o=e[r];if(o===document)return!0;if(o===document.documentElement)return!0;if(o===this.$refs.content)return!0;if(this.hasScrollbar(o))return this.shouldScroll(o,i)}return!0},composedPath:function(t){if(t.composedPath)return t.composedPath();var e=[],i=t.target;while(i){if(e.push(i),"HTML"===i.tagName)return e.push(document),e.push(window),e;i=i.parentElement}return e},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(h["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},f9cb:function(t,e,i){"use strict";var n=i("0418"),a=i.n(n);a.a}}]);
//# sourceMappingURL=chunk-516b60b8.d6b0037b.js.map