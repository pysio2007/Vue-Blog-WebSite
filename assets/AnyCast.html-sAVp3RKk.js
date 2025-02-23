import{_ as n,c as a,e,o as p}from"./app-BFDo-RJS.js";const t={};function l(o,s){return p(),a("div",null,s[0]||(s[0]=[e(`<p>因为闲着没事干, 就打算搭建一个Anycast 然后把博客和DNS都放上去, 本文暂且记录一下Anycast+博客的搭建过程。</p><h2 id="anycast-是什么" tabindex="-1"><a class="header-anchor" href="#anycast-是什么"><span>Anycast 是什么?</span></a></h2><blockquote><p>Anycast 是一种网络寻址和路由方法, 可以将传入请求路由到各种不同的位置或&quot;节点&quot;。在 CDN 的上下文中, Anycast 通常会将传入的流量路由到距离最近并且能够有效处理请求的数据中心。选择性路由使 Anycast 网络能够应对高流量、网络拥塞和 DDoS 攻击。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p></blockquote><h2 id="前提条件" tabindex="-1"><a class="header-anchor" href="#前提条件"><span>前提条件</span></a></h2><ul><li>一个ASN</li><li>一个IPv4/6地址段</li><li>多台可BGP Session的服务器 (如果可以 使用多个上游)</li><li>一个聪明的头脑</li><li><s>当然 还有一杯咖啡</s></li></ul><h2 id="_1-寻找一个上游" tabindex="-1"><a class="header-anchor" href="#_1-寻找一个上游"><span>1. 寻找一个上游</span></a></h2><p>各大运营商常在托管机房有接入点, 你可以购买机房的托管服务, 然后就应该可以直接联系运营商签约购买带宽及 IP transit 服务。 但是介于国内特色, 这一套下来你只会收到天价的账单~~（当然如果你不差钱就当我没说）~~</p><p>但是好消息是, 有很多的VPS商家提供BGP Session服务, 例如Vultr BuyVM等等, 你可以选择其中一个作为你的上游。 这些提供商每月价格大约在5-10美元之间, 性价比还算的过去。</p><p>你也可以在这里 <a href="https://bgp.services/" target="_blank" rel="noopener noreferrer">BGP Services</a> 寻找更多的提供商</p><h2 id="_2-宣告地址" tabindex="-1"><a class="header-anchor" href="#_2-宣告地址"><span>2. 宣告地址</span></a></h2><p>在开始这个步骤之前, 你应该按照商家的要求, 验证你的ASN和IP地址段。大部分商家都是开一个工单 本文已Vultr/BuyVM为例。</p><h3 id="获取链接信息" tabindex="-1"><a class="header-anchor" href="#获取链接信息"><span>获取链接信息</span></a></h3><h4 id="vultr" tabindex="-1"><a class="header-anchor" href="#vultr"><span>Vultr</span></a></h4><p><s>应为配置的时候忘记截图了 Vultr的ASN/IP段注册部分简短带过QWQ</s></p><p>直接打开如下地址 <a href="https://my.vultr.com/bgp/" target="_blank" rel="noopener noreferrer">Vultr BGP</a> 填写你的ASN和IP地址段, Vultr会给你的Whois邮箱发送一封验证码邮件, 验证之后等待Vultr的工作人员审核（注意回复工单）。</p><p>在申请通过之后, 打开VPS的详情, 点击 <code>BGP</code> 选项卡 就可以得到如下信息:</p><figure><img src="https://files.pysio.online/Images/20250216154622.png" alt="Vultr BGP" tabindex="0" loading="lazy"><figcaption>Vultr BGP</figcaption></figure><p>至此 你就得到了和Vultr进行BGP Session的信息。</p><h4 id="buyvm" tabindex="-1"><a class="header-anchor" href="#buyvm"><span>BuyVM</span></a></h4><p>登录<a href="https://manage.buyvm.net/" target="_blank" rel="noopener noreferrer">BuyVM管理后台</a> 选择你的机器 点击 <code>Networking</code> -&gt; <code>BGP</code> 在提交工单之后, 等待审核通过。就可以得到如下信息:</p><figure><img src="https://files.pysio.online/Images/20250217081432.png" alt="BuyVM BGP" tabindex="0" loading="lazy"><figcaption>BuyVM BGP</figcaption></figure><p>至此 你就得到了和BuyVM进行BGP Session的信息。</p><h3 id="配置bird2" tabindex="-1"><a class="header-anchor" href="#配置bird2"><span>配置Bird2</span></a></h3><p>我使用 <code>Debian 12</code> 作为示例, 直接使用APT安装Bird2 <code>apt install bird2</code></p><p>我的ASN为 <code>AS213605</code> 我想宣告 <code>2a14:67c1:a020::/48</code></p><p>以Vultr为例, 他给出的对端ASN是 <code>64515</code> 对端IP是 <code>2001:19f0:ffff::1</code> 我们的 vps 本身的 IPv6 地址为 <code>2001:19f0:5001:225f:5400:05ff:fe69:6776</code>, MD5 密码为 114514, 所以我的配置文件如下:</p><div class="language-conf" data-highlighter="prismjs" data-ext="conf" data-title="conf"><pre><code><span class="line">log syslog all;</span>
<span class="line"></span>
<span class="line">router id 114.514.111.222; # vps 的公网 IPv4 地址</span>
<span class="line">define ASN=213605; # 你的 ASN</span>
<span class="line">define OWNIPv6s=[2a14:67c1:a020::/48]; # 你的 IPv6 地址段</span>
<span class="line"></span>
<span class="line"># device 协议必须有, 否则 BIRD 不会自动从内核获取比如网络接口的信息, direct 协议和寻找下一跳的时候就挂了</span>
<span class="line">protocol device {}</span>
<span class="line"></span>
<span class="line"># kernel 协议用于导出路由表到内核</span>
<span class="line">protocol kernel {</span>
<span class="line">    ipv6 {</span>
<span class="line">        export all; # 将所有 IPv6 路由都导入系统路由表</span>
<span class="line">    };</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"># static 定义静态路由</span>
<span class="line">protocol static static_v6 {</span>
<span class="line">    ipv6;</span>
<span class="line">    route 2a14:67c1:a020::/48 via 2001:19f0:5001:225f:5400:05ff:fe69:6776;  # 宣告 2a14:7c0:4d00::/40 这段 IP, 同时修改via后的ipv为你vps的ipv6</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">filter export_filter_v6 {</span>
<span class="line">    if net ~ OWNIPv6s then accept; # 如果前缀包括在OWNIPv6s内则放出</span>
<span class="line">    reject; # 否则全部拒绝</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">filter import_filter_v6 {</span>
<span class="line">    if net ~ [::/0] then reject; # 如果为默认路由则拒绝</span>
<span class="line">    accept; # 接收所有其他路由</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">protocol bgp vultr {</span>
<span class="line">    local as ASN; # 指定本端ASN</span>
<span class="line">    source address 2001:19f0:5001:225f:5400:05ff:fe49:6493; # 指定本端地址</span>
<span class="line">    multihop 2; # 设置多跳 Vultr提供的值为2</span>
<span class="line">    neighbor 2001:19f0:ffff::1 as 64515; # 指定对端地址与ASN</span>
<span class="line">    ipv6 { # 指定要在该BGP邻居上跑的协议</span>
<span class="line">        import filter import_filter_v6; # 指定导入过滤器</span>
<span class="line">        export filter export_filter_v6; # 指定导出过滤器</span>
<span class="line">        export limit 10; # 限制导出前缀数量, 根据需要调整, 防止过滤器配糊导致 session 爆炸</span>
<span class="line">    };</span>
<span class="line">    password &quot;114514&quot;; # 如果没有 password 删除这行即可</span>
<span class="line">    graceful restart; # 平滑重启, 防止重启bird的时候造成路由撤回导致服务中断</span>
<span class="line">}</span>
<span class="line"></span></code></pre></div><p>你可以直接按着我的配置文件修改(建议先去看看soha的教程 然后自己手写<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup>), 改好后写入 <code>/etc/bird/bird.conf</code>, 然后应用配置文件 <code>bridc c</code></p><p>你可以运行 <code>birdc show protocols all</code> 查看当前所有协议的状态:</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">vultr    BGP        ---        up     <span class="token number">2025</span>-02-10    Established   </span>
<span class="line">  BGP state:          Established</span>
<span class="line">    Neighbor address: <span class="token number">2001</span>:19f0:ffff::1</span>
<span class="line">    Neighbor AS:      <span class="token number">64515</span></span>
<span class="line">    Local AS:         <span class="token number">213605</span></span>
<span class="line">    Neighbor ID:      <span class="token number">45.76</span>.40.105</span>
<span class="line">    Local capabilities</span>
<span class="line">      Multiprotocol</span>
<span class="line">        AF announced: ipv6</span>
<span class="line">      Route refresh</span>
<span class="line">      Graceful restart</span>
<span class="line">        Restart time: <span class="token number">120</span></span>
<span class="line">        AF supported: ipv6</span>
<span class="line">        AF preserved:</span>
<span class="line">      <span class="token number">4</span>-octet AS numbers</span>
<span class="line">      Enhanced refresh</span>
<span class="line">      Long-lived graceful restart</span>
<span class="line">    Neighbor capabilities</span>
<span class="line">      Multiprotocol</span>
<span class="line">        AF announced: ipv6</span>
<span class="line">      Route refresh</span>
<span class="line">      Extended message</span>
<span class="line">      Graceful restart</span>
<span class="line">      <span class="token number">4</span>-octet AS numbers</span>
<span class="line">      ADD-<span class="token environment constant">PATH</span></span>
<span class="line">        RX: ipv6</span>
<span class="line">        TX:</span>
<span class="line">      Enhanced refresh</span>
<span class="line">      Long-lived graceful restart</span>
<span class="line">        LL stale time: <span class="token number">0</span></span>
<span class="line">        AF supported:</span>
<span class="line">        AF preserved: ipv6</span>
<span class="line">      Hostname: ams510.vultr.com</span>
<span class="line">    Session:          external multihop AS4</span>
<span class="line">    Source address:   <span class="token number">2001</span>:19f0:5001:225f:5400:5ff:fe49:6493</span>
<span class="line">    Hold timer:       <span class="token number">142.836</span>/180</span>
<span class="line">    Keepalive timer:  <span class="token number">38.528</span>/60</span>
<span class="line">  Channel ipv6</span>
<span class="line">    State:          UP</span>
<span class="line">    Table:          master6</span>
<span class="line">    Preference:     <span class="token number">100</span></span>
<span class="line">    Input filter:   ACCEPT</span>
<span class="line">    Output filter:  ACCEPT</span>
<span class="line">    Routes:         <span class="token number">203065</span> imported, <span class="token number">2</span> exported, <span class="token number">203065</span> preferred</span>
<span class="line">    Route change stats:     received   rejected   filtered    ignored   accepted</span>
<span class="line">      Import updates:        <span class="token number">8010300</span>          <span class="token number">0</span>          <span class="token number">0</span>     <span class="token number">204161</span>    <span class="token number">7806139</span></span>
<span class="line">      Import withdraws:      <span class="token number">4736940</span>          <span class="token number">0</span>        ---        <span class="token number">194</span>    <span class="token number">4736746</span></span>
<span class="line">      Export updates:        <span class="token number">7806141</span>    <span class="token number">7806139</span>          <span class="token number">0</span>        ---          <span class="token number">2</span></span>
<span class="line">      Export withdraws:      <span class="token number">4736746</span>        ---        ---        ---          <span class="token number">0</span></span>
<span class="line">    BGP Next hop:   <span class="token number">2001</span>:19f0:5001:225f:5400:5ff:fe49:6493</span>
<span class="line">    IGP IPv6 table: master6</span>
<span class="line"></span></code></pre></div><p>宣告的IP段在全球范围内的转播和收敛需要一点时间, 你可与去干点别的事情, 或者干脆直接睡一觉(如果你是在半夜配置的话)。</p><p>等待半小时到一小时后, 可用打开 <a href="https://bgp.tools/" target="_blank" rel="noopener noreferrer">BGP Tools</a> 输入你的IP段查看全球范围内的转播情况。</p><figure><img src="https://files.pysio.online/Images/20250217083854.png" alt="我的Anycast传播情况" tabindex="0" loading="lazy"><figcaption>我的Anycast传播情况</figcaption></figure><h2 id="_3-配置网卡" tabindex="-1"><a class="header-anchor" href="#_3-配置网卡"><span>3. 配置网卡</span></a></h2><p>目前我们已经成功地把 <code>2a14:67c1:a020::/48</code> 宣告出去了.</p><p>此时全球访问 <code>2a14:67c1:a020::/48</code> 的流量就已经被路由到我们这台 vps 上了, 不过我们的 vps 现在被配置为什么都不做, 直接返回 unreachable. 我们现在只需要在 vps 上做一些小小的配置就能为全球提供服务了:</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 创建一个 dummy 网卡</span></span>
<span class="line"><span class="token function">ip</span> <span class="token function">link</span> <span class="token function">add</span> dev dummy0 <span class="token builtin class-name">type</span> dummy</span>
<span class="line"><span class="token function">ip</span> <span class="token function">link</span> <span class="token builtin class-name">set</span> dummy0 up</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 选一个喜欢的 IP 地址配置给它</span></span>
<span class="line"><span class="token function">ip</span> addr <span class="token function">add</span> dev dummy0 2a14:67c1:a020::1</span>
<span class="line"></span></code></pre></div><p>完成后, 我们就可以从自己的电脑上 ping 到 <code>2a14:67c1:a020::1</code> 这个地址了.</p><h2 id="_4-anycast" tabindex="-1"><a class="header-anchor" href="#_4-anycast"><span>4. Anycast?</span></a></h2><p>现在 你可与参照上面的步骤在多台服务器上配置BGP Session, 然后在每台服务器上配置网卡, 配置相同的IP地址, 就可以实现Anycast了。(对就这么简单)</p><p>这样 你的访问会直接去找最近的服务器提供服务, 但是对于中国大陆来说 很可能绕地球一圈就是了。。。</p><p>当然如果你有钱, 可以找运营商(或者阿里/腾讯)BOYIP接入</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.lyc8503.net/post/asn-2-bgp-session/" target="_blank" rel="noopener noreferrer">自己在家开运营商 Part.2 - 向世界宣告 IP 段 (BGP Session &amp; BIRD)</a></p><p><a href="https://blog.lyc8503.net/post/asn-4-anycast-network/" target="_blank" rel="noopener noreferrer">自己在家开运营商 Part.4 - 建立自己的 Anycast 网络</a></p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p><a href="https://www.cloudflare.com/zh-cn/learning/cdn/glossary/anycast-network/" target="_blank" rel="noopener noreferrer">Anycast 网络是什么？| Anycast 的工作原理 | Cloudflare</a> <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li><li id="footnote2" class="footnote-item"><p><a href="https://soha.moe/post/bird-bgp-kickstart.html" target="_blank" rel="noopener noreferrer">BIRD 与 BGP 的新手开场</a> <a href="#footnote-ref2" class="footnote-backref">↩︎</a></p></li></ol></section>`,47)]))}const i=n(t,[["render",l],["__file","AnyCast.html.vue"]]),r=JSON.parse(`{"path":"/posts/daily/AnyCast.html","title":"记一次AnyCast+博客搭建","lang":"zh-CN","frontmatter":{"title":"记一次AnyCast+博客搭建","date":"2025-02-15T00:00:00.000Z","icon":"fa-solid fa-router","category":"daily","tag":["BGP","日常"],"description":"因为闲着没事干, 就打算搭建一个Anycast 然后把博客和DNS都放上去, 本文暂且记录一下Anycast+博客的搭建过程。 Anycast 是什么? Anycast 是一种网络寻址和路由方法, 可以将传入请求路由到各种不同的位置或\\"节点\\"。在 CDN 的上下文中, Anycast 通常会将传入的流量路由到距离最近并且能够有效处理请求的数据中心。选择...","head":[["meta",{"property":"og:url","content":"https://www.pysio.online/posts/daily/AnyCast.html"}],["meta",{"property":"og:site_name","content":"Pysio's Home"}],["meta",{"property":"og:title","content":"记一次AnyCast+博客搭建"}],["meta",{"property":"og:description","content":"因为闲着没事干, 就打算搭建一个Anycast 然后把博客和DNS都放上去, 本文暂且记录一下Anycast+博客的搭建过程。 Anycast 是什么? Anycast 是一种网络寻址和路由方法, 可以将传入请求路由到各种不同的位置或\\"节点\\"。在 CDN 的上下文中, Anycast 通常会将传入的流量路由到距离最近并且能够有效处理请求的数据中心。选择..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://files.pysio.online/Images/20250216154622.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-17T00:51:11.000Z"}],["meta",{"property":"article:tag","content":"BGP"}],["meta",{"property":"article:tag","content":"日常"}],["meta",{"property":"article:published_time","content":"2025-02-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-17T00:51:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"记一次AnyCast+博客搭建\\",\\"image\\":[\\"https://files.pysio.online/Images/20250216154622.png\\",\\"https://files.pysio.online/Images/20250217081432.png\\",\\"https://files.pysio.online/Images/20250217083854.png\\"],\\"datePublished\\":\\"2025-02-15T00:00:00.000Z\\",\\"dateModified\\":\\"2025-02-17T00:51:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Pysio\\",\\"url\\":\\"https://github.com/pysio2007/\\"}]}"]]},"headers":[{"level":2,"title":"Anycast 是什么?","slug":"anycast-是什么","link":"#anycast-是什么","children":[]},{"level":2,"title":"前提条件","slug":"前提条件","link":"#前提条件","children":[]},{"level":2,"title":"1. 寻找一个上游","slug":"_1-寻找一个上游","link":"#_1-寻找一个上游","children":[]},{"level":2,"title":"2. 宣告地址","slug":"_2-宣告地址","link":"#_2-宣告地址","children":[{"level":3,"title":"获取链接信息","slug":"获取链接信息","link":"#获取链接信息","children":[]},{"level":3,"title":"配置Bird2","slug":"配置bird2","link":"#配置bird2","children":[]}]},{"level":2,"title":"3. 配置网卡","slug":"_3-配置网卡","link":"#_3-配置网卡","children":[]},{"level":2,"title":"4. Anycast?","slug":"_4-anycast","link":"#_4-anycast","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1739692125000,"updatedTime":1739753471000,"contributors":[{"name":"Pysio","username":"Pysio","email":"qq593277393@outlook.com","commits":4,"url":"https://github.com/Pysio"}]},"readingTime":{"minutes":6.08,"words":1823},"filePathRelative":"posts/daily/AnyCast.md","localizedDate":"2025年2月15日","excerpt":"<p>因为闲着没事干, 就打算搭建一个Anycast 然后把博客和DNS都放上去, 本文暂且记录一下Anycast+博客的搭建过程。</p>\\n<h2>Anycast 是什么?</h2>\\n<blockquote>\\n<p>Anycast 是一种网络寻址和路由方法, 可以将传入请求路由到各种不同的位置或\\"节点\\"。在 CDN 的上下文中, Anycast 通常会将传入的流量路由到距离最近并且能够有效处理请求的数据中心。选择性路由使 Anycast 网络能够应对高流量、网络拥塞和 DDoS 攻击。<sup class=\\"footnote-ref\\"><a href=\\"#footnote1\\">[1]</a><a class=\\"footnote-anchor\\" id=\\"footnote-ref1\\"></a></sup></p><a class=\\"footnote-anchor\\" id=\\"footnote-ref1\\">\\n</a></blockquote>","autoDesc":true}`);export{i as comp,r as data};
