"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[24385],{91534:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>a,data:()=>d});var l=o(6254);const i={},a=(0,o(32991).A)(i,[["render",function(e,t){const o=(0,l.g2)("RouteLink");return(0,l.uX)(),(0,l.CE)("div",null,[t[7]||(t[7]=(0,l.Lk)("h1",{id:"evanell-ez200",tabindex:"-1"},[(0,l.Lk)("a",{class:"header-anchor",href:"#evanell-ez200"},[(0,l.Lk)("span",null,"Evanell EZ200")])],-1)),(0,l.Lk)("table",null,[t[6]||(t[6]=(0,l.Lk)("thead",null,[(0,l.Lk)("tr",null,[(0,l.Lk)("th"),(0,l.Lk)("th")])],-1)),(0,l.Lk)("tbody",null,[t[2]||(t[2]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",null,"Model"),(0,l.Lk)("td",null,"EZ200")],-1)),(0,l.Lk)("tr",null,[t[1]||(t[1]=(0,l.Lk)("td",null,"Vendor",-1)),(0,l.Lk)("td",null,[(0,l.bF)(o,{to:"/supported-devices/#v=Evanell"},{default:(0,l.k6)((()=>t[0]||(t[0]=[(0,l.eW)("Evanell")]))),_:1})])]),t[3]||(t[3]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",null,"Description"),(0,l.Lk)("td",null,"Thermostatic radiator valve")],-1)),t[4]||(t[4]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",null,"Exposes"),(0,l.Lk)("td",null,"child_lock, battery, climate (current_heating_setpoint, local_temperature, system_mode)")],-1)),t[5]||(t[5]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",null,"Picture"),(0,l.Lk)("td",null,[(0,l.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/EZ200.png",alt:"Evanell EZ200"})])],-1))])]),t[8]||(t[8]=(0,l.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Remove batteries. Put battery back in, holding the middle button for 5s. Three horizontal lines flash. Push the &quot;up&quot; button. Device should now enter pairing mode (Wifi-symbol flashes).</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="child-lock-binary" tabindex="-1"><a class="header-anchor" href="#child-lock-binary"><span>Child lock (binary)</span></a></h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>child_lock</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: NEW_VALUE}</code>. If value equals <code>LOCK</code> child lock is ON, if <code>UNLOCK</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>current_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>30</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>, <code>auto</code>. Reading (<code>/get</code>) this attribute is not possible.</li></ul>',11))])}]]),d=JSON.parse('{"path":"/devices/EZ200.html","title":"Evanell EZ200 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Evanell EZ200 control via MQTT","description":"Integrate your Evanell EZ200 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-01-31T17:42:44.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Child lock (binary)","slug":"child-lock-binary","link":"#child-lock-binary","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]}]}],"git":{"updatedTime":1739709218000},"filePathRelative":"devices/EZ200.md"}')}}]);