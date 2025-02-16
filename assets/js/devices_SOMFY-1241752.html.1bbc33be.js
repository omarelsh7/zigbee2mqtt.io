"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[55137],{82311:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>s,data:()=>n});var a=o(6254);const i={},s=(0,o(32991).A)(i,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[8]||(t[8]=(0,a.Lk)("h1",{id:"somfy-somfy-1241752",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#somfy-somfy-1241752"},[(0,a.Lk)("span",null,"SOMFY SOMFY-1241752")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"SOMFY-1241752")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=SOMFY"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("SOMFY")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Blinds")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"cover (state, position), battery")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SOMFY-1241752.png",alt:"SOMFY SOMFY-1241752"})])],-1))])]),t[9]||(t[9]=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Use a paperclip to press and hold the programming button until the motor jogs twice.<br> For more information, see <a href="https://asset.somfy.com/Document/c2c8f7f2-d075-4af7-9b57-544cc97da65c_5157264_Sonesse%20ULTRA%2030%20WF%20Zigbee%20Li-ion.pdf" target="_blank" rel="noopener noreferrer">documentation</a> from SOMFY.</p><h3 id="setting-limits" tabindex="-1"><a class="header-anchor" href="#setting-limits"><span>Setting limits</span></a></h3><p>Currently not possible over Zigbee. Enable the Bluetooth radio by using a paper clip to press the set button five times. Use the Set &amp; Go <a href="https://apps.apple.com/us/app/set-go-connect/id1450506599" target="_blank" rel="noopener noreferrer">iOS</a> <a href="https://play.google.com/store/apps/details?id=com.somfy.setandgo&amp;hl=en_US&amp;gl=US" target="_blank" rel="noopener noreferrer">Android</a> application to set up and down stop limits.</p><h3 id="factory-reset" tabindex="-1"><a class="header-anchor" href="#factory-reset"><span>Factory Reset</span></a></h3><p>Use paperclip to press and hold the programming button until the motor jogs three times.</p><h3 id="battery-level" tabindex="-1"><a class="header-anchor" href="#battery-level"><span>Battery level</span></a></h3><p>Battery percentage level is reported, it may take some time for this to come through.</p><h3 id="ota-update" tabindex="-1"><a class="header-anchor" href="#ota-update"><span>OTA Update</span></a></h3><p>The devices are claiming Zigbee support for over-the-air updates but I don&#39;t have sufficient information on this to give it a go. If you have any documentation, please get in touch @nonodename.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',12)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,a.Fv)('<ul><li><p><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>cover_position_tilt_disable_report</code>: Do not publish set cover target position as a normal &#39;position&#39; value (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p>',6))])}]]),n=JSON.parse('{"path":"/devices/SOMFY-1241752.html","title":"SOMFY SOMFY-1241752 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"SOMFY SOMFY-1241752 control via MQTT","description":"Integrate your SOMFY SOMFY-1241752 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-08-01T15:09:09.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Setting limits","slug":"setting-limits","link":"#setting-limits","children":[]},{"level":3,"title":"Factory Reset","slug":"factory-reset","link":"#factory-reset","children":[]},{"level":3,"title":"Battery level","slug":"battery-level","link":"#battery-level","children":[]},{"level":3,"title":"OTA Update","slug":"ota-update","link":"#ota-update","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]}]}],"git":{"updatedTime":1739709218000},"filePathRelative":"devices/SOMFY-1241752.md"}')}}]);