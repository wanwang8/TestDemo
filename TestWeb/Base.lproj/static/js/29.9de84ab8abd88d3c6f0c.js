webpackJsonp([29],{CRts:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Cz8s"),i=s("L/O1"),n={beforeCreate:function(){this.$route.path;setTimeout(function(){document.querySelector("body").setAttribute("style","background:#ffffff")},10)},components:{headerBar:a.a},data:function(){return{headerNavData:{left:!0,title:this.$t("mycenter.extension"),right:!1,bj:"#2c94ed",search:!1,share:!1},list:""}},created:function(){this.team()},methods:{team:function(){this.openloading(this.$t("toast.loding"));var t=this;this.axios({url:this.Url+"Extension.ashx",method:"post",params:{req:6,publickey:Object(i.a)("publickey")}}).then(function(e){t.closeloading();var s=e.data.data;if(s){for(var a=0;a<s.extensionRecords.length;a++)if(s.extensionRecords[a].createTime=s.extensionRecords[a].createTime.split("T")[0],s.extensionRecords[a].publicKey){var i=s.extensionRecords[a].publicKey.substring(0,6),n=s.extensionRecords[a].publicKey.substring(36,42);s.extensionRecords[a].publicKey=i+"..."+n}else s.extensionRecords[a].publicKey=t.$t("data.Invitedaward");t.list=s}})}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"yingyong"},[s("headerBar",{attrs:{title:t.headerNavData}}),t._v(" "),s("div",{staticClass:"t_bar"},[s("yd-flexbox",{staticClass:"t_bar_num"},[s("yd-flexbox-item",[s("span",{staticClass:"t_bar_num_top"},[t._v(t._s(t.$t("tuiguang.friend")))]),t._v(" "),s("span",{staticClass:"t_bar_num_bottom"},[t._v(t._s(t.list.totalCount))])]),t._v(" "),s("yd-flexbox-item",[s("span",{staticClass:"t_bar_num_top"},[t._v(t._s(t.$t("tuiguang.jiangli")))]),t._v(" "),s("span",{staticClass:"t_bar_num_bottom"},[t._v(t._s(t.list.reward))])])],1)],1),t._v(" "),s("div",{staticClass:"t_addr"},[s("yd-flexbox",{staticClass:"t_addr_list"},[s("yd-flexbox-item",[t._v(t._s(t.$t("tuiguang.address")))]),t._v(" "),s("yd-flexbox-item",[t._v(t._s(t.$t("tuiguang.reward")))]),t._v(" "),s("yd-flexbox-item",[t._v(t._s(t.$t("tuiguang.riqi")))])],1),t._v(" "),t._l(t.list.extensionRecords,function(e){return s("yd-flexbox",{staticClass:"t_addr_data"},[s("yd-flexbox-item",[t._v(t._s(e.publicKey))]),t._v(" "),s("yd-flexbox-item",[t._v(t._s(e.reward))]),t._v(" "),s("yd-flexbox-item",[t._v(t._s(e.createTime))])],1)})],2)],1)},staticRenderFns:[]};var o=s("vSla")(n,r,!1,function(t){s("XRMq")},"data-v-53a92e36",null);e.default=o.exports},XRMq:function(t,e){}});
//# sourceMappingURL=29.9de84ab8abd88d3c6f0c.js.map