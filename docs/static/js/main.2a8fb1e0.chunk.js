(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{240:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(23),o=a.n(i),c=a(19),s=a.n(c),l=a(30),u=a(31),m=a(32),d=a(93),p=a(79),g=a(94),h=a(46),f=a(44),E=a(80),b=a.n(E),v=a(45),w=a.n(v),y=a(16),C=a.n(y),x=a(47),D=a.n(x),k=a(83),F=a.n(k),O=a(84),j=a.n(O),S=a(91),T=a.n(S),B=a(90),N=a.n(B),A=a(82),P=a.n(A),M=a(85),R=a.n(M),I=a(86),J=a.n(I),G=a(89),L=a.n(G),_=a(88),z=a.n(_),H=a(87),U=a.n(H),q=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={data:{}},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.dataProvider.getData();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.classes,t=this.state.data.releases&&this.state.data.releases.length&&this.state.data.releases[0].sprints,a=this.state.data,n=a.releases&&a.releases.length&&a.releases[0].name||"",i=a.releases&&a.releases.length&&new Date(a.releases[0].date).getTime()||(new Date).getTime(),o=(new Date).getTime(),c=Math.round((i-o)/36e5);Math.round(c/24);return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null),r.a.createElement("div",{className:e.layout},r.a.createElement("main",null,r.a.createElement(w.a,{className:e.mainFeaturedPost},r.a.createElement("div",{className:e.mainFeaturedPostContent},r.a.createElement(C.a,{align:"center",component:"h1",variant:"h3",color:"inherit",gutterBottom:!0},'Release "',n,'"" Countdown'),r.a.createElement(C.a,{align:"center",variant:"h3",color:"error",paragraph:!0},c," hours"))),r.a.createElement(P.a,{variant:"contained",color:"primary",className:e.button},"Primary"),r.a.createElement(D.a,{container:!0,direction:"row",spacing:40,className:e.cardGrid},t&&t.map(function(t){return r.a.createElement(D.a,{item:!0,key:t.name,xs:12,md:6},r.a.createElement(F.a,{className:e.card},r.a.createElement("div",{className:e.cardDetails},r.a.createElement(j.a,null,r.a.createElement(C.a,{component:"h2",variant:"h5"},t.name),r.a.createElement(C.a,{variant:"subtitle1",color:"textSecondary"},t.date),r.a.createElement(C.a,{variant:"subtitle1",paragraph:!0},r.a.createElement(R.a,null,t.goals.map(function(e){return r.a.createElement(J.a,{key:e.description},r.a.createElement(U.a,null,r.a.createElement(z.a,{onClick:function(){}})),r.a.createElement(L.a,{primary:e.description}))}))))),r.a.createElement(N.a,{xsDown:!0},r.a.createElement(T.a,{className:e.cardMedia,image:"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",title:"Image title"}))))})))),r.a.createElement("footer",{className:e.footer},r.a.createElement(C.a,{variant:"h6",align:"center",gutterBottom:!0},"Footer"),r.a.createElement(C.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"Something here to give the footer a purpose!")))}}]),t}(r.a.Component),K=Object(f.withStyles)(function(e){return{layout:Object(h.a)({width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(1100+3*e.spacing.unit*2),{width:1100,marginLeft:"auto",marginRight:"auto"}),toolbarMain:{borderBottom:"1px solid ".concat(e.palette.grey[300])},toolbarTitle:{flex:1},toolbarSecondary:{justifyContent:"space-between"},mainFeaturedPost:{backgroundColor:e.palette.grey[800],color:e.palette.common.white,marginBottom:4*e.spacing.unit},mainFeaturedPostContent:Object(h.a)({padding:"".concat(6*e.spacing.unit,"px")},e.breakpoints.up("md"),{paddingRight:0}),mainGrid:{marginTop:3*e.spacing.unit},card:{display:"flex"},cardDetails:{flex:1},cardMedia:{width:160},markdown:{padding:"".concat(3*e.spacing.unit,"px 0")},sidebarAboutBox:{padding:2*e.spacing.unit,backgroundColor:e.palette.grey[200]},sidebarSection:{marginTop:3*e.spacing.unit},footer:{backgroundColor:e.palette.background.paper,marginTop:8*e.spacing.unit,padding:"".concat(6*e.spacing.unit,"px 0")}}})(q),Q=a(92),V=a.n(Q),W=new(function(){function e(){Object(u.a)(this,e)}return Object(m.a)(e,[{key:"transformToData",value:function(e){return e||{}}},{key:"getData",value:function(){var e=Object(l.a)(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("localState")){e.next=6;break}return e.next=4,V.a.get("entries.json");case 4:return a=e.sent.data,e.abrupt("return",this.transformToData(a));case 6:return e.abrupt("return",this.transformToData(JSON.parse(t)));case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"saveData",value:function(e){localStorage.setItem("localState",JSON.stringify(e))}}]),e}());o.a.render(r.a.createElement(K,{dataProvider:W}),document.getElementById("root"))},95:function(e,t,a){e.exports=a(240)}},[[95,2,1]]]);
//# sourceMappingURL=main.2a8fb1e0.chunk.js.map