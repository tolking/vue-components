import{R as w}from"./modules-element-plus.d32f8c51.js";import{d as y,s as p,D as S,W as B,E as F,H as g,o as I,z as U,a as r,v as T,M as s,F as j,L as u,Q as c}from"./modules-vue.9811d525.js";const q=u("i",{class:"el-icon-time"},null,-1),z=u("span",null,"Slot",-1),N=y({setup(D){const i=p({}),d=p({}),h=p({submitText:"Create",submitProps:{type:"primary",loading:!1},reset:!1}),m=p({}),f=p({date:{required:!0,message:"please input data",trigger:"blur"},user:{required:!0,message:"please input user",trigger:"blur"}}),a=[{value:"Go",tag:"go",disabled:!0},{value:"JavaScript",tag:"javascript"},{value:"Python",tag:"python"}],v=[{label:"1",value:1,disabled:!0,children:[{value:11,label:"1-1",children:[{value:"111",label:"1-1-1"}]}]},{value:2,label:"2",children:[{value:21,label:"2-1",disabled:!0,children:[{value:211,label:"2-1-1"}]},{value:22,label:"2-2",children:[{value:221,label:"2-2-1",disabled:!0}]}]},{value:3,label:"3",children:[{value:31,label:"3-1",children:[{value:311,label:"3-1-1"}]},{value:32,label:"3-2",children:[{value:321,label:"3-2-1",disabled:!0}]}]}],x=S([{prop:"slot",component:"el-input"},{label:"input",prop:"ninput",component:"input",span:6,props:{onInput:e=>console.log("onInput",e),onChange:e=>console.log("onChange",e)}},{label:"textarea",prop:"ntextarea",component:"textarea",span:6},{label:"radio",prop:"nradio",component:"input",span:4,props:{type:"radio"}},{label:"checkbox",prop:"ncheckbox",component:"input",span:4,props:{type:"checkbox"}},{label:"color",prop:"ncolor",component:"input",span:4,props:{type:"color"}},{label:"el-input",prop:"input",component:"el-input",span:12,props:{clearable:!0,placeholder:"placeholder",onInput:e=>console.log("onInput",e),onChange:e=>console.log("onChange",e),slots:{prefix:()=>"P",suffix:B("b","suffix")}}},{label:"pro-input-tag",prop:"inputTag",component:"pro-input-tag",span:12,props:{placeholder:"Click the space after input"}},{label:"pro-autocomplete-tag",prop:"autocompleteTag",component:"pro-autocomplete-tag",span:8,props:{fetchSuggestions:k,placeholder:"Click the space after input"}},{label:"pro-radio",prop:"radio",component:"pro-radio",span:8,props:{data:a,config:{label:"tag"}}},{label:"pro-radio-button",prop:"radioButton",component:"pro-radio-button",span:8,props:{data:a,config:{label:"tag"}}},{label:"pro-checkbox",prop:"checkbox",component:"pro-checkbox",span:12,props:{data:a,config:{label:"tag"}}},{label:"pro-checkbox-button",prop:"checkboxButton",component:"pro-checkbox-button",xs:{span:24,offset:2},sm:{span:12,pull:2},md:12,props:{data:a,config:{label:"tag"}}},{label:"pro-select",prop:"select",component:"pro-select",span:12,props:{data:a,config:{label:"tag"}}},{label:"pro-tree-select",prop:"treeSelect",component:"pro-tree-select",span:12,props:{data:v,clearable:!0}},{label:"el-switch",prop:"switch",component:w,span:12}]),_=p([{label:"Date",prop:"date",component:"el-input",props:{onInput:e=>console.log("o--o",e)}},{label:"User",prop:"user",size:"mini",children:[{label:"Name",prop:"name",component:"el-input",span:12,rules:{required:!0,message:"please input name",trigger:"blur"}},{label:"Address",prop:"address",span:12}]}]),b=(e,l,t)=>{console.log(l,t),setTimeout(()=>{e()},1e3)};F(()=>{console.log(m.value)});function k(e,l){l(e?a.filter(t=>t.value.indexOf(e.toLowerCase())===0):a)}return(e,l)=>{const t=g("pro-form"),C=g("pro-input-tag");return I(),U(j,null,[r(t,{modelValue:i.value,"onUpdate:modelValue":l[0]||(l[0]=o=>i.value=o),columns:T(x),menu:h.value,"label-width":"180px",gutter:20,size:"small",onSubmit:b},{"slot-label":s(()=>[q,z]),slot:s(({item:o,value:n,setValue:V})=>[u("span",null,c(o)+" - "+c(n)+" - "+c(V),1)]),_:1},8,["modelValue","columns","menu"]),r(t,{ref:(o,n)=>{n.ruleForm=o,m.value=o},modelValue:d.value,"onUpdate:modelValue":l[1]||(l[1]=o=>d.value=o),columns:_.value,rules:f.value,"label-width":"180px",onSubmit:b},{address:s(({value:o,setValue:n})=>[r(C,{"model-value":o,"onUpdate:modelValue":n},null,8,["model-value","onUpdate:modelValue"])]),_:1},8,["modelValue","columns","rules"])],64)}}});export{N as default};
