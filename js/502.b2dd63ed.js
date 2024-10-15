"use strict";(self["webpackChunkecontract_frontend"]=self["webpackChunkecontract_frontend"]||[]).push([[502],{7502:function(t,a,s){s.r(a),s.d(a,{default:function(){return _}});var i=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"contract_detail"}},[a("h1",{staticClass:"fw-bold"},[t._v("Chi tiết hợp đồng")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-10"},[a("ul",{staticClass:"list-group"},[a("li",{staticClass:"list-group-item bg-light fw-bold"},[t._v("THÔNG TIN CÔNG TY")]),a("li",{staticClass:"list-group-item"},[a("strong",[t._v("Tên công ty:")]),t._v(" "+t._s(t.contract.company_name)+" "),a("router-link",{attrs:{to:{name:"company-edit",params:{id:t.contract.company_id}}}},[a("div",{staticClass:"btn btn-primary-soft btn-round me-1 mb-1 mb-md-0 btn-sm"},[a("i",{staticClass:"fa-thin fa-pen-to-square"})])])],1),a("li",{staticClass:"list-group-item"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("strong",[t._v("Mã số thuế :")]),t._v(" "+t._s(t.contract.company_taxcode)+" ")]),a("div",{staticClass:"col-6"},[a("strong",[t._v("Ngày cấp :")]),t._v(" "+t._s(t._f("moment")(t.contract.company_date_create,"DD/MM/YYYY"))+" ")])])]),a("li",{staticClass:"list-group-item"},[a("strong",[t._v("Địa chỉ:")]),t._v(" "+t._s(t.contract.company_address)+" ")]),a("li",{staticClass:"list-group-item"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("strong",[t._v(" Cơ quan thuế quản lý :")]),t._v(" "+t._s(t.contract.company_tax_manager)+" ")]),a("div",{staticClass:"col-6"},[a("strong",[t._v("Ngành nghề kinh doanh :")]),t._v(" "+t._s(t.contract.company_type)+" ")])])]),a("li",{staticClass:"list-group-item"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[a("strong",[t._v("Người đại diện: ")]),t._v(" "+t._s(t.contract.company_sex)+" "+t._s(t.contract.company_owner)+" ")]),a("div",{staticClass:"col-4"},[a("strong",[t._v("Chức vụ :")]),t._v(" "+t._s(t.contract.company_position)+" ")]),a("div",{staticClass:"col-4"},[a("strong",[t._v("Ngày sinh :")]),t._v(" "+t._s(t._f("moment")(t.contract.owner_birthday,"DD/MM/YYYY"))+" ")])])]),a("li",{staticClass:"list-group-item"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[a("strong",[t._v("Số điện thoại :")]),t._v(" "+t._s(t.contract.company_phone)+" ")]),a("div",{staticClass:"col-4"},[a("strong",[t._v("Di động :")]),t._v(" "+t._s(t.contract.company_telephone)+" ")]),a("div",{staticClass:"col-4"},[a("strong",[t._v("Email :")]),t._v(" "+t._s(t.contract.company_email)+" ")])])]),a("li",{staticClass:"list-group-item"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[a("strong",[t._v("CCCD/CMNĐ :")]),t._v(" "+t._s(t.contract.company_card_id)+" ")]),a("div",{staticClass:"col-4"},[a("strong",[t._v(" Ngày cấp :")]),t._v(" "+t._s(t._f("moment")(t.contract.company_card_date,"DD/MM/YYYY"))+" ")]),a("div",{staticClass:"col-4"},[a("strong",[t._v("Nơi cấp :")]),t._v(" "+t._s(t.contract.company_card_issued)+" ")])])]),a("li",{staticClass:"list-group-item bg-light fw-bold"},[t._v("THÔNG TIN HỢP ĐỒNG")]),a("li",{staticClass:"list-group-item"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("strong",[t._v(" Số hợp đồng :")]),t._v(" "+t._s(t.contract.contract_number)+"/"+t._s(t.contract.contract_number_pattern)+" ")]),a("div",{staticClass:"col-3"},[a("strong",[t._v("Ngày ký :")]),t._v(" "+t._s(t._f("moment")(t.contract.contract_date,"DD/MM/YYYY"))+" ")]),a("div",{staticClass:"col-3"},[a("strong",[t._v("Mã LĐ/Mã TT:")]),t._v(" "+t._s(t.contract.contract_code)+" ")])])]),a("li",{staticClass:"list-group-item"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[a("strong",[t._v("Tên người liên hệ :")]),t._v(" "+t._s(t.contract.customer_name)+" ")]),a("div",{staticClass:"col-4"},[a("strong",[t._v("Số điện thoại :")]),t._v(" "+t._s(t.contract.customer_phone)+" ")]),a("div",{staticClass:"col-4"},[a("strong",[t._v("Email : ")]),t._v(t._s(t.contract.customer_email)+" ")])])]),a("li",{staticClass:"list-group-item"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("strong",[t._v("Ngày bắt đầu :")]),t._v(" "+t._s(t._f("moment")(t.contract.contract_date_start,"DD/MM/YYYY"))+" ")]),a("div",{staticClass:"col-6"},[a("strong",[t._v("Ngày kết thúc :")]),t._v(" "+t._s(t._f("moment")(t.contract.contract_date_end,"DD/MM/YYYY"))+" ")])])]),a("li",{staticClass:"list-group-item"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("strong",[t._v("Mã BHXH/Số lượng HĐ :")]),t._v(" "+t._s(t.contract.extra1)+" ")]),a("div",{staticClass:"col-6"},[a("strong",[t._v("Ký hiệu/Mẫu số")]),t._v(" "+t._s(t.contract.extra2)+" ")])])]),t.contract.details.length>0?a("li",{staticClass:"list-group-item"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-dark-gray align-middle p-4 mb-0 table-hover w-100"},[t._m(0),a("tbody",t._l(t.contract.details,(function(s,i){return a("tr",{key:s.detail_id},[a("td",[t._v(t._s(i+1))]),a("td",[t._v(t._s(s.detail_content))]),a("td",[t._v(t._s(s.detail_unit))]),a("td",[t._v(t._s(t.getPrice(s)))]),a("td",[t._v(" "+t._s(t._f("formatamout")(Math.round(.1*s.detail_product_price),0))+" ")]),a("td",[t._v(" "+t._s(s.detail_quantity<10?"0"+s.detail_quantity:s.detail_quantity)+" ")]),a("td",[t._v(" "+t._s(t._f("formatamout")(t.subTotal(s)))+" ")]),a("td",[t._v(t._s(s.ma_tb))])])})),0)])])]):t._e(),a("li",{staticClass:"list-group-item"},[a("strong",[t._v("Tổng giá trị hợp đồng:")]),t._v(" "+t._s(t._f("formatamout")(t.contract.contract_total,0))+" (Bằng chữ: "+t._s(t.contract.contract_price_text)+") ")]),t._m(1),a("li",{staticClass:"list-group-item"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.keywordRegistration,expression:"keywordRegistration"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Tìm kiếm"},domProps:{value:t.keywordRegistration},on:{input:function(a){a.target.composing||(t.keywordRegistration=a.target.value)}}})])]),a("li",{directives:[{name:"show",rawName:"v-show",value:t.contract.registrations.length>0,expression:"contract.registrations.length > 0"}],staticClass:"list-group-item"},[a("table",{staticClass:"table"},[t._m(2),a("tbody",t._l(t.filterRegistrations,(function(s,i){return a("tr",{key:s.reg_id},[a("td",[t._v(t._s(i+1))]),a("td",[t._v(t._s(s.reg_fullname))]),a("td",[t._v(t._s(s.reg_position))]),a("td",[t._v(t._s(s.card_id))]),a("td",[t._v(t._s(s.card_date_create))]),a("td",[t._v(t._s(s.card_issued))]),a("td",[t._v(t._s(s.reg_phone))]),a("td",[t._v(t._s(s.ma_tb))]),a("td",[t._v(t._s(s.reg_email))])])})),0)])]),a("li",{staticClass:"list-group-item bg-light"},[a("router-link",{staticClass:"btn btn-outline-secondary",attrs:{to:{name:"contract-index"}}},[a("i",{staticClass:"fa-thin fa-arrow-left"}),t._v(" Quay lại ")]),a("router-link",{staticClass:"btn btn-primary ms-1",attrs:{to:{name:"contract-edit",params:{id:t.contract.contract_id}}}},[a("i",{staticClass:"fa-thin fa-pen-to-square"}),t._v(" Sửa hợp đồng ")]),a("router-link",{staticClass:"btn btn-secondary ms-1",attrs:{title:"Tùy chỉnh hợp đồng",to:{name:"contract-option",params:{id:t.contract_id}}}},[a("i",{staticClass:"fa-regular fa-gear"}),t._v(" Tùy chỉnh hợp đồng ")])],1)])]),a("div",{staticClass:"col-2"},[a("ul",{staticClass:"list-group"},[a("li",{staticClass:"list-group-item bg-light fw-bold"},[t._v("Danh sách mẫu hợp đồng")]),t._l(t.contract.templates,(function(s){return a("li",{key:s.temp_id,staticClass:"list-group-item"},[a("button",{staticClass:"btn btn-primary-soft",on:{click:function(a){return t.downloads(t.contract.contract_id,s)}}},[a("i",{staticClass:"fa-thin fa-cloud-arrow-down"}),t._v(" "+t._s(s.temp_name)+" ")])])}))],2)])])])},o=[function(){var t=this,a=t._self._c;return a("thead",{staticClass:"table-dark"},[a("tr",[a("th",{staticClass:"rounded-start"},[t._v("#")]),a("th",[t._v("Tên dịch vụ")]),a("th",[t._v("ĐVT")]),a("th",[t._v("Tiền trước thuế")]),a("th",[t._v("Tiền thuế")]),a("th",[t._v("Số lượng")]),a("th",[t._v("Tổng tiền")]),a("th",{staticClass:"rounded-end"},[t._v("Mã TB")])])])},function(){var t=this,a=t._self._c;return a("li",{staticClass:"list-group-item bg-light"},[a("span",{staticClass:"fw-bold m-0"},[t._v("Danh sách phiếu đăng ký")])])},function(){var t=this,a=t._self._c;return a("thead",{staticClass:"table-dark"},[a("tr",[a("th",{staticClass:"rounded-start"},[t._v("#")]),a("th",{attrs:{width:"40%"}},[t._v("Nội dung")]),a("th",{attrs:{width:"15%"}},[t._v("Chức vụ")]),a("th",[t._v("Số CCCD")]),a("th",[t._v("Ngày cấp")]),a("th",[t._v("Nơi cấp")]),a("th",[t._v("SĐT")]),a("th",[t._v("Mã đăng ký")]),a("th",{staticClass:"rounded-end"},[t._v("Email")])])])}],c=(s(8858),s(1318),s(3228),s(1859)),n={data(){return{contract:{details:{},registrations:[]},contract_id:0,keywordRegistration:"",debounceTimeout:null}},computed:{filterRegistrations(){return this.contract.registrations.filter((t=>-1!==t.reg_fullname.toLowerCase().indexOf(this.keywordRegistration.toLowerCase())))}},created(){this.contract_id=this.$route.params.id,this.getDetail()},methods:{async downloadPDF(){await c.Z.post("exportpdf",{responseType:"blob"}).then((t=>{const a=new Blob([t.data],{type:"application/pdf"}),s=document.createElement("a");s.href=window.URL.createObjectURL(a),s.download="invoice.pdf",s.click()}))},formatAmout(t,a=0){return this.$econtract.formatAmout(t,a)},formatDate(t){return this.$econtract.formatDate(t)},getDetail(){this.$econtract.showLoading(),clearTimeout(this.debounceTimeout),this.debounceTimeout=setTimeout((async()=>{await c.Z.get(`/contracts/${this.contract_id}`).then((t=>{this.contract=t.data,this.$econtract.hideLoading()}))}),300)},getPrice(t){return t.detail_product_price>0?this.formatAmout(t.detail_product_price,4):t.product.product_name},subTotal(t){let a=parseInt(t.detail_quantity),s=parseFloat(t.detail_product_price),i=(parseFloat(t.detail_product_component),a*+s);return Math.floor(Math.round(1.1*i))},downloads(t,a){let s=this.contract.company_taxcode;this.$econtract.showLoading();let i=a.temp_id;c.Z.post("/exportcontract",{contract_id:t,temp_id:i},{responseType:"blob"}).then((t=>{let i=`${s}-${a.temp_display}.docx`;const o=new Blob([t.data],{type:"application/msword"}),c=window.URL.createObjectURL(o),n=document.createElement("a");n.href=c,n.setAttribute("download",i),document.body.appendChild(n),n.click(),this.$econtract.hideLoading()}))}}},r=n,e=s(1001),l=(0,e.Z)(r,i,o,!1,null,null,null),_=l.exports}}]);
//# sourceMappingURL=502.b2dd63ed.js.map