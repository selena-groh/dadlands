(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,a,t){e.exports=t.p+"static/media/lawToken.5bca5381.png"},function(e,a,t){e.exports=t.p+"static/media/chaosToken.ab6f094e.png"},,,,function(e,a,t){e.exports=t(14)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(5),s=t.n(o),c=t(6),r=t(1),u=t(2),m=t.n(u),i=t(3),p=t.n(i);t(12);const k={CHANGE_LAW:"CHANGE_LAW",CHANGE_CHAOS:"CHANGE_CHAOS",PULL_TOKEN:"PULL_TOKEN",LOADING:"LOADING"};var d=()=>{const e=Object(n.useReducer)((e,a)=>{switch(a.type){case k.CHANGE_LAW:return Object(r.a)({},e,{lawTokens:Number(a.value)});case k.CHANGE_CHAOS:return Object(r.a)({},e,{chaosTokens:Number(a.value)});case k.PULL_TOKEN:const t=e.lawTokens+e.chaosTokens,n=Math.floor(Math.random()*t)+1<=e.lawTokens?"LAW":"CHAOS";return Object(r.a)({},e,{pulledToken:n,isLoading:!1});case k.LOADING:return Object(r.a)({},e,{isLoading:!0});default:return e}},{lawTokens:1,chaosTokens:1,pulledToken:"",isLoading:!1}),a=Object(c.a)(e,2),t=a[0],o=a[1];return l.a.createElement("div",{className:"Puller"},l.a.createElement("div",{className:"TokenInputs"},l.a.createElement("div",{className:"TokenInput"},l.a.createElement("label",{className:"inputLabel",htmlFor:"lawTokens"},"Number of Law Tokens:"),l.a.createElement("div",{className:"TokenInputBox"},l.a.createElement("input",{type:"number",id:"lawTokens",name:"lawTokens",min:"0",max:"100",value:t.lawTokens,onChange:e=>{o({type:k.CHANGE_LAW,value:e.target.value})}}),l.a.createElement("img",{alt:"law token",src:m.a,width:50,height:50}))),l.a.createElement("div",{className:"TokenInput"},l.a.createElement("label",{htmlFor:"chaosTokens"},"Number of Chaos Tokens:"),l.a.createElement("div",{className:"TokenInputBox"},l.a.createElement("input",{type:"number",id:"chaosTokens",name:"chaosTokens",min:"0",max:"100",value:t.chaosTokens,onChange:e=>{o({type:k.CHANGE_CHAOS,value:e.target.value})}}),l.a.createElement("img",{alt:"chaos token",src:p.a,width:50,height:50})))),l.a.createElement("div",{className:"buttonWrapper"},l.a.createElement("button",{type:"button",onClick:()=>{o({type:k.LOADING}),setTimeout(function(){o({type:k.PULL_TOKEN})},500)}},"Pull Token")),l.a.createElement("div",{className:"Results"},l.a.createElement("h2",null,"You pulled..."),t.isLoading||""===t.pulledToken?l.a.createElement("p",{className:"Results-tokenType"},"..."):l.a.createElement("div",null,l.a.createElement("img",{alt:"LAW"===t.pulledToken?"law token":"chaos token",src:"LAW"===t.pulledToken?m.a:p.a,width:150,height:150}),l.a.createElement("p",{className:"Results-tokenType ".concat("LAW"===t.pulledToken?"Results-law":"Results-chaos")},t.pulledToken))))};t(13);function T(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Dadlands"),l.a.createElement(d,null))}const E=document.getElementById("root");s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(T,null)),E)}],[[7,1,2]]]);
//# sourceMappingURL=main.7dc71875.chunk.js.map