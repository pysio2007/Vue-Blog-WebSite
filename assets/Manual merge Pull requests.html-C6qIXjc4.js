import{_ as n,c as a,e as t,o as e}from"./app-8BvbmgnH.js";const p={};function o(c,s){return e(),a("div",null,s[0]||(s[0]=[t(`<p>首先 通过命令添加远程的仓库信息</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> remote <span class="token function">add</span> <span class="token punctuation">[</span>远程仓库名称<span class="token punctuation">]</span> <span class="token punctuation">[</span>远程仓库地址<span class="token punctuation">]</span> </span>
<span class="line"></span></code></pre></div><p>仓库添加成功后 通过 <code>git fetch [远程仓库名称]</code> 把仓库拉到本地</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">❯ <span class="token function">git</span> fetch pr2</span>
<span class="line">remote: Enumerating objects: <span class="token number">26</span>, done.</span>
<span class="line">remote: Counting objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">26</span>/26<span class="token punctuation">)</span>, done.</span>
<span class="line">remote: Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">9</span>/9<span class="token punctuation">)</span>, done.</span>
<span class="line">remote: Total <span class="token number">18</span> <span class="token punctuation">(</span>delta <span class="token number">8</span><span class="token punctuation">)</span>, reused <span class="token number">17</span> <span class="token punctuation">(</span>delta <span class="token number">7</span><span class="token punctuation">)</span>, pack-reused <span class="token number">0</span> <span class="token punctuation">(</span>from <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">展开对象中: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">18</span>/18<span class="token punctuation">)</span>, <span class="token number">3.26</span> KiB <span class="token operator">|</span> <span class="token number">371.00</span> KiB/s, 完成.</span>
<span class="line">来自 github.com:pysio2007/SkyBlock-CN-WIKI</span>
<span class="line"> * <span class="token punctuation">[</span>新分支<span class="token punctuation">]</span>          main       -<span class="token operator">&gt;</span> pr2/main</span>
<span class="line"></span></code></pre></div><p>最后通过 <code>merge</code> 或者 <code>cherry-pick</code> 合并整个分支或者某个具体的提交</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 合并具体的 commitid</span></span>
<span class="line">❯ <span class="token function">git</span> cherry-pick <span class="token punctuation">[</span>Commitid<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 合并具体的分支</span></span>
<span class="line">❯ <span class="token function">git</span> merge <span class="token punctuation">[</span>远程仓库名称<span class="token punctuation">]</span>/<span class="token punctuation">[</span>分支名称<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre></div><p>当我们合并完成之后，清理远程仓库的信息</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> remote <span class="token function">rm</span> <span class="token punctuation">[</span>远程仓库名称<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre></div>`,8)]))}const i=n(p,[["render",o],["__file","Manual merge Pull requests.html.vue"]]),r=JSON.parse(`{"path":"/posts/develop/Manual%20merge%20Pull%20requests.html","title":"本地手动合并Github上的Pull requests","lang":"zh-CN","frontmatter":{"title":"本地手动合并Github上的Pull requests","date":"2024-09-26T00:00:00.000Z","icon":"fa-light fa-code-pull-request","category":"develop","tag":["Git","日常"],"description":"首先 通过命令添加远程的仓库信息 仓库添加成功后 通过 git fetch [远程仓库名称] 把仓库拉到本地 最后通过 merge 或者 cherry-pick 合并整个分支或者某个具体的提交 当我们合并完成之后，清理远程仓库的信息","head":[["meta",{"property":"og:url","content":"https://www.pysio.online/posts/develop/Manual%20merge%20Pull%20requests.html"}],["meta",{"property":"og:site_name","content":"Pysio's Home"}],["meta",{"property":"og:title","content":"本地手动合并Github上的Pull requests"}],["meta",{"property":"og:description","content":"首先 通过命令添加远程的仓库信息 仓库添加成功后 通过 git fetch [远程仓库名称] 把仓库拉到本地 最后通过 merge 或者 cherry-pick 合并整个分支或者某个具体的提交 当我们合并完成之后，清理远程仓库的信息"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-06T12:26:10.000Z"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:tag","content":"日常"}],["meta",{"property":"article:published_time","content":"2024-09-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-06T12:26:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"本地手动合并Github上的Pull requests\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-09-26T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-06T12:26:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Pysio\\",\\"url\\":\\"https://github.com/pysio2007/\\"}]}"]]},"headers":[],"git":{"createdTime":1727995365000,"updatedTime":1728217570000,"contributors":[{"name":"Pysio","username":"Pysio","email":"qq593277393@outlook.com","commits":2,"url":"https://github.com/Pysio"}]},"readingTime":{"minutes":0.76,"words":227},"filePathRelative":"posts/develop/Manual merge Pull requests.md","localizedDate":"2024年9月26日","excerpt":"<p>首先 通过命令添加远程的仓库信息</p>\\n<div class=\\"language-bash\\" data-highlighter=\\"prismjs\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre><code><span class=\\"line\\"><span class=\\"token function\\">git</span> remote <span class=\\"token function\\">add</span> <span class=\\"token punctuation\\">[</span>远程仓库名称<span class=\\"token punctuation\\">]</span> <span class=\\"token punctuation\\">[</span>远程仓库地址<span class=\\"token punctuation\\">]</span> </span>\\n<span class=\\"line\\"></span></code></pre>\\n</div>","autoDesc":true}`);export{i as comp,r as data};