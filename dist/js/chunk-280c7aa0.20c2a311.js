(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-280c7aa0"],{"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var o=i("fe6c"),r=i("58df");function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(r["a"])(Object(o["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"40dc":function(t,e,i){"use strict";i("a9e3"),i("b680"),i("c7cd");var o=i("5530"),r=(i("8b0d"),i("71d9"));function n(t,e){var i=e.value,o=e.options||{passive:!0},r=e.arg?document.querySelector(e.arg):window;r&&(r.addEventListener("scroll",i,o),t._onScroll={callback:i,options:o,target:r})}function s(t){if(t._onScroll){var e=t._onScroll,i=e.callback,o=e.options,r=e.target;r.removeEventListener("scroll",i,o),delete t._onScroll}}var l={inserted:n,unbind:s},c=l,a=i("3a66"),h=i("d9bd"),p=i("2b0e"),d=p["default"].extend({name:"scrollable",directives:{Scroll:l},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!==typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(h["c"])("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),u=i("d10f"),f=i("f2e7"),v=i("80d2"),m=i("58df"),b=Object(m["a"])(r["a"],d,u["a"],f["a"],Object(a["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));e["a"]=b.extend({name:"v-app-bar",directives:{Scroll:c},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return d.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return Object(o["a"])(Object(o["a"])({},r["a"].options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},computedContentHeight:function(){if(!this.shrinkOnScroll)return r["a"].options.computed.computedContentHeight.call(this);var t=this.computedOriginalHeight,e=this.dense?48:56,i=t,o=i-e,n=o/this.computedScrollThreshold,s=this.currentScroll*n;return Math.max(e,i-s)},computedFontSize:function(){if(this.isProminent){var t=this.dense?96:128,e=t-this.computedContentHeight,i=.00347;return Number((1.5-e*i).toFixed(2))}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll){var t=Math.max((this.computedScrollThreshold-this.currentScroll)/this.computedScrollThreshold,0);return Number(parseFloat(t).toFixed(2))}},computedOriginalHeight:function(){var t=r["a"].options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:r["a"].options.computed.isCollapsed.call(this)},isProminent:function(){return r["a"].options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return Object(o["a"])(Object(o["a"])({},r["a"].options.computed.styles.call(this)),{},{fontSize:Object(v["f"])(this.computedFontSize,"rem"),marginTop:Object(v["f"])(this.computedMarginTop),transform:"translateY(".concat(Object(v["f"])(this.computedTransform),")"),left:Object(v["f"])(this.computedLeft),right:Object(v["f"])(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=r["a"].options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=r["a"].options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},"5e23":function(t,e,i){},"71d9":function(t,e,i){"use strict";i("0481"),i("4160"),i("4069"),i("a9e3");var o=i("3835"),r=i("5530"),n=(i("5e23"),i("8dd9")),s=i("adda"),l=i("80d2"),c=i("d9bd");e["a"]=n["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"},tile:{type:Boolean,default:!0}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(r["a"])(Object(r["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(r["a"])(Object(r["a"])({},this.measurableStyles),{},{height:Object(l["f"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var i=Object(o["a"])(e,2),r=i[0],n=i[1];t.$attrs.hasOwnProperty(r)&&Object(c["a"])(r,n,t)}))},methods:{genBackground:function(){var t={height:Object(l["f"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(s["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(l["f"])(this.computedContentHeight)}},Object(l["m"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(l["f"])(this.extensionHeight)}},Object(l["m"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}})},"8b0d":function(t,e,i){},"8e07":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app-bar",{attrs:{id:"app-bar",absolute:"",app:"",color:"transparent",flat:"",height:"75"}},[i("v-btn",{staticClass:"mr-3",attrs:{elevation:"1",fab:"",small:""},on:{click:function(e){t.$vuetify.breakpoint.smAndDown?t.setDrawer(!t.drawer):t.$emit("input",!t.value)}}},[t.value?i("v-icon",[t._v(" mdi-view-quilt ")]):i("v-icon",[t._v(" mdi-dots-vertical ")])],1)],1)},r=[],n=i("5530"),s=i("2f62"),l={name:"DashboardCoreAppBar",components:{},props:{value:{type:Boolean,default:!1}},data:function(){return{notifications:["Mike John Responded to your email","You have 5 new tasks","You're now friends with Andrew","Another Notification","Another one"],profile:[{title:"Profile"},{title:"Settings"},{divider:!0},{title:"Log out"}]}},computed:Object(n["a"])({},Object(s["c"])(["drawer"])),methods:Object(n["a"])({},Object(s["b"])({setDrawer:"SET_DRAWER"}))},c=l,a=i("2877"),h=i("6544"),p=i.n(h),d=i("40dc"),u=i("8336"),f=i("132d"),v=Object(a["a"])(c,o,r,!1,null,null,null);e["default"]=v.exports;p()(v,{VAppBar:d["a"],VBtn:u["a"],VIcon:f["a"]})}}]);
//# sourceMappingURL=chunk-280c7aa0.20c2a311.js.map