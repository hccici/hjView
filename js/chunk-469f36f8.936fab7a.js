(window["webpackJsonp_hjview"]=window["webpackJsonp_hjview"]||[]).push([["chunk-469f36f8"],{"10ba":function(n,e,t){"use strict";t.r(e);var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{staticClass:"content element-doc"},[n._m(0),t("p",[n._v("主要用于展示大量结构化数据。")]),n._m(1),t("p",[n._v("使用了Vue渲染函数。返回一个VNnode。")]),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[n._v("<template>\n  <hj-table\n    :data=\"data\"\n    :columns=\"columns\"\n  />\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      editIndex: -1,\n      editName: '',\n      columns: [\n        {\n          title: '姓名',\n          key: 'name',\n          render: (h, { index, row }) => {\n            if (this.editIndex === index) {\n              return h('input', {\n                domProps: {\n                  value: row.name\n                },\n                on: {\n                  input: (e) => {\n                    this.editName = e.target.value\n                  }\n                }\n              })\n            } else {\n              return h('span', row.name);\n            }\n          }\n        },\n        {\n          title: '年龄',\n          key: 'age'\n        },\n        {\n          title: '出生日期',\n          key: 'birthday',\n          render: (h, { row }) => {\n            const date = new Date(parseInt(row.birthday));\n            const year = date.getFullYear();\n            const month = date.getMonth() + 1;\n            const day = date.getDate();\n            const birthday = `${year}-${month}-${day}`;\n            return h('span', birthday);\n          }\n        },\n        {\n          title: '地址',\n          key: 'address',\n          render: ()=>{\n            return `<hj-icon icon=\"xiaoxi\" size=\"32\"></hj-icon>`\n          }\n        },\n        {\n          title: '操作',\n          render: (h, { index, row })=>{\n            if(this.editIndex === index){\n              return [\n                h('button',{\n                  on: {\n                    click: ()=>{\n                      this.data[index].name = this.editName\n                      this.editIndex = -1\n                    }\n                  }\n                },'保存'),\n                h('button',{\n                  on: {\n                    click: ()=>{\n                      this.editIndex = -1\n                    }\n                  }\n                },'取消')\n              ]\n            }else{\n              return h('button',{\n                  on: {\n                    click: ()=>{\n                      this.editName = row.name\n                      this.editIndex = index\n                    }\n                  }\n                },'修改')\n            }\n          }\n        }\n      ],\n      data: [\n        {\n          name: '王小明',\n          age: 18,\n          birthday: '919526400000',\n          address: '北京市朝阳区芍药居'\n        },\n        {\n          name: '张小刚',\n          age: 25,\n          birthday: '696096000000',\n          address: '北京市海淀区西二旗'\n        },\n        {\n          name: '李小红',\n          age: 30,\n          birthday: '563472000000',\n          address: '上海市浦东新区世纪大道'\n        },\n        {\n          name: '周小伟',\n          age: 26,\n          birthday: '687024000000',\n          address: '深圳市南山区深南大道'\n        }\n      ]\n    }\n  }\n}\n<\/script>\n")])])])],2),n._m(2),t("p",[n._v("本质上也是使用了Vue渲染函数。但这里的使用体验上是通过插巢的形式。")]),t("demo-block",[t("template",{slot:"source"},[t("element-demo1")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[n._v("<template>\n  <hj-table\n    :data=\"data\"\n    :columns=\"columns\"\n  >\n    <template\n      v-slot:name=\"{ row, index }\"\n    >\n      <input\n        v-if=\"editIndex === index\"\n        v-model=\"editName\"\n        type=\"text\"\n      >\n      <span v-else>{{ row.name }}</span>\n    </template>\n\n    <template\n      v-slot:birthday=\"{ row }\"\n    >\n      <span>{{ getBirthday(row.birthday) }}</span>\n    </template>\n\n    <template\n      v-slot:action=\"{ row, index }\"\n    >\n      <div v-if=\"editIndex === index\">\n        <button @click=\"handleSave(index)\">\n          保存\n        </button>\n        <button @click=\"editIndex = -1\">\n          取消\n        </button>\n      </div>\n      <div v-else>\n        <button @click=\"handleEdit(row, index)\">\n          操作\n        </button>\n      </div>\n    </template>\n  </hj-table>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      editIndex: -1,\n      editName: '',\n      columns: [\n        {\n          title: '姓名',\n          slot: 'name',\n        },\n        {\n          title: '年龄',\n          key: 'age'\n        },\n        {\n          title: '出生日期',\n          slot: 'birthday',\n        },\n        {\n          title: '地址',\n          key: 'address',\n        },\n        {\n          title: '操作',\n          slot: 'action'\n        }\n      ],\n      data: [\n        {\n          name: '王小明',\n          age: 18,\n          birthday: '919526400000',\n          address: '北京市朝阳区芍药居'\n        },\n        {\n          name: '张小刚',\n          age: 25,\n          birthday: '696096000000',\n          address: '北京市海淀区西二旗'\n        },\n        {\n          name: '李小红',\n          age: 30,\n          birthday: '563472000000',\n          address: '上海市浦东新区世纪大道'\n        },\n        {\n          name: '周小伟',\n          age: 26,\n          birthday: '687024000000',\n          address: '深圳市南山区深南大道'\n        }\n      ]\n    }\n  },\n  methods: {\n    handleEdit(row, index) {\n      this.editName = row.name;\n      this.editIndex = index;\n    },\n    handleSave(index) {\n      this.data[index].name = this.editName;\n      this.editIndex = -1;\n    },\n    getBirthday(birthday) {\n      const date = new Date(parseInt(birthday));\n      const year = date.getFullYear();\n      const month = date.getMonth() + 1;\n      const day = date.getDate();\n      return `${year}-${month}-${day}`;\n    }\n  }\n}\n<\/script>\n")])])])],2)],1)},r=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("h2",{attrs:{id:"table-biao-ge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#table-biao-ge"}},[n._v("¶")]),n._v(" Table 表格")])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("h3",{attrs:{id:"shi-yong-render-zi-ding-yi-biao-dan-nei-rong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shi-yong-render-zi-ding-yi-biao-dan-nei-rong"}},[n._v("¶")]),n._v(" 使用Render自定义表单内容")])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("h3",{attrs:{id:"shi-yong-slot-zi-ding-yi-biao-dan-nei-rong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shi-yong-slot-zi-ding-yi-biao-dan-nei-rong"}},[n._v("¶")]),n._v(" 使用Slot自定义表单内容")])}],i=t("5530"),d=(t("b0c0"),t("99af"),{name:"component-doc",components:{"element-demo0":function(){var n=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[[t("hj-table",{attrs:{data:n.data,columns:n.columns}})]],2)},e=[],t={data:function(){var n=this;return{editIndex:-1,editName:"",columns:[{title:"姓名",key:"name",render:function(e,t){var a=t.index,r=t.row;return n.editIndex===a?e("input",{domProps:{value:r.name},on:{input:function(e){n.editName=e.target.value}}}):e("span",r.name)}},{title:"年龄",key:"age"},{title:"出生日期",key:"birthday",render:function(n,e){var t=e.row,a=new Date(parseInt(t.birthday)),r=a.getFullYear(),i=a.getMonth()+1,d=a.getDate(),o="".concat(r,"-").concat(i,"-").concat(d);return n("span",o)}},{title:"地址",key:"address",render:function(){return'<hj-icon icon="xiaoxi" size="32"></hj-icon>'}},{title:"操作",render:function(e,t){var a=t.index,r=t.row;return n.editIndex===a?[e("button",{on:{click:function(){n.data[a].name=n.editName,n.editIndex=-1}}},"保存"),e("button",{on:{click:function(){n.editIndex=-1}}},"取消")]:e("button",{on:{click:function(){n.editName=r.name,n.editIndex=a}}},"修改")}}],data:[{name:"王小明",age:18,birthday:"919526400000",address:"北京市朝阳区芍药居"},{name:"张小刚",age:25,birthday:"696096000000",address:"北京市海淀区西二旗"},{name:"李小红",age:30,birthday:"563472000000",address:"上海市浦东新区世纪大道"},{name:"周小伟",age:26,birthday:"687024000000",address:"深圳市南山区深南大道"}]}}};return Object(i["a"])({render:n,staticRenderFns:e},t)}(),"element-demo1":function(){var n=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[[t("hj-table",{attrs:{data:n.data,columns:n.columns},scopedSlots:n._u([{key:"name",fn:function(e){var a=e.row,r=e.index;return[n.editIndex===r?t("input",{directives:[{name:"model",rawName:"v-model",value:n.editName,expression:"editName"}],attrs:{type:"text"},domProps:{value:n.editName},on:{input:function(e){e.target.composing||(n.editName=e.target.value)}}}):t("span",[n._v(n._s(a.name))])]}},{key:"birthday",fn:function(e){var a=e.row;return[t("span",[n._v(n._s(n.getBirthday(a.birthday)))])]}},{key:"action",fn:function(e){var a=e.row,r=e.index;return[n.editIndex===r?t("div",[t("button",{on:{click:function(e){return n.handleSave(r)}}},[n._v("\n          保存\n        ")]),n._v(" "),t("button",{on:{click:function(e){n.editIndex=-1}}},[n._v("\n          取消\n        ")])]):t("div",[t("button",{on:{click:function(e){return n.handleEdit(a,r)}}},[n._v("\n          操作\n        ")])])]}}])})]],2)},e=[],t={data:function(){return{editIndex:-1,editName:"",columns:[{title:"姓名",slot:"name"},{title:"年龄",key:"age"},{title:"出生日期",slot:"birthday"},{title:"地址",key:"address"},{title:"操作",slot:"action"}],data:[{name:"王小明",age:18,birthday:"919526400000",address:"北京市朝阳区芍药居"},{name:"张小刚",age:25,birthday:"696096000000",address:"北京市海淀区西二旗"},{name:"李小红",age:30,birthday:"563472000000",address:"上海市浦东新区世纪大道"},{name:"周小伟",age:26,birthday:"687024000000",address:"深圳市南山区深南大道"}]}},methods:{handleEdit:function(n,e){this.editName=n.name,this.editIndex=e},handleSave:function(n){this.data[n].name=this.editName,this.editIndex=-1},getBirthday:function(n){var e=new Date(parseInt(n)),t=e.getFullYear(),a=e.getMonth()+1,r=e.getDate();return"".concat(t,"-").concat(a,"-").concat(r)}}};return Object(i["a"])({render:n,staticRenderFns:e},t)}()}}),o=d,s=t("2877"),c=Object(s["a"])(o,a,r,!1,null,null,null);e["default"]=c.exports},"1dde":function(n,e,t){var a=t("d039"),r=t("b622"),i=t("2d00"),d=r("species");n.exports=function(n){return i>=51||!a((function(){var e=[],t=e.constructor={};return t[d]=function(){return{foo:1}},1!==e[n](Boolean).foo}))}},"4de4":function(n,e,t){"use strict";var a=t("23e7"),r=t("b727").filter,i=t("1dde"),d=i("filter");a({target:"Array",proto:!0,forced:!d},{filter:function(n){return r(this,n,arguments.length>1?arguments[1]:void 0)}})},5530:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));t("b64b"),t("a4d3"),t("4de4"),t("d3b7"),t("e439"),t("159b"),t("dbb4");function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}},8418:function(n,e,t){"use strict";var a=t("a04b"),r=t("9bf2"),i=t("5c6c");n.exports=function(n,e,t){var d=a(e);d in n?r.f(n,d,i(0,t)):n[d]=t}},"99af":function(n,e,t){"use strict";var a=t("23e7"),r=t("da84"),i=t("d039"),d=t("e8b5"),o=t("861d"),s=t("7b0b"),c=t("07fa"),l=t("8418"),u=t("65f0"),h=t("1dde"),m=t("b622"),f=t("2d00"),b=m("isConcatSpreadable"),p=9007199254740991,v="Maximum allowed index exceeded",y=r.TypeError,g=f>=51||!i((function(){var n=[];return n[b]=!1,n.concat()[0]!==n})),x=h("concat"),w=function(n){if(!o(n))return!1;var e=n[b];return void 0!==e?!!e:d(n)},_=!g||!x;a({target:"Array",proto:!0,forced:_},{concat:function(n){var e,t,a,r,i,d=s(this),o=u(d,0),h=0;for(e=-1,a=arguments.length;e<a;e++)if(i=-1===e?d:arguments[e],w(i)){if(r=c(i),h+r>p)throw y(v);for(t=0;t<r;t++,h++)t in i&&l(o,h,i[t])}else{if(h>=p)throw y(v);l(o,h++,i)}return o.length=h,o}})},dbb4:function(n,e,t){var a=t("23e7"),r=t("83ab"),i=t("56ef"),d=t("fc6a"),o=t("06cf"),s=t("8418");a({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(n){var e,t,a=d(n),r=o.f,c=i(a),l={},u=0;while(c.length>u)t=r(a,e=c[u++]),void 0!==t&&s(l,e,t);return l}})},e439:function(n,e,t){var a=t("23e7"),r=t("d039"),i=t("fc6a"),d=t("06cf").f,o=t("83ab"),s=r((function(){d(1)})),c=!o||s;a({target:"Object",stat:!0,forced:c,sham:!o},{getOwnPropertyDescriptor:function(n,e){return d(i(n),e)}})}}]);
//# sourceMappingURL=chunk-469f36f8.936fab7a.js.map