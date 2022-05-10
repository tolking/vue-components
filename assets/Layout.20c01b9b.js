import{L as u,a as i,b as r,c as d,d as k,e as g,f as m}from"./router-view.11a55768.js";import{u as h}from"./index.af168e7e.js";import{$ as l,o as f,c as y,a as t,W as s,U as n,aw as o,a3 as a}from"./modules-vue.6c123b62.js";import"./modules-element-plus.500c4a4b.js";const x={class:"markdown-body"},A=o('<h1 id="layout" tabindex="-1">Layout <a class="header-anchor" href="#layout" aria-hidden="true">#</a></h1><blockquote><p>default global layout interface</p></blockquote><h2 id="use" tabindex="-1">Use <a class="header-anchor" href="#use" aria-hidden="true">#</a></h2><h3 id="basic-use" tabindex="-1">Basic Use <a class="header-anchor" href="#basic-use" aria-hidden="true">#</a></h3>',4),v=a("By default, the component will generate routes from vue-router, Go to "),b=a("Router and Menu"),C=a(" to view routing related usage"),_=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("pro-layout")]),a(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("docs-layout"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token punctuation"},"/>")]),a(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
`)])],-1),E=t("p",null,"@/demo/Layout/base.vue",-1),w=t("h3",{id:"top-mode",tabindex:"-1"},[a("Top mode "),t("a",{class:"header-anchor",href:"#top-mode","aria-hidden":"true"},"#")],-1),D=t("p",null,[a("Implement top bar mode by "),t("code",null,'mode="horizontal"')],-1),F=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("pro-layout")]),a(`
    `),t("span",{class:"token attr-name"},"mode"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("horizontal"),t("span",{class:"token punctuation"},'"')]),a(`
    `),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("docs-layout"),t("span",{class:"token punctuation"},'"')]),a(`
  `),t("span",{class:"token punctuation"},"/>")]),a(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
`)])],-1),L=t("p",null,"@/demo/Layout/mode.vue",-1),q=t("h3",{id:"custom-routes",tabindex:"-1"},[a("Custom routes "),t("a",{class:"header-anchor",href:"#custom-routes","aria-hidden":"true"},"#")],-1),B=t("p",null,[a("Set "),t("code",null,"routes"),a(" attribute to enable custom routes")],-1),R=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("pro-layout")]),a(`
    `),t("span",{class:"token attr-name"},":routes"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("routes"),t("span",{class:"token punctuation"},'"')]),a(`
    `),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("docs-layout"),t("span",{class:"token punctuation"},'"')]),a(`
  `),t("span",{class:"token punctuation"},"/>")]),a(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[a(`
`),t("span",{class:"token keyword"},"import"),a(),t("span",{class:"token punctuation"},"{"),a(" defineComponent"),t("span",{class:"token punctuation"},","),a(" computed "),t("span",{class:"token punctuation"},"}"),a(),t("span",{class:"token keyword"},"from"),a(),t("span",{class:"token string"},"'vue'"),a(`
`),t("span",{class:"token keyword"},"import"),a(),t("span",{class:"token punctuation"},"{"),a(" useRouter "),t("span",{class:"token punctuation"},"}"),a(),t("span",{class:"token keyword"},"from"),a(),t("span",{class:"token string"},"'vue-router'"),a(`

`),t("span",{class:"token keyword"},"export"),a(),t("span",{class:"token keyword"},"default"),a(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),a(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{"),a(`
    `),t("span",{class:"token keyword"},"const"),a(" router "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token function"},"useRouter"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(`
    `),t("span",{class:"token keyword"},"const"),a(" routes "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token function"},"computed"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=>"),a(),t("span",{class:"token punctuation"},"{"),a(`
      `),t("span",{class:"token keyword"},"const"),a(" _routes "),t("span",{class:"token operator"},"="),a(" router"),t("span",{class:"token punctuation"},"."),a("options"),t("span",{class:"token punctuation"},"."),a(`routes
      `),t("span",{class:"token keyword"},"return"),a(),t("span",{class:"token punctuation"},"("),a(`
        _routes`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"find"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"item"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=>"),a(),t("span",{class:"token punctuation"},"{"),a(`
          `),t("span",{class:"token keyword"},"return"),a(" item"),t("span",{class:"token punctuation"},"."),a("path "),t("span",{class:"token operator"},"==="),a(),t("span",{class:"token string"},"'/en-US/components/'"),a(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token operator"},"?."),a("children "),t("span",{class:"token operator"},"||"),a(` _routes
      `),t("span",{class:"token punctuation"},")"),a(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),a(`

    `),t("span",{class:"token keyword"},"return"),a(),t("span",{class:"token punctuation"},"{"),a(`
      routes`),t("span",{class:"token punctuation"},","),a(`
    `),t("span",{class:"token punctuation"},"}"),a(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),a(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),a(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("script")]),t("span",{class:"token punctuation"},">")]),a(`
`)])],-1),z=t("p",null,"@/demo/Layout/routes.vue",-1),M=t("h3",{id:"custom-transition",tabindex:"-1"},[a("Custom Transition "),t("a",{class:"header-anchor",href:"#custom-transition","aria-hidden":"true"},"#")],-1),T=t("p",null,[a("Provides animated transition effects by "),t("code",null,"transition")],-1),N=t("div",{class:"tip custom-block"},[t("p",{class:"custom-block-title"},"Tip"),t("p",null,[a("When used "),t("code",null,"transition"),a(", the page must have only one root element due to "),t("code",null,"Transition"),a(" component restrictions")])],-1),P=t("p",null,[a("The transition animation of the current route can be configured through "),t("code",null,"meta.transition"),a(" in the router")],-1),V=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("pro-layout")]),a(`
    `),t("span",{class:"token attr-name"},"transition"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("el-fade-in"),t("span",{class:"token punctuation"},'"')]),a(`
    `),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("docs-layout"),t("span",{class:"token punctuation"},'"')]),a(`
  `),t("span",{class:"token punctuation"},"/>")]),a(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
`)])],-1),S=t("p",null,"@/demo/Layout/transition.vue",-1),K=o('<h3 id="custom-keepalive" tabindex="-1">Custom keepAlive <a class="header-anchor" href="#custom-keepalive" aria-hidden="true">#</a></h3><p>enable cache by <code>keep-alive</code>, use <code>include</code> <code>exclude</code> <code>max</code> to Control cache</p><div class="tip custom-block"><p class="custom-block-title">Tip</p><p>When enabled, all pages will be cached by default</p><p><code>include</code> and <code>exclude</code> match the name of the page</p><p>It is recommended to name the pages that need to be cached starting with <code>Keep</code>, and then configure <code>:include=&quot;/^Keep/&quot;</code> to use</p></div>',3),U=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("pro-layout")]),a(`
    `),t("span",{class:"token attr-name"},"keep-alive"),a(`
    `),t("span",{class:"token attr-name"},":include"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("/^Keep/"),t("span",{class:"token punctuation"},'"')]),a(`
    `),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("docs-layout"),t("span",{class:"token punctuation"},'"')]),a(`
  `),t("span",{class:"token punctuation"},"/>")]),a(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
`)])],-1),W=t("p",null,"@/demo/Layout/keep-alive.vue",-1),j=t("h3",{id:"slots",tabindex:"-1"},[a("Slots "),t("a",{class:"header-anchor",href:"#slots","aria-hidden":"true"},"#")],-1),I=t("p",null,"More complex interface through slots",-1),G=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("pro-radio-button")]),a(`
    `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("mode"),t("span",{class:"token punctuation"},'"')]),a(`
    `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("data"),t("span",{class:"token punctuation"},'"')]),a(`
    `),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),a(" 16px")]),t("span",{class:"token punctuation"},'"')])]),a(`
  `),t("span",{class:"token punctuation"},"/>")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("pro-layout")]),a(`
    `),t("span",{class:"token attr-name"},":mode"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("mode"),t("span",{class:"token punctuation"},'"')]),a(`
    `),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("docs-layout"),t("span",{class:"token punctuation"},'"')]),a(`
  `),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),a(),t("span",{class:"token attr-name"},"#logo"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("{ collapse }"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),a(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("span")]),a(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"line-height"),t("span",{class:"token punctuation"},":"),a(" 54px")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),a(`
        {{ collapse ? 'L' : 'logo' }}
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("span")]),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),a(),t("span",{class:"token attr-name"},"#footer"),t("span",{class:"token punctuation"},">")]),a(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("p")]),t("span",{class:"token punctuation"},">")]),a("footer"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("p")]),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),a(),t("span",{class:"token attr-name"},"#header-left"),t("span",{class:"token punctuation"},">")]),a(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("span")]),t("span",{class:"token punctuation"},">")]),a("header-left"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("span")]),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),a(),t("span",{class:"token attr-name"},"#header-right"),t("span",{class:"token punctuation"},">")]),a(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("span")]),t("span",{class:"token punctuation"},">")]),a("header-right"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("span")]),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),a(),t("span",{class:"token attr-name"},"#header-bottom"),t("span",{class:"token punctuation"},">")]),a(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("span")]),t("span",{class:"token punctuation"},">")]),a("header-bottom"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("span")]),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),a(),t("span",{class:"token attr-name"},"#default"),t("span",{class:"token punctuation"},">")]),a(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("p")]),t("span",{class:"token punctuation"},">")]),a("default"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("p")]),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("pro-layout")]),t("span",{class:"token punctuation"},">")]),a(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[a(`
`),t("span",{class:"token keyword"},"import"),a(),t("span",{class:"token punctuation"},"{"),a(" defineComponent"),t("span",{class:"token punctuation"},","),a(" ref "),t("span",{class:"token punctuation"},"}"),a(),t("span",{class:"token keyword"},"from"),a(),t("span",{class:"token string"},"'vue'"),a(`

`),t("span",{class:"token keyword"},"export"),a(),t("span",{class:"token keyword"},"default"),a(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),a(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{"),a(`
    `),t("span",{class:"token keyword"},"const"),a(" mode "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'vertical'"),t("span",{class:"token punctuation"},")"),a(`
    `),t("span",{class:"token keyword"},"const"),a(" data "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token punctuation"},"["),a(`
      `),t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token literal-property property"},"value"),t("span",{class:"token operator"},":"),a(),t("span",{class:"token string"},"'vertical'"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),a(),t("span",{class:"token string"},"'Menu vertical'"),a(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),a(`
      `),t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token literal-property property"},"value"),t("span",{class:"token operator"},":"),a(),t("span",{class:"token string"},"'horizontal'"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),a(),t("span",{class:"token string"},"'Menu horizontal'"),a(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),a(`
    `),t("span",{class:"token punctuation"},"]"),a(`

    `),t("span",{class:"token keyword"},"return"),a(),t("span",{class:"token punctuation"},"{"),a(`
      mode`),t("span",{class:"token punctuation"},","),a(`
      data`),t("span",{class:"token punctuation"},","),a(`
    `),t("span",{class:"token punctuation"},"}"),a(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),a(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),a(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("script")]),t("span",{class:"token punctuation"},">")]),a(`
`)])],-1),H=t("p",null,"@/demo/Layout/slots.vue",-1),O=t("h3",{id:"custom-routerview",tabindex:"-1"},[a("Custom RouterView "),t("a",{class:"header-anchor",href:"#custom-routerview","aria-hidden":"true"},"#")],-1),$=t("p",null,"Custom RouterView by the default slot",-1),J=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("pro-layout")]),a(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("docs-layout"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("router-view")]),t("span",{class:"token punctuation"},">")]),a(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),a(),t("span",{class:"token attr-name"},"#default"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("{ Component, route }"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),a(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("transition")]),a(`
          `),t("span",{class:"token attr-name"},"name"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("el-fade-in"),t("span",{class:"token punctuation"},'"')]),a(`
          `),t("span",{class:"token attr-name"},"mode"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("out-in"),t("span",{class:"token punctuation"},'"')]),a(`
          `),t("span",{class:"token attr-name"},"appear"),a(`
        `),t("span",{class:"token punctuation"},">")]),a(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("pro-card")]),a(`
            `),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("route.fullPath"),t("span",{class:"token punctuation"},'"')]),a(`
            `),t("span",{class:"token attr-name"},"shadow"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("never"),t("span",{class:"token punctuation"},'"')]),a(`
          `),t("span",{class:"token punctuation"},">")]),a(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("component")]),a(),t("span",{class:"token attr-name"},":is"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("Component"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token punctuation"},"/>")]),a(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("pro-card")]),t("span",{class:"token punctuation"},">")]),a(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("transition")]),t("span",{class:"token punctuation"},">")]),a(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("router-view")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("pro-layout")]),t("span",{class:"token punctuation"},">")]),a(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Q=t("p",null,"@/demo/Layout/router-view.vue",-1),X=o('<h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Description</th><th style="text-align:left;">Type</th><th style="text-align:left;">Options</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">fixed-header</td><td style="text-align:left;">whether to fix the page header</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">keep-alive</td><td style="text-align:left;">whether to enable cache pages</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">include</td><td style="text-align:left;">match the name of the page that need to be cache, takes effect when keep-alive is true</td><td style="text-align:left;">string / array / RegExp</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">exclude</td><td style="text-align:left;">match the name of the page that do not need to be cache, takes effect when keep-alive is true</td><td style="text-align:left;">string / array / RegExp</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">max</td><td style="text-align:left;">limit the max number of cache, takes effect when keep-alive is true</td><td style="text-align:left;">string / number</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">transition</td><td style="text-align:left;">the animation name of transition pages</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">routes</td><td style="text-align:left;">current routes of menu</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">from <code>vue-router</code></td></tr><tr><td style="text-align:left;">mode</td><td style="text-align:left;">menu display mode</td><td style="text-align:left;">string</td><td style="text-align:left;">horizontal / vertical</td><td style="text-align:left;">vertical</td></tr><tr><td style="text-align:left;">collapse</td><td style="text-align:left;">whether the menu is collapsed (available only in vertical mode)</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">ellipsis</td><td style="text-align:left;">whether the menu is ellipsis (available only in horizontal mode)</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">background-color</td><td style="text-align:left;">background color of Menu (hex format)</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">#ffffff</td></tr><tr><td style="text-align:left;">text-color</td><td style="text-align:left;">text color of Menu (hex format)</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">#303133</td></tr><tr><td style="text-align:left;">active-text-color</td><td style="text-align:left;">text color of currently active menu item (hex format)</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">#409EFF</td></tr><tr><td style="text-align:left;">default-openeds</td><td style="text-align:left;">array that contains indexes of currently active sub-menus</td><td style="text-align:left;">Array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">unique-opened</td><td style="text-align:left;">whether only one sub-menu can be active</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">menu-trigger</td><td style="text-align:left;">how sub-menus are triggered, only works when <code>mode</code> is \u2018horizontal\u2019</td><td style="text-align:left;">string</td><td style="text-align:left;">hover / click</td><td style="text-align:left;">hover</td></tr><tr><td style="text-align:left;">collapse-transition</td><td style="text-align:left;">whether to enable the collapse transition</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>select</td><td>callback function when menu is activated</td><td>index: index of activated menu, indexPath: index path of activated menu, item: the selected menu item</td></tr><tr><td>open</td><td>callback function when sub-menu expands</td><td>index: index of expanded sub-menu, indexPath: index path of expanded sub-menu</td></tr><tr><td>close</td><td>callback function when sub-menu collapses</td><td>index: index of collapsed sub-menu, indexPath: index path of collapsed sub-menu</td></tr></tbody></table><h3 id="slots-1" tabindex="-1">Slots <a class="header-anchor" href="#slots-1" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;">custom implementation RouterView</td></tr><tr><td style="text-align:left;">logo</td><td style="text-align:left;">control logo display content, parameters { collapse }</td></tr><tr><td style="text-align:left;">menu</td><td style="text-align:left;">control menu display content, parameters { meta, path, redirect }</td></tr><tr><td style="text-align:left;">footer</td><td style="text-align:left;">control the footer of page display content</td></tr><tr><td style="text-align:left;">header-left</td><td style="text-align:left;">control the header left display content</td></tr><tr><td style="text-align:left;">header-right</td><td style="text-align:left;">control the header right display content</td></tr><tr><td style="text-align:left;">header-bottom</td><td style="text-align:left;">control the header bottom display content</td></tr></tbody></table>',6),lt={title:"Layout",meta:[{name:"description",content:"default global layout interface"},{property:"og:title",content:"Layout"}]},ct={setup(Y,{expose:c}){return h({title:"Layout",meta:[{name:"description",content:"default global layout interface"},{property:"og:title",content:"Layout"}]}),c({frontmatter:{title:"Layout",meta:[{name:"description",content:"default global layout interface"},{property:"og:title",content:"Layout"}]}}),(tt,at)=>{const p=l("pro-link"),e=l("pro-code");return f(),y("div",x,[A,t("p",null,[v,s(p,{to:"/zh-CN/guide/router"},{default:n(()=>[b]),_:1}),C]),s(e,{link:"@/demo/Layout/base.vue",content:"%3Ctemplate%3E%0A%20%20%3Cpro-layout%20class%3D%22docs-layout%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A"},{source:n(()=>[s(u)]),code:n(()=>[_]),default:n(()=>[E]),_:1}),w,D,s(e,{link:"@/demo/Layout/mode.vue",content:"%3Ctemplate%3E%0A%20%20%3Cpro-layout%0A%20%20%20%20mode%3D%22horizontal%22%0A%20%20%20%20class%3D%22docs-layout%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A"},{source:n(()=>[s(i)]),code:n(()=>[F]),default:n(()=>[L]),_:1}),q,B,s(e,{link:"@/demo/Layout/routes.vue",content:"%3Ctemplate%3E%0A%20%20%3Cpro-layout%0A%20%20%20%20%3Aroutes%3D%22routes%22%0A%20%20%20%20class%3D%22docs-layout%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20computed%20%7D%20from%20'vue'%0Aimport%20%7B%20useRouter%20%7D%20from%20'vue-router'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20router%20%3D%20useRouter()%0A%20%20%20%20const%20routes%20%3D%20computed(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20const%20_routes%20%3D%20router.options.routes%0A%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20_routes.find((item)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20return%20item.path%20%3D%3D%3D%20'%2Fen-US%2Fcomponents%2F'%0A%20%20%20%20%20%20%20%20%7D)%3F.children%20%7C%7C%20_routes%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D)%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20routes%2C%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%7D)%0A%3C%2Fscript%3E%0A"},{source:n(()=>[s(r)]),code:n(()=>[R]),default:n(()=>[z]),_:1}),M,T,N,s(e,{link:"@/demo/Layout/transition.vue",content:"%3Ctemplate%3E%0A%20%20%3Cpro-layout%0A%20%20%20%20transition%3D%22el-fade-in%22%0A%20%20%20%20class%3D%22docs-layout%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A"},{source:n(()=>[s(d)]),description:n(()=>[P]),code:n(()=>[V]),default:n(()=>[S]),_:1}),K,s(e,{link:"@/demo/Layout/keep-alive.vue",content:"%3Ctemplate%3E%0A%20%20%3Cpro-layout%0A%20%20%20%20keep-alive%0A%20%20%20%20%3Ainclude%3D%22%2F%5EKeep%2F%22%0A%20%20%20%20class%3D%22docs-layout%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A"},{source:n(()=>[s(k)]),code:n(()=>[U]),default:n(()=>[W]),_:1}),j,I,s(e,{link:"@/demo/Layout/slots.vue",content:"%3Ctemplate%3E%0A%20%20%3Cpro-radio-button%0A%20%20%20%20v-model%3D%22mode%22%0A%20%20%20%20%3Adata%3D%22data%22%0A%20%20%20%20style%3D%22margin-bottom%3A%2016px%22%0A%20%20%2F%3E%0A%20%20%3Cpro-layout%0A%20%20%20%20%3Amode%3D%22mode%22%0A%20%20%20%20class%3D%22docs-layout%22%0A%20%20%3E%0A%20%20%20%20%3Ctemplate%20%23logo%3D%22%7B%20collapse%20%7D%22%3E%0A%20%20%20%20%20%20%3Cspan%20style%3D%22line-height%3A%2054px%22%3E%0A%20%20%20%20%20%20%20%20%7B%7B%20collapse%20%3F%20'L'%20%3A%20'logo'%20%7D%7D%0A%20%20%20%20%20%20%3C%2Fspan%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3Ctemplate%20%23footer%3E%0A%20%20%20%20%20%20%3Cp%3Efooter%3C%2Fp%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3Ctemplate%20%23header-left%3E%0A%20%20%20%20%20%20%3Cspan%3Eheader-left%3C%2Fspan%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3Ctemplate%20%23header-right%3E%0A%20%20%20%20%20%20%3Cspan%3Eheader-right%3C%2Fspan%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3Ctemplate%20%23header-bottom%3E%0A%20%20%20%20%20%20%3Cspan%3Eheader-bottom%3C%2Fspan%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3Ctemplate%20%23default%3E%0A%20%20%20%20%20%20%3Cp%3Edefault%3C%2Fp%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fpro-layout%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20mode%20%3D%20ref('vertical')%0A%20%20%20%20const%20data%20%3D%20%5B%0A%20%20%20%20%20%20%7B%20value%3A%20'vertical'%2C%20label%3A%20'Menu%20vertical'%20%7D%2C%0A%20%20%20%20%20%20%7B%20value%3A%20'horizontal'%2C%20label%3A%20'Menu%20horizontal'%20%7D%2C%0A%20%20%20%20%5D%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20mode%2C%0A%20%20%20%20%20%20data%2C%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%7D)%0A%3C%2Fscript%3E%0A"},{source:n(()=>[s(g)]),code:n(()=>[G]),default:n(()=>[H]),_:1}),O,$,s(e,{link:"@/demo/Layout/router-view.vue",content:"%3Ctemplate%3E%0A%20%20%3Cpro-layout%20class%3D%22docs-layout%22%3E%0A%20%20%20%20%3Crouter-view%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23default%3D%22%7B%20Component%2C%20route%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%3Ctransition%0A%20%20%20%20%20%20%20%20%20%20name%3D%22el-fade-in%22%0A%20%20%20%20%20%20%20%20%20%20mode%3D%22out-in%22%0A%20%20%20%20%20%20%20%20%20%20appear%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cpro-card%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Akey%3D%22route.fullPath%22%0A%20%20%20%20%20%20%20%20%20%20%20%20shadow%3D%22never%22%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ccomponent%20%3Ais%3D%22Component%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fpro-card%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftransition%3E%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Frouter-view%3E%0A%20%20%3C%2Fpro-layout%3E%0A%3C%2Ftemplate%3E%0A"},{source:n(()=>[s(m)]),code:n(()=>[J]),default:n(()=>[Q]),_:1}),X])}}};export{ct as default,lt as frontmatter};
