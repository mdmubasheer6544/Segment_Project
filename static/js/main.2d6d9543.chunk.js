(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{112:function(e,n,t){},113:function(e,n,t){},114:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),s=t(61),i=t.n(s),l=(t(70),t(71),t(62)),r=t(63),j=t(65),o=t(64),d=t(24),b=t.n(d),u=t(16),h=t(3),m=(t(42),t(23)),O=t(2),x=function(e){var n=Object(c.useState)(""),t=Object(h.a)(n,2),a=t[0],s=t[1],i=Object(c.useState)("\ud83d\ude0f"),l=Object(h.a)(i,2),r=l[0],j=l[1],o=Object(c.useState)("#ff0000"),d=Object(h.a)(o,2),b=d[0],u=d[1];return Object(O.jsxs)("div",{className:"mainTabelBox",children:[Object(O.jsxs)("div",{className:"formHeader",children:[Object(O.jsx)("h4",{children:"Add a Table"}),Object(O.jsx)("button",{className:"closebtn",onClick:e.hidshow,children:"x"})]}),Object(O.jsxs)("div",{className:"formContainer",children:[Object(O.jsx)("label",{htmlFor:"name",children:"Name"}),Object(O.jsx)("input",{type:"text",className:"nameInputs",placeholder:"Enter Name here..",value:a,required:"required",onChange:function(e){s(e.target.value)}}),Object(O.jsx)("label",{htmlFor:"icon",children:"Icon"}),Object(O.jsx)(m.a,{initialValue:r,onChange:j,cleanOnEnter:!0,placeholder:"Choose Icon.."}),Object(O.jsx)("label",{htmlFor:"color",children:"Color"}),Object(O.jsx)("input",{type:"color",value:b,onChange:function(e){u(e.target.value)},className:"colorInput",id:""})]}),Object(O.jsxs)("div",{className:"btnsection",children:[Object(O.jsx)("button",{disabled:!a,className:"addTablebtn",onClick:function(){e.addItemFunc({name:a,icon:r,color:b}),e.hidshow()},children:"Add"}),Object(O.jsx)("button",{className:"cancelTablebtn",onClick:e.hidshow,children:"Cancel"})]})]})},p=(t(112),t(113),function(e){return Object(O.jsxs)("div",{className:"sideBar",children:[Object(O.jsxs)("div",{className:"segmentMain",children:[Object(O.jsx)("div",{className:"segmentHeader",children:Object(O.jsx)("h2",{children:"Prospectors"})}),Object(O.jsx)("input",{type:"text",className:"addsegemntInput",placeholder:"Add segments here..",name:"",id:""}),Object(O.jsx)("span",{className:"segmentTilte",children:"Segments"}),Object(O.jsx)("ul",{className:"segmentList",children:e.addSegmentItems.map((function(e,n){return Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{children:e.icon}),e.name]},n)}))})]}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{className:"addSegBtn",onClick:e.onchgFunction,children:" +  Add a segments"})})]})}),f=function(e){var n=Object(c.useState)(""),t=Object(h.a)(n,2),a=t[0],s=t[1],i=Object(c.useState)("\ud83d\ude0f"),l=Object(h.a)(i,2),r=l[0],j=l[1],o=Object(c.useState)(""),d=Object(h.a)(o,2),b=d[0],u=d[1];return Object(O.jsxs)("div",{className:"mainTabelBox",children:[Object(O.jsxs)("div",{className:"formHeader",children:[Object(O.jsx)("h4",{children:"Add a Segment"}),Object(O.jsx)("button",{className:"closebtn",onClick:e.segmentTable,children:"x"})]}),Object(O.jsxs)("div",{className:"formContainer",children:[Object(O.jsx)("label",{htmlFor:"name",children:"Name"}),Object(O.jsx)("input",{type:"text",className:"nameInputs",placeholder:"Enter Name here..",value:a,required:"required",onChange:function(e){s(e.target.value)}}),Object(O.jsx)("label",{htmlFor:"name",children:"Icon"}),Object(O.jsx)(m.a,{initialValue:r,onChange:j,cleanOnEnter:!0,placeholder:"Choose Icon.."}),Object(O.jsx)("label",{htmlFor:"name",children:"Discription"}),Object(O.jsx)("textarea",{value:b,onChange:function(e){u(e.target.value)},name:"",id:""})]}),Object(O.jsxs)("div",{className:"btnsection",children:[Object(O.jsx)("button",{disabled:!a,className:"addTablebtn",onClick:function(){e.addSegmentItemFunc({name:a,icon:r,description:b}),e.hidshow()},children:"Save"}),Object(O.jsx)("button",{className:"cancelTablebtn",onClick:e.segmentTable,children:"Cancel"})]})]})},g=[{name:"Mubasheer",icon:"\ud83d\ude0f",color:"red"}],v=[{name:"Segment1",icon:"\ud83d\ude0f",description:"",dummy:[{name:"Mubasheer",icon:"\ud83d\ude0f",color:"red"}]}],C=function(){var e=Object(c.useState)(!1),n=Object(h.a)(e,2),t=n[0],a=n[1],s=Object(c.useState)(!1),i=Object(h.a)(s,2),l=i[0],r=i[1],j=Object(c.useState)(g),o=Object(h.a)(j,2),d=o[0],b=o[1],m=Object(c.useState)(v),C=Object(h.a)(m,2),N=C[0],S=C[1],F=function(){a(!t)};return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"mainContainer",children:[Object(O.jsx)(p,{addSegmentItems:N,onchgFunction:function(){r(!l)}}),Object(O.jsxs)("div",{className:"rightBarSection",children:[Object(O.jsx)("div",{}),Object(O.jsxs)("ul",{className:"addList",children:[d.map((function(e,n){return Object(O.jsxs)("li",{children:[Object(O.jsx)("p",{style:{borderColor:e.color},children:e.icon}),Object(O.jsx)("small",{children:e.name})]},n)})),Object(O.jsx)("li",{children:Object(O.jsx)("input",{className:"addbtn",type:"button",value:"+",onClick:F})})]})]}),t&&Object(O.jsx)(x,{addItemFunc:function(e){b((function(n){return[].concat(Object(u.a)(n),[e])}))},hidshow:F}),l&&Object(O.jsx)(f,{isSegment:"true",addSegmentItemFunc:function(e){S((function(n){return[].concat(Object(u.a)(n),[e])}))},hidshow:r,segmentTable:function(){r(!l)}})]})})},N=function(e){Object(j.a)(t,e);var n=Object(o.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:b.a.naveContainer,children:[Object(O.jsx)("ul",{children:Object(O.jsx)("li",{children:"MainEvent"})}),Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{type:"text",className:b.a.searchInput}),Object(O.jsx)("input",{type:"button",className:b.a.searchBtn,value:"Search"})]})]}),Object(O.jsx)(C,{})]})}}]),t}(a.a.Component),S=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(N,{})})};var F=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(S,{})})})},I=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,115)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,s=n.getLCP,i=n.getTTFB;t(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(O.jsx)(F,{}),document.getElementById("root")),I()},24:function(e,n,t){e.exports={naveContainer:"news_naveContainer__3oIco",links:"news_links__2C04T",searchBtn:"news_searchBtn__3GUnC",searchInput:"news_searchInput__3bXLw",newsContainer:"news_newsContainer__6npBj",newsCard:"news_newsCard__3psXe"}},42:function(e,n,t){},70:function(e,n,t){},71:function(e,n,t){}},[[114,1,2]]]);
//# sourceMappingURL=main.2d6d9543.chunk.js.map