webpackJsonp([16],{FZtK:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("3cXf"),i=s.n(a),n=s("IHPB"),o=s.n(n),r=s("Cz8s"),l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"systemcon"},[s("div",{staticClass:"header"},[s("yd-navbar",{attrs:{title:t.title,bgcolor:"#2c94ed",fontsize:".36rem",color:"#ffffff",height:".9rem"}},[s("div",{attrs:{slot:"left"},on:{click:function(e){t.hidesys()}},slot:"left"},[s("yd-navbar-back-icon",{attrs:{color:"#ffffff"}})],1)])],1),t._v(" "),s("div",{staticClass:"systemcontent",attrs:{content:t.content}},[s("h1",[t._v(t._s(t.content.MessageTitle))]),t._v(" "),s("p",{staticClass:"ttime"},[t._v(t._s(t.content.CreateTime))]),t._v(" "),s("div",{staticClass:"content",domProps:{innerHTML:t._s(t.content.MessageDetail)}})])])},staticRenderFns:[]};var c=s("vSla")({data:function(){return{title:this.$t("header.Message")}},props:["content"],created:function(){},methods:{hidesys:function(){this.$emit("refchild")}}},l,!1,function(t){s("Qb8B")},"data-v-ffca62a6",null).exports,d=s("L/O1"),f={beforeCreate:function(){this.$route.path;setTimeout(function(){document.querySelector("body").setAttribute("style","background:#f4f4f4")},10)},beforeDestroy:function(){},components:{headerBar:r.a,sysdetail:c},data:function(){return{headerNavData:{left:!0,title:this.$t("mycenter.news"),right:!1,bj:"#2c94ed",search:!1,share:!1},page:1,pagesize:10,pagenum:0,list:[],lasttime:"",systemcontent:""}},methods:{clearLoop:function(){clearInterval(this.Loop)},hidesystem:function(){this.systemcontent=""},gotradetail:function(t){2==t.MessageType?this.$router.push({path:"/index_order_detail",query:{id:t.MessageDetail}}):this.systemcontent=t},loadList:function(){this.openloading(this.$t("toast.loding"));var t=this;this.axios({url:this.Url+"Message.ashx",method:"post",params:{req:4,publickey:Object(d.a)("publickey"),pageindex:this.page,pagecount:this.pagesize}}).then(function(e){t.closeloading();var s=e.data.data;if(0==e.data.data.length)return t.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.loadedDone"),void t.$dialog.toast({mes:t.$t("toast.nodata"),timeout:1500});t.list=[].concat(o()(t.list),o()(s)),t.pagenum=e.data.totalCount,0!=e.data.data.length?(t.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.finishLoad"),t.page++):t.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.loadedDone")}).catch(function(e){t.closeloading(),e=i()(e),t.$refs.pullrefreshDemo.$emit("ydui.pullrefresh.finishLoad"),"{}"==i()(JSON.parse(e).request)&&(t.catchErr(),setTimeout(function(){t.$dialog.confirm({title:t.$t("data.networkerr"),opts:function(e){t.loadList()}})},2e3))})}},created:function(){this.loadList()}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"yingyong"},[s("headerBar",{attrs:{title:t.headerNavData}}),t._v(" "),s("yd-infinitescroll",{ref:"infinitescrollDemo",attrs:{callback:t.loadList}},[s("div",{staticClass:"tadelist",attrs:{slot:"list",theme:"1"},slot:"list"},t._l(t.list,function(e){return s("div",{staticClass:"tade_item",on:{click:function(s){t.gotradetail(e)}}},[s("yd-flexbox",{staticClass:"trade_info"},[s("yd-flexbox-item",{staticClass:"trade_addr"},[s("span",{staticClass:"left_d"},[t._v(t._s(e.MessageTitle))])]),t._v(" "),s("div",[s("span",{staticClass:"dian"})])],1),t._v(" "),s("yd-flexbox",{staticClass:"trade_dabao"},[s("div",[s("span",{staticClass:"zwf"})]),t._v(" "),s("yd-flexbox-item",{staticClass:"succorfail"},[1==e.OtherType?s("span",[t._v(t._s(t.$t("data.Receiver"))+" "+t._s(t._f("ordernum")(e.OtherInfo)))]):s("span",[t._v(t._s(t.$t("data.sender"))+" "+t._s(t._f("ordernum")(e.OtherInfo)))]),t._v(" "),e.Minutes>30?s("span",[t._v(t._s(t._f("timefilter")(e.CreateTime)))]):s("span",[t._v(t._s(e.Minutes)+" "+t._s(t.$t("data.Minutes")))])])],1)],1)})),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.list==[],expression:"list==[]"}],attrs:{slot:"doneTip"},slot:"doneTip"},[t._v(t._s(t.$t("toast.nodata")))])]),t._v(" "),t.systemcontent?s("sysdetail",{attrs:{content:t.systemcontent},on:{refchild:function(e){t.hidesystem()}}}):t._e()],1)},staticRenderFns:[]};var h=s("vSla")(f,u,!1,function(t){s("uXS2")},"data-v-5890b7e8",null);e.default=h.exports},Qb8B:function(t,e){},uXS2:function(t,e){}});
//# sourceMappingURL=16.8265a9469d004d1ef314.js.map