import{d as A,h as o,$ as u,o as S,T,U as t,W as m,a3 as d,Y as l,a as v,ab as U}from"./modules-vue.6c123b62.js";const k=v("i",{class:"el-icon-time"},null,-1),D=A({setup(L){const b=o({label:"#",index:n=>n+10}),_=o({label:"Menu",align:"right"}),x=o([{label:"Date",prop:"date",sortable:!0},{label:"Name",prop:"name",render:n=>U("b",null,"-"+n.name)},{label:"Address",prop:"address"}]),N=o([{label:"Date",prop:"date"},{label:"User",prop:"user",children:[{label:"Name",prop:"name"},{label:"Address",prop:"address"}]}]),c=o(50),s=o(1),r=o(10),i=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];function p(n){console.log(n)}return(n,a)=>{const f=u("el-button"),g=u("pro-table"),z=u("pro-card");return S(),T(z,{shadow:"never"},{default:t(()=>[m(g,{"current-page":s.value,"onUpdate:current-page":a[0]||(a[0]=e=>s.value=e),"page-size":r.value,"onUpdate:page-size":a[1]||(a[1]=e=>r.value=e),data:i,columns:x.value,total:c.value,index:b.value,menu:_.value,selection:"",small:"",align:"center",size:"small",onCellClick:p,onLoad:p},{expand:t(({row:e})=>[d(l(e),1)]),"date-header":t(({column:e})=>[k,v("span",null,l(e.label),1)]),date:t(({row:e})=>[d(" - "+l(e.date)+" - ",1)]),menu:t(({size:e,row:C})=>[m(f,{size:e,text:"",onClick:G=>p(C)},{default:t(()=>[d(" test"+l(e),1)]),_:2},1032,["size","onClick"])]),_:1},8,["current-page","page-size","columns","total","index","menu"]),m(g,{"current-page":s.value,"onUpdate:current-page":a[2]||(a[2]=e=>s.value=e),"page-size":r.value,"onUpdate:page-size":a[3]||(a[3]=e=>r.value=e),data:i,columns:N.value,total:c.value},{name:t(({row:e})=>[d(" - "+l(e.name)+" - ",1)]),_:1},8,["current-page","page-size","columns","total"])]),_:1})}}});export{D as default};
