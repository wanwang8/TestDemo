webpackJsonp([36],{Xdl8:function(t,e){},pTeV:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("SBgR"),n={components:{headerBar:o("Cz8s").a},data:function(){return{show1:!1,headerNavData:{left:!1,title:this.$t("data.Backupprivatekey"),right:!1,bj:"#2c94ed",search:!1,share:!1},content:"",publickey:""}},created:function(){this.publickey=this.$route.query.publickey,this.getkey()},methods:{showpwd:function(){this.show1=!0},gophonebind:function(){this.$router.push({path:"/bindphone",query:{org:1,publickey:this.$route.query.publickey}})},gowritezjc:function(){this.show1=!1,this.$router.push({path:"/",query:{state:1}})},getkey:function(){var t=this;t.openloading(t.$t("data.Generatingprivatekey"));var e=this.$route.query.key,o=this.$route.query.password;Object(a.g)(e,o,function(e){t.content=e,t.closeloading()})},onCopy:function(t){this.$dialog.toast({mes:this.$t("data.copycontent"),timeout:2e3})},onError:function(t){this.$dialog.toast({mes:this.$t("data.copycontentfail"),timeout:2e3})}}},s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"yingyong"},[o("headerBar",{attrs:{title:t.headerNavData}}),t._v(" "),o("div",{staticClass:"createf"},[o("p",[t._v("○ "+t._s(t.$t("code.p1")))]),t._v(" "),o("p",[t._v("○ "+t._s(t.$t("code.p2")))]),t._v(" "),o("p",[t._v("○ "+t._s(t.$t("code.p5")))])]),t._v(" "),o("div",{staticClass:"benfen"},[o("h1",[t._v(t._s(t.$t("code.p6")))])]),t._v(" "),o("div",{staticClass:"notice"},[o("div",{staticClass:"skey"},[t._v(t._s(t.content))]),t._v(" "),o("div",{staticClass:"btn_nxt"},[o("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.content,expression:"content",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],attrs:{type:"button"}},[t._v(t._s(t.$t("code.copy")))]),t._v(" "),o("button",{attrs:{type:"button"},on:{click:function(e){t.gophonebind()}}},[t._v(t._s(t.$t("data.nextcontent")))])])])],1)},staticRenderFns:[]};var i=o("vSla")(n,s,!1,function(t){o("Xdl8")},"data-v-28353586",null);e.default=i.exports}});
//# sourceMappingURL=36.ffc635c7382ee968dd9d.js.map