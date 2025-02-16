"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[55382],{57916:(e,a,n)=>{n.r(a),n.d(a,{comp:()=>t,data:()=>l});var s=n(6254);const i={},t=(0,n(32991).A)(i,[["render",function(e,a){const n=(0,s.g2)("RouteLink");return(0,s.uX)(),(0,s.CE)("div",null,[a[6]||(a[6]=(0,s.Lk)("h1",{id:"ota-device-firmware-update",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#ota-device-firmware-update"},[(0,s.Lk)("span",null,"OTA device firmware update")])],-1)),(0,s.Lk)("p",null,[a[1]||(a[1]=(0,s.eW)("Also see the ")),(0,s.bF)(n,{to:"/guide/usage/ota_updates.html"},{default:(0,s.k6)((()=>a[0]||(a[0]=[(0,s.eW)("OTA firmware update usage guide")]))),_:1}),a[2]||(a[2]=(0,s.eW)("."))]),a[7]||(a[7]=(0,s.Fv)('<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># Optional: OTA update settings</span></span>\n<span class="line"><span class="token comment"># See https://www.zigbee2mqtt.io/guide/usage/ota_updates.html for more info</span></span>\n<span class="line"><span class="token key atrule">ota</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token comment"># Optional: Minimum time between OTA update checks</span></span>\n<span class="line">    <span class="token key atrule">update_check_interval</span><span class="token punctuation">:</span> <span class="token number">1440</span></span>\n<span class="line">    <span class="token comment"># Optional: Disable automatic update checks</span></span>\n<span class="line">    <span class="token key atrule">disable_automatic_update_check</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>\n<span class="line">    <span class="token comment"># Optional: Limits the rate of requests (in milliseconds) during OTA updates to reduce network congestion.</span></span>\n<span class="line">    <span class="token comment"># You can increase this value if your network appears unstable during OTA</span></span>\n<span class="line">    <span class="token key atrule">image_block_response_delay</span><span class="token punctuation">:</span> <span class="token number">250</span></span>\n<span class="line">    <span class="token comment"># Optional: The size of file chunks sent during an update (in bytes).</span></span>\n<span class="line">    <span class="token comment"># Note: This value may get ignored for manufacturers that require specific values.</span></span>\n<span class="line">    <span class="token key atrule">default_maximum_data_size</span><span class="token punctuation">:</span> <span class="token number">50</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ota-index-override-file" tabindex="-1"><a class="header-anchor" href="#ota-index-override-file"><span>OTA Index override file</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">ota</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">zigbee_ota_override_index_location</span><span class="token punctuation">:</span> my_index.json</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Value of this key is a file name in the configuration directory (next to <code>configuration.yaml</code>). The file name could be also a full path to the file, taking into account that host file system may not be available when running Zigbee2MQTT inside a docker container.</p><p>Alternatively, Zigbee2MQTT supports index files located on a remote HTTP(s) server. In this case <code>zigbee_ota_override_index_location</code> key should be an URL of the index file.</p>',5)),(0,s.Lk)("p",null,[a[4]||(a[4]=(0,s.eW)("Please refer to ")),(0,s.bF)(n,{to:"/guide/usage/ota_updates.html"},{default:(0,s.k6)((()=>a[3]||(a[3]=[(0,s.eW)("OTA firmware update usage guide")]))),_:1}),a[5]||(a[5]=(0,s.eW)(" for more details how Zigbee2MQTT fetches OTA images, how to add an image for a DIY device, or how to override official images with other ones."))])])}]]),l=JSON.parse('{"path":"/guide/configuration/ota-device-updates.html","title":"OTA device firmware update","lang":"en-US","frontmatter":{"pageClass":"content-page"},"headers":[{"level":2,"title":"OTA Index override file","slug":"ota-index-override-file","link":"#ota-index-override-file","children":[]}],"git":{"updatedTime":1739709218000},"filePathRelative":"guide/configuration/ota-device-updates.md"}')}}]);