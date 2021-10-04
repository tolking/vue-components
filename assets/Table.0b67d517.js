import{u as z}from"./index.55ddc70f.js";import{r as o,V as I,P as f,x as j,y as F,R as e,L as s,u as a,a1 as n,H as h,E as t,f as b,aq as w}from"./modules-vue.f6b95b27.js";import"./modules-element-plus.fcfc3143.js";const C={class:"markdown-body"},O=w('<h1 id="table" tabindex="-1">Table <a class="header-anchor" href="#table" aria-hidden="true">#</a></h1><blockquote><p>Display multiple data with similar format. You can sort, filter, compare your data in a table</p></blockquote><h2 id="use" tabindex="-1">Use <a class="header-anchor" href="#use" aria-hidden="true">#</a></h2><h3 id="basic-use" tabindex="-1">Basic Use <a class="header-anchor" href="#basic-use" aria-hidden="true">#</a></h3><p>When columns is bound to a reactive array, changes in the array will affect table changes (dynamic table). If you don\u2019t need a dynamic table, it is recommended to bind an ordinary array.</p>',5),B=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("pro-table")]),n(`
    `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":columns"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("columns"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" columns "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Date'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'date'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Name'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Address'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" data "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-03'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-02'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-04'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-01'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      data`),t("span",{class:"token punctuation"},","),n(`
      columns`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),P=t("h3",{id:"index-columns",tabindex:"-1"},[n("Index Columns "),t("a",{class:"header-anchor",href:"#index-columns","aria-hidden":"true"},"#")],-1),R=t("p",null,[n("Set "),t("code",null,"index"),n(" attribute to display index columns")],-1),W=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("pro-table")]),n(`
    `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":columns"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("columns"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":index"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ label: "),t("span",{class:"token punctuation"},"'"),n("#"),t("span",{class:"token punctuation"},"'"),n(" }"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" columns "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Date'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'date'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Name'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Address'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" data "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-03'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-02'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-04'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-01'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      data`),t("span",{class:"token punctuation"},","),n(`
      columns`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),U=t("h3",{id:"selection-columns",tabindex:"-1"},[n("Selection Columns "),t("a",{class:"header-anchor",href:"#selection-columns","aria-hidden":"true"},"#")],-1),V=t("p",null,[n("Set "),t("code",null,"selection"),n(" attribute to display selection columns")],-1),E=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("pro-table")]),n(`
    `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":columns"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("columns"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"selection"),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" columns "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Date'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'date'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Name'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Address'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" data "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-03'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-02'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-04'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-01'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      data`),t("span",{class:"token punctuation"},","),n(`
      columns`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),M=t("h3",{id:"expand-columns",tabindex:"-1"},[n("Expand Columns "),t("a",{class:"header-anchor",href:"#expand-columns","aria-hidden":"true"},"#")],-1),Y=t("p",null,[n("Use expand slot to define display content, and Set "),t("code",null,"expand"),n(" attribute to control expand columns")],-1),H=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("pro-table")]),n(`
    `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":columns"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("columns"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#expand"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ row }"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      {{ row }}
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("pro-table")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" columns "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Date'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'date'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Name'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Address'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" data "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-03'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-02'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-04'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-01'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      data`),t("span",{class:"token punctuation"},","),n(`
      columns`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),K=t("h3",{id:"menu-columns",tabindex:"-1"},[n("Menu Columns "),t("a",{class:"header-anchor",href:"#menu-columns","aria-hidden":"true"},"#")],-1),$=t("p",null,[n("Use menu slot to define display content, and Set "),t("code",null,"menu"),n(" attribute to control menu Columns")],-1),J=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("pro-table")]),n(`
    `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":columns"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("columns"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":menu"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("menu"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#menu"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ size }"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("el-button")]),n(`
        `),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("text"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},">")]),n(`
        Detail
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("el-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("pro-table")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" menu "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
      label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Operations'"),t("span",{class:"token punctuation"},","),n(`
      align`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'center'"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" columns "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Date'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'date'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Name'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Address'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" data "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-03'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-02'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-04'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-01'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      menu`),t("span",{class:"token punctuation"},","),n(`
      data`),t("span",{class:"token punctuation"},","),n(`
      columns`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),Q=n(" Detail "),X=t("h3",{id:"slots",tabindex:"-1"},[n("Slots "),t("a",{class:"header-anchor",href:"#slots","aria-hidden":"true"},"#")],-1),Z=t("p",null,[n("Use simple "),t("a",{href:"https://v3.cn.vuejs.org/guide/render-function.html"},"render-function"),n(" by "),t("code",null,"render"),n(" in "),t("code",null,"columns"),n(". or directly add some slot with "),t("code",null,"[prop]"),n(" in the template.")],-1),tt=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("pro-table")]),n(`
    `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":columns"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("columns3"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#name-header"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ column }"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("s")]),t("span",{class:"token punctuation"},">")]),n("{{ column.label }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("s")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#name"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ row, size }"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("el-tag")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
        {{ row?.name }}
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("el-tag")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("pro-table")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" h"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" columns3 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Date'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'date'"),t("span",{class:"token punctuation"},","),n(`
        render`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'--'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Name'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Address'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token function-variable function"},"render"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"row"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token function"},"h"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'em'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},","),n(" row"),t("span",{class:"token punctuation"},"."),n("address"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" data "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-03'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-02'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-04'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-01'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      data`),t("span",{class:"token punctuation"},","),n(`
      columns3`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),nt=t("h3",{id:"pagination",tabindex:"-1"},[n("Pagination "),t("a",{class:"header-anchor",href:"#pagination","aria-hidden":"true"},"#")],-1),st=t("p",null,[n("Set "),t("code",null,"total"),n(" attribute to display pagination, use "),t("code",null,"v-model:current-page"),n(" to bind current page; use "),t("code",null,"v-model:page-size"),n(" to bind current page size")],-1),at=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("pro-table")]),n(`
    `),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("current-page")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("currentPage"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("page-size")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("pageSize"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":columns"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("columns"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":total"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("total"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" currentPage "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" pageSize "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"10"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" total "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"50"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" columns "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Date'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'date'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Name'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Address'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" data "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-03'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-02'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-04'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-01'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      currentPage`),t("span",{class:"token punctuation"},","),n(`
      pageSize`),t("span",{class:"token punctuation"},","),n(`
      total`),t("span",{class:"token punctuation"},","),n(`
      data`),t("span",{class:"token punctuation"},","),n(`
      columns`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),et=t("h3",{id:"grouping-table-head",tabindex:"-1"},[n("Grouping table head "),t("a",{class:"header-anchor",href:"#grouping-table-head","aria-hidden":"true"},"#")],-1),ot=t("p",null,[n("Set "),t("code",null,"children"),n(" in "),t("code",null,"columns"),n(" will automatic generate the grouping table head")],-1),lt=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("pro-table")]),n(`
    `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":columns"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("columns2"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" columns2 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Date'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'date'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'User'"),t("span",{class:"token punctuation"},","),n(`
        children`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Name'"),t("span",{class:"token punctuation"},","),n(`
            prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Address'"),t("span",{class:"token punctuation"},","),n(`
            prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" data "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-03'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-02'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-04'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-01'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      data`),t("span",{class:"token punctuation"},","),n(`
      columns2`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),ct=t("h3",{id:"async-table",tabindex:"-1"},[n("Async Table "),t("a",{class:"header-anchor",href:"#async-table","aria-hidden":"true"},"#")],-1),pt=t("p",null,"To implement Async Table, columns must be bound to a reactive array",-1),ut=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),n("20px")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("el-button")]),n(`
      `),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("primary"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("createTable"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
      Load Table
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("el-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("el-button")]),n(`
      `),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("info"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("createDict"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
      Load Dict
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("el-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("el-button")]),n(`
      `),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("danger"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("destroyTable"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
      Destroy
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("el-button")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("pro-table")]),n(`
    `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data2"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":columns"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("columns4"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" data2 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" columns4 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"submit"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[n("done"),t("span",{class:"token punctuation"},","),n(" isValid"),t("span",{class:"token punctuation"},","),n(" invalidFields")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),n("isValid"),t("span",{class:"token punctuation"},","),n(" invalidFields"),t("span",{class:"token punctuation"},")"),n(`
      `),t("span",{class:"token function"},"setTimeout"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token function"},"done"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"1000"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"createTable"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      columns4`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Date'"),t("span",{class:"token punctuation"},","),n(`
          prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'date'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Name'"),t("span",{class:"token punctuation"},","),n(`
          prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Address'"),t("span",{class:"token punctuation"},","),n(`
          prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"createDict"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      data2`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-03'"),t("span",{class:"token punctuation"},","),n(`
          name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
          address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-02'"),t("span",{class:"token punctuation"},","),n(`
          name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
          address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-04'"),t("span",{class:"token punctuation"},","),n(`
          name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
          address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-01'"),t("span",{class:"token punctuation"},","),n(`
          name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
          address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"destroyTable"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      columns4`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),n(`
      data2`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      data2`),t("span",{class:"token punctuation"},","),n(`
      columns4`),t("span",{class:"token punctuation"},","),n(`
      submit`),t("span",{class:"token punctuation"},","),n(`
      createTable`),t("span",{class:"token punctuation"},","),n(`
      createDict`),t("span",{class:"token punctuation"},","),n(`
      destroyTable`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),it={style:{"margin-bottom":"20px"}},rt=n(" Load Table "),dt=n(" Load Dict "),kt=n(" Destroy "),gt=w('<h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Description</th><th style="text-align:left;">Type</th><th style="text-align:left;">Options</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">data</td><td style="text-align:left;">Table data</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">columns</td><td style="text-align:left;">to generate table components, reference <code>columns</code></td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">selection</td><td style="text-align:left;">add a column will display checkbox, reference <code>columns</code></td><td style="text-align:left;">boolean / object</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">index</td><td style="text-align:left;">add a column will display index, reference columns</td><td style="text-align:left;">boolean / object</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">expand</td><td style="text-align:left;">add a column will display expand icon, reference columns</td><td style="text-align:left;">boolean / object</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">menu</td><td style="text-align:left;">config the menu content, reference columns</td><td style="text-align:left;">boolean / object</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">show-overflow-tooltip</td><td style="text-align:left;">whether to hide extra content and show them in a tooltip when hovering on the cell</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">align</td><td style="text-align:left;">alignment</td><td style="text-align:left;">string</td><td style="text-align:left;">left / center / right</td><td style="text-align:left;">left</td></tr><tr><td style="text-align:left;">header-align</td><td style="text-align:left;">alignment of the table header. If omitted, the value of the above <code>align</code> attribute will be applied</td><td style="text-align:left;">string</td><td style="text-align:left;">left / center / right</td><td style="text-align:left;">same with align</td></tr><tr><td style="text-align:left;">total</td><td style="text-align:left;">total item count</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">current-page</td><td style="text-align:left;">current page number, supports <code>v-model:current-page</code></td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">page-size</td><td style="text-align:left;">item count of each page, supports <code>v-model:page-size</code></td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">pagination</td><td style="text-align:left;">pagination props, same with el-pagination</td><td style="text-align:left;">object</td><td style="text-align:left;">-</td><td style="text-align:left;">from global config</td></tr><tr><td style="text-align:left;">height</td><td style="text-align:left;">Table\u2019s height. By default it has an <code>auto</code> height. If its value is a number, the height is measured in pixels; if its value is a string, the value will be assigned to element\u2019s style.height, the height is affected by external styles</td><td style="text-align:left;">string/number</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">max-height</td><td style="text-align:left;">Table\u2019s max-height. The legal value is a number or the height in px.</td><td style="text-align:left;">string/number</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">stripe</td><td style="text-align:left;">whether Table is striped</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">border</td><td style="text-align:left;">whether Table has vertical border</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">size of Table</td><td style="text-align:left;">string</td><td style="text-align:left;">medium / small / mini</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">fit</td><td style="text-align:left;">whether width of column automatically fits its container</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">show-header</td><td style="text-align:left;">whether Table header is visible</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">highlight-current-row</td><td style="text-align:left;">whether current row is highlighted</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">current-row-key</td><td style="text-align:left;">key of current row, a set only prop</td><td style="text-align:left;">string,number</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">row-class-name</td><td style="text-align:left;">function that returns custom class names for a row, or a string assigning class names for every row</td><td style="text-align:left;">Function({row, rowIndex}) / String</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">row-style</td><td style="text-align:left;">function that returns custom style for a row, or an object assigning custom style for every row</td><td style="text-align:left;">Function({row, rowIndex})/Object</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">cell-class-name</td><td style="text-align:left;">function that returns custom class names for a cell, or a string assigning class names for every cell</td><td style="text-align:left;">Function({row, column, rowIndex, columnIndex}) / String</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">cell-style</td><td style="text-align:left;">function that returns custom style for a cell, or an object assigning custom style for every cell</td><td style="text-align:left;">Function({row, column, rowIndex, columnIndex})/Object</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">header-row-class-name</td><td style="text-align:left;">function that returns custom class names for a row in table header, or a string assigning class names for every row in table header</td><td style="text-align:left;">Function({row, rowIndex}) / String</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">header-row-style</td><td style="text-align:left;">function that returns custom style for a row in table header, or an object assigning custom style for every row in table header</td><td style="text-align:left;">Function({row, rowIndex}) / Object</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">header-cell-class-name</td><td style="text-align:left;">function that returns custom class names for a cell in table header, or a string assigning class names for every cell in table header</td><td style="text-align:left;">Function({row, column, rowIndex, columnIndex}) / String</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">header-cell-style</td><td style="text-align:left;">function that returns custom style for a cell in table header, or an object assigning custom style for every cell in table header</td><td style="text-align:left;">Function({row, column, rowIndex, columnIndex}) / Object</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">row-key</td><td style="text-align:left;">key of row data, used for optimizing rendering. Required if <code>reserve-selection</code> is on or display tree data. When its type is String, multi-level access is supported, e.g. <code>user.info.id</code>, but <code>user.info[0].id</code> is not supported, in which case <code>Function</code> should be used.</td><td style="text-align:left;">Function(row) / String</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">empty-text</td><td style="text-align:left;">Displayed text when data is empty. You can customize this area with <code>#empty</code></td><td style="text-align:left;">String</td><td style="text-align:left;">-</td><td style="text-align:left;">No Data</td></tr><tr><td style="text-align:left;">default-expand-all</td><td style="text-align:left;">whether expand all rows by default, works when the table has a column type=\u201Cexpand\u201D or contains tree structure data</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">expand-row-keys</td><td style="text-align:left;">set expanded rows by this prop, prop\u2019s value is the keys of expand rows, you should set row-key before using this prop</td><td style="text-align:left;">Array</td><td style="text-align:left;">-</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">default-sort</td><td style="text-align:left;">set the default sort column and order. property <code>prop</code> is used to set default sort column, property <code>order</code> is used to set default sort order</td><td style="text-align:left;">Object</td><td style="text-align:left;"><code>order</code>: ascending, descending</td><td style="text-align:left;">if <code>prop</code> is set, and <code>order</code> is not set, then <code>order</code> is default to ascending</td></tr><tr><td style="text-align:left;">tooltip-effect</td><td style="text-align:left;">tooltip <code>effect</code> property</td><td style="text-align:left;">String</td><td style="text-align:left;">dark / light</td><td style="text-align:left;">dark</td></tr><tr><td style="text-align:left;">show-summary</td><td style="text-align:left;">whether to display a summary row</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">sum-text</td><td style="text-align:left;">displayed text for the first column of summary row</td><td style="text-align:left;">String</td><td style="text-align:left;">-</td><td style="text-align:left;">Sum</td></tr><tr><td style="text-align:left;">summary-method</td><td style="text-align:left;">custom summary method</td><td style="text-align:left;">Function({ columns, data })</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">span-method</td><td style="text-align:left;">method that returns rowspan and colspan</td><td style="text-align:left;">Function({ row, column, rowIndex, columnIndex })</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">select-on-indeterminate</td><td style="text-align:left;">controls the behavior of master checkbox in multi-select tables when only some rows are selected (but not all). If true, all rows will be selected, else deselected.</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">indent</td><td style="text-align:left;">horizontal indentation of tree data</td><td style="text-align:left;">Number</td><td style="text-align:left;">-</td><td style="text-align:left;">16</td></tr><tr><td style="text-align:left;">lazy</td><td style="text-align:left;">whether to lazy loading data</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">load</td><td style="text-align:left;">method for loading child row data, only works when <code>lazy</code> is true</td><td style="text-align:left;">Function(row, treeNode, resolve)</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">tree-props</td><td style="text-align:left;">configuration for rendering nested data</td><td style="text-align:left;">Object</td><td style="text-align:left;">-</td><td style="text-align:left;">{ hasChildren: \u2018hasChildren\u2019, children: \u2018children\u2019 }</td></tr></tbody></table><h4 id="columns" tabindex="-1">columns <a class="header-anchor" href="#columns" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Description</th><th style="text-align:left;">Type</th><th style="text-align:left;">Options</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">prop</td><td style="text-align:left;">the key of data</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">label</td><td style="text-align:left;">column label</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">render</td><td style="text-align:left;">render function for table columns</td><td style="text-align:left;">string / function(row)</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">hide</td><td style="text-align:left;">Whether to hide in the table</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">children</td><td style="text-align:left;">grouping table head</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">columnKey</td><td style="text-align:left;">column\u2019s key. If you need to use the filter-change event, you need this attribute to identify which column is being filtered</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">width</td><td style="text-align:left;">column width</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">minWidth</td><td style="text-align:left;">column minimum width. Columns with <code>width</code> has a fixed width, while columns with <code>min-width</code> has a width that is distributed in proportion</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">fixed</td><td style="text-align:left;">whether column is fixed at left/right. Will be fixed at left if <code>true</code></td><td style="text-align:left;">string / boolean</td><td style="text-align:left;">true / left / right</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">renderHeader</td><td style="text-align:left;">render function for table header of this column</td><td style="text-align:left;">Function(h, { column, $index })</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">sortable</td><td style="text-align:left;">whether column can be sorted. Remote sorting can be done by setting this attribute to \u2018custom\u2019 and listening to the <code>sort-change</code> event of Table</td><td style="text-align:left;">boolean / string</td><td style="text-align:left;">true / false / \u2018custom\u2019</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">sortMethod</td><td style="text-align:left;">sorting method, works when <code>sortable</code> is <code>true</code>. Should return a number, just like Array.sort</td><td style="text-align:left;">Function(a, b)</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">sortBy</td><td style="text-align:left;">specify which property to sort by, works when <code>sortable</code> is <code>true</code> and <code>sort-method</code> is <code>undefined</code>. If set to an Array, the column will sequentially sort by the next property if the previous one is equal</td><td style="text-align:left;">string / array / Function(row, index)</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">sortOrders</td><td style="text-align:left;">the order of the sorting strategies used when sorting the data, works when <code>sortable</code> is <code>true</code>. Accepts an array, as the user clicks on the header, the column is sorted in order of the elements in the array</td><td style="text-align:left;">array</td><td style="text-align:left;">the elements in the array need to be one of the following: <code>ascending</code>, <code>descending</code> and <code>null</code> (restores to the original order)</td><td style="text-align:left;">[\u2018ascending\u2019, \u2018descending\u2019, null]</td></tr><tr><td style="text-align:left;">resizable</td><td style="text-align:left;">whether column width can be resized, works when <code>border</code> of <code>el-table</code> is <code>true</code></td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">formatter</td><td style="text-align:left;">function that formats cell content</td><td style="text-align:left;">Function(row, column, cellValue, index)</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">showOverflowTooltip</td><td style="text-align:left;">whether to hide extra content and show them in a tooltip when hovering on the cell</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">align</td><td style="text-align:left;">alignment</td><td style="text-align:left;">string</td><td style="text-align:left;">left / center / right</td><td style="text-align:left;">left</td></tr><tr><td style="text-align:left;">headerAlign</td><td style="text-align:left;">alignment of the table header. If omitted, the value of the above <code>align</code> attribute will be applied</td><td style="text-align:left;">string</td><td style="text-align:left;">left / center / right</td><td style="text-align:left;">same with align</td></tr><tr><td style="text-align:left;">className</td><td style="text-align:left;">class name of cells in the column</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">labelClassName</td><td style="text-align:left;">class name of the label of this column</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">filters</td><td style="text-align:left;">an array of data filtering options. For each element in this array, <code>text</code> and <code>value</code> are required</td><td style="text-align:left;">Array[{ text, value }]</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">filterPlacement</td><td style="text-align:left;">placement for the filter dropdown</td><td style="text-align:left;">string</td><td style="text-align:left;">top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">filterMultiple</td><td style="text-align:left;">whether data filtering supports multiple options</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">filterMethod</td><td style="text-align:left;">data filtering method. If <code>filter-multiple</code> is on, this method will be called multiple times for each row, and a row will display if one of the calls returns <code>true</code></td><td style="text-align:left;">Function(value, row, column)</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">filteredValue</td><td style="text-align:left;">filter value for selected data, might be useful when table header is rendered with <code>render-header</code></td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">index</td><td style="text-align:left;">customize indices for each row, works on columns with <code>type=index</code></td><td style="text-align:left;">Function(index) / number</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">selectable</td><td style="text-align:left;">function that determines if a certain row can be selected, works when <code>type</code> is \u2018selection\u2019</td><td style="text-align:left;">Function(row, index)</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">reserveSelection</td><td style="text-align:left;">whether to reserve selection after data refreshing, works when <code>type</code> is \u2018selection\u2019. Note that <code>row-key</code> is required for this to work</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>select</td><td>triggers when user clicks the checkbox in a row</td><td>selection, row</td></tr><tr><td>select-all</td><td>triggers when user clicks the checkbox in table header</td><td>selection</td></tr><tr><td>selection-change</td><td>triggers when selection changes</td><td>selection</td></tr><tr><td>cell-mouse-enter</td><td>triggers when hovering into a cell</td><td>row, column, cell, event</td></tr><tr><td>cell-mouse-leave</td><td>triggers when hovering out of a cell</td><td>row, column, cell, event</td></tr><tr><td>cell-click</td><td>triggers when clicking a cell</td><td>row, column, cell, event</td></tr><tr><td>cell-dblclick</td><td>triggers when double clicking a cell</td><td>row, column, cell, event</td></tr><tr><td>row-click</td><td>triggers when clicking a row</td><td>row, column, event</td></tr><tr><td>row-contextmenu</td><td>triggers when user right clicks on a row</td><td>row, column, event</td></tr><tr><td>row-dblclick</td><td>triggers when double clicking a row</td><td>row, column, event</td></tr><tr><td>header-click</td><td>triggers when clicking a column header</td><td>column, event</td></tr><tr><td>header-contextmenu</td><td>triggers when user right clicks on a column header</td><td>column, event</td></tr><tr><td>sort-change</td><td>triggers when Table\u2019s sorting changes</td><td>{ column, prop, order }</td></tr><tr><td>filter-change</td><td>column\u2019s key. If you need to use the filter-change event, this attribute is mandatory to identify which column is being filtered</td><td>filters</td></tr><tr><td>current-change</td><td>triggers when current row changes</td><td>currentRow, oldCurrentRow</td></tr><tr><td>header-dragend</td><td>triggers after changing a column\u2019s width by dragging the column header\u2019s border</td><td>newWidth, oldWidth, column, event</td></tr><tr><td>expand-change</td><td>triggers when user expands or collapses a row (for expandable table, second param is expandedRows; for tree Table, second param is expanded)</td><td>row, (expandedRows | expanded)</td></tr><tr><td>size-change</td><td>triggers when <code>page-size</code> changes</td><td>the new page size</td></tr><tr><td>current-change</td><td>triggers when <code>current-page</code> changes</td><td>the new current page</td></tr><tr><td>prev-click</td><td>triggers when the prev button is clicked and current page changes</td><td>the new current page</td></tr><tr><td>next-click</td><td>triggers when the next button is clicked and current page changes</td><td>the new current page</td></tr></tbody></table><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>clearSelection</td><td>used in multiple selection Table, clear user selection</td><td>-</td></tr><tr><td>toggleRowSelection</td><td>used in multiple selection Table, toggle if a certain row is selected. With the second parameter, you can directly set if this row is selected</td><td>row, selected</td></tr><tr><td>toggleAllSelection</td><td>used in multiple selection Table, toggle select all and deselect all</td><td>-</td></tr><tr><td>toggleRowExpansion</td><td>used in expandable Table or tree Table, toggle if a certain row is expanded. With the second parameter, you can directly set if this row is expanded or collapsed</td><td>row, expanded</td></tr><tr><td>setCurrentRow</td><td>used in single selection Table, set a certain row selected. If called without any parameter, it will clear selection.</td><td>row</td></tr><tr><td>clearSort</td><td>clear sorting, restore data to the original order</td><td>-</td></tr><tr><td>clearFilter</td><td>clear filters of the columns whose <code>columnKey</code> are passed in. If no params, clear all filters</td><td>columnKeys</td></tr><tr><td>doLayout</td><td>refresh the layout of Table. When the visibility of Table changes, you may need to call this method to get a correct layout</td><td>-</td></tr><tr><td>sort</td><td>sort Table manually. Property <code>prop</code> is used to set sort column, property <code>order</code> is used to set sort order</td><td>prop: string, order: string</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">Tip</p><p>If you use <code>typescript</code>, you can export <code>ITableExpose</code> from the component to provide better type inference</p></div><h3 id="slots-1" tabindex="-1">Slots <a class="header-anchor" href="#slots-1" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">-</td><td style="text-align:left;">anything inserted before the menu</td></tr><tr><td style="text-align:left;">menu</td><td style="text-align:left;">control the menu display content, parameters { size, row, column, $index }</td></tr><tr><td style="text-align:left;">expand</td><td style="text-align:left;">control the expand display content, parameters { row, column, $index }</td></tr><tr><td style="text-align:left;">append</td><td style="text-align:left;">Contents to be inserted after the last row. You may need this slot if you want to implement infinite scroll for the table. This slot will be displayed above the summary row if there is one.</td></tr><tr><td style="text-align:left;">[prop]</td><td style="text-align:left;">control the <code>Item</code> display content, parameters { size, row, column, $index }</td></tr><tr><td style="text-align:left;">[prop]-header</td><td style="text-align:left;">control the <code>Item</code> header display content, parameters { size, column, $index }</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">Tip</p><p>[prop] the prop of columns</p></div>',12),wt={setup(ft,{expose:v}){v({frontmatter:{title:"Table",meta:[{name:"description",content:"Display multiple data with similar format. You can sort, filter, compare your data in a table"},{property:"og:title",content:"Table"}]}}),z({title:"Table",meta:[{name:"description",content:"Display multiple data with similar format. You can sort, filter, compare your data in a table"},{property:"og:title",content:"Table"}]});let p=[{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}],l=o([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]);p=[{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}],l=o([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),p=[{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}],l=o([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),p=[{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}],l=o([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]);let T=o({label:"Operations",align:"center"});p=[{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}],l=o([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]);let N=o([{label:"Date",prop:"date",render:"--"},{label:"Name",prop:"name"},{label:"Address",prop:"address",render:x=>I("em",null,x.address)}]);l=o([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]);let r=o(1),d=o(10),S=o(50);p=[{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}],l=o([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]);let A=o([{label:"Date",prop:"date"},{label:"User",children:[{label:"Name",prop:"name"},{label:"Address",prop:"address"}]}]);l=o([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]);let m=o([]),y=o([]),_=()=>{y.value=[{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}]},L=()=>{m.value=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]},G=()=>{y.value=[],m.value=[]};return(x,k)=>{const u=f("pro-table"),i=f("pro-code"),g=f("el-button"),q=f("el-tag");return j(),F("div",C,[O,e(i,null,{code:s(()=>[B]),default:s(()=>[e(u,{data:a(l),columns:a(p)},null,8,["data","columns"])]),_:1}),P,R,e(i,null,{code:s(()=>[W]),default:s(()=>[e(u,{data:a(l),columns:a(p),index:{label:"#"}},null,8,["data","columns"])]),_:1}),U,V,e(i,null,{code:s(()=>[E]),default:s(()=>[e(u,{data:a(l),columns:a(p),selection:""},null,8,["data","columns"])]),_:1}),M,Y,e(i,null,{code:s(()=>[H]),default:s(()=>[e(u,{data:a(l),columns:a(p)},{expand:s(({row:c})=>[n(h(c),1)]),_:1},8,["data","columns"])]),_:1}),K,$,e(i,null,{code:s(()=>[J]),default:s(()=>[e(u,{data:a(l),columns:a(p),menu:a(T)},{menu:s(({size:c})=>[e(g,{size:c,type:"text"},{default:s(()=>[Q]),_:2},1032,["size"])]),_:1},8,["data","columns","menu"])]),_:1}),X,Z,e(i,null,{code:s(()=>[tt]),default:s(()=>[e(u,{data:a(l),columns:a(N)},{"name-header":s(({column:c})=>[t("s",null,h(c.label),1)]),name:s(({row:c,size:D})=>[e(q,{size:D},{default:s(()=>[n(h(c==null?void 0:c.name),1)]),_:2},1032,["size"])]),_:1},8,["data","columns"])]),_:1}),nt,st,e(i,null,{code:s(()=>[at]),default:s(()=>[e(u,{"current-page":a(r),"onUpdate:current-page":k[0]||(k[0]=c=>b(r)?r.value=c:r=c),"page-size":a(d),"onUpdate:page-size":k[1]||(k[1]=c=>b(d)?d.value=c:d=c),data:a(l),columns:a(p),total:a(S)},null,8,["current-page","page-size","data","columns","total"])]),_:1}),et,ot,e(i,null,{code:s(()=>[lt]),default:s(()=>[e(u,{data:a(l),columns:a(A)},null,8,["data","columns"])]),_:1}),ct,pt,e(i,null,{code:s(()=>[ut]),default:s(()=>[t("div",it,[e(g,{type:"primary",onClick:a(_)},{default:s(()=>[rt]),_:1},8,["onClick"]),e(g,{type:"info",onClick:a(L)},{default:s(()=>[dt]),_:1},8,["onClick"]),e(g,{type:"danger",onClick:a(G)},{default:s(()=>[kt]),_:1},8,["onClick"])]),e(u,{data:a(m),columns:a(y)},null,8,["data","columns"])]),_:1}),gt])}}};export{wt as default};
