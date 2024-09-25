"use strict";(self.webpackChunkimagery_explorer_apps=self.webpackChunkimagery_explorer_apps||[]).push([[8754],{49999:function(e,t,r){r.d(t,{j:function(){return p}});var a=r(36663),s=r(74396),i=r(81977),n=(r(39994),r(13802),r(4157),r(40266));const o={visible:"visibleSublayers"};let p=class extends s.Z{constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(o[e.propertyName])))],"layer"))}get layers(){return this.visibleSublayers.filter((({name:e})=>e)).map((({name:e})=>e)).join()}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:t}=this,r=e?.sublayers,a=[],s=e=>{const{minScale:r,maxScale:i,sublayers:n,visible:o}=e;o&&(0===t||(0===r||t<=r)&&(0===i||t>=i))&&(n?n.forEach(s):a.push(e))};return r?.forEach(s),a}toJSON(){const{layer:e,layers:t}=this,{imageFormat:r,imageTransparency:a,version:s}=e;return{format:r,request:"GetMap",service:"WMS",styles:"",transparent:a?"TRUE":"FALSE",version:s,layers:t}}};(0,a._)([(0,i.Cb)()],p.prototype,"layer",null),(0,a._)([(0,i.Cb)({readOnly:!0})],p.prototype,"layers",null),(0,a._)([(0,i.Cb)({type:Number})],p.prototype,"scale",void 0),(0,a._)([(0,i.Cb)({readOnly:!0})],p.prototype,"version",null),(0,a._)([(0,i.Cb)({readOnly:!0})],p.prototype,"visibleSublayers",null),p=(0,a._)([(0,n.j)("esri.layers.support.ExportWMSImageParameters")],p)},78754:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var a=r(36663),s=r(13802),i=r(61681),n=r(78668),o=r(76868),p=r(81977),h=(r(39994),r(4157),r(40266)),l=r(91772),u=r(12688),y=r(66878),c=r(23134),m=r(26216),d=r(55068),g=r(70375),b=r(23072),x=r(49999);const f=e=>{let t=class extends e{initialize(){this.exportImageParameters=new x.j({layer:this.layer})}destroy(){this.exportImageParameters=(0,i.SC)(this.exportImageParameters)}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeaturesAtLocation(e,t){const{layer:r}=this;if(!e)throw new g.Z("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r});const{popupEnabled:a}=r;if(!a)throw new g.Z("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:a});const s=this.createFetchPopupFeaturesQuery(e);if(!s)return[];const{extent:i,width:o,height:p,x:h,y:l}=s;if(!(i&&o&&p))throw new g.Z("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:i,width:o,height:p});const u=await r.fetchFeatureInfo(i,o,p,h,l);return(0,n.k_)(t),u}};return(0,a._)([(0,p.Cb)()],t.prototype,"exportImageParameters",void 0),(0,a._)([(0,p.Cb)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,a._)([(0,p.Cb)()],t.prototype,"layer",void 0),(0,a._)([(0,p.Cb)(b.qG)],t.prototype,"timeExtent",void 0),t=(0,a._)([(0,h.j)("esri.layers.mixins.WMSLayerView")],t),t};let v=class extends(f((0,d.Z)((0,y.y)(m.Z)))){constructor(){super(...arguments),this.bitmapContainer=new u.c}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch((e=>{(0,n.D_)(e)||s.Z.getLogger(this).error(e)}))}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:r}=e;this.bitmapContainer=new u.c,this.container.addChild(this.bitmapContainer),this.strategy=new c.Z({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles((0,o.YP)((()=>this.exportImageVersion),(()=>this.requestUpdate())))}detach(){this.strategy=(0,i.SC)(this.strategy),this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:r}=this,{x:a,y:s}=e,{spatialReference:i}=t;let n,o=0,p=0;if(r.children.some((e=>{const{width:t,height:r,resolution:h,x:u,y:y}=e,c=u+h*t,m=y-h*r;return a>=u&&a<=c&&s<=y&&s>=m&&(n=new l.Z({xmin:u,ymin:m,xmax:c,ymax:y,spatialReference:i}),o=t,p=r,!0)})),!n)return null;const h=n.width/o,u=Math.round((a-n.xmin)/h),y=Math.round((n.ymax-s)/h);return{extent:n,width:o,height:p,x:u,y:y}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,a){return this.layer.fetchImageBitmap(e,t,r,{timeExtent:this.timeExtent,...a})}};(0,a._)([(0,p.Cb)()],v.prototype,"strategy",void 0),(0,a._)([(0,p.Cb)()],v.prototype,"updating",void 0),v=(0,a._)([(0,h.j)("esri.views.2d.layers.WMSLayerView2D")],v);const w=v}}]);