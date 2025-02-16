"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[86653],{96604:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>i,data:()=>s});var a=o(6254);const d={},i=(0,o(32991).A)(d,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[7]||(t[7]=(0,a.Lk)("h1",{id:"tuya-ts0601-cover-6",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#tuya-ts0601-cover-6"},[(0,a.Lk)("span",null,"Tuya TS0601_cover_6")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"TS0601_cover_6")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=Tuya"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Tuya")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Cover motor")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"work_state, cover (state, position), battery, opening_mode, motor_direction, set_upper_limit, factory_reset")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0601_cover_6.png",alt:"Tuya TS0601_cover_6"})])],-1))])]),t[8]||(t[8]=(0,a.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="work-state-text" tabindex="-1"><a class="header-anchor" href="#work-state-text"><span>Work state (text)</span></a></h3><p>Value can be found in the published state on the <code>work_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="opening-mode-enum" tabindex="-1"><a class="header-anchor" href="#opening-mode-enum"><span>Opening mode (enum)</span></a></h3><p>Opening mode. Value can be found in the published state on the <code>opening_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;opening_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>tilt</code>, <code>lift</code>.</p><h3 id="motor-direction-enum" tabindex="-1"><a class="header-anchor" href="#motor-direction-enum"><span>Motor direction (enum)</span></a></h3><p>Motor side. Value can be found in the published state on the <code>motor_direction</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_direction&quot;: NEW_VALUE}</code>. The possible values are: <code>left</code>, <code>right</code>.</p><h3 id="set-upper-limit-enum" tabindex="-1"><a class="header-anchor" href="#set-upper-limit-enum"><span>Set upper limit (enum)</span></a></h3><p>Learning. Value can be found in the published state on the <code>set_upper_limit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;set_upper_limit&quot;: NEW_VALUE}</code>. The possible values are: <code>start</code>, <code>stop</code>.</p><h3 id="factory-reset-enum" tabindex="-1"><a class="header-anchor" href="#factory-reset-enum"><span>Factory reset (enum)</span></a></h3><p>Remove limits. Value can be found in the published state on the <code>factory_reset</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;factory_reset&quot;: NEW_VALUE}</code>. The possible values are: <code>SET</code>.</p>',15))])}]]),s=JSON.parse('{"path":"/devices/TS0601_cover_6.html","title":"Tuya TS0601_cover_6 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya TS0601_cover_6 control via MQTT","description":"Integrate your Tuya TS0601_cover_6 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-06-01T08:16:21.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Work state (text)","slug":"work-state-text","link":"#work-state-text","children":[]},{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Opening mode (enum)","slug":"opening-mode-enum","link":"#opening-mode-enum","children":[]},{"level":3,"title":"Motor direction (enum)","slug":"motor-direction-enum","link":"#motor-direction-enum","children":[]},{"level":3,"title":"Set upper limit (enum)","slug":"set-upper-limit-enum","link":"#set-upper-limit-enum","children":[]},{"level":3,"title":"Factory reset (enum)","slug":"factory-reset-enum","link":"#factory-reset-enum","children":[]}]}],"git":{"updatedTime":1739709218000},"filePathRelative":"devices/TS0601_cover_6.md"}')}}]);