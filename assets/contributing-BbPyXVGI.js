import{u as a}from"./vue.f36acd1f-D8xt85SV.js";import{r,o as l,c as d,a as e,b as t,d as s,e as o}from"./index-DQtG-xXj.js";const c={class:"markdown-body"},h=o('<h1 id="contributing-guide" tabindex="-1">Contributing Guide <a class="header-anchor md-link" href="#contributing-guide" aria-hidden="true">#</a></h1><p>Thank you for choosing element-pro-components, If you are willing to contribute code or suggest an idea, please make sure to take a moment and read through the following guidelines.</p><h2 id="issue-reporting-guidelines" tabindex="-1">Issue Reporting Guidelines <a class="header-anchor md-link" href="#issue-reporting-guidelines" aria-hidden="true">#</a></h2><ul><li>Before submitting an issue, please check if similar problems have already been issued.</li><li>Before submitting an issue, please describe the problem in short words, and add the environment and recurrence steps when the issue occurs.</li></ul><h2 id="pull-request-guidelines" tabindex="-1">Pull Request Guidelines <a class="header-anchor md-link" href="#pull-request-guidelines" aria-hidden="true">#</a></h2><ul><li>Before working on a large change, it is best to open an issue first to discuss it with the maintainers.</li><li>When in doubt, keep your pull requests small. To give a PR the best chance of getting accepted, don’t bundle more than one feature or bug fix per pull request. It’s always best to create two smaller PRs than one big one.</li><li>When adding new features or modifying existing, please attempt to include tests to confirm the new behavior.</li><li>Make sure you pass the code formatting and test (<code>pnpm check &amp;&amp; pnpm test</code>).</li><li>Rebase before creating a PR to keep commit history clear.</li><li>Add some descriptions and refer relative issues for you PR.</li></ul><h2 id="git-commit-message-guidelines" tabindex="-1">Git commit message Guidelines <a class="header-anchor md-link" href="#git-commit-message-guidelines" aria-hidden="true">#</a></h2><p>Messages must be matched by the following regex:</p>',8),u=e("div",{class:"language-"},[e("pre",null,[e("code",{"v-pre":""},`/^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip)(\\(.+\\))?: .{1,50}/
`)])],-1),p=e("p",null,"Examples:",-1),m=e("div",{class:"language-"},[e("pre",null,[e("code",{"v-pre":""},`docs: update Form.md
`)])],-1),g=e("div",{class:"language-"},[e("pre",null,[e("code",{"v-pre":""},`fix(Form): the style link error
`)])],-1),f=o('<h2 id="pull-request-process" tabindex="-1">Pull Request Process <a class="header-anchor md-link" href="#pull-request-process" aria-hidden="true">#</a></h2><ul><li>Fork this project. If it has been forked, please <a href="#sync-latest-code" class="md-link">synchronize the latest code</a> of upstream.</li><li>Create a new branch based on the <code>main</code> branch of upstream, example fix/form-button。</li><li>After the development, submit the Pull Request to the <code>main</code> branch of upstream.</li><li>The Pull Request will be merged into the <code>main</code> branch after the review is passed.</li></ul><h2 id="getting-started" tabindex="-1">Getting started <a class="header-anchor md-link" href="#getting-started" aria-hidden="true">#</a></h2>',3),b={href:"https://nodejs.org",class:"md-link",target:"_blank",rel:"noopener noreferrer"},_={href:"https://pnpm.io",class:"md-link",target:"_blank",rel:"noopener noreferrer"},k=e("div",{class:"language-"},[e("pre",null,[e("code",{"v-pre":""},`# install dependencies
pnpm i

# start development
pnpm dev
`)])],-1),v={href:"http://localhost:5173/",class:"md-link",target:"_blank",rel:"noopener noreferrer"},x=e("h2",{id:"sync-latest-code",tabindex:"-1"},[t("Sync Latest Code "),e("a",{class:"header-anchor md-link",href:"#sync-latest-code","aria-hidden":"true"},"#")],-1),y=e("div",{class:"language-"},[e("pre",null,[e("code",{"v-pre":""},`# add upstream
git remote add upstream git@github.com:tolking/element-pro-components.git

# pull the latest code of upstream
git fetch upstream

# checkout main branch
git checkout main

# merge code from upstream
git merge upstream/main
`)])],-1),w=e("h2",{id:"contributors",tabindex:"-1"},[t("Contributors "),e("a",{class:"header-anchor md-link",href:"#contributors","aria-hidden":"true"},"#")],-1),P=e("p",null,"Thank you to all the people who have already contributed to element-pro-components!",-1),q=e("a",{href:"https://github.com/tolking/element-pro-components/graphs/contributors"},[e("img",{src:"https://contrib.rocks/image?repo=tolking/element-pro-components"})],-1),V=[],j={__name:"contributing",setup(R,{expose:i}){return i({frontmatter:{meta:[]}}),a({meta:[]}),(N,C)=>{const n=r("icon-external-link");return l(),d("div",c,[h,u,p,m,g,f,e("p",null,[t("Before development, you need to install "),e("a",b,[t("Node.js 16+"),s(n,{class:"link-icon"})]),t(", and we recommend you to use "),e("a",_,[t("PNPM"),s(n,{class:"link-icon"})]),t(".")]),k,e("p",null,[t("then, preview on "),e("a",v,[t("localhost:5173"),s(n,{class:"link-icon"})]),t(".")]),x,y,w,P,q])}}};export{j as default,V as meta};
