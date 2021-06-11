(this["webpackJsonpvoice-automotive"]=this["webpackJsonpvoice-automotive"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),c=n.n(o),i=n(13),l=n.n(i),d=(n(23),n(24),n(4)),a=c.a.createContext({collapsed:!0,collapse:function(){}}),u=function(e){var t=e.children,n=Object(o.useState)(!0),c=Object(d.a)(n,2),i=c[0],l=c[1],u={collapsed:i,collapse:function(e){return l(!e)}};return Object(r.jsx)(a.Provider,{value:u,children:t})},s=n(3),b=n(17),h=n(2),f=[{id:Object(h.uniqueId)(),make:"Tesla",model:"Model S",color:"black"},{id:Object(h.uniqueId)(),make:"Tesla",model:"Model 3",color:"red"},{id:Object(h.uniqueId)(),make:"Tesla",model:"Model X",color:"lightblue"},{id:Object(h.uniqueId)(),make:"Tesla",model:"Model Y",color:"white"},{id:Object(h.uniqueId)(),make:"Tesla",model:"Roadster",color:"orange"},{id:Object(h.uniqueId)(),make:"Tesla",model:"Cybertruck",color:"gray"}],j=c.a.createContext({current:[],add:function(){},remove:function(){},clear:function(){},reset:function(){}}),p=function(){return Object(o.useContext)(j)},m=function(e){var t=e.children,n=Object(o.useState)([]),c=Object(d.a)(n,2),i=c[0],l=c[1],a=Object(o.useRef)(""),u=function(e){l(e),a.current=JSON.stringify(e)};Object(o.useEffect)((function(){setTimeout((function(){u(f)}),1200)}),[]);var p={current:i,add:function(e){u([Object(s.a)({id:Object(h.uniqueId)()},e)].concat(Object(b.a)(i)))},remove:function(e){return u(i.filter((function(t){return t.id!==e})))},clear:function(){return u([])},reset:function(){JSON.stringify(f)!==a.current&&u(f)}};return Object(r.jsx)(j.Provider,{value:p,children:t})},x=[{id:Object(h.uniqueId)(),make:"Alta",model:"Redshift",colors:["white","lightblue","orange"]},{id:Object(h.uniqueId)(),make:"Tesla",model:"Model S",colors:["white","gray","black","red","blue"]},{id:Object(h.uniqueId)(),make:"Tesla",model:"Model 3",colors:["white","gray","black","red","blue"]},{id:Object(h.uniqueId)(),make:"Tesla",model:"Model X",colors:["white","gray","black","red","lightblue"]},{id:Object(h.uniqueId)(),make:"Tesla",model:"Model Y",colors:["white","gray","black","red","blue"]},{id:Object(h.uniqueId)(),make:"Tesla",model:"Roadster",colors:["white","gray","black","red","blue","orange"]},{id:Object(h.uniqueId)(),make:"Tesla",model:"Cybertruck",colors:["gray"]}],g=function(e,t){var n=Object(o.useState)([]),r=Object(d.a)(n,2),c=r[0],i=r[1];Object(o.useEffect)((function(){var t=[];e.forEach((function(e){return t.push({element:e,selected:!1})})),i(t)}),[e]);return{selection:c,selectElement:function(e){var n;n=!1===t?function(e){return c.map((function(t){return t.element.id===e&&!1===t.selected?Object(s.a)(Object(s.a)({},t),{},{selected:!0}):Object(s.a)(Object(s.a)({},t),{},{selected:!1})}))}(e):function(e){return c.map((function(t){return t.element.id===e&&!1===t.selected?Object(s.a)(Object(s.a)({},t),{},{selected:!0}):t.element.id===e&&!0===t.selected?Object(s.a)(Object(s.a)({},t),{},{selected:!1}):t}))}(e),i(n)}}},O=n(5),v=n(6);function C(){var e=Object(O.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n    top: 0;\n    bottom: 0;\n    min-width: ","px;\n    background: black;\n    overflow: auto;\n    padding-bottom: 20px;\n"]);return C=function(){return e},e}var k=v.a.div(C(),(function(e){return e.isCollapsed?e.closedWidth:e.openWidth})),w=function(e){var t=e.isCollapsed,n=e.closedWidth,o=e.openWidth,c=e.children;return Object(r.jsx)(k,{isCollapsed:t,closedWidth:n,openWidth:o,children:c})};function y(){var e=Object(O.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    width: 100%;\n    height: ","%;\n    font-size: ",";\n    color: ",";\n    background: ",";\n    border-top-left-radius: ","px;\n    border-top-right-radius: ","px;\n    border-bottom-left-radius: ","px;\n    border-bottom-right-radius: ","px;\n    ","\n"]);return y=function(){return e},e}var M=v.a.div(y(),(function(e){return e.percentHeight}),(function(e){return e.fontSize}),(function(e){return"black"===e.bgColor||"blue"===e.bgColor?"white":"black"}),(function(e){return e.bgColor}),(function(e){return e.borderRad}),(function(e){return e.borderRad}),(function(e){return e.horiCenter?e.borderRad:0}),(function(e){return e.horiCenter?e.borderRad:0}),(function(e){return e.horiCenter?"&:hover {\n            color: white;\n            background: ".concat(e.hoverColor,";\n        };"):""})),S=function(e){return Object(r.jsx)(M,Object(s.a)(Object(s.a)({className:e.horiCenter?"no-select-pointer":""},e),{},{children:e.text}))};function R(){var e=Object(O.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    height: ","%;\n    border-top: 1px solid gray;\n    border-bottom-left-radius: ","px;\n    border-bottom-right-radius: ","px;\n    color: gray;\n    background: inherit;\n"]);return R=function(){return e},e}var T=v.a.div(R(),(function(e){return e.percentHeight}),(function(e){return e.borderRad}),(function(e){return e.borderRad})),I=function(e){return Object(r.jsxs)(T,{borderRad:e.borderRad,percentHeight:e.percentHeight,children:[Object(r.jsx)("div",{style:{marginLeft:"20px"},children:e.title}),e.hovered&&Object(r.jsx)("div",{className:"remove-button",onClick:e.onClick,style:{marginRight:"20px",fontSize:"14px",cursor:"pointer"},children:"Remove from Collection"})]})};function q(){var e=Object(O.a)(["\n    display: flex;\n    flex-direction: column;\n    width: ","px;\n    min-height: ","px;\n    height: ","px;\n    box-shadow: ",";\n    border-radius: 10px;\n    margin-top: 20px;\n    margin-right: ",";\n    ","\n"]);return q=function(){return e},e}var E=v.a.div(q(),(function(e){return e.width}),(function(e){return e.height}),(function(e){return e.height}),(function(e){return e.borderBoxShadow}),(function(e){return e.horiCenter?"0":"20px"}),(function(e){return e.horiCenter?"":"&:hover { box-shadow: 0 0 0 7px lightblue; };"})),N=function(e){var t=function(){var e=Object(o.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],c=Object(o.useRef)(null),i=function(){return r(!0)},l=function(){return r(!1)};return Object(o.useEffect)((function(){var e=c.current;if(e)return e.addEventListener("mouseenter",i),e.addEventListener("mouseleave",l),function(){e.removeEventListener("mouseenter",i),e.removeEventListener("mouseleave",l)}})),{hovered:n,targetRef:c}}();return Object(r.jsxs)(E,{ref:t.targetRef,width:e.width,height:e.height,borderBoxShadow:e.borderBoxShadow,horiCenter:e.horiCenter,children:[Object(r.jsx)(S,{percentHeight:e.horiCenter?100:65,fontSize:e.fontSize,bgColor:e.bgColor,borderRad:10,horiCenter:e.horiCenter,hoverColor:e.hoverColor,onClick:e.horiCenter?e.onClick:function(){},text:e.dealerMake+" "+e.dealerModel}),!e.horiCenter&&Object(r.jsx)(I,{borderRad:10,percentHeight:35,title:e.dealerMake+" "+e.dealerModel,hovered:t.hovered,onClick:e.onClick})]})},z=function(){var e=p();return Object(r.jsx)("div",{id:"garage-container",children:e.current.map((function(t){return Object(r.jsx)(N,{width:400,height:350,fontSize:"calc(10px + 2vmin)",bgColor:t.color,borderBoxShadow:"0 0 0 1px gray",hoverColor:"darkblue",onClick:function(){return e.remove(t.id)},dealerMake:t.make,dealerModel:t.model},t.id)}))})},W=function(e){var t=e.collapsed?100:150,n=e.collapsed?"calc(5px + 2vmin)":"calc(10px + 2vmin)",o=e.collapsed?6:7;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(N,{width:t,height:t,fontSize:n,bgColor:"white",borderBoxShadow:e.selected?"0 0 0 ".concat(o,"px lightblue"):"none",horiCenter:!0,hoverColor:"green",onClick:e.select,dealerMake:e.dealerMake,dealerModel:e.dealerModel}),e.selected&&Object(r.jsx)("div",{style:{width:"".concat(t,"px"),marginTop:"".concat(o,"px")},children:e.vehicleColors.map((function(t){return Object(r.jsx)("div",{className:"no-select-pointer color-select",style:{width:"100%",height:"20px",backgroundColor:t,borderRadius:"7px"},onClick:function(){return e.addVehicle({make:e.dealerMake,model:e.dealerModel,color:t})}},Object(h.uniqueId)())}))})]})};function B(){var e=Object(o.useContext)(a),t=p(),n=function(){var e=Object(o.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1];return Object(o.useEffect)((function(){setTimeout((function(){r(x)}),1200)}),[]),n}(),c=g(n,!1),i=e.collapsed?"Open":"Close";return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsxs)(w,{isCollapsed:e.collapsed,closedWidth:150,openWidth:300,children:[n.length>0&&Object(r.jsx)("button",{className:"btn",style:{fontSize:"".concat(e.collapsed?"10px":"14px"),marginTop:"10px",cursor:"pointer"},onClick:function(){return e.collapse(e.collapsed)},children:i}),!e.collapsed&&Object(r.jsx)("h2",{style:{color:"white"},children:"Dealership"}),c.selection.map((function(n){return Object(r.jsx)(W,{collapsed:e.collapsed,dealerMake:n.element.make,dealerModel:n.element.model,vehicleColors:n.element.colors,selected:n.selected,select:function(){return c.selectElement(n.element.id)},addVehicle:t.add},n.element.id)}))]}),Object(r.jsxs)("div",{style:{overflow:"auto"},children:[Object(r.jsxs)("div",{id:"garage-top-bar",children:[Object(r.jsx)("div",{style:{marginRight:"80px"},children:"Collection"}),t.current.length>0&&Object(r.jsx)("div",{className:"top-nav-btn no-select-pointer",onClick:t.clear,children:"Clear"}),n.length>0&&Object(r.jsx)("div",{className:"top-nav-btn no-select-pointer",onClick:t.reset,children:"Reset"})]}),Object(r.jsx)(z,{})]})]})})}var L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),o(e),c(e),i(e)}))};l.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(u,{children:Object(r.jsx)(m,{children:Object(r.jsx)(B,{})})})}),document.getElementById("root")),L()}},[[29,1,2]]]);
//# sourceMappingURL=main.a3d39cab.chunk.js.map