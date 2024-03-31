import{u as e}from"./vue.f36acd1f-D8xt85SV.js";import{r as p,o as c,c as l,a as n,b as t,d as a}from"./index-DQtG-xXj.js";const r={class:"markdown-body"},u=n("h1",{id:"router-and-menu",tabindex:"-1"},[t("Router and Menu "),n("a",{class:"header-anchor md-link",href:"#router-and-menu","aria-hidden":"true"},"#")],-1),i=n("p",null,[t("By default, layout-related components will automatically obtain the required routes information from "),n("code",null,"vue-router")],-1),k=n("h2",{id:"format",tabindex:"-1"},[t("Format "),n("a",{class:"header-anchor md-link",href:"#format","aria-hidden":"true"},"#")],-1),d=n("p",null,"The meta type",-1),m=n("div",{class:"language-ts"},[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token keyword"},"type"),t(),n("span",{class:"token punctuation"},"{"),t(" Component "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token string"},"'vue-router'"),t(`

`),n("span",{class:"token keyword"},"declare"),t(),n("span",{class:"token keyword"},"module"),t(),n("span",{class:"token string"},"'vue-router'"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"interface"),t(),n("span",{class:"token class-name"},"RouteMeta"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token comment"},"/** the Menu title */"),t(`
    title`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token builtin"},"string"),t(`
    `),n("span",{class:"token comment"},"/** the Menu icon */"),t(`
    icon`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token builtin"},"string"),t(),n("span",{class:"token operator"},"|"),t(` Component
    `),n("span",{class:"token comment"},"/** whether to show in the Menu */"),t(`
    hidden`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token builtin"},"boolean"),t(`
    `),n("span",{class:"token comment"},"/** whether to use ElMenuItemGroup instead of ElSubMenu */"),t(`
    group`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token builtin"},"boolean"),t(`
    `),n("span",{class:"token comment"},"/** the animation name of transition pages */"),t(`
    transition`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token builtin"},"string"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])])],-1),y=n("p",null,"refer router",-1),h=n("div",{class:"language-ts"},[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" markRaw "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" Edit "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@element-plus/icons-vue'"),t(`
`),n("span",{class:"token keyword"},"import"),t(" BaseLayout "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'../layout/Layout.vue'"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token keyword"},"type"),t(),n("span",{class:"token punctuation"},"{"),t(" RouteRecordRaw "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue-router'"),t(`

`),n("span",{class:"token keyword"},"const"),t(" routes"),n("span",{class:"token operator"},":"),t(" RouteRecordRaw"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    path`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'/dev/'"),n("span",{class:"token punctuation"},","),t(`
    redirect`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'/dev/Layout'"),n("span",{class:"token punctuation"},","),t(`
    component`),n("span",{class:"token operator"},":"),t(" BaseLayout"),n("span",{class:"token punctuation"},","),t(`
    meta`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(" title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Development'"),n("span",{class:"token punctuation"},","),t(" icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"markRaw"),n("span",{class:"token punctuation"},"("),t("Edit"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        path`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'/dev/Layout'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function-variable function"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'../views/Layout.vue'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        meta`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(" title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Layout'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        path`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'/dev/Table'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function-variable function"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'../views/Table.vue'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        meta`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(" title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Table'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        path`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'/dev/Form'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function-variable function"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'../views/Form.vue'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        meta`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(" title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Form'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        path`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'/dev/Crud'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function-variable function"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'../views/Crud.vue'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        meta`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(" title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Crud'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(` routes
`)])])],-1),g=n("h3",{id:"use-icon",tabindex:"-1"},[t("Use icon "),n("a",{class:"header-anchor md-link",href:"#use-icon","aria-hidden":"true"},"#")],-1),_=n("p",null,"The Icon render as a components, so you can define as any icon component.",-1),w=n("p",null,"Install the required icon component library",-1),f={href:"https://www.npmjs.com/package/@element-plus/icons-vue",class:"md-link",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.npmjs.com/package/bootstrap-icons-vue",class:"md-link",target:"_blank",rel:"noopener noreferrer"},b=n("li",null,"and more",-1),R=n("p",null,"Let’s use @element-plus/icons-vue as an example",-1),M=n("div",{class:"language-"},[n("pre",null,[n("code",{"v-pre":""},`yarn add @element-plus/icons-vue
# or
npm install @element-plus/icons-vue
`)])],-1),x=n("ul",null,[n("li",null,"Globally register")],-1),E=n("div",{class:"language-js"},[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" Edit "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@element-plus/icons-vue'"),t(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"component"),n("span",{class:"token punctuation"},"("),t("Edit"),n("span",{class:"token punctuation"},"."),t("name"),n("span",{class:"token punctuation"},","),t(" Edit"),n("span",{class:"token punctuation"},")"),t(`
`)])])],-1),L=n("div",{class:"language-js"},[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'admin'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'/admin'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(" Layout"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"meta"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Admin'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'edit'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])])],-1),C=n("ul",null,[n("li",null,"Use components")],-1),T=n("div",{class:"language-js"},[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" markRaw "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" Edit "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@element-plus/icons-vue'"),t(`
`),n("span",{class:"token comment"},"// ..."),t(`
`),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'admin'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'/admin'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(" Layout"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"meta"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Admin'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"markRaw"),n("span",{class:"token punctuation"},"("),t("Edit"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])])],-1),j=n("h2",{id:"dynamic-routing",tabindex:"-1"},[t("Dynamic Routing "),n("a",{class:"header-anchor md-link",href:"#dynamic-routing","aria-hidden":"true"},"#")],-1),B=n("p",null,[t("Components can only obtain the original routing information defined in "),n("code",null,"vue-router"),t(", and cannot obtain dynamically added routes. When using asynchronously generated dynamic routes, although you can pass prop ​​to the component through "),n("code",null,"routes"),t(", it is more recommended to dynamically increase it through the following methods. Just keep "),n("code",null,"router.options.routes"),t(" the same as the final dynamically added routes")],-1),A=n("div",{class:"language-js"},[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token keyword"},"const"),t(" newRoute "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'admin'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'/admin'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(" Layout"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"meta"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Admin'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'settings'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(" AdminSettings"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"meta"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Settings'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
router`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addRoute"),n("span",{class:"token punctuation"},"("),t("newRoute"),n("span",{class:"token punctuation"},")"),t(`
router`),n("span",{class:"token punctuation"},"."),t("options"),n("span",{class:"token punctuation"},"."),t("routes"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("newRoute"),n("span",{class:"token punctuation"},")"),t(`
`)])])],-1),F=n("h2",{id:"auth-routing",tabindex:"-1"},[t("Auth Routing "),n("a",{class:"header-anchor md-link",href:"#auth-routing","aria-hidden":"true"},"#")],-1),H=n("p",null,"The current component does not support auth routing, you need to manually add",-1),D=n("p",null,[t("Example: by "),n("a",{href:"#dynamic-routing",class:"md-link"},"Dynamic Routing"),t(", remove routing information that does not have access rights when generating or adding routes")],-1),I=n("p",null,[t("Or: use "),n("code",null,"router.beforeEach"),t(" to check routing information")],-1),N=n("p",null,"Of course you can also combine the two way",-1),W="Router and Menu",z=[{name:"description",content:"How to configure the route and menu of the element-pro-components component library"},{property:"og:title",content:"Router and Menu"},{name:"twitter:title",content:"Router and Menu"}],K={__name:"router",setup(S,{expose:o}){return o({frontmatter:{title:"Router and Menu",meta:[{name:"description",content:"How to configure the route and menu of the element-pro-components component library"},{property:"og:title",content:"Router and Menu"},{name:"twitter:title",content:"Router and Menu"}]}}),e({title:"Router and Menu",meta:[{name:"description",content:"How to configure the route and menu of the element-pro-components component library"},{property:"og:title",content:"Router and Menu"},{name:"twitter:title",content:"Router and Menu"}]}),(G,O)=>{const s=p("icon-external-link");return c(),l("div",r,[u,i,k,d,m,y,h,g,_,w,n("ul",null,[n("li",null,[n("a",f,[t("@element-plus/icons-vue"),a(s,{class:"link-icon"})])]),n("li",null,[n("a",v,[t("bootstrap-icons-vue"),a(s,{class:"link-icon"})])]),b]),R,M,x,E,L,C,T,j,B,A,F,H,D,I,N])}}};export{K as default,z as meta,W as title};
