(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n,a=c(9),s=c.n(a),r=c(8),i=c(12),l=c(2),o=c(7),d=c(17),j=c(18),u=function(e){return{type:"currentTodo/SET",payload:e}},b=function(){return{type:"currentTodo/REMOVE"}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},O=c(6);!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(n||(n={}));var x=function(e){return{type:"query/SET",payload:e}},m=function(e){return{type:"status/SET",payload:e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{query:"",status:n.ALL},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"query/SET":return Object(O.a)(Object(O.a)({},e),{},{query:t.payload});case"status/SET":return Object(O.a)(Object(O.a)({},e),{},{status:t.payload});default:return e}},p=function(e){return{type:"allTodos/SET",payload:e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"allTodos/SET"===t.type?t.payload:e},y=Object(o.combineReducers)({currentTodo:h,filter:f,todos:v}),N=Object(o.createStore)(y,Object(d.composeWithDevTools)(Object(o.applyMiddleware)(j.a))),g=c(1),T=function(){return Object(g.jsx)(l.b,{})},E=c(19),S=c(5),k=c(14),w=c.n(k),C=c(0),L=(c(29),function(){return Object(g.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(g.jsx)("div",{className:"Loader__content"})})}),q=r.b,A=r.c,_=function(){var e=q(),t=A((function(e){return e.filter})),c=A((function(e){return e.filter.query})),n=function(t){if(!t)return e(x(""));var c=t.target.value;return e(x(c))};return Object(g.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(g.jsx)("p",{className:"control",children:Object(g.jsx)("span",{className:"select",children:Object(g.jsxs)("select",{"data-cy":"statusSelect",onChange:function(t){return function(t){var c=t.target.value;e(m(c))}(t)},children:[Object(g.jsx)("option",{value:"all",children:"All"}),Object(g.jsx)("option",{value:"active",children:"Active"}),Object(g.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(g.jsxs)("p",{className:" control is-expanded has-icons-left has-icons-right",children:[Object(g.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t.query,onChange:function(e){return n(e)}}),Object(g.jsx)("span",{className:"icon is-left",children:Object(g.jsx)("i",{className:"fas fa-magnifying-glass"})}),c.length>0&&Object(g.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(g.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete","aria-label":"delete",onClick:function(){return n()}})})]})]})},M=c(15),D=c.n(M),I=function(e){var t=e.todo,c=t.id,n=t.completed,a=t.title,s=q(),r=A((function(e){return e.currentTodo}));return Object(g.jsxs)("tr",{className:D()({"has-background-info-light":(null===r||void 0===r?void 0:r.id)===c}),"data-cy":"todo",children:[Object(g.jsx)("td",{className:"is-vcentered",children:c}),Object(g.jsx)("td",{className:"is-vcentered",children:n&&Object(g.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(g.jsx)("i",{className:"fas fa-check"})})}),Object(g.jsx)("td",{className:"is-vcentered is-expanded",children:Object(g.jsx)("p",{className:D()(n?"has-text-success":"has-text-danger"),children:a})}),Object(g.jsx)("td",{className:"has-text-right is-vcentered",children:Object(g.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){s(u(t))},children:Object(g.jsx)("span",{className:"icon",children:(null===r||void 0===r?void 0:r.id)===c?Object(g.jsx)("i",{className:"far fa-eye-slash"}):Object(g.jsx)("i",{className:"far fa-eye"})})})})]})},P=function(){var e=A((function(e){return e.filter.query})),t=A((function(e){return e.filter.status})),c=A((function(e){return e.todos})),a=Object(C.useMemo)((function(){return c.filter((function(c){var a=c.title.toLowerCase(),s=e.toLowerCase().trim(),r=a.includes(s);switch(t){case n.ACTIVE:return!c.completed&&r;case n.COMPLETED:return c.completed&&r;default:case n.ALL:return c&&r}}))}),[c,e,t]);return Object(g.jsxs)(g.Fragment,{children:[!a.length&&Object(g.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}),a.length>0&&Object(g.jsxs)("table",{className:" table is-narrow is-fullwidth",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"#"}),Object(g.jsx)("th",{children:Object(g.jsx)("span",{className:"icon",children:Object(g.jsx)("i",{className:"fas fa-check"})})}),Object(g.jsx)("th",{children:"Title"}),Object(g.jsx)("th",{children:" "})]})}),Object(g.jsx)("tbody",{children:a.map((function(e){return Object(g.jsx)(I,{todo:e},e.id)}))})]})]})};function V(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var B=function(){var e=q(),t=A((function(e){return e.currentTodo})),c=Object(C.useState)(null),n=Object(S.a)(c,2),a=n[0],s=n[1];return Object(C.useEffect)((function(){var e;t&&(e=t.userId,V("/users/".concat(e))).then((function(e){return s(e)}))}),[]),Object(g.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(g.jsx)("div",{className:"modal-background"}),a?Object(g.jsxs)("div",{className:"modal-card",children:[Object(g.jsxs)("header",{className:"modal-card-head",children:[Object(g.jsx)("div",{className:" modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(g.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close","aria-label":"delete",onClick:function(){e(b())}})]}),Object(g.jsxs)("div",{className:"modal-card-body",children:[Object(g.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(g.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(g.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(g.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(g.jsx)("a",{href:"mailto:".concat(null===a||void 0===a?void 0:a.email),children:null===a||void 0===a?void 0:a.name})]})]})]}):Object(g.jsx)(L,{})]})},R=function(){var e=q(),t=A((function(e){return e.currentTodo})),c=Object(C.useState)(!1),n=Object(S.a)(c,2),a=n[0],s=n[1],r=Object(C.useState)(!1),i=Object(S.a)(r,2),l=i[0],o=i[1],d=function(){var t=Object(E.a)(w.a.mark((function t(){var c;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(!0),o(!1),t.prev=2,t.next=5,V("/todos");case 5:c=t.sent,e(p(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),o(!0);case 12:return t.prev=12,s(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[2,9,12,15]])})));return function(){return t.apply(this,arguments)}}();return Object(C.useEffect)((function(){d()}),[]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:"section",children:Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"box",children:[Object(g.jsx)("h1",{className:"title",children:"Todos:"}),Object(g.jsx)("div",{className:"block",children:Object(g.jsx)(_,{})}),Object(g.jsxs)("div",{className:"block",children:[a&&Object(g.jsx)(L,{}),!a&&!l&&Object(g.jsx)(P,{})]})]})})}),t&&Object(g.jsx)(B,{}),l&&Object(g.jsx)("div",{className:" container box notification is-danger is-light",children:"Oh, no! Error during loading data from server!"})]})},F=(c(30),function(){return Object(g.jsx)("div",{className:"section",children:Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"box",children:[Object(g.jsx)("div",{className:" container box notification is-danger is-light",children:"Oh, no! Page is not found..."}),Object(g.jsx)("span",{className:"not-found-page__image"})]})})})}),J=(c(31),c(32),function(){return Object(g.jsx)(r.a,{store:N,children:Object(g.jsx)(i.a,{children:Object(g.jsx)(l.e,{children:Object(g.jsxs)(l.c,{path:"/",element:Object(g.jsx)(T,{}),children:[Object(g.jsx)(l.c,{index:!0,element:Object(g.jsx)(R,{})}),Object(g.jsx)(l.c,{path:"home",element:Object(g.jsx)(l.a,{to:"/",replace:!0})}),Object(g.jsx)(l.c,{path:"*",element:Object(g.jsx)(F,{})})]})})})})});s.a.render(Object(g.jsx)(J,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.7c07a5b3.chunk.js.map