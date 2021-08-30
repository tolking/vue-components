import{u as t}from"./index.f7a0cea1.js";import{j as a,M as n,u as s,v as e,O as o,J as l,aa as p,d as c,ao as u,B as i,_ as r}from"./modules-vue.8f5a3b00.js";import"./modules-element-plus.4c2acf7a.js";const k={class:"markdown-body"},d=u('<h1 id="radio" tabindex="-1">Radio <a class="header-anchor" href="#radio" aria-hidden="true">#</a></h1><blockquote><p>封装单选框组件</p></blockquote><h2 id="%E4%BD%BF%E7%94%A8" tabindex="-1">使用 <a class="header-anchor" href="#%E4%BD%BF%E7%94%A8" aria-hidden="true">#</a></h2><h3 id="%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95" tabindex="-1">基础用法 <a class="header-anchor" href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95" aria-hidden="true">#</a></h3>',4),g=i("p",null,"传入 data 数据将自动生成选项",-1),f=i("pre",null,[i("code",{"v-pre":""},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),r("template")]),i("span",{class:"token punctuation"},">")]),r("\n  "),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),r("pro-radio")]),r("\n    "),i("span",{class:"token attr-name"},"v-model"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),r("radio"),i("span",{class:"token punctuation"},'"')]),r("\n    "),i("span",{class:"token attr-name"},":data"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),r("data"),i("span",{class:"token punctuation"},'"')]),r("\n  "),i("span",{class:"token punctuation"},"/>")]),r("\n"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),r("template")]),i("span",{class:"token punctuation"},">")]),r("\n\n"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),r("script")]),i("span",{class:"token punctuation"},">")]),i("span",{class:"token script"},[i("span",{class:"token language-javascript"},[r("\n"),i("span",{class:"token keyword"},"import"),r(),i("span",{class:"token punctuation"},"{"),r(" ref "),i("span",{class:"token punctuation"},"}"),r(),i("span",{class:"token keyword"},"from"),r(),i("span",{class:"token string"},"'vue'"),r("\n\n"),i("span",{class:"token keyword"},"export"),r(),i("span",{class:"token keyword"},"default"),r(),i("span",{class:"token punctuation"},"{"),r("\n  "),i("span",{class:"token function"},"setup"),i("span",{class:"token punctuation"},"("),i("span",{class:"token punctuation"},")"),r(),i("span",{class:"token punctuation"},"{"),r("\n    "),i("span",{class:"token keyword"},"const"),r(" radio "),i("span",{class:"token operator"},"="),r(),i("span",{class:"token function"},"ref"),i("span",{class:"token punctuation"},"("),i("span",{class:"token string"},"''"),i("span",{class:"token punctuation"},")"),r("\n    "),i("span",{class:"token keyword"},"const"),r(" data "),i("span",{class:"token operator"},"="),r(),i("span",{class:"token function"},"ref"),i("span",{class:"token punctuation"},"("),i("span",{class:"token punctuation"},"["),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Go'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'go'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'JavaScript'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'javascript'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Python'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'python'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Dart'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'dart'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'V'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'v'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n    "),i("span",{class:"token punctuation"},"]"),i("span",{class:"token punctuation"},")"),r("\n\n    "),i("span",{class:"token keyword"},"return"),r(),i("span",{class:"token punctuation"},"{"),r("\n      radio"),i("span",{class:"token punctuation"},","),r("\n      data"),i("span",{class:"token punctuation"},","),r("\n    "),i("span",{class:"token punctuation"},"}"),r("\n  "),i("span",{class:"token punctuation"},"}"),r("\n"),i("span",{class:"token punctuation"},"}"),r("\n")])]),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),r("script")]),i("span",{class:"token punctuation"},">")]),r("\n")])],-1),y=i("h3",{id:"%E6%8E%A7%E5%88%B6%E4%B8%8D%E5%8F%AF%E9%80%89%E9%A1%B9%E7%9B%AE",tabindex:"-1"},[r("控制不可选项目 "),i("a",{class:"header-anchor",href:"#%E6%8E%A7%E5%88%B6%E4%B8%8D%E5%8F%AF%E9%80%89%E9%A1%B9%E7%9B%AE","aria-hidden":"true"},"#")],-1),h=i("p",null,[r("将传入 data 数据中的某项设置为 "),i("code",null,"disabled: true"),r(" 即可")],-1),b=i("pre",null,[i("code",{"v-pre":""},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),r("template")]),i("span",{class:"token punctuation"},">")]),r("\n  "),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),r("pro-radio")]),r("\n    "),i("span",{class:"token attr-name"},"v-model"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),r("radio1"),i("span",{class:"token punctuation"},'"')]),r("\n    "),i("span",{class:"token attr-name"},":data"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),r("list"),i("span",{class:"token punctuation"},'"')]),r("\n  "),i("span",{class:"token punctuation"},"/>")]),r("\n"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),r("template")]),i("span",{class:"token punctuation"},">")]),r("\n\n"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),r("script")]),i("span",{class:"token punctuation"},">")]),i("span",{class:"token script"},[i("span",{class:"token language-javascript"},[r("\n"),i("span",{class:"token keyword"},"import"),r(),i("span",{class:"token punctuation"},"{"),r(" ref "),i("span",{class:"token punctuation"},"}"),r(),i("span",{class:"token keyword"},"from"),r(),i("span",{class:"token string"},"'vue'"),r("\n\n"),i("span",{class:"token keyword"},"export"),r(),i("span",{class:"token keyword"},"default"),r(),i("span",{class:"token punctuation"},"{"),r("\n  "),i("span",{class:"token function"},"setup"),i("span",{class:"token punctuation"},"("),i("span",{class:"token punctuation"},")"),r(),i("span",{class:"token punctuation"},"{"),r("\n    "),i("span",{class:"token keyword"},"const"),r(" radio1 "),i("span",{class:"token operator"},"="),r(),i("span",{class:"token function"},"ref"),i("span",{class:"token punctuation"},"("),i("span",{class:"token string"},"''"),i("span",{class:"token punctuation"},")"),r("\n    "),i("span",{class:"token keyword"},"const"),r(" list "),i("span",{class:"token operator"},"="),r(),i("span",{class:"token function"},"ref"),i("span",{class:"token punctuation"},"("),i("span",{class:"token punctuation"},"["),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Go'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'go'"),i("span",{class:"token punctuation"},","),r(" disabled"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token boolean"},"true"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'JavaScript'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'javascript'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Python'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'python'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Dart'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'dart'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'V'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'v'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n    "),i("span",{class:"token punctuation"},"]"),i("span",{class:"token punctuation"},")"),r("\n\n    "),i("span",{class:"token keyword"},"return"),r(),i("span",{class:"token punctuation"},"{"),r("\n      radio1"),i("span",{class:"token punctuation"},","),r("\n      list"),i("span",{class:"token punctuation"},","),r("\n    "),i("span",{class:"token punctuation"},"}"),r("\n  "),i("span",{class:"token punctuation"},"}"),r("\n"),i("span",{class:"token punctuation"},"}"),r("\n")])]),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),r("script")]),i("span",{class:"token punctuation"},">")]),r("\n")])],-1),v=i("h3",{id:"%E9%85%8D%E7%BD%AE%E7%BB%91%E5%AE%9A%E6%95%B0%E6%8D%AE%E9%94%AE%E5%80%BC",tabindex:"-1"},[r("配置绑定数据键值 "),i("a",{class:"header-anchor",href:"#%E9%85%8D%E7%BD%AE%E7%BB%91%E5%AE%9A%E6%95%B0%E6%8D%AE%E9%94%AE%E5%80%BC","aria-hidden":"true"},"#")],-1),x=i("p",null,[r("通过 config 配置数据键值。"),i("code",null,"value"),r("- v-model 绑定的键值、"),i("code",null,"label"),r("-显示键值、"),i("code",null,"disabled"),r("-控制不可选的键值、"),i("code",null,"name"),r("-原生 name 的键值")],-1),E=i("pre",null,[i("code",{"v-pre":""},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),r("template")]),i("span",{class:"token punctuation"},">")]),r("\n  "),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),r("pro-radio")]),r("\n    "),i("span",{class:"token attr-name"},"v-model"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),r("radio2"),i("span",{class:"token punctuation"},'"')]),r("\n    "),i("span",{class:"token attr-name"},":data"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),r("data"),i("span",{class:"token punctuation"},'"')]),r("\n    "),i("span",{class:"token attr-name"},":config"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),r("config"),i("span",{class:"token punctuation"},'"')]),r("\n  "),i("span",{class:"token punctuation"},"/>")]),r("\n"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),r("template")]),i("span",{class:"token punctuation"},">")]),r("\n\n"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),r("script")]),i("span",{class:"token punctuation"},">")]),i("span",{class:"token script"},[i("span",{class:"token language-javascript"},[r("\n"),i("span",{class:"token keyword"},"import"),r(),i("span",{class:"token punctuation"},"{"),r(" ref "),i("span",{class:"token punctuation"},"}"),r(),i("span",{class:"token keyword"},"from"),r(),i("span",{class:"token string"},"'vue'"),r("\n\n"),i("span",{class:"token keyword"},"export"),r(),i("span",{class:"token keyword"},"default"),r(),i("span",{class:"token punctuation"},"{"),r("\n  "),i("span",{class:"token function"},"setup"),i("span",{class:"token punctuation"},"("),i("span",{class:"token punctuation"},")"),r(),i("span",{class:"token punctuation"},"{"),r("\n    "),i("span",{class:"token keyword"},"const"),r(" radio2 "),i("span",{class:"token operator"},"="),r(),i("span",{class:"token function"},"ref"),i("span",{class:"token punctuation"},"("),i("span",{class:"token string"},"''"),i("span",{class:"token punctuation"},")"),r("\n    "),i("span",{class:"token keyword"},"const"),r(" config "),i("span",{class:"token operator"},"="),r(),i("span",{class:"token function"},"ref"),i("span",{class:"token punctuation"},"("),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'label'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'value'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},")"),r("\n    "),i("span",{class:"token keyword"},"const"),r(" data "),i("span",{class:"token operator"},"="),r(),i("span",{class:"token function"},"ref"),i("span",{class:"token punctuation"},"("),i("span",{class:"token punctuation"},"["),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Go'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'go'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'JavaScript'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'javascript'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Python'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'python'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Dart'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'dart'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'V'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'v'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n    "),i("span",{class:"token punctuation"},"]"),i("span",{class:"token punctuation"},")"),r("\n\n    "),i("span",{class:"token keyword"},"return"),r(),i("span",{class:"token punctuation"},"{"),r("\n      radio2"),i("span",{class:"token punctuation"},","),r("\n      config"),i("span",{class:"token punctuation"},","),r("\n      data"),i("span",{class:"token punctuation"},","),r("\n    "),i("span",{class:"token punctuation"},"}"),r("\n  "),i("span",{class:"token punctuation"},"}"),r("\n"),i("span",{class:"token punctuation"},"}"),r("\n")])]),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),r("script")]),i("span",{class:"token punctuation"},">")]),r("\n")])],-1),m=i("h3",{id:"%E6%8C%89%E9%92%AE%E6%A0%B7%E5%BC%8F",tabindex:"-1"},[r("按钮样式 "),i("a",{class:"header-anchor",href:"#%E6%8C%89%E9%92%AE%E6%A0%B7%E5%BC%8F","aria-hidden":"true"},"#")],-1),B=i("p",null,[r("使用 "),i("code",null,"pro-radio-button"),r(" 显示按钮样式的多选框组")],-1),A=i("pre",null,[i("code",{"v-pre":""},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),r("template")]),i("span",{class:"token punctuation"},">")]),r("\n  "),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),r("pro-radio-button")]),r("\n    "),i("span",{class:"token attr-name"},"v-model"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),r("radiobutton"),i("span",{class:"token punctuation"},'"')]),r("\n    "),i("span",{class:"token attr-name"},":data"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),r("data"),i("span",{class:"token punctuation"},'"')]),r("\n  "),i("span",{class:"token punctuation"},"/>")]),r("\n"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),r("template")]),i("span",{class:"token punctuation"},">")]),r("\n\n"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),r("script")]),i("span",{class:"token punctuation"},">")]),i("span",{class:"token script"},[i("span",{class:"token language-javascript"},[r("\n"),i("span",{class:"token keyword"},"import"),r(),i("span",{class:"token punctuation"},"{"),r(" ref "),i("span",{class:"token punctuation"},"}"),r(),i("span",{class:"token keyword"},"from"),r(),i("span",{class:"token string"},"'vue'"),r("\n\n"),i("span",{class:"token keyword"},"export"),r(),i("span",{class:"token keyword"},"default"),r(),i("span",{class:"token punctuation"},"{"),r("\n  "),i("span",{class:"token function"},"setup"),i("span",{class:"token punctuation"},"("),i("span",{class:"token punctuation"},")"),r(),i("span",{class:"token punctuation"},"{"),r("\n    "),i("span",{class:"token keyword"},"const"),r(" radiobutton "),i("span",{class:"token operator"},"="),r(),i("span",{class:"token function"},"ref"),i("span",{class:"token punctuation"},"("),i("span",{class:"token string"},"''"),i("span",{class:"token punctuation"},")"),r("\n    "),i("span",{class:"token keyword"},"const"),r(" data "),i("span",{class:"token operator"},"="),r(),i("span",{class:"token function"},"ref"),i("span",{class:"token punctuation"},"("),i("span",{class:"token punctuation"},"["),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Go'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'go'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'JavaScript'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'javascript'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Python'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'python'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Dart'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'dart'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'V'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'v'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n    "),i("span",{class:"token punctuation"},"]"),i("span",{class:"token punctuation"},")"),r("\n\n    "),i("span",{class:"token keyword"},"return"),r(),i("span",{class:"token punctuation"},"{"),r("\n      radiobutton"),i("span",{class:"token punctuation"},","),r("\n      data"),i("span",{class:"token punctuation"},","),r("\n    "),i("span",{class:"token punctuation"},"}"),r("\n  "),i("span",{class:"token punctuation"},"}"),r("\n"),i("span",{class:"token punctuation"},"}"),r("\n")])]),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),r("script")]),i("span",{class:"token punctuation"},">")]),r("\n")])],-1),w=u('<h3 id="radio-%E9%85%8D%E7%BD%AE" tabindex="-1">Radio 配置 <a class="header-anchor" href="#radio-%E9%85%8D%E7%BD%AE" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">可选值</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;">绑定值</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">data</td><td style="text-align:left;">绑定数据</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">config</td><td style="text-align:left;">配置绑定数据键值</td><td style="text-align:left;">object</td><td style="text-align:left;">-</td><td style="text-align:left;">{ value: ‘value’, label: ‘label’, disabled: ‘disabled’, name: ‘name’ }</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">尺寸</td><td style="text-align:left;">string</td><td style="text-align:left;">medium / small / mini</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">是否禁用</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">text-color</td><td style="text-align:left;">按钮形式激活时的文本颜色</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">#ffffff</td></tr><tr><td style="text-align:left;">fill</td><td style="text-align:left;">按钮形式激活时的填充色和边框色</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">#409EFF</td></tr></tbody></table><h4 id="radio-%E4%BA%8B%E4%BB%B6" tabindex="-1">Radio 事件 <a class="header-anchor" href="#radio-%E4%BA%8B%E4%BB%B6" aria-hidden="true">#</a></h4><table><thead><tr><th>名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>绑定值变化时触发的事件</td><td>选中的 Radio label 值</td></tr></tbody></table><h3 id="radiobutton" tabindex="-1">RadioButton <a class="header-anchor" href="#radiobutton" aria-hidden="true">#</a></h3><blockquote><p>封装单选框按钮组件</p></blockquote><h3 id="radiobutton-%E9%85%8D%E7%BD%AE" tabindex="-1">RadioButton 配置 <a class="header-anchor" href="#radiobutton-%E9%85%8D%E7%BD%AE" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">可选值</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;">绑定值</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">data</td><td style="text-align:left;">绑定数据</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">config</td><td style="text-align:left;">配置绑定数据键值</td><td style="text-align:left;">object</td><td style="text-align:left;">-</td><td style="text-align:left;">{ value: ‘value’, label: ‘label’, disabled: ‘disabled’, name: ‘name’ }</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">尺寸</td><td style="text-align:left;">string</td><td style="text-align:left;">medium / small / mini</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">是否禁用</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">text-color</td><td style="text-align:left;">按钮形式激活时的文本颜色</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">#ffffff</td></tr><tr><td style="text-align:left;">fill</td><td style="text-align:left;">按钮形式激活时的填充色和边框色</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">#409EFF</td></tr></tbody></table><h3 id="radiobutton-%E4%BA%8B%E4%BB%B6" tabindex="-1">RadioButton 事件 <a class="header-anchor" href="#radiobutton-%E4%BA%8B%E4%BB%B6" aria-hidden="true">#</a></h3><table><thead><tr><th>名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>绑定值变化时触发的事件</td><td>选中的 Radio label 值</td></tr></tbody></table>',10),D={setup(u,{expose:i}){i({frontmatter:{title:"Radio",meta:[{name:"description",content:"封装单选框组件"},{property:"og:title",content:"Radio"}]}});t({title:"Radio",meta:[{name:"description",content:"封装单选框组件"},{property:"og:title",content:"Radio"}]});let r=a(""),D=a([{value:"Go",label:"go"},{value:"JavaScript",label:"javascript"},{value:"Python",label:"python"},{value:"Dart",label:"dart"},{value:"V",label:"v"}]),V=a(""),j=a([{value:"Go",label:"go",disabled:!0},{value:"JavaScript",label:"javascript"},{value:"Python",label:"python"},{value:"Dart",label:"dart"},{value:"V",label:"v"}]),F=a(""),q=a({value:"label",label:"value"});D=a([{value:"Go",label:"go"},{value:"JavaScript",label:"javascript"},{value:"Python",label:"python"},{value:"Dart",label:"dart"},{value:"V",label:"v"}]);let R=a("");return D=a([{value:"Go",label:"go"},{value:"JavaScript",label:"javascript"},{value:"Python",label:"python"},{value:"Dart",label:"dart"},{value:"V",label:"v"}]),(t,a)=>{const u=n("pro-radio"),i=n("pro-code"),J=n("pro-radio-button");return s(),e("div",k,[d,o(i,null,{description:l((()=>[g])),code:l((()=>[f])),default:l((()=>[o(u,{modelValue:p(r),"onUpdate:modelValue":a[0]||(a[0]=t=>c(r)?r.value=t:r=t),data:p(D)},null,8,["modelValue","data"])])),_:1}),y,o(i,null,{description:l((()=>[h])),code:l((()=>[b])),default:l((()=>[o(u,{modelValue:p(V),"onUpdate:modelValue":a[1]||(a[1]=t=>c(V)?V.value=t:V=t),data:p(j)},null,8,["modelValue","data"])])),_:1}),v,o(i,null,{description:l((()=>[x])),code:l((()=>[E])),default:l((()=>[o(u,{modelValue:p(F),"onUpdate:modelValue":a[2]||(a[2]=t=>c(F)?F.value=t:F=t),data:p(D),config:p(q)},null,8,["modelValue","data","config"])])),_:1}),m,o(i,null,{description:l((()=>[B])),code:l((()=>[A])),default:l((()=>[o(J,{modelValue:p(R),"onUpdate:modelValue":a[3]||(a[3]=t=>c(R)?R.value=t:R=t),data:p(D)},null,8,["modelValue","data"])])),_:1}),w])}}};export{D as default};
