import{u as e}from"./index.f7a0cea1.js";import{u as t,v as o,ao as a}from"./modules-vue.8f5a3b00.js";import"./modules-element-plus.4c2acf7a.js";const r={class:"markdown-body"},n=[a('<h1 id="%E4%BB%8B%E7%BB%8D" tabindex="-1">介绍 <a class="header-anchor" href="#%E4%BB%8B%E7%BB%8D" aria-hidden="true">#</a></h1><p>element-pro-components 是一个基于 <a href="https://element-plus.org/">element-plus</a>, <a href="https://v3.vuejs.org/">vue</a>, <a href="https://next.router.vuejs.org/">vue-router</a> 的一个适用于中后台开发的一套组件库</p><div class="warning custom-block"><p class="custom-block-title">警告</p><p>在进入 v1.0.0 前，我们可能会对组件进行大幅度改动。如果你现在就在使用，版本升级的时候可以参考 <a href="https://github.com/tolking/element-pro-components/blob/master/CHANGELOG.md">CHANGELOG</a></p></div><h2 id="%E8%B5%B7%E5%9B%A0" tabindex="-1">起因 <a class="header-anchor" href="#%E8%B5%B7%E5%9B%A0" aria-hidden="true">#</a></h2><p>对于中后台开发来说，大部分的表格表单等页面都可以复用，通过将非业务逻辑的部分封装起来成组件能够更加方便使用。同时组件可以和路由等绑定，减少传值。以及实现一些 <code>element-plus</code> 上没有后台常用的功能等</p><p>虽然 <code>element-plus</code> 的封装已经很好了，但对于 <code>el-table</code> 或 <code>el-form</code> 的使用必不可少的需要写大量 <code>el-table-column</code> 或 <code>el-form-item</code> 代码。我们将它转换成 <code>column</code> 配置，通过传入一个数组动态生成这些数据。如果你传入的是具有响应式的数据，在改变 <code>column</code> 时，表格或表单会随之改变。根据这个特性你可以按照喜欢的方式去实现权限等功能</p><h2 id="%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E6%98%AF" tabindex="-1">为什么不是 <a class="header-anchor" href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E6%98%AF" aria-hidden="true">#</a></h2><h3 id="%E6%A8%A1%E7%89%88" tabindex="-1">模版 <a class="header-anchor" href="#%E6%A8%A1%E7%89%88" aria-hidden="true">#</a></h3><p>对于快速开发，或许模版更加方便，但模版并不一定十分适合你。你可能不习惯模版的 <code>prettier</code> 或 <code>eslint</code> 配置、你可能用不上模版的部分依赖、你可能会在意还没有写页面打包就 1M+ 的大小…</p><p>组件化的优势就是，你可以自己搭建开发环境。想用 <code>vite</code> 构建就用、想不用 <code>eslint</code> 就不用…</p><h3 id="%E5%9F%BA%E4%BA%8E-vue2-element-ui" tabindex="-1">基于 vue2 element-ui <a class="header-anchor" href="#%E5%9F%BA%E4%BA%8E-vue2-element-ui" aria-hidden="true">#</a></h3><p>该组件库的开发理念就是面向未来，如果查看源码你就会发现像是 vue 3 的 <a href="https://github.com/vuejs/rfcs/pull/227.">script setup</a> 实验性功能、像是 CSSNext 的 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*">CSS Variables</a>。在保证大部分浏览器的兼容性的情况下，会更多的使用新特性、新功能来开发</p><h2 id="%E8%B4%A1%E7%8C%AE" tabindex="-1">贡献 <a class="header-anchor" href="#%E8%B4%A1%E7%8C%AE" aria-hidden="true">#</a></h2><p>组件库还处于早期开发阶段，功能还需要完善。如果你希望参与贡献，欢迎 <a href="https://github.com/tolking/element-pro-components/pulls">Pull Request</a>。如果只是简单的文档相关的错误修正，你可以直接 PR。但如果是 BUG、新功能、新组件等，最好优先提 <a href="https://github.com/tolking/element-pro-components/issues">issues</a></p><p>git 提交信息风格参考 <a href="https://github.com/vuejs/vue-next/blob/master/.github/commit-convention.md">vue commit-convention</a></p><h2 id="%E6%B5%8F%E8%A7%88%E5%99%A8%E6%94%AF%E6%8C%81" tabindex="-1">浏览器支持 <a class="header-anchor" href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E6%94%AF%E6%8C%81" aria-hidden="true">#</a></h2><p>现代浏览器和 IE11 以上</p>',17)],s={setup(a,{expose:s}){s({frontmatter:{title:"介绍",meta:[{name:"description",content:"element-pro-components 组件库的基础信息介绍"},{property:"og:title",content:"介绍"}]}});return e({title:"介绍",meta:[{name:"description",content:"element-pro-components 组件库的基础信息介绍"},{property:"og:title",content:"介绍"}]}),(e,a)=>(t(),o("div",r,n))}};export{s as default};
