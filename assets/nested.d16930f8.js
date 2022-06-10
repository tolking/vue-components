import{_}from"./index.899371e6.js";import{a2 as r,o as l,T as p,U as e,a5 as s,W as t,H as f,f as v,c as i,R as h}from"./modules-vue.f0caa3eb.js";const g={},C=s(" Content ");function x(a,n){const o=r("pro-card");return l(),p(o,{header:"header"},{default:e(()=>[C]),_:1})}var ve=_(g,[["render",x]]);const V={},b=s(" Always "),y=s(" Hover "),B=s(" Never ");function N(a,n){const o=r("pro-card");return l(),p(o,{gutter:40,ghost:"",style:{height:"80px"}},{default:e(()=>[t(o,{shadow:"always"},{default:e(()=>[b]),_:1}),t(o,{shadow:"hover"},{default:e(()=>[y]),_:1}),t(o,{shadow:"never"},{default:e(()=>[B]),_:1})]),_:1})}var we=_(V,[["render",N]]);const U=f({setup(){return{ghost:v(!0)}}}),k=s(" Content ");function H(a,n,o,w,m,$){const c=r("el-switch"),d=r("pro-card");return l(),i(h,null,[t(c,{modelValue:a.ghost,"onUpdate:modelValue":n[0]||(n[0]=u=>a.ghost=u)},null,8,["modelValue"]),t(d,{ghost:a.ghost},{default:e(()=>[k]),_:1},8,["ghost"])],64)}var me=_(U,[["render",H]]);const S={},T=s(" span-24 "),A=s(" span-12 "),D=s(" span-6 "),E=s(" span-12 "),F=s(" span-6 "),G=s(" span-6 "),L=s(" span-8 "),R=s(" auto "),W=s(" auto "),j=s(" span-8 "),q=s(" max-width-200px "),z=s(" auto "),I=s(" flex-0.4 "),J=s(" flex-1 ");function K(a,n){const o=r("pro-card");return l(),i(h,null,[t(o,{ghost:""},{default:e(()=>[t(o,{span:24,shadow:"never"},{default:e(()=>[T]),_:1}),t(o,{span:12,shadow:"never"},{default:e(()=>[A]),_:1}),t(o,{span:6,shadow:"never"},{default:e(()=>[D]),_:1})]),_:1}),t(o,{gutter:20,ghost:""},{default:e(()=>[t(o,{span:12,shadow:"never"},{default:e(()=>[E]),_:1}),t(o,{span:6,shadow:"never"},{default:e(()=>[F]),_:1}),t(o,{span:6,shadow:"never"},{default:e(()=>[G]),_:1})]),_:1}),t(o,{ghost:""},{default:e(()=>[t(o,{span:8,shadow:"never"},{default:e(()=>[L]),_:1}),t(o,{shadow:"never"},{default:e(()=>[R]),_:1})]),_:1}),t(o,{ghost:""},{default:e(()=>[t(o,{shadow:"never"},{default:e(()=>[W]),_:1}),t(o,{span:8,shadow:"never"},{default:e(()=>[j]),_:1})]),_:1}),t(o,{ghost:""},{default:e(()=>[t(o,{shadow:"never",style:{"max-width":"200px"}},{default:e(()=>[q]),_:1}),t(o,{shadow:"never"},{default:e(()=>[z]),_:1})]),_:1}),t(o,{ghost:""},{default:e(()=>[t(o,{shadow:"never",style:{flex:"0.4"}},{default:e(()=>[I]),_:1}),t(o,{shadow:"never"},{default:e(()=>[J]),_:1})]),_:1})],64)}var $e=_(S,[["render",K]]);const M=f({setup(){return{direction:v("row"),data:[{label:"row",value:"row"},{label:"row-reverse",value:"row-reverse"},{label:"column",value:"column"},{label:"column-reverse",value:"column-reverse"}]}}}),O=s(" span-12 "),P=s(" span-6 "),Q=s(" span-3 ");function X(a,n,o,w,m,$){const c=r("pro-radio-button"),d=r("pro-card");return l(),i(h,null,[t(c,{modelValue:a.direction,"onUpdate:modelValue":n[0]||(n[0]=u=>a.direction=u),data:a.data},null,8,["modelValue","data"]),t(d,{direction:a.direction},{default:e(()=>[t(d,{span:12,shadow:"never"},{default:e(()=>[O]),_:1}),t(d,{span:6,shadow:"never"},{default:e(()=>[P]),_:1}),t(d,{span:3,shadow:"never"},{default:e(()=>[Q]),_:1})]),_:1},8,["direction"])],64)}var ge=_(M,[["render",X]]);const Y=f({setup(){return{split:v(!0)}}}),Z=s(" span-8 "),ee=s(" top "),te=s(" bottom ");function oe(a,n,o,w,m,$){const c=r("el-switch"),d=r("pro-card");return l(),i(h,null,[t(c,{modelValue:a.split,"onUpdate:modelValue":n[0]||(n[0]=u=>a.split=u)},null,8,["modelValue"]),t(d,{split:a.split},{default:e(()=>[t(d,{span:8,shadow:"never"},{default:e(()=>[Z]),_:1}),t(d,{split:a.split,shadow:"never",direction:"column"},{default:e(()=>[t(d,{shadow:"never"},{default:e(()=>[ee]),_:1}),t(d,{shadow:"never"},{default:e(()=>[te]),_:1})]),_:1},8,["split"])]),_:1},8,["split"])],64)}var Ce=_(Y,[["render",oe]]);const se={},ae=s(" aside "),ne=s(" span-3 "),de=s(" span-3 "),re=s(" auto "),_e=s(" card-1 "),le=s(" card-2 "),ce=s(" card-3 "),ue=s(" auto "),ie=s(" auto ");function he(a,n){const o=r("pro-card");return l(),p(o,{split:""},{default:e(()=>[t(o,{xs:10,sm:8,md:6,lg:4,header:"title"},{default:e(()=>[ae]),_:1}),t(o,{direction:"column"},{default:e(()=>[t(o,{gutter:20,shadow:"never",ghost:""},{default:e(()=>[t(o,{span:3,shadow:"never"},{default:e(()=>[ne]),_:1}),t(o,{span:3,shadow:"never"},{default:e(()=>[de]),_:1}),t(o,{shadow:"never"},{default:e(()=>[re]),_:1})]),_:1}),t(o,{shadow:"never",direction:"column",split:"",style:{"margin-top":"12px"}},{default:e(()=>[t(o,{shadow:"never"},{default:e(()=>[_e]),_:1}),t(o,{shadow:"never"},{default:e(()=>[le]),_:1}),t(o,{shadow:"never"},{default:e(()=>[ce]),_:1})]),_:1}),t(o,{header:"header",shadow:"never",split:"",style:{"margin-top":"12px"}},{default:e(()=>[t(o,{shadow:"never"},{default:e(()=>[ue]),_:1}),t(o,{shadow:"never"},{default:e(()=>[ie]),_:1})]),_:1})]),_:1})]),_:1})}var xe=_(se,[["render",he]]);export{ve as C,we as a,me as b,$e as c,ge as d,Ce as e,xe as f};
