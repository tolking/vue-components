import{_ as l}from"./index.36091b67.js";import{J as c,o as i,Q as p,d,A as u,s as f,i as m,c as b,T as t,R as a,O as h,a0 as r}from"./modules-vue.77af090d.js";const C={};function T(e,o){const s=c("pro-tabs");return i(),p(s)}var O=l(C,[["render",T]]);const k=d({setup(){const e=u("tabs"),o=f({});m(()=>{s()});function s(){o.value.list=e.value.list}return{childTabs:o,asyncList:s}}}),$=r(" Close homepage "),v=r(" Close otherpage "),g=r(" async ");function x(e,o,s,y,B,R){const _=c("pro-tabs"),n=c("el-button");return i(),b(h,null,[t(_,{ref:"childTabs",style:{"margin-bottom":"15px"}},null,512),t(n,{onClick:o[0]||(o[0]=w=>e.childTabs.close("/en-US/guide/"))},{default:a(()=>[$]),_:1}),t(n,{onClick:e.childTabs.closeOther},{default:a(()=>[v]),_:1},8,["onClick"]),t(n,{onClick:e.asyncList},{default:a(()=>[g]),_:1},8,["onClick"])],64)}var V=l(k,[["render",x]]);export{O as T,V as a};
