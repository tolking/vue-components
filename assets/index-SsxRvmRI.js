import{q as U,f as S,u as le,s as d,t as M,o as p,c as $,v as Z,d as I,w as N,x as A,a as k,y as f,z as n,A as j,B as q,C as G,T as J,D as K,E as re,G as ie,H as O,I as ue,J as Q,K as ce,L as de,g as E,M as F,N as pe,j as fe,O as me,P as ge,Q as h,R as T,S as H,U as ye,F as ve,V as Ce,W as he,X as be,Y as Te,Z as P,$ as R,a0 as W,a1 as z,a2 as V,a3 as Ne,a4 as Se}from"./index-DQtG-xXj.js";const we=U({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"},showZero:{type:Boolean,default:!0},color:String}),Be=["textContent"],Ee=S({name:"ElBadge"}),Me=S({...Ee,props:we,setup(s,{expose:t}){const e=s,a=le("badge"),o=d(()=>e.isDot?"":M(e.value)&&M(e.max)?e.max<e.value?`${e.max}+`:e.value===0&&!e.showZero?"":`${e.value}`:`${e.value}`);return t({content:o}),(i,u)=>(p(),$("div",{class:f(n(a).b())},[Z(i.$slots,"default"),I(J,{name:`${n(a).namespace.value}-zoom-in-center`,persisted:""},{default:N(()=>[A(k("sup",{class:f([n(a).e("content"),n(a).em("content",i.type),n(a).is("fixed",!!i.$slots.default),n(a).is("dot",i.isDot)]),style:j({backgroundColor:i.color}),textContent:q(n(o))},null,14,Be),[[G,!i.hidden&&(n(o)||i.isDot)]])]),_:1},8,["name"])],2))}});var $e=K(Me,[["__file","badge.vue"]]);const ke=re($e),X=["success","info","warning","error"],r=ue({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",plain:!1,offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:Q?document.body:void 0}),ze=U({customClass:{type:String,default:r.customClass},center:{type:Boolean,default:r.center},dangerouslyUseHTMLString:{type:Boolean,default:r.dangerouslyUseHTMLString},duration:{type:Number,default:r.duration},icon:{type:ie,default:r.icon},id:{type:String,default:r.id},message:{type:O([String,Object,Function]),default:r.message},onClose:{type:O(Function),default:r.onClose},showClose:{type:Boolean,default:r.showClose},type:{type:String,values:X,default:r.type},plain:{type:Boolean,default:r.plain},offset:{type:Number,default:r.offset},zIndex:{type:Number,default:r.zIndex},grouping:{type:Boolean,default:r.grouping},repeatNum:{type:Number,default:r.repeatNum}}),Ie={destroy:()=>!0},c=ce([]),xe=s=>{const t=c.findIndex(o=>o.id===s),e=c[t];let a;return t>0&&(a=c[t-1]),{current:e,prev:a}},_e=s=>{const{prev:t}=xe(s);return t?t.vm.exposed.bottom.value:0},Le=(s,t)=>c.findIndex(a=>a.id===s)>0?16:t,De=["id"],Oe=["innerHTML"],Fe=S({name:"ElMessage"}),He=S({...Fe,props:ze,emits:Ie,setup(s,{expose:t}){const e=s,{Close:a}=he,{ns:o,zIndex:i}=de("message"),{currentZIndex:u,nextZIndex:m}=i,g=E(),v=E(!1),C=E(0);let w;const ee=d(()=>e.type?e.type==="error"?"danger":e.type:"info"),se=d(()=>{const l=e.type;return{[o.bm("icon",l)]:l&&F[l]}}),x=d(()=>e.icon||F[e.type]||""),ne=d(()=>_e(e.id)),_=d(()=>Le(e.id,e.offset)+ne.value),te=d(()=>C.value+_.value),oe=d(()=>({top:`${_.value}px`,zIndex:u.value}));function B(){e.duration!==0&&({stop:w}=be(()=>{b()},e.duration))}function L(){w==null||w()}function b(){v.value=!1}function ae({code:l}){l===Te.esc&&b()}return pe(()=>{B(),m(),v.value=!0}),fe(()=>e.repeatNum,()=>{L(),B()}),me(document,"keydown",ae),ge(g,()=>{C.value=g.value.getBoundingClientRect().height}),t({visible:v,bottom:te,close:b}),(l,D)=>(p(),h(J,{name:n(o).b("fade"),onBeforeLeave:l.onClose,onAfterLeave:D[0]||(D[0]=Ae=>l.$emit("destroy")),persisted:""},{default:N(()=>[A(k("div",{id:l.id,ref_key:"messageRef",ref:g,class:f([n(o).b(),{[n(o).m(l.type)]:l.type},n(o).is("center",l.center),n(o).is("closable",l.showClose),n(o).is("plain",l.plain),l.customClass]),style:j(n(oe)),role:"alert",onMouseenter:L,onMouseleave:B},[l.repeatNum>1?(p(),h(n(ke),{key:0,value:l.repeatNum,type:n(ee),class:f(n(o).e("badge"))},null,8,["value","type","class"])):T("v-if",!0),n(x)?(p(),h(n(H),{key:1,class:f([n(o).e("icon"),n(se)])},{default:N(()=>[(p(),h(ye(n(x))))]),_:1},8,["class"])):T("v-if",!0),Z(l.$slots,"default",{},()=>[l.dangerouslyUseHTMLString?(p(),$(ve,{key:1},[T(" Caution here, message could've been compromised, never use user's input as message "),k("p",{class:f(n(o).e("content")),innerHTML:l.message},null,10,Oe)],2112)):(p(),$("p",{key:0,class:f(n(o).e("content"))},q(l.message),3))]),l.showClose?(p(),h(n(H),{key:2,class:f(n(o).e("closeBtn")),onClick:Ce(b,["stop"])},{default:N(()=>[I(n(a))]),_:1},8,["class","onClick"])):T("v-if",!0)],46,De),[[G,v.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Pe=K(He,[["__file","message.vue"]]);let Re=1;const Y=s=>{const t=!s||R(s)||W(s)||z(s)?{message:s}:s,e={...r,...t};if(!e.appendTo)e.appendTo=document.body;else if(R(e.appendTo)){let a=document.querySelector(e.appendTo);Ne(a)||(a=document.body),e.appendTo=a}return e},Ve=s=>{const t=c.indexOf(s);if(t===-1)return;c.splice(t,1);const{handler:e}=s;e.close()},Ue=({appendTo:s,...t},e)=>{const a=`message_${Re++}`,o=t.onClose,i=document.createElement("div"),u={...t,id:a,onClose:()=>{o==null||o(),Ve(C)},onDestroy:()=>{V(null,i)}},m=I(Pe,u,z(u.message)||W(u.message)?{default:z(u.message)?u.message:()=>u.message}:null);m.appContext=e||y._context,V(m,i),s.appendChild(i.firstElementChild);const g=m.component,C={id:a,vnode:m,vm:g,handler:{close:()=>{g.exposed.visible.value=!1}},props:m.component.props};return C},y=(s={},t)=>{if(!Q)return{close:()=>{}};if(M(P.max)&&c.length>=P.max)return{close:()=>{}};const e=Y(s);if(e.grouping&&c.length){const o=c.find(({vnode:i})=>{var u;return((u=i.props)==null?void 0:u.message)===e.message});if(o)return o.props.repeatNum+=1,o.props.type=e.type,o.handler}const a=Ue(e,t);return c.push(a),a.handler};X.forEach(s=>{y[s]=(t={},e)=>{const a=Y(t);return y({...a,type:s},e)}});function Ze(s){for(const t of c)(!s||s===t.props.type)&&t.handler.close()}y.closeAll=Ze;y._context=null;const qe=Se(y,"$message");export{qe as E};
