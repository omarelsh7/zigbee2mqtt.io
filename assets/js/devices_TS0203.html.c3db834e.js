"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[7206],{21632:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>l,data:()=>o});var n=a(6254);const i={},l=(0,a(32991).A)(i,[["render",function(e,t){const a=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[t[8]||(t[8]=(0,n.Lk)("h1",{id:"tuya-ts0203",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#tuya-ts0203"},[(0,n.Lk)("span",null,"Tuya TS0203")])],-1)),(0,n.Lk)("table",null,[t[7]||(t[7]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[t[2]||(t[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"TS0203")],-1)),(0,n.Lk)("tr",null,[t[1]||(t[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(a,{to:"/supported-devices/#v=Tuya"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("Tuya")]))),_:1})])]),t[3]||(t[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"Door sensor")],-1)),t[4]||(t[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"contact, battery, voltage, tamper, battery_low")],-1)),t[5]||(t[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0203.png",alt:"Tuya TS0203"})])],-1)),t[6]||(t[6]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"White-label"),(0,n.Lk)("td",null,"CR Smart Home TS0203, Tuya iH-F001, Tesla Smart TSL-SEN-DOOR, Cleverio SS100")],-1))])]),t[9]||(t[9]=(0,n.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Press and hold the reset switch on the device, the pin hole on the side of the device, using the provided reset pin for +- 5 seconds (until the red light starts blinking). After this the device will automatically join.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="contact-binary" tabindex="-1"><a class="header-anchor" href="#contact-binary"><span>Contact (binary)</span></a></h3><p>Indicates if the contact is closed (= true) or open (= false). Value can be found in the published state on the <code>contact</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>false</code> contact is ON, if <code>true</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary"><span>Tamper (binary)</span></a></h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary"><span>Battery low (binary)</span></a></h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p>',14))])}]]),o=JSON.parse('{"path":"/devices/TS0203.html","title":"Tuya TS0203 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya TS0203 control via MQTT","description":"Integrate your Tuya TS0203 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-12-15T17:27:48.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Contact (binary)","slug":"contact-binary","link":"#contact-binary","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Tamper (binary)","slug":"tamper-binary","link":"#tamper-binary","children":[]},{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]}]}],"git":{"updatedTime":1739709218000},"filePathRelative":"devices/TS0203.md"}')}}]);