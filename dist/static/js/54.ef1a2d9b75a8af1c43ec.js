webpackJsonp([54],{"82j8":function(t,a){},T4Bp:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("Obkc"),i=e("7heI"),l=e("7m8J"),n=e("vjrR"),o={name:"StoreInfo",data:function(){return{data:{},formData:{receivables:"",stock:"",vehicle_information:"",house_information:"",store_information:"",other_asset_information:""}}},created:function(){var t=this,a=new n.a;a.show(),this.$get(l.r).then(function(e){200==e.code?(200==e.code&&(t.data=e.data,t.formData.bank_loan=t.data.bank_loan,t.formData.company_loan=t.data.company_loan,t.formData.private_loan=t.data.private_loan,t.formData.other_debt_loan=t.data.other_debt_loan),a.close()):new Toast(e.msg).show()}).then(function(t){a.close()})},methods:{submit:function(){var t=this,a=new n.a;a.show(),this.$post(l.r,this.formData).then(function(e){200==e.code?(200==e.code&&(t.data=e.data),a.close()):new Toast(e.msg).show()}).then(function(t){a.close()})}},mounted:function(){var t=window.screen.availHeight,a=document.getElementsByClassName("common_header")[0].offsetHeight;document.getElementsByClassName("basic")[0].style.minHeight=t-a+"px",document.getElementsByClassName("basic")[0].style.backgroundColor="#eee"},components:{TopHeader:s.a,RadioButton:i.a}},_={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"basic"},[a("top-header",{attrs:{"title-txt":"资产信息"}}),this._v(" "),a("form",{staticClass:"content"},[this._m(0),this._v(" "),a("p",{staticClass:"must_title"}),this._v(" "),a("span",{staticClass:"preserve_btn",on:{click:this.submit}},[this._v("保存")])])],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"input_content"},[e("ul",{staticClass:"input_box"},[e("li",{staticClass:"input_div"},[e("label",[t._v("应收款")]),t._v(" "),e("input",{attrs:{type:"text",placeholder:"输入应收款",value:""}})]),t._v(" "),e("li",{staticClass:"input_div"},[e("label",[t._v("存货")]),t._v(" "),e("input",{attrs:{type:"text",placeholder:"输入种类及数量",value:""}})]),t._v(" "),e("li",{staticClass:"title_bar"},[e("p",[t._v("车辆信息")])]),t._v(" "),e("li",{staticClass:"input_div"},[e("label",[t._v("品牌")]),t._v(" "),e("input",{attrs:{type:"text",placeholder:"输入车辆品牌",value:""}})]),t._v(" "),e("li",{staticClass:"input_div"},[e("label",[t._v("型号")]),t._v(" "),e("input",{attrs:{type:"text",placeholder:"输入型号",value:""}})]),t._v(" "),e("li",{staticClass:"input_div"},[e("label",[t._v("购买时间")]),t._v(" "),e("input",{attrs:{type:"text",placeholder:"输入购买时间",value:""}})]),t._v(" "),e("li",{staticClass:"input_div"},[e("label",[t._v("购买价格")]),t._v(" "),e("input",{attrs:{type:"text",placeholder:"输入购买价格",value:""}})]),t._v(" "),e("li",{staticClass:"title_bar"},[e("p",[t._v("住宅信息")])]),t._v(" "),e("li",{staticClass:"input_div"},[e("label",[t._v("住宅类型")]),t._v(" "),e("input",{staticClass:"icon_input",attrs:{type:"text",placeholder:"请选择",readonly:"readonly",value:""}}),t._v(" "),e("i",{staticClass:"icon_arrow"})]),t._v(" "),e("li",{staticClass:"input_div"},[e("label",[t._v("租赁")]),t._v(" "),e("input",{attrs:{type:"text",placeholder:"输入租赁",value:""}})]),t._v(" "),e("li",{staticClass:"input_div"},[e("label",[t._v("居住年限")]),t._v(" "),e("input",{attrs:{type:"text",placeholder:"输入居住年限",value:""}})]),t._v(" "),e("li",{staticClass:"title_bar"},[e("p",[t._v("门店信息")])]),t._v(" "),e("li",{staticClass:"input_div"},[e("label",[t._v("门店类型")]),t._v(" "),e("input",{staticClass:"icon_input",attrs:{type:"text",placeholder:"请选择",readonly:"readonly",value:""}}),t._v(" "),e("i",{staticClass:"icon_arrow"})]),t._v(" "),e("li",{staticClass:"input_div"},[e("label",[t._v("租赁")]),t._v(" "),e("input",{attrs:{type:"text",placeholder:"输入租赁",value:""}})]),t._v(" "),e("li",{staticClass:"input_div"},[e("label",[t._v("居住年限")]),t._v(" "),e("input",{attrs:{type:"text",placeholder:"输入居住年限",value:""}})]),t._v(" "),e("li",{staticClass:"bar"}),t._v(" "),e("li",{staticClass:"input_div"},[e("label",[t._v("其他资产信息")]),t._v(" "),e("input",{staticStyle:{width:"50%"},attrs:{type:"text",placeholder:"输入其他资产信息",value:""}})])])])}]};var c=e("VU/8")(o,_,!1,function(t){e("82j8")},"data-v-27f73b14",null);a.default=c.exports}});
//# sourceMappingURL=54.ef1a2d9b75a8af1c43ec.js.map