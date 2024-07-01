class E{constructor(e){this.properties=e??[]}get(e){const t=this.properties.filter(r=>r.name===e).map(r=>r.value);if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(t.length!==0)return t[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,t){const r=this.get(e);if(r!==void 0){if(t!=="json"&&typeof r!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,t){const r=this.get(e);if(r===void 0)throw new Error('Property "'+e+'" is missing');if(t!=="json"&&typeof r!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return r}getType(e){const t=this.properties.filter(r=>r.name===e).map(r=>r.type);if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(t.length!==0)return t[0]}}const j="https://unpkg.com/@workadventure/scripting-api-extra@1.4.6/dist";class ee{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new E(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function D(n){const e=n?"#"+n.join():"";WA.nav.openCoWebSite(j+"/configuration.html"+e)}async function te(n,e){const t=await WA.room.getTiledMap(),r=new Map;return H(t.layers,r,n,e),r}function H(n,e,t,r){for(const o of n)if(o.type==="objectgroup"){for(const s of o.objects)if(s.type==="variable"||s.class==="variable"){if(t&&o.name!==t||r&&!r.includes(s.name))continue;e.set(s.name,new ee(s))}}else o.type==="group"&&H(o.layers,e,t,r)}let I;async function T(){return I===void 0&&(I=ne()),I}async function ne(){return re(await WA.room.getTiledMap())}function re(n){const e=new Map;return z(n.layers,"",e),e}function z(n,e,t){for(const r of n)r.type==="group"?z(r.layers,e+r.name+"/",t):(r.name=e+r.name,t.set(r.name,r))}async function oe(){const n=await T(),e=[];for(const t of n.values())if(t.type==="objectgroup")for(const r of t.objects)(r.type==="area"||r.class==="area")&&e.push(r);return e}function se(n){let e=1/0,t=1/0,r=0,o=0;const s=n.data;if(typeof s=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let a=0;a<n.height;a++)for(let i=0;i<n.width;i++)s[i+a*n.width]!==0&&(e=Math.min(e,i),o=Math.max(o,i),t=Math.min(t,a),r=Math.max(r,a));return{top:t,left:e,right:o+1,bottom:r+1}}function J(n){let e=1/0,t=1/0,r=0,o=0;for(const s of n){const a=se(s);a.left<e&&(e=a.left),a.top<t&&(t=a.top),a.right>o&&(o=a.right),a.bottom>r&&(r=a.bottom)}return{top:t,left:e,right:o,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var ae=Object.prototype.toString,S=Array.isArray||function(e){return ae.call(e)==="[object Array]"};function x(n){return typeof n=="function"}function ie(n){return S(n)?"array":typeof n}function G(n){return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function _(n,e){return n!=null&&typeof n=="object"&&e in n}function ue(n,e){return n!=null&&typeof n!="object"&&n.hasOwnProperty&&n.hasOwnProperty(e)}var ce=RegExp.prototype.test;function le(n,e){return ce.call(n,e)}var fe=/\S/;function pe(n){return!le(fe,n)}var ge={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function he(n){return String(n).replace(/[&<>"'`=\/]/g,function(t){return ge[t]})}var de=/\s*/,ye=/\s+/,q=/\s*=/,ve=/\s*\}/,me=/#|\^|\/|>|\{|&|=|!/;function be(n,e){if(!n)return[];var t=!1,r=[],o=[],s=[],a=!1,i=!1,u="",l=0;function f(){if(a&&!i)for(;s.length;)delete o[s.pop()];else s=[];a=!1,i=!1}var d,v,k;function C(b){if(typeof b=="string"&&(b=b.split(ye,2)),!S(b)||b.length!==2)throw new Error("Invalid tags: "+b);d=new RegExp(G(b[0])+"\\s*"),v=new RegExp("\\s*"+G(b[1])),k=new RegExp("\\s*"+G("}"+b[1]))}C(e||h.tags);for(var c=new M(n),m,g,y,P,B,A;!c.eos();){if(m=c.pos,y=c.scanUntil(d),y)for(var R=0,F=y.length;R<F;++R)P=y.charAt(R),pe(P)?(s.push(o.length),u+=P):(i=!0,t=!0,u+=" "),o.push(["text",P,m,m+1]),m+=1,P===`
`&&(f(),u="",l=0,t=!1);if(!c.scan(d))break;if(a=!0,g=c.scan(me)||"name",c.scan(de),g==="="?(y=c.scanUntil(q),c.scan(q),c.scanUntil(v)):g==="{"?(y=c.scanUntil(k),c.scan(ve),c.scanUntil(v),g="&"):y=c.scanUntil(v),!c.scan(v))throw new Error("Unclosed tag at "+c.pos);if(g==">"?B=[g,y,m,c.pos,u,l,t]:B=[g,y,m,c.pos],l++,o.push(B),g==="#"||g==="^")r.push(B);else if(g==="/"){if(A=r.pop(),!A)throw new Error('Unopened section "'+y+'" at '+m);if(A[1]!==y)throw new Error('Unclosed section "'+A[1]+'" at '+m)}else g==="name"||g==="{"||g==="&"?i=!0:g==="="&&C(y)}if(f(),A=r.pop(),A)throw new Error('Unclosed section "'+A[1]+'" at '+c.pos);return we(Ae(o))}function Ae(n){for(var e=[],t,r,o=0,s=n.length;o<s;++o)t=n[o],t&&(t[0]==="text"&&r&&r[0]==="text"?(r[1]+=t[1],r[3]=t[3]):(e.push(t),r=t));return e}function we(n){for(var e=[],t=e,r=[],o,s,a=0,i=n.length;a<i;++a)switch(o=n[a],o[0]){case"#":case"^":t.push(o),r.push(o),t=o[4]=[];break;case"/":s=r.pop(),s[5]=o[2],t=r.length>0?r[r.length-1][4]:e;break;default:t.push(o)}return e}function M(n){this.string=n,this.tail=n,this.pos=0}M.prototype.eos=function(){return this.tail===""};M.prototype.scan=function(e){var t=this.tail.match(e);if(!t||t.index!==0)return"";var r=t[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};M.prototype.scanUntil=function(e){var t=this.tail.search(e),r;switch(t){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,t),this.tail=this.tail.substring(t)}return this.pos+=r.length,r};function W(n,e){this.view=n,this.cache={".":this.view},this.parent=e}W.prototype.push=function(e){return new W(e,this)};W.prototype.lookup=function(e){var t=this.cache,r;if(t.hasOwnProperty(e))r=t[e];else{for(var o=this,s,a,i,u=!1;o;){if(e.indexOf(".")>0)for(s=o.view,a=e.split("."),i=0;s!=null&&i<a.length;)i===a.length-1&&(u=_(s,a[i])||ue(s,a[i])),s=s[a[i++]];else s=o.view[e],u=_(o.view,e);if(u){r=s;break}o=o.parent}t[e]=r}return x(r)&&(r=r.call(this.view)),r};function p(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}p.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};p.prototype.parse=function(e,t){var r=this.templateCache,o=e+":"+(t||h.tags).join(":"),s=typeof r<"u",a=s?r.get(o):void 0;return a==null&&(a=be(e,t),s&&r.set(o,a)),a};p.prototype.render=function(e,t,r,o){var s=this.getConfigTags(o),a=this.parse(e,s),i=t instanceof W?t:new W(t,void 0);return this.renderTokens(a,i,r,e,o)};p.prototype.renderTokens=function(e,t,r,o,s){for(var a="",i,u,l,f=0,d=e.length;f<d;++f)l=void 0,i=e[f],u=i[0],u==="#"?l=this.renderSection(i,t,r,o,s):u==="^"?l=this.renderInverted(i,t,r,o,s):u===">"?l=this.renderPartial(i,t,r,s):u==="&"?l=this.unescapedValue(i,t):u==="name"?l=this.escapedValue(i,t,s):u==="text"&&(l=this.rawValue(i)),l!==void 0&&(a+=l);return a};p.prototype.renderSection=function(e,t,r,o,s){var a=this,i="",u=t.lookup(e[1]);function l(v){return a.render(v,t,r,s)}if(u){if(S(u))for(var f=0,d=u.length;f<d;++f)i+=this.renderTokens(e[4],t.push(u[f]),r,o,s);else if(typeof u=="object"||typeof u=="string"||typeof u=="number")i+=this.renderTokens(e[4],t.push(u),r,o,s);else if(x(u)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");u=u.call(t.view,o.slice(e[3],e[5]),l),u!=null&&(i+=u)}else i+=this.renderTokens(e[4],t,r,o,s);return i}};p.prototype.renderInverted=function(e,t,r,o,s){var a=t.lookup(e[1]);if(!a||S(a)&&a.length===0)return this.renderTokens(e[4],t,r,o,s)};p.prototype.indentPartial=function(e,t,r){for(var o=t.replace(/[^ \t]/g,""),s=e.split(`
`),a=0;a<s.length;a++)s[a].length&&(a>0||!r)&&(s[a]=o+s[a]);return s.join(`
`)};p.prototype.renderPartial=function(e,t,r,o){if(r){var s=this.getConfigTags(o),a=x(r)?r(e[1]):r[e[1]];if(a!=null){var i=e[6],u=e[5],l=e[4],f=a;u==0&&l&&(f=this.indentPartial(a,l,i));var d=this.parse(f,s);return this.renderTokens(d,t,r,f,o)}}};p.prototype.unescapedValue=function(e,t){var r=t.lookup(e[1]);if(r!=null)return r};p.prototype.escapedValue=function(e,t,r){var o=this.getConfigEscape(r)||h.escape,s=t.lookup(e[1]);if(s!=null)return typeof s=="number"&&o===h.escape?String(s):o(s)};p.prototype.rawValue=function(e){return e[1]};p.prototype.getConfigTags=function(e){return S(e)?e:e&&typeof e=="object"?e.tags:void 0};p.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!S(e))return e.escape};var h={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(n){L.templateCache=n},get templateCache(){return L.templateCache}},L=new p;h.clearCache=function(){return L.clearCache()};h.parse=function(e,t){return L.parse(e,t)};h.render=function(e,t,r,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+ie(e)+'" was given as the first argument for mustache#render(template, view, partials)');return L.render(e,t,r,o)};h.escape=he;h.Scanner=M;h.Context=W;h.Writer=p;class X{constructor(e,t){this.template=e,this.state=t,this.ast=h.parse(e)}getValue(){return this.value===void 0&&(this.value=h.render(this.template,this.state)),this.value}onChange(e){const t=[];for(const r of this.getUsedVariables().values())t.push(this.state.onVariableChange(r).subscribe(()=>{const o=h.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const r of t)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,t){for(const r of e){const o=r[0],s=r[1],a=r[4];["name","&","#","^"].includes(o)&&t.add(s),a!==void 0&&typeof a!="string"&&this.recursiveGetUsedVariables(a,t)}}}async function We(){var n;const e=await oe();for(const t of e){const r=(n=t.properties)!==null&&n!==void 0?n:[];for(const o of r){if(o.type==="int"||o.type==="bool"||o.type==="object"||typeof o.value!="string")continue;const s=new X(o.value,WA.state);if(s.isPureString())continue;const a=s.getValue();await K(t.name,o.name,a),s.onChange(async i=>{await K(t.name,o.name,i)})}}}async function Se(){var n;const e=await T();for(const[t,r]of e.entries())if(r.type!=="objectgroup"){const o=(n=r.properties)!==null&&n!==void 0?n:[];for(const s of o){if(s.type==="int"||s.type==="bool"||s.type==="object"||typeof s.value!="string")continue;const a=new X(s.value,WA.state);if(a.isPureString())continue;const i=a.getValue();N(t,s.name,i),a.onChange(u=>{N(t,s.name,u)})}}}async function K(n,e,t){console.log(n),(await WA.room.area.get(n)).setProperty(e,t)}function N(n,e,t){WA.room.setProperty(n,e,t),e==="visible"&&(t?WA.room.showLayer(n):WA.room.hideLayer(n))}let V,U=0,O=0;function Z(n){if(WA.state[n.name]){let e=n.properties.mustGetString("openLayer");for(const t of e.split(`
`))WA.room.showLayer(t);e=n.properties.mustGetString("closeLayer");for(const t of e.split(`
`))WA.room.hideLayer(t)}else{let e=n.properties.mustGetString("openLayer");for(const t of e.split(`
`))WA.room.hideLayer(t);e=n.properties.mustGetString("closeLayer");for(const t of e.split(`
`))WA.room.showLayer(t)}}function Ce(n){const e=n.properties.getString("openSound"),t=n.properties.getNumber("soundRadius");let r=1;if(t){const o=Q(n.properties.mustGetString("openLayer").split(`
`));if(o>t)return;r=1-o/t}e&&WA.sound.loadSound(e).play({volume:r})}function Pe(n){const e=n.properties.getString("closeSound"),t=n.properties.getNumber("soundRadius");let r=1;if(t){const o=Q(n.properties.mustGetString("closeLayer").split(`
`));if(o>t)return;r=1-o/t}e&&WA.sound.loadSound(e).play({volume:r})}function Y(n){return n.map(e=>V.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function Q(n){const e=Y(n),t=J(e),r=((t.right-t.left)/2+t.left)*32,o=((t.bottom-t.top)/2+t.top)*32;return Math.sqrt(Math.pow(U-r,2)+Math.pow(O-o,2))}function Ee(n){WA.state.onVariableChange(n.name).subscribe(()=>{WA.state[n.name]?Ce(n):Pe(n),Z(n)}),Z(n)}function Le(n,e,t,r){const o=n.name;let s,a,i=!1;const u=t.getString("tag");let l=!0;u&&!WA.player.tags.includes(u)&&(l=!1);const f=!!u;function d(){var c;s&&s.remove(),s=WA.ui.displayActionMessage({message:(c=t.getString("closeTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,v()}})}function v(){var c;s&&s.remove(),s=WA.ui.displayActionMessage({message:(c=t.getString("openTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,d()}})}function k(c){const m=J(Y(e.properties.mustGetString("closeLayer").split(`
`)));a=WA.room.website.create({name:"doorKeypad"+c,url:r+"/keypad.html#"+encodeURIComponent(c),position:{x:m.right*32,y:m.top*32,width:32*3,height:32*4},allowApi:!0})}function C(){a&&(WA.room.website.delete(a.name),a=void 0)}WA.room.onEnterLayer(o).subscribe(()=>{if(i=!0,t.getBoolean("autoOpen")&&l){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(f&&!l||!f)&&(t.getString("code")||t.getString("codeVariable"))){k(o);return}l&&(WA.state[e.name]?d():v())}),WA.room.onLeaveLayer(o).subscribe(()=>{i=!1,t.getBoolean("autoClose")&&(WA.state[e.name]=!1),s&&s.remove(),C()}),WA.state.onVariableChange(e.name).subscribe(()=>{i&&(!t.getBoolean("autoClose")&&WA.state[e.name]===!0&&d(),a&&WA.state[e.name]===!0&&C(),!t.getBoolean("autoOpen")&&WA.state[e.name]===!1&&v())})}function Te(n){const e=n.properties.mustGetString("bellSound"),t=n.properties.getNumber("soundRadius");let r=1;if(t){const o=Math.sqrt(Math.pow(n.x-U,2)+Math.pow(n.y-O,2));if(o>t)return;r=1-o/t}WA.sound.loadSound(e).play({volume:r})}function Me(n){WA.state[n.name]===void 0&&(WA.state[n.name]=0),WA.state.onVariableChange(n.name).subscribe(()=>{WA.state[n.name]&&Te(n)})}function ke(n,e,t){let r;const o=e.getString("bellPopup");WA.room.onEnterLayer(t).subscribe(()=>{var s;o?r=WA.ui.openPopup(o,"",[{label:(s=e.getString("bellButtonText"))!==null&&s!==void 0?s:"Ring",callback:()=>{WA.state[n]=WA.state[n]+1}}]):WA.state[n]=WA.state[n]+1}),WA.room.onLeaveLayer(t).subscribe(()=>{r&&(r.close(),r=void 0)})}async function Be(n){n=n??j;const e=await te();V=await T();for(const t of e.values())t.properties.get("door")&&Ee(t),t.properties.get("bell")&&Me(t);for(const t of V.values()){const r=new E(t.properties),o=r.getString("doorVariable");if(o&&t.type==="tilelayer"){const a=e.get(o);if(a===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+t.name+'"');Le(t,a,r,n)}const s=r.getString("bellVariable");s&&ke(s,r,t.name)}WA.player.onPlayerMove(t=>{U=t.x,O=t.y})}function Re(n,e){const t=n.getString("bindVariable");if(t){const r=n.get("enterValue"),o=n.get("leaveValue"),s=n.getString("triggerMessage"),a=n.getString("tag");Ie(t,e,r,o,s,a)}}function Ie(n,e,t,r,o,s){s&&!WA.player.tags.includes(s)||(t!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[n]=t)}),r!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[n]=r}))}async function Ge(){const n=await T();for(const e of n.values()){const t=new E(e.properties);Re(t,e.name)}}let $;async function Ve(n){const e=await WA.room.getTiledMap();n=n??j,$=await T();const t=e.layers.find(r=>r.name==="configuration");if(t){const o=new E(t.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(n+"/configuration.html",!0)});for(const s of $.values()){const a=new E(s.properties),i=a.getString("openConfig");i&&s.type==="tilelayer"&&je(i.split(","),s.name,a)}}}function je(n,e,t){let r;const o=t.getString("openConfigAdminTag");let s=!0;o&&!WA.player.tags.includes(o)&&(s=!1);function a(){var u;r&&r.remove(),r=WA.ui.displayActionMessage({message:(u=t.getString("openConfigTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE or touch here to configure",callback:()=>D(n)})}function i(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const u=t.getString("openConfigTrigger");s&&(u&&u==="onaction"?a():D(n))}),WA.room.onLeaveLayer(e).subscribe(()=>{r&&r.remove(),i()})}function xe(){return WA.onInit().then(()=>{Be().catch(n=>console.error(n)),Ge().catch(n=>console.error(n)),Ve().catch(n=>console.error(n)),Se().catch(n=>console.error(n)),We().catch(n=>console.error(n))}).catch(n=>console.error(n))}console.log("Script started successfully");var Ue=`Willkommen bei der Begegnungsplattform Inklusion@DB!

Erkunde unseren durchlaufbaren Adventskalender mit deinem Avatar
(du bewegst dich mit den PFEILTASTEN)
 Jeden Tag öffnet sich eine neue Tür,
hinter der sich spannende Impulse zum Thema Inklusion verbergen

 Ein Überblicks-Plan der Umgebung wird bei jedem Schild und Wegweiser eingeblendet`,Oe="popUpStart";let w;WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),w=WA.ui.openPopup(Oe,Ue,[{label:"OK",callback:n=>{n.close(),w=void 0}}]),WA.room.area.onEnter("clock").subscribe(()=>{const n=new Date,e=n.getHours()+":"+n.getMinutes();w=WA.ui.openPopup("clockPopup","It's "+e,[])}),WA.room.area.onLeave("clock").subscribe(De),WA.room.area.onEnter("ChatZone").subscribe(()=>{WA.chat.open()}),WA.room.area.onLeave("ChatZone").subscribe(()=>{WA.chat.close()}),WA.room.area.onEnter("ChatZoneSub").subscribe(()=>{WA.chat.open()}),WA.room.area.onLeave("ChatZoneSub").subscribe(()=>{WA.chat.close()}),xe().then(()=>{console.log("Scripting API Extra ready")}).catch(n=>console.error(n))}).catch(n=>console.error(n));function De(){w!==void 0&&(w.close(),w=void 0)}
