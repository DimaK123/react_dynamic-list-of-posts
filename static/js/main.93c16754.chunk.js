(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(5),i=c(2),r=c(4),l=c.n(r),o=c(1),d=c.n(o),j=(c(13),c(14),c(15),c(3)),u=c.n(j),b=c(0),m=d.a.memo((function(e){var t=e.userPosts,c=e.activePost,s=e.setActivePost;return Object(b.jsxs)("div",{"data-cy":"PostsList",children:[Object(b.jsx)("p",{className:"title",children:"Posts:"}),Object(b.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{className:"has-background-link-light",children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:" "})]})}),Object(b.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e){var t=e.id,a=e.title;return Object(b.jsxs)("tr",{"data-cy":"Post",children:[Object(b.jsx)("td",{"data-cy":"PostId",children:t}),Object(b.jsx)("td",{"data-cy":"PostTitle",children:a}),Object(b.jsx)("td",{className:"has-text-right is-vcentered",children:Object(b.jsx)("button",{type:"button","data-cy":"PostButton",className:u()("button is-link",{"is-light":t!==c}),onClick:function(){var e;s(c===(e=t)?null:e)},children:c===t?"Close":"Open"})})]},t)}))})]})]})})),h=(c(17),function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(b.jsx)("div",{className:"Loader__content"})})}),O="https://mate.academy/students-api";function x(e){return new Promise((function(t){setTimeout(t,e)}))}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s={method:t};return c&&(s.body=JSON.stringify(c),s.headers={"Content-Type":"application/json; charset=UTF-8"}),x(300).then((function(){return fetch(O+e,s)})).then((function(e){return e.json()}))}var p=function(e){return f(e)},v=function(e,t){return f(e,"POST",t)},N=function(e){return f(e,"DELETE")},y=function(e){return p("/comments?postId=".concat(e))},g=function(e,t,c,s){return v("/comments",{postId:e,name:t,email:c,body:s})},S=d.a.memo((function(e){var t=e.postId,c=e.getNewComments,s=e.commentError,a=Object(o.useState)(""),r=Object(i.a)(a,2),d=r[0],j=r[1],m=Object(o.useState)(""),h=Object(i.a)(m,2),O=h[0],x=h[1],f=Object(o.useState)(""),p=Object(i.a)(f,2),v=p[0],N=p[1],y=Object(o.useState)(!1),S=Object(i.a)(y,2),C=S[0],k=S[1],w=Object(o.useState)(!1),P=Object(i.a)(w,2),E=P[0],T=P[1],F=Object(o.useState)(!1),I=Object(i.a)(F,2),A=I[0],L=I[1],B=Object(o.useState)(!1),D=Object(i.a)(B,2),M=D[0],U=D[1],_=function(e,t){t(e.currentTarget.value.trim())},J=function(){var e=Object(n.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d||k(!0),O||T(!0),v||L(!0),d&&O&&v&&(U(!0),g(t,d,O,v).then((function(){return c(t)})).catch((function(){return s(!0)})).finally((function(){N(""),U(!1)})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){return e.preventDefault()},children:[Object(b.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(b.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(b.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(b.jsx)("input",{type:"text",name:"name",value:d,onChange:function(e){C&&k(!1),_(e,j)},id:"comment-author-name",placeholder:"Name Surname",className:u()("input",{"is-danger":C})}),Object(b.jsx)("span",{className:"icon is-small is-left",children:Object(b.jsx)("i",{className:"fas fa-user"})}),C&&Object(b.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(b.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),C&&Object(b.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(b.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(b.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(b.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(b.jsx)("input",{type:"text",name:"email",value:O,onChange:function(e){E&&T(!1),_(e,x)},id:"comment-author-email",placeholder:"email@test.com",className:u()("input",{"is-danger":E})}),Object(b.jsx)("span",{className:"icon is-small is-left",children:Object(b.jsx)("i",{className:"fas fa-envelope"})}),E&&Object(b.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(b.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),E&&Object(b.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(b.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(b.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(b.jsx)("div",{className:"control",children:Object(b.jsx)("textarea",{id:"comment-body",name:"body",value:v,onChange:function(e){A&&L(!1),_(e,N)},placeholder:"Type comment here",className:u()("textarea",{"is-danger":A})})}),A&&Object(b.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(b.jsxs)("div",{className:"field is-grouped",children:[Object(b.jsx)("div",{className:"control",children:Object(b.jsx)("button",{type:"submit",className:u()("button is-link",{"is-loading":M}),onClick:J,children:"Add"})}),Object(b.jsx)("div",{className:"control",children:Object(b.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){E&&T(!1),A&&L(!1),C&&k(!1),d&&j(""),O&&x(""),v&&N("")},children:"Clear"})})]})]})})),C=d.a.memo((function(e){var t=e.activePostData,c=t.id,s=t.title,a=t.body,r=Object(o.useState)(null),d=Object(i.a)(r,2),j=d[0],u=d[1],m=Object(o.useState)(!1),O=Object(i.a)(m,2),x=O[0],f=O[1],p=Object(o.useState)(!1),v=Object(i.a)(p,2),g=v[0],C=v[1],k=Object(o.useState)(!1),w=Object(i.a)(k,2),P=w[0],E=w[1],T=Object(o.useState)(null),F=Object(i.a)(T,2),I=F[0],A=F[1],L=Object(o.useCallback)(function(){var e=Object(n.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y(t);case 3:c=e.sent,u(c),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),C(!0);case 10:return e.prev=10,f(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(t){return e.apply(this,arguments)}}(),[]),B=function(e){A(e),function(e){return N("/comments/".concat(e))}(e).finally((function(){return L(c)}))};Object(o.useEffect)((function(){f(!0),u(null),g&&C(!1),P&&E(!1),L(c)}),[t]);var D=null===j||void 0===j?void 0:j.filter((function(e){return e.id!==I}));return Object(b.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(b.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(b.jsxs)("div",{className:"block",children:[Object(b.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(c,": ").concat(s)}),Object(b.jsx)("p",{"data-cy":"PostBody",children:a})]}),Object(b.jsx)("div",{className:"block",children:x?Object(b.jsx)(h,{}):Object(b.jsx)(b.Fragment,{children:g?Object(b.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}):Object(b.jsxs)(b.Fragment,{children:[D&&D.length?Object(b.jsx)("p",{className:"title is-4",children:"Comments:"}):Object(b.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),null===D||void 0===D?void 0:D.map((function(e){var t=e.id,c=e.name,s=e.email,a=e.body;return Object(b.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(b.jsxs)("div",{className:"message-header",children:[Object(b.jsx)("a",{href:"mailto:".concat(s),"data-cy":"CommentAuthor",children:c}),Object(b.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return B(t)},children:"delete button"})]}),Object(b.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:a})]},t)})),!P&&Object(b.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return E(!0)},children:"Write a comment"}),P&&Object(b.jsx)(S,{postId:c,getNewComments:L,commentError:C})]})})})]})})})),k=d.a.memo((function(e){var t=e.usersList,c=e.setUser,s=e.setActivePost,a=Object(o.useState)(null),n=Object(i.a)(a,2),r=n[0],l=n[1],d=Object(o.useState)(!1),j=Object(i.a)(d,2),m=j[0],h=j[1],O=Object(o.useState)("Choose a user"),x=Object(i.a)(O,2),f=x[0],p=x[1],v=Object(o.useCallback)((function(e){l(e)}),[]),N=Object(o.useCallback)((function(){h((function(e){return!e}))}),[]);return Object(b.jsxs)("div",{"data-cy":"UserSelector",className:u()("dropdown",{"is-active":m}),children:[Object(b.jsx)("div",{className:"dropdown-trigger",children:Object(b.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:N,children:[Object(b.jsx)("span",{children:f}),Object(b.jsx)("span",{className:"icon is-small",children:Object(b.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(b.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",onBlur:function(){return h(!1)},children:Object(b.jsx)("div",{className:"dropdown-content",children:null===t||void 0===t?void 0:t.map((function(e){var t=e.id,a=e.name;return Object(b.jsx)("a",{href:"#user-".concat(t),className:u()("dropdown-item",{"is-active":t===r}),onClick:function(){s(null),p(a),v(t),c(t),h(!1)},children:a},t)}))})})]})})),w=function(){var e=Object(o.useState)(null),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(o.useState)(null),r=Object(i.a)(a,2),d=r[0],j=r[1],O=Object(o.useState)(null),x=Object(i.a)(O,2),f=x[0],v=x[1],N=Object(o.useState)(!1),y=Object(i.a)(N,2),g=y[0],S=y[1],w=Object(o.useState)(!1),P=Object(i.a)(w,2),E=P[0],T=P[1],F=Object(o.useState)(!1),I=Object(i.a)(F,2),A=I[0],L=I[1],B=Object(o.useState)(null),D=Object(i.a)(B,2),M=D[0],U=D[1],_=Object(o.useCallback)((function(){p("/users").then(s)}),[]);Object(o.useEffect)((function(){_()}),[]),Object(o.useEffect)((function(){f&&v(null),A&&L(!1);var e=function(){var e=Object(n.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p("/posts?userId=".concat(t));case 3:(c=e.sent).length?v(c):L(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),T(!0);case 10:return e.prev=10,S(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(t){return e.apply(this,arguments)}}();d&&(E&&T(!1),S(!0),e(d))}),[d]);var J=Object(o.useMemo)((function(){return f?f.find((function(e){return e.id===M})):null}),[M,f]);return Object(b.jsx)("main",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"tile is-ancestor",children:[Object(b.jsx)("div",{className:"tile is-parent",children:Object(b.jsxs)("div",{className:"tile is-child box is-success",children:[Object(b.jsx)("div",{className:"block",children:Object(b.jsx)(k,{usersList:c,setUser:j,setActivePost:U})}),Object(b.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!d&&Object(b.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),g&&Object(b.jsx)(h,{}),E&&Object(b.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),A&&Object(b.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),!(null===f||void 0===f||!f.length)&&Object(b.jsx)(m,{userPosts:f,activePost:M,setActivePost:U})]})]})}),Object(b.jsx)("div",{"data-cy":"Sidebar",className:u()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":J}),children:J&&Object(b.jsx)("div",{className:"tile is-child box is-success ",children:Object(b.jsx)(C,{activePostData:J})})})]})})})};a.a.render(Object(b.jsx)(w,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.93c16754.chunk.js.map