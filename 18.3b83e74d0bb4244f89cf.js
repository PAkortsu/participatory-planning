(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/GroupLayer":408})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{408:function(i,e,t){var r,o;r=[t.dj.c(i.i),e,t(2),t(1),t(98),t(271),t(176),t(8),t(0),t(87),t(105),t(217),t(215),t(600)],void 0===(o=function(i,e,r,o,s,n,l,a,p,y,c,u,h,v){return function(i){function e(e){var t=i.call(this)||this;return t._visibilityHandles={},t.fullExtent=void 0,t.operationalLayerType="GroupLayer",t.spatialReference=void 0,t.type="group",t._visibilityWatcher=t._visibilityWatcher.bind(t),t}return r(e,i),e.prototype.initialize=function(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0)},e.prototype._writeLayers=function(i,e,t,r){var o=[];if(!i)return o;i.forEach(function(i){if("write"in i&&i.write){var e=i.write(null,r);e&&e.layerType&&o.push(e)}}),e.layers=o},Object.defineProperty(e.prototype,"portalItem",{set:function(i){this._set("portalItem",i)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"visibilityMode",{set:function(i){var e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible)},enumerable:!0,configurable:!0}),e.prototype.load=function(){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]})),this.when()},e.prototype.loadAll=function(){var i=this;return s.safeCast(n.loadAll(this,function(e){e(i.layers)}))},e.prototype.layerAdded=function(i){i.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(i):"inherited"===this.visibilityMode&&(i.visible=this.visible),this._visibilityHandles[i.uid]=i.watch("visible",this._visibilityWatcher,!0)},e.prototype.layerRemoved=function(i){var e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible)},e.prototype.importLayerViewModule=function(i){switch(i.type){case"2d":case"3d":return a.create(function(i){t.e(74).then(function(){var e=[t(2258)];i.apply(null,e)}.bind(this)).catch(t.oe)})}},e.prototype._turnOffOtherLayers=function(i){this.layers.forEach(function(e){e!==i&&(e.visible=!1)})},e.prototype._enforceVisibility=function(i,e){if(y.getProperties(this).initialized){var t=this.layers,r=t.find(function(i){return i.visible});switch(i){case"exclusive":t.length&&!r&&((r=t.getItemAt(0)).visible=!0),this._turnOffOtherLayers(r);break;case"inherited":t.forEach(function(i){i.visible=e})}}},e.prototype._visibleWatcher=function(i){"inherited"===this.visibilityMode&&this.layers.forEach(function(e){e.visible=i})},e.prototype._visibilityWatcher=function(i,e,t,r){var o=r;switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(o):this._isAnyLayerVisible()||(o.visible=!0);break;case"inherited":o.visible=this.visible}},e.prototype._isAnyLayerVisible=function(){return this.layers.some(function(i){return i.visible})},o([p.property()],e.prototype,"fullExtent",void 0),o([p.property({json:{read:!1,write:{ignoreOrigin:!0}}})],e.prototype,"layers",void 0),o([p.writer("layers")],e.prototype,"_writeLayers",null),o([p.property({type:["GroupLayer"]})],e.prototype,"operationalLayerType",void 0),o([p.property({json:{origins:{"web-scene":{read:!1,write:!1}}}})],e.prototype,"portalItem",null),o([p.property()],e.prototype,"spatialReference",void 0),o([p.property({json:{read:!1},readOnly:!0,value:"group"})],e.prototype,"type",void 0),o([p.property({type:String,value:"independent",json:{write:!0}})],e.prototype,"visibilityMode",null),o([p.subclass("esri.layers.GroupLayer")],e)}(p.declared(c,v,l,u,h))}.apply(null,r))||(i.exports=o)}}]);