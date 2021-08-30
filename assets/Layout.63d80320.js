import{u as t}from"./index.f7a0cea1.js";import{ae as a,k as n,M as s,u as e,v as o,O as l,J as p,B as c,E as u,aa as k,ao as i,_ as r}from"./modules-vue.8f5a3b00.js";import"./modules-element-plus.4c2acf7a.js";const d={class:"markdown-body"},g=i('<h1 id="layout" tabindex="-1">Layout <a class="header-anchor" href="#layout" aria-hidden="true">#</a></h1><blockquote><p>基础的中后台布局界面组件</p></blockquote><h2 id="%E4%BD%BF%E7%94%A8" tabindex="-1">使用 <a class="header-anchor" href="#%E4%BD%BF%E7%94%A8" aria-hidden="true">#</a></h2><h3 id="%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95" tabindex="-1">基础用法 <a class="header-anchor" href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95" aria-hidden="true">#</a></h3>',4),y=c("p",null,[r("组件默认将从 "),c("code",null,"vue-router"),r(" 中获取路由生成路由")],-1),h=c("pre",null,[c("code",{"v-pre":""},[c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),r("template")]),c("span",{class:"token punctuation"},">")]),r("\n  "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),r("pro-layout")]),r(),c("span",{class:"token attr-name"},"class"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),r("docs-layout"),c("span",{class:"token punctuation"},'"')]),r(),c("span",{class:"token punctuation"},"/>")]),r("\n"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),r("template")]),c("span",{class:"token punctuation"},">")]),r("\n\n"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),r("style")]),c("span",{class:"token punctuation"},">")]),c("span",{class:"token style"},[c("span",{class:"token language-css"},[r("\n"),c("span",{class:"token selector"},".docs-layout"),r(),c("span",{class:"token punctuation"},"{"),r("\n  "),c("span",{class:"token property"},"border"),c("span",{class:"token punctuation"},":"),r(" 1px solid "),c("span",{class:"token function"},"var"),c("span",{class:"token punctuation"},"("),r("--c-border"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),r("\n  "),c("span",{class:"token property"},"height"),c("span",{class:"token punctuation"},":"),r(" 400px"),c("span",{class:"token punctuation"},";"),r("\n"),c("span",{class:"token punctuation"},"}"),r("\n")])]),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),r("style")]),c("span",{class:"token punctuation"},">")]),r("\n")])],-1),f=c("h3",{id:"%E6%8F%92%E6%A7%BD",tabindex:"-1"},[r("插槽 "),c("a",{class:"header-anchor",href:"#%E6%8F%92%E6%A7%BD","aria-hidden":"true"},"#")],-1),m=c("p",null,"通过插槽实现更复杂的界面",-1),x=c("pre",null,[c("code",{"v-pre":""},[c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),r("template")]),c("span",{class:"token punctuation"},">")]),r("\n  "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),r("pro-layout")]),r(),c("span",{class:"token attr-name"},"class"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),r("docs-layout"),c("span",{class:"token punctuation"},'"')]),c("span",{class:"token punctuation"},">")]),r("\n    "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),r("template")]),r(),c("span",{class:"token attr-name"},"#logo"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),r("{ collapse }"),c("span",{class:"token punctuation"},'"')]),c("span",{class:"token punctuation"},">")]),r("\n      "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),r("span")]),r(),c("span",{class:"token special-attr"},[c("span",{class:"token attr-name"},"style"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),c("span",{class:"token value css language-css"},[c("span",{class:"token property"},"line-height"),c("span",{class:"token punctuation"},":"),r(" 54px")]),c("span",{class:"token punctuation"},'"')])]),c("span",{class:"token punctuation"},">")]),r("\n        {{ collapse ? 'L' : 'logo' }}\n      "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),r("span")]),c("span",{class:"token punctuation"},">")]),r("\n    "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),r("template")]),c("span",{class:"token punctuation"},">")]),r("\n    "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),r("template")]),r(),c("span",{class:"token attr-name"},"#footer"),c("span",{class:"token punctuation"},">")]),r("\n      "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),r("p")]),c("span",{class:"token punctuation"},">")]),r("footer"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),r("p")]),c("span",{class:"token punctuation"},">")]),r("\n    "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),r("template")]),c("span",{class:"token punctuation"},">")]),r("\n    "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),r("template")]),r(),c("span",{class:"token attr-name"},"#header-left"),c("span",{class:"token punctuation"},">")]),r("\n      "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),r("span")]),c("span",{class:"token punctuation"},">")]),r("header-left"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),r("span")]),c("span",{class:"token punctuation"},">")]),r("\n    "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),r("template")]),c("span",{class:"token punctuation"},">")]),r("\n    "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),r("template")]),r(),c("span",{class:"token attr-name"},"#header-right"),c("span",{class:"token punctuation"},">")]),r("\n      "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),r("span")]),c("span",{class:"token punctuation"},">")]),r("header-right"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),r("span")]),c("span",{class:"token punctuation"},">")]),r("\n    "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),r("template")]),c("span",{class:"token punctuation"},">")]),r("\n    "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),r("template")]),r(),c("span",{class:"token attr-name"},"#header-bottom"),c("span",{class:"token punctuation"},">")]),r("\n      "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),r("span")]),c("span",{class:"token punctuation"},">")]),r("header-bottom"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),r("span")]),c("span",{class:"token punctuation"},">")]),r("\n    "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),r("template")]),c("span",{class:"token punctuation"},">")]),r("\n    "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),r("template")]),r(),c("span",{class:"token attr-name"},"#main-top"),c("span",{class:"token punctuation"},">")]),r("\n      "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),r("p")]),c("span",{class:"token punctuation"},">")]),r("main-top"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),r("p")]),c("span",{class:"token punctuation"},">")]),r("\n    "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),r("template")]),c("span",{class:"token punctuation"},">")]),r("\n    "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),r("template")]),r(),c("span",{class:"token attr-name"},"#main-bottom"),c("span",{class:"token punctuation"},">")]),r("\n      "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),r("p")]),c("span",{class:"token punctuation"},">")]),r("main-bottom"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),r("p")]),c("span",{class:"token punctuation"},">")]),r("\n    "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),r("template")]),c("span",{class:"token punctuation"},">")]),r("\n  "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),r("pro-layout")]),c("span",{class:"token punctuation"},">")]),r("\n"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),r("template")]),c("span",{class:"token punctuation"},">")]),r("\n")])],-1),E={style:{"line-height":"54px"}},b=c("p",null,"footer",-1),A=c("span",null,"header-left",-1),v=c("span",null,"header-right",-1),B=c("span",null,"header-bottom",-1),w=c("p",null,"main-top",-1),D=c("p",null,"main-bottom",-1),F=c("h3",{id:"%E8%87%AA%E5%AE%9A%E4%B9%89%E8%B7%AF%E7%94%B1",tabindex:"-1"},[r("自定义路由 "),c("a",{class:"header-anchor",href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E8%B7%AF%E7%94%B1","aria-hidden":"true"},"#")],-1),q=c("p",null,[r("通过传入 "),c("code",null,"routes"),r(" 实现自定义路由显示")],-1),L=c("pre",null,[c("code",{"v-pre":""},[c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),r("template")]),c("span",{class:"token punctuation"},">")]),r("\n  "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),r("pro-layout")]),r("\n    "),c("span",{class:"token attr-name"},":routes"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),r("routes"),c("span",{class:"token punctuation"},'"')]),r("\n    "),c("span",{class:"token attr-name"},"class"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),r("docs-layout"),c("span",{class:"token punctuation"},'"')]),r("\n  "),c("span",{class:"token punctuation"},"/>")]),r("\n"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),r("template")]),c("span",{class:"token punctuation"},">")]),r("\n\n"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),r("script")]),c("span",{class:"token punctuation"},">")]),c("span",{class:"token script"},[c("span",{class:"token language-javascript"},[r("\n"),c("span",{class:"token keyword"},"import"),r(),c("span",{class:"token punctuation"},"{"),r(" computed "),c("span",{class:"token punctuation"},"}"),r(),c("span",{class:"token keyword"},"from"),r(),c("span",{class:"token string"},"'vue'"),r("\n"),c("span",{class:"token keyword"},"import"),r(),c("span",{class:"token punctuation"},"{"),r(" useRouter "),c("span",{class:"token punctuation"},"}"),r(),c("span",{class:"token keyword"},"from"),r(),c("span",{class:"token string"},"'vue-router'"),r("\n\n"),c("span",{class:"token keyword"},"export"),r(),c("span",{class:"token keyword"},"default"),r(),c("span",{class:"token punctuation"},"{"),r("\n  "),c("span",{class:"token function"},"setup"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),r(),c("span",{class:"token punctuation"},"{"),r("\n    "),c("span",{class:"token keyword"},"const"),r(" router "),c("span",{class:"token operator"},"="),r(),c("span",{class:"token function"},"useRouter"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),r("\n    "),c("span",{class:"token keyword"},"const"),r(" routes "),c("span",{class:"token operator"},"="),r(),c("span",{class:"token function"},"computed"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),r(),c("span",{class:"token operator"},"=>"),r(),c("span",{class:"token punctuation"},"{"),r("\n      "),c("span",{class:"token keyword"},"const"),r(" _routes "),c("span",{class:"token operator"},"="),r(" router"),c("span",{class:"token punctuation"},"."),r("options"),c("span",{class:"token punctuation"},"."),r("routes\n      "),c("span",{class:"token keyword"},"return"),r(" _routes"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"find"),c("span",{class:"token punctuation"},"("),c("span",{class:"token parameter"},"item"),r(),c("span",{class:"token operator"},"=>"),r(),c("span",{class:"token punctuation"},"{"),r("\n        "),c("span",{class:"token keyword"},"return"),r(" item"),c("span",{class:"token punctuation"},"."),r("path "),c("span",{class:"token operator"},"==="),r(),c("span",{class:"token string"},"'/zh-CN/components/'"),r("\n      "),c("span",{class:"token punctuation"},"}"),c("span",{class:"token punctuation"},")"),c("span",{class:"token operator"},"?."),r("children "),c("span",{class:"token operator"},"||"),r(),c("span",{class:"token punctuation"},"["),c("span",{class:"token punctuation"},"]"),r("\n    "),c("span",{class:"token punctuation"},"}"),c("span",{class:"token punctuation"},")"),r("\n\n    "),c("span",{class:"token keyword"},"return"),r(),c("span",{class:"token punctuation"},"{"),r("\n      routes"),c("span",{class:"token punctuation"},","),r("\n    "),c("span",{class:"token punctuation"},"}"),r("\n  "),c("span",{class:"token punctuation"},"}"),r("\n"),c("span",{class:"token punctuation"},"}"),r("\n")])]),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),r("script")]),c("span",{class:"token punctuation"},">")]),r("\n")])],-1),_=i('<h3 id="%E9%85%8D%E7%BD%AE" tabindex="-1">配置 <a class="header-anchor" href="#%E9%85%8D%E7%BD%AE" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">routes</td><td style="text-align:left;">当前程序路由</td><td style="text-align:left;">array</td><td style="text-align:left;">从 <code>vue-router</code> 中获取</td></tr><tr><td style="text-align:left;">transition</td><td style="text-align:left;">定义页面过度渐变动画</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">collapse</td><td style="text-align:left;">默认是否收起菜单</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">default-openeds</td><td style="text-align:left;">当前打开的 sub-menu 的 index 的数组</td><td style="text-align:left;">Array</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">unique-opened</td><td style="text-align:left;">是否只保持一个子菜单的展开</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td></tr></tbody></table><h3 id="%E6%8F%92%E6%A7%BD-1" tabindex="-1">插槽 <a class="header-anchor" href="#%E6%8F%92%E6%A7%BD-1" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">name</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">logo</td><td style="text-align:left;">自定义 Logo，参数为 { collapse } collapse-当前菜单栏是否折叠</td></tr><tr><td style="text-align:left;">menu</td><td style="text-align:left;">控制菜单显示内容，参数为 { meta, path, redirect } 等</td></tr><tr><td style="text-align:left;">footer</td><td style="text-align:left;">页脚内容</td></tr><tr><td style="text-align:left;">header-left</td><td style="text-align:left;">头部左侧内容</td></tr><tr><td style="text-align:left;">header-right</td><td style="text-align:left;">头部右侧内容</td></tr><tr><td style="text-align:left;">header-bottom</td><td style="text-align:left;">头部下面内容</td></tr><tr><td style="text-align:left;">main-top</td><td style="text-align:left;">主体顶部内容</td></tr><tr><td style="text-align:left;">main-bottom</td><td style="text-align:left;">主体底部内容</td></tr></tbody></table>',4),j={setup(i,{expose:r}){r({frontmatter:{title:"Layout",meta:[{name:"description",content:"基础的中后台布局界面组件"},{property:"og:title",content:"Layout"}]}});t({title:"Layout",meta:[{name:"description",content:"基础的中后台布局界面组件"},{property:"og:title",content:"Layout"}]});let j=a(),z=n((()=>{var t;return(null==(t=j.options.routes.find((t=>"/zh-CN/components/"===t.path)))?void 0:t.children)||[]}));return(t,a)=>{const n=s("pro-layout"),i=s("pro-code");return e(),o("div",d,[g,l(i,null,{description:p((()=>[y])),code:p((()=>[h])),default:p((()=>[l(n,{class:"docs-layout"})])),_:1}),f,l(i,null,{description:p((()=>[m])),code:p((()=>[x])),default:p((()=>[l(n,{class:"docs-layout"},{logo:p((({collapse:t})=>[c("span",E,u(t?"L":"logo"),1)])),footer:p((()=>[b])),"header-left":p((()=>[A])),"header-right":p((()=>[v])),"header-bottom":p((()=>[B])),"main-top":p((()=>[w])),"main-bottom":p((()=>[D])),_:1})])),_:1}),F,l(i,null,{description:p((()=>[q])),code:p((()=>[L])),default:p((()=>[l(n,{routes:k(z),class:"docs-layout"},null,8,["routes"])])),_:1}),_])}}};export{j as default};
