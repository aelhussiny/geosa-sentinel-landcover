"use strict";(self.webpackChunkimagery_explorer_apps=self.webpackChunkimagery_explorer_apps||[]).push([[6782],{6782:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});var i=a(36663),s=a(13802),r=a(78668),n=a(81977),h=(a(39994),a(4157),a(40266)),p=a(12688),d=a(66878),o=a(23134),u=a(26216),c=a(55068);let _=class extends((0,c.Z)((0,d.y)(u.Z))){update(t){this._strategy.update(t).catch((t=>{(0,r.D_)(t)||s.Z.getLogger(this).error(t)})),this.notifyChange("updating")}attach(){this._bitmapContainer=new p.c,this.container.addChild(this._bitmapContainer),this._strategy=new o.Z({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(t,e,a){return this.layer.fetchImageBitmap(t,e,a)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};(0,i._)([(0,n.Cb)()],_.prototype,"_strategy",void 0),(0,i._)([(0,n.Cb)()],_.prototype,"updating",void 0),_=(0,i._)([(0,h.j)("esri.views.2d.layers.BaseDynamicLayerView2D")],_);const g=_}}]);