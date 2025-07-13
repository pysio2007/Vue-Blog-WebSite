import{_ as s,c as n,e as a,o as t}from"./app-BZnwDgOs.js";const o={};function i(p,e){return t(),n("div",null,e[0]||(e[0]=[a(`<h2 id="introduction-why-migrate" tabindex="-1"><a class="header-anchor" href="#introduction-why-migrate"><span>Introduction: Why Migrate?</span></a></h2><p>For the past year or so, I&#39;ve been using WordPress as my blog system, but my small server is really too weak to handle WordPress, this big guy. So I decided to migrate to VuePress.</p><h2 id="starting-the-migration" tabindex="-1"><a class="header-anchor" href="#starting-the-migration"><span>Starting the Migration</span></a></h2><p>Initially, I looked at many static site generators like Hexo, Hugo, Jekyll, and finally chose <a href="https://theme-hope.vuejs.press/" target="_blank" rel="noopener noreferrer">VuePress Theme Hope</a>.</p><p>So let&#39;s start migrating!</p><h2 id="installing-vuepress-theme-hope" tabindex="-1"><a class="header-anchor" href="#installing-vuepress-theme-hope"><span>Installing VuePress Theme Hope</span></a></h2><p>First, install Node.js 18.0.0+</p><h3 id="then-create-the-project-template" tabindex="-1"><a class="header-anchor" href="#then-create-the-project-template"><span>Then create the project template</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">npm</span> init vuepress-theme-hope@latest my-docs</span>
<span class="line"></span></code></pre></div><p>Here, my-docs is a parameter representing the folder name of the VuePress Theme Hope project.</p><p>After executing the command, follow the prompts and use the keyboard ↓ to select Simplified Chinese and press Enter to make selections as needed.</p><h3 id="project-commands" tabindex="-1"><a class="header-anchor" href="#project-commands"><span>Project Commands</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># Start development server</span></span>
<span class="line"><span class="token function">npm</span> docs:dev</span>
<span class="line"><span class="token comment"># Build project and output</span></span>
<span class="line"><span class="token function">npm</span> docs:build</span>
<span class="line"><span class="token comment"># Clear cache and start development server</span></span>
<span class="line"><span class="token function">npm</span> docs:clean-dev</span>
<span class="line"></span></code></pre></div><p>Start the project and visit <a href="http://localhost:8080/" target="_blank" rel="noopener noreferrer">http://localhost:8080/</a> in your browser to see the effect</p><h3 id="directory-structure" tabindex="-1"><a class="header-anchor" href="#directory-structure"><span>Directory Structure</span></a></h3><div class="language-text" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">.</span>
<span class="line">├── .github (optional) → GitHub configuration file storage path</span>
<span class="line">│    └── workflow → GitHub workflow configuration</span>
<span class="line">│         └── docs-deploy.yml → Workflow for automatic documentation deployment</span>
<span class="line">│</span>
<span class="line">├── src → Documentation folder</span>
<span class="line">│    │</span>
<span class="line">│    ├── .vuepress (optional) → VuePress configuration folder</span>
<span class="line">│    │    │</span>
<span class="line">│    │    ├── dist (default) → Build output directory</span>
<span class="line">│    │    │</span>
<span class="line">│    │    ├── public (optional) → Static resource directory</span>
<span class="line">│    │    │</span>
<span class="line">│    │    ├── styles (optional) → For storing style-related files</span>
<span class="line">│    │    │</span>
<span class="line">│    │    ├── config.{js,ts} (optional) → Configuration file entry point</span>
<span class="line">│    │    │</span>
<span class="line">│    │    └── client.{js,ts} (optional) → Client file</span>
<span class="line">│    │</span>
<span class="line">│    ├── ... → Other project documentation</span>
<span class="line">│    │</span>
<span class="line">│    └── README.md → Project homepage</span>
<span class="line">│</span>
<span class="line">└── package.json → Node.js configuration file</span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="next-make-some-personalized-configurations" tabindex="-1"><a class="header-anchor" href="#next-make-some-personalized-configurations"><span>Next, Make Some Personalized Configurations</span></a></h3><h3 id="homepage-image-full-screen-setting" tabindex="-1"><a class="header-anchor" href="#homepage-image-full-screen-setting"><span>Homepage Image Full Screen Setting</span></a></h3><p>If you don&#39;t want the homepage image to be full screen, open README.md, find heroFullScreen and change it to false</p><div class="language-markdown" data-highlighter="prismjs" data-ext="md"><pre><code class="language-markdown"><span class="line">heroFullScreen: false</span>
<span class="line"></span></code></pre></div><p>Effect:</p><figure><img src="https://s3.pysio.online/cdn-cgi/image/f=avif,onerror=redirect,slow-connection-quality=50/https://s3.pysio.online/pysioimages/blogdemo.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="homepage-project-settings" tabindex="-1"><a class="header-anchor" href="#homepage-project-settings"><span>Homepage Project Settings</span></a></h3><p>The initialization will generate the following content by default. How do you modify it to your own projects?</p><figure><img src="https://s3.pysio.online/cdn-cgi/image/f=avif,onerror=redirect,slow-connection-quality=50/https://s3.pysio.online/pysioimages/defpoj.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Open <code>README.md</code>, find <code>projects</code>, and edit it to your desired content.</p><div class="language-markdown" data-highlighter="prismjs" data-ext="md"><pre><code class="language-markdown"><span class="line">projects:</span>
<span class="line">  <span class="token list punctuation">-</span> icon: project</span>
<span class="line">    name: Project Name</span>
<span class="line">    desc: Detailed project description</span>
<span class="line">    link: https://your-project-link</span>
<span class="line"></span>
<span class="line">  <span class="token list punctuation">-</span> icon: link</span>
<span class="line">    name: Link Name</span>
<span class="line">    desc: Detailed link description</span>
<span class="line">    link: https://link-address</span>
<span class="line"></span>
<span class="line">  <span class="token list punctuation">-</span> icon: book</span>
<span class="line">    name: Book Name</span>
<span class="line">    desc: Detailed book description</span>
<span class="line">    link: https://your-book-link</span>
<span class="line"></span>
<span class="line">  <span class="token list punctuation">-</span> icon: article</span>
<span class="line">    name: Article Name</span>
<span class="line">    desc: Detailed article description</span>
<span class="line">    link: https://your-article-link</span>
<span class="line"></span>
<span class="line">  <span class="token list punctuation">-</span> icon: friend</span>
<span class="line">    name: Partner Name</span>
<span class="line">    desc: Detailed partner introduction</span>
<span class="line">    link: https://your-partner-link</span>
<span class="line"></span>
<span class="line">  <span class="token list punctuation">-</span> icon: /logo.svg</span>
<span class="line">    name: Custom Project</span>
<span class="line">    desc: Custom detailed introduction</span>
<span class="line">    link: https://your-custom-link</span>
<span class="line"></span></code></pre></div><p>If you don&#39;t want to display it, just delete all the <code>projects</code> content. Effect as shown:</p><figure><img src="https://s3.pysio.online/cdn-cgi/image/f=avif,onerror=redirect,slow-connection-quality=50/https://s3.pysio.online/pysioimages/blognopoj.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,29)]))}const l=s(o,[["render",i]]),c=JSON.parse(`{"path":"/en/posts/daily/WordPress%20to%20VuePress.html","title":"Migrating from WordPress to VuePress","lang":"en-US","frontmatter":{"title":"Migrating from WordPress to VuePress","date":"2024-10-21T00:00:00.000Z","icon":"fa-brands fa-vuejs","category":"daily","tag":["WordPress","Daily"],"description":"Introduction: Why Migrate? For the past year or so, I've been using WordPress as my blog system, but my small server is really too weak to handle WordPress, this big guy. So I d...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Migrating from WordPress to VuePress\\",\\"image\\":[\\"https://s3.pysio.online/cdn-cgi/image/f=avif,onerror=redirect,slow-connection-quality=50/https://s3.pysio.online/pysioimages/blogdemo.webp\\",\\"https://s3.pysio.online/cdn-cgi/image/f=avif,onerror=redirect,slow-connection-quality=50/https://s3.pysio.online/pysioimages/defpoj.webp\\",\\"https://s3.pysio.online/cdn-cgi/image/f=avif,onerror=redirect,slow-connection-quality=50/https://s3.pysio.online/pysioimages/blognopoj.webp\\"],\\"datePublished\\":\\"2024-10-21T00:00:00.000Z\\",\\"dateModified\\":\\"2025-06-01T00:04:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Pysio\\",\\"url\\":\\"https://github.com/pysio2007/\\"}]}"],["meta",{"property":"og:url","content":"https://www.pysio.online/en/posts/daily/WordPress%20to%20VuePress.html"}],["meta",{"property":"og:site_name","content":"Pysio's Home"}],["meta",{"property":"og:title","content":"Migrating from WordPress to VuePress"}],["meta",{"property":"og:description","content":"Introduction: Why Migrate? For the past year or so, I've been using WordPress as my blog system, but my small server is really too weak to handle WordPress, this big guy. So I d..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://s3.pysio.online/cdn-cgi/image/f=avif,onerror=redirect,slow-connection-quality=50/https://s3.pysio.online/pysioimages/blogdemo.webp"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-06-01T00:04:33.000Z"}],["meta",{"property":"article:tag","content":"Daily"}],["meta",{"property":"article:tag","content":"WordPress"}],["meta",{"property":"article:published_time","content":"2024-10-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-06-01T00:04:33.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://www.pysio.online/posts/daily/WordPress%20to%20VuePress.html"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.pysio.online/en/rss.xml","title":"Pysio's Home RSS Feed"}]]},"git":{"createdTime":1748736273000,"updatedTime":1748736273000,"contributors":[{"name":"pysio2007","username":"pysio2007","email":"71202163+pysio2007@users.noreply.github.com","commits":1,"url":"https://github.com/pysio2007"}]},"readingTime":{"minutes":1.55,"words":466},"filePathRelative":"en/posts/daily/WordPress to VuePress.md","excerpt":"<h2>Introduction: Why Migrate?</h2>\\n<p>For the past year or so, I've been using WordPress as my blog system, but my small server is really too weak to handle WordPress, this big guy. So I decided to migrate to VuePress.</p>\\n<h2>Starting the Migration</h2>\\n<p>Initially, I looked at many static site generators like Hexo, Hugo, Jekyll, and finally chose <a href=\\"https://theme-hope.vuejs.press/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">VuePress Theme Hope</a>.</p>","autoDesc":true}`);export{l as comp,c as data};
