import{u as d}from"./vue.8fc199ce-Be4bgeRO.js";import{A as p}from"./base-DE_BlN-q.js";import{r,o as c,a as u,f as s,e as l,w as a,b as t,d as e}from"./index-BypRYKmK.js";const g={class:"markdown-body"},b="AutocompleteTag",v=[{name:"description",content:"Enter an array of tags with some recommended tips"},{property:"og:title",content:"AutocompleteTag"},{name:"twitter:title",content:"AutocompleteTag"}],w={__name:"AutocompleteTag",setup(f,{expose:o}){return o({frontmatter:{title:"AutocompleteTag",meta:[{name:"description",content:"Enter an array of tags with some recommended tips"},{property:"og:title",content:"AutocompleteTag"},{name:"twitter:title",content:"AutocompleteTag"}]}}),d({title:"AutocompleteTag",meta:[{name:"description",content:"Enter an array of tags with some recommended tips"},{property:"og:title",content:"AutocompleteTag"},{name:"twitter:title",content:"AutocompleteTag"}]}),(x,n)=>{const i=r("pro-code");return c(),u("div",g,[n[2]||(n[2]=s('<h1 id="autocompletetag" tabindex="-1">AutocompleteTag <a class="header-anchor md-link" href="#autocompletetag" aria-hidden="true">#</a></h1><blockquote><p>Enter an array of tags with some recommended tips</p></blockquote><h2 id="use" tabindex="-1">Use <a class="header-anchor md-link" href="#use" aria-hidden="true">#</a></h2><h3 id="basic-use" tabindex="-1">Basic Use <a class="header-anchor md-link" href="#basic-use" aria-hidden="true">#</a></h3><p>When using <code>pro-autocomplete-tag</code>, most attribute of <code>ElAutocomplete</code> are supported</p>',5)),l(i,{link:"@/demo/AutocompleteTag/base.vue",content:"%3Ctemplate%3E%0A%20%20%3Cpro-autocomplete-tag%0A%20%20%20%20v-model%3D%22inputTags%22%0A%20%20%20%20%3Afetch-suggestions%3D%22querySearch%22%0A%20%20%20%20placeholder%3D%22Please%20click%20the%20space%20button%20after%20input%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20inputTags%20%3D%20ref(%5B%5D)%0A%20%20%20%20const%20list%20%3D%20%5B%0A%20%20%20%20%20%20%7B%20value%3A%20'Go'%2C%20tag%3A%20'go'%20%7D%2C%0A%20%20%20%20%20%20%7B%20value%3A%20'JavaScript'%2C%20tag%3A%20'javascript'%20%7D%2C%0A%20%20%20%20%20%20%7B%20value%3A%20'Python'%2C%20tag%3A%20'python'%20%7D%2C%0A%20%20%20%20%5D%0A%0A%20%20%20%20function%20querySearch(queryString%2C%20cb)%20%7B%0A%20%20%20%20%20%20cb(%0A%20%20%20%20%20%20%20%20queryString%0A%20%20%20%20%20%20%20%20%20%20%3F%20list.filter((i)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20i.value.indexOf(queryString.toLowerCase())%20%3D%3D%3D%200%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20%20%20%3A%20list%2C%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20inputTags%2C%0A%20%20%20%20%20%20querySearch%2C%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%7D)%0A%3C%2Fscript%3E%0A"},{source:a(()=>[l(p)]),code:a(()=>n[0]||(n[0]=[t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("template")]),t("span",{class:"token punctuation"},">")]),e(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("pro-autocomplete-tag")]),e(`
    `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("inputTags"),t("span",{class:"token punctuation"},'"')]),e(`
    `),t("span",{class:"token attr-name"},":fetch-suggestions"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("querySearch"),t("span",{class:"token punctuation"},'"')]),e(`
    `),t("span",{class:"token attr-name"},"placeholder"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("Please click the space button after input"),t("span",{class:"token punctuation"},'"')]),e(`
  `),t("span",{class:"token punctuation"},"/>")]),e(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("template")]),t("span",{class:"token punctuation"},">")]),e(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[e(`
`),t("span",{class:"token keyword"},"import"),e(),t("span",{class:"token punctuation"},"{"),e(" defineComponent"),t("span",{class:"token punctuation"},","),e(" ref "),t("span",{class:"token punctuation"},"}"),e(),t("span",{class:"token keyword"},"from"),e(),t("span",{class:"token string"},"'vue'"),e(`

`),t("span",{class:"token keyword"},"export"),e(),t("span",{class:"token keyword"},"default"),e(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),e(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
    `),t("span",{class:"token keyword"},"const"),e(" inputTags "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),e(`
    `),t("span",{class:"token keyword"},"const"),e(" list "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token punctuation"},"["),e(`
      `),t("span",{class:"token punctuation"},"{"),e(),t("span",{class:"token literal-property property"},"value"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},"'Go'"),t("span",{class:"token punctuation"},","),e(),t("span",{class:"token literal-property property"},"tag"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},"'go'"),e(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),e(`
      `),t("span",{class:"token punctuation"},"{"),e(),t("span",{class:"token literal-property property"},"value"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},"'JavaScript'"),t("span",{class:"token punctuation"},","),e(),t("span",{class:"token literal-property property"},"tag"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},"'javascript'"),e(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),e(`
      `),t("span",{class:"token punctuation"},"{"),e(),t("span",{class:"token literal-property property"},"value"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},"'Python'"),t("span",{class:"token punctuation"},","),e(),t("span",{class:"token literal-property property"},"tag"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},"'python'"),e(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),e(`
    `),t("span",{class:"token punctuation"},"]"),e(`

    `),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token function"},"querySearch"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[e("queryString"),t("span",{class:"token punctuation"},","),e(" cb")]),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
      `),t("span",{class:"token function"},"cb"),t("span",{class:"token punctuation"},"("),e(`
        queryString
          `),t("span",{class:"token operator"},"?"),e(" list"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"filter"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"i"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token operator"},"=>"),e(),t("span",{class:"token punctuation"},"{"),e(`
              `),t("span",{class:"token keyword"},"return"),e(" i"),t("span",{class:"token punctuation"},"."),e("value"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"indexOf"),t("span",{class:"token punctuation"},"("),e("queryString"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"toLowerCase"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token operator"},"==="),e(),t("span",{class:"token number"},"0"),e(`
            `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),e(`
          `),t("span",{class:"token operator"},":"),e(" list"),t("span",{class:"token punctuation"},","),e(`
      `),t("span",{class:"token punctuation"},")"),e(`
    `),t("span",{class:"token punctuation"},"}"),e(`

    `),t("span",{class:"token keyword"},"return"),e(),t("span",{class:"token punctuation"},"{"),e(`
      inputTags`),t("span",{class:"token punctuation"},","),e(`
      querySearch`),t("span",{class:"token punctuation"},","),e(`
    `),t("span",{class:"token punctuation"},"}"),e(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),e(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("script")]),t("span",{class:"token punctuation"},">")]),e(`
`)])],-1)])),default:a(()=>[n[1]||(n[1]=t("p",null,"@/demo/AutocompleteTag/base.vue",-1))]),_:1}),n[3]||(n[3]=s('<h3 id="props" tabindex="-1">Props <a class="header-anchor md-link" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Description</th><th style="text-align:left;">Type</th><th style="text-align:left;">Options</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;">binding value</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">trigger</td><td style="text-align:left;">the key to trigger input tag</td><td style="text-align:left;">string</td><td style="text-align:left;">space / enter</td><td style="text-align:left;">enter</td></tr><tr><td style="text-align:left;">max</td><td style="text-align:left;">max number that can be enter</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">component size</td><td style="text-align:left;">string</td><td style="text-align:left;">large / default /small</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;">tag Type</td><td style="text-align:left;">string</td><td style="text-align:left;">success / info / warning / danger</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">hit</td><td style="text-align:left;">whether Tag has a highlighted border</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">color</td><td style="text-align:left;">background color of the Tag</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">effect</td><td style="text-align:left;">component theme of the Tag</td><td style="text-align:left;">string</td><td style="text-align:left;">dark / light / plain</td><td style="text-align:left;">light</td></tr><tr><td style="text-align:left;">placeholder</td><td style="text-align:left;">placeholder of Input</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">whether disabled</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">value-key</td><td style="text-align:left;">key name of the input suggestion object for display</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">value</td></tr><tr><td style="text-align:left;">debounce</td><td style="text-align:left;">debounce delay when typing, in milliseconds</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">300</td></tr><tr><td style="text-align:left;">placement</td><td style="text-align:left;">placement of the popup menu</td><td style="text-align:left;">string</td><td style="text-align:left;">top / top-start / top-end / bottom / bottom-start / bottom-end</td><td style="text-align:left;">bottom-start</td></tr><tr><td style="text-align:left;">fetch-suggestions</td><td style="text-align:left;">a method to fetch input suggestions. When suggestions are ready, invoke callback(data:[]) to return them to Autocomplete</td><td style="text-align:left;">Function(queryString, callback)</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">popper-class</td><td style="text-align:left;">custom class name for autocomplete’s dropdown</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">trigger-on-focus</td><td style="text-align:left;">whether show suggestions when input focus</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">name</td><td style="text-align:left;">same as name in native input</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">select-when-unmatched</td><td style="text-align:left;">whether to emit a select event on enter when there is no autocomplete match</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">label</td><td style="text-align:left;">label text</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">prefix-icon</td><td style="text-align:left;">prefix icon class</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">suffix-icon</td><td style="text-align:left;">suffix icon class</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">hide-loading</td><td style="text-align:left;">whether to hide the loading icon in remote search</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">teleported</td><td style="text-align:left;">whether select dropdown is teleported to the body</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">highlight-first-item</td><td style="text-align:left;">whether to highlight first item in remote search suggestions by default</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">fit-input-width</td><td style="text-align:left;">whether the width of the dropdown is the same as the input</td><td style="text-align:left;">boolean</td><td style="text-align:left;">—</td><td style="text-align:left;">false</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor md-link" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>input</td><td>triggers when the Input value change</td><td>(value: string) =&gt; void</td></tr><tr><td>tag-add</td><td>triggers when add a tag</td><td>(value: string) =&gt; void</td></tr><tr><td>tag-remove</td><td>triggers when close button is clicked</td><td>(value: string) =&gt; void</td></tr></tbody></table>',4))])}}};export{w as default,v as meta,b as title};
