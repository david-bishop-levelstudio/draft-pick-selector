(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{58:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var a=n(38),r=n.n(a),l=n(80),c=n(0),i=n.n(c),o=n(77),u=n(81),s=n(3),f=n(15),m=n(2),y=n(79);function E(){var e=Object(c.useState)(new Date),t=r()(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),E=r()(s,2),p=E[0],h=E[1],b=Object(c.useState)(!1),k=r()(b,2),v=k[0],w=k[1],d=Object(c.useState)(0),j=r()(d,2),z=j[0],F=j[1],O=[4,10,12];Object(c.useEffect)((function(){var e=setInterval((function(){a(new Date)}),1e3);return function(){return clearInterval(e)}}));return i.a.createElement(m.a,{style:S.container},i.a.createElement(f.a,{style:[S.time,S.text]},n.toLocaleTimeString()),i.a.createElement(m.a,{style:{flex:1}},v?i.a.createElement(m.a,{style:{flex:1}},i.a.createElement(g,{result:z}),i.a.createElement(y.a,{count:200,origin:{x:0,y:0}})):i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{style:[S.title,S.text]},"Picks Available"),i.a.createElement(m.a,{style:S.row},O.map((function(e){return i.a.createElement(x,{key:e,pick:e})}))),i.a.createElement(m.a,{style:{marginTop:100}},p?i.a.createElement(o.a,{size:"large"}):i.a.createElement(m.a,{style:{alignSelf:"center",width:320}},i.a.createElement(u.a,{title:"Randomly Select Pick",onPress:function(){h(!0),setTimeout((function(){var e=Math.floor(Math.random()*O.length);F(O[e]),h(!1),w(!0)}),1500)}})))),i.a.createElement(l.a,{style:"auto"})))}var g=function(e){var t=e.result;return t?i.a.createElement(m.a,{style:{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"center"}},i.a.createElement(f.a,{style:[S.text,S.title,S.result]},t),i.a.createElement(f.a,{style:[S.text,S.title,S.suffix]},p(t))):null},x=function(e){var t=e.pick,n=p(t);return i.a.createElement(f.a,{style:[S.pick,S.text]},t,i.a.createElement(f.a,{style:S.suffix},n))},p=function(e){switch(e){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},S=s.a.create({container:{marginVertical:60,flex:1,backgroundColor:"#fff",justifyContent:"center"},text:{textAlign:"center"},time:{fontFamily:"Futura",fontWeight:"bold",letterSpacing:2,fontSize:20},title:{textAlign:"center",fontFamily:"Futura",fontWeight:"normal",letterSpacing:1,fontSize:20,marginVertical:20},row:{flexDirection:"row",alignItems:"center",justifyContent:"center"},pick:{fontSize:30,marginHorizontal:10},suffix:{color:"#777"},result:{fontSize:150}})},82:function(e,t,n){e.exports=n(104)}},[[82,1,2]]]);
//# sourceMappingURL=app.29825915.chunk.js.map