import{d as f,s as t,H as g,o as A,z as S,a as u,M as o,F as k,a3 as d,Q as s,L as v,W as L}from"./modules-vue.9811d525.js";const T=v("i",{class:"el-icon-time"},null,-1),D=f({setup(U){const b=t({label:"#",index:n=>n+10}),x=t({label:"Menu",align:"right"}),z=t([{label:"Date",prop:"date",sortable:!0},{label:"Name",prop:"name",render:n=>L("b",null,"-"+n.name)},{label:"Address",prop:"address"}]),C=t([{label:"Date",prop:"date"},{label:"User",prop:"user",children:[{label:"Name",prop:"name"},{label:"Address",prop:"address"}]}]),m=50,l=t(1),r=t(10),c=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];function p(n){console.log(n)}return(n,a)=>{const N=g("el-button"),i=g("pro-table");return A(),S(k,null,[u(i,{"current-page":l.value,"onUpdate:current-page":a[0]||(a[0]=e=>l.value=e),"page-size":r.value,"onUpdate:page-size":a[1]||(a[1]=e=>r.value=e),data:c,columns:z.value,total:m,index:b.value,menu:x.value,selection:"",align:"center",size:"small",onCellClick:p,onCurrentChange:p},{expand:o(({row:e})=>[d(s(e),1)]),"date-header":o(({column:e})=>[T,v("span",null,s(e.label),1)]),date:o(({row:e})=>[d(" - "+s(e.date)+" - ",1)]),menu:o(({size:e,row:_})=>[u(N,{size:e,type:"text",onClick:G=>p(_)},{default:o(()=>[d(" test"+s(e),1)]),_:2},1032,["size","onClick"])]),_:1},8,["current-page","page-size","columns","index","menu"]),u(i,{"current-page":l.value,"onUpdate:current-page":a[2]||(a[2]=e=>l.value=e),"page-size":r.value,"onUpdate:page-size":a[3]||(a[3]=e=>r.value=e),data:c,columns:C.value,total:m},{name:o(({row:e})=>[d(" - "+s(e.name)+" - ",1)]),_:1},8,["current-page","page-size","columns"])],64)}}});export{D as default};
