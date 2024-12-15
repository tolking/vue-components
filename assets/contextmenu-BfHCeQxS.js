import{t as oe,L as se,u as V,g as h,P as ae,h as K,x as k,Q as O,R as S,S as re,o as f,c as p,w as v,C as R,b as C,D as $,E as d,G as j,W as G,X as J,V as H,H as A,B as ie,a as E,F as D,I as W,Y as le,e as b,T as ce,J as ue,ad as de,$ as fe,a0 as M,N as pe,a1 as F,a2 as Q,a6 as Z,a3 as me,ae as be,a7 as q,a8 as _e,_ as y,r as m,af as x,ag as B,d as z,ah as ve}from"./index-BypRYKmK.js";const X=["success","info","warning","error"],ye=oe({customClass:{type:String,default:""},dangerouslyUseHTMLString:Boolean,duration:{type:Number,default:4500},icon:{type:se},id:{type:String,default:""},message:{type:V([String,Object,Function]),default:""},offset:{type:Number,default:0},onClick:{type:V(Function),default:()=>{}},onClose:{type:V(Function),required:!0},position:{type:String,values:["top-right","top-left","bottom-right","bottom-left"],default:"top-right"},showClose:{type:Boolean,default:!0},title:{type:String,default:""},type:{type:String,values:[...X,""],default:""},zIndex:Number}),ge={destroy:()=>!0},Ce=h({name:"ElNotification"}),he=h({...Ce,props:ye,emits:ge,setup(e,{expose:t}){const n=e,{ns:o,zIndex:a}=ae("notification"),{nextZIndex:i,currentZIndex:r}=a,{Close:c}=de,l=K(!1);let u;const _=k(()=>{const s=n.type;return s&&O[n.type]?o.m(s):""}),g=k(()=>n.type&&O[n.type]||n.icon),I=k(()=>n.position.endsWith("right")?"right":"left"),ee=k(()=>n.position.startsWith("top")?"top":"bottom"),te=k(()=>{var s;return{[ee.value]:`${n.offset}px`,zIndex:(s=n.zIndex)!=null?s:r.value}});function w(){n.duration>0&&({stop:u}=fe(()=>{l.value&&L()},n.duration))}function U(){u==null||u()}function L(){l.value=!1}function ne({code:s}){s===M.delete||s===M.backspace?U():s===M.esc?l.value&&L():w()}return S(()=>{w(),i(),l.value=!0}),re(document,"keydown",ne),t({visible:l,close:L}),(s,Re)=>(f(),p(ce,{name:d(o).b("fade"),onBeforeLeave:s.onClose,onAfterLeave:je=>s.$emit("destroy"),persisted:""},{default:v(()=>[R(C("div",{id:s.id,class:$([d(o).b(),s.customClass,d(I)]),style:j(d(te)),role:"alert",onMouseenter:U,onMouseleave:w,onClick:s.onClick},[d(g)?(f(),p(d(G),{key:0,class:$([d(o).e("icon"),d(_)])},{default:v(()=>[(f(),p(J(d(g))))]),_:1},8,["class"])):H("v-if",!0),C("div",{class:$(d(o).e("group"))},[C("h2",{class:$(d(o).e("title")),textContent:A(s.title)},null,10,["textContent"]),R(C("div",{class:$(d(o).e("content")),style:j(s.title?void 0:{margin:0})},[ie(s.$slots,"default",{},()=>[s.dangerouslyUseHTMLString?(f(),E(D,{key:1},[H(" Caution here, message could've been compromised, never use user's input as message "),C("p",{innerHTML:s.message},null,8,["innerHTML"])],2112)):(f(),E("p",{key:0},A(s.message),1))])],6),[[W,s.message]]),s.showClose?(f(),p(d(G),{key:0,class:$(d(o).e("closeBtn")),onClick:le(L,["stop"])},{default:v(()=>[b(d(c))]),_:1},8,["class","onClick"])):H("v-if",!0)],2)],46,["id","onClick"]),[[W,l.value]])]),_:3},8,["name","onBeforeLeave","onAfterLeave"]))}});var $e=ue(he,[["__file","notification.vue"]]);const N={"top-left":[],"top-right":[],"bottom-left":[],"bottom-right":[]},P=16;let Te=1;const T=function(e={},t){if(!pe)return{close:()=>{}};(F(e)||Q(e))&&(e={message:e});const n=e.position||"top-right";let o=e.offset||0;N[n].forEach(({vm:_})=>{var g;o+=(((g=_.el)==null?void 0:g.offsetHeight)||0)+P}),o+=P;const a=`notification_${Te++}`,i=e.onClose,r={...e,offset:o,id:a,onClose:()=>{ke(a,n,i)}};let c=document.body;Z(e.appendTo)?c=e.appendTo:F(e.appendTo)&&(c=document.querySelector(e.appendTo)),Z(c)||(c=document.body);const l=document.createElement("div"),u=b($e,r,me(r.message)?r.message:()=>r.message);return u.appContext=be(t)?T._context:t,u.props.onDestroy=()=>{q(null,l)},q(u,l),N[n].push({vm:u}),c.appendChild(l.firstElementChild),{close:()=>{u.component.exposed.visible.value=!1}}};X.forEach(e=>{T[e]=(t={},n)=>((F(t)||Q(t))&&(t={message:t}),T({...t,type:e},n))});function ke(e,t,n){const o=N[t],a=o.findIndex(({vm:u})=>{var _;return((_=u.component)==null?void 0:_.props.id)===e});if(a===-1)return;const{vm:i}=o[a];if(!i)return;n==null||n(i);const r=i.el.offsetHeight,c=t.split("-")[0];o.splice(a,1);const l=o.length;if(!(l<1))for(let u=a;u<l;u++){const{el:_,component:g}=o[u].vm,I=Number.parseInt(_.style[c],10)-r-P;g.props.offset=I}}function Se(){for(const e of Object.values(N))e.forEach(({vm:t})=>{t.component.exposed.visible.value=!1})}T.closeAll=Se;T._context=null;const Y=_e(T,"$notify"),Le={};function Ee(e,t){const n=m("pro-tabs");return f(),p(n)}const We=y(Le,[["render",Ee]]),Ne=h({setup(){const e=x("tabs",void 0),t=B({}),n=K(""),o=[{value:"",label:"Default"},{value:"card",label:"Card"},{value:"border-card",label:"BorderCard"}];S(()=>{a()});function a(){e&&(t.value.list=e.value.list)}return{childTabs:t,type:n,data:o}}});function xe(e,t,n,o,a,i){const r=m("pro-radio-button"),c=m("pro-tabs");return f(),E(D,null,[b(r,{modelValue:e.type,"onUpdate:modelValue":t[0]||(t[0]=l=>e.type=l),data:e.data,style:{"margin-bottom":"16px"}},null,8,["modelValue","data"]),b(c,{ref:"childTabs",type:e.type},null,8,["type"])],64)}const Ze=y(Ne,[["render",xe]]),Be={};function Ie(e,t){const n=m("pro-tabs");return f(),p(n,{"keep-hidden-route":""})}const qe=y(Be,[["render",Ie]]),we=h({setup(){const e=x("tabs",void 0),t=B({});S(()=>{n()});function n(){e&&(t.value.list=e.value.list)}return{childTabs:t,asyncList:n}}});function Ve(e,t,n,o,a,i){const r=m("pro-tabs"),c=m("el-button");return f(),E(D,null,[b(r,{ref:"childTabs",style:{"margin-bottom":"15px"}},null,512),b(c,{onClick:t[0]||(t[0]=l=>e.childTabs.close("/en-US/guide/"))},{default:v(()=>t[1]||(t[1]=[z(" Close homepage ")])),_:1}),b(c,{onClick:e.childTabs.closeOther},{default:v(()=>t[2]||(t[2]=[z(" Close otherpage ")])),_:1},8,["onClick"]),b(c,{onClick:e.asyncList},{default:v(()=>t[3]||(t[3]=[z(" async ")])),_:1},8,["onClick"])],64)}const Ke=y(we,[["render",Ve]]),He=h({setup(){function e(t){console.log("Tabs-before-add",t),ve(()=>{Y({type:"success",title:"Success",message:"Come from before-add"})})}return{beforeAdd:e}}});function Me(e,t,n,o,a,i){const r=m("pro-tabs");return f(),p(r,{"before-add":e.beforeAdd},null,8,["before-add"])}const Je=y(He,[["render",Me]]),ze=h({setup(){const e=x("tabs",void 0),t=B({});S(()=>{n()});function n(){e&&(t.value.list=e.value.list)}function o(a,i){return console.log({activeName:a,oldActiveName:i}),Y({type:"success",title:"Success",message:"Come from before-leave"}),!1}return{childTabs:t,beforeLeave:o}}});function Ae(e,t,n,o,a,i){const r=m("pro-tabs");return f(),p(r,{ref:"childTabs","before-leave":e.beforeLeave},null,8,["before-leave"])}const Qe=y(ze,[["render",Ae]]),Fe={},Pe={class:"tabs-label-content"};function De(e,t){const n=m("el-icon"),o=m("pro-tabs");return f(),p(o,null,{label:v(({icon:a,meta:i})=>[C("div",Pe,[b(n,{size:16,class:"label-icon"},{default:v(()=>[(f(),p(J(a)))]),_:2},1024),C("span",null,A(i.title.toUpperCase()),1)])]),_:1})}const Xe=y(Fe,[["render",De],["__scopeId","data-v-2d7e39d4"]]),Ue=h({setup(){const e=x("tabs",void 0),t=B({});S(()=>{n()});function n(){e&&(t.value.list=e.value.list)}return{childTabs:t}}});function Oe(e,t,n,o,a,i){const r=m("pro-tabs");return f(),p(r,{ref:"childTabs",contextmenu:"","refresh-path":"/dev/refresh"},null,512)}const Ye=y(Ue,[["render",Oe]]);export{We as T,Ze as a,qe as b,Ke as c,Je as d,Qe as e,Xe as f,Ye as g};
