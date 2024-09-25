/*! For license information please see 3483.3667288446f8ba2de747.js.LICENSE.txt */
"use strict";(self.webpackChunkimagery_explorer_apps=self.webpackChunkimagery_explorer_apps||[]).push([[3483],{83483:function(t,e,i){i.r(e),i.d(e,{CalciteFlow:function(){return h},defineCustomElement:function(){return f}});var n=i(77210),o=i(85545),r=i(16265);const s="frame",a="frame--advancing",c="frame--retreating",l=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.itemMutationObserver=(0,o.c)("mutation",(()=>this.updateFlowProps())),this.getFlowDirection=(t,e)=>t&&e>1||t>1?e<t?"retreating":"advancing":null,this.updateFlowProps=()=>{const{customItemSelectors:t,el:e,items:i}=this,n=Array.from(e.querySelectorAll("calcite-flow-item"+(t?`,${t}`:""))).filter((t=>t.closest("calcite-flow")===e)),o=i.length,r=n.length,s=n[r-1],a=n[r-2];if(r&&s&&n.forEach((t=>{t.showBackButton=t===s&&r>1,t.hidden=t!==s})),a&&(a.menuOpen=!1),this.items=n,o!==r){const t=this.getFlowDirection(o,r);this.itemCount=r,this.flowDirection=t}},this.customItemSelectors=void 0,this.flowDirection=null,this.itemCount=0,this.items=[]}async back(){const{items:t}=this,e=t[t.length-1];if(!e)return;const i=e.beforeBack?e.beforeBack:()=>Promise.resolve();try{await i.call(e)}catch(t){return}return e.remove(),e}async setFocus(){await(0,r.c)(this);const{items:t}=this,e=t[t.length-1];return e?.setFocus()}connectedCallback(){this.itemMutationObserver?.observe(this.el,{childList:!0,subtree:!0}),this.updateFlowProps()}async componentWillLoad(){(0,r.s)(this)}componentDidLoad(){(0,r.a)(this)}disconnectedCallback(){this.itemMutationObserver?.disconnect()}async handleItemBackClick(t){if(!t.defaultPrevented)return await this.back(),this.setFocus()}render(){const{flowDirection:t}=this,e={[s]:!0,[a]:"advancing"===t,[c]:"retreating"===t};return(0,n.h)("div",{class:e},(0,n.h)("slot",null))}get el(){return this}static get style(){return":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;overflow:hidden;background-color:transparent}:host .frame{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;padding:0px}:host ::slotted(calcite-flow-item),:host ::slotted(calcite-panel){block-size:100%}:host ::slotted(.calcite-match-height:last-child){display:flex;flex:1 1 auto;overflow:hidden}:host .frame--advancing{animation:calcite-frame-advance var(--calcite-animation-timing)}:host .frame--retreating{animation:calcite-frame-retreat var(--calcite-animation-timing)}@keyframes calcite-frame-advance{0%{--tw-bg-opacity:0.5;transform:translate3d(50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity:0.5;transform:translate3d(-50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-flow",{customItemSelectors:[1,"custom-item-selectors"],flowDirection:[32],itemCount:[32],items:[32],back:[64],setFocus:[64]},[[0,"calciteFlowItemBack","handleItemBackClick"]]]);function u(){if("undefined"==typeof customElements)return;["calcite-flow"].forEach((t=>{if("calcite-flow"===t)customElements.get(t)||customElements.define(t,l)}))}u();const h=l,f=u},16265:function(t,e,i){i.d(e,{a:function(){return a},c:function(){return c},s:function(){return s}});var n=i(77210);const o=new WeakMap,r=new WeakMap;function s(t){r.set(t,new Promise((e=>o.set(t,e))))}function a(t){o.get(t)()}async function c(t){if(await function(t){return r.get(t)}(t),n.Z5.isBrowser)return(0,n.xE)(t),new Promise((t=>requestAnimationFrame((()=>t()))))}},85545:function(t,e,i){i.d(e,{c:function(){return o}});var n=i(77210);function o(t,e,i){if(!n.Z5.isBrowser)return;const o=function(t){class e extends window.MutationObserver{constructor(t){super(t),this.observedEntry=[],this.callback=t}observe(t,e){return this.observedEntry.push({target:t,options:e}),super.observe(t,e)}unobserve(t){const e=this.observedEntry.filter((e=>e.target!==t));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),e.forEach((t=>this.observe(t.target,t.options)))}}return"intersection"===t?window.IntersectionObserver:"mutation"===t?e:window.ResizeObserver}(t);return new o(e,i)}}}]);