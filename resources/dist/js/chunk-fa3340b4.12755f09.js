(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fa3340b4"],{"0c4b":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return o}));var i=a("22ce");function n(){return Object(i["b"])({url:"/all_themes",method:"get"})}function s(e){return Object(i["b"])({url:"/themes/".concat(e),method:"get"})}function o(e){return Object(i["b"])({url:"/themes",method:"post",data:e})}},"24ce":function(e,t,a){"use strict";var i=a("f1ba"),n=a.n(i);n.a},"4beb":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("d2-container",[a("template",{slot:"header"},[e._v("外观 / 主题")]),a("el-row",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[0===e.theme_list.length?a("el-col",{staticClass:"col-none-box",attrs:{span:24}},[a("h4",{staticClass:"none-tip"},[e._v("暂无数据")])]):e._e(),e._l(e.theme_list,(function(t){return a("el-col",{key:t.ID,staticClass:"col-box",attrs:{span:5}},[a("div",{staticClass:"image-container",class:e.themeIsEnabled(t.is_used)},[a("span",{staticClass:"demonstration"},[e._v(e._s(t.theme_name))]),a("el-image",{staticClass:"attach-image",attrs:{src:t.image,lazy:""},on:{click:function(a){return e.showPreviewDiag(t.theme_name)}}}),a("div",{staticClass:"theme-operation"},[t.is_used?a("el-button",{staticClass:"theme-op-btn",staticStyle:{width:"100%",color:"#409EFF"}},[a("i",{staticClass:"el-icon-check theme-op-btn-i"}),e._v("已启用 ")]):a("el-button",{staticClass:"theme-op-btn",staticStyle:{width:"100%"},on:{click:function(a){return e.enableTheme(t.theme_name)}}},[a("i",{staticClass:"el-icon-check theme-op-btn-i"}),e._v("启用 ")])],1)],1)])}))],2),a("el-dialog",{attrs:{title:"主题详情",visible:e.previewDialogVisible,"with-header":!1,width:"50%"},on:{"update:visible":function(t){e.previewDialogVisible=t}}},[a("el-image",{staticStyle:{width:"100%"},attrs:{src:e.previewData.image,fit:"cover"},on:{click:function(t){return e.openImgUrl(e.previewData.repo)}}}),a("el-row",{staticStyle:{"border-bottom":"1px solid #eaeefb"}},[a("el-col",{attrs:{span:5}},[a("h4",{staticClass:"pre-tip"},[e._v("主题名称：")])]),a("el-col",{attrs:{span:19}},[a("h4",{staticClass:"pre-tip"},[e._v(e._s(e.previewData.theme_name))])])],1),a("el-row",{staticStyle:{"border-bottom":"1px solid #eaeefb"}},[a("el-col",{attrs:{span:5}},[a("h4",{staticClass:"pre-tip"},[e._v("作者：")])]),a("el-col",{attrs:{span:19}},[a("h4",{staticClass:"pre-tip"},[e._v(e._s(e.previewData.author_name))])])],1),a("el-row",{staticStyle:{"border-bottom":"1px solid #eaeefb"}},[a("el-col",{attrs:{span:5}},[a("h4",{staticClass:"pre-tip"},[e._v("仓库地址：")])]),a("el-col",{attrs:{span:19}},[a("h4",{staticClass:"pre-tip"},[e._v(" "+e._s(e.previewData.repo)+" ")])])],1)],1)],2)},n=[],s=a("0c4b"),o={name:"theme",data:function(){return{theme_list:[],previewDialogVisible:!1,loading:!1,previewData:{theme_name:"",image:"",repo:""}}},created:function(){this.getThemeData()},methods:{themeIsEnabled:function(e){return e?"theme_enabled":"theme_not_enabled"},getThemeData:function(){var e=this;this.loading=!0,setTimeout((function(){Object(s["b"])().then((function(t){e.theme_list=t.data})).catch((function(){})),e.loading=!1}),300)},enableTheme:function(e){var t=this;Object(s["a"])({theme_name:e}).then((function(e){t.$message.success(e.msg),t.getThemeData()})).catch((function(){}))},openImgUrl:function(e){window.open(e)},onCopySuccess:function(){var e=this.$createElement;this.$notify({title:" 提示",type:"success",message:e("i",{style:"color: teal"},"已复制到剪贴板")})},onCopyError:function(){var e=this.$createElement;this.$notify({title:"提示",type:"error",message:e("i",{style:"color: teal"},"复制失败")})},showPreviewDiag:function(e){var t=this;Object(s["c"])(e).then((function(e){t.previewData=e.data,t.previewDialogVisible=!0})).catch((function(){}))}}},c=o,l=(a("24ce"),a("2877")),r=Object(l["a"])(c,i,n,!1,null,"4ded74bf",null);t["default"]=r.exports},f1ba:function(e,t,a){}}]);