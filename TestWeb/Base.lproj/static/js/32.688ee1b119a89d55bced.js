webpackJsonp([32],{"S+yV":function(a,t){},"pb/2":function(a,t,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=p("Cz8s"),s=p("mzkE"),l={components:{headerBar:e.a,footerBar:s.a},data:function(){return{headerNavData:{left:!0,title:this.$t("data.Apply"),right:!1,bj:"#2c94ed",search:!1,share:!1},img1:"",img2:"",img3:"",applydata:{company:"",address:"",companycard:"",companycardpic:"",name:"",phone:"",email:"",cardid:"",cardf:"",cardb:"",durl:"",req:1}}},methods:{ApplyUpdate:function(){var a=this,t=/^1[3|4|5|6|7|8|9][0-9]\d{4,8}$/,p=a.applydata.phone;if(t.test(p)){t=new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");var e=a.applydata.email;t.test(e)?(this.openloading(a.$t("data.submitting")),this.axios({url:this.Url+"AppApply.ashx",method:"post",params:this.applydata}).then(function(t){a.closeloading(),t.data.success?(a.Toast(t.data.msg),a.applydata={company:"",address:"",companycard:"",companycardpic:"",name:"",phone:"",email:"",cardid:"",cardf:"",cardb:"",durl:"",req:1},a.img1="",a.img2="",a.img3=""):a.Toast(t.data.msg)})):a.Toast(a.$t("data.correctemail"))}else a.Toast(a.$t("data.correctphonenumber"))},fileImage1:function(a){var t=this,p=a.target.files[0],e=(p.size,new FileReader);e.readAsDataURL(p),e.onloadend=function(){var a=e.result;t.img1=a,t.uoloadfile(a,1)}},fileImage2:function(a){var t=this,p=a.target.files[0],e=(p.size,new FileReader);e.readAsDataURL(p),e.onloadend=function(){var a=e.result;t.img2=a,t.uoloadfile(a,2)}},fileImage3:function(a){var t=this,p=a.target.files[0],e=(p.size,new FileReader);e.readAsDataURL(p),e.onloadend=function(){var a=e.result;t.img3=a,t.uoloadfile(a,3)}},uoloadfile:function(a,t){var p=this,e=new FormData;e.append("file",a);var s=p.Url+"UploadFile.ashx";p.axios.post(s,e,{header:{"Content-Type":"multipart/form-data"}}).then(function(a){a.data.success&&(1==t?p.applydata.companycardpic=a.data.data:2==t?p.applydata.cardf=a.data.data:3==t&&(p.applydata.cardb=a.data.data))})}}},i={render:function(){var a=this,t=a.$createElement,p=a._self._c||t;return p("div",{staticClass:"yingyong"},[p("headerBar",{attrs:{title:a.headerNavData}}),a._v(" "),p("div",{staticClass:"applycontent"},[p("p",{staticClass:"apl_p"},[a._v(a._s(a.$t("data.info")))]),a._v(" "),p("div",{staticClass:"app_list"},[p("span",{staticClass:"app_label"},[a._v(a._s(a.$t("data.compayname")))]),a._v(" "),p("input",{directives:[{name:"model",rawName:"v-model",value:a.applydata.company,expression:"applydata.company"}],staticClass:"app_inp",attrs:{type:"text"},domProps:{value:a.applydata.company},on:{input:function(t){t.target.composing||a.$set(a.applydata,"company",t.target.value)}}})]),a._v(" "),p("div",{staticClass:"app_list"},[p("span",{staticClass:"app_label"},[a._v(a._s(a.$t("data.contactaddress")))]),a._v(" "),p("input",{directives:[{name:"model",rawName:"v-model",value:a.applydata.address,expression:"applydata.address"}],staticClass:"app_inp",attrs:{type:"text"},domProps:{value:a.applydata.address},on:{input:function(t){t.target.composing||a.$set(a.applydata,"address",t.target.value)}}})]),a._v(" "),p("div",{staticClass:"app_list"},[p("span",{staticClass:"app_label"},[a._v(a._s(a.$t("data.Businessnumber")))]),a._v(" "),p("input",{directives:[{name:"model",rawName:"v-model",value:a.applydata.companycard,expression:"applydata.companycard"}],staticClass:"app_inp",attrs:{type:"text"},domProps:{value:a.applydata.companycard},on:{input:function(t){t.target.composing||a.$set(a.applydata,"companycard",t.target.value)}}})]),a._v(" "),p("div",{staticClass:"app_list"},[p("span",{staticClass:"app_label"},[a._v(a._s(a.$t("data.Uploadbusiness")))]),a._v(" "),p("div",{staticClass:"uploadimg",class:{uploadimg_bj:!a.img1}},[p("input",{attrs:{type:"file",name:"file2",accept:"image/*"},on:{change:a.fileImage1}}),a._v(" "),p("img",{attrs:{src:a.img1,alt:""}})])]),a._v(" "),p("p",{staticClass:"apl_p mt20"},[a._v(a._s(a.$t("data.Corporaterepresentative")))]),a._v(" "),p("div",{staticClass:"app_list"},[p("span",{staticClass:"app_label"},[a._v(a._s(a.$t("data.representativeName")))]),a._v(" "),p("input",{directives:[{name:"model",rawName:"v-model",value:a.applydata.name,expression:"applydata.name"}],staticClass:"app_inp",attrs:{type:"text"},domProps:{value:a.applydata.name},on:{input:function(t){t.target.composing||a.$set(a.applydata,"name",t.target.value)}}})]),a._v(" "),p("div",{staticClass:"app_list"},[p("span",{staticClass:"app_label"},[a._v(a._s(a.$t("data.contact")))]),a._v(" "),p("input",{directives:[{name:"model",rawName:"v-model",value:a.applydata.phone,expression:"applydata.phone"}],staticClass:"app_inp",attrs:{type:"text"},domProps:{value:a.applydata.phone},on:{input:function(t){t.target.composing||a.$set(a.applydata,"phone",t.target.value)}}})]),a._v(" "),p("div",{staticClass:"app_list"},[p("span",{staticClass:"app_label"},[a._v(a._s(a.$t("data.email")))]),a._v(" "),p("input",{directives:[{name:"model",rawName:"v-model",value:a.applydata.email,expression:"applydata.email"}],staticClass:"app_inp",attrs:{type:"text"},domProps:{value:a.applydata.email},on:{input:function(t){t.target.composing||a.$set(a.applydata,"email",t.target.value)}}})]),a._v(" "),p("div",{staticClass:"app_list"},[p("span",{staticClass:"app_label"},[a._v(a._s(a.$t("data.Idnumber")))]),a._v(" "),p("input",{directives:[{name:"model",rawName:"v-model",value:a.applydata.cardid,expression:"applydata.cardid"}],staticClass:"app_inp",attrs:{type:"text"},domProps:{value:a.applydata.cardid},on:{input:function(t){t.target.composing||a.$set(a.applydata,"cardid",t.target.value)}}})]),a._v(" "),p("div",{staticClass:"app_list"},[p("span",{staticClass:"app_label"},[a._v(a._s(a.$t("data.Idphoto"))+" ( "+a._s(a.$t("data.cardbackorfont"))+" )")]),a._v(" "),p("div",{staticClass:"uploadimg",class:{uploadimg_bj:!a.img2}},[p("input",{attrs:{type:"file",name:"file2",accept:"image/*"},on:{change:a.fileImage2}}),a._v(" "),p("img",{attrs:{src:a.img2,alt:""}})]),a._v(" "),p("div",{staticClass:"uploadimg",class:{uploadimg_bj:!a.img3}},[p("input",{attrs:{type:"file",name:"file2",accept:"image/*"},on:{change:a.fileImage3}}),a._v(" "),p("img",{attrs:{src:a.img3,alt:""}})])]),a._v(" "),p("p",{staticClass:"apl_p mt20"},[a._v(a._s(a.$t("data.Application")))]),a._v(" "),p("div",{staticClass:"app_list"},[p("span",{staticClass:"app_label"},[a._v(a._s(a.$t("data.download")))]),a._v(" "),p("input",{directives:[{name:"model",rawName:"v-model",value:a.applydata.durl,expression:"applydata.durl"}],staticClass:"app_inp",attrs:{type:"text"},domProps:{value:a.applydata.durl},on:{input:function(t){t.target.composing||a.$set(a.applydata,"durl",t.target.value)}}})]),a._v(" "),p("button",{staticClass:"app_btn",class:{app_btn_bj:a.applydata.company&&a.applydata.address&&a.applydata.companycard&&a.applydata.name&&a.applydata.phone&&a.applydata.email&&a.applydata.cardid&&a.applydata.durl},on:{click:function(t){a.applydata.company&&a.applydata.address&&a.applydata.companycard&&a.applydata.name&&a.applydata.phone&&a.applydata.email&&a.applydata.cardid&&a.applydata.durl&&a.ApplyUpdate()}}},[a._v(a._s(a.$t("code.ok")))])])],1)},staticRenderFns:[]};var d=p("vSla")(l,i,!1,function(a){p("S+yV")},"data-v-3b85a7a8",null);t.default=d.exports}});
//# sourceMappingURL=32.688ee1b119a89d55bced.js.map