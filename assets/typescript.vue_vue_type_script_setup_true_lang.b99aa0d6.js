import{_ as m}from"./index.fe605509.js";import{J as d,ag as a,o as c,U as u,b as h,c as C,X as _,S,V as p,a7 as g,Z as A,a as v,af as D,u as V}from"./modules-vue.7cd3883b.js";import{d as b}from"./type.70898d0d.js";import{a as B,d as L}from"./type.09d0cb13.js";const T=d({setup(){return{columns:[{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}],detail:{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"}}}});function z(e,o,n,l,t,r){const s=a("pro-descriptions");return c(),u(s,{columns:e.columns,detail:e.detail},null,8,["columns","detail"])}const H=m(T,[["render",z]]),G=d({setup(){return{columns:b([{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}]),detail:{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"}}}});function k(e,o,n,l,t,r){const s=a("pro-descriptions");return c(),u(s,{columns:e.columns,detail:e.detail},null,8,["columns","detail"])}const I=m(G,[["render",k]]),w=d({setup(){return{columns:b([{label:"A",prop:"a"},{label:"B",prop:"b.c"},{label:"C",prop:"b.d"},{label:"D",prop:"d[0].e"}]),detail:{a:"a value","b.c":"break nested value",b:{c:"nested value c in b",d:"nested value d in b"},d:[{e:"nested value in array"}]}}}});function y(e,o,n,l,t,r){const s=a("pro-descriptions");return c(),u(s,{columns:e.columns,detail:e.detail,column:1},null,8,["columns","detail"])}const K=m(w,[["render",y]]),F=d({setup(){const e=h({border:!0,align:"right",labelAlign:"left"}),o=[{value:"left",label:"left"},{value:"center",label:"center"},{value:"right",label:"right"}],n=B([{label:"border",prop:"border",component:"el-switch"},{label:"align",prop:"align",component:"pro-radio-button",props:{data:o}},{label:"label-align",prop:"labelAlign",component:"pro-radio-button",props:{data:o}}]),l=L({submit:!1,reset:!1}),t=b([{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}]);return{form:e,formColumns:n,menu:l,columns:t,detail:{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"}}}});function U(e,o,n,l,t,r){const s=a("pro-form"),f=a("pro-descriptions");return c(),C(S,null,[_(s,{modelValue:e.form,"onUpdate:modelValue":o[0]||(o[0]=$=>e.form=$),columns:e.formColumns,menu:e.menu,"label-width":"100px"},null,8,["modelValue","columns","menu"]),_(f,{columns:e.columns,detail:e.detail,border:e.form.border,align:e.form.align,"label-align":e.form.labelAlign},null,8,["columns","detail","border","align","label-align"])],64)}const O=m(F,[["render",U]]),E=d({setup(){return{columns:b([{label:"Date",prop:"date",render:n=>D("em",n.date),renderLabel:n=>D("em",n.label)},{label:"Name",prop:"name"},{label:"Address",prop:"address"}]),detail:{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"}}}}),J=v("span",null,"title",-1);function M(e,o,n,l,t,r){const s=a("el-button"),f=a("el-tag"),$=a("pro-descriptions");return c(),u($,{columns:e.columns,detail:e.detail,border:"",size:"small"},{title:p(()=>[J]),extra:p(({size:i})=>[_(s,{size:i},{default:p(()=>[g(" extra ")]),_:2},1032,["size"])]),"detail-name":p(({item:i,size:N})=>[_(f,{size:N},{default:p(()=>[g(A(i.name),1)]),_:2},1032,["size"])]),"detail-name-label":p(({item:i})=>[v("span",null,A(i.label)+":",1)]),_:1},8,["columns","detail"])}const P=m(E,[["render",M]]),Q=d({__name:"typescript",setup(e){const o=b([{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}]),n={date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"};return(l,t)=>{const r=a("pro-descriptions");return c(),u(r,{columns:V(o),detail:n},null,8,["columns"])}}});export{H as D,Q as _,I as a,K as b,O as c,P as d};
