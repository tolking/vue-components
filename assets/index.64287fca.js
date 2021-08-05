import{u as n}from"./index.41028ab1.js";import{l as s,m as a,ak as t,n as o,x as e}from"./modules-vue.5333eed6.js";import"./modules-element-plus.b3b25a83.js";const p={class:"markdown-body"},c=t('<h1 id="%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B" tabindex="-1">快速上手 <a class="header-anchor" href="#%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B" aria-hidden="true">#</a></h1><h2 id="%E5%87%86%E5%A4%87" tabindex="-1">准备 <a class="header-anchor" href="#%E5%87%86%E5%A4%87" aria-hidden="true">#</a></h2><p>在开始前你可能需要 vue3 版本脚手架工具</p><ul><li><a href="https://vitejs.dev/">vite</a></li><li><a href="https://cli.vuejs.org/zh/">vue-cli</a></li><li><a href="https://zh.nuxtjs.org/">nuxt</a></li></ul><h2 id="%E5%AE%89%E8%A3%85" tabindex="-1">安装 <a class="header-anchor" href="#%E5%AE%89%E8%A3%85" aria-hidden="true">#</a></h2>',5),l=o("div",{class:"language-"},[o("pre",null,[o("code",{"v-pre":""},"yarn add element-pro-components\n# 或者\nnpm i element-pro-components\n")])],-1),u=o("h2",{id:"%E5%AE%8C%E6%95%B4%E5%BC%95%E5%85%A5",tabindex:"-1"},[e("完整引入 "),o("a",{class:"header-anchor",href:"#%E5%AE%8C%E6%95%B4%E5%BC%95%E5%85%A5","aria-hidden":"true"},"#")],-1),k=o("div",{class:"language-js"},[o("pre",null,[o("code",{"v-pre":""},[o("span",{class:"token keyword"},"import"),e(),o("span",{class:"token punctuation"},"{"),e(" createApp "),o("span",{class:"token punctuation"},"}"),e(),o("span",{class:"token keyword"},"from"),e(),o("span",{class:"token string"},"'vue'"),e("\n"),o("span",{class:"token keyword"},"import"),e(" App "),o("span",{class:"token keyword"},"from"),e(),o("span",{class:"token string"},"'./App.vue'"),e("\n"),o("span",{class:"token keyword"},"import"),e(" ElementPro "),o("span",{class:"token keyword"},"from"),e(),o("span",{class:"token string"},"'element-pro-components'"),e("\n"),o("span",{class:"token keyword"},"import"),e(),o("span",{class:"token string"},"'element-pro-components/lib/styles/index.css'"),e("\n\n"),o("span",{class:"token keyword"},"const"),e(" app "),o("span",{class:"token operator"},"="),e(),o("span",{class:"token function"},"createApp"),o("span",{class:"token punctuation"},"("),e("App"),o("span",{class:"token punctuation"},")"),e("\n\napp"),o("span",{class:"token punctuation"},"."),o("span",{class:"token function"},"use"),o("span",{class:"token punctuation"},"("),e("ElementPro"),o("span",{class:"token punctuation"},")"),e("\napp"),o("span",{class:"token punctuation"},"."),o("span",{class:"token function"},"mount"),o("span",{class:"token punctuation"},"("),o("span",{class:"token string"},"'#app'"),o("span",{class:"token punctuation"},")"),e("\n")])])],-1),i=t('<h2 id="%E6%8C%89%E9%9C%80%E5%BC%95%E5%85%A5" tabindex="-1">按需引入 <a class="header-anchor" href="#%E6%8C%89%E9%9C%80%E5%BC%95%E5%85%A5" aria-hidden="true">#</a></h2><h3 id="vite" tabindex="-1">vite <a class="header-anchor" href="#vite" aria-hidden="true">#</a></h3><p>借助 <a href="https://github.com/anncwb/vite-plugin-style-import">vite-plugin-style-import</a> 实现加载样式</p><ul><li>安装</li></ul>',4),r=o("div",{class:"language-"},[o("pre",null,[o("code",{"v-pre":""},"yarn add -D vite-plugin-style-import\n# 或者\nnpm i -D vite-plugin-style-import\n")])],-1),m=o("ul",null,[o("li",null,"修改配置 vite.config")],-1),d=o("div",{class:"language-js"},[o("pre",null,[o("code",{"v-pre":""},[o("span",{class:"token keyword"},"import"),e(),o("span",{class:"token punctuation"},"{"),e(" defineConfig "),o("span",{class:"token punctuation"},"}"),e(),o("span",{class:"token keyword"},"from"),e(),o("span",{class:"token string"},"'vite'"),e("\n"),o("span",{class:"token keyword"},"import"),e(" vue "),o("span",{class:"token keyword"},"from"),e(),o("span",{class:"token string"},"'@vitejs/plugin-vue'"),e("\n"),o("span",{class:"token keyword"},"import"),e(" styleImport "),o("span",{class:"token keyword"},"from"),e(),o("span",{class:"token string"},"'vite-plugin-style-import'"),e("\n\n"),o("span",{class:"token keyword"},"export"),e(),o("span",{class:"token keyword"},"default"),e(),o("span",{class:"token function"},"defineConfig"),o("span",{class:"token punctuation"},"("),o("span",{class:"token punctuation"},"{"),e("\n  plugins"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token punctuation"},"["),e("\n    "),o("span",{class:"token function"},"vue"),o("span",{class:"token punctuation"},"("),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},","),e("\n    "),o("span",{class:"token function"},"styleImport"),o("span",{class:"token punctuation"},"("),o("span",{class:"token punctuation"},"{"),e("\n      libs"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token punctuation"},"["),e("\n        "),o("span",{class:"token punctuation"},"{"),e("\n          importTest"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token regex"},[o("span",{class:"token regex-delimiter"},"/"),o("span",{class:"token regex-source language-regex"},"^Pro"),o("span",{class:"token regex-delimiter"},"/")]),o("span",{class:"token punctuation"},","),e("\n          libraryName"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token string"},"'element-pro-components'"),o("span",{class:"token punctuation"},","),e("\n          ensureStyleFile"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token boolean"},"true"),o("span",{class:"token punctuation"},","),e("\n          "),o("span",{class:"token function-variable function"},"resolveStyle"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token punctuation"},"("),o("span",{class:"token parameter"},"name"),o("span",{class:"token punctuation"},")"),e(),o("span",{class:"token operator"},"=>"),e(),o("span",{class:"token punctuation"},"{"),e("\n            name "),o("span",{class:"token operator"},"="),e(" name"),o("span",{class:"token punctuation"},"."),o("span",{class:"token function"},"slice"),o("span",{class:"token punctuation"},"("),o("span",{class:"token number"},"4"),o("span",{class:"token punctuation"},")"),e("\n            "),o("span",{class:"token keyword"},"return"),e(),o("span",{class:"token template-string"},[o("span",{class:"token template-punctuation string"},"`"),o("span",{class:"token string"},"element-pro-components/lib/styles/"),o("span",{class:"token interpolation"},[o("span",{class:"token interpolation-punctuation punctuation"},"${"),e("name"),o("span",{class:"token interpolation-punctuation punctuation"},"}")]),o("span",{class:"token string"},".css"),o("span",{class:"token template-punctuation string"},"`")]),e("\n          "),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},","),e("\n        "),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},","),e("\n      "),o("span",{class:"token punctuation"},"]"),o("span",{class:"token punctuation"},","),e("\n    "),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},","),e("\n  "),o("span",{class:"token punctuation"},"]"),o("span",{class:"token punctuation"},","),e("\n"),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},")"),e("\n")])])],-1),g=o("h3",{id:"vue-cli",tabindex:"-1"},[e("vue-cli "),o("a",{class:"header-anchor",href:"#vue-cli","aria-hidden":"true"},"#")],-1),h=o("p",null,[e("借助 "),o("a",{href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"),e(" 实现加载样式")],-1),y=o("ul",null,[o("li",null,"安装")],-1),v=o("div",{class:"language-"},[o("pre",null,[o("code",{"v-pre":""},"yarn add -D babel-plugin-import\n# 或者\nnpm i -D babel-plugin-import\n")])],-1),b=o("ul",null,[o("li",null,"修改配置 babel.config")],-1),f=o("div",{class:"language-js"},[o("pre",null,[o("code",{"v-pre":""},[e("module"),o("span",{class:"token punctuation"},"."),e("exports "),o("span",{class:"token operator"},"="),e(),o("span",{class:"token punctuation"},"{"),e("\n  plugins"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token punctuation"},"["),e("\n    "),o("span",{class:"token punctuation"},"["),e("\n      "),o("span",{class:"token string"},"'import'"),o("span",{class:"token punctuation"},","),e("\n      "),o("span",{class:"token punctuation"},"{"),e("\n        libraryName"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token string"},"'element-pro-components'"),o("span",{class:"token punctuation"},","),e("\n        "),o("span",{class:"token function-variable function"},"customStyleName"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token punctuation"},"("),o("span",{class:"token parameter"},"name"),o("span",{class:"token punctuation"},")"),e(),o("span",{class:"token operator"},"=>"),e(),o("span",{class:"token punctuation"},"{"),e("\n          name "),o("span",{class:"token operator"},"="),e(" name"),o("span",{class:"token punctuation"},"."),o("span",{class:"token function"},"slice"),o("span",{class:"token punctuation"},"("),o("span",{class:"token number"},"4"),o("span",{class:"token punctuation"},")"),e("\n          "),o("span",{class:"token keyword"},"return"),e(),o("span",{class:"token template-string"},[o("span",{class:"token template-punctuation string"},"`"),o("span",{class:"token string"},"element-pro-components/lib/styles/"),o("span",{class:"token interpolation"},[o("span",{class:"token interpolation-punctuation punctuation"},"${"),e("name"),o("span",{class:"token interpolation-punctuation punctuation"},"}")]),o("span",{class:"token string"},".css"),o("span",{class:"token template-punctuation string"},"`")]),e("\n        "),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},","),e("\n      "),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},","),e("\n    "),o("span",{class:"token punctuation"},"]"),o("span",{class:"token punctuation"},","),e("\n  "),o("span",{class:"token punctuation"},"]"),o("span",{class:"token punctuation"},","),e("\n"),o("span",{class:"token punctuation"},"}"),e("\n")])])],-1),E=o("h3",{id:"%E6%89%8B%E5%8A%A8%E5%BC%95%E5%85%A5%E6%A0%B7%E5%BC%8F",tabindex:"-1"},[e("手动引入样式 "),o("a",{class:"header-anchor",href:"#%E6%89%8B%E5%8A%A8%E5%BC%95%E5%85%A5%E6%A0%B7%E5%BC%8F","aria-hidden":"true"},"#")],-1),w=o("p",null,"例如：",-1),A=o("div",{class:"language-js"},[o("pre",null,[o("code",{"v-pre":""},[o("span",{class:"token keyword"},"import"),e(),o("span",{class:"token punctuation"},"{"),e(" ProLayout "),o("span",{class:"token punctuation"},"}"),e(),o("span",{class:"token keyword"},"from"),e(),o("span",{class:"token string"},"'element-pro-components'"),e("\n"),o("span",{class:"token keyword"},"import"),e(),o("span",{class:"token string"},"'element-pro-components/lib/styles/layout.css'"),e("\n")])])],-1),x=o("p",null,"接下来需要引入 css 变量文件",-1),B=o("div",{class:"language-js"},[o("pre",null,[o("code",{"v-pre":""},[o("span",{class:"token keyword"},"import"),e(),o("span",{class:"token punctuation"},"{"),e(" createApp "),o("span",{class:"token punctuation"},"}"),e(),o("span",{class:"token keyword"},"from"),e(),o("span",{class:"token string"},"'vue'"),e("\n"),o("span",{class:"token keyword"},"import"),e(" App "),o("span",{class:"token keyword"},"from"),e(),o("span",{class:"token string"},"'./App.vue'"),e("\n"),o("span",{class:"token keyword"},"import"),e(),o("span",{class:"token punctuation"},"{"),e(" ProLayout "),o("span",{class:"token punctuation"},"}"),e(),o("span",{class:"token keyword"},"from"),e(),o("span",{class:"token string"},"'element-pro-components'"),e("\n"),o("span",{class:"token comment"},"// 除非重新定义所有css变量，否则需要手动引入css变量文件"),e("\n"),o("span",{class:"token keyword"},"import"),e(),o("span",{class:"token string"},"'element-pro-components/lib/styles/vars.css'"),e("\n\n"),o("span",{class:"token keyword"},"const"),e(" app "),o("span",{class:"token operator"},"="),e(),o("span",{class:"token function"},"createApp"),o("span",{class:"token punctuation"},"("),e("App"),o("span",{class:"token punctuation"},")"),e("\n\napp"),o("span",{class:"token punctuation"},"."),o("span",{class:"token function"},"use"),o("span",{class:"token punctuation"},"("),e("ProLayout"),o("span",{class:"token punctuation"},")"),e("\n"),o("span",{class:"token comment"},"// 或者"),e("\napp"),o("span",{class:"token punctuation"},"."),o("span",{class:"token function"},"component"),o("span",{class:"token punctuation"},"("),o("span",{class:"token string"},"'ProLayout'"),o("span",{class:"token punctuation"},","),e(" ProLayout"),o("span",{class:"token punctuation"},")"),e("\n\napp"),o("span",{class:"token punctuation"},"."),o("span",{class:"token function"},"mount"),o("span",{class:"token punctuation"},"("),o("span",{class:"token string"},"'#app'"),o("span",{class:"token punctuation"},")"),e("\n")])])],-1),P=t('<div class="tip custom-block"><p class="custom-block-title">提示</p><p>完整组件列表<a href="https://github.com/tolking/element-pro-components/blob/master/src/index.ts">参考里面的 components</a></p><p>在导出组件的同时，一起导出的还包括内部使用的<a href="https://github.com/tolking/element-pro-components/blob/master/src/utils/">utils</a>与<a href="https://github.com/tolking/element-pro-components/blob/master/src/composables/">composables</a>，如果需要可以引用使用</p></div><h2 id="%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE" tabindex="-1">全局配置 <a class="header-anchor" href="#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE" aria-hidden="true">#</a></h2><ul><li>参考</li></ul>',3),C=o("div",{class:"language-ts"},[o("pre",null,[o("code",{"v-pre":""},[o("span",{class:"token keyword"},"import"),e(),o("span",{class:"token keyword"},"type"),e(),o("span",{class:"token punctuation"},"{"),e(" InstallOptions "),o("span",{class:"token punctuation"},"}"),e(),o("span",{class:"token keyword"},"from"),e(),o("span",{class:"token string"},"'../types/index'"),e("\n\n"),o("span",{class:"token keyword"},"export"),e(),o("span",{class:"token keyword"},"const"),e(" config"),o("span",{class:"token operator"},":"),e(" Required"),o("span",{class:"token operator"},"<"),e("InstallOptions"),o("span",{class:"token operator"},">"),e(),o("span",{class:"token operator"},"="),e(),o("span",{class:"token punctuation"},"{"),e("\n  pagination"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token punctuation"},"{"),e("\n    background"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token boolean"},"true"),o("span",{class:"token punctuation"},","),e("\n    layout"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token string"},"'prev, pager, next, sizes'"),o("span",{class:"token punctuation"},","),e("\n  "),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},","),e("\n  menu"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token punctuation"},"{"),e("\n    add"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token boolean"},"true"),o("span",{class:"token punctuation"},","),e("\n    addText"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token string"},"'Add'"),o("span",{class:"token punctuation"},","),e("\n    addProps"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token punctuation"},"{"),e(" type"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token string"},"'primary'"),e(),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},","),e("\n    edit"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token boolean"},"true"),o("span",{class:"token punctuation"},","),e("\n    editText"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token string"},"'Edit'"),o("span",{class:"token punctuation"},","),e("\n    editProps"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token punctuation"},"{"),e(" type"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token string"},"'text'"),e(),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},","),e("\n    del"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token boolean"},"true"),o("span",{class:"token punctuation"},","),e("\n    delText"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token string"},"'Delete'"),o("span",{class:"token punctuation"},","),e("\n    delProps"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token punctuation"},"{"),e(" type"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token string"},"'text'"),e(),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},","),e("\n    submit"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token boolean"},"true"),o("span",{class:"token punctuation"},","),e("\n    submitText"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token string"},"'Submit'"),o("span",{class:"token punctuation"},","),e("\n    submitProps"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token punctuation"},"{"),e(" type"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token string"},"'primary'"),e(),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},","),e("\n    reset"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token boolean"},"true"),o("span",{class:"token punctuation"},","),e("\n    resetText"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token string"},"'Reset'"),o("span",{class:"token punctuation"},","),e("\n    search"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token boolean"},"true"),o("span",{class:"token punctuation"},","),e("\n    searchText"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token string"},"'Search'"),o("span",{class:"token punctuation"},","),e("\n    searchProps"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token punctuation"},"{"),e(" type"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token string"},"'primary'"),e(),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},","),e("\n    searchReset"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token boolean"},"true"),o("span",{class:"token punctuation"},","),e("\n    searchResetText"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token string"},"'Reset'"),o("span",{class:"token punctuation"},","),e("\n  "),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},","),e("\n"),o("span",{class:"token punctuation"},"}"),e("\n")])])],-1),j=o("ul",null,[o("li",null,"配置")],-1),q=o("div",{class:"language-js"},[o("pre",null,[o("code",{"v-pre":""},[e("app"),o("span",{class:"token punctuation"},"."),o("span",{class:"token function"},"use"),o("span",{class:"token punctuation"},"("),e("ElementPro"),o("span",{class:"token punctuation"},","),e(),o("span",{class:"token punctuation"},"{"),e("\n  pagination"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token punctuation"},"{"),e("\n    small"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token boolean"},"true"),o("span",{class:"token punctuation"},","),e("\n    hideOnSinglePage"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token boolean"},"true"),o("span",{class:"token punctuation"},","),e("\n    layout"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token string"},"'prev, pager, next'"),o("span",{class:"token punctuation"},","),e("\n  "),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},","),e("\n"),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},")"),e("\n")])])],-1),D=t('<div class="tip custom-block"><p class="custom-block-title">提示</p><p>如果使用按需引入，可以通过 <code>ProCrud</code> <code>ProForm</code> <code>ProTable</code> 中的一个注入全局配置</p></div><h2 id="%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8" tabindex="-1">开始使用 <a class="header-anchor" href="#%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p>文档示例基于 <a href="https://v3.cn.vuejs.org/guide/composition-api-introduction.html">组合式 API</a> 语法，如果不熟悉语法请前往官方文档查看</p><p>如果使用 VS Code 开发，配合 Vetur 使用提供完整的组件、属性、事件补全。例如：输入 <code>&lt;pro-</code> 将罗列出所有组件库组件</p><p>对于 webstorm 也提供了完整的组件、属性、事件补全</p><p>如果使用 TypeScript 编写，可以参考 <a href="https://github.com/tolking/element-pro-components/tree/master/docs/src/views/">example</a>。内部提供部分类型方便使用</p></div>',3),F=o("div",{class:"language-vue"},[o("pre",null,[o("code",{"v-pre":""},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),e("template")]),o("span",{class:"token punctuation"},">")]),e("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),e("pro-layout")]),e(),o("span",{class:"token attr-name"},":routes"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),e("routes"),o("span",{class:"token punctuation"},'"')]),o("span",{class:"token punctuation"},">")]),e("\n    "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),e("template")]),e(),o("span",{class:"token attr-name"},"#logo"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),e("{ collapse }"),o("span",{class:"token punctuation"},'"')]),o("span",{class:"token punctuation"},">")]),e("\n      "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),e("transition")]),e("\n        "),o("span",{class:"token attr-name"},"name"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),e("el-zoom-in-top"),o("span",{class:"token punctuation"},'"')]),e("\n        "),o("span",{class:"token attr-name"},"mode"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),e("out-in"),o("span",{class:"token punctuation"},'"')]),e("\n      "),o("span",{class:"token punctuation"},">")]),e("\n        "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),e("img")]),e("\n          "),o("span",{class:"token attr-name"},"v-if"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),e("collapse"),o("span",{class:"token punctuation"},'"')]),e("\n          "),o("span",{class:"token attr-name"},"src"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),e("/logo.svg"),o("span",{class:"token punctuation"},'"')]),e("\n          "),o("span",{class:"token attr-name"},"alt"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),e("logo"),o("span",{class:"token punctuation"},'"')]),e("\n          "),o("span",{class:"token attr-name"},"class"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),e("logo-img"),o("span",{class:"token punctuation"},'"')]),e("\n        "),o("span",{class:"token punctuation"},">")]),e("\n        "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),e("span")]),e("\n          "),o("span",{class:"token attr-name"},"v-else"),e("\n          "),o("span",{class:"token attr-name"},"class"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),e("logo-title"),o("span",{class:"token punctuation"},'"')]),e("\n        "),o("span",{class:"token punctuation"},">")]),e("element-pro-components"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),e("span")]),o("span",{class:"token punctuation"},">")]),e("\n      "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),e("transition")]),o("span",{class:"token punctuation"},">")]),e("\n    "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),e("template")]),o("span",{class:"token punctuation"},">")]),e("\n    "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),e("template")]),e(),o("span",{class:"token attr-name"},"#header-left"),o("span",{class:"token punctuation"},">")]),e("\n      "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),e("pro-breadcrumb")]),e(),o("span",{class:"token punctuation"},"/>")]),e("\n    "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),e("template")]),o("span",{class:"token punctuation"},">")]),e("\n    "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),e("template")]),e(),o("span",{class:"token attr-name"},"#header-right"),o("span",{class:"token punctuation"},">")]),e("\n      "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),e("nav-header")]),e(),o("span",{class:"token punctuation"},"/>")]),e("\n    "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),e("template")]),o("span",{class:"token punctuation"},">")]),e("\n    "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),e("template")]),e(),o("span",{class:"token attr-name"},"#header-bottom"),o("span",{class:"token punctuation"},">")]),e("\n      "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),e("pro-tabs")]),e(),o("span",{class:"token attr-name"},"ref"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),e("tabs"),o("span",{class:"token punctuation"},'"')]),e(),o("span",{class:"token punctuation"},"/>")]),e("\n    "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),e("template")]),o("span",{class:"token punctuation"},">")]),e("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),e("pro-layout")]),o("span",{class:"token punctuation"},">")]),e("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),e("pwa-popup")]),e(),o("span",{class:"token punctuation"},"/>")]),e("\n"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),e("template")]),o("span",{class:"token punctuation"},">")]),e("\n\n"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),e("script")]),e(),o("span",{class:"token attr-name"},"setup"),e(),o("span",{class:"token attr-name"},"lang"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),e("ts"),o("span",{class:"token punctuation"},'"')]),o("span",{class:"token punctuation"},">")]),o("span",{class:"token script"},[o("span",{class:"token language-javascript"},[e("\n"),o("span",{class:"token keyword"},"import"),e(),o("span",{class:"token punctuation"},"{"),e(" computed"),o("span",{class:"token punctuation"},","),e(" provide"),o("span",{class:"token punctuation"},","),e(" shallowRef "),o("span",{class:"token punctuation"},"}"),e(),o("span",{class:"token keyword"},"from"),e(),o("span",{class:"token string"},"'vue'"),e("\n"),o("span",{class:"token keyword"},"import"),e(),o("span",{class:"token punctuation"},"{"),e(" useRouter "),o("span",{class:"token punctuation"},"}"),e(),o("span",{class:"token keyword"},"from"),e(),o("span",{class:"token string"},"'vue-router'"),e("\n"),o("span",{class:"token keyword"},"import"),e(),o("span",{class:"token punctuation"},"{"),e(" useLang "),o("span",{class:"token punctuation"},"}"),e(),o("span",{class:"token keyword"},"from"),e(),o("span",{class:"token string"},"'../composables/index'"),e("\n"),o("span",{class:"token keyword"},"import"),e(" NavHeader "),o("span",{class:"token keyword"},"from"),e(),o("span",{class:"token string"},"'../components/NavHeader.vue'"),e("\n"),o("span",{class:"token keyword"},"import"),e(" PwaPopup "),o("span",{class:"token keyword"},"from"),e(),o("span",{class:"token string"},"'../components/PwaPopup.vue'"),e("\n\n"),o("span",{class:"token keyword"},"const"),e(" router "),o("span",{class:"token operator"},"="),e(),o("span",{class:"token function"},"useRouter"),o("span",{class:"token punctuation"},"("),o("span",{class:"token punctuation"},")"),e("\n"),o("span",{class:"token keyword"},"const"),e(" lang "),o("span",{class:"token operator"},"="),e(),o("span",{class:"token function"},"useLang"),o("span",{class:"token punctuation"},"("),o("span",{class:"token punctuation"},")"),e("\n"),o("span",{class:"token keyword"},"const"),e(" tabs "),o("span",{class:"token operator"},"="),e(),o("span",{class:"token function"},"shallowRef"),o("span",{class:"token punctuation"},"("),o("span",{class:"token punctuation"},"{"),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},")"),e("\n"),o("span",{class:"token keyword"},"const"),e(" routes "),o("span",{class:"token operator"},"="),e(),o("span",{class:"token function"},"computed"),o("span",{class:"token punctuation"},"("),o("span",{class:"token punctuation"},"("),o("span",{class:"token punctuation"},")"),e(),o("span",{class:"token operator"},"=>"),e(),o("span",{class:"token punctuation"},"{"),e("\n  "),o("span",{class:"token keyword"},"const"),e(" reg "),o("span",{class:"token operator"},"="),e(),o("span",{class:"token keyword"},"new"),e(),o("span",{class:"token class-name"},"RegExp"),o("span",{class:"token punctuation"},"("),o("span",{class:"token template-string"},[o("span",{class:"token template-punctuation string"},"`"),o("span",{class:"token string"},"^\\\\/("),o("span",{class:"token interpolation"},[o("span",{class:"token interpolation-punctuation punctuation"},"${"),e("lang"),o("span",{class:"token punctuation"},"."),e("value"),o("span",{class:"token interpolation-punctuation punctuation"},"}")]),o("span",{class:"token string"},"|dev)\\\\/"),o("span",{class:"token template-punctuation string"},"`")]),o("span",{class:"token punctuation"},")"),e("\n  "),o("span",{class:"token keyword"},"const"),e(" routes "),o("span",{class:"token operator"},"="),e(" router"),o("span",{class:"token punctuation"},"."),e("options"),o("span",{class:"token punctuation"},"."),e("routes\n  "),o("span",{class:"token keyword"},"return"),e(" routes"),o("span",{class:"token punctuation"},"."),o("span",{class:"token function"},"filter"),o("span",{class:"token punctuation"},"("),o("span",{class:"token punctuation"},"("),o("span",{class:"token parameter"},"item"),o("span",{class:"token punctuation"},")"),e(),o("span",{class:"token operator"},"=>"),e(" reg"),o("span",{class:"token punctuation"},"."),o("span",{class:"token function"},"test"),o("span",{class:"token punctuation"},"("),e("item"),o("span",{class:"token punctuation"},"."),e("path"),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},")"),e("\n"),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},")"),e("\n\n"),o("span",{class:"token function"},"provide"),o("span",{class:"token punctuation"},"("),o("span",{class:"token string"},"'tabs'"),o("span",{class:"token punctuation"},","),e(" tabs"),o("span",{class:"token punctuation"},")"),e("\n")])]),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),e("script")]),o("span",{class:"token punctuation"},">")]),e("\n\n"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),e("style")]),e(),o("span",{class:"token attr-name"},"scoped"),o("span",{class:"token punctuation"},">")]),o("span",{class:"token style"},[o("span",{class:"token language-css"},[e("\n"),o("span",{class:"token selector"},".logo-img"),e(),o("span",{class:"token punctuation"},"{"),e("\n  "),o("span",{class:"token property"},"padding"),o("span",{class:"token punctuation"},":"),e(" 10px"),o("span",{class:"token punctuation"},";"),e("\n  "),o("span",{class:"token property"},"width"),o("span",{class:"token punctuation"},":"),e(),o("span",{class:"token function"},"calc"),o("span",{class:"token punctuation"},"("),o("span",{class:"token function"},"var"),o("span",{class:"token punctuation"},"("),e("--aside-collapse-width"),o("span",{class:"token punctuation"},")"),e(" - 20px"),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},";"),e("\n"),o("span",{class:"token punctuation"},"}"),e("\n"),o("span",{class:"token selector"},".logo-title"),e(),o("span",{class:"token punctuation"},"{"),e("\n  "),o("span",{class:"token property"},"line-height"),o("span",{class:"token punctuation"},":"),e(),o("span",{class:"token function"},"var"),o("span",{class:"token punctuation"},"("),e("--header-height"),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},";"),e("\n"),o("span",{class:"token punctuation"},"}"),e("\n")])]),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),e("style")]),o("span",{class:"token punctuation"},">")]),e("\n")])])],-1),R={setup(t,{expose:o}){o({frontmatter:{title:"快速上手",meta:[{name:"description",content:"快速上手 element-pro-components 组件库"},{property:"og:title",content:"快速上手"}]}});return n({title:"快速上手",meta:[{name:"description",content:"快速上手 element-pro-components 组件库"},{property:"og:title",content:"快速上手"}]}),(n,t)=>(s(),a("div",p,[c,l,u,k,i,r,m,d,g,h,y,v,b,f,E,w,A,x,B,P,C,j,q,D,F]))}};export{R as default};
