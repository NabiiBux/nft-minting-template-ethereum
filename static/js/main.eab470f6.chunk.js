(this["webpackJsonpsingle-page-minter"]=this["webpackJsonpsingle-page-minter"]||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),s=n(18),r=n.n(s),p=(n(94),n(23));n(95),n(45),n(46);var l=n(24),o=n(42),d=n(49),u=n.n(d),c=n(34);const y=async()=>{if(!window.ethereum)return alert("Metamask is not installed!"),{address:""};try{const e=await window.ethereum.request({method:"eth_requestAccounts"});return{address:e[0]}}catch(e){return alert(e.message),{address:""}}};var b,m=n(10),j=n(53),x=n(3);var h=()=>{const e=+new u.a("2024-12-16 23:30").utc()-+new Date,t=+new u.a("2023-12-16 05:30").utc()-+new Date,[n,a]=Object(i.useState)(0),[s,r]=Object(i.useState)(0),[o,d]=Object(i.useState)(0),[y,h]=Object(i.useState)(0),[f,O]=Object(i.useState)(0),[g,v]=Object(i.useState)(0),[w,T]=Object(i.useState)(0),[M,S]=Object(i.useState)(0),[k,C]=Object(i.useState)(0),[I,L]=Object(i.useState)(0),[_,R]=Object(i.useState)(0),[E,A]=Object(i.useState)(0),[F,W]=Object(i.useState)(!1);Object(i.useEffect)((()=>{const n=setTimeout((()=>{e>0?(a(Math.floor(e/864e5)),r(Math.floor(e/36e5%24)),d(Math.floor(e/1e3/60%60)),h(Math.floor(e/1e3%60)),C("Ending in: ")):L(" Mints Ended"),t>0?(O(Math.floor(t/864e5)),v(Math.floor(t/36e5%24)),T(Math.floor(t/1e3/60%60)),S(Math.floor(t/1e3%60)),R("Ending in: ")):A("Mint Ended: ")}),1e3);return()=>{clearTimeout(n)}}));const[P,z]=Object(i.useState)(""),[N,D]=Object(i.useState)("false"),[U,q]=Object(i.useState)(void 0),[B,K]=Object(i.useState)(1),[H,J]=Object(i.useState)(1),[V,Y]=Object(i.useState)(""),[G,Q]=Object(i.useState)(0),[X,Z]=Object(i.useState)(0),[$,ee]=Object(i.useState)(!1),[te,ne]=Object(i.useState)(""),[ie,ae]=Object(i.useState)(""),{isOpen:se,onOpen:re,onClose:pe}=Object(m.b)(),[le,oe]=Object(i.useState)(""),de=()=>{1!==B&&(K(B-1),1!==H&&J(B-1))},ue=e=>{if(void 0!==U&&""!==ie){var t=2e7*e;U.methods.buyFlys(e).send({from:ie,value:t}).then((e=>{console.log(e),oe(e.transactionHash),ne("https://opensea.io/assets/"+e.to+"/"+e.events.Transfer.returnValues.tokenId),console.log(te),re()})).catch((e=>{console.log(e)}))}};l.a.p(b||(b=Object(p.a)(["\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 150%;\n  margin-bottom: 1rem;\n"])));return Object(x.jsxs)("div",{className:"container,display",style:{marginTop:10},children:[Object(x.jsxs)("div",{style:{border:"1px solid white",borderRadius:"5px",padding:"20px"},children:[Object(x.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(x.jsx)("h1",{style:{fontWeight:"bold"},children:"WL MINT"}),Object(x.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[" ".concat(k," "),Object(x.jsxs)("div",{style:{display:"flex",marginLeft:"10px"},children:[Object(x.jsx)("div",{style:{background:"blue",marginLeft:"7px",padding:"5px",borderRadius:"3px"},children:n<10?"0".concat(n):n}),Object(x.jsx)("div",{style:{background:"blue",marginLeft:"7px",padding:"5px",borderRadius:"3px"},children:s<10?"0".concat(s):s}),Object(x.jsx)("div",{style:{background:"blue",marginLeft:"7px",padding:"5px",borderRadius:"3px"},children:o<10?"0".concat(o):o}),Object(x.jsx)("div",{style:{background:"blue",marginLeft:"7px",padding:"5px",borderRadius:"3px"},children:y<10?"0".concat(y):y})]})]})]}),Object(x.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"10px"},children:[Object(x.jsx)("p",{children:Object(x.jsxs)("mintText",{children:["Only users who are Whitelisted can mint!",Object(x.jsx)("br",{}),"5 per wallet 0.01 SOL per NFT"]})}),Object(x.jsxs)("div",{className:"mint-number",children:[Object(x.jsx)(j.a,{style:{background:"blue",borderRadius:"5px",padding:"5px 7px",color:"white",position:"relative",fontSize:"1rem",left:"140px"},onClick:()=>ue(),children:"Mint Now!"}),Object(x.jsx)("button",{type:"button",onClick:de,children:Object(x.jsx)("span",{"aria-hidden":"true",children:"-"})}),Object(x.jsxs)(c.a,{children:[Object(x.jsx)(c.a.Label,{children:B}),V?Object(x.jsx)("div",{children:V}):Object(x.jsx)("div",{})]}),B<5?Object(x.jsx)("button",{type:"button",onClick:()=>K(B+1),children:Object(x.jsx)("span",{"aria-hidden":"true",children:"+"})}):Object(x.jsx)("button",{type:"button",onClick:()=>K(B),children:Object(x.jsx)("span",{"aria-hidden":"true",children:"+"})})]})]})]}),Object(x.jsxs)("div",{style:{border:"1px solid white",borderRadius:"5px",padding:"20px",marginTop:"20px"},children:[Object(x.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(x.jsx)("h1",{style:{fontWeight:"bold"},children:"PUBLIC"}),Object(x.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[_||E,Object(x.jsxs)("div",{style:{display:"flex",marginLeft:"10px"},children:[Object(x.jsx)("div",{style:{background:"blue",marginLeft:"7px",padding:"5px",borderRadius:"3px"},children:f<10?"0".concat(f):f}),Object(x.jsx)("div",{style:{background:"blue",marginLeft:"7px",padding:"5px",borderRadius:"3px"},children:g<10?"0".concat(g):g}),Object(x.jsx)("div",{style:{background:"blue",marginLeft:"7px",padding:"5px",borderRadius:"3px"},children:w<10?"0".concat(w):w}),Object(x.jsx)("div",{style:{background:"blue",marginLeft:"7px",padding:"5px",borderRadius:"3px"},children:M<10?"0".concat(M):M})]})]})]}),Object(x.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"10px"},children:[Object(x.jsx)("p",{children:Object(x.jsxs)("mintText",{children:["Public mint! All users can mint",Object(x.jsx)("br",{}),"10 per wallet \u2022 0.02 SOL per NFT"]})}),Object(x.jsxs)("div",{className:"mint-number",children:[Object(x.jsx)(j.a,{style:{background:"blue",borderRadius:"5px",padding:"5px 7px",color:"white",position:"relative",fontSize:"1rem",left:"140px"},onClick:()=>ue(),children:"Mint Now!"}),Object(x.jsx)("button",{type:"button",onClick:de,children:Object(x.jsx)("span",{"aria-hidden":"true",children:"-"})}),Object(x.jsxs)(c.a,{children:[Object(x.jsx)(c.a.Label,{children:H}),V?Object(x.jsx)("div",{children:V}):Object(x.jsx)("div",{})]}),H<10?Object(x.jsx)("button",{type:"button",onClick:()=>J(H+1),children:Object(x.jsx)("span",{"aria-hidden":"true",children:"+"})}):Object(x.jsx)("button",{type:"button",onClick:()=>J(H),children:Object(x.jsx)("span",{"aria-hidden":"true",children:"+"})})]})]})]})]})},f=n(60),O=n(55),g=n(56);n(57);var v,w,T,M,S;const k=e=>{let{children:t,onOutsideClick:n}=e;const a=Object(i.useRef)(null),s=e=>{a.current&&!a.current.contains(e.target)&&n()};return Object(i.useEffect)((()=>(document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)})),[s]),Object(x.jsx)("div",{ref:a,children:t})};var C=function(){const[e,t]=Object(i.useState)(window.innerWidth),[n,a]=Object(i.useState)(!1),[s,r]=Object(i.useState)(!1),[d,u,c]=Object(i.useState)("");Object(i.useEffect)((()=>{const e=()=>{t(window.innerWidth)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const b=async()=>{const e=await y();u(e.address)},m=l.a.div(v||(v=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 0px;\n    gap: 32px;\n    width: 100%;\n  "]))),C=l.a.div(w||(w=Object(p.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    padding: 0;\n    gap: 16px;\n    flex-wrap: wrap;\n  "]))),I=l.a.div(T||(T=Object(p.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    padding: 10px 16px;\n    gap: 8px;\n    border: 2px solid #ffffff;\n    border-radius: 4px;\n    font-weight: 600;\n    font-size: 20px;\n    line-height: 100%;\n    text-transform: uppercase;\n    color: var(--white);\n\n    @media only screen and (max-width: 450px) {\n      font-size: 18px;\n    }\n  "]))),L=l.a.div(M||(M=Object(p.a)(["\n    display: flex;\n    justify-content: space-between;\n    flex-direction: row;\n    align-items: center;\n    padding: 0px;\n    gap: 24px;\n    margin-bottom: -3px;\n    margin-left: 1rem;\n  "]))),_=l.a.p(S||(S=Object(p.a)(["\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 150%;\n    margin-bottom: 1rem;\n  "])));return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("main",{children:[Object(x.jsx)("style",{index:!0,children:"\n            html {\n              height: 100%;\n              background: black; /* fallback for old browsers */\n            }\n            body {\n              // background: #673ab7; /* fallback for old browsers */\n              background: black; /* fallback for old browsers */\n            }\n          "}),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(O.b,{flexDirection:"column",children:Object(x.jsx)("div",{style:{padding:"10px 20px",width:"100%",display:"flex",alignItems:"center",justifyContent:"end"},children:""!==d?Object(x.jsxs)("div",{style:{position:"relative"},children:[Object(x.jsxs)(j.a,{color:"white",fontWeight:"bold",fontSize:"1.5rem",maxWidth:"100%",colorScheme:"purple",size:"lg",onClick:()=>r(!0),children:[null===d||void 0===d?void 0:d.slice(0,6),"...",null===d||void 0===d?void 0:d.slice(d.length-4,d.length)]}),s&&Object(x.jsx)("div",{style:{position:"absolute",left:0,right:0,top:"50px",background:"black",padding:10,border:"1px solid #ccc",borderRadius:"8px"},children:Object(x.jsx)(k,{onOutsideClick:()=>{console.log("Clicked outside!"),r(!s)},children:Object(x.jsx)(j.a,{className:"button.wallet-adapter-button-trigger , button.wallet-adapter-button-trigger:hover , wallet-adapter-dropdown",style:{width:"100%"},color:"white",fontWeight:"bold",fontSize:"1.5rem",maxWidth:"100%",colorScheme:"purple",size:"lg",onClick:()=>(c("null"),void alert("disconnected")),children:"Disconnect"})})})]}):n?Object(x.jsx)(j.a,{colorScheme:"purple",size:"lg",onClick:()=>b(),children:"Select Wallet"}):null})}),Object(x.jsxs)(O.a,{gap:e>650?"20px":"10px",marginBottom:"20px",alignItems:"center",justifyContent:"center",flexDirection:e<1100?"column":"row",children:[Object(x.jsx)("div",{children:Object(x.jsxs)(O.a,{width:"100%",maxWidth:"600px",display:"flex",flexDirection:"column",justifyContent:"center",color:"white",maxHeight:"100%",children:[Object(x.jsx)(O.a,{children:Object(x.jsxs)(m,{children:[Object(x.jsx)(O.e,{alignItems:"center",justifyContent:"center",color:"white",fontSize:"8vh",fontWeight:"bold",children:"COLLECTION NAME"}),Object(x.jsxs)(C,{children:[Object(x.jsx)(x.Fragment,{}),Object(x.jsxs)(I,{children:[Object(x.jsx)("p",{children:"Total items"}),Object(x.jsx)("p",{children:" "})]}),Object(x.jsxs)(L,{children:[Object(x.jsx)("a",{href:"#",target:"_blank",rel:"noopener noreferrer",children:Object(x.jsx)(o.b,{})}),Object(x.jsx)("a",{href:"#",target:"_blank",rel:"noopener noreferrer",children:Object(x.jsx)(o.c,{})}),Object(x.jsx)("a",{href:"#",target:"_blank",rel:"noopener noreferrer",children:Object(x.jsx)(o.a,{})})]})]}),Object(x.jsx)(_,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem minima velit aliquid voluptates quasi placeat corporis dicta maxime. Ad, similique. Veritatis corrupti eveniet eligendi ratione autem. Dolores cumque dolorem harum."}),n?Object(x.jsx)("div",{style:{width:"100%"},children:""!==d?null:Object(x.jsx)(j.a,{style:{width:"100%"},colorScheme:"purple",size:"lg",onClick:()=>b(),children:"Select Wallet"})}):null]})}),Object(x.jsx)(O.a,{width:"100%",gap:"20px",children:Object(x.jsx)(O.c,{divider:Object(x.jsx)(O.d,{}),width:"100%",display:"flex",rounded:"lg",pos:"relative",children:n?Object(x.jsx)(h,{}):Object(x.jsx)(f.a,{sitekey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_RECAPTCHA_SITE_KEY||" 6Le4rSQpAAAAAMTiGCwY1nAPW0I6cKFrvLSXSsKK ",onChange:e=>{console.log("Captcha value:",e),a(!0)}})})}),Object(x.jsx)(O.a,{width:"100%",gap:"20px",children:Object(x.jsx)(O.c,{divider:Object(x.jsx)(O.d,{}),width:"100%",display:"flex",rounded:"lg",pos:"relative"})})]})}),Object(x.jsx)("div",{children:Object(x.jsx)(O.a,{color:"white",flexDirection:"column",children:Object(x.jsx)(g.a,{src:"./display.gif",alt:"project Image",layout:"responsive",width:100,height:100,style:{minWidth:e<650?"400px":"500px",height:"auto"}})})})]})]})]})})};var I=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,109)).then((t=>{let{getCLS:n,getFID:i,getFCP:a,getLCP:s,getTTFB:r}=t;n(e),i(e),a(e),s(e),r(e)}))},L=n(27),_=n(32);r.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsxs)(L.a,{children:[Object(x.jsx)(_.c,{initialColorMode:"dark"}),Object(x.jsx)(C,{})]})}),document.getElementById("root")),I()},46:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_extension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipFreeMintState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"flipPublicSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"freeMintLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"freeMintStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"freeMinted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"free_mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getOwnershipData","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint64","name":"startTimestamp","type":"uint64"}],"internalType":"struct ERC721A.TokenOwnership","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPerAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPerTx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"quantity","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextOwnerToExplicitlySet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"notRevealedUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"numberMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"quantity","type":"uint256"}],"name":"ownerMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_temp","type":"uint256"}],"name":"setFreeLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"t_max_per_tx","type":"uint256"},{"internalType":"uint256","name":"t_max_per_address","type":"uint256"}],"name":"setMaxLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_notRevealedURI","type":"string"}],"name":"setNotRevealedURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_PriceInWEI","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_temp","type":"string"}],"name":"updateExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},94:function(e,t,n){},95:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.eab470f6.chunk.js.map