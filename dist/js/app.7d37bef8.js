(function(t){function e(e){for(var n,r,c=e[0],o=e[1],l=e[2],u=0,d=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},s={app:0},i=[];function c(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-167c454f":"d983d5d1","chunk-251397ac":"0db2f856","chunk-25745c8c":"dbccff28","chunk-9499f268":"b217520b","chunk-0e0159f8":"0079b185","chunk-79571487":"03ebebb2","chunk-0a22ceb0":"180ba3f1","chunk-2b30a047":"9eba84cd","chunk-3f37071b":"6ff59379","chunk-706c3bac":"cc63670f","chunk-725b8b58":"142b44fe","chunk-9af924d8":"8483bd45","chunk-af3a6ae4":"70b2821b","chunk-e7b658b2":"c949a2a4","chunk-280c7aa0":"20c2a311","chunk-516b60b8":"d6b0037b","chunk-e0b36f76":"aacbe286","chunk-2ecd78f7":"1cb10aca","chunk-53faa9b4":"868ffeeb","chunk-856da858":"1f7e950f","chunk-0f85cdc6":"ac1e07fb"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a={"chunk-167c454f":1,"chunk-251397ac":1,"chunk-25745c8c":1,"chunk-9499f268":1,"chunk-0e0159f8":1,"chunk-79571487":1,"chunk-0a22ceb0":1,"chunk-2b30a047":1,"chunk-3f37071b":1,"chunk-706c3bac":1,"chunk-725b8b58":1,"chunk-9af924d8":1,"chunk-af3a6ae4":1,"chunk-e7b658b2":1,"chunk-280c7aa0":1,"chunk-516b60b8":1,"chunk-e0b36f76":1,"chunk-2ecd78f7":1,"chunk-53faa9b4":1,"chunk-856da858":1,"chunk-0f85cdc6":1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-167c454f":"2d52ccdd","chunk-251397ac":"73d90aa2","chunk-25745c8c":"73d90aa2","chunk-9499f268":"55793659","chunk-0e0159f8":"dc93c639","chunk-79571487":"4fa8dfd1","chunk-0a22ceb0":"276eca4b","chunk-2b30a047":"276eca4b","chunk-3f37071b":"7d85bfb1","chunk-706c3bac":"276eca4b","chunk-725b8b58":"7d85bfb1","chunk-9af924d8":"276eca4b","chunk-af3a6ae4":"276eca4b","chunk-e7b658b2":"276eca4b","chunk-280c7aa0":"42d30285","chunk-516b60b8":"a8d48655","chunk-e0b36f76":"ce9e4fb0","chunk-2ecd78f7":"42d30285","chunk-53faa9b4":"ce9e4fb0","chunk-856da858":"5db66fe7","chunk-0f85cdc6":"96b32d09"}[t]+".css",s=o.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===s))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===n||u===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[t],f.parentNode.removeChild(f),a(i)},f.href=s;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){r[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=s[t]=[e,a]}));e.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=c(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}s[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"140b":function(t,e,a){},"1f55":function(t,e,a){},"27b8":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-alert",t._g(t._b({staticClass:"v-alert--material",attrs:{dark:""},scopedSlots:t._u([t.$attrs.icon?{key:"prepend",fn:function(){return[a("v-icon",{staticClass:"v-alert__icon elevation-6 white",attrs:{light:"",color:t.$attrs.color}},[t._v(" "+t._s(t.$attrs.icon)+" ")])]},proxy:!0}:null,t.$attrs.dismissible?{key:"close",fn:function(e){var n=e.toggle;return[a("v-btn",{attrs:{"aria-label":t.$vuetify.lang.t("$vuetify.close"),color:"",icon:"",small:""},on:{click:n}},[a("v-icon",[t._v(" $vuetify.icons.cancel ")])],1)]}}:null],null,!0)},"v-alert",t.$attrs,!1),t.$listeners),[t._t("default")],2)},r=[],s={name:"MaterialAlert"},i=s,c=(a("b22c"),a("2877")),o=a("6544"),l=a.n(o),u=a("0798"),d=a("8336"),f=a("132d"),b=Object(c["a"])(i,n,r,!1,null,null,null);e["default"]=b.exports;l()(b,{VAlert:u["a"],VBtn:d["a"],VIcon:f["a"]})},"2ffb":function(t,e,a){},"301f":function(t){t.exports=JSON.parse('{"avatar":"Tania Andrew","buttons":"Botões","calendar":"Calendário","charts":"Gráficos","components":"Componentes","ct":"OB","dashboard":"Home","alim":"Alimentação","bolsa_familia":"Bolsa Família","cad_unico":"Cadastro Único","crd":"Crédito","edu":"Educação","prev_social":"Previdência Social","saude":"Saúde","trabalho":"Trabalho","dtables":"Tabelas","eforms":"Extended Forms","error":"Error Page","etables":"Extended Tables","example":"Example","forms":"Forms","fullscreen":"Full Screen Map","google":"Google Maps","grid":"Grid System","icons":"Icons","lock":"Lock Screen Page","login":"Login Page","maps":"Maps","multi":"Multi Level Collapse","notifications":"Notifications","pages":"Pages","plan":"Choose Plan","pricing":"Pricing","my-profile":"My Profile","edit-profile":"Edit Profile","register":"Register Page","rforms":"Regular Forms","rtables":"Regular Tables","rtl":"RTL Support","search":"Search","settings":"Settings","tables":"Tables","tabs":"Tabs","tim":"Página Inicial","timeline":"Timeline","typography":"Typography","user":"User Profile","vforms":"Validation Forms","widgets":"Widgets","wizard":"Wizard"}')},3648:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"display-2 font-weight-light col col-12 text-left text--primary pa-0 mb-8"},[a("h5",{staticClass:"font-weight-light"},[t._v(" "+t._s(t.subheading)+" "),t.text?[a("span",{staticClass:"subtitle-1",domProps:{textContent:t._s(t.text)}})]:t._e()],2),a("div",{staticClass:"pt-2"},[t._t("default")],2)])},r=[],s={name:"Subheading",props:{subheading:{type:String,default:""},text:{type:String,default:""}}},i=s,c=a("2877"),o=Object(c["a"])(i,n,r,!1,null,null,null);e["default"]=o.exports},3728:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list-item",{attrs:{href:t.href,rel:t.href&&"#"!==t.href?"noopener":void 0,target:t.href&&"#"!==t.href?"_blank":void 0,to:t.item.to,"active-class":"primary "+(t.isDark?"white":"black")+"--text"}},[t.text?a("v-list-item-icon",{staticClass:"v-list-item__icon--text",domProps:{textContent:t._s(t.computedText)}}):t.item.icon?a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(t.item.icon)}})],1):t._e(),t.item.title||t.item.subtitle?a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(t.item.title)}}),a("v-list-item-subtitle",{domProps:{textContent:t._s(t.item.subtitle)}})],1):t._e()],1)},r=[],s=(a("4160"),a("ac1f"),a("1276"),a("159b"),a("7560")),i={name:"Item",mixins:[s["a"]],props:{item:{type:Object,default:function(){return{href:void 0,icon:void 0,subtitle:void 0,title:void 0,to:void 0}}},text:{type:Boolean,default:!1}},computed:{computedText:function(){if(!this.item||!this.item.title)return"";var t="";return this.item.title.split(" ").forEach((function(e){t+=e.substring(0,1)})),t},href:function(){return this.item.href||(this.item.to?void 0:"#")}}},c=i,o=a("2877"),l=a("6544"),u=a.n(l),d=a("132d"),f=a("da13"),b=a("5d23"),m=a("34c3"),p=Object(o["a"])(c,n,r,!1,null,null,null);e["default"]=p.exports;u()(p,{VIcon:d["a"],VListItem:f["a"],VListItemContent:b["a"],VListItemIcon:m["a"],VListItemSubtitle:b["b"],VListItemTitle:b["c"]})},"3e16":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-menu",t._b({attrs:{transition:t.transition,"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.attrs,r=e.on;return[a("v-btn",t._g(t._b({attrs:{color:t.color,default:"","min-width":"200",rounded:""}},"v-btn",n,!1),r),[t._t("default"),a("v-icon",[t._v(" mdi-"+t._s(t.value?"menu-up":"menu-down")+" ")])],2)]}}],null,!0),model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},"v-menu",t.$attrs,!1),[a("v-sheet",[a("v-list",{attrs:{dense:""}},t._l(t.items,(function(e,n){return a("v-list-item",{key:n,on:{click:function(a){return t.$("click:action-"+e.id)}}},[a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1)})),1)],1)],1)},r=[],s=a("a452"),i={name:"MaterialDropdown",mixins:[s["a"]],props:{color:{type:String,default:"primary"},items:{type:Array,default:function(){return[{id:void 0,text:void 0}]}},transition:{type:String,default:"scale-transition"}}},c=i,o=a("2877"),l=a("6544"),u=a.n(l),d=a("8336"),f=a("132d"),b=a("8860"),m=a("da13"),p=a("5d23"),h=a("e449"),v=a("8dd9"),g=Object(o["a"])(c,n,r,!1,null,null,null);e["default"]=g.exports;u()(g,{VBtn:d["a"],VIcon:f["a"],VList:b["a"],VListItem:m["a"],VListItemContent:p["a"],VListItemTitle:p["c"],VMenu:h["a"],VSheet:v["a"]})},"3fab":function(t,e,a){"use strict";e["a"]={api:"https://api.spatialize.com.br",geoserver:"https://geoserver.spatialize.com.br"}},"407e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-tabs",t._b({staticClass:"v-tabs--pill",attrs:{"active-class":t.color+" "+(t.$vuetify.theme.dark?"black":"white")+"--text","hide-slider":""},model:{value:t.internalValue,callback:function(e){t.internalValue=e},expression:"internalValue"}},"v-tabs",t.$attrs,!1),[t._t("default"),t._t("items")],2)},r=[],s=a("a452"),i={name:"MaterialTabs",mixins:[s["a"]],props:{color:{type:String,default:"primary"}}},c=i,o=(a("9743"),a("2877")),l=a("6544"),u=a.n(l),d=a("fe57"),f=Object(o["a"])(c,n,r,!1,null,null,null);e["default"]=f.exports;u()(f,{VTabs:d["a"]})},4678:function(t,e,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb718","./de-ch.js":"bb718","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=s(t);return a(e)}function s(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=s,t.exports=r,r.id="4678"},"4f76":function(t,e,a){},"52c0":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"v-card--wizard",attrs:{elevation:"12","max-width":"700"}},[a("v-card-title",{staticClass:"justify-center display-2 font-weight-light pt-5"},[t._v(" Build your profile ")]),a("div",{staticClass:"text-center display-1 grey--text font-weight-light mb-6"},[t._v(" This information will let us know more about you. ")]),a("v-tabs",{ref:"tabs",attrs:{"background-color":"green lighten-5",color:"white",grow:"","slider-size":"50"},model:{value:t.internalValue,callback:function(e){t.internalValue=e},expression:"internalValue"}},[a("v-tabs-slider",{staticClass:"mt-1",attrs:{color:"success"}}),t._l(t.items,(function(e,n){return a("v-tab",{key:n,attrs:{ripple:!1,disabled:!t.availableSteps.includes(n)}},[t._v(" "+t._s(e)+" ")])}))],2),a("div",{staticClass:"my-6"}),a("v-card-text",[a("v-tabs-items",{model:{value:t.internalValue,callback:function(e){t.internalValue=e},expression:"internalValue"}},[t._t("default")],2)],1),a("v-card-actions",{staticClass:"pb-4 pa-4"},[a("v-btn",{staticClass:"white--text",attrs:{disabled:0===t.internalValue,color:"grey darken-2","min-width":"125"},on:{click:function(e){return t.$emit("click:prev")}}},[t._v(" Previous ")]),a("v-spacer"),a("v-btn",{attrs:{disabled:!t.availableSteps.includes(t.internalValue+1),color:"success","min-width":"100"},on:{click:function(e){return t.$emit("click:next")}}},[t._v(" "+t._s(t.internalValue===t.items.length-1?"Finish":"Next")+" ")])],1)],1)},r=[],s=a("a452"),i={name:"BaseMaterialWizard",mixins:[s["a"]],props:{availableSteps:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}}}},c=i,o=(a("6e5a"),a("2877")),l=a("6544"),u=a.n(l),d=a("8336"),f=a("b0af"),b=a("99d9"),m=a("2fa4"),p=a("71a3"),h=a("fe57"),v=a("aac8"),g=a("9a96"),j=Object(o["a"])(c,n,r,!1,null,null,null);e["default"]=j.exports;u()(j,{VBtn:d["a"],VCard:f["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:b["c"],VSpacer:m["a"],VTab:p["a"],VTabs:h["a"],VTabsItems:v["a"],VTabsSlider:g["a"]})},"55a9":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"text-center v-card--testimony"},[a("div",{staticClass:"pt-6"},[a("v-icon",{attrs:{color:"black","x-large":""}},[t._v(" mdi-format-quote-close ")])],1),a("v-card-text",{staticClass:"display-1 font-weight-light font-italic mb-3",domProps:{textContent:t._s(t.blurb)}}),a("div",{staticClass:"display-2 font-weight-light mb-2",domProps:{textContent:t._s(t.author)}}),a("div",{staticClass:"body-2 text-uppercase grey--text",domProps:{textContent:t._s(t.handle)}}),a("v-avatar",{staticClass:"elevation-12",attrs:{color:"grey",size:"100"}},[a("v-img",{attrs:{alt:t.author+" Testimonial",src:t.avatar}})],1),a("div")],1)},r=[],s={name:"BaseMaterialTestimony",props:{author:{type:String,default:""},avatar:{type:String,default:"https://demos.creative-tim.com/material-dashboard-pro/assets/img/faces/card-profile1-square.jpg"},blurb:{type:String,default:""},handle:{type:String,default:""}}},i=s,c=(a("7bbe"),a("2877")),o=a("6544"),l=a.n(o),u=a("8212"),d=a("b0af"),f=a("99d9"),b=a("132d"),m=a("adda"),p=Object(c["a"])(i,n,r,!1,null,null,null);e["default"]=p.exports;l()(p,{VAvatar:u["a"],VCard:d["a"],VCardText:f["b"],VIcon:b["a"],VImg:m["a"]})},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},s=[],i={name:"App"},c=i,o=a("2877"),l=Object(o["a"])(c,r,s,!1,null,null,null),u=l.exports,d=(a("d3b7"),a("8c4f")),f=a("a584");n["default"].use(d["a"]);var b=new d["a"]({mode:"hash",base:"/",routes:[{path:"/",component:function(){return a.e("chunk-251397ac").then(a.bind(null,"cd59"))},children:[{name:"Dashboard",path:"",component:function(){return Promise.all([a.e("chunk-9499f268"),a.e("chunk-0e0159f8")]).then(a.bind(null,"5c3a8"))}},{name:"Alimentação",path:"map/alim",component:function(){return Promise.all([a.e("chunk-9499f268"),a.e("chunk-79571487"),a.e("chunk-725b8b58")]).then(a.bind(null,"aeb8"))}},{name:"Bolsa Família",path:"map/bolsaFamilia",component:function(){return Promise.all([a.e("chunk-9499f268"),a.e("chunk-79571487"),a.e("chunk-3f37071b")]).then(a.bind(null,"6f0e"))}},{name:"Cadastro Único",path:"map/cadUnico",component:function(){return Promise.all([a.e("chunk-9499f268"),a.e("chunk-79571487"),a.e("chunk-0a22ceb0")]).then(a.bind(null,"b7d7"))}},{name:"Crédito",path:"map/crd",component:function(){return Promise.all([a.e("chunk-9499f268"),a.e("chunk-79571487"),a.e("chunk-2b30a047")]).then(a.bind(null,"b560"))}},{name:"Educação",path:"map/edu",component:function(){return Promise.all([a.e("chunk-9499f268"),a.e("chunk-79571487"),a.e("chunk-9af924d8")]).then(a.bind(null,"8728"))}},{name:"Previdência Social",path:"map/prevSocial",component:function(){return Promise.all([a.e("chunk-9499f268"),a.e("chunk-79571487"),a.e("chunk-706c3bac")]).then(a.bind(null,"0162"))}},{name:"Saúde",path:"map/saude",component:function(){return Promise.all([a.e("chunk-9499f268"),a.e("chunk-79571487"),a.e("chunk-af3a6ae4")]).then(a.bind(null,"23b4"))}},{name:"Trabalho",path:"map/trabalho",component:function(){return Promise.all([a.e("chunk-9499f268"),a.e("chunk-79571487"),a.e("chunk-e7b658b2")]).then(a.bind(null,"44a6"))}}]},{path:"*",component:function(){return a.e("chunk-25745c8c").then(a.bind(null,"a6dd"))},children:[{name:"404 Error",path:"",component:function(){return a.e("chunk-167c454f").then(a.bind(null,"9313"))}}]}]});n["default"].use(f["a"],{config:{id:"UA-168224884-1"}},b);var m=b,p=a("2f62");n["default"].use(p["a"]);var h=new p["a"].Store({state:{barColor:"rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)",barImage:"sidebar.jpg",drawer:null},mutations:{SET_BAR_IMAGE:function(t,e){t.barImage=e},SET_DRAWER:function(t,e){t.drawer=e},SET_SCRIM:function(t,e){t.barColor=e}},actions:{}}),v=(a("4160"),a("ac1f"),a("5319"),a("159b"),a("ddb0"),a("8103")),g=a.n(v),j=a("bba4"),y=a.n(j),k=a("e51e");k.keys().forEach((function(t){var e=k(t),a=g()(y()(t.replace(/^\.\//,"").replace(/\.\w+$/,"")));n["default"].component("Base".concat(a),e.default||e)}));var _=a("1321"),x=a.n(_);n["default"].use(x.a),n["default"].component("apexchart",x.a);var C=a("7bb1"),S=a("4c93");Object(C["c"])("email",S["a"]),Object(C["c"])("max",S["b"]),Object(C["c"])("min",S["c"]),Object(C["c"])("numeric",S["d"]),Object(C["c"])("required",S["e"]),n["default"].component("validation-provider",C["b"]),n["default"].component("validation-observer",C["a"]);var w=a("a369");n["default"].component("v-world-map",w["a"]);var V=a("bc3a"),O=a.n(V),P=a("3fab"),T=P["a"].api,$="".concat(T,"/");n["default"].prototype.$http=O.a.create({baseURL:$});var E=a("4971"),I=a.n(E);a("8445"),a("e9ac");n["default"].component("VueSlider",I.a);a("4de4");var z=a("6612"),M=a.n(z),A=(a("e562"),a("3b0c"));M.a.register("locale","br",{delimiters:{thousands:".",decimal:","},abbreviations:{thousand:"mil",million:"mi",billion:"bi",trillion:"tri"},currency:{symbol:"R$ "}}),M.a.locale("br"),n["default"].filter("numFormat",Object(A["a"])(M.a));var L=a("9955"),B=a.n(L),R=a("2ef0"),F=a.n(R);n["default"].use(B.a,{name:"custom",lodash:F.a});var G=a("0628"),D=a.n(G),N={persist:!0};n["default"].use(D.a,N);var U=a("2ead"),q=a.n(U),H=a("7f45"),W=a.n(H);n["default"].use(q.a,{moment:W.a});var J=a("f309"),K=a("5530"),Q=a("a925"),X=a("776f"),Y=a("1072"),Z=a("cb06");n["default"].use(Q["a"]);var tt={en:Object(K["a"])(Object(K["a"])({},a("edd4")),{},{$vuetify:Y["a"]}),ar:Object(K["a"])(Object(K["a"])({},a("af08")),{},{$vuetify:X["a"]}),pt:Object(K["a"])(Object(K["a"])({},a("301f")),{},{$vuetify:Z["a"],currency:{style:"currency",currency:"R$ "}})},et=new Q["a"]({locale:"pt",fallbackLocale:"pt",messages:tt});a("1f55");n["default"].use(J["a"]);var at={primary:"#bc433a",secondary:"#21a4c2",accent:"#319c57",info:"#58585b"},nt=new J["a"]({lang:{t:function(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];return et.t(t,a)}},theme:{themes:{dark:at,light:at}}});n["default"].config.productionTip=!1,new n["default"]({router:m,store:h,vuetify:nt,i18n:et,render:function(t){return t(u)}}).$mount("#app")},"5ac2":function(t,e,a){"use strict";var n=a("a28c"),r=a.n(n);r.a},6644:function(t,e,a){},"6e5a":function(t,e,a){"use strict";var n=a("140b"),r=a.n(n);r.a},"71cc":function(t,e,a){},"740d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"mb-12 text-center"},[a("h1",{staticClass:"font-weight-light mb-2 headline",domProps:{textContent:t._s("Vuetify "+t.heading)}}),a("span",{staticClass:"font-weight-light subtitle-1"},[t._v(" Please checkout the "),a("a",{staticClass:"secondary--text",staticStyle:{"text-decoration":"none"},attrs:{href:"https://vuetifyjs.com/"+t.link,rel:"noopener",target:"_blank"}},[t._v(" full documentation ")])])])},r=[],s={name:"VComponent",props:{heading:{type:String,default:""},link:{type:String,default:""}}},i=s,c=a("2877"),o=Object(c["a"])(i,n,r,!1,null,null,null);e["default"]=o.exports},"7bbe":function(t,e,a){"use strict";var n=a("6644"),r=a.n(n);r.a},"8a5e":function(t,e,a){},"8df3":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("base-material-card",t._g(t._b({staticClass:"v-card--material-chart",scopedSlots:t._u([{key:"heading",fn:function(){return[a("chartist",{staticStyle:{"max-height":"150px"},attrs:{data:t.data,"event-handlers":t.eventHandlers,options:t.options,ratio:t.ratio,"responsive-options":t.responsiveOptions,type:t.type}})]},proxy:!0}])},"base-material-card",t.$attrs,!1),t.$listeners),[t._t("reveal-actions",null,{slot:"reveal-actions"}),t._t("default"),t._t("actions",null,{slot:"actions"})],2)},r=[],s=(a("caad"),{name:"MaterialChartCard",inheritAttrs:!1,props:{data:{type:Object,default:function(){return{}}},eventHandlers:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){return{}}},ratio:{type:String,default:void 0},responsiveOptions:{type:Array,default:function(){return[]}},type:{type:String,required:!0,validator:function(t){return["Bar","Line","Pie"].includes(t)}}}}),i=s,c=(a("e56a"),a("2877")),o=Object(c["a"])(i,n,r,!1,null,null,null);e["default"]=o.exports},9743:function(t,e,a){"use strict";var n=a("71cc"),r=a.n(n);r.a},"976b":function(t,e,a){},a28c:function(t,e,a){},a46f:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("base-material-card",t._g(t._b({staticClass:"v-card--material-stats",attrs:{icon:t.icon},scopedSlots:t._u([{key:"after-heading",fn:function(){return[a("div",{staticClass:"ml-auto text-right"},[a("div",{staticClass:"body-3 grey--text font-weight-light",domProps:{textContent:t._s(t.title)}}),a("h3",{staticClass:"display-2 font-weight-light text--primary"},[t._v(" "+t._s(t.value)+" "),a("br"),a("small",[t._v(t._s(t.smallValue))])])])]},proxy:!0}])},"base-material-card",t.$attrs,!1),t.$listeners),[a("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[a("v-divider")],1),a("v-icon",{staticClass:"ml-2 mr-1",attrs:{color:t.subIconColor,size:"16"}},[t._v(" "+t._s(t.subIcon)+" ")]),a("span",{staticClass:"caption grey--text font-weight-light",class:t.subTextColor,domProps:{textContent:t._s(t.subText)}})],1)},r=[],s=a("5530"),i=a("c034"),c={name:"MaterialStatsCard",inheritAttrs:!1,props:Object(s["a"])(Object(s["a"])({},i["default"].props),{},{icon:{type:String,required:!0},subIcon:{type:String,default:void 0},subIconColor:{type:String,default:void 0},subTextColor:{type:String,default:void 0},subText:{type:String,default:void 0},title:{type:String,default:void 0},value:{type:String,default:void 0},smallValue:{type:String,default:void 0}})},o=c,l=(a("ecdb"),a("2877")),u=a("6544"),d=a.n(u),f=a("62ad"),b=a("ce7e"),m=a("132d"),p=Object(l["a"])(o,n,r,!1,null,null,null);e["default"]=p.exports;d()(p,{VCol:f["a"],VDivider:b["a"],VIcon:m["a"]})},af08:function(t){t.exports=JSON.parse('{"avatar":"تانيا أندرو","buttons":"وصفت","calendar":"التقويم","charts":"الرسوم البيانية","components":"المكونات","ct":"CT","dashboard":"لوحة القيادة","dtables":"جداول البيانات","eforms":"أشكال موسعة","error":"صفحة الخطأ","etables":"الجداول الموسعة","example":"مثال","forms":"إستمارات","fullscreen":"خريطة الشاشة الكاملة","google":"خرائط جوجل","grid":"نظام الشبكة","icons":"الرموز","lock":"قفل الشاشة الصفحة","login":"صفحة تسجيل الدخول","maps":"خرائط","multi":"متعدد المستويات انهيار","notifications":"إخطارات","pages":"صفحات","plan":"اختر خطة","pricing":"التسعير","my-profile":"ملفي","edit-profile":"تعديل الملف الشخصي","register":"تسجيل الصفحة","rforms":"النماذج العادية","rtables":"الجداول العادية","rtl":"دعم RTL","search":"بحث...","settings":"الإعدادات","tables":"الجداول","tabs":"Tabs","tim":"تيم الإبداعية","timeline":"الجدول الزمني","typography":"طباعة","user":"ملف تعريفي للمستخدم","vforms":"نماذج التحقق من الصحة","widgets":"الحاجيات","wizard":"ساحر"}')},afbc:function(t,e,a){"use strict";var n=a("976b"),r=a.n(n);r.a},b22c:function(t,e,a){"use strict";var n=a("4f76"),r=a.n(n);r.a},c034:function(t,e,a){"use strict";a.r(e);var n,r,s=a("b0af"),i={name:"Card",extends:s["a"]},c=i,o=a("2877"),l=Object(o["a"])(c,n,r,!1,null,null,null);e["default"]=l.exports},cc0b:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-snackbar",t._b({class:t.classes,attrs:{value:t.value},on:{change:function(e){return t.$emit("change",e)}}},"v-snackbar",Object.assign({},t.$attrs,t.$props,{color:"transparent"}),!1),[a("base-material-alert",{staticClass:"ma-0",attrs:{color:t.color,dismissible:t.dismissible,type:t.type,dark:""}},[t._t("default")],2)],1)},r=[],s=a("5530"),i=a("2db4"),c={name:"BaseMaterialSnackbar",extends:i["a"],props:{dismissible:{type:Boolean,default:!0},type:{type:String,default:""}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},i["a"].options.computed.classes.call(this)),{},{"v-snackbar--material":!0})}}},o=c,l=(a("5ac2"),a("2877")),u=a("6544"),d=a.n(u),f=Object(l["a"])(o,n,r,!1,null,null,null);e["default"]=f.exports;d()(f,{VSnackbar:i["a"]})},e1fc:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("base-item-group",{attrs:{item:t.item,text:"","sub-group":""}})},r=[],s={name:"ItemSubGroup",props:{item:{type:Object,default:function(){return{avatar:void 0,group:void 0,title:void 0,children:[]}}}}},i=s,c=a("2877"),o=Object(c["a"])(i,n,r,!1,null,null,null);e["default"]=o.exports},e3bb:function(t,e,a){"use strict";var n=a("8a5e"),r=a.n(n);r.a},e51e:function(t,e,a){var n={"./Card.vue":"c034","./Item.vue":"3728","./ItemGroup.vue":"e9c3","./ItemSubGroup.vue":"e1fc","./MaterialAlert.vue":"27b8","./MaterialCard.vue":"e6f8","./MaterialChartCard.vue":"8df3","./MaterialDropdown.vue":"3e16","./MaterialSnackbar.vue":"cc0b","./MaterialStatsCard.vue":"a46f","./MaterialTabs.vue":"407e","./MaterialTestimony.vue":"55a9","./MaterialWizard.vue":"52c0","./Subheading.vue":"3648","./VComponent.vue":"740d"};function r(t){var e=s(t);return a(e)}function s(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=s,t.exports=r,r.id="e51e"},e56a:function(t,e,a){"use strict";var n=a("f524"),r=a.n(n);r.a},e6f8:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",t._b({staticClass:"v-card--material pa-3",class:t.classes},"v-card",t.$attrs,!1),[a("div",{staticClass:"d-flex grow flex-wrap"},[t.avatar?a("v-avatar",{staticClass:"mx-auto v-card--material__avatar elevation-6",attrs:{size:"128",color:"grey"}},[a("v-img",{attrs:{src:t.avatar}})],1):a("v-sheet",{staticClass:"text-start v-card--material__heading mb-n6",class:{"pa-7":!t.$slots.image},attrs:{color:t.color,"max-height":t.icon?90:void 0,width:t.inline||t.icon?"auto":"100%",elevation:"6",dark:""}},[t.$slots.heading?t._t("heading"):t.$slots.image?t._t("image"):t.title&&!t.icon?a("div",{staticClass:"display-2 font-weight-bold",domProps:{textContent:t._s(t.title)}}):t.icon?a("v-icon",{attrs:{size:"32"},domProps:{textContent:t._s(t.icon)}}):t._e(),t.text?a("div",{staticClass:"headline font-weight-thin",domProps:{textContent:t._s(t.text)}}):t._e()],2),t.$slots["after-heading"]?a("div",{staticClass:"ml-6"},[t._t("after-heading")],2):t._e(),t.hoverReveal?a("v-col",{staticClass:"text-center py-0 mt-n12",attrs:{cols:"12"}},[t._t("reveal-actions")],2):t.icon&&t.title?a("div",{staticClass:"ml-4"},[a("div",{staticClass:"card-title font-weight-light",domProps:{textContent:t._s(t.title)}})]):t._e()],1),t._t("default"),t.$slots.actions?[a("v-divider",{staticClass:"mt-2"}),a("v-card-actions",{staticClass:"pb-0"},[t._t("actions")],2)]:t._e()],2)},r=[],s={name:"MaterialCard",props:{avatar:{type:String,default:""},color:{type:String,default:"success"},hoverReveal:{type:Boolean,default:!1},icon:{type:String,default:void 0},image:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},text:{type:String,default:""},title:{type:String,default:""}},computed:{classes:function(){return{"v-card--material--has-heading":this.hasHeading,"v-card--material--hover-reveal":this.hoverReveal}},hasHeading:function(){return Boolean(this.$slots.heading||this.title||this.icon)},hasAltHeading:function(){return Boolean(this.$slots.heading||this.title&&this.icon)}}},i=s,c=(a("e3bb"),a("2877")),o=a("6544"),l=a.n(o),u=a("8212"),d=a("b0af"),f=a("99d9"),b=a("62ad"),m=a("ce7e"),p=a("132d"),h=a("adda"),v=a("8dd9"),g=Object(c["a"])(i,n,r,!1,null,null,null);e["default"]=g.exports;l()(g,{VAvatar:u["a"],VCard:d["a"],VCardActions:f["a"],VCol:b["a"],VDivider:m["a"],VIcon:p["a"],VImg:h["a"],VSheet:v["a"]})},e9ac:function(t,e,a){},e9c3:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list-group",{attrs:{group:t.group,"prepend-icon":t.item.icon,"sub-group":t.subGroup,"append-icon":"mdi-menu-down",color:"rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7)"!==t.barColor?"white":"grey darken-1"},scopedSlots:t._u([{key:"activator",fn:function(){return[t.text?a("v-list-item-icon",{staticClass:"v-list-item__icon--text",domProps:{textContent:t._s(t.computedText)}}):t.item.avatar?a("v-list-item-avatar",{staticClass:"align-self-center",attrs:{color:"grey"}},[a("v-img",{attrs:{src:"https://demos.creative-tim.com/material-dashboard-pro/assets/img/faces/avatar.jpg"}})],1):t._e(),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(t.item.title)}})],1)]},proxy:!0}])},[t._l(t.children,(function(t,e){return[t.children?a("base-item-sub-group",{key:"sub-group-"+e,attrs:{item:t}}):a("base-item",{key:"item-"+e,attrs:{item:t,text:""}})]}))],2)},r=[],s=(a("99af"),a("4de4"),a("4160"),a("a15b"),a("d81d"),a("ac1f"),a("1276"),a("159b"),a("5530")),i=a("375a"),c=a.n(i),o=a("2f62"),l={name:"ItemGroup",inheritAttrs:!1,props:{item:{type:Object,default:function(){return{avatar:void 0,group:void 0,title:void 0,children:[]}}},subGroup:{type:Boolean,default:!1},text:{type:Boolean,default:!1}},computed:Object(s["a"])(Object(s["a"])({},Object(o["c"])(["barColor"])),{},{children:function(){var t=this;return this.item.children.map((function(e){return Object(s["a"])(Object(s["a"])({},e),{},{to:e.to?"".concat(t.item.group,"/").concat(e.to):void 0})}))},computedText:function(){if(!this.item||!this.item.title)return"";var t="";return this.item.title.split(" ").forEach((function(e){t+=e.substring(0,1)})),t},group:function(){return this.genGroup(this.item.children)}}),methods:{genGroup:function(t){var e=this;return t.filter((function(t){return t.to})).map((function(t){var a=t.group||e.item.group,n="".concat(a,"/").concat(c()(t.to));return t.children&&(n="".concat(n,"|").concat(e.genGroup(t.children))),n})).join("|")}}},u=l,d=(a("afbc"),a("2877")),f=a("6544"),b=a.n(f),m=a("adda"),p=a("56b0"),h=a("8270"),v=a("5d23"),g=a("34c3"),j=Object(d["a"])(u,n,r,!1,null,null,null);e["default"]=j.exports;b()(j,{VImg:m["a"],VListGroup:p["a"],VListItemAvatar:h["a"],VListItemContent:v["a"],VListItemIcon:g["a"],VListItemTitle:v["c"]})},ecdb:function(t,e,a){"use strict";var n=a("2ffb"),r=a.n(n);r.a},edd4:function(t){t.exports=JSON.parse('{"avatar":"Tania Andrew","buttons":"Buttons","calendar":"Calendar","charts":"Charts","components":"Components","ct":"CT","dashboard":"Dashboard","dtables":"Data Tables","eforms":"Extended Forms","error":"Error Page","etables":"Extended Tables","example":"Example","forms":"Forms","fullscreen":"Full Screen Map","google":"Google Maps","grid":"Grid System","icons":"Icons","lock":"Lock Screen Page","login":"Login Page","maps":"Maps","multi":"Multi Level Collapse","notifications":"Notifications","pages":"Pages","plan":"Choose Plan","pricing":"Pricing","my-profile":"My Profile","edit-profile":"Edit Profile","register":"Register Page","rforms":"Regular Forms","rtables":"Regular Tables","rtl":"RTL Support","search":"Search","settings":"Settings","tables":"Tables","tabs":"Tabs","tim":"Creative Tim","timeline":"Timeline","typography":"Typography","user":"User Profile","vforms":"Validation Forms","widgets":"Widgets","wizard":"Wizard"}')},f524:function(t,e,a){}});
//# sourceMappingURL=app.7d37bef8.js.map