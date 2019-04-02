(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/MapImageLayer":622,"esri/layers/support/ExportImageParameters":1680})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1680:function(e,r,t){var a,i;a=[t.dj.c(e.i),r,t(11),t(2),t(1),t(6),t(0),t(613)],void 0===(i=function(e,r,t,a,i,n,o,s){Object.defineProperty(r,"__esModule",{value:!0});var l={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"},p=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.scale=0,r}return a(r,e),Object.defineProperty(r.prototype,"dynamicLayers",{get:function(){if(!this.hasDynamicLayers)return null;var e=this.visibleSublayers.map(function(e){return e.toExportImageJSON()});return e.length?JSON.stringify(e):null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"hasDynamicLayers",{get:function(){return s.isExportDynamic(this.visibleSublayers,this.layer.serviceSublayers,this.layer)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"layer",{set:function(e){var r=this;this._get("layer")!==e&&(this._set("layer",e),this._layerHandles&&(this._layerHandles.forEach(function(e){return e.remove()}),this._layerHandles.length=0),e&&(this._layerHandles=[e.allSublayers.on("change",function(){return r.notifyChange("visibleSublayers")}),e.on("sublayer-update",function(e){return r.notifyChange(l[e.propertyName])})]))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"layers",{get:function(){var e=this.visibleSublayers;return e?e.length?"show:"+e.map(function(e){return e.id}).join(","):"show:-1":null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"layerDefs",{get:function(){var e=this.visibleSublayers.filter(function(e){return null!=e.definitionExpression});return e.length?JSON.stringify(e.reduce(function(e,r){return e[r.id]=r.definitionExpression,e},{})):null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"version",{get:function(){return(this._get("version")||0)+1},set:function(e){this._set("version",e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"visibleSublayers",{get:function(){var e=this,r=this.layer.sublayers,t=[],a=function(r){var i=e.scale,n=0===i,o=0===r.minScale||i<=r.minScale,s=0===r.maxScale||i>=r.maxScale;r.visible&&(n||o&&s)&&(r.sublayers?r.sublayers.forEach(a):t.unshift(r))};return r&&r.forEach(a),t},enumerable:!0,configurable:!0}),r.prototype.toJSON=function(){var e=this.layer,r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r=t({},r,{layers:this.layers,layerDefs:this.layerDefs}),r},i([o.property({readOnly:!0,dependsOn:["hasDynamicLayers","visibleSublayers"]})],r.prototype,"dynamicLayers",null),i([o.property({readOnly:!0,dependsOn:["visibleSublayers","layer.serviceSublayers","layer.capabilities"]})],r.prototype,"hasDynamicLayers",null),i([o.property()],r.prototype,"layer",null),i([o.property({readOnly:!0,dependsOn:["visibleSublayers"]})],r.prototype,"layers",null),i([o.property({readOnly:!0,dependsOn:["visibleSublayers"]})],r.prototype,"layerDefs",null),i([o.property({type:Number})],r.prototype,"scale",void 0),i([o.property({dependsOn:["layers","layerDefs","dynamicLayers","layer.dpi","layer.imageFormat","layer.imageTransparency","layer.gdbVersion"]})],r.prototype,"version",null),i([o.property({readOnly:!0,dependsOn:["layer.sublayers","scale"]})],r.prototype,"visibleSublayers",null),i([o.subclass("esri.layers.mixins.ExportImageParameters")],r)}(o.declared(n));r.ExportImageParameters=p}.apply(null,a))||(e.exports=i)},622:function(e,r,t){var a,i;a=[t.dj.c(e.i),r,t(11),t(2),t(1),t(120),t(50),t(13),t(8),t(0),t(35),t(402),t(105),t(610),t(217),t(215),t(553),t(262),t(611),t(155),t(1680)],void 0===(i=function(e,r,a,i,n,o,s,l,p,y,u,c,d,m,h,f,b,g,v,S,x){return function(e){function r(r,t){var a=e.call(this)||this;return a.alwaysRefetch=!1,a.dpi=96,a.gdbVersion=null,a.imageFormat="png24",a.imageMaxHeight=2048,a.imageMaxWidth=2048,a.imageTransparency=!0,a.labelsVisible=!1,a.operationalLayerType="ArcGISMapServiceLayer",a.resourceInfo=null,a.sublayers=null,a.type="map-image",a.url=null,a}return i(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?a({url:e},r):e},r.prototype.load=function(){var e=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]}).then(function(){return e._fetchService()})),this.when()},r.prototype.readImageFormat=function(e,r){var t=r.supportedImageFormatTypes;return t&&t.indexOf("PNG32")>-1?"png32":"png24"},r.prototype.createExportImageParameters=function(e,r,t,i){var n=i&&i.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());var o=new x.ExportImageParameters({layer:this,scale:c.getScale({extent:e,width:r})*n}),s=o.toJSON();o.layer=null,o.destroy();var l=!i||!i.rotation||this.version<10.3?{}:{rotation:-i.rotation},p=e&&e.spatialReference,y=p.wkid||JSON.stringify(p.toJSON());s.dpi*=n;var u={};if(i&&i.timeExtent){var d=i.timeExtent.toJSON(),m=d.start,h=d.end;m&&h&&m===h?u.time=""+m:null==m&&null==h||(u.time=(null==m?"null":m)+","+(null==h?"null":h))}return a({bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:y,imageSR:y,size:r+","+t},s,l,u)},r.prototype.fetchImage=function(e,r,t,i){var n={responseType:"image"};i&&i.timestamp&&(n.query={_ts:i.timestamp});var o,y,u=this.getImageUrl(e,r,t,i);if(u)y=p.when(u).then(function(e){return s(o=e,n)});else{o=this.parsedUrl.path+"/export";var c=a({},this.parsedUrl.query,this.createExportImageParameters(e,r,t,i),{f:"image",_ts:this.alwaysRefetch?Date.now():null});if(null!=c.dynamicLayers&&!this.capabilities.exportMap.supportsDynamicLayers)return p.reject(new l("mapimagelayer:dynamiclayer-not-supported","service "+this.url+" doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.",{query:c}));n.query?n.query=a({},c,n.query):n.query=c,y=s(o,n)}return y.then(function(e){return e.data}).catch(function(e){if(e&&"cancel"===e.dojoType)throw e;throw new l("mapimagelayer:image-fetch-error","Unable to load image: "+o,{error:e})})},r.prototype.getImageUrl=function(e,r,t,a){return null},r.prototype.importLayerViewModule=function(e){switch(e.type){case"2d":return p.create(function(e){return Promise.all([t.e(14),t.e(69)]).then(function(){var r=[t(2244)];e.apply(null,r)}.bind(this)).catch(t.oe)});case"3d":return p.create(function(e){return t.e(54).then(function(){var r=[t(2245)];e.apply(null,r)}.bind(this)).catch(t.oe)})}},r.prototype._fetchService=function(){var e=this;return p.resolve().then(function(){return e.resourceInfo?{ssl:!1,data:e.resourceInfo}:s(e.parsedUrl.path,{query:a({f:"json"},e.parsedUrl.query)})}).then(function(r){r.ssl&&(e.url=e.url.replace(/^http:/i,"https:")),e.read(r.data,{origin:"service",url:e.parsedUrl})})},n([y.property()],r.prototype,"alwaysRefetch",void 0),n([y.property()],r.prototype,"dpi",void 0),n([y.property()],r.prototype,"gdbVersion",void 0),n([y.property()],r.prototype,"imageFormat",void 0),n([y.reader("imageFormat",["supportedImageFormatTypes"])],r.prototype,"readImageFormat",null),n([y.property({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],r.prototype,"imageMaxHeight",void 0),n([y.property({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],r.prototype,"imageMaxWidth",void 0),n([y.property()],r.prototype,"imageTransparency",void 0),n([y.property({json:{read:!1,write:!1}})],r.prototype,"labelsVisible",void 0),n([y.property({type:["ArcGISMapServiceLayer"]})],r.prototype,"operationalLayerType",void 0),n([y.property()],r.prototype,"resourceInfo",void 0),n([y.property()],r.prototype,"sublayers",void 0),n([y.property({type:["show","hide","hide-children"]})],r.prototype,"listMode",void 0),n([y.property({json:{read:!1},readOnly:!0,value:"map-image"})],r.prototype,"type",void 0),n([y.property(S.url)],r.prototype,"url",void 0),n([o(0,y.cast(u))],r.prototype,"getImageUrl",null),n([y.subclass("esri.layers.MapImageLayer")],r)}(y.declared(d,m,v.default,h,f,b,g))}.apply(null,a))||(e.exports=i)}}]);