(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-af3a6ae4"],{1125:function(e,t,a){"use strict";var r=a("bc62"),s=a.n(r);s.a},"169a":function(e,t,a){"use strict";a("caad"),a("45fc"),a("a9e3"),a("2532"),a("498a");var r=a("5530"),s=a("ade3"),n=(a("368e"),a("480e")),i=a("4ad4"),o=a("b848"),l=a("75eb"),c=a("e707"),u=a("e4d3"),h=a("21be"),d=a("f2e7"),v=a("a293"),m=a("58df"),f=a("d9bd"),y=a("80d2"),p=Object(m["a"])(i["a"],o["a"],l["a"],c["a"],u["a"],h["a"],d["a"]);t["a"]=p.extend({name:"v-dialog",directives:{ClickOutside:v["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var e;return e={},Object(s["a"])(e,"v-dialog ".concat(this.contentClass).trim(),!0),Object(s["a"])(e,"v-dialog--active",this.isActive),Object(s["a"])(e,"v-dialog--persistent",this.persistent),Object(s["a"])(e,"v-dialog--fullscreen",this.fullscreen),Object(s["a"])(e,"v-dialog--scrollable",this.scrollable),Object(s["a"])(e,"v-dialog--animated",this.animate),e},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(e){e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(f["d"])("full-width",this)},beforeMount:function(){var e=this;this.$nextTick((function(){e.isBooted=e.isActive,e.isActive&&e.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var e=this;this.animate=!1,this.$nextTick((function(){e.animate=!0,window.clearTimeout(e.animateTimeout),e.animateTimeout=window.setTimeout((function(){return e.animate=!1}),150)}))},closeConditional:function(e){var t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):c["a"].options.methods.hideScroll.call(this)},show:function(){var e=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){e.$refs.content.focus(),e.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(e){if(e.keyCode===y["q"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var t=this.getActivator();this.$nextTick((function(){return t&&t.focus()}))}this.$emit("keydown",e)},onFocusin:function(e){if(e&&this.retainFocus){var t=e.target;if(t&&![document,this.$refs.content].includes(t)&&!this.$refs.content.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(e){return e.contains(t)}))){var a=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');a.length&&a[0].focus()}}},genContent:function(){var e=this;return this.showLazyContent((function(){return[e.$createElement(n["a"],{props:{root:!0,light:e.light,dark:e.dark}},[e.$createElement("div",{class:e.contentClasses,attrs:Object(r["a"])({role:"document",tabindex:e.isActive?0:void 0},e.getScopeIdAttrs()),on:{keydown:e.onKeydown},style:{zIndex:e.activeZIndex},ref:"content"},[e.genTransition()])])]}))},genTransition:function(){var e=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[e]):e},genInnerContent:function(){var e={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:this.onClickOutside,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(e.style=Object(r["a"])(Object(r["a"])({},e.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(y["f"])(this.maxWidth),width:"auto"===this.width?void 0:Object(y["f"])(this.width)})),this.$createElement("div",e,this.getContentSlot())}},render:function(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"23b4":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{id:"dashboard",fluid:"",tag:"section"}},[a("base-material-card",{attrs:{title:"Dados espacializados da Saúde"}},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-col",{attrs:{cols:"12"}},[a("v-select",{attrs:{color:"secondary","item-color":"secondary",label:"Dado",autocomplete:"",items:e.layers,"item-text":"label","item-value":"tablename"},on:{change:e.setLayer},model:{value:e.layerDefault,callback:function(t){e.layerDefault=t},expression:"layerDefault"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-switch",{attrs:{label:"Exibir dados de todos os municípios"},model:{value:e.showAllCounties,callback:function(t){e.showAllCounties=t},expression:"showAllCounties"}})],1),a("v-col",{attrs:{cols:"12"}},[e.showStates&&0==e.showAllCounties?a("v-select",{attrs:{color:"secondary","item-color":"secondary",label:"Estado",autocomplete:"",items:e.states,"item-text":"nome","item-value":"cd_geocuf"},on:{change:e.setCounty},model:{value:e.stateDefault,callback:function(t){e.stateDefault=t},expression:"stateDefault"}}):e._e()],1),e.counties.length>0?a("v-col",{attrs:{cols:"12"}},[a("v-autocomplete",{attrs:{items:e.counties,filter:e.filterCounties,"item-color":"secondary",color:"secondary",label:"Município","item-text":"nome","item-value":"cd_geocmu"},on:{change:e.getCounty},model:{value:e.countyDefalut,callback:function(t){e.countyDefalut=t},expression:"countyDefalut"}})],1):e._e(),a("v-col",{attrs:{cols:"12"}},[a("v-btn",{on:{click:e.setViewDefault}},[e._v("LIMPAR SELEÇÂO")])],1),a("v-col",{attrs:{cols:"12"}},[a("v-select",{attrs:{color:"secondary","item-color":"secondary",label:"Ano",items:e.years},model:{value:e.year,callback:function(t){e.year=t},expression:"year"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Total",filled:"",value:e._f("numFormat")(e._f("numFilter")(e.total),"0,0[.]00"),disabled:""}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[a("v-card-title",[e._v("Descrição")]),a("v-card-text",{staticClass:"text--primary"},[a("div",{staticStyle:{"text-align":"justify"}},[e._v("O Sistema Único de Saúde garantiu ao acesso universal e gratuito à saúde para todos os que residem no território nacional. Sua materialidade pode ser observada nas redes de serviços médico-hospitalares, nas campanhas de vacinação, nos diferentes programas de prevenção, na ação da vigilância sanitária, além dos serviços como o SAMU (Serviço de Atendimento Móvel de Urgência). O SUS pode ser considerado a maior conquista da sociedade brasileira, sendo, também, a tradução inequívoca da capilaridade do Estado Social no território brasileiro. ")])])],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"9"}},[a("base-material-tabs",{attrs:{color:"warning"}},[e._l(e.tabs,(function(t,r){return a("v-tab",{key:r,on:{change:e.callCharts}},[e._v(" "+e._s(t)+" ")])})),a("v-tab-item",[a("v-card",{staticClass:"my-0",attrs:{flat:""}},[a("v-card-text",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[e.loading?a("v-progress-linear",{attrs:{indeterminate:"",color:"teal"}}):e._e(),a("v-map",{ref:"vmap",attrs:{mainTitle:"Saúde",title:e.getLayerName(),source:e.source,year:e.year,url:e.wms.url,"legend-url":e.wms.legendUrl,params:e.wms.params}}),a("p",{staticClass:"mt-1",staticStyle:{"font-size":"13px"}},[e._v("Dado: "+e._s(e.getLayerName())+" Fonte: "+e._s(e.source)+" ")]),a("vue-slider",{staticClass:"mt-11",attrs:{marks:!0,data:e.years,process:!0},model:{value:e.year,callback:function(t){e.year=t},expression:"year"}})],1)],1)],1)],1)],1),a("v-tab-item",[a("v-row",[a("v-col",{staticClass:"px-4",attrs:{cols:"12"}},[a("v-card",{staticClass:"elevation-16",attrs:{raised:""}},[a("div",{attrs:{id:"chart"}},[a("apexchart",{key:e.chartLine,ref:"lineChart",attrs:{type:"area",height:"400",options:e.chartOptionsLine,series:e.chartOptionsLine.series}})],1)])],1)],1),a("v-row",[a("v-col",{staticClass:"px-4",attrs:{cols:"12"}},[a("v-card",{staticClass:"elevation-16",attrs:{raised:""}},[a("div",{attrs:{id:"chart-bar"}},[a("apexchart",{key:e.chartBar,attrs:{type:"bar",height:"400",options:e.chartOptionsBar,series:e.chartOptionsBar.series}})],1)])],1)],1)],1)],2)],1)],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("Solicitação de Download de Dados")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Nome*",required:""},model:{value:e.download.nome,callback:function(t){e.$set(e.download,"nome",t)},expression:"download.nome"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Email*",type:"email",required:""},model:{value:e.download.email,callback:function(t){e.$set(e.download,"email",t)},expression:"download.email"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Instituição*",required:""},model:{value:e.download.instituicao,callback:function(t){e.$set(e.download,"instituicao",t)},expression:"download.instituicao"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-select",{attrs:{label:"Estado*",items:e.states,"item-text":"nome","item-value":"cd_geocuf",required:""},on:{change:e.setCountyDialog}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-autocomplete",{attrs:{items:e.countiesDialog,filter:e.filterCounties,"item-color":"secondary",color:"secondary",label:"Município","item-text":"nome","item-value":"cd_geocmu"},on:{change:e.getCountyDialog}})],1)],1)],1),a("small",[e._v("*preenchimento obrigatório")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v("CANCELAR")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.getDataFromDownForm()}}},[e._v("ENVIAR")])],1)],1)],1)],1),a("v-snackbar",{attrs:{color:e.snackbar.color,right:"","multi-line":"",timeout:e.snackbar.timeout,top:""},scopedSlots:e._u([{key:"action",fn:function(t){var r=t.attrs;return[a("v-btn",e._b({attrs:{dark:"",text:""},on:{click:function(t){e.snackbar.show=!1}}},"v-btn",r,!1),[e._v(" Fechar ")])]}}]),model:{value:e.snackbar.show,callback:function(t){e.$set(e.snackbar,"show",t)},expression:"snackbar.show"}},[e._v(" "+e._s(e.snackbar.text)+" ")])],1)},s=[],n=(a("7db0"),a("4160"),a("caad"),a("c975"),a("a15b"),a("d81d"),a("b0c0"),a("a9e3"),a("d3b7"),a("ac1f"),a("25f0"),a("2532"),a("5319"),a("1276"),a("159b"),a("96cf"),a("1da1")),i=a("ade3"),o=a("5adf"),l=a("0a53"),c=a("3fab"),u={name:"BolsaFamilia",components:{"v-map":l["a"]},data:function(){var e;return{loading:!1,dialog:!1,showAllCounties:!1,tab:0,layer:{},layers:[],layerDefault:{tablename:"saude_bcg",label:"Imunizações - BCG"},showStates:!0,year:2019,years:[],source:"",total:0,state:null,states:[],statesDialog:[],stateDefault:{},counties:[],countiesDialog:[],county:null,countyDefalut:{},tabs:["Mapa","Gráficos"],cql_default:"ano = 2019",layerBaseUrlBrasil:"observatorio:resumo_brasil_",layerBaseUrlMun:"observatorio:resumo_mun_",legendBaseUrlBrasil:c["a"].geoserver+"/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&legend_options=fontName:Fira%20Sans%20SemiBold;fontAntiAliasing:true;fontColor:0x000033;fontSize:14;dpi:90&LAYER=observatorio:resumo_brasil__layer_&style=observatorio:resumo_brasil__style_",legendBaseUrlMun:c["a"].geoserver+"/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&legend_options=fontName:Fira%20Sans%20SemiBold;fontAntiAliasing:true;fontColor:0x000033;fontSize:14;dpi:90&LAYER=observatorio:resumo_mun__layer_&style=observatorio:resumo_mun__style_",wms:{url:c["a"].geoserver+"/geoserver/wms",legendUrl:"",attribution:"",params:{layers:"",format:"image/png",tiled:!0,CQL_FILTER:"ano = 2019"},serverType:"geoserver",transition:0},chartLine:0,chartOptionsLine:(e={locales:[o["a"]],defaultLocale:"pt-br",series:[{name:"Valor",data:[3791785038,14372702865,17364277909,21156744695,24890107091,27187295233,27650301339,28506185141,29046112934,30625641619,31159235696]}],fill:{colors:["#003500","#99ff99"]},chart:{height:350,type:"area",zoom:{enabled:!0}}},Object(i["a"])(e,"fill",{type:["gradient"]}),Object(i["a"])(e,"dataLabels",{enabled:!1}),Object(i["a"])(e,"stroke",{curve:"smooth"}),Object(i["a"])(e,"title",{text:"",align:"left"}),Object(i["a"])(e,"grid",{row:{colors:["#f3f3f3","transparent"],opacity:.2}}),Object(i["a"])(e,"yaxis",{labels:{formatter:{}}}),Object(i["a"])(e,"xaxis",{categories:["2004","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019"]}),e),chartBar:0,chartOptionsBar:{series:[{name:"",data:[]}],chart:{type:"bar",height:400,zoom:{enabled:!0}},plotOptions:{bar:{horizontal:!1,columnWidth:"80%",endingShape:"rounded"}},dataLabels:{enabled:!1},title:{text:"",align:"left"},stroke:{show:!0,width:10,colors:["transparent"]},yaxis:{labels:{formatter:{}}},xaxis:{categories:[]},fill:{opacity:1},tooltip:{y:{formatter:function(e){return e}}}},snackbar:{color:"",mode:"",show:!1,text:"",timeout:6e3},download:{type:null,nome:null,email:null,instituicao:null,estado:null,cidade:null,dado:null}}},watch:{year:function(e){this.getSource(),this.getTotal(),this.handleFilters(),this.showAllCounties&&this.changeViewAllCounties(),this.configChartBar()},showAllCounties:function(e){e?this.changeViewAllCounties():this.setViewDefault()}},computed:{},mounted:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getStates(),e.getLayers(),e.setLayer("saude_bcg"),e.configChartLine(),e.configChartBar();case 5:case"end":return t.stop()}}),t)})))()},filters:{numFilter:function(e){return e.toString().replace(".",",")}},methods:{changeViewAllCounties:function(){this.wms.params.layers=this.layerBaseUrlMun+this.layer,this.wms.params.styles=this.layerBaseUrlMun+this.layer+"_"+this.year,this.wms.legendUrl=this.legendBaseUrlMun.replace("_layer_",this.layer).replace("_style_",this.layer+"_"+this.year),this.$refs.hasOwnProperty("vmap")&&this.$refs.vmap.resetExtent()},configChartLine:function(){var e=this;this.getChartLineData();var t="",a="";t=this.layers.length<1?this.layerDefault.label.toUpperCase():this.layers.find((function(t){return t.tablename===e.layer})).label.toUpperCase(),a=null==this.state?"NO BRASIL":null!=this.county?" - "+this.counties.find((function(t){return t.cd_geocmu===e.county})).nome.toUpperCase()+" - "+this.states.find((function(t){return t.cd_geocuf===e.state})).nome.toUpperCase():" - "+this.states.find((function(t){return t.cd_geocuf===e.state})).nome.toUpperCase();var r=[],s=this.layers.find((function(t){return t.tablename===e.layer}));this.chartOptionsLine.series[0].name=t,this.chartOptionsLine.yaxis.labels.formatter=function(e){return r.includes(s.tablename)?"R$ "+e.toLocaleString():e.toLocaleString()},this.chartOptionsLine.title.text=t+" POR ANO "+a,this.chartLine++},configChartBar:function(){var e=this;this.getChartBarData();var t="",a="";t=this.layers.length<1?this.layerDefault.label.toUpperCase():this.layers.find((function(t){return t.tablename===e.layer})).label.toUpperCase(),a=null==this.state?"NO BRASIL":(this.county," - "+this.states.find((function(t){return t.cd_geocuf===e.state})).nome.toUpperCase());var r=this.layers.find((function(t){return t.tablename===e.layer})),s=[];this.chartOptionsBar.series[0].name=t,this.chartOptionsBar.yaxis.labels.formatter=function(e){return s.includes(r.tablename)?"R$ "+e.toLocaleString():e.toLocaleString()},this.chartOptionsBar.tooltip.y.formatter=function(e){return s.includes(r.tablename)?"R$ "+e.toLocaleString():e.toLocaleString()},this.chartOptionsBar.title.text=" RANKING DO "+t+" "+a+" EM "+this.year,this.chartBar++},getLayerName:function(){var e,t=this;return e=this.layers.length<1?this.layerDefault.label.toUpperCase():this.layers.find((function(e){return e.tablename===t.layer})).label.toUpperCase(),e},callCharts:function(){this.configChartLine(),this.configChartBar(),this.$refs.vmap.resetExtent()},canStates:function(){this.showStates=this.hasCounties.includes(this.layer)},handleFilters:function(){this.wms.params.CQL_FILTER="ano = "+this.year,this.state?(this.wms.params.CQL_FILTER+=" AND uf = "+this.state,this.wms.params.styles=this.layerBaseUrlMun+this.layer+"_"+this.year,this.wms.legendUrl=this.legendBaseUrlMun.replace("_layer_",this.layer).replace("_style_",this.layer+"_"+this.year),this.county&&(this.wms.params.CQL_FILTER+=" AND cd_geocmu = "+this.county)):(this.wms.params.styles=this.layerBaseUrlBrasil+this.layer+"_"+this.year,this.wms.legendUrl=this.legendBaseUrlBrasil.replace("_layer_",this.layer).replace("_style_",this.layer+"_"+this.year))},getDataFromDownForm:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r,s,n,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=function(e){for(var t in e)if(null==e[t]||""==e[t])return!1;return!0},r=function(e){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(String(e).toLowerCase())},s={csv:s.geoserver+"/geoserver/wfs?request=GetFeature&service=WFS&version=1.0.0&typeName=_layer_&outputFormat=csv&CQL_FILTER=_filter_","shape-zip":s.geoserver+"/geoserver/wfs?request=GetFeature&service=WFS&version=1.0.0&typeName=_layer_&outputFormat=shape-zip&CQL_FILTER=_filter_"},e.download.dado=e.layer,!a(e.download)){t.next=19;break}if(e.dialog=!1,!r(e.download.email)){t.next=13;break}return t.next=9,e.requestDownload();case 9:n=t.sent,n.hasOwnProperty("id")&&n.id>0&&(i=s[e.download.type].replace("_layer_",e.wms.params.layers).replace("_filter_",e.wms.params.CQL_FILTER),o=document.createElement("a"),o.href=i,o.setAttribute("file",e.download.dado+"."+e.download.type),document.body.appendChild(o),o.click()),t.next=17;break;case 13:e.snackbar.show=!0,e.snackbar.text="E-mail incorreto!",e.snackbar.color="error",e.dialog=!0;case 17:t.next=23;break;case 19:e.snackbar.show=!0,e.snackbar.text="Dados incompletos!",e.snackbar.color="error",e.dialog=!0;case 23:case"end":return t.stop()}}),t)})))()},handleDownloads:function(e){this.dialog=!0,this.download.type=e,this.$gtag.event("Download",{event_category:e,event_label:this.layer,value:this.layer})},setLayer:function(e){this.setViewDefault(),this.layer=e,this.showAllCounties=!1,this.getYears(),this.wms.params.layers=this.layerBaseUrlBrasil+this.layer,this.wms.params.styles=this.layerBaseUrlBrasil+this.layer+"_"+this.year,this.wms.legendUrl=this.legendBaseUrlBrasil.replace("_layer_",this.layer).replace("_style_",this.layer+"_"+this.year),this.configChartLine(),this.configChartBar(),this.$gtag.event("View Layer",{event_category:"Crédito Rural",event_label:this.layer,value:this.layer})},setCounty:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.county=null,e&&(this.county=null,this.state=e,this.wms.params.layers=this.layerBaseUrlMun+this.layer,this.wms.params.styles=this.layerBaseUrlMun+this.layer+"_"+this.year,this.wms.legendUrl=this.layerBaseUrlMun.replace("_layer_",this.layer).replace("_style_",this.layer+"_"+this.year),this.handleFilters(),this.getCounties(),this.getTotal(),this.configChartLine(),this.configChartBar())},setCountyDialog:function(e){this.getCounties(e),this.download.estado=e},getCounty:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e&&(this.county=e,this.wms.params.layers=this.layerBaseUrlMun+this.layer,this.wms.params.styles=this.layerBaseUrlMun+this.layer+"_"+this.year,this.wms.legendUrl=this.layerBaseUrlMun.replace("_layer_",this.layer).replace("_style_",this.layer+"_"+this.year),this.handleFilters(),this.getTotal(),this.configChartLine())},getCountyDialog:function(e){this.download.cidade=e},setViewDefault:function(){this.year=this.years[this.years.length-1],this.stateDefault={},this.countyDefalut={},this.counties=[],this.state=null,this.county=null,this.wms.params.layers=this.layerBaseUrlBrasil+this.layer,this.wms.params.styles=this.layerBaseUrlBrasil+this.layer+"_"+this.year,this.wms.legendUrl=this.legendBaseUrlBrasil.replace("_layer_",this.layer).replace("_style_",this.layer+"_"+this.year),this.wms.params.CQL_FILTER=this.cql_default,this.$refs.hasOwnProperty("vmap")&&this.$refs.vmap.resetExtent(!0),this.getTotal(),this.configChartLine(),this.configChartBar()},filterCounties:function(e,t,a){var r=this.removeAccents(e.nome.toLowerCase()),s=this.removeAccents(t.toLowerCase());return r.indexOf(s)>-1},removeAccents:function(e){var t="ÀÁÂÃÄÅàáâãäåßÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž",a="AAAAAAaaaaaaBOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";return e=e.split(""),e.forEach((function(r,s){var n=t.indexOf(r);-1!==n&&(e[s]=a[n])})),e.join("")},getYears:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.get("/saude/years/"+e.layer);case 3:a=t.sent,e.years=a.data,e.year=a.data[e.years.length-1],e.getSource(),e.getTotal(),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},getSource:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.get("/saude/source/"+e.layer+"/"+e.year);case 3:a=t.sent,e.source=a.data.fonte,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getTotal:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,a="/",e.state?(a+=e.state,e.county?a+="/"+e.county:a+="/null"):a+="null/null","string"!=typeof e.layer){t.next=8;break}return t.next=6,e.$http.get("/saude/total/"+e.layer+"/"+e.year+a);case 6:r=t.sent,e.total=r.data.sum;case 8:t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},getChartLineData:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,0!=e.year){t.next=3;break}return t.abrupt("return");case 3:if(a="/",e.state?(a+=e.state,e.county?a+="/"+e.county:a+="/null"):a+="null/null","string"!=typeof e.layer){t.next=12;break}return t.next=8,e.$http.get("/saude/chart/line/"+e.layer+a);case 8:r=t.sent,e.chartOptionsLine.series[0].data=r.data.map((function(e){return Number(e.valor)})),e.chartOptionsLine.xaxis.categories=r.data.map((function(e){return String(e.ano)})),e.chartLine++;case 12:t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))()},getChartBarData:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,0!=e.year){t.next=3;break}return t.abrupt("return");case 3:if(a="/",e.state?a+=e.state:a+="null","string"!=typeof e.layer){t.next=12;break}return t.next=8,e.$http.get("/saude/chart/bar/"+e.layer+"/"+e.year+a);case 8:r=t.sent,e.chartOptionsBar.series[0].data=r.data.map((function(e){return Number(e.valor)})),e.chartOptionsBar.xaxis.categories=r.data.map((function(e){return String(e.nome)})),e.chartBar++;case 12:t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))()},getStates:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.get("/saude/states");case 3:a=t.sent,e.states=a.data,e.statesDialog=a.data,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},getCounties:function(){var e=arguments,t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var r,s,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.length>0&&void 0!==e[0]?e[0]:null,s=null!=r?r:t.state,a.prev=2,a.next=5,t.$http.get("/saude/counties/"+s);case 5:n=a.sent,t.counties=n.data,t.countiesDialog=n.data,a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](2),console.error(a.t0);case 13:console.log(t.counties);case 14:case"end":return a.stop()}}),a,null,[[2,10]])})))()},getLayers:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.get("/saude/layers");case 3:a=t.sent,e.layers=a.data,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},fecth:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.get("/saude/data");case 3:a=t.sent,e.users=a.data,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},requestDownload:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=null,t.prev=1,t.next=4,e.$http.post("/download/create",e.download);case 4:r=t.sent,a=r.data,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),console.error(t.t0);case 11:return t.abrupt("return",a);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()}}},h=u,d=(a("1125"),a("2877")),v=a("6544"),m=a.n(v),f=a("c6a6"),y=a("8336"),p=a("b0af"),g=a("99d9"),b=a("62ad"),w=a("a523"),_=a("169a"),x=a("8e36"),C=a("0fd9"),k=a("b974"),O=a("2db4"),S=a("2fa4"),L=a("b73d"),B=a("71a3"),A=a("c671"),D=a("8654"),E=Object(d["a"])(h,r,s,!1,null,null,null);t["default"]=E.exports;m()(E,{VAutocomplete:f["a"],VBtn:y["a"],VCard:p["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VCol:b["a"],VContainer:w["a"],VDialog:_["a"],VProgressLinear:x["a"],VRow:C["a"],VSelect:k["a"],VSnackbar:O["a"],VSpacer:S["a"],VSwitch:L["a"],VTab:B["a"],VTabItem:A["a"],VTextField:D["a"]})},"368e":function(e,t,a){},"3c93":function(e,t,a){},bc62:function(e,t,a){},e707:function(e,t,a){"use strict";a("caad"),a("a9e3"),a("2532");var r=a("5530"),s=(a("3c93"),a("a9ad")),n=a("7560"),i=a("f2e7"),o=a("58df"),l=Object(o["a"])(s["a"],n["a"],i["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var e=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",e)},classes:function(){return Object(r["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(e){var t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},t)}}),c=l,u=a("80d2"),h=a("2b0e");t["a"]=h["default"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{overlay:null}},watch:{hideOverlay:function(e){this.isActive&&(e?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var e=new c({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});e.$mount();var t=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");t&&t.insertBefore(e.$el,t.firstChild),this.overlay=e},genOverlay:function(){var e=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),requestAnimationFrame((function(){e.overlay&&(void 0!==e.activeZIndex?e.overlay.zIndex=String(e.activeZIndex-1):e.$el&&(e.overlay.zIndex=Object(u["o"])(e.$el)))})),this.overlay&&(this.overlay.value=!0),!0},removeOverlay:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(u["a"])(this.overlay.$el,"transitionend",(function(){e.overlay&&e.overlay.$el&&e.overlay.$el.parentNode&&!e.overlay.value&&(e.overlay.$el.parentNode.removeChild(e.overlay.$el),e.overlay.$destroy(),e.overlay=null)})),this.overlay.value=!1),t&&this.showScroll()},scrollListener:function(e){if("keydown"===e.type){if(["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||e.target.isContentEditable)return;var t=[u["q"].up,u["q"].pageup],a=[u["q"].down,u["q"].pagedown];if(t.includes(e.keyCode))e.deltaY=-1;else{if(!a.includes(e.keyCode))return;e.deltaY=1}}(e.target===this.overlay||"keydown"!==e.type&&e.target===document.body||this.checkPath(e))&&e.preventDefault()},hasScrollbar:function(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e);return["auto","scroll"].includes(t.overflowY)&&e.scrollHeight>e.clientHeight},shouldScroll:function(e,t){return 0===e.scrollTop&&t<0||e.scrollTop+e.clientHeight===e.scrollHeight&&t>0},isInside:function(e,t){return e===t||null!==e&&e!==document.body&&this.isInside(e.parentNode,t)},checkPath:function(e){var t=e.path||this.composedPath(e),a=e.deltaY;if("keydown"===e.type&&t[0]===document.body){var r=this.$refs.dialog,s=window.getSelection().anchorNode;return!(r&&this.hasScrollbar(r)&&this.isInside(s,r))||this.shouldScroll(r,a)}for(var n=0;n<t.length;n++){var i=t[n];if(i===document)return!0;if(i===document.documentElement)return!0;if(i===this.$refs.content)return!0;if(this.hasScrollbar(i))return this.shouldScroll(i,a)}return!0},composedPath:function(e){if(e.composedPath)return e.composedPath();var t=[],a=e.target;while(a){if(t.push(a),"HTML"===a.tagName)return t.push(document),t.push(window),t;a=a.parentElement}return t},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(u["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})}}]);
//# sourceMappingURL=chunk-af3a6ae4.70b2821b.js.map