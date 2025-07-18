import{_ as n,c as e,e as a,o as p}from"./app-BZnwDgOs.js";const t={};function i(l,s){return p(),e("div",null,s[0]||(s[0]=[a(`<h2 id="开篇-为什么要迁移" tabindex="-1"><a class="header-anchor" href="#开篇-为什么要迁移"><span>开篇 为什么要迁移？</span></a></h2><p>在过去的1年多 我都使用WordPress 作为我的博客系统，但是我手上的小鸡实在是太弱了，实在是带不动WordPress这个大家伙，所以我决定迁移到VuePress上来。</p><h2 id="开始迁移" tabindex="-1"><a class="header-anchor" href="#开始迁移"><span>开始迁移</span></a></h2><p>最开始 我看了很多静态资源生成系统，比如Hexo、Hugo、Jekyll，最后我选择了<a href="https://theme-hope.vuejs.press/" target="_blank" rel="noopener noreferrer">VuePress Theme Hope</a>。</p><p>那么开始迁移吧！</p><h2 id="安装vuepress-theme-hope" tabindex="-1"><a class="header-anchor" href="#安装vuepress-theme-hope"><span>安装VuePress Theme Hope</span></a></h2><p>首先 安装 Node.js 18.0.0+</p><h3 id="然后创建项目模板" tabindex="-1"><a class="header-anchor" href="#然后创建项目模板"><span>然后创建项目模板</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">npm</span> init vuepress-theme-hope@latest my-docs</span>
<span class="line"></span></code></pre></div><p>这里的 my-docs 是一个参数，代表 VuePress Theme Hope 项目的文件夹名称。</p><p>执行完命令后根据提示，通过键盘 ↓ 选择 简体中文 并回车来按需选择。</p><h3 id="项目命令" tabindex="-1"><a class="header-anchor" href="#项目命令"><span>项目命令</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 启动开发服务器</span></span>
<span class="line"><span class="token function">npm</span> docs:dev</span>
<span class="line"><span class="token comment"># 构建项目并输出</span></span>
<span class="line"><span class="token function">npm</span> docs:build</span>
<span class="line"><span class="token comment"># 清除缓存并启动开发服务器</span></span>
<span class="line"><span class="token function">npm</span> docs:clean-dev</span>
<span class="line"></span></code></pre></div><p>启动项目，浏览器输入 <a href="http://localhost:8080/" target="_blank" rel="noopener noreferrer">http://localhost:8080/</a> 查看效果</p><h3 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构"><span>目录结构</span></a></h3><div class="language-text" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">.</span>
<span class="line">├── .github (可选的) → GitHub 配置文件存放路径</span>
<span class="line">│    └── workflow → GitHub 工作流配置</span>
<span class="line">│         └── docs-deploy.yml → 自动部署文档的工作流</span>
<span class="line">│</span>
<span class="line">├── src → 文档文件夹</span>
<span class="line">│    │</span>
<span class="line">│    ├── .vuepress (可选的) → VuePress 配置文件夹</span>
<span class="line">│    │    │</span>
<span class="line">│    │    ├── dist (默认的) → 构建输出目录</span>
<span class="line">│    │    │</span>
<span class="line">│    │    ├── public (可选的) → 静态资源目录</span>
<span class="line">│    │    │</span>
<span class="line">│    │    ├── styles (可选的) → 用于存放样式相关的文件</span>
<span class="line">│    │    │</span>
<span class="line">│    │    ├── config.{js,ts} (可选的) → 配置文件的入口文件</span>
<span class="line">│    │    │</span>
<span class="line">│    │    └── client.{js,ts} (可选的) → 客户端文件</span>
<span class="line">│    │</span>
<span class="line">│    ├── ... → 其他项目文档</span>
<span class="line">│    │</span>
<span class="line">│    └── README.md → 项目主页</span>
<span class="line">│</span>
<span class="line">└── package.json → Nodejs 配置文件</span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="接下来-做一些个性化的配置" tabindex="-1"><a class="header-anchor" href="#接下来-做一些个性化的配置"><span>接下来 做一些个性化的配置</span></a></h3><h3 id="首页图片全屏设置" tabindex="-1"><a class="header-anchor" href="#首页图片全屏设置"><span>首页图片全屏设置</span></a></h3><p>如果不想首页图片全屏,，打开README.md找到heroFullScreen修改为fasle</p><div class="language-markdown" data-highlighter="prismjs" data-ext="md"><pre><code class="language-markdown"><span class="line">heroFullScreen: false</span>
<span class="line"></span></code></pre></div><p>效果：</p><figure><img src="https://s3.pysio.online/cdn-cgi/image/f=avif,onerror=redirect,slow-connection-quality=50/https://s3.pysio.online/pysioimages/blogdemo.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="首页项目设置" tabindex="-1"><a class="header-anchor" href="#首页项目设置"><span>首页项目设置</span></a></h3><p>初始化是会默认生成以下内容，如果要修改为自己的项目要怎么修改呢。</p><figure><img src="https://s3.pysio.online/cdn-cgi/image/f=avif,onerror=redirect,slow-connection-quality=50/https://s3.pysio.online/pysioimages/defpoj.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>打开<code>README.md</code>，找到<code>projects</code>，编辑成你要的内容即可。</p><div class="language-markdown" data-highlighter="prismjs" data-ext="md"><pre><code class="language-markdown"><span class="line">projects:</span>
<span class="line">  <span class="token list punctuation">-</span> icon: project</span>
<span class="line">    name: 项目名称</span>
<span class="line">    desc: 项目详细描述</span>
<span class="line">    link: https://你的项目链接</span>
<span class="line"></span>
<span class="line">  <span class="token list punctuation">-</span> icon: link</span>
<span class="line">    name: 链接名称</span>
<span class="line">    desc: 链接详细描述</span>
<span class="line">    link: https://链接地址</span>
<span class="line"></span>
<span class="line">  <span class="token list punctuation">-</span> icon: book</span>
<span class="line">    name: 书籍名称</span>
<span class="line">    desc: 书籍详细描述</span>
<span class="line">    link: https://你的书籍链接</span>
<span class="line"></span>
<span class="line">  <span class="token list punctuation">-</span> icon: article</span>
<span class="line">    name: 文章名称</span>
<span class="line">    desc: 文章详细描述</span>
<span class="line">    link: https://你的文章链接</span>
<span class="line"></span>
<span class="line">  <span class="token list punctuation">-</span> icon: friend</span>
<span class="line">    name: 伙伴名称</span>
<span class="line">    desc: 伙伴详细介绍</span>
<span class="line">    link: https://你的伙伴链接</span>
<span class="line"></span>
<span class="line">  <span class="token list punctuation">-</span> icon: /logo.svg</span>
<span class="line">    name: 自定义项目</span>
<span class="line">    desc: 自定义详细介绍</span>
<span class="line">    link: https://你的自定义链接</span>
<span class="line"></span></code></pre></div><p>如果不想显示，直接把<code>projects</code>的内容全部删除即可，效果如图：</p><figure><img src="https://s3.pysio.online/cdn-cgi/image/f=avif,onerror=redirect,slow-connection-quality=50/https://s3.pysio.online/pysioimages/blognopoj.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,29)]))}const r=n(t,[["render",i]]),c=JSON.parse(`{"path":"/posts/daily/WordPress%20to%20VuePress.html","title":"从WordPress迁移到VuePress","lang":"zh-CN","frontmatter":{"title":"从WordPress迁移到VuePress","date":"2024-10-21T00:00:00.000Z","icon":"fa-brands fa-vuejs","category":"daily","tag":["WordPress","日常"],"description":"开篇 为什么要迁移？ 在过去的1年多 我都使用WordPress 作为我的博客系统，但是我手上的小鸡实在是太弱了，实在是带不动WordPress这个大家伙，所以我决定迁移到VuePress上来。 开始迁移 最开始 我看了很多静态资源生成系统，比如Hexo、Hugo、Jekyll，最后我选择了VuePress Theme Hope。 那么开始迁移吧！ 安...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"从WordPress迁移到VuePress\\",\\"image\\":[\\"https://s3.pysio.online/cdn-cgi/image/f=avif,onerror=redirect,slow-connection-quality=50/https://s3.pysio.online/pysioimages/blogdemo.webp\\",\\"https://s3.pysio.online/cdn-cgi/image/f=avif,onerror=redirect,slow-connection-quality=50/https://s3.pysio.online/pysioimages/defpoj.webp\\",\\"https://s3.pysio.online/cdn-cgi/image/f=avif,onerror=redirect,slow-connection-quality=50/https://s3.pysio.online/pysioimages/blognopoj.webp\\"],\\"datePublished\\":\\"2024-10-21T00:00:00.000Z\\",\\"dateModified\\":\\"2025-04-26T00:39:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Pysio\\",\\"url\\":\\"https://github.com/pysio2007/\\"}]}"],["meta",{"property":"og:url","content":"https://www.pysio.online/posts/daily/WordPress%20to%20VuePress.html"}],["meta",{"property":"og:site_name","content":"Pysio's Home"}],["meta",{"property":"og:title","content":"从WordPress迁移到VuePress"}],["meta",{"property":"og:description","content":"开篇 为什么要迁移？ 在过去的1年多 我都使用WordPress 作为我的博客系统，但是我手上的小鸡实在是太弱了，实在是带不动WordPress这个大家伙，所以我决定迁移到VuePress上来。 开始迁移 最开始 我看了很多静态资源生成系统，比如Hexo、Hugo、Jekyll，最后我选择了VuePress Theme Hope。 那么开始迁移吧！ 安..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://s3.pysio.online/cdn-cgi/image/f=avif,onerror=redirect,slow-connection-quality=50/https://s3.pysio.online/pysioimages/blogdemo.webp"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-04-26T00:39:08.000Z"}],["meta",{"property":"article:tag","content":"日常"}],["meta",{"property":"article:tag","content":"WordPress"}],["meta",{"property":"article:published_time","content":"2024-10-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-26T00:39:08.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://www.pysio.online/en/posts/daily/WordPress%20to%20VuePress.html"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.pysio.online/rss.xml","title":"Pysio's Home RSS Feed"}]]},"git":{"createdTime":1729482482000,"updatedTime":1745627948000,"contributors":[{"name":"Pysio","username":"Pysio","email":"qq593277393@outlook.com","commits":7,"url":"https://github.com/Pysio"}]},"readingTime":{"minutes":2.32,"words":695},"filePathRelative":"posts/daily/WordPress to VuePress.md","excerpt":"<h2>开篇 为什么要迁移？</h2>\\n<p>在过去的1年多 我都使用WordPress 作为我的博客系统，但是我手上的小鸡实在是太弱了，实在是带不动WordPress这个大家伙，所以我决定迁移到VuePress上来。</p>\\n<h2>开始迁移</h2>\\n<p>最开始 我看了很多静态资源生成系统，比如Hexo、Hugo、Jekyll，最后我选择了<a href=\\"https://theme-hope.vuejs.press/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">VuePress Theme Hope</a>。</p>\\n<p>那么开始迁移吧！</p>","autoDesc":true}`);export{r as comp,c as data};
