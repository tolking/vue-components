import{_ as p,i as g}from"./index.b59eace3.js";import{a2 as u,o as l,T as $,H as d,e as f,c as _,W as m,R as b,au as V,b as S,U as y,S as U,Q as v,Y as M}from"./modules-vue.6a42da1f.js";const k={};function z(e,o){const t=u("pro-menu");return l(),$(t,{class:"docs-menu"})}var Q=p(k,[["render",z]]);const C=d({setup(){return{mode:f("horizontal"),data:[{value:"vertical",label:"Vertical"},{value:"horizontal",label:"Horizontal"}]}}});function R(e,o,t,n,c,i){const a=u("pro-radio-button"),s=u("pro-menu");return l(),_(b,null,[m(a,{modelValue:e.mode,"onUpdate:modelValue":o[0]||(o[0]=r=>e.mode=r),data:e.data,style:{"margin-bottom":"16px"}},null,8,["modelValue","data"]),m(s,{mode:e.mode,class:"docs-menu"},null,8,["mode"])],64)}var W=p(C,[["render",R]]);const B=d({setup(){const e=V();return{routes:S(()=>{var n;const t=e.options.routes;return((n=t.find(c=>c.path==="/en-US/components/"))==null?void 0:n.children)||t})}}});function w(e,o,t,n,c,i){const a=u("pro-menu");return l(),$(a,{routes:e.routes,class:"docs-menu"},null,8,["routes"])}var Y=p(B,[["render",w]]);const H=d({setup(){const e=V(),o=[{path:"/en-US/components/layout",meta:{title:"Layout"}},{path:"https://github.com/tolking/element-pro-components",meta:{title:"Github"}},{path:"https://github.com/tolking/element-admin-template",meta:{title:"Template"}}];function t(n){g(n)?window.open(n):e.push(n)}return{routes:o,handleSelect:t}}});function D(e,o,t,n,c,i){const a=u("pro-menu");return l(),$(a,{routes:e.routes,router:!1,mode:"horizontal",class:"docs-menu",onSelect:e.handleSelect},null,8,["routes","onSelect"])}var j=p(H,[["render",D]]);const E=d({setup(){const e=f("vertical"),o=f(!1);return{mode:e,collapse:o,data:[{value:"vertical",label:"Vertical"},{value:"horizontal",label:"Horizontal"}],list:[{value:!0,label:"Expand"},{value:!1,label:"Collapse"}]}}});function F(e,o,t,n,c,i){const a=u("pro-radio-button"),s=u("pro-menu");return l(),_(b,null,[m(a,{modelValue:e.mode,"onUpdate:modelValue":o[0]||(o[0]=r=>e.mode=r),data:e.data,style:{"margin-bottom":"16px","margin-right":"16px"}},null,8,["modelValue","data"]),m(a,{modelValue:e.collapse,"onUpdate:modelValue":o[1]||(o[1]=r=>e.collapse=r),data:e.list,style:{"margin-bottom":"16px"}},null,8,["modelValue","data"]),m(s,{mode:e.mode,collapse:e.collapse,class:"docs-menu"},null,8,["mode","collapse"])],64)}var q=p(E,[["render",F],["__scopeId","data-v-58976d57"]]);const I=d({setup(){return{routes:[{path:"/en-US/components/menu",meta:{title:"FontIcon",icon:"el-icon-potato-strips"}},{path:"/en-US/components/menu",meta:{title:"Development",icon:"el-icon-cpu"}}]}}}),L={key:1};function N(e,o,t,n,c,i){const a=u("pro-menu");return l(),$(a,{routes:e.routes,class:"docs-menu"},{default:y(s=>{var r,h;return[(r=s.meta)!=null&&r.icon?(l(),_("i",{key:0,class:U(s.meta.icon)},null,2)):v("",!0),(h=s.meta)!=null&&h.title?(l(),_("span",L,M(s.meta.title),1)):v("",!0)]}),_:1},8,["routes"])}var A=p(I,[["render",N]]);export{Q as M,W as a,Y as b,j as c,q as d,A as e};
