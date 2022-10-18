"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[623],{713:function(n,e,r){r.d(e,{Hg:function(){return c},TP:function(){return o},V0:function(){return u},tx:function(){return d},zv:function(){return p}});var t=r(861),a=r(757),i=r.n(a),s=r(44).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"35f52823224968ebaf30f4a5ee6d071a"}}),c=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/trending/movie/day");case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/search/movie",{params:{query:e}});case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/movie/".concat(e));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/movie/".concat(e,"/credits"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/movie/".concat(e,"/reviews"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},430:function(n,e,r){r.d(e,{Z:function(){return u}});var t,a=r(402),i=r(168),s=r(444).ZP.div(t||(t=(0,i.Z)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n"]))),c=r(184);function u(){return(0,c.jsx)(s,{children:(0,c.jsx)(a.fe,{visible:!0,height:"400",width:"400",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"})})}},830:function(n,e,r){r.d(e,{L:function(){return u},M:function(){return c}});var t,a,i=r(168),s=r(444),c=s.ZP.ul(t||(t=(0,i.Z)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n\npadding-inline-start: 0;\nlist-style: none;\n"]))),u=s.ZP.li(a||(a=(0,i.Z)(["\ncursor: pointer;\n\npadding: 10px;\n\n&:not(:last-child) {\n    margin-right: 20px;\n}\n\n& a {\n    text-decoration: none;\n\n    color: black;\n}\n\n& a.active {\n    border-bottom: 5px solid red;\n}\n"])))},623:function(n,e,r){r.r(e),r.d(e,{default:function(){return y}});var t,a=r(861),i=r(885),s=r(757),c=r.n(s),u=r(791),o=r(731),p=r(470),d=r(430),l=r(168),f=r(444),h=f.ZP.div(t||(t=(0,l.Z)(["\ndisplay: flex;\n\npadding: 20px;\n\nbackground-color: lightgray;\n\nmargin-top: 20px;\n\n& img {\n    margin-right: 20px;\n}\n"]))),v=r(184);function x(n){var e=n.item,r=e.poster_path,t=e.title,a=e.vote_average,i=e.overview,s=e.genres,c=e.release_date,u="https://image.tmdb.org/t/p/w200/".concat(r),o=s.map((function(n){return n.name})).join(", "),p=Math.round(10*a),d=c.slice(0,4);return(0,v.jsxs)(h,{children:[r&&(0,v.jsx)("img",{src:u,alt:t}),(0,v.jsxs)("div",{children:[t&&(0,v.jsxs)("h1",{children:[t,"(",d,")"]}),p>0?(0,v.jsxs)("h2",{children:["User Score: ",p,"%"]}):(0,v.jsx)("p",{children:"There are no ratings yet"}),(0,v.jsx)("h2",{children:"Overview:"}),i&&(0,v.jsx)("p",{children:i}),o&&(0,v.jsx)("h3",{children:o})]})]})}var g,m=r(713),j=r(830),w=f.ZP.button(g||(g=(0,l.Z)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n\ncursor: pointer;\n\nborder: 2px solid black;\nborder-radius: 10px;\n\n&:hover {\n    background-color: lightgray;\n}\n"]))),b=r(71);function y(){var n,e=(0,u.useState)(null),r=(0,i.Z)(e,2),t=r[0],s=r[1],l=(0,u.useState)(!1),f=(0,i.Z)(l,2),h=f[0],g=f[1],y=(0,u.useState)(null),Z=(0,i.Z)(y,2),k=Z[0],_=Z[1],P=(0,p.UO)().movieId,L=(0,p.s0)(),C=(null===(n=(0,p.TH)().state)||void 0===n?void 0:n.from)||"/";(0,u.useEffect)((function(){var n=function(){var n=(0,a.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return g(!0),_(null),n.prev=2,n.next=5,(0,m.TP)(P);case 5:e=n.sent,s(e),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),_(n.t0);case 12:return n.prev=12,g(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[2,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[P]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{children:[t&&(0,v.jsxs)(w,{onClick:function(){return L(C)},children:[(0,v.jsx)(b.gYP,{})," Back"]}),h&&(0,v.jsx)(d.Z,{}),k&&(0,v.jsx)("h2",{children:"Oops, something went wrong. Please try to reload the page"}),t&&(0,v.jsx)(x,{item:t})]}),t&&(0,v.jsx)("div",{children:(0,v.jsxs)(j.M,{children:[(0,v.jsx)(j.L,{children:(0,v.jsx)(o.OL,{state:{from:C},to:"cast",children:"Cast"})}),(0,v.jsx)(j.L,{children:(0,v.jsx)(o.OL,{state:{from:C},to:"reviews",children:"Reviews"})})]})}),(0,v.jsx)(p.j3,{})]})}}}]);
//# sourceMappingURL=623.91cb90fc.chunk.js.map