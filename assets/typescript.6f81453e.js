import{_ as m}from"./index.36091b67.js";import{d,J as s,o as c,Q as u,j as D,c as N,T as _,O as h,R as p,a0 as g,V as $,a as v,u as C}from"./modules-vue.77af090d.js";import{a as S,d as T}from"./type.09d0cb13.js";const V=d({setup(){return{columns:[{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}],detail:{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"}}}});function B(e,o,a,l,t,r){const n=s("pro-descriptions");return c(),u(n,{columns:e.columns,detail:e.detail},null,8,["columns","detail"])}var R=m(V,[["render",B]]);const z=d({setup(){return{columns:[{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}],detail:{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"}}}});function G(e,o,a,l,t,r){const n=s("pro-descriptions");return c(),u(n,{columns:e.columns,detail:e.detail},null,8,["columns","detail"])}var U=m(z,[["render",G]]);const L=d({setup(){return{columns:[{label:"A",prop:"a"},{label:"B",prop:"b.c"},{label:"C",prop:"b.d"},{label:"D",prop:"d[0].e"}],detail:{a:"a value","b.c":"break nested value",b:{c:"nested value c in b",d:"nested value d in b"},d:[{e:"nested value in array"}]}}}});function k(e,o,a,l,t,r){const n=s("pro-descriptions");return c(),u(n,{columns:e.columns,detail:e.detail,column:1},null,8,["columns","detail"])}var q=m(L,[["render",k]]);const w=d({setup(){const e=D({border:!0,align:"right",labelAlign:"left"}),o=[{value:"left",label:"left"},{value:"center",label:"center"},{value:"right",label:"right"}],a=S([{label:"border",prop:"border",component:"el-switch"},{label:"align",prop:"align",component:"pro-radio-button",props:{data:o}},{label:"label-align",prop:"labelAlign",component:"pro-radio-button",props:{data:o}}]),l=T({submit:!1,reset:!1}),t=[{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}];return{form:e,formColumns:a,menu:l,columns:t,detail:{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"}}}});function F(e,o,a,l,t,r){const n=s("pro-form"),b=s("pro-descriptions");return c(),N(h,null,[_(n,{modelValue:e.form,"onUpdate:modelValue":o[0]||(o[0]=f=>e.form=f),columns:e.formColumns,menu:e.menu,"label-width":"100px"},null,8,["modelValue","columns","menu"]),_(b,{columns:e.columns,detail:e.detail,border:e.form.border,align:e.form.align,"label-align":e.form.labelAlign},null,8,["columns","detail","border","align","label-align"])],64)}var H=m(w,[["render",F]]);const y=d({setup(){return{columns:[{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}],detail:{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"}}}}),j=v("span",null,"title",-1),E=g(" extra ");function J(e,o,a,l,t,r){const n=s("el-button"),b=s("el-tag"),f=s("pro-descriptions");return c(),u(f,{columns:e.columns,detail:e.detail,border:"",size:"small"},{title:p(()=>[j]),extra:p(({size:i})=>[_(n,{size:i},{default:p(()=>[E]),_:2},1032,["size"])]),name:p(({detail:i,size:A})=>[_(b,{size:A},{default:p(()=>[g($(i.name),1)]),_:2},1032,["size"])]),"name-label":p(({item:i})=>[v("span",null,$(i.label)+":",1)]),_:1},8,["columns","detail"])}var I=m(y,[["render",J]]);const K=d({setup(e){const o=[{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}],a={date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"};return(l,t)=>{const r=s("pro-descriptions");return c(),u(r,{columns:C(o),detail:a},null,8,["columns"])}}});export{R as D,K as _,U as a,q as b,H as c,I as d};
