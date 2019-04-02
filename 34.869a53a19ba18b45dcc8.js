(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/GeoRSSLayer":627})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{627:function(e,t,o){var r,n;r=[o.dj.c(e.i),t,o(11),o(2),o(1),o(99),o(50),o(13),o(8),o(0),o(105),o(217),o(215),o(553),o(262),o(155),o(394),o(185),o(122)],void 0===(n=function(e,t,r,n,i,l,p,u,s,a,y,c,d,f,S,v,h,w,b){return function(e){function t(t,o){var r=e.call(this)||this;return r.description=null,r.title=null,r.lineSymbol=null,r.pointSymbol=null,r.polygonSymbol=null,r.outSpatialReference=null,r.url=null,r.type="geo-rss",r}return n(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?r({url:e},t):e},t.prototype.readFeatureCollections=function(e,t){return t.featureCollection.layers.forEach(function(e){var t=e.layerDefinition.drawingInfo.renderer.symbol;t&&"esriSFS"===t.type&&t.outline&&-1!==t.outline.style.indexOf("esriSFS")&&(t.outline.style="esriSLSSolid")}),t.featureCollection.layers},t.prototype.load=function(){var e=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]}).then(function(){return e._fetchService()},function(){return e._fetchService()})),this.when()},t.prototype.importLayerViewModule=function(e){switch(e.type){case"2d":return s.create(function(e){return Promise.all([o.e(1),o.e(6),o.e(7),o.e(8),o.e(48)]).then(function(){var t=[o(2257)];e.apply(null,t)}.bind(this)).catch(o.oe)});case"3d":return s.reject(new u("geo-rss-layer:view-not-supported","GeoRSSLayer is only supported in 2D"))}},t.prototype._fetchService=function(){var e=this;return s.resolve().then(function(){return p(l.geoRSSServiceUrl,{query:{url:e.url,refresh:!!e.loaded||void 0,outSR:e.outSpatialReference?JSON.stringify(e.outSpatialReference.toJSON()):void 0}})}).then(function(t){e.read(t.data,{origin:"service"})})},i([a.property()],t.prototype,"description",void 0),i([a.property()],t.prototype,"title",void 0),i([a.property()],t.prototype,"featureCollections",void 0),i([a.reader("service","featureCollections",["featureCollection.layers"])],t.prototype,"readFeatureCollections",null),i([a.property({type:b})],t.prototype,"lineSymbol",void 0),i([a.property({type:["show","hide"]})],t.prototype,"listMode",void 0),i([a.property({type:h})],t.prototype,"pointSymbol",void 0),i([a.property({type:w})],t.prototype,"polygonSymbol",void 0),i([a.property()],t.prototype,"outSpatialReference",void 0),i([a.property(v.url)],t.prototype,"url",void 0),i([a.property({readOnly:!0,json:{read:!1},value:"geo-rss"})],t.prototype,"type",void 0),i([a.subclass("esri.layers.GeoRSSLayer")],t)}(a.declared(y,c,d,f,S))}.apply(null,r))||(e.exports=n)}}]);