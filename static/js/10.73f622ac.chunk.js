(window["webpackJsonpreact-admin-lite"]=window["webpackJsonpreact-admin-lite"]||[]).push([[10],{479:function(e,t,a){"use strict";a.r(t);a(402);var n=a(400),r=(a(462),a(467)),l=a(464),i=(a(391),a(403)),o=(a(64),a(19)),c=(a(135),a(54)),d=(a(477),a(473)),u=(a(390),a(388)),m=(a(202),a(103)),p=a(0),s=a.n(p),f=a(69),b=a(37),g=a(140),y=a(141);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var v=m.a.Item,w=u.a.Option,j=d.a.RangePicker,h=m.a.create()(Object(f.a)(function(e){var t=e.form,a=t.getFieldDecorator,n=t.validateFields,r=Object(p.useContext)(b.a).loading;return s.a.createElement(m.a,{layout:"inline",onSubmit:function(t){t.preventDefault(),n(function(t,a){t||e.onSubmit(a)})}},s.a.createElement(v,{label:"\u4ea7\u54c1\u540d\u79f0"},a("productCode",{initialValue:"0"})(s.a.createElement(u.a,{style:{width:120},allowClear:!0},s.a.createElement(w,{value:"0"},"\u5168\u90e8"),s.a.createElement(w,{value:"1"},"product-1"),s.a.createElement(w,{value:"2"},"product-2"),s.a.createElement(w,{value:"3"},"product-3")))),s.a.createElement(v,{label:"\u5408\u4f5c\u5546\u8ba2\u5355\u53f7"},a("merOrderNo")(s.a.createElement(c.a,null))),s.a.createElement(v,{label:"\u672c\u5730\u8ba2\u5355\u53f7"},a("payOrderId")(s.a.createElement(c.a,null))),s.a.createElement(v,{label:"\u5546\u6237\u7f16\u53f7"},a("roadCode")(s.a.createElement(c.a,null))),s.a.createElement(v,{label:"\u5546\u6237\u540d\u79f0"},a("merName")(s.a.createElement(c.a,null))),s.a.createElement(v,{label:"\u4ea4\u6613\u65f6\u95f4"},a("datetime")(s.a.createElement(j,{showTime:{format:"HH:mm"},format:"YYYY-MM-DD HH:mm",placeholder:["",""]}))),s.a.createElement(v,null,s.a.createElement(o.a,{loading:r,type:"primary",htmlType:"submit"},"\u67e5\u8be2")))})),k=[{title:"\u5408\u4f5c\u5546\u8ba2\u5355\u53f7",dataIndex:"merOrderNo",key:"merOrderNo"},{title:"\u672c\u5730\u8ba2\u5355\u53f7",dataIndex:"payOrderId",key:"payOrderId"},{title:"\u5546\u6237\u7f16\u53f7",dataIndex:"roadCode",key:"roadCode"},{title:"\u5546\u6237\u540d\u79f0",dataIndex:"merName",key:"merName"},{title:"\u4ea4\u6613\u91d1\u989d\uff08\u5143\uff09",dataIndex:"amount",align:"right",width:140,key:"amount"},{title:"\u4ea4\u6613\u65f6\u95f4",dataIndex:"createTime",align:"center",key:"createTime"},{title:"\u4ea4\u6613\u72b6\u6001",dataIndex:"status",align:"left",render:function(e){return s.a.createElement("div",null,s.a.createElement(i.a,{status:{10:"default",20:"warning",30:"processing",40:"error",50:"success"}[e]}),y.b[e])},key:"status"}];t.default=Object(f.a)(function(e){var t=Object(p.useContext)(b.a),a=t.loading,l=t.openLoading,i=t.closeLoading,o=Object(f.b)(function(){return{data:[],pagination:{}}});Object(p.useEffect)(function(){c()},[]);var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l(),g.a.get("/trade-query",{params:E({results:10},e)}).then(function(e){var t=E({},o.pagination);t.total=200,o.data=e,o.pagination=t,i()})};return s.a.createElement("div",{style:{background:"#fff",padding:"24px"}},s.a.createElement(h,{onSubmit:c}),s.a.createElement(r.a,{dashed:!0}),s.a.createElement(n.a,{loading:a,columns:k,rowKey:"id",dataSource:o.data,pagination:o.pagination,onChange:function(e,t,a){var n=E({},o.pagination);n.current=e.current,o.pagination=n,c({results:e.pageSize})}}))})}}]);
//# sourceMappingURL=10.73f622ac.chunk.js.map