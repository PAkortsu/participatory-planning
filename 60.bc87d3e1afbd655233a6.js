(function(){(this||window).webpackJsonp.registerAbsMids({"esri/core/sql/WhereClause":561,"esri/views/layers/support/popupUtils":1532,"esri/core/sql/AggregateFunctions":1569,"esri/core/sql/StandardizedFunctions":1570,"esri/views/3d/layers/support/DefinitionExpressionSceneLayerView":1646,"esri/views/3d/layers/i3s/I3SQueryEngine":1714,"esri/views/3d/layers/support/PopupSceneLayerView":1715,"esri/views/3d/layers/SceneLayerView3D":2246})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[60,28],{1532:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(22),r(25),r(154),r(32),r(128)],void 0===(i=function(e,t,r,n,i,a,u){Object.defineProperty(t,"__esModule",{value:!0}),t.getRequiredFields=function(e,t){return void 0===t&&(t=e.popupTemplate),n(this,void 0,void 0,function(){var n,s,o,l,c,p,d,f,h,v,m;return r(this,function(r){switch(r.label){case 0:return a.isSome(t)?[4,t.getRequiredFields(e.fields)]:[2,[]];case 1:return n=r.sent(),s=t.lastEditInfoEnabled,o=e.objectIdField,l=e.typeIdField,i.includes(n,"*")?[2,["*"]]:(p=u.fixFields,d=[e.fields],h=(f=n).concat,v=[[l]],(m=s)?[4,u.getFeatureEditFields(e)]:[3,3]);case 2:m=r.sent(),r.label=3;case 3:return(c=p.apply(void 0,d.concat([h.apply(f,v.concat([m||null]))])))&&o&&u.hasField(e.fields,o)&&-1===c.indexOf(o)&&c.push(o),[2,c]}})})},t.getFetchPopupTemplate=function(e,t){return e.popupTemplate?e.popupTemplate:a.isSome(t)&&t.defaultPopupTemplateEnabled&&a.isSome(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}}.apply(null,n))||(e.exports=i)},1569:function(e,t,r){var n,i;n=[r.dj.c(e.i),t],void 0===(i=function(e,t){function r(e){for(var t=0,r=0;r<e.length;r++)t+=e[r];return t/e.length}function n(e){for(var t=r(e),n=e.length,i=0,a=0,u=e;a<u.length;a++){var s=u[a];i+=Math.pow(s-t,2)}return n>1?i/(n-1):0}Object.defineProperty(t,"__esModule",{value:!0}),t.aggregateFunction=function(e,t){var r=i[e.toLowerCase()];if(null==r)throw new Error("Function Not Recognised");if(t.length<r.minParams||t.length>r.maxParams)throw new Error("Invalid Parameter count for call to "+e.toUpperCase());return r.evaluate(t)},t.isAggregate=function(e,t){var r=i[e.toLowerCase()];return null!=r&&t>=r.minParams&&t<=r.maxParams};var i={min:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:Math.min.apply(Math,e[0])}},max:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:Math.max.apply(Math,e[0])}},avg:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:r(e[0])}},sum:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:function(e){for(var t=0,r=0;r<e.length;r++)t+=e[r];return t}(e[0])}},stddev:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:Math.sqrt(n(e[0]))}},count:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:e[0].length}},var:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:n(e[0])}}}}.apply(null,n))||(e.exports=i)},1570:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(362)],void 0===(i=function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.evaluateFunction=function(e,t){var r=n[e.toLowerCase()];if(null==r)throw new Error("Function Not Recognised");if(t.length<r.minParams||t.length>r.maxParams)throw new Error("Invalid Parameter count for call to "+e.toUpperCase());return r.evaluate(t)},t.isStandardized=function(e,t){var r=n[e.toLowerCase()];return null!=r&&t>=r.minParams&&t<=r.maxParams};var n={extract:{minParams:2,maxParams:2,evaluate:function(e){var t=e[0],r=e[1];if(null==r)return null;if(r instanceof Date)switch(t.toUpperCase()){case"SECOND":return r.getSeconds();case"MINUTE":return r.getMinutes();case"HOUR":return r.getHours();case"DAY":return r.getDate();case"MONTH":return r.getMonth()+1;case"YEAR":return r.getFullYear()}throw new Error("Invalid Parameter for call to EXTRACT")}},substring:{minParams:2,maxParams:3,evaluate:function(e){if(2===e.length){var t=e[0],r=e[1];return null==t||null==r?null:t.toString().substring(r-1)}if(3===e.length){t=e[0],r=e[1];var n=e[2];return null==t||null==r||null==n?null:n<=0?"":t.toString().substring(r-1,r+n-1)}}},position:{minParams:2,maxParams:2,evaluate:function(e){var t=e[0],r=e[1];return null==t||null==r?null:r.indexOf(t)+1}},trim:{minParams:2,maxParams:3,evaluate:function(e){var t=3===e.length,n=t?e[1]:" ",i=t?e[2]:e[1];if(null==n||null==i)return null;var a="("+r.escapeString(n)+")";switch(e[0]){case"BOTH":return i.replace(new RegExp("^"+a+"*|"+a+"*$","g"),"");case"LEADING":return i.replace(new RegExp("^"+a+"*","g"),"");case"TRAILING":return i.replace(new RegExp(a+"*$","g"),"")}throw new Error("Invalid Parameter for call to TRIM")}},abs:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:Math.abs(e[0])}},ceiling:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:Math.ceil(e[0])}},floor:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:Math.floor(e[0])}},log:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:Math.log(e[0])}},log10:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:Math.log(e[0])*Math.LOG10E}},sin:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:Math.sin(e[0])}},cos:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:Math.cos(e[0])}},tan:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:Math.tan(e[0])}},asin:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:Math.asin(e[0])}},acos:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:Math.acos(e[0])}},atan:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:Math.atan(e[0])}},sign:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:e[0]>0?1:e[1]<0?-1:0}},power:{minParams:2,maxParams:2,evaluate:function(e){return null==e[0]||null==e[1]?null:Math.pow(e[0],e[1])}},mod:{minParams:2,maxParams:2,evaluate:function(e){return null==e[0]||null==e[1]?null:e[0]%e[1]}},round:{minParams:1,maxParams:2,evaluate:function(e){var t=e[0],r=2===e.length?Math.pow(10,e[1]):1;return null==t?null:Math.round(t*r)/r}},truncate:{minParams:1,maxParams:2,evaluate:function(e){return null==e[0]?null:1===e.length?parseInt(e[0].toFixed(0),10):parseFloat(e[0].toFixed(e[1]))}},char_length:{minParams:1,maxParams:1,evaluate:function(e){return"string"==typeof e[0]||e[0]instanceof String?e[0].length:0}},concat:{minParams:1,maxParams:1/0,evaluate:function(e){for(var t="",r=0;r<e.length;r++){if(null==e[r])return null;t+=e[r].toString()}return t}},lower:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:e[0].toString().toLowerCase()}},upper:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:e[0].toString().toUpperCase()}}}}.apply(null,n))||(e.exports=i)},1646:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(2),r(1),r(6),r(10),r(0),r(561),r(128),r(1521)],void 0===(i=function(e,t,r,n,i,a,u,s,o,l){Object.defineProperty(t,"__esModule",{value:!0});var c=a.getLogger("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView"),p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._definitionExpressionErrors=0,t._maxDefinitionExpressionErrors=20,t.logError=function(e){t._definitionExpressionErrors<t._maxDefinitionExpressionErrors&&c.error("Error while evaluating definitionExpression: "+e),++t._definitionExpressionErrors===t._maxDefinitionExpressionErrors&&c.error("Further errors are ignored")},t}return r(t,e),Object.defineProperty(t.prototype,"parsedDefinitionExpression",{get:function(){if(this.layer.definitionExpression)try{var e=s.create(this.layer.definitionExpression);if(!e.isStandardized())return c.error("definitionExpression is using non standard function"),null;var t=[],r=e.getFields();return l.findFieldsCaseInsensitive(r,this.layer.fields,{missingFields:t}),t.length>0?(c.error("definitionExpression references unknown fields: "+t.join(", ")),null):(this._definitionExpressionErrors=0,e)}catch(e){return c.error("Failed to parse definitionExpression: "+e),null}return null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"definitionExpressionFields",{get:function(){return this.parsedDefinitionExpression?o.fixFields(this.layer.fields,this.parsedDefinitionExpression.getFields()):null},enumerable:!0,configurable:!0}),t.prototype._evaluateClause=function(e,t){try{return e.testFeature(t)}catch(e){return this.logError(e),!1}},n([u.property()],t.prototype,"layer",void 0),n([u.property({readOnly:!0,dependsOn:["layer.definitionExpression"]})],t.prototype,"parsedDefinitionExpression",null),n([u.property({readOnly:!0,dependsOn:["parsedDefinitionExpression"]})],t.prototype,"definitionExpressionFields",null),n([u.subclass("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")],t)}(u.declared(i));t.DefinitionExpressionSceneLayerView=p,t.default=p}.apply(null,n))||(e.exports=i)},1714:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(13),r(8),r(129),r(1469)],void 0===(i=function(e,t,r,n,i,a){return function(){function e(e,t,r){this._layer=e,this._support=t,this._options=r}return e.prototype.queryExtent=function(e){var t=this;return this._rejectUnsupported(e).then(function(){var r=0,n=t._support.createExtentBuilder();return t._forAllQueried(e,function(e){r++,n.add(e)}),{count:r,extent:0===r?null:n.getExtent()}})},e.prototype.queryFeatureCount=function(e){var t=this;return this._rejectUnsupported(e).then(function(){var r=0;return t._forAllQueried(e,function(){return r++}),r})},e.prototype.queryFeatures=function(e){var t=this;return this._rejectUnsupported(e).then(function(){var i=[],a=e&&e.outFields,u=[];return t._forAllQueried(e,function(e){return u.push(t._support.createGraphic(e))},function(e){a&&(i.push(t._support.requestFields(e,u,a)),u=[])})>0&&!e.num?n.reject(new r("Unsupported Query","Large feature query, use Query.num and Query.start to batch")):(a||i.push(n.resolve(u)),n.all(i))}).then(function(e){for(var r=[],n=0;n<e.length;++n)for(var u=e[n],s=0;s<u.length;++s)r.push(i.hydrateGraphic(u[s],t._layer));var o=new a;return o.features=r,o})},e.prototype.queryObjectIds=function(e){var t=this;return this._rejectUnsupported(e).then(function(){var r=[];return t._forAllQueried(e,function(e){return r.push(e.id)}),r})},e.defaultExtentBuilder=function(e){var t=null;return{add:function(r){var n=e(r);n&&(t=null!=t?t.union(n):n.clone())},getExtent:function(){return t}}},e.prototype._forAllQueried=function(e,t,r){var n=[];if(e&&e.objectIds){var i=e.objectIds;n.push(function(e){return i.indexOf(e.id)>=0})}var a=e&&e.start||0,u=e&&e.num||1e4;return n.push(function(){return u<=0?(--u,!1):a>0?(--a,!1):(--u,!0)}),this._support.forAll(function(e){for(var r=0,i=n;r<i.length;r++)if(!(0,i[r])(e))return;t(e)},r),Math.max(0,-u)},e.prototype._rejectUnsupported=function(e){if(null==e)return n.resolve();var t=function(e){return n.reject(new r("Unsupported Query","Unsupported property '"+e+"'"))};return null!=e.distance?t("distance"):null!=e.geometryPrecision?t("geometryPrecision"):e.groupByFieldsForStatistics&&e.groupByFieldsForStatistics.length?t("groupByFieldsForStatistics"):null!=e.maxAllowableOffset?t("maxAllowableOffset"):e.multipatchOption?t("multipatchOption"):e.orderByFields&&e.orderByFields.length?t("orderByFields"):e.outSpatialReference?t("outSpatialReference"):e.outStatistics&&e.outStatistics.length?t("outStatistics"):e.pixelSize?t("pixelSize"):e.quantizationParameters?t("quantizationParameters"):e.relationParameter?t("relationParameter"):e.returnDistinctValues?t("returnDistinctValues"):e.text?t("text"):e.timeExtent?t("timeExtent"):e.where?t("where"):e.geometry?t("geometry"):!this._options.enableOutFields&&e.outFields&&e.outFields.length?t("outFields"):!this._options.enableObjectId&&e.objectIds&&e.objectIds.length?t("objectIds"):n.resolve()},e}()}.apply(null,n))||(e.exports=i)},1715:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(2),r(1),r(22),r(25),r(13),r(32),r(8),r(0),r(128),r(1513),r(1532)],void 0===(i=function(e,t,r,n,i,a,u,s,o,l,c,p,d){Object.defineProperty(t,"__esModule",{value:!0});var f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype._validateFetchPopupFeatures=function(e){var t=this.layer;return t.popupEnabled?d.getFetchPopupTemplate(t,e)?void 0:new u("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:t}):new u("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:t})},t.prototype.fetchPopupFeatures=function(e,t){return a(this,void 0,void 0,function(){var e,r,n,a,u,l,p,f,h,v;return i(this,function(i){switch(i.label){case 0:return(e=this._validateFetchPopupFeatures(t))?[2,o.reject(e)]:(r=s.isSome(t)?t.clientGraphics:null)&&0!==r.length?(n=[],a=[],l=c.unpackFieldNames,p=[this.layer.fields],[4,d.getRequiredFields(this.layer,d.getFetchPopupTemplate(this.layer,t))]):[2,o.resolve([])];case 1:for(u=l.apply(void 0,p.concat([i.sent()])),f=0,h=r;f<h.length;f++)v=h[f],c.featureHasFields(u,v)?n.push(v):a.push(v);return 0===a.length?[2,o.resolve(n)]:[2,this.whenGraphicAttributes(a,u).catch(function(){return a}).then(function(e){return n.concat(e)})]}})})},n([l.subclass("esri.views.3d.layers.support.PopupSceneLayerView")],t)}(l.declared(p));t.PopupSceneLayerView=f,t.default=f}.apply(null,n))||(e.exports=i)},2246:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(11),r(2),r(1),r(22),r(25),r(154),r(173),r(79),r(52),r(10),r(21),r(0),r(45),r(128),r(356),r(1671),r(1513),r(1652),r(1714),r(1521),r(1646),r(1519),r(1715),r(51),r(558)],void 0===(i=function(e,t,r,n,i,a,u,s,o,l,c,p,d,f,h,v,m,y,g,x,w,P,E,_,F,b,N){var S=p.getLogger("esri.views.3d.layers.SceneLayerView3D"),I=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._queryEngine=null,t.lodFactor=1,t.progressiveLoadFactor=1,t._elevationContext="scene",t._isIntegratedMesh=!1,t}return n(t,e),Object.defineProperty(t.prototype,"filter",{set:function(e){if(e){var t=["contains","intersects","disjoint"];e.where||e.distance||e.units||e.timeExtent||-1===t.indexOf(e.spatialRelationship)?(S.warn("Unsupported filter: only geometry filters and spatialRelationships "+t.join(", ")+" are supported"),this._set("filter",null)):this._set("filter",e)}else this._set("filter",null)},enumerable:!0,configurable:!0}),t.prototype.initialize=function(){var e=this;this.handles.add([d.init(this,["layer.renderer","definitionExpressionFields"],function(){return e._updateRequiredFields()}),d.init(this.layer,"rangeInfos",function(t){return e._rangeInfosChanged(t)}),d.init(this.layer,"renderer",function(t){return e._rendererChange(t)}),this.watch(["parsedDefinitionExpression","layer.objectIdFilter","filter"],function(){return e._filterChange()})])},t.prototype.destroy=function(){},t.prototype._updateRequiredFields=function(){return u(this,void 0,void 0,function(){var e,t,r,n,i,u;return a(this,function(a){switch(a.label){case 0:return t=(e=this).layer,r=t.fields,n=t.renderer,i=e.definitionExpressionFields,u=new o.default,n?[4,n.collectRequiredFields(u,r)]:[3,2];case 1:a.sent(),a.label=2;case 2:return v.collectFields(u,r,i),this._set("requiredFields",s.from(u).sort()),[2]}})})},t.prototype._rangeInfosChanged=function(e){null!=e&&e.length>0&&S.warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")},t.prototype.queryExtent=function(e){return this._ensureQueryEngine().queryExtent(e)},t.prototype.queryFeatureCount=function(e){return this._ensureQueryEngine().queryFeatureCount(e)},t.prototype.queryFeatures=function(e){return this._ensureQueryEngine().queryFeatures(e)},t.prototype.queryObjectIds=function(e){return this._ensureQueryEngine().queryObjectIds(e)},t.prototype._ensureQueryEngine=function(){return this._queryEngine||(this._queryEngine=this._createQueryEngine()),this._queryEngine},t.prototype._createQueryEngine=function(){var e=this,t={id:0,index:0,meta:null,bbCorners:new Float64Array(24)};return new w(this.layer,{forAll:function(r,n){e._forAllFeatures(function(n,i,a){t.id=n,t.index=i,t.meta=a,e._boundingBoxCornerPoints(i,a.engineObject,t.bbCorners),r(t)},n)},createGraphic:function(t){return e._createGraphic(t.index,t.meta)},requestFields:function(t,r,n){return P.whenGraphicAttributes(e.layer,r,e._getObjectIdField(),n,function(r){var n=e._getGraphicIndices(t,r);return[{node:t,indices:n,graphics:r}]},{ignoreUnavailableFields:!1})},createExtentBuilder:function(){return e._createExtentBuilder()}},{enableObjectId:!0,enableOutFields:!!this.layer.objectIdField})},t.prototype._createExtentBuilder=function(){var e=this.view.renderSpatialReference,t=this.view.spatialReference,r=h.empty(),n=new Float64Array(24);return{add:function(i){b.bufferToBuffer(i.bbCorners,e,0,n,t,0,8)&&h.expandWithBuffer(r,n,0,8)},getExtent:function(){return h.toExtent(r,t)}}},t.prototype.highlight=function(e,t){void 0===t&&(t={});var r=this._highlights;if(e instanceof m){var n=r.acquireSet(t),i=n.set,a=n.handle;return this.queryObjectIds(e).then(function(e){return r.setFeatureIds(i,e)}),a}return this.inherited(arguments)},t.prototype._createLayerGraphic=function(e){var t=new l(null,null,e);return t.layer=this.layer,t.sourceLayer=this.layer,t},t.prototype.canResume=function(){return this.inherited(arguments)&&(!this._controller||this._controller.rootNodeVisible)},t.prototype.isUpdating=function(){return!(!this._controller||!this._controller.updating)},t.prototype.getFilters=function(){var e=this,t=this.inherited(arguments);if(this.layer.objectIdFilter){var r=new Float64Array(this.layer.objectIdFilter.ids),n="include"===this.layer.objectIdFilter.method;r.sort(),t.push(function(t){return e._objectIdFilter(r,n,t)})}return this.addSqlFilter(t,this.parsedDefinitionExpression,this.definitionExpressionFields,this.logError),this.filter&&this.filter.geometry&&t.push(function(t,r){return e._maskFilter(t,r)}),t},t.prototype._maskFilter=function(e,t){var r=this.filter.geometry,n=r.spatialReference||this.view.spatialReference;b.mbsToMbs(t.node.mbs,this._controller.crsIndex,O,n);var i=this.filter.spatialRelationship,a=x.acquireMaskFilterContext(i,this.view,r,t.engineObject),u=x.intersectMaskWithMbs(a,O);switch(x.getIntersectRelation(a,u)){case 1:return void(e.length=0);case 0:return}t.engineObject.getGeometryRecords()[0].geometry.componentCount===t.featureIds.length&&P.filterInPlace(e,t.featureIds,function(e){return x.filterMask(e,a)})},t.prototype._filterChange=function(){var e=this;this.filter&&this.filter.geometry?x.loadGeometryEngine().then(function(){return e._applyFilters(!0)}):this.inherited(arguments)},t.prototype._objectIdFilter=function(e,t,r){for(var n=0,i=0;n<r.length;)c.binaryIndexOf(e,r[n])>=0===t&&(r[i]=r[n],i++),n++;r.length=i},i([f.property()],t.prototype,"layer",void 0),i([f.property({dependsOn:["_controller.updating"]})],t.prototype,"updating",void 0),i([f.property({dependsOn:["_controller.rootNodeVisible"]})],t.prototype,"suspended",void 0),i([f.property(_.updatingPercentage)],t.prototype,"updatingPercentage",void 0),i([f.property({type:N})],t.prototype,"filter",null),i([f.property({type:[String],readOnly:!0})],t.prototype,"requiredFields",void 0),i([f.property({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.3dObject.lodFactor"})],t.prototype,"lodFactor",void 0),i([f.property({readOnly:!0,aliasOf:"_controller.updatingPercentage"})],t.prototype,"updatingPercentageValue",void 0),i([f.subclass("esri.views.3d.layers.SceneLayerView3D")],t)}(f.declared(g,y.I3SMeshView3D,F.PopupSceneLayerView,E.DefinitionExpressionSceneLayerView)),O=[0,0,0,0];return I}.apply(null,n))||(e.exports=i)},561:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(154),r(547),r(372),r(1569),r(1570),r(1614)],void 0===(i=function(e,t,r,n,i,a,u,s){function o(e){return i(e,["YYYY-M-D H:m:s","YYYY-M-D H:mZ","YYYY-M-D H:m:sZ","YYYY-M-D H:m","YYYY-m-d"]).toDate()}function l(e){return i(e,["YYYY-M-D"]).toDate()}function c(e){return!0===e}function p(e){return Array.isArray(e)?e:[e]}function d(e){return null!==e?!0!==e:null}function f(e,t){if(null==e)return null;for(var r=!1,n=0,i=t;n<i.length;n++){var a=i[n];if(null==a)r=null;else if(e===a){r=!0;break}}return r}function h(e,t,r){if(null==e)return null;for(var n=t,i=r,a="",u="-[]/{}()*+?.\\^$|",s=0,o=0;o<n.length;o++){var l=n.charAt(o);switch(s){case 0:l===i?s=1:u.indexOf(l)>=0?a+="\\"+l:a+="%"===l?".*":"_"===l?".":l;break;case 1:u.indexOf(l)>=0?a+="\\"+l:a+=l,s=0}}return new RegExp("^"+a+"$").test(e)}function v(e){return e instanceof Date?e.valueOf():e}function m(e){for(var t=[],r={},n=0,i=e;n<i.length;n++){var a=i[n],u=a.toLowerCase();void 0===r[u]&&(t.push(a),r[u]=1)}return t}return function(){function e(){this.parseTree=null,this.parameters=null,this._hasStandardizedFunctions=null,this._hasAggregateFunctions=null}return e.create=function(t){var r=new e;r.parseTree=s.WhereGrammar.parse(t);var n=!0,i=!0;return r.visitAll(r.parseTree,function(e){if("function"===e.type){var t=e.name,r=e.args.value.length;n&&(n=u.isStandardized(t,r)),i&&(i=a.isAggregate(t,r))}}),r._hasStandardizedFunctions=n,r._hasAggregateFunctions=i,r},e.prototype.isStandardized=function(){return this._hasStandardizedFunctions},e.prototype.isAggregate=function(){return this._hasAggregateFunctions},e.prototype.setVariablesDictionary=function(e){this.parameters=e},e.prototype.testFeature=function(e){return!!this.evaluateNode(this.parseTree,e)},e.prototype.testSet=function(e){var t=this,r=new n.default;this.visitAll(this.parseTree,function(e){"column_ref"!==e.type||r.has(e.column)||r.set(e.column,e)});for(var i={},a=0,u=e;a<u.length;a++){!function(e){r.forEach(function(r,n){var a=t.featureValue(e,n,r);i[n]?i[n].push(a):i[n]=[a]})}(u[a])}return!!this.evaluateNode(this.parseTree,{attributes:i})},e.prototype.calculateValue=function(e){return this.evaluateNode(this.parseTree,e)},e.prototype.getFunctions=function(){var e=[];return this.visitAll(this.parseTree,function(t){"function"===t.type&&e.push(t.name.toLowerCase())}),m(e)},e.prototype.getExpressions=function(){var e=new n.default;return this.visitAll(this.parseTree,function(t){if("function"===t.type){var r=t.name.toLowerCase(),n=t.args.value[0];if("column_ref"===n.type){var i=n.column,a=r+"-"+i;e.has(a)||e.set(a,{aggregateType:r,field:i})}}}),r.from(e.values())},e.prototype.getFields=function(){var e=[];return this.visitAll(this.parseTree,function(t){"column_ref"===t.type&&e.push(t.column)}),m(e)},e.prototype.getVariables=function(){var e=[];return this.visitAll(this.parseTree,function(t){"param"===t.type&&e.push(t.value.toLowerCase())}),m(e)},e.prototype.featureValue=function(e,t,r){var n=function(e){return e&&"object"==typeof e.attributes}(e)?e.attributes:e,i=n[t];if(void 0!==i)return i;for(var a in n)if(t.toLowerCase()===a.toLowerCase())return r.column=a,n[a];return null},e.prototype.visitAll=function(e,t){if(null!=e)switch(t(e),e.type){case"when_clause":this.visitAll(e.operand,t),this.visitAll(e.value,t);break;case"case_expression":for(var r=0,n=e.clauses;r<n.length;r++){var i=n[r];this.visitAll(i,t)}"simple"===e.format&&this.visitAll(e.operand,t),null!==e.else&&this.visitAll(e.else,t);break;case"expr_list":for(var a=0,u=e.value;a<u.length;a++){i=u[a];this.visitAll(i,t)}break;case"unary_expr":this.visitAll(e.expr,t);break;case"binary_expr":this.visitAll(e.left,t),this.visitAll(e.right,t);break;case"function":this.visitAll(e.args,t)}},e.prototype.evaluateNode=function(e,t){switch(e.type){case"case_expression":if("simple"===e.format){for(var r=v(this.evaluateNode(e.operand,t)),n=0;n<e.clauses.length;n++)if(r===v(this.evaluateNode(e.clauses[n].operand,t)))return this.evaluateNode(e.clauses[n].value,t);if(null!==e.else)return this.evaluateNode(e.else,t)}else{for(n=0;n<e.clauses.length;n++)if(c(this.evaluateNode(e.clauses[n].operand,t)))return this.evaluateNode(e.clauses[n].value,t);if(null!==e.else)return this.evaluateNode(e.else,t)}return null;case"param":return this.parameters[e.value.toLowerCase()];case"expr_list":for(var i=[],s=0,m=e.value;s<m.length;s++){var y=m[s];i.push(this.evaluateNode(y,t))}return i;case"unary_expr":return d(this.evaluateNode(e.expr,t));case"binary_expr":switch(e.operator){case"AND":return function(e,t){return null!=e&&null!=t?!0===e&&!0===t:!1!==e&&!1!==t&&null}(this.evaluateNode(e.left,t),this.evaluateNode(e.right,t));case"OR":return function(e,t){return null!=e&&null!=t?!0===e||!0===t:!0===e||!0===t||null}(this.evaluateNode(e.left,t),this.evaluateNode(e.right,t));case"IS":if("null"!==e.right.type)throw new Error("Unsupported RHS for IS");return null===this.evaluateNode(e.left,t);case"ISNOT":if("null"!==e.right.type)throw new Error("Unsupported RHS for IS");return null!==this.evaluateNode(e.left,t);case"IN":var g=p(this.evaluateNode(e.right,t));return f(this.evaluateNode(e.left,t),g);case"NOT IN":g=p(this.evaluateNode(e.right,t));return d(f(this.evaluateNode(e.left,t),g));case"BETWEEN":var x=this.evaluateNode(e.left,t),w=this.evaluateNode(e.right,t);return null==x||null==w[0]||null==w[1]?null:x>=w[0]&&x<=w[1];case"NOTBETWEEN":x=this.evaluateNode(e.left,t),w=this.evaluateNode(e.right,t);return null==x||null==w[0]||null==w[1]?null:x<w[0]||x>w[1];case"LIKE":return h(this.evaluateNode(e.left,t),this.evaluateNode(e.right,t),e.escape);case"NOT LIKE":return d(h(this.evaluateNode(e.left,t),this.evaluateNode(e.right,t),e.escape));case"<>":case"<":case">":case">=":case"<=":case"=":return function(e,t,r){if(null==t||null==r)return null;var n=v(t),i=v(r);switch(e){case"<>":return n!==i;case"=":return n===i;case">":return n>i;case"<":return n<i;case">=":return n>=i;case"<=":return n<=i}}(e.operator,this.evaluateNode(e.left,t),this.evaluateNode(e.right,t));case"*":return this.evaluateNode(e.left,t)*this.evaluateNode(e.right,t);case"-":return this.evaluateNode(e.left,t)-this.evaluateNode(e.right,t);case"+":return this.evaluateNode(e.left,t)+this.evaluateNode(e.right,t);case"/":return this.evaluateNode(e.left,t)/this.evaluateNode(e.right,t)}throw new Error("Not Supported Operator "+e.operator);case"null":case"bool":case"string":case"number":return e.value;case"date":return l(e.value);case"timestamp":return o(e.value);case"column_ref":return"CURRENT_DATE"===e.column.toUpperCase()?((y=new Date).setHours(0,0,0,0),y):"CURRENT_TIMESTAMP"===e.column.toUpperCase()?new Date:this.featureValue(t,e.column,e);case"function":var P=this.evaluateNode(e.args,t);return this.isAggregate()?a.aggregateFunction(e.name,P):u.evaluateFunction(e.name,P)}throw new Error("Unsupported sql syntax "+e.type)},e}()}.apply(null,n))||(e.exports=i)}}]);