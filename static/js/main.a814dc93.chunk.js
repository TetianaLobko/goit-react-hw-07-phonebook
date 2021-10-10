(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={button:"ContactForm_button__1kvkQ",form:"ContactForm_form__3PBVi",title:"ContactForm_title__3vvd1",input:"ContactForm_input__2-ayn"}},26:function(t,e,n){t.exports={list:"ContactList_list__3Cvw7",item:"ContactList_item__coSpw"}},28:function(t,e,n){t.exports={title:"Filter_title__3xt6u",input:"Filter_input__1iSFz"}},29:function(t,e,n){t.exports={title:"App_title__3qZXl"}},41:function(t,e,n){t.exports={IconButton:"IconButton_IconButton__3a_zT"}},42:function(t,e,n){t.exports={container:"Container_container__1JA8K"}},51:function(t,e,n){},90:function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"filter",(function(){return p}));var c={};n.r(c),n.d(c,"fetchContacts",(function(){return B})),n.d(c,"addContacts",(function(){return F})),n.d(c,"deleteContacts",(function(){return z}));var a={};n.r(a),n.d(a,"getContacts",(function(){return J})),n.d(a,"getFilter",(function(){return Z})),n.d(a,"getVisibleContacts",(function(){return q}));var o=n(0),u=n.n(o),i=n(13),s=n.n(i),l=(n(51),n(31)),f=n(9),b=n(7),p=Object(b.b)("phoneBook/filter"),d=n(5),j=n.n(d),h=n(11),O=n(17),m=n.n(O);function v(){return x.apply(this,arguments)}function x(){return(x=Object(h.a)(j.a.mark((function t(){var e,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.get("/contacts");case 3:return e=t.sent,n=e.data,t.abrupt("return",n);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function y(t){return C.apply(this,arguments)}function C(){return(C=Object(h.a)(j.a.mark((function t(e){var n,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.post("/contacts",e);case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function g(t){return _.apply(this,arguments)}function _(){return(_=Object(h.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.delete("/contacts/".concat(e));case 3:return t.abrupt("return",e);case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}m.a.defaults.baseURL="http://localhost:4040";var w,k,N,B=Object(b.c)("phoneBook/fetchContacts",Object(h.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))),F=Object(b.c)("phoneBook/add",function(){var t=Object(h.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),z=Object(b.c)("phoneBook/delete",function(){var t=Object(h.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),A=n(3),I=n(45),L=n(10),S=Object(b.d)([],(w={},Object(A.a)(w,B.fulfilled,(function(t,e){return e.payload})),Object(A.a)(w,F.fulfilled,(function(t,e){return[].concat(Object(I.a)(t),[e.payload])})),Object(A.a)(w,z.fulfilled,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),w)),E=Object(b.d)(!1,(k={},Object(A.a)(k,B.pending,(function(){return!0})),Object(A.a)(k,B.fulfilled,(function(){return!1})),Object(A.a)(k,B.rejected,(function(){return!1})),k)),P=Object(b.d)(null,(N={},Object(A.a)(N,B.rejected,(function(t,e){return e.payload})),Object(A.a)(N,B.pending,(function(){return null})),Object(A.a)(N,F.rejected,(function(t,e){return e.payload})),Object(A.a)(N,F.pending,(function(){return null})),Object(A.a)(N,z.rejected,(function(t,e){return e.payload})),Object(A.a)(N,z.pending,(function(){return null})),N)),M=Object(b.d)("",Object(A.a)({},p,(function(t,e){return e.payload}))),V=Object(L.b)({contacts:S,isLoading:E,error:P,filter:M}),J=function(t){return t.phoneBook.contacts},Z=function(t){return t.phoneBook.filter},q=function(t){var e=J(t),n=Z(t);return e.filter((function(t){return t.contactName.toLowerCase().includes(n.toLowerCase())}))},H=n(22),R=n(25),D=n.n(R),K=n(12),Q=n.n(K),T=n(1);function U(){var t=Object(o.useState)(""),e=Object(l.a)(t,2),n=e[0],r=e[1],u=Object(o.useState)(""),i=Object(l.a)(u,2),s=i[0],b=i[1],p=Object(f.c)((function(t){return a.getContacts(t)})),d=Object(f.b)(),j=D.a.generate(),h=D.a.generate(),O=function(t,e){return t.find((function(t){return t.contactName.toLowerCase()===e.toLowerCase()}))},m=function(t){var e=t.target,n=e.name,c=e.value;return"name"===n?r(c):b(c)};return Object(T.jsxs)("form",{className:Q.a.form,onSubmit:function(t){t.preventDefault(),O(p,n)?H.b.error("".concat(n," is already in contacts.")):(d(c.addContacts({contactName:n,contactNumber:s})),r(""),b(""))},children:[Object(T.jsxs)("label",{htmlFor:j,children:[Object(T.jsx)("p",{className:Q.a.title,children:"Name"}),Object(T.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,onChange:m,id:j,className:Q.a.input})]}),Object(T.jsxs)("label",{htmlFor:h,children:[Object(T.jsx)("p",{className:Q.a.title,children:"Number"}),Object(T.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:s,onChange:m,id:h,className:Q.a.input})]}),Object(T.jsx)("button",{type:"submit",className:Q.a.button,children:"Add contact"})]})}var X=n(26),$=n.n(X),G=n(27),W=n(46),Y=n(41),tt=n.n(Y),et=["children","onClick"],nt=function(t){var e=t.children,n=t.onClick,r=Object(W.a)(t,et);return Object(T.jsx)("button",Object(G.a)(Object(G.a)({type:"button",className:tt.a.IconButton,onClick:n},r),{},{children:e}))};nt.defaultProps={onClick:function(){return null},children:null};var rt,ct,at=nt,ot=["title","titleId"];function ut(){return ut=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ut.apply(this,arguments)}function it(t,e){if(null==t)return{};var n,r,c=function(t,e){if(null==t)return{};var n,r,c={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}function st(t,e){var n=t.title,r=t.titleId,c=it(t,ot);return o.createElement("svg",ut({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:e,"aria-labelledby":r},c),n?o.createElement("title",{id:r},n):null,rt||(rt=o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),ct||(ct=o.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})))}var lt=o.forwardRef(st),ft=(n.p,function(){var t=Object(f.b)(),e=Object(f.c)((function(t){return a.getVisibleContacts(t)}));return Object(o.useEffect)((function(){return t(c.fetchContacts())}),[t]),Object(T.jsx)("ul",{className:$.a.list,children:e.map((function(e){var n=e.contactName,r=e.contactNumber,a=e.id;return Object(T.jsxs)("li",{className:$.a.item,children:[n,": ",r,Object(T.jsx)(at,{onClick:function(){return t(c.deleteContacts(a))},children:Object(T.jsx)(lt,{width:"15",height:"15",fill:"#fff"})})]},a)}))})}),bt=n(28),pt=n.n(bt),dt=function(){var t=Object(f.c)((function(t){return a.getFilter(t)})),e=Object(f.b)();return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("p",{className:pt.a.title,children:"Find contacts by name"}),Object(T.jsx)("label",{children:Object(T.jsx)("input",{type:"text",name:"filter",value:t,onChange:function(t){return e(r.filter(t.target.value))},className:pt.a.input})})]})},jt=n(42),ht=n.n(jt),Ot=function(t){var e=t.children;return Object(T.jsx)("div",{className:ht.a.container,children:e})},mt=(n(85),n(29)),vt=n.n(mt),xt=function(){return Object(T.jsxs)(Ot,{children:[Object(T.jsx)("h1",{className:vt.a.title,children:"Phonebook"}),Object(T.jsx)(U,{}),Object(T.jsx)("h2",{className:vt.a.title,children:"Contacts"}),Object(T.jsx)(dt,{}),Object(T.jsx)(ft,{}),Object(T.jsx)(H.a,{autoClose:2e3})]})},yt=n(44),Ct=Object(b.a)({reducer:{phoneBook:V}});s.a.render(Object(T.jsx)(u.a.StrictMode,{children:Object(T.jsx)(yt.a,{children:Object(T.jsx)(f.a,{store:Ct,children:Object(T.jsx)(xt,{})})})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.a814dc93.chunk.js.map