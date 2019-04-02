(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/BuildingSceneLayer":625,"esri/support/popupUtils":1610,"esri/layers/support/BuildingFilterMode":1681,"esri/layers/buildingSublayers/BuildingSublayer":1765,"esri/layers/buildingSublayers/BuildingGroupSublayer":2074,"esri/layers/buildingSublayers/BuildingComponentSublayer":2075,"esri/layers/support/BuildingFilter":2076,"esri/core/uuid":2077,"esri/layers/support/BuildingFilterBlock":2078,"esri/layers/support/BuildingFilterModeSolid":2079,"esri/layers/support/BuildingFilterModeWireframe":2080})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1610:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(11),t(378),t(361),t(577),t(377),t(570)],void 0===(n=function(e,r,t,i,n,o,l,p){function a(e,r){var t=e;if(r.ignoreFieldTypes&&(e=e.filter(function(e){return-1===r.ignoreFieldTypes.indexOf(e.type)})),0===e.length)return null;var i=r.maximumFields&&e.length>r.maximumFields;return i&&(e=e.slice(0,r.maximumFields)),e===t&&(e=e.slice()),e.sort(s),{fields:e,limitExceeded:i}}function s(e,r){return"oid"===e.type?-1:"oid"===r.type?1:d(e)?-1:d(r)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((r.alias||r.name).toLocaleLowerCase())}function u(e){return e.map(function(e){return new l({fieldName:e.name,label:e.alias,format:function(e){switch(e.type){case"small-integer":case"integer":case"single":return new p({digitSeparator:!0,places:0});case"double":return new p({digitSeparator:!0,places:2});case"date":return new p({dateFormat:"long-month-day-year"});default:return null}}(e),visible:!0})})}function y(e){var r=[new o.FieldsContent,new o.AttachmentsContent];return e&&r.push(new o.TextContent({text:"<small>"+i.tooManyFields+"</small>"})),r}function d(e){return"name"===(e.name&&e.name.toLowerCase())||"name"===(e.alias&&e.alias.toLowerCase())||void 0}Object.defineProperty(r,"__esModule",{value:!0}),r.createPopupTemplate=function(e,r){var i=e.fields,o=e.title;if(!i)return null;var l=a(i,t({},c,r));if(!l)return null;var p=function(e,r){for(var t=0,i=r;t<i.length;t++){var n=i[t];if(d(n))return e+": {"+n.name+"}"}return e}(o,l.fields),s=y(l.limitExceeded),f=u(l.fields);return new n({title:p,content:s,fieldInfos:f})};var c={ignoreFieldTypes:["geometry","blob","raster","guid","xml"],maximumFields:75}}.apply(null,i))||(e.exports=n)},1681:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(2),t(1),t(9),t(0)],void 0===(n=function(e,r,t,i,n,o){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),i([o.property({readOnly:!0})],r.prototype,"type",void 0),i([o.subclass("esri.layers.buildingSublayers.BuildingFilterMode")],r)}(o.declared(n))}.apply(null,i))||(e.exports=n)},1765:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(11),t(2),t(1),t(213),t(176),t(0),t(155)],void 0===(n=function(e,r,t,i,n,o,l,p,a){return function(e){function r(r){var t=e.call(this)||this;return t.title="",t.id=-1,t.modelName=null,t.visible=!0,t.opacity=1,t}return i(r,e),r.prototype.readTitle=function(e,r,t){return"string"==typeof r.alias?r.alias:"string"==typeof r.name?r.name:""},r.prototype.readIdOnlyOnce=function(e,r,t){return-1!==this.id?this.id:"number"==typeof e?e:void 0},n([p.property({type:String,json:{origins:{"web-scene":{write:!0}}}})],r.prototype,"title",void 0),n([p.reader("service","title",["alias","name"])],r.prototype,"readTitle",null),n([p.property()],r.prototype,"layer",void 0),n([p.property({type:Number,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],r.prototype,"id",void 0),n([p.reader("service","id")],r.prototype,"readIdOnlyOnce",null),n([p.property(a.readOnlyService(String))],r.prototype,"modelName",void 0),n([p.property({type:Boolean,json:{read:{source:"visibility"},write:{target:"visibility"}}})],r.prototype,"visible",void 0),n([p.property({type:Number,json:{write:!0}})],r.prototype,"opacity",void 0),n([p.subclass("esri.layers.buildingSublayers.BuildingSublayer")],r)}(p.declared(l,o.Identifiable))}.apply(null,i))||(e.exports=n)},2074:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(11),t(2),t(1),t(98),t(26),t(271),t(132),t(0),t(2075),t(1765)],void 0===(n=function(e,r,t,i,n,o,l,p,a,s,u,y){function d(e,r,t){if(e&&Array.isArray(e))return new l(e.map(function(e){var r=function(e){return"group"===e.layerType?f:u}(e);if(r){var i=new r;return i.read(e,t),i}t&&t.messages&&e&&t.messages.push(new a("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:t}))}))}var c={type:l,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:d}}},read:!1}},f=function(e){function r(r){var t=e.call(this)||this;return t.type="building-group",t.listMode="show",t.sublayers=null,t}var t;return i(r,e),t=r,r.prototype.loadAll=function(){var e=this;return o.safeCast(p.loadAllChildren(this,function(r){return t.forEachSublayer(e.sublayers,function(e){"building-group"!==e.type&&r(e)})}))},n([s.property({type:["hide","show","hide-children"],json:{write:!0}})],r.prototype,"listMode",void 0),n([s.property(c)],r.prototype,"sublayers",void 0),t=n([s.subclass("esri.layers.buildingSublayers.BuildingGroupSublayer")],r)}(s.declared(y));return function(e){e.sublayersProperty=c,e.readSublayers=d,e.forEachSublayer=function e(r,t){r.forEach(function(r){t(r),"building-group"===r.type&&e(r.sublayers,t)})}}(f||(f={})),f}.apply(null,i))||(e.exports=n)},2075:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(11),t(2),t(1),t(361),t(556),t(50),t(135),t(0),t(35),t(34),t(1765),t(155),t(357),t(368),t(1610),t(279)],void 0===(n=function(e,r,t,i,n,o,l,p,a,s,u,y,d,c,f,v,b,g){return function(e){function r(r){var t=e.call(this)||this;return t.type="building-component",t.fields=[],t.listMode="show",t.renderer=null,t.definitionExpression=null,t.popupEnabled=!0,t.popupTemplate=null,t.geometryType="mesh",t.profile="mesh-pyramids",t}return i(r,e),Object.defineProperty(r.prototype,"parsedUrl",{get:function(){return this.layer?{path:this.layer.parsedUrl.path+"/sublayers/"+this.id,query:this.layer.parsedUrl.query}:null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"objectIdField",{get:function(){if(null!=this.fields)for(var e=0,r=this.fields;e<r.length;e++){var t=r[e];if("oid"===t.type)return t.name}return null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"defaultPopupTemplate",{get:function(){return this.createPopupTemplate()},enumerable:!0,configurable:!0}),r.prototype.load=function(){return this.addResolvingPromise(this._fetchService()),this.when()},r.prototype.createPopupTemplate=function(e){return b.createPopupTemplate(this,e)},r.prototype._fetchService=function(){var e=this;return p(this.parsedUrl.path,{query:{f:"json"},responseType:"json"}).then(function(r){var t=r.data;e.read(t,{origin:"service",url:e.parsedUrl})})},n([s.property({readOnly:!0,dependsOn:["layer","id"]})],r.prototype,"parsedUrl",null),n([s.property({readOnly:!0})],r.prototype,"store",void 0),n([s.property({readOnly:!0})],r.prototype,"attributeStorageInfo",void 0),n([s.property({readOnly:!0,type:[f]})],r.prototype,"fields",void 0),n([s.property({type:String,dependsOn:["fields"],readOnly:!0})],r.prototype,"objectIdField",null),n([s.property({readOnly:!0,type:u,aliasOf:"layer.fullExtent"})],r.prototype,"fullExtent",void 0),n([s.property({readOnly:!0,type:y,aliasOf:"layer.spatialReference"})],r.prototype,"spatialReference",void 0),n([s.property({readOnly:!0,aliasOf:"layer.version"})],r.prototype,"version",void 0),n([s.property({readOnly:!0,type:g,aliasOf:"layer.elevationInfo"})],r.prototype,"elevationInfo",void 0),n([s.property({type:["hide","show"],json:{write:!0}})],r.prototype,"listMode",void 0),n([s.property({types:l.rendererTypes,json:{origins:{service:{read:{source:"drawingInfo.renderer",reader:v.read}}},read:{source:"layerDefinition.drawingInfo.renderer",reader:v.read},write:{target:"layerDefinition.drawingInfo.renderer"}},value:null})],r.prototype,"renderer",void 0),n([s.property({type:String,json:{origins:{service:{read:!1,write:!1}},read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],r.prototype,"definitionExpression",void 0),n([s.property(c.popupEnabled)],r.prototype,"popupEnabled",void 0),n([s.property({type:o,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],r.prototype,"popupTemplate",void 0),n([s.property({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],r.prototype,"normalReferenceFrame",void 0),n([s.property({readOnly:!0,json:{read:!1},dependsOn:["fields","title"]})],r.prototype,"defaultPopupTemplate",null),n([s.subclass("esri.layers.buildingSublayers.BuildingComponentSublayer")],r)}(s.declared(d,a))}.apply(null,i))||(e.exports=n)},2076:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(2),t(1),t(26),t(9),t(2077),t(0),t(2078)],void 0===(n=function(e,r,t,i,n,o,l,p,a){var s=n.ofType(a);return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.description=null,r.id=l.generateUUID(),r.visible=!0,r.name=null,r}return t(r,e),i([p.property({type:String})],r.prototype,"description",void 0),i([p.property({type:s})],r.prototype,"filterBlocks",void 0),i([p.property({type:String})],r.prototype,"id",void 0),i([p.property({json:{read:{source:"isVisible"}},type:Boolean})],r.prototype,"visible",void 0),i([p.property({type:String})],r.prototype,"name",void 0),i([p.subclass("esri.layers.buildingSublayers.BuildingFilter")],r)}(p.declared(o))}.apply(null,i))||(e.exports=n)},2077:function(e,r,t){var i,n;i=[t.dj.c(e.i),r],void 0===(n=function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.generateUUID=function(){var e=t.getRandomValues(new Uint16Array(8));e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;var r=function(r){return e[r].toString(16)};return r(0)+r(1)+"-"+r(2)+"-"+r(3)+"-"+r(4)+"-"+r(5)+r(6)+r(7)};var t=window.crypto||window.msCrypto}.apply(null,i))||(e.exports=n)},2078:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(2),t(1),t(9),t(0),t(1681),t(2079),t(2080)],void 0===(n=function(e,r,t,i,n,o,l,p,a){var s={types:{key:"type",base:l,typeMap:{solid:p,wireframe:a}}};return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.filterExpression=null,r.filterMode=null,r.title=null,r}return t(r,e),i([o.property({type:String})],r.prototype,"filterExpression",void 0),i([o.property(s)],r.prototype,"filterMode",void 0),i([o.property({type:String})],r.prototype,"title",void 0),i([o.subclass("esri.layers.buildingSublayers.BuildingFilterBlock")],r)}(o.declared(n))}.apply(null,i))||(e.exports=n)},2079:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(2),t(1),t(0),t(1681)],void 0===(n=function(e,r,t,i,n,o){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="solid",r}return t(r,e),i([n.property()],r.prototype,"type",void 0),i([n.subclass("esri.layers.support.BuildingFilterModeSolid")],r)}(n.declared(o))}.apply(null,i))||(e.exports=n)},2080:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(2),t(1),t(0),t(1681),t(393)],void 0===(n=function(e,r,t,i,n,o,l){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="wireframe",r.edges=null,r}return t(r,e),i([n.property()],r.prototype,"type",void 0),i([n.property(l.symbol3dEdgesProperty)],r.prototype,"edges",void 0),i([n.subclass("esri.layers.buildingSublayers.BuildingFilterModeWireframe")],r)}(n.declared(o))}.apply(null,i))||(e.exports=n)},625:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(11),t(2),t(1),t(98),t(26),t(222),t(13),t(7),t(271),t(10),t(8),t(0),t(35),t(34),t(105),t(2074),t(578),t(2076),t(155)],void 0===(n=function(e,r,i,n,o,l,p,a,s,u,y,d,c,f,v,b,g,h,m,w,S){var O=d.getLogger("esri.layers.BuildingSceneLayer"),j=p.ofType(w);return function(e){function r(r){var t=e.call(this)||this;return t.operationalLayerType="BuildingSceneLayer",t.allSublayers=new a({root:t,rootCollectionNames:["sublayers"],getChildrenFunction:function(e){return"building-group"===e.type?e.sublayers:null}}),t.sublayers=null,t.sublayerOverrides=null,t.filters=new j,t.activeFilterId=null,t.type="building-scene",t}return n(r,e),r.prototype.normalizeCtorArgs=function(e){return"string"==typeof e?{url:e}:e},r.prototype.readSublayers=function(e,r,t){var i=this,n=h.readSublayers(e,r,t);return h.forEachSublayer(n,function(e){return e.layer=i}),this.sublayerOverrides&&(this.applySublayerOverrides(n,this.sublayerOverrides),this.sublayerOverrides=null),n},r.prototype.applySublayerOverrides=function(e,r){var t=r.overrides,i=r.context;h.forEachSublayer(e,function(e){return e.read(t.get(e.id),i)})},r.prototype.readSublayerOverrides=function(e,r){for(var t=new Map,i=0,n=e;i<n.length;i++){var o=n[i];null!=o&&"object"==typeof o&&"number"==typeof o.id?t.set(o.id,o):r.messages.push(new s("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:o}))}return{overrides:t,context:r}},r.prototype.writeSublayerOverrides=function(e,r,t){var i=[];h.forEachSublayer(this.sublayers,function(e){var r=e.write({},t);Object.keys(r).length>1&&i.push(r)}),i.length>0&&(r.sublayers=i)},r.prototype.writeUnappliedOverrides=function(e,r){r.sublayers=[],e.overrides.forEach(function(e){r.sublayers.push(u.clone(e))})},r.prototype.write=function(e,r){return e=this.inherited(arguments),r&&"web-scene"===r.origin&&(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e},r.prototype.read=function(e,r){if(this.inherited(arguments),r&&"web-scene"===r.origin&&null!=e&&Array.isArray(e.sublayers)){var t=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,t):this.sublayerOverrides=t}},Object.defineProperty(r.prototype,"elevationInfo",{set:function(e){this._set("elevationInfo",e),this._validateElevationInfo()},enumerable:!0,configurable:!0}),r.prototype.load=function(){var e=this,r=this.loadFromPortal({supportedTypes:["Scene Service"]}).then(function(){return e._fetchService()},function(){return e._fetchService()});return this.addResolvingPromise(r),this.when()},r.prototype.loadAll=function(){var e=this;return l.safeCast(y.loadAll(this,function(r){return h.forEachSublayer(e.sublayers,function(e){"building-group"!==e.type&&r(e)})}))},r.prototype.importLayerViewModule=function(e){switch(e.type){case"2d":return c.reject(new s("building-scene-layer:view-not-supported","BuildingSceneLayer is only supported in 3D"));case"3d":return c.create(function(e){return Promise.all([t.e(0),t.e(3),t.e(10),t.e(12),t.e(53)]).then(function(){var r=[t(2254)];e.apply(null,r)}.bind(this)).catch(t.oe)})}},r.prototype._validateLayer=function(e){if(!e.layerType||"Building"!==e.layerType)throw new s("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})},r.prototype._validateElevationInfo=function(){var e=this.elevationInfo;e&&("absolute-height"!==e.mode&&O.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&O.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))},o([f.property({type:["BuildingSceneLayer"]})],r.prototype,"operationalLayerType",void 0),o([f.property({readOnly:!0})],r.prototype,"allSublayers",void 0),o([f.property(h.sublayersProperty)],r.prototype,"sublayers",void 0),o([f.reader("service","sublayers")],r.prototype,"readSublayers",null),o([f.property({type:j,nonNullable:!0})],r.prototype,"filters",void 0),o([f.property({type:String})],r.prototype,"activeFilterId",void 0),o([f.property(S.readOnlyService(v))],r.prototype,"fullExtent",void 0),o([f.property({type:["show","hide","hide-children"]})],r.prototype,"listMode",void 0),o([f.property(S.readOnlyService(b))],r.prototype,"spatialReference",void 0),o([f.property(S.elevationInfo)],r.prototype,"elevationInfo",null),o([f.property({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),o([f.subclass("esri.layers.BuildingSceneLayer")],r)}(f.declared(g,m))}.apply(null,i))||(e.exports=n)}}]);