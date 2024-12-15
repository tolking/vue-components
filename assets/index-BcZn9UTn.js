import{t as V,u as N,g as E,v as re,x as m,y as T,A,o as v,a as z,B as Z,e as _,w as B,C as j,b as I,D as C,E as s,G,H as q,I as J,T as K,J as Q,K as ie,L as ue,M as de,N as W,O as ce,P as pe,h as k,Q as F,R as fe,l as me,S as ge,U as ye,c as b,V as w,W as H,X as ve,F as Ce,Y as he,Z as be,$ as Te,a0 as Se,a1 as R,a2 as X,a3 as L,a4 as P,a5 as c,a6 as we,a7 as U,a8 as Be}from"./index-BypRYKmK.js";const Ne=V({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"},showZero:{type:Boolean,default:!0},color:String,badgeStyle:{type:N([String,Object,Array])},offset:{type:N(Array),default:[0,0]},badgeClass:{type:String}}),Ee=E({name:"ElBadge"}),Me=E({...Ee,props:Ne,setup(n,{expose:t}){const e=n,o=re("badge"),a=m(()=>e.isDot?"":T(e.value)&&T(e.max)?e.max<e.value?`${e.max}+`:`${e.value}`:`${e.value}`),p=m(()=>{var l,u,f,g,y;return[{backgroundColor:e.color,marginRight:A(-((u=(l=e.offset)==null?void 0:l[0])!=null?u:0)),marginTop:A((g=(f=e.offset)==null?void 0:f[1])!=null?g:0)},(y=e.badgeStyle)!=null?y:{}]});return t({content:a}),(l,u)=>(v(),z("div",{class:C(s(o).b())},[Z(l.$slots,"default"),_(K,{name:`${s(o).namespace.value}-zoom-in-center`,persisted:""},{default:B(()=>[j(I("sup",{class:C([s(o).e("content"),s(o).em("content",l.type),s(o).is("fixed",!!l.$slots.default),s(o).is("dot",l.isDot),s(o).is("hide-zero",!l.showZero&&e.value===0),l.badgeClass]),style:G(s(p)),textContent:q(s(a))},null,14,["textContent"]),[[J,!l.hidden&&(s(a)||l.isDot)]])]),_:1},8,["name"])],2))}});var $e=Q(Me,[["__file","badge.vue"]]);const ke=ie($e),Y=["success","info","warning","error"],i=de({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",plain:!1,offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:W?document.body:void 0}),ze=V({customClass:{type:String,default:i.customClass},center:{type:Boolean,default:i.center},dangerouslyUseHTMLString:{type:Boolean,default:i.dangerouslyUseHTMLString},duration:{type:Number,default:i.duration},icon:{type:ue,default:i.icon},id:{type:String,default:i.id},message:{type:N([String,Object,Function]),default:i.message},onClose:{type:N(Function),default:i.onClose},showClose:{type:Boolean,default:i.showClose},type:{type:String,values:Y,default:i.type},plain:{type:Boolean,default:i.plain},offset:{type:Number,default:i.offset},zIndex:{type:Number,default:i.zIndex},grouping:{type:Boolean,default:i.grouping},repeatNum:{type:Number,default:i.repeatNum}}),Ie={destroy:()=>!0},d=ce([]),Le=n=>{const t=d.findIndex(a=>a.id===n),e=d[t];let o;return t>0&&(o=d[t-1]),{current:e,prev:o}},_e=n=>{const{prev:t}=Le(n);return t?t.vm.exposed.bottom.value:0},xe=(n,t)=>d.findIndex(o=>o.id===n)>0?16:t,Oe=E({name:"ElMessage"}),De=E({...Oe,props:ze,emits:Ie,setup(n,{expose:t}){const e=n,{Close:o}=be,{ns:a,zIndex:p}=pe("message"),{currentZIndex:l,nextZIndex:u}=p,f=k(),g=k(!1),y=k(0);let M;const se=m(()=>e.type?e.type==="error"?"danger":e.type:"info"),ne=m(()=>{const r=e.type;return{[a.bm("icon",r)]:r&&F[r]}}),x=m(()=>e.icon||F[e.type]||""),te=m(()=>_e(e.id)),O=m(()=>xe(e.id,e.offset)+te.value),oe=m(()=>y.value+O.value),ae=m(()=>({top:`${O.value}px`,zIndex:l.value}));function $(){e.duration!==0&&({stop:M}=Te(()=>{S()},e.duration))}function D(){M==null||M()}function S(){g.value=!1}function le({code:r}){r===Se.esc&&S()}return fe(()=>{$(),u(),g.value=!0}),me(()=>e.repeatNum,()=>{D(),$()}),ge(document,"keydown",le),ye(f,()=>{y.value=f.value.getBoundingClientRect().height}),t({visible:g,bottom:oe,close:S}),(r,Ue)=>(v(),b(K,{name:s(a).b("fade"),onBeforeLeave:r.onClose,onAfterLeave:Ve=>r.$emit("destroy"),persisted:""},{default:B(()=>[j(I("div",{id:r.id,ref_key:"messageRef",ref:f,class:C([s(a).b(),{[s(a).m(r.type)]:r.type},s(a).is("center",r.center),s(a).is("closable",r.showClose),s(a).is("plain",r.plain),r.customClass]),style:G(s(ae)),role:"alert",onMouseenter:D,onMouseleave:$},[r.repeatNum>1?(v(),b(s(ke),{key:0,value:r.repeatNum,type:s(se),class:C(s(a).e("badge"))},null,8,["value","type","class"])):w("v-if",!0),s(x)?(v(),b(s(H),{key:1,class:C([s(a).e("icon"),s(ne)])},{default:B(()=>[(v(),b(ve(s(x))))]),_:1},8,["class"])):w("v-if",!0),Z(r.$slots,"default",{},()=>[r.dangerouslyUseHTMLString?(v(),z(Ce,{key:1},[w(" Caution here, message could've been compromised, never use user's input as message "),I("p",{class:C(s(a).e("content")),innerHTML:r.message},null,10,["innerHTML"])],2112)):(v(),z("p",{key:0,class:C(s(a).e("content"))},q(r.message),3))]),r.showClose?(v(),b(s(H),{key:2,class:C(s(a).e("closeBtn")),onClick:he(S,["stop"])},{default:B(()=>[_(s(o))]),_:1},8,["class","onClick"])):w("v-if",!0)],46,["id"]),[[J,g.value]])]),_:3},8,["name","onBeforeLeave","onAfterLeave"]))}});var Ae=Q(De,[["__file","message.vue"]]);let Fe=1;const ee=n=>{const t=!n||R(n)||X(n)||L(n)?{message:n}:n,e={...i,...t};if(!e.appendTo)e.appendTo=document.body;else if(R(e.appendTo)){let o=document.querySelector(e.appendTo);we(o)||(o=document.body),e.appendTo=o}return P(c.grouping)&&!e.grouping&&(e.grouping=c.grouping),T(c.duration)&&e.duration===3e3&&(e.duration=c.duration),T(c.offset)&&e.offset===16&&(e.offset=c.offset),P(c.showClose)&&!e.showClose&&(e.showClose=c.showClose),e},He=n=>{const t=d.indexOf(n);if(t===-1)return;d.splice(t,1);const{handler:e}=n;e.close()},Re=({appendTo:n,...t},e)=>{const o=`message_${Fe++}`,a=t.onClose,p=document.createElement("div"),l={...t,id:o,onClose:()=>{a==null||a(),He(y)},onDestroy:()=>{U(null,p)}},u=_(Ae,l,L(l.message)||X(l.message)?{default:L(l.message)?l.message:()=>l.message}:null);u.appContext=e||h._context,U(u,p),n.appendChild(p.firstElementChild);const f=u.component,y={id:o,vnode:u,vm:f,handler:{close:()=>{f.exposed.visible.value=!1}},props:u.component.props};return y},h=(n={},t)=>{if(!W)return{close:()=>{}};const e=ee(n);if(e.grouping&&d.length){const a=d.find(({vnode:p})=>{var l;return((l=p.props)==null?void 0:l.message)===e.message});if(a)return a.props.repeatNum+=1,a.props.type=e.type,a.handler}if(T(c.max)&&d.length>=c.max)return{close:()=>{}};const o=Re(e,t);return d.push(o),o.handler};Y.forEach(n=>{h[n]=(t={},e)=>{const o=ee(t);return h({...o,type:n},e)}});function Pe(n){for(const t of d)(!n||n===t.props.type)&&t.handler.close()}h.closeAll=Pe;h._context=null;const je=Be(h,"$message");export{je as E};
