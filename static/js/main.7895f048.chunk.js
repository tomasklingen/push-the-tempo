(this["webpackJsonppush-the-tempo"]=this["webpackJsonppush-the-tempo"]||[]).push([[0],{21:function(e,t,n){e.exports=n(35)},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),l=n.n(c),o=(n(26),n(5)),u=(n(27),n(9)),i=n(6),m=(n(28),function(e){return r.a.createElement("button",{className:"shiny-button",onClick:e.onClick},e.children)}),s=n(20),E=function(e){return r.a.createElement(d,Object.assign({},e,{style:Object(s.a)({},e.style,{display:"inline",margin:0,height:"initial",padding:"3px"})}),function(e){var t=e.toString().padStart(3,"0");return t.length>3?"999":t}(e.value))},d=function(e){return r.a.createElement("div",Object.assign({className:"lcd"},e),e.children)},f=d,h=n(17),v=function(){console.log("gamescreen rendered");var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(Math.floor(100*Math.random()+80)),u=Object(o.a)(l,2),i=u[0],s=(u[1],Object(a.useState)(0)),d=Object(o.a)(s,2),f=d[0],v=d[1],b=Object(a.useState)(0),g=Object(o.a)(b,2),O=g[0],j=g[1],w=Object(a.useState)(6),y=Object(o.a)(w,2),S=y[0],k=y[1],B=function(){var e=setInterval((function(){console.log("timeleft: ".concat(S)),S>0?k(S-1):(console.log("clearing interval"),Object(h.clearInterval)(e))}),1e3)};return r.a.createElement("div",null,r.a.createElement("h2",null,"Bpm Target",r.a.createElement(E,{style:{float:"right"},value:i})),r.a.createElement("h2",null,"Your BPM",r.a.createElement(E,{style:{float:"right"},value:f})),r.a.createElement("h2",null,"Score",r.a.createElement(E,{style:{float:"right"},value:O})),r.a.createElement("h2",null,"Time left",r.a.createElement(E,{style:{float:"right"},value:S})),n?r.a.createElement(p,{onBpm:function(e){v(e),j((function(t){return t+function(e,t){var n=Math.abs(e-t);return n?n<10?5:0:10}(e,i)}))}},"Hit"):r.a.createElement(m,{onClick:function(){console.log("Starting"),c(new Date),B()}},"\u25b6"))},b=[{id:1,name:"tomas",score:13},{id:2,name:"sanne",score:156},{id:3,name:"tomas",score:17},{id:4,name:"tomas",score:40},{id:5,name:"piet",score:17}],g=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!1),i=Object(o.a)(l,2),s=i[0],E=i[1];return Object(a.useEffect)((function(){E(!0);var e=setTimeout((function(){E(!1),c(b.sort((function(e,t){return t.score-e.score})))}),2e3);return function(){clearTimeout(e),E(!1)}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null,r.a.createElement("ol",{className:"leaderbord-list"},s?"Loading scores...":"",n.map((function(e){return r.a.createElement("li",{key:e.id},e.name,r.a.createElement("span",{className:"score"},e.score))})))),r.a.createElement(u.b,{to:"game"},r.a.createElement(m,null,"\u25b6")))},p=function(e){var t=Object(a.useState)(new Date),n=Object(o.a)(t,2),c=n[0],l=n[1],u=function(t){var n=new Date;if(null!==c){var a=Math.round(6e4/(n.valueOf()-c.valueOf()));e.onBpm(a)}l(n)};return Object(a.useEffect)((function(){return document.addEventListener("mousedown",u,!1),document.addEventListener("keydown",u,!1),function(){document.removeEventListener("mousedown",u),document.removeEventListener("keydown",u)}})),r.a.createElement(m,null,e.children)},O=function(){return r.a.createElement("p",null,"hi")};var j=function(){return r.a.createElement(u.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement("span",{role:"img"},"\ud83d\udd0a")," 4 ON THE FLOOR")),r.a.createElement("main",null,r.a.createElement(i.a,{path:"/",exact:!0},r.a.createElement(g,null)),r.a.createElement(i.a,{path:"/game"},r.a.createElement(u.b,{to:"/"},r.a.createElement("button",null,"back")),r.a.createElement(v,null)),r.a.createElement(i.a,{path:"/score"},r.a.createElement(O,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.7895f048.chunk.js.map