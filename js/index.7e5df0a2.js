(function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports["hjview-index"]=e():t["hjview-index"]=e()})(window,(function(){return function(t){function e(e){for(var r,a,c=e[0],s=e[1],l=e[2],u=0,f=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={index:0},i=[];function a(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d0b9f6b":"6c4348e9","chunk-2d0e8c51":"1fc56c10","chunk-504f7097":"7afd6bdb","chunk-50522ac1":"f4b67e4b","chunk-50654895":"afda8874","chunk-50672724":"5c4631f4","chunk-506782ee":"6d4908f2","chunk-5067a0ea":"49c9507a"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=a(t);var l=new Error;i=function(e){s.onerror=s.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}o[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/hjView/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp_hjview"]=window["webpackJsonp_hjview"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=l;return i.push([0,"chunk-vendors"]),n()}({0:function(t,e,n){t.exports=n("fc11")},"09e3":function(t,e,n){"use strict";n("374d")},"1c5c":function(t,e,n){},"23b8":function(t,e,n){"use strict";n("c66e")},2653:function(t,e,n){},"374d":function(t,e,n){},"4fce":function(t,e,n){},"6bc1":function(t,e,n){if(window.__POWERED_BY_QIANKUN__){var r="hjView/",o=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__+r;n.p=o}},7792:function(t,e,n){"use strict";n("1c5c")},"7f67":function(t,e,n){"use strict";n("4fce")},b0e5:function(t,e,n){var r={"./alert.md":["f06a","chunk-506782ee"],"./button.md":["a38b","chunk-50654895"],"./code-compare.md":["e5fa","chunk-50672724"],"./icon.md":["f876","chunk-5067a0ea"],"./index.md":["34d8","chunk-2d0b9f6b"],"./process-step.md":["70c2","chunk-50522ac1"],"./table.md":["10ba","chunk-504f7097"]};function o(t){if(!n.o(r,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],o=e[0];return n.e(e[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id="b0e5",t.exports=o},c66e:function(t,e,n){},ddd0:function(t,e,n){},fc11:function(t,e,n){"use strict";n.r(e),n.d(e,"bootstrap",(function(){return te})),n.d(e,"mount",(function(){return ne})),n.d(e,"unmount",(function(){return oe}));var r=n("1da1"),o=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("b0c0"),n("96cf"),n("2b0e")),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),n("div",{staticClass:"flex-row-start",staticStyle:{padding:"20px"}},[n("side-nav"),n("page")],1)],1)},a=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},t._l(t.routes,(function(e,r){return n("div",{key:r},[n("span",{staticStyle:{color:"gray"}},[t._v(t._s(r))]),n("ul",t._l(e,(function(e){return n("li",{key:e.name},[n("router-link",{attrs:{to:"/"+e.key}},[t._v(t._s(e.name))])],1)})),0)])})),0)},s=[],l=(n("d3b7"),n("159b"),n("b64b"),n("3ca3"),n("ddb0"),n("8c4f")),u=n("1487"),d=n.n(u),f={basic:[{name:"Icon 图标",key:"icon"},{name:"Button 按钮",key:"button"}],notice:[{name:"Alert 警告",key:"alert"}],form:[{name:"Table 表格",key:"table"}],others:[{name:"Code 比较",key:"code-compare"},{name:"流程步骤",key:"process-step"}]};o["a"].use(l["a"]);var h=f,p=[];Object.keys(h).forEach((function(t){h[t].forEach((function(t){var e=t.key;e&&p.push({path:"/"+e,name:e,component:function(){return n("b0e5")("./".concat(e,".md"))}})}))})),p.unshift({path:"/",name:"index",component:function(){return n.e("chunk-2d0b9f6b").then(n.bind(null,"34d8"))}});var m="/";m="/hjView/",window.__POWERED_BY_QIANKUN__&&(m="/hjView/",m="/qiankun/hjView/");var _=new l["a"]({base:m,mode:"history",routes:p});_.afterEach((function(){o["a"].nextTick((function(){var t=document.querySelectorAll("pre code:not(.hljs)");t&&Array.prototype.forEach.call(t,d.a.highlightBlock)}))}));var b=_,v={name:"SideNav",data:function(){return{routes:h}}},g=v,y=(n("7f67"),n("2877")),w=Object(y["a"])(g,c,s,!1,null,"7471841c",null),j=w.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("router-view")],1)},C=[],k={name:"Page"},S=k,E=(n("23b8"),Object(y["a"])(S,x,C,!1,null,"c172b260",null)),O=E.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("span",[t._v("HjView")])])}],N={},T=N,B=(n("09e3"),Object(y["a"])(T,$,H,!1,null,"6daffa5d",null)),P=B.exports,R=(n("ddd0"),{components:{SideNav:j,Page:O,Header:P}}),A=R,D=Object(y["a"])(A,i,a,!1,null,null,null),z=D.exports,M=(n("2653"),n("6bc1"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"hj-button",class:["hj-button__"+t.hjType,"hj-button__"+t.size,"hj-button__"+t.corner,{"is-disabled":t.buttonDisabled,"is-loading":t.loading}],attrs:{disabled:t.buttonDisabled||t.loading},on:{click:t.handleClick}},[""!==t.icon?n("hj-icon",{attrs:{icon:t.icon}}):t._e(),t.$slots.default?n("span",[t._t("default")],2):t._e(),t.loading?n("div",{staticClass:"hj-button--loading flex-column-center"},[t._v(" 加载中... ")]):t._e()],1)}),I=[],W={name:"HjButton",inject:{hjForm:{default:{}},hjFormItem:{default:{}}},props:{hjType:{type:String,default:"default"},size:{type:String,default:"small"},corner:{type:String,default:"right"},loading:Boolean,disabled:Boolean,icon:{type:String,default:""}},computed:{buttonDisabled:function(){return this.disabled||this.hjForm.disabled}},methods:{handleClick:function(t){this.$emit("click",t)}}},q=W,L=Object(y["a"])(q,M,I,!1,null,null,null),V=L.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hj-button-group"},[t._t("default")],2)},F=[],J={name:"HjButtonGroup"},G=J,K=Object(y["a"])(G,U,F,!1,null,null,null),Q=K.exports;V.install=function(t){t.component(V.name,V),t.component(Q.name,Q)},V.group=Q;var Y=V,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",t._g({staticClass:"hj-icon",style:t.style,attrs:{"aria-hidden":"true"}},t.$listeners),[n("use",{attrs:{"xlink:href":t.iconName}})])},Z=[],tt=(n("a9e3"),{name:"HjIcon",props:{icon:{type:String,required:!0},size:[Number,String],color:String},computed:{iconName:function(){return"#icon-".concat(this.icon)},style:function(){var t={};return this.size&&(t["font-size"]="".concat(this.size,"px")),this.color&&(t["color"]=this.color),t}}}),et=tt,nt=Object(y["a"])(et,X,Z,!1,null,null,null),rt=nt.exports;rt.setSvgSymbol=function(t){n.e("chunk-2d0e8c51").then(n.t.bind(null,"8b4e",7)),t.prototype.$icon=["mima","youjian2","youjian1","zhuye","ziyuangongxiang","shoucang","yonghufankui","wenjian","gongzuotaiguanli","youjian3","zhuye2","shanchu","rili","tongzhi","sousuo","bianji","fujian","liucheng","xiaoxi","biaoqian"]},rt.install=function(t){t.component(rt.name,rt),rt.setSvgSymbol(t)};var ot=rt,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"hj-alert-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"hj-alert",class:[t.c_typeClass,t.center?"is-center":"","is-"+t.effect],attrs:{role:"alert"}},[n("div",{staticClass:"hj-alert__content"},[t.title||t.$slots.title?n("span",{staticClass:"hj-alert__title",class:{"is-Bold":t.c_hasDescription}},[t._t("title",(function(){return[t._v(t._s(t.title))]}))],2):t._e(),t.c_hasDescription?n("p",{staticClass:"hj-alert__description"},[t._t("default",(function(){return[t._v(t._s(t.description))]}))],2):t._e()])])])},at=[],ct=(n("a4d3"),n("e01a"),{name:"HjAlert",props:{title:{type:String,default:""},description:{type:String,default:""},type:{type:String,default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,default:"light",validator:function(t){return-1!==["light","dark"].indexOf(t)}}},data:function(){return{visible:!0}},computed:{c_typeClass:function(){return"hj-alert--".concat(this.type)},c_hasDescription:function(){return this.description||this.$slots.default}}}),st=ct,lt=Object(y["a"])(st,it,at,!1,null,null,null),ut=lt.exports;ut.install=function(t){t.component(ut.name,ut)};var dt=ut,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"hj-table"},[n("thead",{staticClass:"hj-table__thead"},[n("tr",{staticClass:"hj-table__thead__tr"},t._l(t.columns,(function(e){return n("th",{staticClass:"hj-table__thead__tr__th"},[t._v(" "+t._s(e.title)+" ")])})),0)]),n("tbody",{staticClass:"hj-table__tbody"},t._l(t.data,(function(e,r){return n("tr",{staticClass:"hj-table__tbody__tr"},t._l(t.columns,(function(o){return n("td",{staticClass:"hj-table__tbody__td"},[o.render?n("Render",{attrs:{row:e,column:o,index:r,render:o.render}}):o.slot?n("RenderSlot",{attrs:{row:e,column:o,index:r}}):n("span",[t._v(t._s(e[o.key]))])],1)})),0)})),0)])},ht=[],pt={functional:!0,props:{row:Object,column:Object,index:Number,render:Function},render:function(t,e){return e.props.render(t,{index:e.props.index,row:e.props.row,column:e.props.column})}},mt={functional:!0,inject:["tableRoot"],props:{row:Object,column:Object,index:Number},render:function(t,e){return t("div",e.injections.tableRoot.$scopedSlots[e.props.column.slot]({row:e.props.row,column:e.props.column,index:e.props.index}))}},_t={provide:function(){return{tableRoot:this}},name:"HjTable",components:{Render:pt,RenderSlot:mt},props:{columns:{type:Array,default:function(){return[]}},data:{type:Array,default:function(){return[]}}}},bt=_t,vt=Object(y["a"])(bt,ft,ht,!1,null,null,null),gt=vt.exports;gt.install=function(t){t.component(gt.name,gt)};var yt=gt,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hj-code-compare"},[n("div",{staticClass:"hj-code-compare__box"},[n("pre",{ref:"origin"})]),n("div",{staticClass:"hj-code-compare__box"},[n("pre",{ref:"compare"})])])},jt=[],xt=(n("99af"),n("641c")),Ct=n.n(xt),kt=(n("e9c4"),Symbol("format_error")),St={json:function(t){if(""===t)return t;try{return JSON.stringify(JSON.parse(t),null,4)}catch(e){return kt}}},Et=new Ct.a,Ot={name:"HjCodeCompare",props:{origin:{type:String,required:!0},compare:{type:String,required:!0},compareClass:{type:String,default:""},codeType:{type:String,default:"json"},errorTip:{type:String,default:"解析代码出错！"}},mounted:function(){this.update()},methods:{update:function(){var t=this;this.$nextTick((function(){var e=St[t.codeType],n="function"===typeof e?e(t.origin):t.origin,r="function"===typeof e?e(t.compare):t.compare;n!==kt&&r!==kt||(n=t.errorTip,r=t.errorTip),t.$refs.origin.innerHTML=n,t.$refs.compare.innerHTML=t.modify(Et.diff_main(n,r))}))},modify:function(t){var e=this;return t.reduce((function(t,n){return 0===n[0]?t+n[1]:1===n[0]?t+'<span class="hj-code-compare__box__modify '.concat(e.compareClass,'">').concat(n[1],"</span>"):t}),"")}}},$t=Ot,Ht=Object(y["a"])($t,wt,jt,!1,null,null,null),Nt=Ht.exports;Nt.install=function(t){t.component(Nt.name,Nt)};var Tt=Nt,Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"box",staticClass:"hj-process-step",style:{height:t.boxHeight}},t._l(t.c_data,(function(e,r){return n("div",{key:r,staticClass:"hj-process-step__item",style:e.style},[t._v(" "+t._s(e.name)+" "),n("div",{class:e.arrowClass,style:e.arrowStyle})])})),0)},Pt=[],Rt=(n("d81d"),{name:"HjProcessStep",props:{data:{type:Array,default:function(){return[]}},blockWidth:{type:Number,default:100},arrowWidth:{type:Number,default:40}},data:function(){return{c_data:[],boxHeight:0}},computed:{lineHeight:function(){return this.arrowWidth+24}},mounted:function(){this.reset()},methods:{_getStyle:function(t,e,n,r){var o,i=this.lineHeight,a=t%e;return o="".concat(r%2===1?n*(e-1-a):n*a,"px"),{width:"".concat(this.blockWidth,"px"),top:"".concat(i*r,"px"),left:o}},_getArrow:function(t,e,n){if(t===this.data.length-1)return{display:"none"};var r=this.arrowWidth-10,o={width:"".concat(r,"px")},i="hj-process-step__item__arrow",a="normal";return n%2===0?o.right="-".concat(r+5,"px"):(a="reverse",o.left="-".concat(r+5,"px")),(n+1)*e===t+1&&(i="hj-process-step__item__arrow-down",a="",o={height:"".concat(r,"px"),bottom:"-".concat(r+5,"px")}),{arrowClass:"".concat(i," ").concat(a),arrowStyle:o}},reset:function(){var t=this,e=this.$refs.box.getBoundingClientRect().width,n=this.arrowWidth+this.blockWidth,r=Math.floor(e/n),o=Math.floor((this.data.length-1)/r)+1;this.c_data=this.data.map((function(e,o){var i=Math.floor(o/r),a=t._getArrow(o,r,i),c=a.arrowStyle,s=a.arrowClass;return{name:e,style:t._getStyle(o,r,n,i),arrowStyle:c,arrowClass:s}})),this.boxHeight="".concat(o*this.lineHeight,"px")}}}),At=Rt,Dt=Object(y["a"])(At,Bt,Pt,!1,null,null,null),zt=Dt.exports;zt.install=function(t){t.component(zt.name,zt)};var Mt=zt,It=[Y,ot,dt,yt,Tt,Mt],Wt=function(t){It.forEach((function(e){e.install(t)}))};"undefined"!==typeof window&&window.Vue&&Wt(window.Vue);var qt=Wt,Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-block",class:[t.blockClass,{hover:t.hovering}],on:{mouseenter:function(e){t.hovering=!0},mouseleave:function(e){t.hovering=!1}}},[n("div",{staticClass:"source"},[t._t("source")],2),n("div",{ref:"meta",staticClass:"meta"},[t.$slots.default?n("div",{staticClass:"description"},[t._t("default")],2):t._e(),n("div",{staticClass:"highlight"},[t._t("highlight")],2)]),n("div",{ref:"control",staticClass:"demo-block-control",class:{"is-fixed":t.fixedControl},on:{click:function(e){t.isExpanded=!t.isExpanded}}},[n("transition",{attrs:{name:"arrow-slide"}},[n("i",{class:[t.iconClass,{hovering:t.hovering}]})]),n("transition",{attrs:{name:"text-slide"}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.hovering,expression:"hovering"}]},[t._v(t._s(t.controlText))])])],1)])},Vt=[];n("ac1f"),n("1276"),n("466d"),n("498a"),n("5319");function Ut(t){var e=t.match(/<(script)>([\s\S]+)<\/\1>/);return e&&e[2]?e[2].trim():""}function Ft(t){var e=t.match(/<(style)\s*>([\s\S]+)<\/\1>/);return e&&e[2]?e[2].trim():""}function Jt(t){return t=t.trim(),t?t.replace(/<(script|style)[\s\S]+<\/\1>/g,"").trim():t}var Gt={data:function(){return{codepen:{script:"",html:"",style:""},hovering:!1,isExpanded:!1,fixedControl:!1,scrollParent:null}},methods:{scrollHandler:function(){var t=this.$refs.meta.getBoundingClientRect(),e=t.top,n=t.bottom,r=t.left;this.fixedControl=n>document.documentElement.clientHeight&&e+44<=document.documentElement.clientHeight,this.$refs.control.style.left=this.fixedControl?"".concat(r,"px"):"0"},removeScrollHandler:function(){this.scrollParent&&this.scrollParent.removeEventListener("scroll",this.scrollHandler)}},computed:{langConfig:function(){return{"hide-text":"隐藏代码","show-text":"显示代码","button-text":"在线运行","tooltip-text":"前往 codepen.io 运行此示例"}},blockClass:function(){return"demo-".concat(this.$router.currentRoute.path.split("/").pop())},iconClass:function(){return this.isExpanded?"el-icon-caret-top":"el-icon-caret-bottom"},controlText:function(){return this.isExpanded?this.langConfig["hide-text"]:this.langConfig["show-text"]},codeArea:function(){return this.$el.getElementsByClassName("meta")[0]},codeAreaHeight:function(){return this.$el.getElementsByClassName("description").length>0?this.$el.getElementsByClassName("description")[0].clientHeight+this.$el.getElementsByClassName("highlight")[0].clientHeight+20:this.$el.getElementsByClassName("highlight")[0].clientHeight}},watch:{isExpanded:function(t){var e=this;if(this.codeArea.style.height=t?"".concat(this.codeAreaHeight+1,"px"):"0",!t)return this.fixedControl=!1,this.$refs.control.style.left="0",void this.removeScrollHandler();setTimeout((function(){e.scrollParent=document.querySelector(".page-component__scroll > .el-scrollbar__wrap"),e.scrollParent&&e.scrollParent.addEventListener("scroll",e.scrollHandler),e.scrollHandler()}),200)}},created:function(){var t=this.$slots.highlight;if(t&&t[0]){var e="",n=t[0];"pre"===n.tag&&n.children&&n.children[0]&&(n=n.children[0],"code"===n.tag&&(e=n.children[0].text)),e&&(this.codepen.html=Jt(e),this.codepen.script=Ut(e),this.codepen.style=Ft(e))}},mounted:function(){var t=this;this.$nextTick((function(){var e=t.$el.getElementsByClassName("highlight")[0];0===t.$el.getElementsByClassName("description").length&&(e.style.width="100%",e.borderRight="none")}))},beforeDestroy:function(){this.removeScrollHandler()}},Kt=Gt,Qt=(n("7792"),Object(y["a"])(Kt,Lt,Vt,!1,null,null,null)),Yt=Qt.exports;o["a"].config.productionTip=!1,o["a"].use(qt),o["a"].component("demo-block",Yt);var Xt=null;function Zt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.container;Xt=new o["a"]({router:b,mounted:function(){window.hjView=this},render:function(t){return t(z)}}).$mount(e?e.querySelector("#app"):"#app")}function te(){return ee.apply(this,arguments)}function ee(){return ee=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("[vue] vue app bootstraped");case 1:case"end":return t.stop()}}),t)}))),ee.apply(this,arguments)}function ne(t){return re.apply(this,arguments)}function re(){return re=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("[vue] props from main framework",e),e.onGlobalStateChange&&e.onGlobalStateChange((function(t,n){return console.log("11[onGlobalStateChange - ".concat(e.name,"]:"),t,n)}),!0),Zt(e);case 3:case"end":return t.stop()}}),t)}))),re.apply(this,arguments)}function oe(){return ie.apply(this,arguments)}function ie(){return ie=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:Xt.$destroy(),Xt.$el.innerHTML="",Xt=null,router=null;case 4:case"end":return t.stop()}}),t)}))),ie.apply(this,arguments)}window.__POWERED_BY_QIANKUN__||Zt()}})}));
//# sourceMappingURL=index.7e5df0a2.js.map