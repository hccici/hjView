(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-677d559d"],{"1dde":function(e,t,r){var n=r("d039"),a=r("b622"),c=r("2d00"),o=a("species");e.exports=function(e){return c>=51||!n((function(){var t=[],r=t.constructor={};return r[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"4de4":function(e,t,r){"use strict";var n=r("23e7"),a=r("b727").filter,c=r("1dde"),o=c("filter");n({target:"Array",proto:!0,forced:!o},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},8418:function(e,t,r){"use strict";var n=r("a04b"),a=r("9bf2"),c=r("5c6c");e.exports=function(e,t,r){var o=n(t);o in e?a.f(e,o,c(0,r)):e[o]=r}},dbb4:function(e,t,r){var n=r("23e7"),a=r("83ab"),c=r("56ef"),o=r("fc6a"),s=r("06cf"),i=r("8418");n({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(e){var t,r,n=o(e),a=s.f,l=c(n),f={},d=0;while(l.length>d)r=a(n,t=l[d++]),void 0!==r&&i(f,t,r);return f}})},e439:function(e,t,r){var n=r("23e7"),a=r("d039"),c=r("fc6a"),o=r("06cf").f,s=r("83ab"),i=a((function(){o(1)})),l=!s||i;n({target:"Object",stat:!0,forced:l,sham:!s},{getOwnPropertyDescriptor:function(e,t){return o(c(e),t)}})},f06a:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"content element-doc"},[e._m(0),r("p",[e._v("用于页面中展示重要的提示信息。")]),e._m(1),r("p",[e._v("页面中的非浮层元素，不会自动消失。")]),r("demo-block",[r("div",[r("p",[e._v("Alert 组件提供四种主题，由"),r("code",[e._v("type")]),e._v("属性指定，默认值为"),r("code",[e._v("info")]),e._v("。可以通过"),r("code",[e._v("description")]),e._v("属性指定显示内容，也可以通过插巢。")])]),r("template",{slot:"source"},[r("element-demo0")],1),r("template",{slot:"highlight"},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n<hj-alert>默认info</hj-alert>\n<hj-alert description="success" type="success"></hj-alert>\n<hj-alert description="warning" type="warning"></hj-alert>\n<hj-alert description="danger" type="danger"></hj-alert>\n</template>\n')])])])],2),e._m(2),e._m(3),r("demo-block",[r("div",[r("p",[e._v("通过设置"),r("code",[e._v("effect")]),e._v("属性来改变主题，默认为"),r("code",[e._v("light")]),e._v("。")])]),r("template",{slot:"source"},[r("element-demo1")],1),r("template",{slot:"highlight"},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n<hj-alert effect="dark">默认info</hj-alert>\n<hj-alert type="success" effect="dark">success</hj-alert>\n<hj-alert type="warning" effect="dark">warning</hj-alert>\n<hj-alert type="danger" effect="dark">danger</hj-alert>\n</template>\n')])])])],2)],1)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h2",{attrs:{id:"alert-jing-gao"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#alert-jing-gao"}},[e._v("¶")]),e._v(" Alert 警告")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h3",{attrs:{id:"ji-ben-yong-fa"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ji-ben-yong-fa"}},[e._v("¶")]),e._v(" 基本用法")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h3",{attrs:{id:"zhu-ti"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zhu-ti"}},[e._v("¶")]),e._v(" 主题")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Alert 组件提供了两个不同的主题："),r("code",[e._v("light")]),e._v("和"),r("code",[e._v("dark")]),e._v("。")])}],c=r("5530"),o={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[[r("hj-alert",[e._v("默认info")]),e._v(" "),r("hj-alert",{attrs:{description:"success",type:"success"}}),e._v(" "),r("hj-alert",{attrs:{description:"warning",type:"warning"}}),e._v(" "),r("hj-alert",{attrs:{description:"danger",type:"danger"}})]],2)},t=[],r={};return Object(c["a"])({render:e,staticRenderFns:t},r)}(),"element-demo1":function(){var e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[[r("hj-alert",{attrs:{effect:"dark"}},[e._v("默认info")]),e._v(" "),r("hj-alert",{attrs:{type:"success",effect:"dark"}},[e._v("success")]),e._v(" "),r("hj-alert",{attrs:{type:"warning",effect:"dark"}},[e._v("warning")]),e._v(" "),r("hj-alert",{attrs:{type:"danger",effect:"dark"}},[e._v("danger")])]],2)},t=[],r={};return Object(c["a"])({render:e,staticRenderFns:t},r)}()}},s=o,i=r("2877"),l=Object(i["a"])(s,n,a,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-677d559d.b48a4ca5.js.map