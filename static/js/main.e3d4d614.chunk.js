(this["webpackJsonpblog-frontend-admin"]=this["webpackJsonpblog-frontend-admin"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),o=n(16),r=n.n(o),i=(n(22),n(23),n(2)),a=n(5),l=n(0),j=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){fetch("https://hidden-eyrie-46633.herokuapp.com/admin/blogs",{mode:"cors",headers:{Authorization:JSON.parse(localStorage.getItem("token"))}}).then((function(e){if(!e.ok)throw localStorage.clear(),new Error("ERROR: HTTP status "+e.status);return e.json()})).then((function(e){s("LOGOUT")})).catch((function(e){console.log(e),s("LOGIN")}))})),Object(l.jsxs)("nav",{className:"navbar ",children:[Object(l.jsx)("h1",{children:"DEMO ADMIN"}),Object(l.jsxs)("div",{children:[Object(l.jsx)(a.b,{to:"/blogs",className:"navlink",children:"BLOGS"}),Object(l.jsx)("a",{href:"https://arya-poudel.github.io/BlogViewer/#/",className:"navlink",children:"VIEWER"}),"LOGOUT"===n&&Object(l.jsx)("button",{className:"linkBtn",onClick:function(){localStorage.clear(),window.location.href="https://arya-poudel.github.io/BlogAdmin/#/"},children:"Logout"})]})]})},b=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(""),r=Object(i.a)(o,2),a=r[0],b=r[1];JSON.parse(localStorage.getItem("token"))&&(window.location.href="https://arya-poudel.github.io/BlogAdmin/#/blogs");return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{}),Object(l.jsxs)("form",{id:"login_form",onSubmit:function(e){e.preventDefault();var t=new FormData(document.getElementById("login_form"));fetch("https://hidden-eyrie-46633.herokuapp.com/beAdmin/",{method:"POST",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(Object.fromEntries(t))}).then((function(e){if(!e.ok)throw new Error("ERROR: HTTP status "+e.status);return e.json()})).then((function(e){b(e.message),e.token&&localStorage.setItem("token",JSON.stringify(e.token))})).catch((function(e){return s(e.message)}))},className:"form_div",autoComplete:"off",children:[Object(l.jsx)("label",{htmlFor:"Adminname",children:"Adminname:"}),Object(l.jsx)("input",{type:"text",id:"Adminname",name:"Adminname",required:!0}),Object(l.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(l.jsx)("input",{type:"password",id:"password",name:"password",required:!0}),Object(l.jsx)("button",{type:"submit",className:"linkBtn",children:"LOGIN"})]}),Object(l.jsx)("p",{style:{textAlign:"center",fontWeight:"bold"},children:a}),n&&Object(l.jsx)("p",{style:{textAlign:"center",fontWeight:"bold"},children:n})]})},d=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(""),r=Object(i.a)(o,2),b=r[0],d=r[1];return Object(c.useEffect)((function(){fetch("https://hidden-eyrie-46633.herokuapp.com/admin/blogs",{mode:"cors",headers:{Authorization:JSON.parse(localStorage.getItem("token"))}}).then((function(e){if(!e.ok)throw new Error("ERROR: HTTP status "+e.status);return e.json()})).then((function(e){return s(e)})).catch((function(e){return d(e.message)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{}),Object(l.jsx)("h1",{style:{textAlign:"center"},children:" Posts "}),!b&&Object(l.jsxs)("div",{children:[n.map((function(e){return Object(l.jsx)(a.b,{to:"/blogs/".concat(e._id),className:"link",children:Object(l.jsxs)("div",{className:"blog",children:[Object(l.jsx)("h2",{children:e.title}),Object(l.jsxs)("p",{className:"blogDesc",children:[e.truncated_text," ......"]})]})},e._id)})),Object(l.jsx)(a.b,{to:"/blogs/new",className:"action-link",children:Object(l.jsx)("button",{className:"linkBtn",children:"Create a New Blog"})})]}),b&&Object(l.jsx)("p",{style:{textAlign:"center",fontWeight:"bold"},children:b})]})},h=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(""),r=Object(i.a)(o,2),a=r[0],b=r[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{}),Object(l.jsxs)("div",{className:"createblogcomments",children:[Object(l.jsx)("h1",{style:{textAlign:"center"},children:"Create New Blog"}),Object(l.jsxs)("form",{id:"create_blog_form",onSubmit:function(e){e.preventDefault();var t=new FormData(document.getElementById("create_blog_form"));fetch("https://hidden-eyrie-46633.herokuapp.com/admin/blogs/new",{method:"POST",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:JSON.parse(localStorage.getItem("token"))},body:JSON.stringify(Object.fromEntries(t))}).then((function(e){if(!e.ok)throw new Error("ERROR: HTTP status "+e.status);return e.json()})).then((function(e){return b(e.message)})).catch((function(e){return s(e.message)}))},className:"form_div",autoComplete:"off",children:[Object(l.jsx)("label",{htmlFor:"title",children:"Title:"}),Object(l.jsx)("input",{type:"text",id:"title",name:"title",required:!0}),Object(l.jsx)("label",{htmlFor:"text",children:"Text:"}),Object(l.jsx)("textarea",{id:"text",name:"text",minLength:"50",required:!0}),Object(l.jsxs)("div",{children:["IsPublished:",Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"radio",id:"true",name:"ispublished",value:"true"}),Object(l.jsx)("label",{htmlFor:"true",children:"True"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"radio",id:"false",name:"ispublished",value:"false",defaultChecked:"true"}),Object(l.jsx)("label",{htmlFor:"false",children:"False"}),Object(l.jsx)("br",{})]}),Object(l.jsx)("button",{type:"submit",className:"linkBtn",children:"Submit"})]}),Object(l.jsx)("p",{style:{textAlign:"center",fontWeight:"bold"},children:a})]}),n&&Object(l.jsx)("p",{style:{textAlign:"center",fontWeight:"bold"},children:n})]})},u=function(e){var t=e.blogId,n=Object(c.useState)({}),s=Object(i.a)(n,2),o=s[0],r=s[1],b=Object(c.useState)(""),d=Object(i.a)(b,2),h=d[0],u=d[1],m=Object(c.useState)(""),O=Object(i.a)(m,2),x=O[0],g=O[1];return Object(c.useEffect)((function(){fetch("https://hidden-eyrie-46633.herokuapp.com/admin/blogs/".concat(t),{mode:"cors",headers:{Authorization:JSON.parse(localStorage.getItem("token"))}}).then((function(e){if(!e.ok)throw new Error("ERROR: HTTP status "+e.status);return e.json()})).then((function(e){r(e),u(e.postedBy.Adminname)})).catch((function(e){return g(e.message)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{}),!x&&Object(l.jsxs)("div",{className:"blogdetail",children:[Object(l.jsx)("h1",{children:o.title}),Object(l.jsx)("p",{children:o.text}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Date:"})," ",o.time]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Postedby:"})," ",h]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"IsPublished:"})," ",String(o.isPublished)]}),Object(l.jsxs)("div",{className:"btn-links",children:[Object(l.jsx)(a.b,{to:"/blogs/".concat(o._id,"/comments/"),children:Object(l.jsx)("button",{className:"linkBtn",children:"Show Comments"})}),Object(l.jsx)(a.b,{to:"/blogs/".concat(o._id,"/edit/"),children:Object(l.jsx)("button",{className:"linkBtn",children:"Edit Blog"})}),Object(l.jsx)(a.b,{to:"/blogs/".concat(o._id,"/delete/"),children:Object(l.jsx)("button",{className:"linkBtn",children:"Delete Blog"})})]})]}),x&&Object(l.jsx)("p",{style:{textAlign:"center",fontWeight:"bold"},children:x})]})},m=function(e){var t=e.blogId,n=Object(c.useState)([]),s=Object(i.a)(n,2),o=s[0],r=s[1],b=Object(c.useState)(""),d=Object(i.a)(b,2),h=d[0],u=d[1],m=Object(c.useState)(""),O=Object(i.a)(m,2),x=O[0],g=O[1],f=Object(c.useState)(""),p=Object(i.a)(f,2),y=p[0],k=p[1];return Object(c.useEffect)((function(){fetch("https://hidden-eyrie-46633.herokuapp.com/blogs/".concat(t,"/comments"),{mode:"cors",headers:{Authorization:JSON.parse(localStorage.getItem("token"))}}).then((function(e){if(!e.ok)throw new Error("ERROR: HTTP status "+e.status);return e.json()})).then((function(e){0===e.length?k("No comments"):(r(e),u(e[0].writtenIn.title))})).catch((function(e){return g(e.message)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{}),!x&&!y&&Object(l.jsxs)("div",{className:"blogcomments ",children:[Object(l.jsxs)("h1",{style:{textAlign:"center"},children:["Comments-",h]}),o.map((function(e){return Object(l.jsxs)("div",{className:"blogcomment",children:[Object(l.jsx)("p",{children:e.comment}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"By:"})," ",e.name]}),Object(l.jsx)(a.b,{to:"/blogs/comments/".concat(e._id,"/delete"),className:"linkBtn-link",children:Object(l.jsx)("button",{className:"linkBtn",children:"Delete this comment."})})]},e._id)}))]}),!x&&y&&Object(l.jsx)("h2",{style:{textAlign:"center"},children:y}),x&&Object(l.jsx)("p",{style:{textAlign:"center",fontWeight:"bold"},children:x})]})},O=function(e){var t=e.commentId,n=Object(c.useState)(""),s=Object(i.a)(n,2),o=s[0],r=s[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{}),Object(l.jsx)("h1",{style:{textAlign:"center"},children:"Are you sure you want to delete this comment?"}),Object(l.jsx)("div",{className:"action-link",children:Object(l.jsx)("button",{onClick:function(){fetch("https://hidden-eyrie-46633.herokuapp.com/admin/blogs/comments/".concat(t,"/delete"),{mode:"cors",method:"DELETE",headers:{Authorization:JSON.parse(localStorage.getItem("token"))}}).then((function(e){if(!e.ok)throw new Error("ERROR: HTTP status "+e.status);return e.json()})).then((function(e){window.location.href="https://arya-poudel.github.io/BlogAdmin/#/blogs"})).catch((function(e){return r(e.message)}))},className:"linkBtn",children:"Yes,delete"})}),o&&Object(l.jsx)("p",{style:{textAlign:"center",fontWeight:"bold"},children:o})]})},x=function(e){var t=e.blogId,n=Object(c.useState)(""),s=Object(i.a)(n,2),o=s[0],r=s[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{}),Object(l.jsx)("h1",{style:{textAlign:"center"},children:"Are you sure you want to delete this blog?"}),Object(l.jsx)("div",{className:"action-link",children:Object(l.jsx)("button",{onClick:function(){fetch("https://hidden-eyrie-46633.herokuapp.com/admin/blogs/".concat(t,"/delete"),{mode:"cors",method:"DELETE",headers:{Authorization:JSON.parse(localStorage.getItem("token"))}}).then((function(e){if(!e.ok)throw new Error("ERROR: HTTP status "+e.status);return e.json()})).then((function(e){window.location.href="https://arya-poudel.github.io/BlogAdmin/#/blogs"})).catch((function(e){return r(e.message)}))},className:"linkBtn",children:"Yes,delete"})}),o&&Object(l.jsx)("p",{style:{textAlign:"center",fontWeight:"bold"},children:o})]})},g=function(e){var t=e.blogId,n=Object(c.useState)({}),s=Object(i.a)(n,2),o=s[0],r=s[1],a=Object(c.useState)(""),b=Object(i.a)(a,2),d=b[0],h=b[1],u=Object(c.useState)(""),m=Object(i.a)(u,2),O=m[0],x=m[1];return Object(c.useEffect)((function(){fetch("https://hidden-eyrie-46633.herokuapp.com/admin/blogs/".concat(t),{mode:"cors",headers:{Authorization:JSON.parse(localStorage.getItem("token"))}}).then((function(e){if(!e.ok)throw new Error("ERROR: HTTP status "+e.status);return e.json()})).then((function(e){return r(e)})).catch((function(e){return h(e.message)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{}),Object(l.jsxs)("div",{className:"createblogcomments",children:[Object(l.jsxs)("form",{id:"edit_blog_form",onSubmit:function(e){e.preventDefault();var n=new FormData(document.getElementById("edit_blog_form"));fetch("https://hidden-eyrie-46633.herokuapp.com/admin/blogs/".concat(t),{method:"PUT",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:JSON.parse(localStorage.getItem("token"))},body:JSON.stringify(Object.fromEntries(n))}).then((function(e){if(!e.ok)throw new Error("ERROR: HTTP status "+e.status);return e.json()})).then((function(e){return x(e.message)})).catch((function(e){return x(e.message)}))},className:"form_div",autoComplete:"off",children:[Object(l.jsx)("label",{htmlFor:"title",children:"Title:"}),Object(l.jsx)("input",{type:"text",id:"title",name:"title",defaultValue:o.title,required:!0}),Object(l.jsx)("label",{htmlFor:"text",children:"Text:"}),Object(l.jsx)("textarea",{id:"text",name:"text",minLength:"50",defaultValue:o.text,required:!0}),Object(l.jsxs)("div",{children:["IsPublished:",Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"radio",id:"true",name:"ispublished",value:"true",defaultChecked:o.isPublished}),Object(l.jsx)("label",{htmlFor:"true",children:"True"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"radio",id:"false",name:"ispublished",value:"false",defaultChecked:!o.isPublished}),Object(l.jsx)("label",{htmlFor:"false",children:"False"}),Object(l.jsx)("br",{})]}),Object(l.jsx)("button",{type:"submit",className:"linkBtn",children:"Submit"})]}),Object(l.jsx)("p",{style:{textAlign:"center",fontWeight:"bold"},children:O})]}),d&&Object(l.jsx)("p",{style:{textAlign:"center",fontWeight:"bold"},children:d})]})},f=n(3);var p=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(a.a,{basename:"/",children:Object(l.jsxs)(f.c,{children:[Object(l.jsx)(f.a,{exact:!0,path:"/",component:b}),Object(l.jsx)(f.a,{exact:!0,path:"/blogs",component:d}),Object(l.jsx)(f.a,{exact:!0,path:"/blogs/new",component:h}),Object(l.jsx)(f.a,{exact:!0,path:"/blogs/:id",render:function(e){return Object(l.jsx)(u,{blogId:e.match.params.id})}}),Object(l.jsx)(f.a,{exact:!0,path:"/blogs/:id/comments",render:function(e){return Object(l.jsx)(m,{blogId:e.match.params.id})}}),Object(l.jsx)(f.a,{exact:!0,path:"/blogs/:id/edit",render:function(e){return Object(l.jsx)(g,{blogId:e.match.params.id})}}),Object(l.jsx)(f.a,{exact:!0,path:"/blogs/:id/delete",render:function(e){return Object(l.jsx)(x,{blogId:e.match.params.id})}}),Object(l.jsx)(f.a,{exact:!0,path:"/blogs/comments/:id/delete",render:function(e){return Object(l.jsx)(O,{commentId:e.match.params.id})}})]})})})};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.e3d4d614.chunk.js.map