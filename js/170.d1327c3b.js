"use strict";(self["webpackChunkecontract_frontend"]=self["webpackChunkecontract_frontend"]||[]).push([[170],{5170:function(t,a,e){e.r(a),e.d(a,{default:function(){return b}});var s=function(){var t=this,a=t._self._c;return a("div",[a("h1",{staticClass:"fw-bold title-page"},[t._v("Danh sách hợp đồng hết hạn")]),a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.contracts,(function(e,s){return a("tr",{key:e.contract_id},[a("td",[t._v(t._s(e.contract_id))]),a("td",[a("router-link",{attrs:{to:{name:"contract-edit",params:{id:e.contract_id}}}},[t._v(" "+t._s(e.company_name)+" ")]),e.contract_note?a("div",[a("i",{staticClass:"text-danger"},[t._v(t._s(e.contract_note))])]):t._e()],1),a("td",[t._v(t._s(e.company_taxcode))]),a("td",[t._v(t._s(t._f("moment")(e.contract_date_start,"DD/MM/YYYY")))]),a("td",[t._v(t._s(t._f("moment")(e.contract_date_end,"DD/MM/YYYY")))]),a("td",[1==e.contract_type?[t._m(1,!0)]:[t._m(2,!0)]],2),a("td",[t._v(t._s(e.contract_expired_month))]),a("td",[0==e.is_renew?[a("span",{staticClass:"badge text-bg-danger"},[t._v(" Chưa gia hạn")])]:t._e()],2),a("td",[a("strong",{staticClass:"text-danger"},[t._v(t._s(t._f("formatamout")(e.contract_total)))])]),a("td",[a("button",{staticClass:"btn btn-primary-soft btn-sm",on:{click:function(a){return t.updateExpired(e,s)}}},[a("i",{staticClass:"fa-regular fa-circle-check"})])])])})),0)]),a("modal-update-expired",{ref:"modalUpdateExpired",on:{updateExpired:t.handelUpdateExpired}})],1)},n=[function(){var t=this,a=t._self._c;return a("thead",[a("tr",{staticClass:"table-dark"},[a("th",{staticClass:"rounded-start",attrs:{width:"10"}},[t._v("#")]),a("th",{attrs:{width:"35%"}},[t._v("Tên công ty")]),a("th",[t._v("Mã số thuế")]),a("th",[t._v("Ngày BĐ")]),a("th",[t._v("Ngày KT")]),a("th",[t._v("Loại HĐ")]),a("th",[t._v("Gói cước")]),a("th",[t._v("Trạng thái")]),a("th",[t._v("Tổng tiền")]),a("th",{staticClass:"rounded-end",attrs:{width:"10"}})])])},function(){var t=this,a=t._self._c;return a("span",{staticClass:"badge bg-warning bg-opacity-10 text-black"},[a("i",{staticClass:"fa-solid fa-circle-small"}),t._v(" Gia hạn")])},function(){var t=this,a=t._self._c;return a("span",{staticClass:"badge bg-success bg-opacity-10 text-success"},[a("i",{staticClass:"fa-solid fa-circle-small"}),t._v(" Mới")])}],r=function(){var t=this,a=t._self._c;return a("b-modal",{attrs:{id:"modal-update-expired","hide-header-close":"","no-close-on-backdrop":"","no-fade":"",size:"md",title:"Cập nhật gia hạn hợp đồng"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[a("button",{staticClass:"btn btn-secondary",on:{click:function(a){return t.$bvModal.hide("modal-update-expired")}}},[a("i",{staticClass:"fa-thin fa-xmark"}),t._v(" Đóng ")]),a("button",{staticClass:"btn btn-primary-soft",on:{click:function(a){return t.store()}}},[a("i",{staticClass:"fa-thin fa-floppy-disk"}),t._v(" Lưu ")])]},proxy:!0}])},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Tên công ty")]),a("input",{staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.contract.company_name}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Ngày gia hạn")]),a("date-picker",{attrs:{config:t.options},model:{value:t.expired.renew_date,callback:function(a){t.$set(t.expired,"renew_date",a)},expression:"expired.renew_date"}})],1)])},i=[],c=e(9773),o=e.n(c),d=e(8915),l=e.n(d),_=e(1859),p={components:{datePicker:l()},data(){return{contract:{},expired:{contract_id:0,renew_date:o()().format("DD/MM/YYYY HH:mm:ss")},options:{format:"DD/MM/YYYY HH:mm:ss",useCurrent:!1}}},methods:{show(t){this.contract=t,this.$bvModal.show("modal-update-expired")},async store(){this.expired.contract_id=this.contract.contract_id,await _.Z.put("contractexpired/update",this.expired).then((t=>{this.$emit("updateExpired",t),this.$bvModal.hide("modal-update-expired")}))}}},h=p,u=e(1001),f=(0,u.Z)(h,r,i,!1,null,null,null),m=f.exports,v={components:{ModalUpdateExpired:m},data(){return{contracts:[],index:0}},created(){this.getContracts()},methods:{async getContracts(){this.$econtract.showLoading(),await _.Z.get("contractexpired").then((t=>{this.contracts=t.data,this.$econtract.hideLoading()}))},updateExpired(t,a){this.$refs.modalUpdateExpired.show(t),this.index=a},handelUpdateExpired(t){200==t.status&&(this.contracts.splice(this.index,1),this.$toast.success("Cập nhật gia hạn thành công"))}}},g=v,x=(0,u.Z)(g,s,n,!1,null,null,null),b=x.exports}}]);
//# sourceMappingURL=170.d1327c3b.js.map