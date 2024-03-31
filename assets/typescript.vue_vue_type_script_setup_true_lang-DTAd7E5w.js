import{_ as b,f as p,r as n,o as u,Q as _,g as m,w as g,b as $,B as N,d as T,a as v,ag as h,s as D,c as f,F as S,z as A}from"./index-DQtG-xXj.js";import{d as c,a as y,b as L}from"./type-i2ooHU-F.js";const k=p({setup(){return{data:[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}],columns:[{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}]}}});function C(e,a,s,t,r,d){const o=n("pro-table");return u(),_(o,{data:e.data,columns:e.columns},null,8,["data","columns"])}const oe=b(k,[["render",C]]),z=p({setup(){const e=c([{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}]);return{data:[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}],columns:e}}});function B(e,a,s,t,r,d){const o=n("pro-table");return u(),_(o,{data:e.data,columns:e.columns},null,8,["data","columns"])}const se=b(z,[["render",B]]),V=p({setup(){const e=c([{label:"Break",prop:"b.c"},{label:"Object",prop:"b.d"},{label:"Array",prop:"d[0].e"}]);return{data:[{"b.c":"break nested value",b:{c:"nested value c in b",d:"nested value d in b"},d:[{e:"nested value in array"}]}],columns:e}}});function P(e,a,s,t,r,d){const o=n("pro-table");return u(),_(o,{data:e.data,columns:e.columns},null,8,["data","columns"])}const ne=b(V,[["render",P]]),U=p({setup(){const e=y({label:"#"}),a=c([{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}]),s=m([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]);return{index:e,data:s,columns:a}}});function M(e,a,s,t,r,d){const o=n("pro-table");return u(),_(o,{data:e.data,columns:e.columns,index:e.index},null,8,["data","columns","index"])}const te=b(U,[["render",M]]),O=p({setup(){const e=c([{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}]);return{data:m([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),columns:e}}});function j(e,a,s,t,r,d){const o=n("pro-table");return u(),_(o,{data:e.data,columns:e.columns,selection:""},null,8,["data","columns"])}const re=b(O,[["render",j]]),E=p({setup(){const e=c([{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}]);return{data:m([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),columns:e}}});function F(e,a,s,t,r,d){const o=n("pro-table");return u(),_(o,{data:e.data,columns:e.columns},{expand:g(({row:l})=>[$(N(l),1)]),_:1},8,["data","columns"])}const de=b(E,[["render",F]]),I=p({setup(){const e=L({label:"Operations",align:"center"}),a=c([{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}]),s=m([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]);return{menu:e,data:s,columns:a}}});function H(e,a,s,t,r,d){const o=n("el-button"),l=n("pro-table");return u(),_(l,{data:e.data,columns:e.columns,menu:e.menu},{menu:g(({size:i})=>[T(o,{size:i,type:"primary",link:""},{default:g(()=>[$(" Detail ")]),_:2},1032,["size"])]),_:1},8,["data","columns","menu"])}const le=b(I,[["render",H]]),Q=p({setup(){const e=c([{label:"Date",prop:"date",render:"--"},{label:"Name",prop:"name"},{label:"Address",prop:"address",render:s=>h("em",null,s.address)}]);return{data:m([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),columns:e}}});function q(e,a,s,t,r,d){const o=n("el-tag"),l=n("pro-table");return u(),_(l,{data:e.data,columns:e.columns},{"table-name-header":g(({column:i})=>[v("s",null,N(i.label),1)]),"table-name":g(({row:i,size:G})=>[T(o,{size:G},{default:g(()=>[$(N(i==null?void 0:i.name),1)]),_:2},1032,["size"])]),_:1},8,["data","columns"])}const me=b(Q,[["render",q]]),w=p({setup(){const e=m(1),a=m(10),s=m(50),t=c([{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}]),r=m([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]);function d(){r.value.sort(()=>Math.random()>=.5?1:-1)}return{currentPage:e,pageSize:a,total:s,data:r,columns:t,load:d}}});function J(e,a,s,t,r,d){const o=n("pro-table");return u(),_(o,{"current-page":e.currentPage,"onUpdate:currentPage":a[0]||(a[0]=l=>e.currentPage=l),"page-size":e.pageSize,"onUpdate:pageSize":a[1]||(a[1]=l=>e.pageSize=l),data:e.data,columns:e.columns,total:e.total,onLoad:e.load},null,8,["current-page","page-size","data","columns","total","onLoad"])}const ce=b(w,[["render",J]]),K=p({setup(){const e=m(!0),a=D(()=>c([{label:"Date",prop:"date",hide:e.value},{label:"Name",prop:"name"},{label:"Address",prop:"address"}]));return{hide:e,data:[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}],columns:a}}});function R(e,a,s,t,r,d){const o=n("el-switch"),l=n("pro-table");return u(),f(S,null,[T(o,{modelValue:e.hide,"onUpdate:modelValue":a[0]||(a[0]=i=>e.hide=i)},null,8,["modelValue"]),T(l,{data:e.data,columns:e.columns},null,8,["data","columns"])],64)}const pe=b(K,[["render",R]]),W=p({setup(){const e=c([{label:"Date",prop:"date"},{label:"User",children:[{label:"Name",prop:"name"},{label:"Address",prop:"address"}]}]);return{data:m([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),columns:e}}});function X(e,a,s,t,r,d){const o=n("pro-table");return u(),_(o,{data:e.data,columns:e.columns},null,8,["data","columns"])}const ue=b(W,[["render",X]]),Y=p({setup(){const e=m([]),a=m(c([]));return{data:e,columns:a,createTable:()=>{a.value=c([{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}])},createDict:()=>{e.value=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]},destroyTable:()=>{a.value=[],e.value=[]}}}}),Z={style:{"margin-bottom":"20px"}};function x(e,a,s,t,r,d){const o=n("el-button"),l=n("pro-table");return u(),f(S,null,[v("div",Z,[T(o,{type:"primary",onClick:e.createTable},{default:g(()=>[$(" Load Table ")]),_:1},8,["onClick"]),T(o,{type:"info",onClick:e.createDict},{default:g(()=>[$(" Load Dict ")]),_:1},8,["onClick"]),T(o,{type:"danger",onClick:e.destroyTable},{default:g(()=>[$(" Destroy ")]),_:1},8,["onClick"])]),T(l,{data:e.data,columns:e.columns},null,8,["data","columns"])],64)}const be=b(Y,[["render",x]]),_e=p({__name:"typescript",setup(e){const a=L({label:"Operations",align:"center"}),s=c([{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}]),t=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(r,d)=>{const o=n("pro-table");return u(),_(o,{data:t,columns:A(s),menu:A(a)},null,8,["columns","menu"])}}});export{oe as T,_e as _,se as a,ne as b,te as c,re as d,de as e,le as f,me as g,ce as h,pe as i,ue as j,be as k};
