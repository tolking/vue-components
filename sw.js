if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const u=s||("document"in self?document.currentScript.src:"")||location.href;if(e[u])return;let n={};const t=s=>l(s,u),a={module:{uri:u},exports:n,require:t};e[u]=Promise.all(r.map((s=>a[s]||t(s)))).then((s=>(i(...s),n)))}}define(["./workbox-e0782b83"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/AutocompleteTag.538a4f21.js",revision:null},{url:"assets/AutocompleteTag.7bf8ce92.js",revision:null},{url:"assets/base.27b6ef9e.js",revision:null},{url:"assets/base.602fa27d.js",revision:null},{url:"assets/base.89b8166c.js",revision:null},{url:"assets/base.ae3f579c.js",revision:null},{url:"assets/base.bed58230.js",revision:null},{url:"assets/base.cf5cea6f.js",revision:null},{url:"assets/before-leave.91b2cc4d.js",revision:null},{url:"assets/Breadcrumb.9c2eab25.js",revision:null},{url:"assets/Breadcrumb.d8d1db28.js",revision:null},{url:"assets/Card.c5370413.js",revision:null},{url:"assets/Card.e0a82e0a.js",revision:null},{url:"assets/CHANGELOG.97e2d481.js",revision:null},{url:"assets/Checkbox.4ab8d732.js",revision:null},{url:"assets/Checkbox.8c6f6bb6.js",revision:null},{url:"assets/ColumnSetting.37b6464a.js",revision:null},{url:"assets/ColumnSetting.71ca1335.js",revision:null},{url:"assets/contributing.6fdbd97f.js",revision:null},{url:"assets/contributing.72e9f246.js",revision:null},{url:"assets/Crud.9d7eeab4.js",revision:null},{url:"assets/Crud.c9c72ce8.js",revision:null},{url:"assets/Descriptions.9f2c82b4.js",revision:null},{url:"assets/Descriptions.af32872d.js",revision:null},{url:"assets/FilterRoutes.4d692020.js",revision:null},{url:"assets/FilterRoutes.97f3f2d8.js",revision:null},{url:"assets/Form.221833e0.js",revision:null},{url:"assets/Form.e22e193e.js",revision:null},{url:"assets/group.63c3a099.js",revision:null},{url:"assets/group.dbe7e5e7.js",revision:null},{url:"assets/i18n.83a9418b.js",revision:null},{url:"assets/i18n.ab22e470.js",revision:null},{url:"assets/index.32cb67ab.js",revision:null},{url:"assets/index.3a3678ff.js",revision:null},{url:"assets/index.54531e09.css",revision:null},{url:"assets/index.7be2f50f.js",revision:null},{url:"assets/InputTag.973e8a1c.js",revision:null},{url:"assets/InputTag.d8413c15.js",revision:null},{url:"assets/introduction.20137d52.js",revision:null},{url:"assets/introduction.a02d60c6.js",revision:null},{url:"assets/Layout.597f263f.js",revision:null},{url:"assets/Layout.759dd6aa.js",revision:null},{url:"assets/lazy.44b5dfc4.css",revision:null},{url:"assets/lazy.ab790165.js",revision:null},{url:"assets/Link.898d6684.js",revision:null},{url:"assets/Link.a0d700aa.js",revision:null},{url:"assets/Menu.3cd46943.js",revision:null},{url:"assets/Menu.d3b900ac.js",revision:null},{url:"assets/modules-element-plus.3d3d6b12.js",revision:null},{url:"assets/modules-vue.60f34cfe.js",revision:null},{url:"assets/nested.7685cc8f.js",revision:null},{url:"assets/Radio.03d0502c.js",revision:null},{url:"assets/Radio.4b1dc683.js",revision:null},{url:"assets/router-view.a6c2dc26.js",revision:null},{url:"assets/router-view.eb10d9dc.css",revision:null},{url:"assets/router.ab4cd463.js",revision:null},{url:"assets/router.e325fbe7.js",revision:null},{url:"assets/Select.0f671e1d.js",revision:null},{url:"assets/Select.34e02109.js",revision:null},{url:"assets/separator.6daf80e0.js",revision:null},{url:"assets/size.21ef927d.js",revision:null},{url:"assets/size.fae1fc64.css",revision:null},{url:"assets/slots.06c99a60.css",revision:null},{url:"assets/slots.a1c1b181.js",revision:null},{url:"assets/slots.b77d1e73.js",revision:null},{url:"assets/Table.91727e4b.js",revision:null},{url:"assets/Table.91c31837.js",revision:null},{url:"assets/Tabs.230b6c5e.js",revision:null},{url:"assets/Tabs.817d5f1c.js",revision:null},{url:"assets/theme.33e33855.js",revision:null},{url:"assets/theme.3ba7550b.js",revision:null},{url:"assets/TreeSelect.420feb4d.js",revision:null},{url:"assets/TreeSelect.d9ca158d.js",revision:null},{url:"assets/type.2add69a2.js",revision:null},{url:"assets/type.70898d0d.js",revision:null},{url:"assets/type.b38b4e0c.js",revision:null},{url:"assets/type.eb80ca39.js",revision:null},{url:"assets/typescript.1756077b.css",revision:null},{url:"assets/typescript.292e915a.css",revision:null},{url:"assets/typescript.vue_vue_type_script_setup_true_lang.30bae67c.js",revision:null},{url:"assets/typescript.vue_vue_type_script_setup_true_lang.585ca3a5.js",revision:null},{url:"assets/typescript.vue_vue_type_script_setup_true_lang.67acd289.js",revision:null},{url:"assets/typescript.vue_vue_type_script_setup_true_lang.7cce19ae.js",revision:null},{url:"assets/workbox-window.prod.es5.6954f450.js",revision:null},{url:"index.html",revision:"dbeef3d731fb7a8094f6fb6a30d45de8"},{url:"manifest.webmanifest",revision:"a9f892660b1c2c839414b1ba349a7d87"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
