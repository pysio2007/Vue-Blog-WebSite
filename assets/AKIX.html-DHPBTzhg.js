import{_ as n,c as s,e,o as p}from"./app-C1Ba8DeD.js";const l={};function i(t,a){return p(),s("div",null,a[0]||(a[0]=[e(`<p>ASN拿到手已经三个月了，前阵子也没怎么折腾。最近纯粹是心血来潮，突然想试试能不能自己搭个IXP。</p><h2 id="为什么要折腾ixp" tabindex="-1"><a class="header-anchor" href="#为什么要折腾ixp"><span>为什么要折腾IXP？</span></a></h2><p>说实话，最初的动力很简单，就是想玩。BGP、RPKI这些词看着高大上，实际动手才发现，原来自己也能搞起来。顺便还能帮朋友们的网络互联省点事，何乐而不为？</p><ul><li>想深入理解BGP和RPKI，光看文档不过瘾，必须实操</li><li>让小网络也能低门槛互联，体验&quot;互联网的互联网&quot;</li><li>顺便试试远程虚拟接入，看看能不能让地球另一端的朋友也能轻松接入</li></ul><h2 id="技术选型和踩坑" tabindex="-1"><a class="header-anchor" href="#技术选型和踩坑"><span>技术选型和踩坑</span></a></h2><p>一开始就没打算搞得多复杂，能跑起来、能互联、能安全就行。</p><ul><li>路由软件选了Bird，轻量好用，配置也不难</li><li>交换用VXLAN，省得折腾物理交换机，远程接入也方便</li><li>RPKI自己搭了个RTR服务器，安全感up</li><li>服务器放在法兰克福，欧洲网络资源丰富，延迟也不错</li></ul><p>最头疼的其实是远程虚拟接入，毕竟不是每个人都能去机房插根网线。VXLAN帮了大忙，大家只要有公网VPS就能拉隧道进来。</p><h2 id="动手搭建的流水账" tabindex="-1"><a class="header-anchor" href="#动手搭建的流水账"><span>动手搭建的流水账</span></a></h2><h3 id="_1-服务器和网络" tabindex="-1"><a class="header-anchor" href="#_1-服务器和网络"><span>1. 服务器和网络</span></a></h3><p>先搞了一台支持BGP的VPS，申请了IPv6段<code>2a14:67c1:a080::/48</code>。IPv4太贵，IPv6用起来真香。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># 创建IXP VXLAN接口</span></span>
<span class="line"><span class="token function">ip</span> <span class="token function">link</span> <span class="token function">add</span> vxlan0 <span class="token builtin class-name">type</span> vxlan <span class="token function">id</span> <span class="token number">10</span> dstport <span class="token number">4789</span> <span class="token builtin class-name">local</span> 2a05:f480:1800:2e75:5400:05ff:fe65:88f3</span>
<span class="line"><span class="token function">ip</span> addr <span class="token function">add</span> 2a14:67c1:a080::1/64 dev vxlan0</span>
<span class="line"><span class="token function">ip</span> <span class="token function">link</span> <span class="token builtin class-name">set</span> vxlan0 up</span>
<span class="line"></span></code></pre></div><h3 id="_2-bird配置" tabindex="-1"><a class="header-anchor" href="#_2-bird配置"><span>2. Bird配置</span></a></h3><p>Bird是核心，负责BGP路由交换。配置其实没想象中复杂，主要就是ASN过滤、RPKI校验、模板化加对等体。</p><div class="language-conf" data-highlighter="prismjs" data-ext="conf"><pre><code><span class="line">router id 136.244.83.121;</span>
<span class="line"></span>
<span class="line"># 定义BOGON ASN过滤</span>
<span class="line">define BOGON_ASNS = [</span>
<span class="line">    0, 23456, 64496..64511, # ... 其他BOGON ASN</span>
<span class="line">];</span>
<span class="line"></span>
<span class="line">define IX_PEERS = [</span>
<span class="line">    213605, 213891, 151194, 198025, 210352</span>
<span class="line">];</span>
<span class="line"></span>
<span class="line">function ix_import() {</span>
<span class="line">    if bgp_path.last ~ BOGON_ASNS then return false;</span>
<span class="line">    if !check_roa_v6() then return false;</span>
<span class="line">    return true;</span>
<span class="line">}</span>
<span class="line"></span></code></pre></div><p>模板化配置，后续加成员很方便：</p><div class="language-conf" data-highlighter="prismjs" data-ext="conf"><pre><code><span class="line">template bgp ix_rs {</span>
<span class="line">    local as 210440;</span>
<span class="line">    multihop 2;</span>
<span class="line">    ipv6 {</span>
<span class="line">        import where ix_import();</span>
<span class="line">        export where ix_export();</span>
<span class="line">        next hop self;</span>
<span class="line">        graceful restart on;</span>
<span class="line">    };</span>
<span class="line">}</span>
<span class="line"></span></code></pre></div><h3 id="_3-rpki验证" tabindex="-1"><a class="header-anchor" href="#_3-rpki验证"><span>3. RPKI验证</span></a></h3><p>安全这块不能省，自己搭了RPKI验证器，Cloudflare也拉了个备份。</p><div class="language-conf" data-highlighter="prismjs" data-ext="conf"><pre><code><span class="line">protocol rpki rpki_akae {</span>
<span class="line">    roa4 { table roa_table_v4; };</span>
<span class="line">    roa6 { table roa_table_v6; };</span>
<span class="line">    remote &quot;rpki.akae.re&quot; port 8282;</span>
<span class="line">    retry keep 90;</span>
<span class="line">    refresh keep 43200;</span>
<span class="line">    expire keep 86400;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">protocol rpki rpki_cloudflare {</span>
<span class="line">    roa4 { table roa_table_v4; };</span>
<span class="line">    roa6 { table roa_table_v6; };</span>
<span class="line">    remote &quot;rtr.rpki.cloudflare.com&quot; port 8282;</span>
<span class="line">    retry keep 90;</span>
<span class="line">    refresh keep 43200;</span>
<span class="line">    expire keep 86400;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function check_roa_v6() {</span>
<span class="line">    case roa_check(roa_table_v6, net, bgp_path.last) {</span>
<span class="line">        ROA_VALID: return true;</span>
<span class="line">        ROA_UNKNOWN: return true;</span>
<span class="line">        ROA_INVALID: return false;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre></div><h3 id="_4-peeringdb注册" tabindex="-1"><a class="header-anchor" href="#_4-peeringdb注册"><span>4. PeeringDB注册</span></a></h3><p>搭好后顺手在PeeringDB挂了个号：</p><ul><li>组织：AKAERE NETWORKS TECHNOLOGY LTD</li><li>别名：Akaere IX</li><li>位置：CN</li><li>地域：亚太地区</li><li>服务级别：工作时间</li><li>网站：<a href="https://ixpm.akae.re/" target="_blank" rel="noopener noreferrer">ixpm.akae.re</a></li></ul><h2 id="运营小记" tabindex="-1"><a class="header-anchor" href="#运营小记"><span>运营小记</span></a></h2><p>目前已经有几个朋友的网络接入了Akaere IX，大家一起玩BGP、测路由、折腾RPKI。带宽和规模其实都不是重点，关键是能互联、能交流、能一起成长。</p><h3 id="遇到的坑" tabindex="-1"><a class="header-anchor" href="#遇到的坑"><span>遇到的坑</span></a></h3><ul><li>VXLAN偶尔抽风，隧道不稳，得多监控</li><li>每个成员的路由策略都不一样，配置得灵活点</li></ul><h3 id="技术收获" tabindex="-1"><a class="header-anchor" href="#技术收获"><span>技术收获</span></a></h3><ul><li>BGP路由控制和策略玩法，实际操作比看书有趣多了</li><li>RPKI部署和异常处理，安全感拉满</li><li>VXLAN跨地域二层网络，远程接入so easy</li><li>自动化脚本管理，省心不少</li></ul><h2 id="后续想法" tabindex="-1"><a class="header-anchor" href="#后续想法"><span>后续想法</span></a></h2><p>Akaere IX还在慢慢完善，未来想：</p><ul><li>多接点，覆盖更多地区</li><li>自动化和可视化做得更好</li><li>路由安全服务再丰富点</li><li>也许还能和别的IXP互联玩玩</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>这次折腾IXP，收获的不只是技术，更是和一群同样热爱网络的朋友一起成长的乐趣。互联网的本质就是开放和连接，IXP只是一个小小的缩影。</p><p>如果你也想玩BGP、想体验网络互联，欢迎来找我（team@akae.re），一起折腾！</p><hr><p><strong>技术参考：</strong></p><ul><li><a href="https://bird.network.cz/" target="_blank" rel="noopener noreferrer">BIRD路由软件文档</a></li><li><a href="https://rpki.readthedocs.io/" target="_blank" rel="noopener noreferrer">RPKI部署指南</a></li><li><a href="https://datatracker.ietf.org/doc/rfc7348/" target="_blank" rel="noopener noreferrer">VXLAN技术介绍</a></li></ul>`,38)]))}const c=n(l,[["render",i]]),o=JSON.parse(`{"path":"/posts/daily/AKIX.html","title":"组建一个IXP的小计","lang":"zh-CN","frontmatter":{"title":"组建一个IXP的小计","date":"2025-05-05T00:00:00.000Z","icon":"fa-solid fa-ethernet","category":"daily","tag":["BGP","日常"],"description":"ASN拿到手已经三个月了，前阵子也没怎么折腾。最近纯粹是心血来潮，突然想试试能不能自己搭个IXP。 为什么要折腾IXP？ 说实话，最初的动力很简单，就是想玩。BGP、RPKI这些词看着高大上，实际动手才发现，原来自己也能搞起来。顺便还能帮朋友们的网络互联省点事，何乐而不为？ 想深入理解BGP和RPKI，光看文档不过瘾，必须实操 让小网络也能低门槛互联，...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"组建一个IXP的小计\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-05-05T00:00:00.000Z\\",\\"dateModified\\":\\"2025-05-05T12:11:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Pysio\\",\\"url\\":\\"https://github.com/pysio2007/\\"}]}"],["meta",{"property":"og:url","content":"https://www.pysio.online/posts/daily/AKIX.html"}],["meta",{"property":"og:site_name","content":"Pysio's Home"}],["meta",{"property":"og:title","content":"组建一个IXP的小计"}],["meta",{"property":"og:description","content":"ASN拿到手已经三个月了，前阵子也没怎么折腾。最近纯粹是心血来潮，突然想试试能不能自己搭个IXP。 为什么要折腾IXP？ 说实话，最初的动力很简单，就是想玩。BGP、RPKI这些词看着高大上，实际动手才发现，原来自己也能搞起来。顺便还能帮朋友们的网络互联省点事，何乐而不为？ 想深入理解BGP和RPKI，光看文档不过瘾，必须实操 让小网络也能低门槛互联，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-05-05T12:11:54.000Z"}],["meta",{"property":"article:tag","content":"日常"}],["meta",{"property":"article:tag","content":"BGP"}],["meta",{"property":"article:published_time","content":"2025-05-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-05-05T12:11:54.000Z"}]]},"git":{"createdTime":1746447114000,"updatedTime":1746447114000,"contributors":[{"name":"Pysio","username":"Pysio","email":"qq593277393@outlook.com","commits":1,"url":"https://github.com/Pysio"}]},"readingTime":{"minutes":3.39,"words":1016},"filePathRelative":"posts/daily/AKIX.md","excerpt":"<p>ASN拿到手已经三个月了，前阵子也没怎么折腾。最近纯粹是心血来潮，突然想试试能不能自己搭个IXP。</p>\\n<h2>为什么要折腾IXP？</h2>\\n<p>说实话，最初的动力很简单，就是想玩。BGP、RPKI这些词看着高大上，实际动手才发现，原来自己也能搞起来。顺便还能帮朋友们的网络互联省点事，何乐而不为？</p>\\n<ul>\\n<li>想深入理解BGP和RPKI，光看文档不过瘾，必须实操</li>\\n<li>让小网络也能低门槛互联，体验\\"互联网的互联网\\"</li>\\n<li>顺便试试远程虚拟接入，看看能不能让地球另一端的朋友也能轻松接入</li>\\n</ul>\\n<h2>技术选型和踩坑</h2>\\n<p>一开始就没打算搞得多复杂，能跑起来、能互联、能安全就行。</p>","autoDesc":true}`);export{c as comp,o as data};
