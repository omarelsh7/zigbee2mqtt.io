"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[64196],{75738:(e,a,n)=>{n.r(a),n.d(a,{comp:()=>l,data:()=>d});var i=n(6254);const s=n.p+"assets/img/wireshark_tclink_key.a6e17a18.png",r=n.p+"assets/img/wireshark_network_key.52632d94.png",t=n.p+"assets/img/wireshark_packet.c4d91df4.png",o={},l=(0,n(32991).A)(o,[["render",function(e,a){const n=(0,i.g2)("NetworkKeyConverter"),o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[a[11]||(a[11]=(0,i.Fv)('<h1 id="sniff-zigbee-traffic" tabindex="-1"><a class="header-anchor" href="#sniff-zigbee-traffic"><span>Sniff Zigbee traffic</span></a></h1><p>Sniffing Zigbee traffic can be handy sometimes. E.g. when you want to analyze the commands used by a device.</p><h2 id="configuring-wireshark" tabindex="-1"><a class="header-anchor" href="#configuring-wireshark"><span>Configuring Wireshark</span></a></h2><h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>Linux</span></a></h3><p>If using Linux, install from the package manager.</p><p>For APT-based distributions:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">sudo apt install -y wireshark</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows"><span>Windows</span></a></h3><p>Download and install <a href="https://www.wireshark.org/download.html" target="_blank" rel="noopener noreferrer">Wireshark</a> (documentation available on the same page).</p><p>Download and install <a href="https://nmap.org/npcap/" target="_blank" rel="noopener noreferrer">Npcap</a> and make sure you select to install the &quot;Npcap Loopback Adapter&quot; when installing. It shouldn&#39;t matter whether or not you use Winpcap compatibility mode.</p><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h3><p>Use Adapter for loopback traffic capture. Then set the Zigbee protocol filter: <code>udp.port==17754</code> (default ZEP port) to only see Zigbee traffic.</p><p>Wireshark will start and log the Zigbee messages once the sniffer is started. As these messages are encrypted we need to add 2 encryption keys. The first one is the Trust Center link key, which is the same for (almost) every Zigbee network. The second one is the network encryption key (Transport Key).</p><div class="hint-container tip"><p class="hint-container-title">TIP</p><p>If using Wireshark on a different machine (different IP address), depending on your setup, you may get a lot of <code>ICMP: Destination unreachable (Port unreachable)</code> during the capture. You can use the filter <code>udp.port==17754 &amp;&amp; !icmp</code> to get rid of them.</p></div><div class="hint-container tip"><p class="hint-container-title">TIP</p><p>You can find details on various customizations for Wireshark in the ZSmart Systems sniffer <a href="https://www.opensmarthouse.org/files/download/ZigBeeWiresharkSniffer.pdf" target="_blank" rel="noopener noreferrer">PDF - page 7</a>. <strong>Coloring rules are processed in order until a match is found. You may need to re-order <code>UDP</code> to the bottom to get the Zigbee rules to apply properly.</strong></p></div><h3 id="adding-the-trust-center-link-key" tabindex="-1"><a class="header-anchor" href="#adding-the-trust-center-link-key"><span>Adding the Trust Center link key</span></a></h3><p>Add the Trust Center link key by going to to <code>Edit &gt; Preferences &gt; Protocols &gt; ZigBee</code>.</p><p>Set <code>Security Level</code> to <code>AES-128 Encryption, 32-bit Integrity Protection</code>.</p><p>Next click on <code>Pre-configured keys &gt; Edit</code>. Click on <em>+</em> and add <code>5A:69:67:42:65:65:41:6C:6C:69:61:6E:63:65:30:39</code> with Byte Order <code>Normal</code>.</p><p><em>NOTE: The Hue bridge uses a <a href="https://peeveeone.com/2016/11/breakout-breakthrough/" target="_blank" rel="noopener noreferrer">different Trust Center link key</a></em></p><p><img src="'+s+'" alt="Wireshark Trust Center link key"></p><h3 id="adding-the-network-key" tabindex="-1"><a class="header-anchor" href="#adding-the-network-key"><span>Adding the Network key</span></a></h3><p>Next we need to figure out the network encryption key (Transport Key).</p><p>By default, if you haven&#39;t changed <code>network_key</code> in your <code>configuration.yaml</code> this will be <code>01:03:05:07:09:0B:0D:0F:00:02:04:06:08:0A:0C:0D</code>.</p><p>If you changed your <code>network_key</code> (used <code>GENERATE</code>), you need to convert it to the format accepted by Wireshark. There are three ways to do this:</p>',25)),(0,i.Lk)("ol",null,[a[1]||(a[1]=(0,i.Fv)("<li><p>Grab the value under <code>network_key</code> &gt; <code>key</code> from <code>coordinator_backup.json</code> and separate every 2-character with <code>:</code>. E.g. <code>01030507090b0d0f00020406080a0c0d</code> -&gt; <code>01:03:05:07:09:0b:0d:0f:00:02:04:06:08:0a:0c:0d</code>.</p></li>",1)),(0,i.Lk)("li",null,[a[0]||(a[0]=(0,i.Fv)("<p>Grab the value under <code>network_key</code> from <code>configuration.yaml</code> and convert each number into its 2-digit hexadecimal value, and combine them all with <code>:</code> between. E.g. <code>[1, 3, 5, 7, 9, 11, 13, 15, 0, 2, 4, 6, 8, 10, 12, 13]</code> -&gt; <code>01:03:05:07:09:0B:0D:0F:00:02:04:06:08:0A:0C:0D</code>.</p><p>You can paste your <code>network_key</code> below to convert it. Note: The conversion is done locally; your key never leaves your browser.</p>",2)),(0,i.bF)(n)]),a[2]||(a[2]=(0,i.Lk)("li",null,[(0,i.Lk)("p",null,[(0,i.eW)("If you don't want to translate the numbers, the network encryption key is also exposed when a device joins the network. Pair a new device to the network (or re-pair an existing one) and grab the message where the Info is "),(0,i.Lk)("em",null,"Device Announcement...."),(0,i.eW)(". Open the message and expand "),(0,i.Lk)("em",null,"ZigBee Network Layer Data"),(0,i.eW)(" -> "),(0,i.Lk)("em",null,"ZigBee Security Header"),(0,i.eW)(".")]),(0,i.Lk)("p",null,[(0,i.Lk)("img",{src:r,alt:"Wireshark network key"})])],-1))]),a[12]||(a[12]=(0,i.Fv)('<p>Copy the key value, as shown above and go to <code>Edit &gt; Preferences &gt; Protocols &gt; ZigBee &gt; Pre-configured keys &gt; Edit</code> and add the key with Byte Order <code>Normal</code>.</p><p>Now Wireshark is able to decrypt the messages. When e.g. turning on a light you will see a message similar to:</p><p><img src="'+t+'" alt="Wireshark packet"></p><h2 id="with-cc2531" tabindex="-1"><a class="header-anchor" href="#with-cc2531"><span>With CC2531</span></a></h2><h3 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites"><span>Prerequisites</span></a></h3><ul><li>Computer <ul><li>Ubuntu / Debian machine (tested with Ubuntu 18.04 / 18.10 and Debian 10)</li><li>Windows machine (tested with Windows 10)</li></ul></li><li>CC2531 adapter</li></ul><h3 id="_1-flashing-the-cc2531-adapter" tabindex="-1"><a class="header-anchor" href="#_1-flashing-the-cc2531-adapter"><span>1. Flashing the CC2531 adapter</span></a></h3>',7)),(0,i.Lk)("p",null,[a[4]||(a[4]=(0,i.eW)("The CC2531 needs to be flashed with a sniffer firmware. Flash the firmware using the instructions from ")),(0,i.bF)(o,{to:"/guide/adapters/flashing/flashing_the_cc2531.html"},{default:(0,i.k6)((()=>a[3]||(a[3]=[(0,i.eW)("Flashing the CC2531")]))),_:1}),a[5]||(a[5]=(0,i.eW)("."))]),a[13]||(a[13]=(0,i.Fv)('<h4 id="linux-1" tabindex="-1"><a class="header-anchor" href="#linux-1"><span>Linux</span></a></h4><p>The firmware is included with <a href="http://www.ti.com/tool/PACKET-SNIFFER" target="_blank" rel="noopener noreferrer">PACKET-SNIFFER</a> (not <strong>PACKET-SNIFFER-2!</strong>). Download PACKET-SNIFFER. As the sniffer firmware is only available in the windows installer we need to extract the hex file. This would require 7zip (p7zip-full or p7zip-plugins package depending on distributions)</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">unzip</span> swrc045z.zip <span class="token parameter variable">-d</span> PACKET-SNIFFER</span>\n<span class="line">7z e PACKET-SNIFFER/Setup_SmartRF_Packet_Sniffer_2.18.0.exe bin/general/firmware/sniffer_fw_cc2531.hex</span>\n<span class="line"><span class="token function">sudo</span> <span class="token operator">&lt;</span>path-to<span class="token operator">&gt;</span>/cc-tool <span class="token parameter variable">-e</span> <span class="token parameter variable">-w</span> <span class="token operator">&lt;</span>path-to<span class="token operator">&gt;</span>/sniffer_fw_cc2531.hex</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="windows-and-possibly-ubuntu" tabindex="-1"><a class="header-anchor" href="#windows-and-possibly-ubuntu"><span>Windows (and possibly Ubuntu)</span></a></h4><p>For Windows this firmware is included with <a href="https://dsr-iot.com/downloads" target="_blank" rel="noopener noreferrer">ZBOSS</a>. Register an account and download <em>Zigbee sniffer package rev. 2.0</em>. Included in the ZIP file is the firmware in subfolder <code>zb_sniffer_bin\\zb_sniffer_target\\CC2531 USB dongle\\zboss_sniffer.hex</code>. Please note that ZBOSS is also available for Ubuntu 64-bit.</p><h3 id="_2-installing-required-tools" tabindex="-1"><a class="header-anchor" href="#_2-installing-required-tools"><span>2. Installing required tools</span></a></h3><h4 id="linux-2" tabindex="-1"><a class="header-anchor" href="#linux-2"><span>Linux</span></a></h4><p>For APT-based distributions:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">cd</span> /opt</span>\n<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> libusb-1.0-0-dev wireshark</span>\n<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-L</span> https://github.com/homewsn/whsniff/archive/v1.3.tar.gz <span class="token operator">|</span> <span class="token function">tar</span> zx</span>\n<span class="line"><span class="token builtin class-name">cd</span> whsniff-1.3</span>\n<span class="line"><span class="token function">make</span></span>\n<span class="line"><span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="windows-1" tabindex="-1"><a class="header-anchor" href="#windows-1"><span>Windows</span></a></h4><p>Ensure you have Wireshark installed (see <a href="#configuring-wireshark">Configuring Wireshark</a> above) and ZBOSS downloaded and extracted.</p><h3 id="_3-sniffing-traffic" tabindex="-1"><a class="header-anchor" href="#_3-sniffing-traffic"><span>3. Sniffing traffic</span></a></h3><h4 id="linux-3" tabindex="-1"><a class="header-anchor" href="#linux-3"><span>Linux</span></a></h4><p>Start wireshark</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> whsniff <span class="token parameter variable">-c</span> ZIGBEE_CHANNEL_NUMBER <span class="token operator">|</span> wireshark <span class="token parameter variable">-k</span> <span class="token parameter variable">-i</span> -</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">TIP</p><p>Depending on your distribution and installed packages, this may result in a broken pipe after some time. You will notice that Wireshark has stopped capturing, and attempting to resume by clicking the shark fin icon will present you with an error <code>end of file on pipe magic during open</code>, if this happens you may instead need to start with:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">wireshark <span class="token parameter variable">-k</span> <span class="token parameter variable">-i</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span> path/to/whsniff <span class="token parameter variable">-c</span> channel_number <span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Alternative uses are detailed on the <a href="https://github.com/homewsn/whsniff#how-to-use-locally" target="_blank" rel="noopener noreferrer">whsniff project page</a>.</p></div><p>If you just want to save the sniffed data for later analysis you can run this command (compression with gzip is optional):</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> whsniff <span class="token parameter variable">-c</span> ZIGBEE_CHANNEL_NUMBER <span class="token operator">|</span> <span class="token punctuation">(</span> <span class="token function">gzip</span> <span class="token parameter variable">-c</span> <span class="token operator">&gt;</span> <span class="token string">&quot;zigbee_sniff_<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +<span class="token string">&quot;%FT%H%M%S&quot;</span><span class="token variable">)</span></span>.pcap&quot;</span>.gz <span class="token operator">&amp;</span> <span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="windows-2" tabindex="-1"><a class="header-anchor" href="#windows-2"><span>Windows</span></a></h4><p>Run the ZBOSS executable in <code>gui\\zboss_sniffer.exe</code>, enter the path to your Wireshark executable and click on the <code>Start</code> button. For ZBOSS make sure the correct Zigbee channel is set, by default it will sniff on channel <code>0x0C (12)</code> but the default Zigbee2MQTT channel is 11 (<code>0x0B (11)</code>).</p><h4 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting"><span>Troubleshooting</span></a></h4>',21)),(0,i.Lk)("ul",null,[a[10]||(a[10]=(0,i.Lk)("li",null,[(0,i.eW)("If you get "),(0,i.Lk)("code",null,"couldn't run /usr/bin/dumpcap in child process: permission denied"),(0,i.eW)(" when running whsniff, check if /usr/bin/dumpcap is executable for everyone. Or "),(0,i.Lk)("code",null,"chmod 755 /usr/bin/dumpcap"),(0,i.eW)(".")],-1)),(0,i.Lk)("li",null,[a[7]||(a[7]=(0,i.eW)("You may need to remove ")),a[8]||(a[8]=(0,i.Lk)("code",null,"modemmanager",-1)),a[9]||(a[9]=(0,i.eW)(" as this has been known to cause issues. ")),(0,i.bF)(o,{to:"/guide/faq/#modemmanager-is-installed"},{default:(0,i.k6)((()=>a[6]||(a[6]=[(0,i.eW)("Howto")]))),_:1})])]),a[14]||(a[14]=(0,i.Fv)('<h2 id="with-emberznet-and-husbzb-1-adapters" tabindex="-1"><a class="header-anchor" href="#with-emberznet-and-husbzb-1-adapters"><span>With EmberZNet and HUSBZB-1 adapters</span></a></h2><h3 id="prerequisites-for-usb-adapters" tabindex="-1"><a class="header-anchor" href="#prerequisites-for-usb-adapters"><span>Prerequisites for USB adapters</span></a></h3><h4 id="linux-4" tabindex="-1"><a class="header-anchor" href="#linux-4"><span>Linux</span></a></h4><p>The adapter should work out of the box and require no extra step.</p><h4 id="windows-3" tabindex="-1"><a class="header-anchor" href="#windows-3"><span>Windows</span></a></h4><p>Install drivers (whichever works for your adapter):</p><ul><li><a href="https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads" target="_blank" rel="noopener noreferrer">Silicon Labs CP210x Universal Windows Driver</a><ul><li>Extract drivers to a folder</li><li>Inside that folder, right-click on <code>silabser.inf</code> then <code>Show more options</code> and choose <code>Install</code></li></ul></li><li><a href="https://www.wch-ic.com/downloads/CH343SER_EXE.html" target="_blank" rel="noopener noreferrer">WCH CH343SER</a><ul><li>Execute and follow setup steps to install.</li></ul></li></ul><h3 id="using-ember-zli" tabindex="-1"><a class="header-anchor" href="#using-ember-zli"><span>Using Ember ZLI</span></a></h3><h4 id="prerequisites-1" tabindex="-1"><a class="header-anchor" href="#prerequisites-1"><span>Prerequisites</span></a></h4><ul><li>Computer <ul><li>Linux machine (tested with Debian 12 64-bit)</li><li>Windows machine (tested with Windows 11)</li><li>MacOS machine</li></ul></li><li>EmberZNet or HUSBZB-1 adapter</li><li>Wireshark (optional, can write directly to a <a href="https://github.com/Nerivec/ember-zli/wiki/Sniff#sending-to-pcap-file" target="_blank" rel="noopener noreferrer">PCAP file</a> instead)</li><li>NodeJS / npm (if using npm-based installation method)</li></ul><h4 id="_1-installing-required-tools" tabindex="-1"><a class="header-anchor" href="#_1-installing-required-tools"><span>1. Installing required tools</span></a></h4><p><a href="https://github.com/Nerivec/ember-zli/wiki" target="_blank" rel="noopener noreferrer">https://github.com/Nerivec/ember-zli/wiki</a></p><h4 id="_2-sniffing-traffic" tabindex="-1"><a class="header-anchor" href="#_2-sniffing-traffic"><span>2. Sniffing traffic</span></a></h4><p><a href="https://github.com/Nerivec/ember-zli/wiki/Sniff" target="_blank" rel="noopener noreferrer">https://github.com/Nerivec/ember-zli/wiki/Sniff</a></p><h3 id="using-zsmart-systems-sniffer" tabindex="-1"><a class="header-anchor" href="#using-zsmart-systems-sniffer"><span>Using ZSmart Systems sniffer</span></a></h3><h4 id="prerequisites-2" tabindex="-1"><a class="header-anchor" href="#prerequisites-2"><span>Prerequisites</span></a></h4><ul><li>Computer <ul><li>Linux machine (tested with Ubuntu 18.10)</li><li>Windows machine (tested with Windows 10)</li></ul></li><li>EmberZNet or HUSBZB-1 adapter</li><li>Wireshark</li><li>Java</li></ul><h4 id="_1-installing-required-tools-1" tabindex="-1"><a class="header-anchor" href="#_1-installing-required-tools-1"><span>1. Installing required tools</span></a></h4><p>Both Windows and Linux use the same program for sniffing. You can fetch a precompiled jar file from <a href="https://github.com/zsmartsystems/com.zsmartsystems.zigbee.sniffer/releases" target="_blank" rel="noopener noreferrer">ZSmart Systems sniffer releases</a>.</p><p>You can also find a PDF documentation from ZSmart Systems <a href="https://www.opensmarthouse.org/files/download/ZigBeeWiresharkSniffer.pdf" target="_blank" rel="noopener noreferrer">here</a>.</p><div class="hint-container tip"><p class="hint-container-title">TIP</p><p>Linux: Some EmberZNet adapters use the exact same USB identifiers as a brltty udev-registered device, so if your EmberZNet USB dongle is not recognized, just disable the rule of brltty for idVendor=1a86, idProduct=7523 (same as the CH340 serial converter used in the EmberZNet adapter). Edit /<code>usr/lib/udev/rules.d/85-brltty.rules</code> and comment <code># ENV{PRODUCT}==&quot;1a86/7523/*&quot;, ENV{BRLTTY_BRAILLE_DRIVER}=&quot;bm&quot;, GOTO=&quot;brltty_usb_run&quot;</code>. Unplug and replug the EmberZNet adapter.</p></div><h4 id="_2-sniffing-traffic-1" tabindex="-1"><a class="header-anchor" href="#_2-sniffing-traffic-1"><span>2. Sniffing traffic</span></a></h4><p>In a terminal or command line, run <code>java -jar ZigbeeSniffer.jar -baud 115200 -flow {OPTION} -port {PORT} -c {CHANNEL}</code>.</p><p>Depending on your adapter, <code>OPTION</code> should be replaced by <code>none</code> (Sonoff Dongle-E, SLZB-06m...) or <code>hardware</code> (HUSBZB-1, SkyConnect...).</p><h5 id="windows-4" tabindex="-1"><a class="header-anchor" href="#windows-4"><span>Windows</span></a></h5><p>Open the Device Manager (Win+X, M) and find which COM port your adapter is using in <code>Ports (COM &amp; LPT)</code>. It should be something like COM3, COM6. <code>PORT</code> should be replaced by that value.</p><h5 id="linux-5" tabindex="-1"><a class="header-anchor" href="#linux-5"><span>Linux</span></a></h5><p><code>PORT</code> will be something like <code>/dev/ttyUSB0</code> or wherever you plugged in your HUSBZB-1 device.</p><h2 id="with-nrf52-adapter" tabindex="-1"><a class="header-anchor" href="#with-nrf52-adapter"><span>With nRF52 adapter</span></a></h2><h3 id="prerequisites-3" tabindex="-1"><a class="header-anchor" href="#prerequisites-3"><span>Prerequisites</span></a></h3><ul><li>Ubuntu Linux / macOS 10.14+ / Windows 10+</li><li><a href="https://www.digikey.com/en/products/detail/nordic-semiconductor-asa/NRF52840-DONGLE/9491124" target="_blank" rel="noopener noreferrer">nRF52 dongle</a> or <a href="https://www.digikey.com/en/products/detail/nordic-semiconductor-asa/nrf52840-dk/8593726" target="_blank" rel="noopener noreferrer">development kit</a></li><li>Wireshark v3.0+</li></ul><h3 id="_1-programming-dongle-installing-required-tools" tabindex="-1"><a class="header-anchor" href="#_1-programming-dongle-installing-required-tools"><span>1. Programming dongle, installing required tools</span></a></h3><p><a href="https://docs.nordicsemi.com/bundle/ug_sniffer_802154/page/UG/sniffer_802154/installing_sniffer_802154.html" target="_blank" rel="noopener noreferrer">Installing nRF Sniffer for 802.15.4</a></p><h3 id="_2-sniffing-traffic-2" tabindex="-1"><a class="header-anchor" href="#_2-sniffing-traffic-2"><span>2. Sniffing traffic</span></a></h3><p><a href="https://docs.nordicsemi.com/bundle/ug_sniffer_802154/page/UG/sniffer_802154/capturing_data_sniffer_802154.html" target="_blank" rel="noopener noreferrer">Capturing data with the nRF Sniffer</a></p>',35))])}]]),d=JSON.parse('{"path":"/advanced/zigbee/04_sniff_zigbee_traffic.html","title":"Sniff Zigbee traffic","lang":"en-US","frontmatter":{"pageClass":"content-page"},"headers":[{"level":2,"title":"Configuring Wireshark","slug":"configuring-wireshark","link":"#configuring-wireshark","children":[{"level":3,"title":"Linux","slug":"linux","link":"#linux","children":[]},{"level":3,"title":"Windows","slug":"windows","link":"#windows","children":[]},{"level":3,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":3,"title":"Adding the Trust Center link key","slug":"adding-the-trust-center-link-key","link":"#adding-the-trust-center-link-key","children":[]},{"level":3,"title":"Adding the Network key","slug":"adding-the-network-key","link":"#adding-the-network-key","children":[]}]},{"level":2,"title":"With CC2531","slug":"with-cc2531","link":"#with-cc2531","children":[{"level":3,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":3,"title":"1. Flashing the CC2531 adapter","slug":"_1-flashing-the-cc2531-adapter","link":"#_1-flashing-the-cc2531-adapter","children":[]},{"level":3,"title":"2. Installing required tools","slug":"_2-installing-required-tools","link":"#_2-installing-required-tools","children":[]},{"level":3,"title":"3. Sniffing traffic","slug":"_3-sniffing-traffic","link":"#_3-sniffing-traffic","children":[]}]},{"level":2,"title":"With EmberZNet and HUSBZB-1 adapters","slug":"with-emberznet-and-husbzb-1-adapters","link":"#with-emberznet-and-husbzb-1-adapters","children":[{"level":3,"title":"Prerequisites for USB adapters","slug":"prerequisites-for-usb-adapters","link":"#prerequisites-for-usb-adapters","children":[]},{"level":3,"title":"Using Ember ZLI","slug":"using-ember-zli","link":"#using-ember-zli","children":[]},{"level":3,"title":"Using ZSmart Systems sniffer","slug":"using-zsmart-systems-sniffer","link":"#using-zsmart-systems-sniffer","children":[]}]},{"level":2,"title":"With nRF52 adapter","slug":"with-nrf52-adapter","link":"#with-nrf52-adapter","children":[{"level":3,"title":"Prerequisites","slug":"prerequisites-3","link":"#prerequisites-3","children":[]},{"level":3,"title":"1. Programming dongle, installing required tools","slug":"_1-programming-dongle-installing-required-tools","link":"#_1-programming-dongle-installing-required-tools","children":[]},{"level":3,"title":"2. Sniffing traffic","slug":"_2-sniffing-traffic-2","link":"#_2-sniffing-traffic-2","children":[]}]}],"git":{"updatedTime":1739709218000},"filePathRelative":"advanced/zigbee/04_sniff_zigbee_traffic.md"}')}}]);