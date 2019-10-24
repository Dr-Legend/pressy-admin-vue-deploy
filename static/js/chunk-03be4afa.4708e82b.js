(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03be4afa"],{f27a:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.items,border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{label:"ID",prop:"id",sortable:"custom",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.id))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"Type",prop:"type",sortable:"custom",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(0==t.row.type?"Pickup":"Delivery"))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"PickupSlot",prop:"pickupSlot",sortable:"custom",align:"center",width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(e._f("parseTime")(t.row.pickupSlot.startDate,"{d}/{m}/{y} {h}:{i}")))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"Address",prop:"address",sortable:"custom",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.address.formattedAddress))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"Member",prop:"address",sortable:"custom",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.member.firstName+" "+t.row.member.lastName))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"Actions",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){return e.handleAssign(t.row)}}},[i("span",[i("svg-icon",{attrs:{"icon-class":"delivery"}})],1),e._v(" Assign")]),e._v(" "),i("el-button",{attrs:{size:"mini",type:"warning"},on:{click:function(i){return e.handlePenalty(t.row)}}},[i("span",[i("svg-icon",{attrs:{"icon-class":"hand"}})],1),e._v(" penalty")])]}}])})],1),e._v(" "),i("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogFormVisible,width:"400px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{ref:"dataForm",staticStyle:{"margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"top","label-width":"70px"}},[i("el-form-item",{attrs:{label:"Mission Type",prop:"type"}},[i("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:e.temp.type,callback:function(t){e.$set(e.temp,"type",t)},expression:"temp.type"}},e._l(e.orderMissionTypeOptions,(function(e){return i("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),1)],1),e._v(" "),i("el-form-item",{staticStyle:{width:"200px"},attrs:{label:"Order Id",prop:"orderId"}},[i("el-input",{attrs:{type:"number",placeholder:"Please enter order id"},model:{value:e.temp.orderId,callback:function(t){e.$set(e.temp,"orderId",t)},expression:"temp.orderId "}})],1),e._v(" "),i("el-form-item",{staticStyle:{width:"200px"},attrs:{label:"Driver Id",prop:"driverId"}},[i("el-input",{model:{value:e.temp.driverId,callback:function(t){e.$set(e.temp,"driverId",t)},expression:"temp.driverId"}})],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("\n        Cancel\n      ")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.assignOrder}},[e._v("\n        Confirm\n      ")])],1)],1)],1)},n=[],a=i("f8b7"),s=i("ed08"),l=i("5c96"),o={filters:{parseTime:s["b"]},data:function(){return{items:null,dialogTitle:"Assign Order",tableKey:0,list:null,total:0,listLoading:!0,listQuery:{page:1,limit:10,importance:void 0,title:void 0,type:void 0,sort:"+id"},importanceOptions:[1,2,3],sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,temp:{type:void 0,orderId:void 0,driverId:void 0},orderMissionTypeOptions:[{key:"pickup",display_name:"Pickup"},{key:"delivery",display_name:"Delivery"}],dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"type is required",trigger:"change"}],orderId:[{required:!0,message:"Order id is required",trigger:"blur"}],driverId:[{required:!0,message:"Driver id is required",trigger:"blur"}]},downloadLoading:!1}},created:function(){this.getOrders()},methods:{getOrders:function(){var e=this;this.listLoading=!0,Object(a["c"])().then((function(t){e.items=t,e.total=t.length,e.listLoading=!1}))},handlePenalty:function(e){var t=this;l["MessageBox"].confirm("Are you sure to appy penalty to this order? ","Confirm",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then((function(){t.applyPenalty(e.id)})).catch((function(){console.log("canceled")}))},handleAssign:function(e){var t=this;this.temp.orderId=e.id,this.temp.type=0===e.type?"pickup":"delivery",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},assignOrder:function(){var e=this;this.$refs["dataForm"].validate((function(t){t&&Object(a["b"])(e.temp).then((function(){e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Order Successfully Assign to Driver",type:"success",duration:5e3})})).catch((function(){e.dialogFormVisible=!1}))}))},applyPenalty:function(){var e=this;Object(a["a"])(this.temp).then((function(){e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3})}))}}},d=o,c=i("2877"),u=Object(c["a"])(d,r,n,!1,null,null,null);t["default"]=u.exports},f8b7:function(e,t,i){"use strict";i.d(t,"c",(function(){return n})),i.d(t,"b",(function(){return a})),i.d(t,"a",(function(){return s}));var r=i("b775");function n(e){return Object(r["a"])({url:"/order",method:"get",params:e})}function a(e){return console.log("data: ".concat(e," | params: ").concat(e.type)),Object(r["a"])({url:"/order/assign-driver/".concat(e.type),method:"post",data:e})}function s(e){return Object(r["a"])({url:"/order/apply-absent-penalty/".concat(e),method:"post"})}}}]);