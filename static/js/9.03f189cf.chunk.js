(window["webpackJsonpreact-admin-lite"]=window["webpackJsonpreact-admin-lite"]||[]).push([[9],{481:function(e,n,i){"use strict";i.r(n);i(382);var t=i(384),s=(i(468),i(470)),a=i(0),r=i.n(a),c=i(37),m=function(e){var n=Object(a.useContext)(c.b).userinfo,i=e.children;return e.permissions.includes(n.permission)?i:null},o=i(69);n.default=Object(o.a)(function(e){var n=Object(a.useContext)(c.b),i=n.userinfo,u=n.saveUserinfo,d=Object(o.b)(function(){return{isAdmin:"admin"===i.permission}});return r.a.createElement("div",null,r.a.createElement(s.a,{checkedChildren:"admin",unCheckedChildren:"guest",checked:d.isAdmin,onClick:function(){d.isAdmin=!d.isAdmin;var e=d.isAdmin?{account:"admin@xxx.com",name:"admin",permission:"admin"}:{account:"guest@xxx.com",name:"guest",permission:"guest"};u(e)}}),r.a.createElement("p",null,"Current permission ",r.a.createElement("strong",null,d.isAdmin?"admin":"guest")),r.a.createElement(m,{permissions:["admin"]},r.a.createElement(t.a,{color:"blue"},"only on admin")))})}}]);
//# sourceMappingURL=9.03f189cf.chunk.js.map