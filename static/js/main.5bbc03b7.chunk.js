(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(22).concat([function(e,t,a){e.exports=a.p+"static/media/bibycle.fca664c0.jpg"},,,function(e,t,a){e.exports=a.p+"static/media/background1.3fbfc4ea.jpg"},function(e,t,a){e.exports=a.p+"static/media/bicycle1.1fd61596.png"},function(e,t,a){e.exports=a.p+"static/media/bicycle2.108e09bd.png"},function(e,t,a){e.exports=a.p+"static/media/bicycle3.77fe5b11.png"},function(e,t,a){e.exports=a.p+"static/media/bicycle4.b6c24a30.png"},,function(e,t,a){e.exports=a(51)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(21),r=a.n(l),i=(a(36),a(37),a(1)),o=a(11),s=(a(38),function(){return c.a.createElement("header",null,c.a.createElement("div",{className:"description"},c.a.createElement("div",null,c.a.createElement("h1",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti vitae a cumque assumenda, debitis porro."))))}),m=a(6),u=a(7),p=a(9),d=a(8),E=a(10),f=a(22),h=a.n(f),v=(a(39),function(e){e.title,e.author,e.text;var t="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aperiam adipisci commodi, omnis nobis ipsa dolore similique. Harum sit facere aspernatur doloremque velit autem aliquam in officiis vero? Molestias, temporee.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aperiam adipisci commodi, omnis nobis ipsa dolore similique. Harum sit facere aspernatur doloremque velit autem aliquam in officiis vero? Molestias, temporee.";return c.a.createElement("section",{className:"who-we-are"},c.a.createElement("div",{className:"desc",style:{width:"50%"}},c.a.createElement("h2",null,"Lorem ipsum dolor sit amet consectetur!"),c.a.createElement("p",null,t),c.a.createElement("br",null),c.a.createElement("p",null,t),c.a.createElement("div",{className:"primary-btn-container"},c.a.createElement(i.b,{to:"/products",className:"primary-btn"},"Products"))),c.a.createElement("div",{className:"image",style:{width:"40%"}},c.a.createElement("img",{src:h.a,alt:""})))}),g=a(25),b=a.n(g),y=a(17),k=(a(44),function(e){var t=Object(y.a)(e.products);t.sort(function(e,t){return(e=e.visits)>(t=t.visits)?-1:e<t?1:0});var a=Object(y.a)(t).slice(0,3);return console.log(a),c.a.createElement("section",{className:"popular-products"},c.a.createElement("h2",null,"Popular bikes"),c.a.createElement("div",{className:"popular-products-wrapper"},a.map(function(e){return c.a.createElement(i.b,{key:e.id,className:"link",to:{pathname:"/product/".concat(e.model),state:{product:e}}},c.a.createElement("div",{className:"product-container"},c.a.createElement("h3",null,e.marke),c.a.createElement("span",null,e.model),c.a.createElement("img",{src:e.img,alt:"bicycle"}),c.a.createElement("span",{className:"price"},e.price,"$")))})))}),x=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={value:"",isSend:!1,validate:!1},a.handleInput=function(e){a.setState({value:e.target.value})},a.sendMail=function(e){e.preventDefault(),console.log(a.state.value.indexOf()),-1!==a.state.value.indexOf("@")?a.setState({isSend:!0,validate:!1}):a.setState({validate:!0})},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{style:{backgroundColor:"#fff",margin:"0 auto",textAlign:"center",color:"#3c3c3c",padding:"30px"}},c.a.createElement("h3",{style:{fontFamily:"'Old Standard TT', serif",fontSize:"46px",fontWeight:400,marginBottom:"30px"}},"Newsletter"),c.a.createElement("p",{className:"desc",style:{display:"block",marginBottom:"30px"}},"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sit est minus explicabo beatae! Beatae tenetur illum soluta praesentium eveniet blanditiis fugit totam perspiciatis sit, minima, neque architecto, necessitatibus optio!"),c.a.createElement("form",{style:{display:"flex",justifyContent:"center",border:"none"}},this.state.isSend?c.a.createElement("p",null,"Thanks for sending us your e-mail!"):c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{onChange:this.handleInput,value:this.setState.value,placeholder:"Your email",type:"email",style:{backgroundColor:"#e8e8e8",padding:"10px",outline:"none",borderImage:"none",borderColor:"none",border:"none",fontFamily:"'Ubuntu', serif",fontSize:"16px"}}),c.a.createElement("div",{className:"primary-btn-container"},c.a.createElement("button",{onClick:this.sendMail,type:"submit",className:"primary-btn",style:{cursor:"pointer"}},"Send")))),this.state.validate?c.a.createElement("p",{style:{color:"#ff3232"}},"Email address must contain '@' mark!"):null)}}]),t}(n.Component),N=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"app-background"},c.a.createElement("img",{src:b.a,alt:""})),c.a.createElement(v,null),c.a.createElement(k,{products:e.products}),c.a.createElement("section",{className:"newsletter"},c.a.createElement(x,null)))},j=(a(45),function(e){var t=e.details,a=t.marke,n=t.model,l=t.img,r=t.desc,i=t.price;return c.a.createElement("article",{className:"product"},c.a.createElement("div",{className:"photo"},c.a.createElement("img",{src:l,alt:""})),c.a.createElement("div",{className:"details"},c.a.createElement("span",null,a),c.a.createElement("h2",null,n),c.a.createElement("p",null,r),c.a.createElement("span",{className:"big-price"},i,"$")))}),w=a(30),O=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(j,{id:e.match.params.id,details:e.location.state.product}),c.a.createElement(i.b,{style:{display:"flex",alignItems:"center",color:"#3c3c3c",textDecoration:"none",marginTop:"30px"},to:"/products"},c.a.createElement(w.a,{style:{fontSize:"20px",transform:"rotate(180deg)"}})," Back to all products"))},S=(a(46),function(e){var t=e.products.map(function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(i.b,{className:"link",onClick:function(){e.visits++},to:{pathname:"/product/".concat(e.model),state:{product:e}}},c.a.createElement("img",{src:e.img,alt:""}),c.a.createElement("div",{className:"desc"},c.a.createElement("h3",null,e.marke),c.a.createElement("span",null,e.model),c.a.createElement("p",null,e.desc))))});return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"products"},c.a.createElement("h2",null,"Lista produkt\xf3w"),c.a.createElement("div",null,c.a.createElement("ul",null,t))),c.a.createElement("section",{className:"newsletter"},c.a.createElement(x,null)))}),C=(a(47),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={value:"",isEmpty:!0,sending:!1},a.handleChange=function(e){a.setState({value:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.state.value.length>=20?(a.setState({value:"",sending:!0}),setTimeout(function(){a.setState({sending:!1})},3e3)):alert("Wiadomo\u015b\u0107 powinna zawiera\u0107 co najmniej 20 znak\xf3w")},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"contact"},c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("h2",null,"Napisz do nas"),c.a.createElement("textarea",{placeholder:"Wpisz wiadomo\u015b\u0107",value:this.state.value,onChange:this.handleChange}),this.state.sending?c.a.createElement("p",{style:{display:"block",float:"left",color:"#3c3c3c",fontWeight:400,height:"40px"}},"Wys\u0142ano wiadomo\u015b\u0107"):c.a.createElement("button",{className:"primary-btn-container"},c.a.createElement("div",{className:"primary-btn"},"Wy\u015blij"))),c.a.createElement(o.a,{when:this.state.value,message:"Masz niewype\u0142niony formularz. Czy na pewno chcesz op\xf3\u015bci\u0107 t\u0119 stron\u0119?"}))}}]),t}(n.Component)),q=function(){return c.a.createElement(o.c,{render:function(){return c.a.createElement(o.b,{to:"/login"})}})},A=function(){return c.a.createElement("div",{style:{fontSize:24,minHeight:"calc(100vh - 300px)",textAlign:"center"}},c.a.createElement("p",{style:{marginTop:120,color:"#3c3c3c"}},"404:( - page not found"))},z=function(){return c.a.createElement("div",null,c.a.createElement("label",{htmlFor:""},"Podaj login",c.a.createElement("input",{type:"text"})),c.a.createElement("label",{htmlFor:""},"Podaj has\u0142o",c.a.createElement("input",{type:"password"})),c.a.createElement("button",null,"Zaloguj"))},T=a(26),F=a.n(T),L=a(27),W=a.n(L),B=a(28),D=a.n(B),I=a(29),H=a.n(I),M=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={products:[{id:1,marke:"GRAND",model:"outlander",price:1999,visits:0,avalible:3,img:F.a,desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore id cupiditate iure nemo ipsum nulla, iste eos voluptatibus ea accusantium laudantium iusto consequatur deleniti! Error atque sed soluta quo vel."},{id:2,marke:"CROSS",model:"12s40c",price:899,visits:0,avalible:2,img:W.a,desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore id cupiditate iure nemo ipsum nulla, iste eos voluptatibus ea accusantium laudantium iusto consequatur deleniti! Error atque sed soluta quo vel."},{id:3,marke:"MOUNTAIN",model:"bike-4020c",price:1450,visits:0,avalible:1,img:D.a,desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore id cupiditate iure nemo ipsum nulla, iste eos voluptatibus ea accusantium laudantium iusto consequatur deleniti! Error atque sed soluta quo vel."},{id:4,marke:"HIGHWAY",model:"speed 100",price:870,visits:0,avalible:3,img:H.a,desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore id cupiditate iure nemo ipsum nulla, iste eos voluptatibus ea accusantium laudantium iusto consequatur deleniti! Error atque sed soluta quo vel."}]},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.e,null,c.a.createElement(o.c,{path:"/",exact:!0,component:function(){return c.a.createElement(N,{products:e.state.products})}}),c.a.createElement(o.c,{path:"/products",component:function(){return c.a.createElement(S,{products:e.state.products})}}),c.a.createElement(o.c,{path:"/product/:nazwa",component:O}),c.a.createElement(o.c,{path:"/contact",component:C}),c.a.createElement(o.c,{path:"/admin",component:q}),c.a.createElement(o.c,{path:"/login",component:z}),c.a.createElement(o.c,{component:A})))}}]),t}(n.Component),P=function(){return c.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},c.a.createElement("p",null,"Copyright by Biszczak"),c.a.createElement(o.c,{path:"/",exact:!0,render:function(e){return c.a.createElement("p",null,"Actual page:  Homepage")}}),c.a.createElement(o.c,{path:"/:page",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Actual page:  ",c.a.createElement("span",{style:{textTransform:"capitalize"}},e.match.params.page)))}}))},U=function(){return c.a.createElement(i.c,{to:"/",exact:!0,style:{color:"#fff",textDecoration:"none"}},c.a.createElement("div",{className:"logo"},c.a.createElement("h3",null,"Bikeshop")))},G=(a(48),[{name:"start",path:"/",exact:!0},{name:"products",path:"/products"},{name:"contact",path:"/contact"}]),J=function(){var e=G.map(function(e){return c.a.createElement("li",{key:e.name},c.a.createElement(i.c,{to:e.path,exact:!!e.exact&&e.exact},e.name))});return c.a.createElement("nav",{className:"main"},c.a.createElement("ul",null,e))},R=(a(49),a(50),[{name:"start",path:"/",exact:!0},{name:"products",path:"/products"},{name:"contact",path:"/contact"}]),Y=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={isActive:!1},a.toggleChecked=function(){a.state.isActive?a.setState({isActive:!1}):a.setState({isActive:!0})},a.menu=R.map(function(e){return c.a.createElement("li",{key:e.name},c.a.createElement(i.c,{onClick:a.toggleChecked,to:e.path,exact:!!e.exact&&e.exact},e.name))}),a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",className:"toggler",onChange:this.toggleChecked,checked:this.state.isActive}),c.a.createElement("div",{className:"hamburger"},c.a.createElement("div",null)),c.a.createElement("div",{className:"menu"},c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("ul",null,this.menu)))))}}]),t}(n.Component),$=function(){return c.a.createElement("div",{className:"top"},c.a.createElement("div",{className:"top-wrapper"},c.a.createElement(U,null),window.innerWidth<992?c.a.createElement(Y,null):c.a.createElement(J,null)))},Z=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(n.Component),K=Object(o.h)(Z);var Q=function(){return c.a.createElement(i.a,null,c.a.createElement(K,null,c.a.createElement("div",{className:"app"},c.a.createElement($,null),c.a.createElement("div",{className:"container"},c.a.createElement(o.c,{path:"/",exact:!0,component:s}),c.a.createElement("main",null,c.a.createElement("section",{className:"blog"},c.a.createElement(M,null))),c.a.createElement("footer",null,c.a.createElement(P,null))))))};r.a.render(c.a.createElement(Q,null),document.getElementById("root"))}]),[[31,1,2]]]);
//# sourceMappingURL=main.5bbc03b7.chunk.js.map