import{_ as d}from"./index.86179023.js";import{d as g,l as a,G as m,o as b,c as _,P as r,M as u,K as v,$ as C}from"./modules-vue.72f0591a.js";const V=g({setup(){const o=a({}),e=a([{label:"Name",prop:"name",component:"el-input"}]),l=a(!0);return{form:o,columns:e,toggle:l,locale1:{name:"en",pro:{form:{submit:"Submit",reset:"Reset"}}},locale2:{name:"zh-cn",pro:{form:{submit:"\u63D0 \u4EA4",reset:"\u91CD \u7F6E"}}},submit:(t,n,s)=>{console.log(o.value,n,s),setTimeout(()=>{t()},1e3)},toggleLocale:()=>{l.value=!l.value}}}}),$=C(" Switch lang ");function h(o,e,l,p,i,f){const c=m("el-button"),t=m("pro-form"),n=m("el-config-provider");return b(),_(v,null,[r(c,{type:"primary",style:{"margin-bottom":"20px"},onClick:o.toggleLocale},{default:u(()=>[$]),_:1},8,["onClick"]),r(n,{locale:o.toggle?o.locale1:o.locale2},{default:u(()=>[r(t,{modelValue:o.form,"onUpdate:modelValue":e[0]||(e[0]=s=>o.form=s),columns:o.columns,"label-width":"100px",onSubmit:o.submit},null,8,["modelValue","columns","onSubmit"])]),_:1},8,["locale"])],64)}var w=d(V,[["render",h]]);export{w as I};
