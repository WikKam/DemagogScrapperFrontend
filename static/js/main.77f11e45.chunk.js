(this["webpackJsonpdemagog-scrapper-frontend"]=this["webpackJsonpdemagog-scrapper-frontend"]||[]).push([[0],{206:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),s=a.n(c),l=(a(97),a(98),a(99),a(20)),i=a(9),o=a.n(i),u=a(15),m=a(84),p=a.n(m),d=function(){var e=Object(u.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://demagogscrapper.azurewebsites.net/"+t);case 3:if((a=e.sent).ok){e.next=6;break}throw Error(a.statusText);case 6:return e.next=8,a.json();case 8:return n=e.sent,e.abrupt("return",n);case 12:return e.prev=12,e.t0=e.catch(0),console.log("Looks like there was a problem: \n",e.t0),e.abrupt("return",[]);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),f=function(e){function t(){return new Promise(requestAnimationFrame)}function a(e){return c.apply(this,arguments)}function c(){return(c=Object(u.a)(o.a.mark((function a(n){var c,s,l;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:c=[];case 1:s=0;case 2:if(!(s<10)){a.next=10;break}if(l=n.pop()){a.next=6;break}return a.abrupt("break",10);case 6:c.push(r.a.createElement(k,{key:l.name,callback:m,type:e.type,side:e.side,value:l.name,url:l.url?l.url:l.imgUrl}));case 7:s++,a.next=2;break;case 10:return a.next=12,t();case 12:if(n.length>0){a.next=1;break}case 13:return a.abrupt("return",c);case 14:case"end":return a.stop()}}),a)})))).apply(this,arguments)}var s,i=function(){for(var e=[];e.length<30;)e.push(r.a.createElement(B,{key:e.length,width:250,heigth:250,style:{margin:"4%"}}));return e},m=function(){e.callback&&(e.callback(),x(i()),g(!0))},f=function(){var t=Object(u.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e.path);case 2:return n=t.sent,t.next=5,a(n);case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=Object(n.useState)(!0),h=Object(l.a)(b,2),E=h[0],g=h[1],v=Object(n.useState)(i()),y=Object(l.a)(v,2),_=y[0],x=y[1];return Object(n.useEffect)((function(){var e=!0;return E&&f().then((function(t){e&&(x(t),g(!1))})),function(){e=!1}})),r.a.createElement("div",null,r.a.createElement("h1",null,(s=e.type)[0].toUpperCase()+s.slice(1)),r.a.createElement("div",{className:p.a.container},_))},b=a(21),h=a.n(b),E=a(11),g=function(e){switch(e.value){case"Koalicja Polska":return h.a.kp;case"Koalicja Obywatelska":return h.a.ko;case"Lewica":return h.a.lewica;case"Zjednoczona Prawica":return h.a.zp;case"Konfederacja":return h.a.konf;default:return""}},k=function(e){return r.a.createElement("div",{className:[h.a.container,g(e)].join(" "),style:{maxWidth:e.side+70}},r.a.createElement(E.b,{onClick:function(){console.log(e.callback),e.callback&&(console.log(e.callback),e.callback(),console.log("click from card"))},to:"/".concat(e.type,"/").concat(e.value)},r.a.createElement("img",{alt:"",className:h.a.image,src:e.url,style:{width:e.side,heigth:e.side}}),r.a.createElement("div",{className:h.a.footer},e.value)))},v=a(39),y=a(31),_=a(38),x=function(){return r.a.createElement(v.a,{sticky:"top",collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(v.a.Brand,{href:"#home"},"DemagogScrapper"),r.a.createElement(v.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(v.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(y.a,null,r.a.createElement(_.a,{title:"Rankings",id:"collasible-nav-dropdown"},r.a.createElement(_.a.Item,{as:E.b,to:"/topList/coalitions"},"Coalitions"),r.a.createElement(_.a.Item,{as:E.b,to:"/topList/parties"},"Parties"),r.a.createElement(_.a.Item,{as:E.b,to:"/topList/members"},"Politicians")),r.a.createElement(y.a.Link,{href:"/coalitions"},"Coalitions"),r.a.createElement(y.a.Link,{eventKey:2,as:E.b,to:"/parties"},"Parties"),r.a.createElement(y.a.Link,{eventKey:2,as:E.b,to:"/members"},"Politicians"),r.a.createElement(y.a.Link,{href:"https://demagog.org.pl/",target:"_blank"},"Visit Source"))))},w=a(37),j=a.n(w),O=a(87),S=a(89),N=a.n(S),L=function(e){return console.log("position:"+e.position),r.a.createElement("div",{className:N.a.container},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Party:"),r.a.createElement("td",null,e.party)),r.a.createElement("tr",null,r.a.createElement("td",null,"Position:"),r.a.createElement("td",null,e.position?e.position:"Cz\u0142onek")))))},C=a(26),z=a.n(C),P=function(e){window.onpopstate=function(e){e&&h(!0)};var t=function(){var t=Object(u.a)(o.a.mark((function t(){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e.match.url+"/results");case 2:return a=t.sent,n={data:{labels:["True Statements","False Statements","Manipulation Statements"],datasets:[{label:"Amount",data:[a.trueStatements,a.falseStatements,a.manipulationStatements],backgroundColor:["rgba(0, 230, 64, 1)","rgba(242, 38, 19, 1)","rgba(238, 238, 0, 1)"]}]},url:a.url?a.url:a.imgUrl,party:a.party?a.party:null,position:a.position?a.position:null},t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a=Object(n.useState)(""),c=Object(l.a)(a,2),s=c[0],i=c[1],m=Object(n.useState)(!0),p=Object(l.a)(m,2),b=p[0],h=p[1];return Object(n.useEffect)((function(){var e=!0;return b&&t().then((function(t){e&&(i(t),h(!1))})),function(){e=!1}})),r.a.createElement("div",null,r.a.createElement("div",{className:j.a.wrapper},r.a.createElement("div",{className:j.a.left},r.a.createElement(k,{key:e.match.params.name,type:e.type,side:250,value:e.match.params.name,url:s.url}),"members"===e.type&&r.a.createElement(L,{party:s.party,position:s.position}),s.data&&r.a.createElement("div",{className:j.a.data},r.a.createElement("div",{style:{textAlign:"center",fontSize:"22px",marginBottom:"5%"}},"Checked statements: ",r.a.createElement(z.a,{duration:2.5,start:0,end:s.data.datasets[0].data.reduce((function(e,t){return e+t}))})),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-check-circle",style:{fontSize:"20px",color:"green"}}),"True statements: ",r.a.createElement(z.a,{duration:2.5,start:0,end:s.data.datasets[0].data[0]})),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-times-circle",style:{fontSize:"20px",color:"red"}}),"False statements: ",r.a.createElement(z.a,{duration:2.5,start:0,end:s.data.datasets[0].data[1]})),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-exclamation-circle",style:{fontSize:"20px",color:"yellow"}}),"Manipulation statements: ",r.a.createElement(z.a,{duration:2.5,start:0,end:s.data.datasets[0].data[2]})))),r.a.createElement("div",{className:j.a.right},s.data?s.data.datasets[0].data.reduce((function(e,t){return e+t}))>0?r.a.createElement(O.a,{key:e.match.params.name,data:s.data,width:430,height:430}):r.a.createElement("span",null,"Couldn't find any data for this name :("):r.a.createElement("span",null,"loading..."))),"members"!==e.type&&r.a.createElement(f,{key:e.match.params.name,callback:function(){h(!0),console.log("click")},type:function(e){switch(e){case"coalitions":return"parties";case"parties":return"members";default:return}}(e.type),side:"150px",path:"/".concat(e.match.url.split("/")[1],"/")+e.match.params.name+"/members"}))},I=a(64),A=a.n(I),F=a(6),T=a(90),D=(a(201),function(e){function t(){return new Promise(requestAnimationFrame)}function a(e){return c.apply(this,arguments)}function c(){return(c=Object(u.a)(o.a.mark((function a(n){var c,s,l,i;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:c=[],s=n.length;case 2:l=function(t){var a=s-n.length,l=n.pop();if(!l)return"break";c.push(r.a.createElement("li",{key:l.name,onClick:function(){v.push("/".concat(e.type,"/")+l.name)}},r.a.createElement("span",null,a+1,"."),r.a.createElement("span",null,r.a.createElement(T.LazyLoadImage,{className:A.a.image,src:l.url?l.url:l.imgUrl})),r.a.createElement("span",null,r.a.createElement(E.b,{to:"/".concat(e.type,"/")+l.name},l.name)),r.a.createElement("span",null,r.a.createElement(z.a,{duration:2.5,start:0,end:l.trueStatements})),r.a.createElement("span",null,a+1<=3&&r.a.createElement("i",{className:"fas fa-medal"}))))},i=0;case 4:if(!(i<20)){a.next=11;break}if("break"!==l(i)){a.next=8;break}return a.abrupt("break",11);case 8:i++,a.next=4;break;case 11:return a.next=13,t();case 13:if(n.length>0){a.next=2;break}case 14:return a.abrupt("return",c);case 15:case"end":return a.stop()}}),a)})))).apply(this,arguments)}var s=function(){var t=Object(u.a)(o.a.mark((function t(){var n,r,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=!1,r=JSON.parse(sessionStorage.getItem(e.match.url))){t.next=8;break}return console.log("fetching..."),t.next=6,d(e.path);case 6:r=t.sent,n=!0;case 8:return c=r.sort((function(e,t){return e.trueStatements-t.trueStatements})),n&&sessionStorage.setItem(e.match.url,JSON.stringify(r)),t.next=12,a(c);case 12:return t.abrupt("return",t.sent);case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=Object(n.useState)(function(){for(var e=[];e.length<30;)e.push(r.a.createElement(B,{key:e.length,width:"100%",heigth:130}));return e}()),m=Object(l.a)(i,2),p=m[0],f=m[1],b=Object(n.useState)(!1),h=Object(l.a)(b,2),g=h[0],k=h[1],v=Object(F.g)();return Object(n.useEffect)((function(){var e=!0;if(!g)return s().then((function(t){e&&(f(t),k(!0))})),function(){return e=!1}})),r.a.createElement("div",{className:A.a.container},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",null,"Place"),r.a.createElement("span",{style:{width:"100px"}}),r.a.createElement("span",null,"Name"),r.a.createElement("span",null,"True statements")),p))}),K=a(65),J=a(91),R=a.n(J),B=function(e){return r.a.createElement("div",{className:R.a.loader,style:Object(K.a)(Object(K.a)({},e.style),{},{width:e.width,height:e.heigth})})};var U=function(){return r.a.createElement(E.a,{basename:"/DemagogScrapperFrontend"},r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement(F.d,null,r.a.createElement(F.b,{exact:!0,path:"/"},r.a.createElement(F.a,{to:"/coalitions"})),r.a.createElement(F.b,{path:"/coalitions",exact:!0,render:function(e){return r.a.createElement(f,Object.assign({type:"coalitions"},e,{side:200,path:"/coalitions"}))}}),r.a.createElement(F.b,{path:"/coalitions/:name",render:function(e){return r.a.createElement(P,Object.assign({},e,{type:"coalitions"}))}}),r.a.createElement(F.b,{path:"/parties/:name",render:function(e){return r.a.createElement(P,Object.assign({},e,{type:"parties"}))}}),r.a.createElement(F.b,{path:"/members/:name",render:function(e){return r.a.createElement(P,Object.assign({},e,{type:"members"}))}}),r.a.createElement(F.b,{path:"/parties",exact:!0,render:function(e){return r.a.createElement(f,Object.assign({type:"parties"},e,{side:100,path:"/parties"}))}}),r.a.createElement(F.b,{path:"/members",exact:!0,render:function(e){return r.a.createElement(f,Object.assign({type:"members"},e,{side:100,path:"/members"}))}}),r.a.createElement(F.b,{path:"/topList/coalitions",render:function(e){return r.a.createElement(D,Object.assign({},e,{type:"coalitions",path:"/coalitions/results"}))}}),r.a.createElement(F.b,{path:"/topList/parties",render:function(e){return r.a.createElement(D,Object.assign({},e,{type:"parties",path:"/parties/results"}))}}),r.a.createElement(F.b,{path:"/topList/members",render:function(e){return r.a.createElement(D,Object.assign({},e,{type:"members",path:"/members"}))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},21:function(e,t,a){e.exports={container:"Card_container__32jmY",footer:"Card_footer__2jmYJ",kp:"Card_kp__18N4p",ko:"Card_ko__2v1mK",lewica:"Card_lewica__1gjSd",konf:"Card_konf__RHfsj",zp:"Card_zp__3QRdx",image:"Card_image__1xQ-S"}},37:function(e,t,a){e.exports={wrapper:"Details_wrapper__3tzqa",left:"Details_left__23Fyn",right:"Details_right__3lzsI",data:"Details_data__NVXxR"}},64:function(e,t,a){e.exports={container:"TopList_container__3AFXX",image:"TopList_image__2t8XE"}},84:function(e,t,a){e.exports={container:"List_container__3SAuS",header:"List_header__3TCRg"}},89:function(e,t,a){e.exports={container:"PersonalInfo_container__1Ag-8"}},91:function(e,t,a){e.exports={loader:"Loader_loader__pSeuF",loading:"Loader_loading__DWuf8"}},92:function(e,t,a){e.exports=a(206)},97:function(e,t,a){},98:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},99:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.77f11e45.chunk.js.map