"use strict";(self.webpackChunkimagery_explorer_apps=self.webpackChunkimagery_explorer_apps||[]).push([[6165,8611],{50516:function(e,t,r){r.d(t,{D:function(){return o}});var n=r(71760);function o(e){e?.writtenProperties&&e.writtenProperties.forEach((({target:e,propName:t,newOrigin:r})=>{(0,n.l)(e)&&r&&e.originOf(t)!==r&&e.updateOrigin(t,r)}))}},71760:function(e,t,r){function n(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{l:function(){return n}})},46165:function(e,t,r){r.d(t,{save:function(){return w},saveAs:function(){return y}});var n=r(21011),o=r(84513),a=r(31370),s=r(83415);const i="Group Layer",c="group-layer-save",u="group-layer-save-as",p=a.hz.GROUP_LAYER_MAP;function l(e){return{isValid:"group"===e.type,errorMessage:"Layer.type should be 'group'"}}function f(e){return{isValid:(0,a._$)(e,p),errorMessage:`Layer.portalItem.typeKeywords should have '${p}'`}}function d(e,t){return{...(0,o.Y)(e,"web-map",!0),initiator:t}}function m(e){const t=e.layerJSON;return Promise.resolve(t&&Object.keys(t).length?t:null)}async function h(e,t){t.title||=e.title,(0,a.ck)(t,a.hz.METADATA),(0,a.qj)(t,p)}async function w(e,t){return(0,n.a1)({layer:e,itemType:i,validateLayer:l,validateItem:f,createJSONContext:t=>d(t,e),createItemData:m,errorNamePrefix:c,saveResources:async(t,r)=>(e.sourceIsPortalItem||await t.removeAllResources().catch((()=>{})),(0,s.H)(e.resourceReferences,r))},t)}async function y(e,t,r){return(0,n.po)({layer:e,itemType:i,validateLayer:l,createJSONContext:t=>d(t,e),createItemData:m,errorNamePrefix:u,newItem:t,setItemProperties:h,saveResources:(t,r)=>(0,s.H)(e.resourceReferences,r)},r)}},21011:function(e,t,r){r.d(t,{DC:function(){return l},Nw:function(){return v},UY:function(){return g},V3:function(){return y},Ym:function(){return h},a1:function(){return O},jX:function(){return I},po:function(){return P},uT:function(){return w},xG:function(){return d}});var n=r(70375),o=r(50516),a=r(93968),s=r(53110),i=r(84513),c=r(31370),u=r(76990),p=r(60629);function l(e,t,r){const o=r(e);if(!o.isValid)throw new n.Z(`${t}:invalid-parameters`,o.errorMessage,{layer:e})}async function f(e){const{layer:t,errorNamePrefix:r,validateLayer:n}=e;await t.load(),l(t,r,n)}function d(e,t){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function m(e){const{item:t,errorNamePrefix:r,layer:o,validateItem:a}=e;if((0,u.w)(t),function(e){const{item:t,itemType:r,additionalItemType:o,errorNamePrefix:a,layer:s}=e,i=[r];if(o&&i.push(o),!i.includes(t.type)){const e=i.map((e=>`'${e}'`)).join(", ");throw new n.Z(`${a}:portal-item-wrong-type`,`Portal item type should be one of: "${e}"`,{item:t,layer:s})}}(e),a){const e=a(t);if(!e.isValid)throw new n.Z(`${r}:invalid-parameters`,e.errorMessage,{layer:o})}}function h(e){const{layer:t,errorNamePrefix:r}=e,{portalItem:o}=t;if(!o)throw new n.Z(`${r}:portal-item-not-set`,d(t,"requires the portalItem property to be set"));if(!o.loaded)throw new n.Z(`${r}:portal-item-not-loaded`,d(t,"cannot be saved to a portal item that does not exist or is inaccessible"));m({...e,item:o})}function w(e){const{newItem:t,itemType:r}=e;let n=s.default.from(t);return n.id&&(n=n.clone(),n.id=null),n.type??=r,n.portal??=a.Z.getDefault(),m({...e,item:n}),n}function y(e){return(0,i.Y)(e,"portal-item")}async function v(e,t,r){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const n=e.write({},t);return await Promise.all(t.resources?.pendingOperations??[]),(0,p.z)(t,{errorName:"layer-write:unsupported"},r),n}function g(e){(0,c.qj)(e,c.hz.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)))}async function I(e,t,r){const n=e.portal;await n.signIn(),await(n.user?.addItem({item:e,data:t,folder:r?.folder}))}async function O(e,t){const{layer:r,createItemData:n,createJSONContext:a,saveResources:s,supplementalUnsupportedErrors:i}=e;await f(e),h(e);const c=r.portalItem,u=a?a(c):y(c),p=await v(r,u,{...t,supplementalUnsupportedErrors:i}),l=await n({layer:r,layerJSON:p},c);return g(c),await c.update({data:l}),(0,o.D)(u),await(s?.(c,u)),c}async function P(e,t){const{layer:r,createItemData:n,createJSONContext:a,setItemProperties:s,saveResources:i,supplementalUnsupportedErrors:c}=e;await f(e);const u=w(e),p=a?a(u):y(u),l=await v(r,p,{...t,supplementalUnsupportedErrors:c}),d=await n({layer:r,layerJSON:l},u);return await s(r,u),g(u),await I(u,d,t),r.portalItem=u,(0,o.D)(p),await(i?.(u,p)),u}},68611:function(e,t,r){r.d(t,{FO:function(){return f},W7:function(){return d},addOrUpdateResources:function(){return i},fetchResources:function(){return s},removeAllResources:function(){return u},removeResource:function(){return c}});var n=r(66341),o=r(70375),a=r(3466);async function s(e,t={},r){await e.load(r);const n=(0,a.v_)(e.itemUrl,"resources"),{start:o=1,num:s=10,sortOrder:i="asc",sortField:c="resource"}=t,u={query:{start:o,num:s,sortOrder:i,sortField:c,token:e.apiKey},signal:r?.signal},p=await e.portal.request(n,u);return{total:p.total,nextStart:p.nextStart,resources:p.resources.map((({created:t,size:r,resource:n})=>({created:new Date(t),size:r,resource:e.resourceFromPath(n)})))}}async function i(e,t,r,n){const s=new Map;for(const{resource:e,content:n,compress:a,access:i}of t){if(!e.hasPath())throw new o.Z(`portal-item-resource-${r}:invalid-path`,"Resource does not have a valid path");const[t,c]=p(e.path),u=`${t}/${a??""}/${i??""}`;s.has(u)||s.set(u,{prefix:t,compress:a,access:i,files:[]}),s.get(u).files.push({fileName:c,content:n})}await e.load(n);const i=(0,a.v_)(e.userItemUrl,"add"===r?"addResources":"updateResources");for(const{prefix:t,compress:r,access:o,files:a}of s.values()){const s=25;for(let c=0;c<a.length;c+=s){const u=a.slice(c,c+s),p=new FormData;t&&"."!==t&&p.append("resourcesPrefix",t),r&&p.append("compress","true"),o&&p.append("access",o);let l=0;for(const{fileName:e,content:t}of u)p.append("file"+ ++l,t,e);p.append("f","json"),await e.portal.request(i,{method:"post",body:p,signal:n?.signal})}}}async function c(e,t,r){if(!t.hasPath())throw new o.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const n=(0,a.v_)(e.userItemUrl,"removeResources");await e.portal.request(n,{method:"post",query:{resource:t.path},signal:r?.signal}),t.portalItem=null}async function u(e,t){await e.load(t);const r=(0,a.v_)(e.userItemUrl,"removeResources");return e.portal.request(r,{method:"post",query:{deleteAll:!0},signal:t?.signal})}function p(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function l(e){const[t,r]=function(e){const t=(0,a.Ml)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[n,o]=p(t);return[n,o,r]}async function f(e){return"blob"===e.type?e.blob:"json"===e.type?new Blob([e.jsonString],{type:"application/json"}):(await(0,n.Z)(e.url,{responseType:"blob"})).data}function d(e,t){if(!e.hasPath())return null;const[r,,n]=l(e.path);return e.portalItem.resourceFromPath((0,a.v_)(r,t+n))}},83415:function(e,t,r){r.d(t,{H:function(){return i},b:function(){return c}});var n=r(70375),o=r(78668),a=r(12173),s=r(68611);async function i(e,t,r){const n=await u(e,t,r);await p(n,t,r)}async function c(e,t,r,n,o){const a=await u(r,n,o);await e.update({data:t}),await p(a,n,o)}async function u(e,t,i){if(!t?.resources)return;const c=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const u=new Set(t.resources.toKeep.map((e=>e.resource.path))),p=new Set,l=[];u.forEach((t=>{c.delete(t),e.paths.push(t)}));const f=[],d=[],m=[];for(const r of t.resources.toUpdate)if(c.delete(r.resource.path),u.has(r.resource.path)||p.has(r.resource.path)){const{resource:t,content:n,finish:o}=r,i=(0,s.W7)(t,(0,a.DO)());e.paths.push(i.path),f.push({resource:i,content:await(0,s.FO)(n),compress:r.compress}),o&&m.push((()=>o(i)))}else{e.paths.push(r.resource.path),d.push({resource:r.resource,content:await(0,s.FO)(r.content),compress:r.compress});const t=r.finish;t&&m.push((()=>t(r.resource))),p.add(r.resource.path)}for(const r of t.resources.toAdd)if(e.paths.push(r.resource.path),c.has(r.resource.path))c.delete(r.resource.path);else{f.push({resource:r.resource,content:await(0,s.FO)(r.content),compress:r.compress});const e=r.finish;e&&m.push((()=>e(r.resource)))}if(f.length||d.length){const{addOrUpdateResources:e}=await Promise.resolve().then(r.bind(r,68611));await e(t.portalItem,f,"add",i),await e(t.portalItem,d,"update",i)}if(m.forEach((e=>e())),0===l.length)return c;const h=await(0,o.UO)(l);if((0,o.k_)(i),h.length>0)throw new n.Z("save:resources","Failed to save one or more resources",{errors:h});return c}async function p(e,t,r){if(!e||!t.portalItem)return;const n=[];for(const o of e){const e=t.portalItem.resourceFromPath(o);n.push(e.portalItem.removeResource(e,r))}await(0,o.as)(n)}},76990:function(e,t,r){r.d(t,{w:function(){return s}});var n=r(51366),o=r(70375),a=r(99522);function s(e){if(n.default.apiKey&&(0,a.r)(e.portal.url))throw new o.Z("save-api-key-utils:api-key-not-supported",`Saving is not supported on ${e.portal.url} when using an api key`)}}}]);