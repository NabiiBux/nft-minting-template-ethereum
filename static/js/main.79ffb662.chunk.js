(this["webpackJsonpsingle-page-minter"]=this["webpackJsonpsingle-page-minter"]||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),r=n(18),s=n.n(r),l=(n(94),n(25));n(95),n(49),n(51);var d=n(26),a=n(42),o=n(47),j=n.n(o),b=n(34);const x=async()=>{if(!window.ethereum)return alert("Metamask is not installed!"),{address:""};try{const e=await window.ethereum.request({method:"eth_requestAccounts"});return{address:e[0]}}catch(e){return alert(e.message),{address:""}}};var p=n(3);var h=()=>{const e=+new j.a("2024-12-16 23:30").utc()-+new Date,t=+new j.a("2023-12-16 05:30").utc()-+new Date,[n,c]=Object(i.useState)(0),[r,s]=Object(i.useState)(0),[l,d]=Object(i.useState)(0),[a,o]=Object(i.useState)(0),[x,h]=Object(i.useState)(0),[u,O]=Object(i.useState)(0),[g,f]=Object(i.useState)(0),[m,v]=Object(i.useState)(0),[y,w]=Object(i.useState)(0),[S,k]=Object(i.useState)(0),[C,L]=Object(i.useState)(0),[E,T]=Object(i.useState)(0),[R,W]=Object(i.useState)(!1);Object(i.useEffect)((()=>{const n=setTimeout((()=>{e>0?(c(Math.floor(e/864e5)),s(Math.floor(e/36e5%24)),d(Math.floor(e/1e3/60%60)),o(Math.floor(e/1e3%60)),w("Ending in: ")):k(" Mints Ended"),t>0?(h(Math.floor(t/864e5)),O(Math.floor(t/36e5%24)),f(Math.floor(t/1e3/60%60)),v(Math.floor(t/1e3%60)),L("Ending in: ")):T("Mint Ended: ")}),1e3);return()=>{clearTimeout(n)}}));const[I,M]=Object(i.useState)(""),[_,A]=Object(i.useState)("false"),[z,N]=Object(i.useState)(1),[D,F]=Object(i.useState)(1),[P,K]=Object(i.useState)(""),[q,B]=Object(i.useState)(0),[H,J]=Object(i.useState)(0),[U,V]=Object(i.useState)(!1),Y=()=>{1!==z&&(N(z-1),1!==D&&F(z-1))};return Object(p.jsxs)("div",{className:"container,display",style:{marginTop:10},children:[Object(p.jsxs)("div",{style:{border:"1px solid white",borderRadius:"5px",padding:"20px"},children:[Object(p.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(p.jsx)("h1",{style:{fontWeight:"bold"},children:"WL MINT"}),Object(p.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[" ".concat(y," "),Object(p.jsxs)("div",{style:{display:"flex",marginLeft:"10px"},children:[Object(p.jsx)("div",{style:{background:"blue",marginLeft:"7px",padding:"5px",borderRadius:"3px"},children:n<10?"0".concat(n):n}),Object(p.jsx)("div",{style:{background:"blue",marginLeft:"7px",padding:"5px",borderRadius:"3px"},children:r<10?"0".concat(r):r}),Object(p.jsx)("div",{style:{background:"blue",marginLeft:"7px",padding:"5px",borderRadius:"3px"},children:l<10?"0".concat(l):l}),Object(p.jsx)("div",{style:{background:"blue",marginLeft:"7px",padding:"5px",borderRadius:"3px"},children:a<10?"0".concat(a):a})]})]})]}),Object(p.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"10px"},children:[Object(p.jsxs)("p",{children:["Only users who are Whitelisted can mint!",Object(p.jsx)("br",{}),"5 per wallet 0.01 SOL per NFT"]}),Object(p.jsxs)("div",{className:"mint-number",children:[Object(p.jsx)("button",{style:{background:"blue",color:"white",position:"relative",fontSize:"1.3rem",left:"150px"},children:"Mint Now!"}),Object(p.jsx)("button",{type:"button",onClick:Y,children:Object(p.jsx)("span",{"aria-hidden":"true",children:"-"})}),Object(p.jsxs)(b.a,{children:[Object(p.jsx)(b.a.Label,{children:z}),P?Object(p.jsx)("div",{children:P}):Object(p.jsx)("div",{})]}),z<5?Object(p.jsx)("button",{type:"button",onClick:()=>N(z+1),children:Object(p.jsx)("span",{"aria-hidden":"true",children:"+"})}):Object(p.jsx)("button",{type:"button",onClick:()=>N(z),children:Object(p.jsx)("span",{"aria-hidden":"true",children:"+"})})]})]})]}),Object(p.jsxs)("div",{style:{border:"1px solid white",borderRadius:"5px",padding:"20px",marginTop:"20px"},children:[Object(p.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(p.jsx)("h1",{style:{fontWeight:"bold"},children:"PUBLIC"}),Object(p.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[C||E,Object(p.jsxs)("div",{style:{display:"flex",marginLeft:"10px"},children:[Object(p.jsx)("div",{style:{background:"blue",marginLeft:"7px",padding:"5px",borderRadius:"3px"},children:x<10?"0".concat(x):x}),Object(p.jsx)("div",{style:{background:"blue",marginLeft:"7px",padding:"5px",borderRadius:"3px"},children:u<10?"0".concat(u):u}),Object(p.jsx)("div",{style:{background:"blue",marginLeft:"7px",padding:"5px",borderRadius:"3px"},children:g<10?"0".concat(g):g}),Object(p.jsx)("div",{style:{background:"blue",marginLeft:"7px",padding:"5px",borderRadius:"3px"},children:m<10?"0".concat(m):m})]})]})]}),Object(p.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"10px"},children:[Object(p.jsxs)("p",{children:["Public mint! All users can mint",Object(p.jsx)("br",{}),"10 per wallet \u2022 0.02 SOL per NFT"]}),Object(p.jsxs)("div",{className:"mint-number",children:[Object(p.jsx)("button",{style:{background:"blue",color:"white",position:"relative",fontSize:"1.3rem",left:"150px"},children:"Mint Now!"}),Object(p.jsx)("button",{type:"button",onClick:Y,children:Object(p.jsx)("span",{"aria-hidden":"true",children:"-"})}),Object(p.jsxs)(b.a,{children:[Object(p.jsx)(b.a.Label,{children:D}),P?Object(p.jsx)("div",{children:P}):Object(p.jsx)("div",{})]}),D<10?Object(p.jsx)("button",{type:"button",onClick:()=>F(D+1),children:Object(p.jsx)("span",{"aria-hidden":"true",children:"+"})}):Object(p.jsx)("button",{type:"button",onClick:()=>F(D),children:Object(p.jsx)("span",{"aria-hidden":"true",children:"+"})})]})]})]})]})},u=n(60),O=n(54),g=n(55),f=n(56);n(57);var m,v,y,w,S;const k=e=>{let{children:t,onOutsideClick:n}=e;const c=Object(i.useRef)(null),r=e=>{c.current&&!c.current.contains(e.target)&&n()};return Object(i.useEffect)((()=>(document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)})),[r]),Object(p.jsx)("div",{ref:c,children:t})};var C=function(){const[e,t]=Object(i.useState)(window.innerWidth),[n,c]=Object(i.useState)(!1),[r,s]=Object(i.useState)(!1),[o,j,b]=Object(i.useState)("");Object(i.useEffect)((()=>{const e=()=>{t(window.innerWidth)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const C=async()=>{const e=await x();j(e.address)},L=d.a.div(m||(m=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 0px;\n    gap: 32px;\n    width: 100%;\n  "]))),E=d.a.div(v||(v=Object(l.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    padding: 0;\n    gap: 16px;\n    flex-wrap: wrap;\n  "]))),T=d.a.div(y||(y=Object(l.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    padding: 10px 16px;\n    gap: 8px;\n    border: 2px solid #ffffff;\n    border-radius: 4px;\n    font-weight: 600;\n    font-size: 20px;\n    line-height: 100%;\n    text-transform: uppercase;\n    color: var(--white);\n\n    @media only screen and (max-width: 450px) {\n      font-size: 18px;\n    }\n  "]))),R=d.a.div(w||(w=Object(l.a)(["\n    display: flex;\n    justify-content: space-between;\n    flex-direction: row;\n    align-items: center;\n    padding: 0px;\n    gap: 24px;\n    margin-bottom: -3px;\n    margin-left: 1rem;\n  "]))),W=d.a.p(S||(S=Object(l.a)(["\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 150%;\n    margin-bottom: 1rem;\n  "])));return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("main",{children:[Object(p.jsx)("style",{index:!0,children:"\n            html {\n              height: 100%;\n              background: black; /* fallback for old browsers */\n            }\n            body {\n              // background: #673ab7; /* fallback for old browsers */\n              background: black; /* fallback for old browsers */\n            }\n          "}),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(O.b,{flexDirection:"column",children:Object(p.jsx)("div",{style:{padding:"10px 20px",width:"100%",display:"flex",alignItems:"center",justifyContent:"end"},children:""!==o?Object(p.jsxs)("div",{style:{position:"relative"},children:[Object(p.jsxs)(g.a,{color:"white",fontWeight:"bold",fontSize:"1.5rem",maxWidth:"100%",colorScheme:"purple",size:"lg",onClick:()=>s(!0),children:[null===o||void 0===o?void 0:o.slice(0,6),"...",null===o||void 0===o?void 0:o.slice(o.length-4,o.length)]}),r&&Object(p.jsx)("div",{style:{position:"absolute",left:0,right:0,top:"50px",background:"black",padding:10,border:"1px solid #ccc",borderRadius:"8px"},children:Object(p.jsx)(k,{onOutsideClick:()=>{console.log("Clicked outside!"),s(!r)},children:Object(p.jsx)(g.a,{className:"button.wallet-adapter-button-trigger , button.wallet-adapter-button-trigger:hover , wallet-adapter-dropdown",style:{width:"100%"},color:"white",fontWeight:"bold",fontSize:"1.5rem",maxWidth:"100%",colorScheme:"purple",size:"lg",onClick:()=>(b("null"),void alert("disconnected")),children:"Disconnect"})})})]}):n?Object(p.jsx)(g.a,{colorScheme:"purple",size:"lg",onClick:()=>C(),children:"Select Wallet"}):null})}),Object(p.jsxs)(O.a,{gap:e>650?"20px":"10px",marginBottom:"20px",alignItems:"center",justifyContent:"center",flexDirection:e<1100?"column":"row",children:[Object(p.jsx)("div",{children:Object(p.jsxs)(O.a,{width:"100%",maxWidth:"600px",display:"flex",flexDirection:"column",justifyContent:"center",color:"white",maxHeight:"100%",children:[Object(p.jsx)(O.a,{children:Object(p.jsxs)(L,{children:[Object(p.jsx)(O.e,{alignItems:"center",justifyContent:"center",color:"white",fontSize:"8vh",fontWeight:"bold",children:"COLLECTION NAME"}),Object(p.jsxs)(E,{children:[Object(p.jsx)(p.Fragment,{}),Object(p.jsxs)(T,{children:[Object(p.jsx)("p",{children:"Total items"}),Object(p.jsx)("p",{children:" "})]}),Object(p.jsxs)(R,{children:[Object(p.jsx)("a",{href:"#",target:"_blank",rel:"noopener noreferrer",children:Object(p.jsx)(a.b,{})}),Object(p.jsx)("a",{href:"#",target:"_blank",rel:"noopener noreferrer",children:Object(p.jsx)(a.c,{})}),Object(p.jsx)("a",{href:"#",target:"_blank",rel:"noopener noreferrer",children:Object(p.jsx)(a.a,{})})]})]}),Object(p.jsx)(W,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem minima velit aliquid voluptates quasi placeat corporis dicta maxime. Ad, similique. Veritatis corrupti eveniet eligendi ratione autem. Dolores cumque dolorem harum."}),n?Object(p.jsx)("div",{style:{width:"100%"},children:""!==o?null:Object(p.jsx)(g.a,{style:{width:"100%"},colorScheme:"purple",size:"lg",onClick:()=>C(),children:"Select Wallet"})}):null]})}),Object(p.jsx)(O.a,{width:"100%",gap:"20px",children:Object(p.jsx)(O.c,{divider:Object(p.jsx)(O.d,{}),width:"100%",display:"flex",rounded:"lg",pos:"relative",children:n?Object(p.jsx)(h,{}):Object(p.jsx)(u.a,{sitekey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_RECAPTCHA_SITE_KEY||" 6Le4rSQpAAAAAMTiGCwY1nAPW0I6cKFrvLSXSsKK ",onChange:e=>{console.log("Captcha value:",e),c(!0)}})})}),Object(p.jsx)(O.a,{width:"100%",gap:"20px",children:Object(p.jsx)(O.c,{divider:Object(p.jsx)(O.d,{}),width:"100%",display:"flex",rounded:"lg",pos:"relative"})})]})}),Object(p.jsx)("div",{children:Object(p.jsx)(O.a,{color:"white",flexDirection:"column",children:Object(p.jsx)(f.a,{src:"./display.gif",alt:"project Image",layout:"responsive",width:100,height:100,style:{minWidth:e<650?"400px":"500px",height:"auto"}})})})]})]})]})})};var L=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,109)).then((t=>{let{getCLS:n,getFID:i,getFCP:c,getLCP:r,getTTFB:s}=t;n(e),i(e),c(e),r(e),s(e)}))},E=n(27),T=n(32);s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsxs)(E.a,{children:[Object(p.jsx)(T.c,{initialColorMode:"dark"}),Object(p.jsx)(C,{})]})}),document.getElementById("root")),L()},51:function(e){e.exports=JSON.parse("{}")},94:function(e,t,n){},95:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.79ffb662.chunk.js.map