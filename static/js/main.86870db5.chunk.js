(this["webpackJsonppush-the-tempo"]=this["webpackJsonppush-the-tempo"]||[]).push([[0],{24:function(e,t,n){e.exports=n(39)},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),l=n.n(c),o=(n(29),n(2)),u=n(7),i=n(6),m=(n(30),n(31),function(e){var t=e.pumpIt,n=e.children,a=e.onClick;return r.a.createElement("div",{className:"big-round-button-container"},r.a.createElement("button",{className:"big-round-button shiny-button "+(t?"pump-it":""),style:{animationDuration:"".concat(t,"ms")},onClick:a},n))}),s=n(23),f=(n(32),function(e){return r.a.createElement(d,Object.assign({},e,{style:Object(s.a)({},e.style,{display:"inline",margin:0,height:"initial",padding:"10px"})}),function(e){var t=e.toString().padStart(3,"0");return t.length>3?"999":t}(e.value))}),d=function(e){return r.a.createElement("div",Object.assign({className:"lcd"},e),e.children)},E=d,p=function(e){var t=Object(a.useState)(new Date),n=Object(o.a)(t,2),c=n[0],l=n[1],u=function(t){var n=new Date;if(null!==c){var a=Math.round(6e4/(n.valueOf()-c.valueOf()));e.onBpm(a)}l(n)};return Object(a.useEffect)((function(){return document.addEventListener("mousedown",u,!1),document.addEventListener("keydown",u,!1),function(){document.removeEventListener("mousedown",u),document.removeEventListener("keydown",u)}})),r.a.createElement(r.a.Fragment,null,e.children)},v=function(e){var t=e.onGameOver,n=Object(a.useState)((function(){return Math.floor(100*Math.random()+80)})),c=Object(o.a)(n,1)[0],l=Object(a.useState)(0),u=Object(o.a)(l,2),s=u[0],d=u[1],E=Object(a.useState)(0),v=Object(o.a)(E,2),b=v[0],h=v[1],O=Object(a.useState)(15),g=Object(o.a)(O,2),j=g[0],S=g[1],y=Object(a.useState)(!1),w=Object(o.a)(y,2),N=w[0],k=w[1],x=Object(a.useState)(!1),I=Object(o.a)(x,2),B=I[0],M=I[1];Object(a.useEffect)((function(){if(N){var e=setInterval((function(){S((function(e){return e-1}))}),1e3);return function(){clearInterval(e)}}}),[N]),Object(a.useEffect)((function(){j<1&&(t(b),M(!0))}),[j,t,b]);var J=function(e){return 60/e*1e3};return r.a.createElement("div",null,r.a.createElement("div",{style:{marginBottom:"20px"}},r.a.createElement("div",{className:"cell"},r.a.createElement("h3",null,"Bpm Target"),r.a.createElement(f,{value:c})),r.a.createElement("div",{className:"cell"},r.a.createElement("h3",null,"Your BPM"),r.a.createElement(f,{value:s})),r.a.createElement("div",{className:"cell"},r.a.createElement("h3",null,"Score"),r.a.createElement(f,{value:b})),r.a.createElement("div",{className:"cell"},r.a.createElement("h3",null,"Time left"),r.a.createElement(f,{value:j}))),N?r.a.createElement(p,{onBpm:function(e){d(e),h((function(t){return t+function(e,t){var n=Math.abs(e-t);return n?n<10?5:0:10}(e,c)}))}},r.a.createElement(m,{pumpIt:J(c)},"Hit")):r.a.createElement(m,{pumpIt:J(c),onClick:function(){k(!0)}},"\u25b6 ",r.a.createElement("div",{style:{fontSize:"0.5em"}},"Start")),B?r.a.createElement(i.a,{to:"score",push:!0}):"")},b=n(15),h=n.n(b),O=n(21),g=n(22),j="push-the-tempo-scores",S=[{id:1,name:"tomas",score:20},{id:2,name:"sanne",score:150},{id:3,name:"tomas",score:30},{id:4,name:"tomas",score:40},{id:5,name:"piet",score:85}];function y(){var e=w();return new Promise((function(t){setTimeout((function(){t(e)}),2e3)}))}function w(){var e=JSON.parse(localStorage.getItem(j)||"[]");return 0===e.length&&(localStorage.setItem(j,JSON.stringify(S)),e=S),e}var N=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!1),i=Object(o.a)(l,2),s=i[0],f=i[1];function d(){return(d=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,y();case 3:t=e.sent,c(t.sort((function(e,t){return t.score-e.score}))),f(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){d.apply(this,arguments)}()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null,r.a.createElement("ol",{className:"leaderbord-list"},s?"Loading scores...":"",n.map((function(e){return r.a.createElement("li",{key:e.id},e.name,r.a.createElement("span",{className:"score"},e.score))})))),r.a.createElement(u.b,{to:"game"},r.a.createElement(m,{pumpIt:600},"\u25b6")))},k=function(e){var t=e.score,n=Object(a.useState)(""),c=Object(o.a)(n,2),l=c[0],m=c[1],s=Object(i.f)();return r.a.createElement("div",null,r.a.createElement("h2",null,"Well done! Your score: "),r.a.createElement(f,{value:t}),r.a.createElement("div",null,r.a.createElement("h2",null,"Enter your name to enter the hall of fame!"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e){var t=e.name,n=e.score,a=w(),r={id:a.reduce((function(e,t){return e.id>t.id?e:t})).id+1,name:t,score:n};localStorage.setItem(j,JSON.stringify([].concat(Object(g.a)(a),[r])))}({name:l,score:t}),s.push("/")}},r.a.createElement("div",null,r.a.createElement("input",{style:{padding:"5px",margin:"15px",fontSize:"16px"},type:"text",name:"name",placeholder:"your name...",value:l,onChange:function(e){return m(e.target.value)}})),r.a.createElement("div",null,r.a.createElement(u.b,{to:"/",style:{color:"#fff",marginRight:"20px"}},"Try again"),r.a.createElement("button",{type:"submit",className:"submit-button"},"Submit")))))};var x=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],c=t[1];return r.a.createElement(u.a,{basename:"/push-the-tempo"},r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement("span",{role:"img"},"\ud83d\udd0a")," Push the tempo")),r.a.createElement("main",null,r.a.createElement(i.b,{path:"/",exact:!0},r.a.createElement(N,null)),r.a.createElement(i.b,{path:"/game"},r.a.createElement(v,{onGameOver:function(e){c(e)}})),r.a.createElement(i.b,{path:"/score"},r.a.createElement(k,{score:n})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.86870db5.chunk.js.map