"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{6713:function(n,t,e){e.d(t,{Hg:function(){return i},TP:function(){return o},V0:function(){return s},tx:function(){return p},zv:function(){return f}});var r=e(5861),a=e(7757),u=e.n(a),c=e(1044).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"35f52823224968ebaf30f4a5ee6d071a"}}),i=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/trending/movie/day");case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/search/movie",{params:{query:t}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},430:function(n,t,e){e.d(t,{Z:function(){return s}});var r,a=e(8402),u=e(168),c=e(6444).ZP.div(r||(r=(0,u.Z)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n"]))),i=e(184);function s(){return(0,i.jsx)(c,{children:(0,i.jsx)(a.fe,{visible:!0,height:"400",width:"400",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"})})}},4833:function(n,t,e){e.d(t,{Z:function(){return o}});var r,a=e(6731),u=e(470),c=e(168),i=e(6444).ZP.ul(r||(r=(0,c.Z)(["\nlist-style: none;\npadding: 0;\n"]))),s=e(184),o=function(n){var t=n.items,e=(0,u.TH)(),r=t.map((function(n){var t=n.title,r=n.id;return(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{state:{from:e},to:"/movies/".concat(r),children:t})},r)}));return(0,s.jsx)(i,{children:r})}},9544:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r=e(5861),a=e(885),u=e(7757),c=e.n(u),i=e(6713),s=e(2791),o=e(4833),f=e(430),p=e(184);function v(){var n=(0,s.useState)([]),t=(0,a.Z)(n,2),e=t[0],u=t[1],v=(0,s.useState)(!1),d=(0,a.Z)(v,2),l=d[0],h=d[1],x=(0,s.useState)(null),m=(0,a.Z)(x,2),w=m[0],g=m[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return h(!0),g(null),n.prev=2,n.next=5,(0,i.Hg)();case 5:t=n.sent,e=t.results,u(e),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),g(n.t0);case 13:return n.prev=13,h(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[2,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,p.jsxs)("main",{children:[l&&(0,p.jsx)(f.Z,{}),w&&(0,p.jsx)("h2",{children:"Oops, something went wrong. Please try to reload the page"}),e.length&&(0,p.jsx)("h1",{children:"Trending today"}),(0,p.jsx)(o.Z,{items:e})]})}}}]);
//# sourceMappingURL=544.73ef237f.chunk.js.map