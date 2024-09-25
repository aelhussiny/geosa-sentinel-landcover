"use strict";(self.webpackChunkimagery_explorer_apps=self.webpackChunkimagery_explorer_apps||[]).push([[890],{86602:function(e,t,i){i.d(t,{JZ:function(){return d},RL:function(){return c},eY:function(){return g}});var s=i(78668),r=i(46332),n=i(38642),a=i(45867),h=i(51118),l=i(7349),o=i(91907),u=i(71449),p=i(80479);function d(e){return e&&"render"in e}function c(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}class g extends h.s{constructor(e=null,t=!1){super(),this.blendFunction="standard",this._sourceWidth=0,this._sourceHeight=0,this._textureInvalidated=!1,this._texture=null,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.immutable=t,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null),null!=this._uploadStatus&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}get isSourceScaled(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}get height(){return void 0!==this._height?this._height:this._sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){null==e&&null==this._source||(this._source=e,this.invalidateTexture(),this.requestRender())}get width(){return void 0!==this._width?this._width:this._sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e)}async setSourceAsync(e,t){null!=this._uploadStatus&&this._uploadStatus.controller.abort();const i=new AbortController,r=(0,s.hh)();return(0,s.$F)(t,(()=>i.abort())),(0,s.$F)(i,(e=>r.reject(e))),this._uploadStatus={controller:i,resolver:r},this.source=e,r.promise}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width))}updateTransitionProperties(e,t){e>=64&&(this.fadeTransitionEnabled=!1,this.inFadeTransition=!1),super.updateTransitionProperties(e,t)}setTransform(e){const t=(0,r.yR)(this.transforms.displayViewScreenMat3),[i,s]=e.toScreenNoRotation([0,0],[this.x,this.y]),n=this.resolution/this.pixelRatio/e.resolution,h=n*this.width,l=n*this.height,o=Math.PI*this.rotation/180;(0,r.Iu)(t,t,(0,a.al)(i,s)),(0,r.Iu)(t,t,(0,a.al)(h/2,l/2)),(0,r.U1)(t,t,-o),(0,r.Iu)(t,t,(0,a.al)(-h/2,-l/2)),(0,r.ex)(t,t,(0,a.al)(h,l)),(0,r.Jp)(this.transforms.displayViewScreenMat3,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}async updateTexture({context:e,painter:t}){if(!this._textureInvalidated)return;if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(e)),!this.source)return void this._texture.setData(null);this._texture.resize(this._sourceWidth,this._sourceHeight);const i=function(e){return d(e)?e instanceof l.Z?e.getRenderedRasterPixels()?.renderedRasterPixels:c(e):e}(this.source);try{if(null!=this._uploadStatus){const{controller:e,resolver:s}=this._uploadStatus,r={signal:e.signal},{width:n,height:a}=this,h=this._texture,l=t.textureUploadManager;await l.enqueueTextureUpdate({data:i,texture:h,width:n,height:a},r),s.resolve(),this._uploadStatus=null}else this._texture.setData(i);this.ready()}catch(e){(0,s.H9)(e)}}onDetach(){this.destroy()}_createTransforms(){return{displayViewScreenMat3:(0,n.Ue)()}}_createTexture(e){const t=this.immutable,i=new p.X;return i.internalFormat=t?o.lP.RGBA8:o.VI.RGBA,i.wrapMode=o.e8.CLAMP_TO_EDGE,i.isImmutable=t,i.width=this._sourceWidth,i.height=this._sourceHeight,new u.x(e,i)}}},7349:function(e,t,i){i.d(t,{Z:function(){return s}});class s{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return null!=this.pixelBlock?this.pixelBlock.width:0}get height(){return null!=this.pixelBlock?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if(null==t)return;const i=this.filter({extent:this.extent,pixelBlock:this.originalPixelBlock??t});if(null==i.pixelBlock)return;i.pixelBlock.maskIsAlpha&&(i.pixelBlock.premultiplyAlpha=!0);const s=i.pixelBlock.getAsRGBA(),r=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);r.data.set(s),e.putImageData(r,0,0)}getRenderedRasterPixels(){const e=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return null==e.pixelBlock?null:(e.pixelBlock.maskIsAlpha&&(e.pixelBlock.premultiplyAlpha=!0),{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)})}}},38553:function(e,t,i){i.d(t,{Y:function(){return g}});var s=i(36663),r=(i(13802),i(39994),i(4157),i(70375),i(40266)),n=i(24568),a=i(38642),h=i(86602),l=i(27954);class o extends l.I{constructor(e,t,i,s,r,n,a=null){super(e,t,i,s,r,n),this.bitmap=new h.eY(a),this.bitmap.coordScale=[r,n],this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){this.bitmap.beforeRender(e),super.beforeRender(e)}afterRender(e){this.bitmap.afterRender(e),super.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{displayViewScreenMat3:(0,a.Ue)(),tileMat3:(0,a.Ue)()}}setTransform(e){super.setTransform(e),this.bitmap.transforms.displayViewScreenMat3=this.transforms.displayViewScreenMat3}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}var u=i(98831),p=i(38716),d=i(70179);class c extends d.Z{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(e){const t=this._tileInfoView.getTileBounds((0,n.Ue)(),e),i=this._tileInfoView.getTileResolution(e.level),[s,r]=this._tileInfoView.tileInfo.size;return new o(e,i,t[0],t[3],s,r)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[u.U.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:p.jx.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===p.jx.MAP&&super.doRender(e)}}const g=e=>{let t=class extends e{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new c(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){this.container.removeChild(this._bitmapView),this._bitmapView?.removeAllChildren(),this._bitmapView=null}};return t=(0,s._)([(0,r.j)("esri.views.2d.layers.BitmapTileLayerView2D")],t),t}},66878:function(e,t,i){i.d(t,{y:function(){return w}});var s=i(36663),r=i(6865),n=i(58811),a=i(70375),h=i(76868),l=i(81977),o=(i(39994),i(13802),i(4157),i(40266)),u=i(68577),p=i(10530),d=i(98114),c=i(55755),g=i(88723),y=i(96294);let f=class extends y.Z{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,s._)([(0,l.Cb)({type:[[[Number]]],json:{write:!0}})],f.prototype,"path",void 0),f=(0,s._)([(0,o.j)("esri.views.layers.support.Path")],f);const _=f,m=r.Z.ofType({key:"type",base:null,typeMap:{rect:c.Z,path:_,geometry:g.Z}}),w=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new m,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){const e=this.view?.spatialReferenceLocked??!0,t=this.view?.spatialReference;t&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new a.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new p.W),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,h.YP)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e)}),h.tX),(0,h.YP)((()=>this.updateSuspended),(e=>{this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),h.tX),(0,h.YP)((()=>this.layer?.opacity??1),(e=>{this.container&&(this.container.opacity=e)}),h.tX),(0,h.YP)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),h.tX),(0,h.YP)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),h.tX),(0,h.YP)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),h.tX),(0,h.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),h.tX),(0,h.YP)((()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null})),(({scale:e})=>{const t=null!=e&&this.isVisibleAtScale(e);t!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",t)}),h.tX)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const e=this.view?.spatialReference;return null==e||this.supportsSpatialReference(e)}get updateSuspended(){return this.suspended}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this._updatingHandles?.updating)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:i,maxScale:s}=t;return(0,u.o2)(e,i,s)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,s._)([(0,l.Cb)()],t.prototype,"attached",void 0),(0,s._)([(0,l.Cb)({type:m,set(e){const t=(0,n.Z)(e,this._get("clips"),m);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,s._)([(0,l.Cb)()],t.prototype,"container",void 0),(0,s._)([(0,l.Cb)()],t.prototype,"moving",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,s._)([(0,l.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,s._)([(0,l.Cb)()],t.prototype,"updateRequested",void 0),(0,s._)([(0,l.Cb)()],t.prototype,"updateSuspended",null),(0,s._)([(0,l.Cb)()],t.prototype,"updating",null),(0,s._)([(0,l.Cb)()],t.prototype,"view",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),(0,s._)([(0,l.Cb)({type:d.Z})],t.prototype,"highlightOptions",void 0),t=(0,s._)([(0,o.j)("esri.views.2d.layers.LayerView2D")],t),t}},10890:function(e,t,i){i.r(t),i.d(t,{default:function(){return C}});var s=i(36663),r=i(23148),n=i(13802),a=i(78668),h=i(81977),l=(i(39994),i(4157),i(40266)),o=i(35925),u=i(94449),p=(i(70375),i(17262),i(38488),i(39043),i(51366),i(19431),i(91772),i(5975),i(34596),i(20031),i(74304),i(67666),i(89542),i(90819),i(19546),i(82584),i(75707),i(59443),i(50880),i(66303),i(31180),i(29903),i(32707),i(15593),i(363),i(40932),i(7831),i(50292),i(43842),i(13287),i(37521),i(13813),i(75276),i(41959),i(8505),i(80732),i(73675),i(25609),i(14266),i(45867),i(31090),i(5310),i(98591),i(73534),i(88464),i(51118),i(41214),i(31355),i(38716),i(69118),i(55939),i(6174),i(91907),i(18567),i(88338),i(43106),i(71449),i(96227),i(27894),i(87241)),d=(i(72797),i(8530),i(20627),i(17429),i(61296),i(43405),i(58536),i(66341),i(3466),i(76480),i(24204),i(41028),i(54689),i(56144),i(17346),i(23410),i(12045),i(61581),i(70187),i(18133)),c=(i(67979),i(6865),i(81509),i(24163),i(5992),i(37116),i(17703),i(25266),i(14685),i(14260),i(91957),i(88256),i(98863),i(82729),i(38553)),g=i(66878),y=i(14945),f=i(2144),_=i(64970),m=i(17224),w=i(23656),v=i(26216),b=i(55068),x=i(7608),R=i(99621);const S=[0,0];let I=class extends((0,b.Z)((0,c.Y)((0,g.y)(v.Z)))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new u.J,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||!1!==this.layer.resampling}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this._highlightView?.processUpdate(e)}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null,t=this.tilemapCache;if(this._tileInfoView=new _.Z(this.layer.tileInfo,this.layer.fullExtent,t?.effectiveMinLOD,t?.effectiveMaxLOD),this._fetchQueue=new m.Z({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new w.Z({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),(0,x.Uf)(this,this.layer)){const e=this._highlightView=new d.Z({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new y.Z(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new x.VF({createFetchPopupFeaturesQueryGeometry:(e,t)=>(0,R.K)(e,t,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(t,i)=>{e.graphicUpdateHandler({graphic:t,property:i})},layerView:this,updatingHandles:this._updatingHandles})}this.requestUpdate(),this.addAttachHandles(this._updatingHandles.add((()=>this.resampling),(()=>{this.doRefresh()}))),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._popupHighlightHelper?.destroy(),this._highlightView?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeaturesAtLocation(e,t){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeaturesAtLocation(e,t):[]}highlight(e){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(e):(0,r.kB)()}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){return(0,o.fS)(this.layer.tileInfo?.spatialReference,e)}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh((e=>this._updatingHandles.addPromise(this._enqueueTileFetch(e))))}}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(S,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(t)),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate()}async fetchTile(e,t={}){const i=this.tilemapCache,{signal:s,resamplingLevel:r=0}=t;if(!i)try{return await this._fetchImage(e,s)}catch(i){if(!(0,a.D_)(i)&&!this.resampling)return(0,f.V)(this._tileInfoView.tileInfo.size);if(r<3){const i=this._tileInfoView.getTileParentId(e.id);if(i){const s=new p.Z(i),n=await this.fetchTile(s,{...t,resamplingLevel:r+1});return(0,f.i)(this._tileInfoView,n,s,e)}}throw i}const n=new p.Z(0,0,0,0);let h;try{if(await i.fetchAvailabilityUpsample(e.level,e.row,e.col,n,{signal:s}),n.level!==e.level&&!this.resampling)return(0,f.V)(this._tileInfoView.tileInfo.size);h=await this._fetchImage(n,s)}catch(t){if((0,a.D_)(t))throw t;h=await this._fetchImage(e,s)}return this.resampling?(0,f.i)(this._tileInfoView,h,n,e):h}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()))}catch(e){(0,a.D_)(e)||n.Z.getLogger(this).error(e)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}};(0,s._)([(0,h.Cb)()],I.prototype,"resampling",null),(0,s._)([(0,h.Cb)()],I.prototype,"tilemapCache",null),I=(0,s._)([(0,l.j)("esri.views.2d.layers.TileLayerView2D")],I);const C=I},2144:function(e,t,i){function s(e,t,i,s){if(i.level===s.level)return t;const n=e.tileInfo.size,a=e.getTileResolution(i.level),h=e.getTileResolution(s.level);let l=e.getLODInfoAt(s.level);const o=l.getXForColumn(s.col),u=l.getYForRow(s.row);l=e.getLODInfoAt(i.level);const p=l.getXForColumn(i.col),d=l.getYForRow(i.row),c=function(e){return e instanceof HTMLImageElement?e.naturalWidth:e.width}(t)/n[0],g=function(e){return e instanceof HTMLImageElement?e.naturalHeight:e.height}(t)/n[1],y=Math.round(c*((o-p)/a)),f=Math.round(g*(-(u-d)/a)),_=Math.round(c*n[0]*(h/a)),m=Math.round(g*n[1]*(h/a)),w=r(n);return w.getContext("2d").drawImage(t,y,f,_,m,0,0,n[0],n[1]),w}function r(e){const t=document.createElement("canvas");return[t.width,t.height]=e,t}i.d(t,{V:function(){return r},i:function(){return s}})},26216:function(e,t,i){i.d(t,{Z:function(){return g}});var s=i(36663),r=i(74396),n=i(31355),a=i(86618),h=i(13802),l=i(61681),o=i(64189),u=i(81977),p=(i(39994),i(4157),i(40266)),d=i(98940);let c=class extends((0,a.IG)((0,o.v)(n.Z.EventedMixin(r.Z)))){constructor(e){super(e),this._updatingHandles=new d.R,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer?.title||"no title";h.Z.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}}))}destroy(){this._updatingHandles=(0,l.SC)(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const e=this.parent?.suspended?this.parent.suspendInfo:{};return this.view?.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,s._)([(0,u.Cb)()],c.prototype,"fullOpacity",null),(0,s._)([(0,u.Cb)()],c.prototype,"layer",void 0),(0,s._)([(0,u.Cb)()],c.prototype,"parent",void 0),(0,s._)([(0,u.Cb)({readOnly:!0})],c.prototype,"suspended",null),(0,s._)([(0,u.Cb)({readOnly:!0})],c.prototype,"suspendInfo",null),(0,s._)([(0,u.Cb)({readOnly:!0})],c.prototype,"legendEnabled",null),(0,s._)([(0,u.Cb)({type:Boolean,readOnly:!0})],c.prototype,"updating",null),(0,s._)([(0,u.Cb)({readOnly:!0})],c.prototype,"updatingProgress",null),(0,s._)([(0,u.Cb)()],c.prototype,"visible",null),(0,s._)([(0,u.Cb)()],c.prototype,"view",void 0),c=(0,s._)([(0,p.j)("esri.views.layers.LayerView")],c);const g=c},55068:function(e,t,i){i.d(t,{Z:function(){return l}});var s=i(36663),r=i(13802),n=i(78668),a=i(76868),h=(i(39994),i(4157),i(70375),i(40266));const l=e=>{let t=class extends e{initialize(){this.addHandles((0,a.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,n.D_)(e)||r.Z.getLogger(this).error(e)}))})),"RefreshableLayerView")}};return t=(0,s._)([(0,h.j)("esri.layers.mixins.RefreshableLayerView")],t),t}},88723:function(e,t,i){i.d(t,{Z:function(){return g}});var s,r=i(36663),n=(i(91957),i(81977)),a=(i(39994),i(13802),i(4157),i(40266)),h=i(20031),l=i(53736),o=i(96294),u=i(91772),p=i(89542);const d={base:h.Z,key:"type",typeMap:{extent:u.Z,polygon:p.Z}};let c=s=class extends o.Z{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){return new s({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,r._)([(0,n.Cb)({types:d,json:{read:l.im,write:!0}})],c.prototype,"geometry",void 0),c=s=(0,r._)([(0,a.j)("esri.views.layers.support.Geometry")],c);const g=c}}]);