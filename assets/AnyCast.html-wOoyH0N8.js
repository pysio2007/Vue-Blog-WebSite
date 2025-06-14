import{_ as e,c as s,e as a,o as t}from"./app-e1-AQ47e.js";const o={};function i(r,n){return t(),s("div",null,n[0]||(n[0]=[a(`<p>Since I had nothing to do, I decided to set up an Anycast and put my blog and DNS on it. This article documents the process of setting up Anycast + blog.</p><h2 id="what-is-anycast" tabindex="-1"><a class="header-anchor" href="#what-is-anycast"><span>What is Anycast?</span></a></h2><blockquote><p>Anycast is a network addressing and routing method that can route incoming requests to various different locations or &quot;nodes&quot;. In the context of CDN, Anycast usually routes incoming traffic to the nearest data center that can effectively handle requests. Selective routing enables Anycast networks to handle high traffic, network congestion, and DDoS attacks.<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p></blockquote><h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites"><span>Prerequisites</span></a></h2><ul><li>An ASN</li><li>An IPv4/6 address segment</li><li>Multiple servers capable of BGP Session (preferably using multiple upstreams)</li><li>A smart brain</li><li><s>Of course, also a cup of coffee</s></li></ul><h2 id="_1-finding-an-upstream" tabindex="-1"><a class="header-anchor" href="#_1-finding-an-upstream"><span>1. Finding an Upstream</span></a></h2><p>Major carriers often have access points in hosting centers. You can purchase hosting services from the data center, then directly contact carriers to sign contracts for bandwidth and IP transit services. But given domestic characteristics, this whole process will only get you an astronomical bill <s>(unless you&#39;re not short on money, then pretend I didn&#39;t say anything)</s></p><p>But the good news is, many VPS providers offer BGP Session services, such as Vultr, BuyVM, etc. You can choose one of them as your upstream. These providers charge about $5-10 per month, which is reasonably cost-effective.</p><p>You can also find more providers here: <a href="https://bgp.services/" target="_blank" rel="noopener noreferrer">BGP Services</a></p><h2 id="_2-announcing-addresses" tabindex="-1"><a class="header-anchor" href="#_2-announcing-addresses"><span>2. Announcing Addresses</span></a></h2><p>Before starting this step, you should verify your ASN and IP address segment according to the provider&#39;s requirements. Most providers require opening a ticket. This article uses Vultr/BuyVM as examples.</p><h3 id="getting-connection-information" tabindex="-1"><a class="header-anchor" href="#getting-connection-information"><span>Getting Connection Information</span></a></h3><h4 id="vultr" tabindex="-1"><a class="header-anchor" href="#vultr"><span>Vultr</span></a></h4><p><s>Since I forgot to take screenshots during configuration, I&#39;ll briefly cover the Vultr ASN/IP segment registration part QWQ</s></p><p>Open this address: <a href="https://my.vultr.com/bgp/" target="_blank" rel="noopener noreferrer">Vultr BGP</a> Fill in your ASN and IP address segment. Vultr will send a verification code email to your Whois email. After verification, wait for Vultr staff to review (remember to reply to tickets).</p><p>After approval, open VPS details, click the <code>BGP</code> tab to get the following information:</p><figure><img src="https://s3.pysio.online/cdn-cgi/image/f=avif,onerror=redirect,slow-connection-quality=50/https://s3.pysio.online/pysioimages/20250216154622.png" alt="Vultr BGP" tabindex="0" loading="lazy"><figcaption>Vultr BGP</figcaption></figure><p>Now you have the information to establish BGP Session with Vultr.</p><h4 id="buyvm" tabindex="-1"><a class="header-anchor" href="#buyvm"><span>BuyVM</span></a></h4><p>Login to <a href="https://manage.buyvm.net/" target="_blank" rel="noopener noreferrer">BuyVM management panel</a> Select your machine, click <code>Networking</code> -&gt; <code>BGP</code>. After submitting a ticket, wait for approval to get the following information:</p><figure><img src="https://s3.pysio.online/cdn-cgi/image/f=avif,onerror=redirect,slow-connection-quality=50/https://s3.pysio.online/pysioimages/20250217081432.png" alt="BuyVM BGP" tabindex="0" loading="lazy"><figcaption>BuyVM BGP</figcaption></figure><p>Now you have the information to establish BGP Session with BuyVM.</p><h3 id="configuring-bird2" tabindex="-1"><a class="header-anchor" href="#configuring-bird2"><span>Configuring Bird2</span></a></h3><p>I use <code>Debian 12</code> as an example, directly install Bird2 using APT: <code>apt install bird2</code></p><p>My ASN is <code>AS213605</code> and I want to announce <code>2a14:67c1:a020::/48</code></p><p>Using Vultr as an example, they give peer ASN <code>64515</code>, peer IP <code>2001:19f0:ffff::1</code>, our VPS&#39;s own IPv6 address is <code>2001:19f0:5001:225f:5400:05ff:fe69:6776</code>, MD5 password is 114514, so my configuration file is:</p><div class="language-conf" data-highlighter="prismjs" data-ext="conf"><pre><code class="language-conf"><span class="line">log syslog all;</span>
<span class="line"></span>
<span class="line">router id 114.514.111.222; # VPS public IPv4 address</span>
<span class="line">define ASN=213605; # Your ASN</span>
<span class="line">define OWNIPv6s=[2a14:67c1:a020::/48]; # Your IPv6 address segment</span>
<span class="line"></span>
<span class="line"># device protocol is required, otherwise BIRD won&#39;t automatically get network interface info from kernel</span>
<span class="line">protocol device {}</span>
<span class="line"></span>
<span class="line"># kernel protocol exports routing table to kernel</span>
<span class="line">protocol kernel {</span>
<span class="line">    ipv6 {</span>
<span class="line">        export all; # Import all IPv6 routes to system routing table</span>
<span class="line">    };</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"># static defines static routes</span>
<span class="line">protocol static static_v6 {</span>
<span class="line">    ipv6;</span>
<span class="line">    route 2a14:67c1:a020::/48 via 2001:19f0:5001:225f:5400:05ff:fe69:6776;  # Announce 2a14:7c0:4d00::/40 segment, modify the IP after via to your VPS&#39;s IPv6</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">filter export_filter_v6 {</span>
<span class="line">    if net ~ OWNIPv6s then accept; # If prefix is included in OWNIPv6s then allow</span>
<span class="line">    reject; # Otherwise reject all</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">filter import_filter_v6 {</span>
<span class="line">    if net ~ [::/0] then reject; # If default route then reject</span>
<span class="line">    accept; # Accept all other routes</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">protocol bgp vultr {</span>
<span class="line">    local as ASN; # Specify local ASN</span>
<span class="line">    source address 2001:19f0:5001:225f:5400:05ff:fe49:6493; # Specify local address</span>
<span class="line">    multihop 2; # Set multihop, Vultr provides value 2</span>
<span class="line">    neighbor 2001:19f0:ffff::1 as 64515; # Specify peer address and ASN</span>
<span class="line">    ipv6 { # Specify protocol to run on this BGP neighbor</span>
<span class="line">        import filter import_filter_v6; # Specify import filter</span>
<span class="line">        export filter export_filter_v6; # Specify export filter</span>
<span class="line">        export limit 10; # Limit export prefix count, adjust as needed, prevent session explosion from misconfigured filters</span>
<span class="line">    };</span>
<span class="line">    password &quot;114514&quot;; # If no password, delete this line</span>
<span class="line">    graceful restart; # Graceful restart, prevent service interruption from route withdrawal when restarting bird</span>
<span class="line">}</span>
<span class="line"></span></code></pre></div><p>You can modify based on my configuration file (recommend reading soha&#39;s tutorial first then writing by hand<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup>), write to <code>/etc/bird/bird.conf</code>, then apply configuration <code>birdc c</code></p><p>You can run <code>birdc show protocols all</code> to view current status of all protocols:</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">vultr    BGP        ---        up     <span class="token number">2025</span>-02-10    Established   </span>
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
<span class="line"></span></code></pre></div><p>Announced IP segments need some time for global propagation and convergence. You can do something else, or just sleep (if you&#39;re configuring at midnight).</p><p>After waiting 30 minutes to an hour, you can open <a href="https://bgp.tools/" target="_blank" rel="noopener noreferrer">BGP Tools</a> and enter your IP segment to check global propagation status.</p><figure><img src="https://s3.pysio.online/cdn-cgi/image/f=avif,onerror=redirect,slow-connection-quality=50/https://s3.pysio.online/pysioimages/20250217083854.png" alt="My Anycast Propagation Status" tabindex="0" loading="lazy"><figcaption>My Anycast Propagation Status</figcaption></figure><h2 id="_3-network-interface-configuration" tabindex="-1"><a class="header-anchor" href="#_3-network-interface-configuration"><span>3. Network Interface Configuration</span></a></h2><p>Now we&#39;ve successfully announced <code>2a14:67c1:a020::/48</code>.</p><p>Global traffic accessing <code>2a14:67c1:a020::/48</code> is now routed to our VPS, but our VPS is currently configured to do nothing and directly return unreachable. We just need to do some small configuration on the VPS to provide global services:</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># Create a dummy network interface</span></span>
<span class="line"><span class="token function">ip</span> <span class="token function">link</span> <span class="token function">add</span> dev dummy0 <span class="token builtin class-name">type</span> dummy</span>
<span class="line"><span class="token function">ip</span> <span class="token function">link</span> <span class="token builtin class-name">set</span> dummy0 up</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Choose a favorite IP address and configure it</span></span>
<span class="line"><span class="token function">ip</span> addr <span class="token function">add</span> dev dummy0 2a14:67c1:a020::1</span>
<span class="line"></span></code></pre></div><p>After completion, we can ping <code>2a14:67c1:a020::1</code> from our computer.</p><h2 id="_4-anycast" tabindex="-1"><a class="header-anchor" href="#_4-anycast"><span>4. Anycast?</span></a></h2><p>Now you can follow the above steps to configure BGP Session on multiple servers, then configure network interfaces on each server with the same IP address to achieve Anycast. (Yes, it&#39;s that simple)</p><p>This way, your access will directly find the nearest server to provide services, but for mainland China, it might very well go around the earth...</p><p>Of course, if you have money, you can find carriers (or Alibaba/Tencent) for BGP IP access.</p><h2 id="reference-articles" tabindex="-1"><a class="header-anchor" href="#reference-articles"><span>Reference Articles</span></a></h2><p><a href="https://blog.lyc8503.net/post/asn-2-bgp-session/" target="_blank" rel="noopener noreferrer">Running ISP at Home Part.2 - Announcing IP Segments to the World (BGP Session &amp; BIRD)</a></p><p><a href="https://blog.lyc8503.net/post/asn-4-anycast-network/" target="_blank" rel="noopener noreferrer">Running ISP at Home Part.4 - Building Your Own Anycast Network</a></p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p><a href="https://www.cloudflare.com/learning/cdn/glossary/anycast-network/" target="_blank" rel="noopener noreferrer">What is an Anycast network? | How Anycast works | Cloudflare</a> <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li><li id="footnote2" class="footnote-item"><p><a href="https://soha.moe/post/bird-bgp-kickstart.html" target="_blank" rel="noopener noreferrer">BIRD and BGP Beginner&#39;s Guide</a> <a href="#footnote-ref2" class="footnote-backref">↩︎</a></p></li></ol></section>`,47)]))}const l=e(o,[["render",i]]),c=JSON.parse(`{"path":"/en/posts/daily/AnyCast.html","title":"Setting up AnyCast + Blog","lang":"en-US","frontmatter":{"title":"Setting up AnyCast + Blog","date":"2025-02-15T00:00:00.000Z","icon":"fa-solid fa-router","category":"daily","tag":["BGP","Daily"],"description":"Since I had nothing to do, I decided to set up an Anycast and put my blog and DNS on it. This article documents the process of setting up Anycast + blog. What is Anycast? Anycas...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Setting up AnyCast + Blog\\",\\"image\\":[\\"https://s3.pysio.online/cdn-cgi/image/f=avif,onerror=redirect,slow-connection-quality=50/https://s3.pysio.online/pysioimages/20250216154622.png\\",\\"https://s3.pysio.online/cdn-cgi/image/f=avif,onerror=redirect,slow-connection-quality=50/https://s3.pysio.online/pysioimages/20250217081432.png\\",\\"https://s3.pysio.online/cdn-cgi/image/f=avif,onerror=redirect,slow-connection-quality=50/https://s3.pysio.online/pysioimages/20250217083854.png\\"],\\"datePublished\\":\\"2025-02-15T00:00:00.000Z\\",\\"dateModified\\":\\"2025-06-01T00:04:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Pysio\\",\\"url\\":\\"https://github.com/pysio2007/\\"}]}"],["meta",{"property":"og:url","content":"https://www.pysio.online/en/posts/daily/AnyCast.html"}],["meta",{"property":"og:site_name","content":"Pysio's Home"}],["meta",{"property":"og:title","content":"Setting up AnyCast + Blog"}],["meta",{"property":"og:description","content":"Since I had nothing to do, I decided to set up an Anycast and put my blog and DNS on it. This article documents the process of setting up Anycast + blog. What is Anycast? Anycas..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://s3.pysio.online/cdn-cgi/image/f=avif,onerror=redirect,slow-connection-quality=50/https://s3.pysio.online/pysioimages/20250216154622.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-06-01T00:04:33.000Z"}],["meta",{"property":"article:tag","content":"Daily"}],["meta",{"property":"article:tag","content":"BGP"}],["meta",{"property":"article:published_time","content":"2025-02-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-06-01T00:04:33.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://www.pysio.online/posts/daily/AnyCast.html"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.pysio.online/en/rss.xml","title":"Pysio's Home RSS Feed"}]]},"git":{"createdTime":1748736273000,"updatedTime":1748736273000,"contributors":[{"name":"pysio2007","username":"pysio2007","email":"71202163+pysio2007@users.noreply.github.com","commits":1,"url":"https://github.com/pysio2007"}]},"readingTime":{"minutes":4.22,"words":1265},"filePathRelative":"en/posts/daily/AnyCast.md","excerpt":"<p>Since I had nothing to do, I decided to set up an Anycast and put my blog and DNS on it. This article documents the process of setting up Anycast + blog.</p>\\n<h2>What is Anycast?</h2>\\n<blockquote>\\n<p>Anycast is a network addressing and routing method that can route incoming requests to various different locations or \\"nodes\\". In the context of CDN, Anycast usually routes incoming traffic to the nearest data center that can effectively handle requests. Selective routing enables Anycast networks to handle high traffic, network congestion, and DDoS attacks.<sup class=\\"footnote-ref\\"><a href=\\"#footnote1\\">[1]</a><a class=\\"footnote-anchor\\" id=\\"footnote-ref1\\"></a></sup></p>\\n</blockquote>","autoDesc":true}`);export{l as comp,c as data};
