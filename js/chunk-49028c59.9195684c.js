(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49028c59"],{"2dcb":function(n,e,t){"use strict";t.r(e);var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("d2-container",[t("template",{slot:"header"},[n._v("流体高度")]),t("d2-crud",{attrs:{columns:n.columns,data:n.data,options:n.options,rowHandle:n.rowHandle},on:{"row-remove":n.handleRowRemove}}),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("d2-markdown",{attrs:{source:n.doc}})],1),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("d2-highlight",{attrs:{code:n.code}})],1),t("d2-link-btn",{attrs:{slot:"footer",title:"文档",link:"https://d2.pub/zh/doc/d2-crud-v2"},slot:"footer"})],2)},d=[],i=(t("a42c"),t("2de4")),s=t.n(i),o="<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"\n      :options=\"options\"\n      :rowHandle=\"rowHandle\"\n      @row-remove=\"handleRowRemove\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date'\n        },\n        {\n          title: '姓名',\n          key: 'name'\n        },\n        {\n          title: '省份',\n          key: 'province'\n        },\n        {\n          title: '市区',\n          key: 'city'\n        },\n        {\n          title: '地址',\n          key: 'address',\n          width: '300'\n        },\n        {\n          title: '邮编',\n          key: 'zip'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          province: '上海',\n          city: '普陀区',\n          address: '上海市普陀区金沙江路 1518 弄',\n          zip: 200333\n        },\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          province: '上海',\n          city: '普陀区',\n          address: '上海市普陀区金沙江路 1518 弄',\n          zip: 200333\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          province: '上海',\n          city: '普陀区',\n          address: '上海市普陀区金沙江路 1518 弄',\n          zip: 200333\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          province: '上海',\n          city: '普陀区',\n          address: '上海市普陀区金沙江路 1518 弄',\n          zip: 200333\n        },\n        {\n          date: '2016-05-08',\n          name: '王小虎',\n          province: '上海',\n          city: '普陀区',\n          address: '上海市普陀区金沙江路 1518 弄',\n          zip: 200333\n        },\n        {\n          date: '2016-05-06',\n          name: '王小虎',\n          province: '上海',\n          city: '普陀区',\n          address: '上海市普陀区金沙江路 1518 弄',\n          zip: 200333\n        },\n        {\n          date: '2016-05-07',\n          name: '王小虎',\n          province: '上海',\n          city: '普陀区',\n          address: '上海市普陀区金沙江路 1518 弄',\n          zip: 200333\n        }\n      ],\n      options: {\n        maxHeight: '250'\n      },\n      rowHandle: {\n        remove: {\n          size: 'mini',\n          confirm: false\n        }\n      }\n    }\n  },\n  methods: {\n    handleRowRemove ({ index, row }, done) {\n      this.$message({\n        message: '删除成功',\n        type: 'success'\n      })\n      done()\n    }\n  }\n}\n<\/script>",r={data:function(){return{doc:s.a,code:o,columns:[{title:"日期",key:"date"},{title:"姓名",key:"name"},{title:"省份",key:"province"},{title:"市区",key:"city"},{title:"地址",key:"address",width:"300"},{title:"邮编",key:"zip"}],data:[{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-08",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-06",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-07",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333}],options:{maxHeight:"250"},rowHandle:{remove:{size:"mini",confirm:!1}}}},methods:{handleRowRemove:function(n,e){n.index,n.row;this.$message({message:"删除成功",type:"success"}),e()}}},c=r,p=t("2877"),l=Object(p["a"])(c,a,d,!1,null,null,null);e["default"]=l.exports},"2de4":function(n,e){n.exports="通过在 `options` 对象设置 `maxHeight` 属性为 `D2 Crud` 指定最大高度。此时若表格所需的高度大于最大高度，则会显示一个滚动条。代码如下：\n"}}]);
//# sourceMappingURL=chunk-49028c59.9195684c.js.map