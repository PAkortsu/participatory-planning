(function(){(this||window).webpackJsonp.registerAbsMids({"esri/arcade/functions/geomasync":1480,"esri/geometry/geometryEngineAsync":1611,"dojo/request":1616,"esri/workers/WorkerClient":1690})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1480:function(e,r,n){var t,o;t=[n.dj.c(e.i),r,n(158),n(585),n(90),n(555),n(597),n(35),n(67),n(1611),n(108),n(31),n(65),n(89),n(69)],void 0===(o=function(e,r,n,t,o,i,a,s,u,c,l,f,g,m,d){function h(e){return 0===n.version.indexOf("4.")?g.fromExtent(e):new g({spatialReference:e.spatialReference,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]})}function p(e){if(o.pcCheck(e,2,2),e[0]instanceof u&&e[1]instanceof u);else if(e[0]instanceof u&&null===e[1]);else if(e[1]instanceof u&&null===e[0]);else if(null!==e[0]||null!==e[1])throw new Error("Illegal Argument")}Object.defineProperty(r,"__esModule",{value:!0}),r.registerFunctions=function(e){"async"===e.mode&&(e.functions.disjoint=function(r,n){return e.standardFunctionAsync(r,n,function(e,r,n){return p(n=o.autoCastFeatureToGeometry(n)),null===n[0]||null===n[1]||c.disjoint(n[0],n[1])})},e.functions.intersects=function(r,n){return e.standardFunctionAsync(r,n,function(e,r,n){return p(n=o.autoCastFeatureToGeometry(n)),null!==n[0]&&null!==n[1]&&c.intersects(n[0],n[1])})},e.functions.touches=function(r,n){return e.standardFunctionAsync(r,n,function(e,r,n){return p(n=o.autoCastFeatureToGeometry(n)),null!==n[0]&&null!==n[1]&&c.touches(n[0],n[1])})},e.functions.crosses=function(r,n){return e.standardFunctionAsync(r,n,function(e,r,n){return p(n=o.autoCastFeatureToGeometry(n)),null!==n[0]&&null!==n[1]&&c.crosses(n[0],n[1])})},e.functions.within=function(r,n){return e.standardFunctionAsync(r,n,function(e,r,n){return p(n=o.autoCastFeatureToGeometry(n)),null!==n[0]&&null!==n[1]&&c.within(n[0],n[1])})},e.functions.contains=function(r,n){return e.standardFunctionAsync(r,n,function(e,r,n){return p(n=o.autoCastFeatureToGeometry(n)),null!==n[0]&&null!==n[1]&&c.contains(n[0],n[1])})},e.functions.overlaps=function(r,n){return e.standardFunctionAsync(r,n,function(e,r,n){return p(n=o.autoCastFeatureToGeometry(n)),null!==n[0]&&null!==n[1]&&c.overlaps(n[0],n[1])})},e.functions.equals=function(r,n){return e.standardFunctionAsync(r,n,function(e,r,n){return o.pcCheck(n,2,2),n[0]===n[1]||(n[0]instanceof u&&n[1]instanceof u?c.equals(n[0],n[1]):!(!o.isDate(n[0])||!o.isDate(n[1]))&&n[0].getTime()===n[1].getTime())})},e.functions.relate=function(r,n){return e.standardFunctionAsync(r,n,function(e,r,n){if(n=o.autoCastFeatureToGeometry(n),o.pcCheck(n,3,3),n[0]instanceof u&&n[1]instanceof u)return c.relate(n[0],n[1],o.toString(n[2]));if(n[0]instanceof u&&null===n[1])return!1;if(n[1]instanceof u&&null===n[0])return!1;if(null===n[0]&&null===n[1])return!1;throw new Error("Illegal Argument")})},e.functions.intersection=function(r,n){return e.standardFunctionAsync(r,n,function(e,r,n){return p(n=o.autoCastFeatureToGeometry(n)),null===n[0]||null===n[1]?null:c.intersect(n[0],n[1])})},e.functions.union=function(r,n){return e.standardFunctionAsync(r,n,function(e,n,t){var a=[];if(0===(t=o.autoCastFeatureToGeometry(t)).length)throw new Error("Function called with wrong number of Parameters");if(1===t.length)if(o.isArray(t[0])){for(var s=o.autoCastFeatureToGeometry(t[0]),l=0;l<s.length;l++)if(null!==s[l]){if(!(s[l]instanceof u))throw new Error("Illegal Argument");a.push(s[l])}}else{if(!o.isImmutableArray(t[0])){if(t[0]instanceof u)return o.fixSpatialReference(i.cloneGeometry(t[0]),r.spatialReference);if(null===t[0])return null;throw new Error("Illegal Argument")}var f=o.autoCastFeatureToGeometry(t[0].toArray());for(l=0;l<f.length;l++)if(null!==f[l]){if(!(f[l]instanceof u))throw new Error("Illegal Argument");a.push(f[l])}}else for(l=0;l<t.length;l++)if(null!==t[l]){if(!(t[l]instanceof u))throw new Error("Illegal Argument");a.push(t[l])}return 0===a.length?null:c.union(a)})},e.functions.difference=function(r,n){return e.standardFunctionAsync(r,n,function(e,r,n){return p(n=o.autoCastFeatureToGeometry(n)),null!==n[0]&&null===n[1]?i.cloneGeometry(n[0]):null===n[0]?null:c.difference(n[0],n[1])})},e.functions.symmetricdifference=function(r,n){return e.standardFunctionAsync(r,n,function(e,r,n){return p(n=o.autoCastFeatureToGeometry(n)),null===n[0]&&null===n[1]?null:null===n[0]?i.cloneGeometry(n[1]):null===n[1]?i.cloneGeometry(n[0]):c.symmetricDifference(n[0],n[1])})},e.functions.clip=function(r,n){return e.standardFunctionAsync(r,n,function(e,r,n){if(n=o.autoCastFeatureToGeometry(n),o.pcCheck(n,2,2),!(n[1]instanceof s)&&null!==n[1])throw new Error("Illegal Argument");if(null===n[0])return null;if(!(n[0]instanceof u))throw new Error("Illegal Argument");return null===n[1]?null:c.clip(n[0],n[1])})},e.functions.cut=function(r,n){return e.standardFunctionAsync(r,n,function(e,r,n){if(n=o.autoCastFeatureToGeometry(n),o.pcCheck(n,2,2),!(n[1]instanceof m)&&null!==n[1])throw new Error("Illegal Argument");if(null===n[0])return[];if(!(n[0]instanceof u))throw new Error("Illegal Argument");return null===n[1]?[i.cloneGeometry(n[0])]:c.cut(n[0],n[1])})},e.functions.area=function(r,n){return e.standardFunctionAsync(r,n,function(e,n,i){if(o.pcCheck(i,1,2),null===(i=o.autoCastFeatureToGeometry(i))[0])return 0;if(o.isFeatureSet(i[0]))return i[0].sumArea(t.convertSquareUnitsToCode(o.defaultUndefined(i[1],-1)),!1,r.progressTracker).then(function(e){if(r.progressTracker.isCanceled())throw new Error("Operation has been cancelled.");return e});if(o.isArray(i[0])||o.isImmutableArray(i[0])){var a=o.autoCastArrayOfPointsToPolygon(i[0],r.spatialReference);return null===a?0:c.planarArea(a,t.convertSquareUnitsToCode(o.defaultUndefined(i[1],-1)))}if(!(i[0]instanceof u))throw new Error("Illegal Argument");return c.planarArea(i[0],t.convertSquareUnitsToCode(o.defaultUndefined(i[1],-1)))})},e.functions.areageodetic=function(r,n){return e.standardFunctionAsync(r,n,function(e,n,i){if(o.pcCheck(i,1,2),null===(i=o.autoCastFeatureToGeometry(i))[0])return 0;if(o.isFeatureSet(i[0]))return i[0].sumArea(t.convertSquareUnitsToCode(o.defaultUndefined(i[1],-1)),!0,r.progressTracker).then(function(e){if(r.progressTracker.isCanceled())throw new Error("Operation has been cancelled.");return e});if(o.isArray(i[0])||o.isImmutableArray(i[0])){var a=o.autoCastArrayOfPointsToPolygon(i[0],r.spatialReference);return null===a?0:c.geodesicArea(a,t.convertSquareUnitsToCode(o.defaultUndefined(i[1],-1)))}if(!(i[0]instanceof u))throw new Error("Illegal Argument");return c.geodesicArea(i[0],t.convertSquareUnitsToCode(o.defaultUndefined(i[1],-1)))})},e.functions.length=function(r,n){return e.standardFunctionAsync(r,n,function(e,n,i){if(o.pcCheck(i,1,2),null===(i=o.autoCastFeatureToGeometry(i))[0])return 0;if(o.isFeatureSet(i[0]))return i[0].sumLength(t.convertLinearUnitsToCode(o.defaultUndefined(i[1],-1)),!1,r.progressTracker).then(function(e){if(r.progressTracker.isCanceled())throw new Error("Operation has been cancelled.");return e});if(o.isArray(i[0])||o.isImmutableArray(i[0])){var a=o.autoCastArrayOfPointsToPolyline(i[0],r.spatialReference);return null===a?0:c.planarLength(a,t.convertLinearUnitsToCode(o.defaultUndefined(i[1],-1)))}if(!(i[0]instanceof u))throw new Error("Illegal Argument");return c.planarLength(i[0],t.convertLinearUnitsToCode(o.defaultUndefined(i[1],-1)))})},e.functions.lengthgeodetic=function(r,n){return e.standardFunctionAsync(r,n,function(e,n,i){if(o.pcCheck(i,1,2),null===(i=o.autoCastFeatureToGeometry(i))[0])return 0;if(o.isFeatureSet(i[0]))return i[0].sumLength(t.convertLinearUnitsToCode(o.defaultUndefined(i[1],-1)),!0,r.progressTracker).then(function(e){if(r.progressTracker.isCanceled())throw new Error("Operation has been cancelled.");return e});if(o.isArray(i[0])||o.isImmutableArray(i[0])){var a=o.autoCastArrayOfPointsToPolyline(i[0],r.spatialReference);return null===a?0:c.geodesicLength(a,t.convertLinearUnitsToCode(o.defaultUndefined(i[1],-1)))}if(!(i[0]instanceof u))throw new Error("Illegal Argument");return c.geodesicLength(i[0],t.convertLinearUnitsToCode(o.defaultUndefined(i[1],-1)))})},e.functions.distance=function(r,n){return e.standardFunctionAsync(r,n,function(e,n,i){i=o.autoCastFeatureToGeometry(i),o.pcCheck(i,2,3);var a=i[0];(o.isArray(i[0])||o.isImmutableArray(i[0]))&&(a=o.autoCastArrayOfPointsToMultiPoint(i[0],r.spatialReference));var s=i[1];if((o.isArray(i[1])||o.isImmutableArray(i[1]))&&(s=o.autoCastArrayOfPointsToMultiPoint(i[1],r.spatialReference)),!(a instanceof u))throw new Error("Illegal Argument");if(!(s instanceof u))throw new Error("Illegal Argument");return c.distance(a,s,t.convertLinearUnitsToCode(o.defaultUndefined(i[2],-1)))})},e.functions.densify=function(r,n){return e.standardFunctionAsync(r,n,function(e,r,n){if(n=o.autoCastFeatureToGeometry(n),o.pcCheck(n,2,3),null===n[0])return null;if(!(n[0]instanceof u))throw new Error("Illegal Argument");var i=o.toNumber(n[1]);if(isNaN(i))throw new Error("Illegal Argument");if(i<=0)throw new Error("Illegal Argument");return n[0]instanceof g||n[0]instanceof m?c.densify(n[0],i,t.convertLinearUnitsToCode(o.defaultUndefined(n[2],-1))):n[0]instanceof s?c.densify(h(n[0]),i,t.convertLinearUnitsToCode(o.defaultUndefined(n[2],-1))):n[0]})},e.functions.densifygeodetic=function(r,n){return e.standardFunctionAsync(r,n,function(e,r,n){if(n=o.autoCastFeatureToGeometry(n),o.pcCheck(n,2,3),null===n[0])return null;if(!(n[0]instanceof u))throw new Error("Illegal Argument");var i=o.toNumber(n[1]);if(isNaN(i))throw new Error("Illegal Argument");if(i<=0)throw new Error("Illegal Argument");return n[0]instanceof g||n[0]instanceof m?c.geodesicDensify(n[0],i,t.convertLinearUnitsToCode(o.defaultUndefined(n[2],-1))):n[0]instanceof s?c.geodesicDensify(h(n[0]),i,t.convertLinearUnitsToCode(o.defaultUndefined(n[2],-1))):n[0]})},e.functions.generalize=function(r,n){return e.standardFunctionAsync(r,n,function(e,r,n){if(n=o.autoCastFeatureToGeometry(n),o.pcCheck(n,2,4),null===n[0])return null;if(!(n[0]instanceof u))throw new Error("Illegal Argument");var i=o.toNumber(n[1]);if(isNaN(i))throw new Error("Illegal Argument");return c.generalize(n[0],i,o.toBoolean(o.defaultUndefined(n[2],!0)),t.convertLinearUnitsToCode(o.defaultUndefined(n[3],-1)))})},e.functions.buffer=function(r,n){return e.standardFunctionAsync(r,n,function(e,r,n){if(n=o.autoCastFeatureToGeometry(n),o.pcCheck(n,2,3),null===n[0])return null;if(!(n[0]instanceof u))throw new Error("Illegal Argument");var a=o.toNumber(n[1]);if(isNaN(a))throw new Error("Illegal Argument");return 0===a?i.cloneGeometry(n[0]):c.buffer(n[0],a,t.convertLinearUnitsToCode(o.defaultUndefined(n[2],-1)))})},e.functions.buffergeodetic=function(r,n){return e.standardFunctionAsync(r,n,function(e,r,n){if(n=o.autoCastFeatureToGeometry(n),o.pcCheck(n,2,3),null===n[0])return null;if(!(n[0]instanceof u))throw new Error("Illegal Argument");var a=o.toNumber(n[1]);if(isNaN(a))throw new Error("Illegal Argument");return 0===a?i.cloneGeometry(n[0]):c.geodesicBuffer(n[0],a,t.convertLinearUnitsToCode(o.defaultUndefined(n[2],-1)))})},e.functions.offset=function(r,n){return e.standardFunctionAsync(r,n,function(e,r,n){if(n=o.autoCastFeatureToGeometry(n),o.pcCheck(n,2,6),null===n[0])return null;if(!(n[0]instanceof g||n[0]instanceof m))throw new Error("Illegal Argument");var i=o.toNumber(n[1]);if(isNaN(i))throw new Error("Illegal Argument");var a=o.toNumber(o.defaultUndefined(n[4],10));if(isNaN(a))throw new Error("Illegal Argument");var s=o.toNumber(o.defaultUndefined(n[5],0));if(isNaN(s))throw new Error("Illegal Argument");return c.offset(n[0],i,t.convertLinearUnitsToCode(o.defaultUndefined(n[2],-1)),o.toString(o.defaultUndefined(n[3],"round")).toLowerCase(),a,s)})},e.functions.rotate=function(r,n){return e.standardFunctionAsync(r,n,function(e,r,n){n=o.autoCastFeatureToGeometry(n),o.pcCheck(n,2,3);var t=n[0];if(null===t)return null;if(!(t instanceof u))throw new Error("Illegal Argument");t instanceof s&&(t=g.fromExtent(t));var i=o.toNumber(n[1]);if(isNaN(i))throw new Error("Illegal Argument");var a=o.defaultUndefined(n[2],null);if(null===a)return c.rotate(t,i);if(a instanceof f)return c.rotate(t,i,a);throw new Error("Illegal Argument")})},e.functions.centroid=function(r,n){return e.standardFunctionAsync(r,n,function(e,n,t){if(t=o.autoCastFeatureToGeometry(t),o.pcCheck(t,1,1),null===t[0])return null;var c=t[0];if((o.isArray(t[0])||o.isImmutableArray(t[0]))&&(c=o.autoCastArrayOfPointsToMultiPoint(t[0],r.spatialReference)),null===c)return null;if(!(c instanceof u))throw new Error("Illegal Argument");return c instanceof f?o.fixSpatialReference(i.cloneGeometry(t[0]),r.spatialReference):c instanceof g?c.centroid:c instanceof m?a.centroidPolyline(c):c instanceof l?a.centroidMultiPoint(c):c instanceof s?c.center:null})},e.functions.multiparttosinglepart=function(r,n){return e.standardFunctionAsync(r,n,function(e,n,t){t=o.autoCastFeatureToGeometry(t),o.pcCheck(t,1,1);var a=[];if(null===t[0])return null;if(!(t[0]instanceof u))throw new Error("Illegal Argument");return t[0]instanceof f?[o.fixSpatialReference(i.cloneGeometry(t[0]),r.spatialReference)]:t[0]instanceof s?[o.fixSpatialReference(i.cloneGeometry(t[0]),r.spatialReference)]:c.simplify(t[0]).then(function(e){if(e instanceof g){for(var n=[],s=[],u=0;u<e.rings.length;u++)if(e.isClockwise(e.rings[u])){var c=d.fromJSON({rings:[e.rings[u]],hasZ:!0===e.hasZ,hazM:!0===e.hasM,spatialReference:e.spatialReference.toJSON()});n.push(c)}else s.push({ring:e.rings[u],pt:e.getPoint(u,0)});for(var f=0;f<s.length;f++)for(var h=0;h<n.length;h++)if(n[h].contains(s[f].pt)){n[h].addRing(s[f].ring);break}return n}if(e instanceof m){var p=[];for(u=0;u<e.paths.length;u++){var v=d.fromJSON({paths:[e.paths[u]],hasZ:!0===e.hasZ,hazM:!0===e.hasM,spatialReference:e.spatialReference.toJSON()});p.push(v)}return p}if(t[0]instanceof l){var w=o.fixSpatialReference(i.cloneGeometry(t[0]),r.spatialReference);for(u=0;u<w.points.length;u++)a.push(w.getPoint(u));return a}return null})})},e.functions.issimple=function(r,n){return e.standardFunctionAsync(r,n,function(e,r,n){if(n=o.autoCastFeatureToGeometry(n),o.pcCheck(n,1,1),null===n[0])return!0;if(!(n[0]instanceof u))throw new Error("Illegal Argument");return c.isSimple(n[0])})},e.functions.simplify=function(r,n){return e.standardFunctionAsync(r,n,function(e,r,n){if(n=o.autoCastFeatureToGeometry(n),o.pcCheck(n,1,1),null===n[0])return null;if(!(n[0]instanceof u))throw new Error("Illegal Argument");return c.simplify(n[0])})})}}.apply(null,t))||(e.exports=o)},1611:function(e,r,n){var t,o;t=[n.dj.c(e.i),r,n(158),n.dj.m(e),n(67),n(65),n(89),n(31),n(35),n(108),n(1690),n(121)],void 0===(o=function(e,r,n,t,o,i,a,s,u,c,l,f){function g(e,r){var n;if(null==e||void 0===e)return e;if("number"==typeof e)return e;var t=e.toString();if(""===t)return null;if(2==r){if(void 0!==(n=x[t]))return n}else if(0==r){if(void 0!==(n=R[t]))return n;if(void 0!==(n=E[e]))return n}else if(3==r&&void 0!==(n=R[t]))return n;if(1==r&&void 0!==(n=E[e]))return n;if(!0===/^\d+$/.test(t))return parseInt(t);throw Error("Unrecognised Unit Type")}function m(e){if(void 0!==e&&null!==e)switch(e){case"loxodrome":return 1;case"great-elliptic":return 2;case"normal-section":return 3;case"shape-preserving":return 4}return 0}function d(e){if(null===e||void 0===e)return null;if(A)switch(e.type){case"point":return{x:e.x,y:e.y,z:e.z,m:e.m};case"multipoint":return{points:e.points,hasZ:e.hasZ,hasM:e.hasM};case"polyline":return{paths:e.paths,hasZ:e.hasZ,hasM:e.hasM};case"polygon":return{rings:e.rings,hasZ:e.hasZ,hasM:e.hasM};case"extent":return{xmin:e.xmin,ymin:e.ymin,xmax:e.xmax,ymax:e.ymax,zmin:e.zmin,zmax:e.zmax,mmin:e.mmin,mmax:e.mmax}}else switch(e.type){case"point":return{x:e.x,y:e.y};case"multipoint":return{points:e.points};case"polyline":return{paths:e.paths};case"polygon":return{rings:e.rings};case"extent":return{xmin:e.xmin,ymin:e.ymin,xmax:e.xmax,ymax:e.ymax}}return null}function h(e,r){if(null===e)return null;var n=function(e){if(void 0===s.fromJson){if(void 0!==e.x&&void 0!==e.y)return new s(e);if(void 0!==e.paths)return new a(e);if(void 0!==e.rings)return new i(e);if(void 0!==e.points)return new c(e);if(void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax)return new u(e)}else{if(void 0!==e.x&&void 0!==e.y)return s.fromJson(e);if(void 0!==e.paths)return a.fromJson(e);if(void 0!==e.rings)return i.fromJson(e);if(void 0!==e.points)return c.fromJson(e);if(void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax)return u.fromJson(e)}}(e);return A?n.set("spatialReference",r):n.setSpatialReference(r),n}function p(e){return null==e||void 0===e?null:-1!=e.wkid&&null!==e.wkid&&void 0!==e.wkid?{wkid:e.wkid}:""!==e.wkt&&void 0!==e.wkt&&null!==e.wkt?{wkt:e.wkt}:null}function v(e,r,n){var t=new f,o=r.spatialReference;return C.a({action:e,geoma:d(r),geomb:d(n),spatialReference:p(r.spatialReference)}).then(function(e){0===e.status?t.reject(Error(e.error.message)):t.resolve(h(e.result,o))},function(e){t.reject(e)}),t.promise}function w(e,r,n){var t=new f;return C.a({action:e,geoma:d(r),geomb:d(n),spatialReference:p(r.spatialReference)}).then(function(e){0===e.status?t.reject(Error(e.error.message)):t.resolve(e.result)},function(e){t.reject(e)}),t.promise}var y,A=0==n.version.indexOf("4.");!function(e){e[e.Linear=0]="Linear",e[e.Angular=1]="Angular",e[e.Area=2]="Area",e[e.LinearOrAngular=3]="LinearOrAngular"}(y||(y={}));var R={feet:9002,kilometers:9036,meters:9001,miles:9035,"nautical-miles":9030,yards:9096},x={acres:109402,ares:109463,hectares:109401,"square-feet":109405,"square-kilometers":109414,"square-meters":109404,"square-miles":109413,"square-yards":109442},E={degrees:9102,radians:9101},k=function(){function r(){this.c=!0,this.i=null}return r.prototype.A=function(e){var r=this;this.i=new l,this.i.setWorker(this.l(),function(){r.c=!1,e()})},r.prototype.l=function(){return e.B?e.B("./geometryenginewebworker"):t.id.replace(/\/[^\/]*$/gi,"/")+"./geometryenginewebworker"},r}(),C=function(){function e(){}return e.a=function(r){var n=new f;return e.h.push({task:r,d:n}),e.f(),n.promise},e.f=function(){if(0<e.h.length){for(var r=null,n=0;n<e.b.length;n++)if(!1===e.b[n].c){r=e.b[n];break}if(null===r&&e.b.length<e.g&&(n=new k,e.b.push(n),n.A(function(){e.f()})),null!==r){var t=this.h.shift();r.c=!0,r.i.postMessage(t.task).then(function(n){r.c=!1;try{t.d.resolve(n)}catch(e){}e.f()},function(n){r.c=!1;try{t.d.reject(n)}catch(e){}e.f()})}}},e.b=[],e.h=[],e.g=4,e}();return function(){function e(){}return e._removeAllWorkers=function(){C.b=[]},e._setMaxWorkers=function(r){e._removeAllWorkers(),C.g=r},e._getMaxWorkers=function(){return C.g},e._getNumWorkers=function(){return C.b.length},e.extendedSpatialReferenceInfo=function(e){var r=new f;return C.a({action:"extendedspatialreferenceinfo",spatialReference:p(e)}).then(function(e){0===e.status?r.reject(Error(e.error.message)):r.resolve(e.result)},function(e){r.reject(e)}),r.promise},e.equals=function(e,r){return!(null===e&&null!==r||null===r&&null!==e)&&w("equals",e,r)},e.intersects=function(e,r){if(null===e||null===r)throw Error("Illegal Argument Exception");return w("intersects",e,r)},e.touches=function(e,r){if(null===e||null===r)throw Error("Illegal Argument Exception");return w("touches",e,r)},e.within=function(e,r){if(null===e||null===r)throw Error("Illegal Argument Exception");return w("within",e,r)},e.disjoint=function(e,r){if(null===e||null===r)throw Error("Illegal Argument Exception");return w("disjoint",e,r)},e.overlaps=function(e,r){if(null===e||null===r)throw Error("Illegal Argument Exception");return w("overlaps",e,r)},e.crosses=function(e,r){if(null===e||null===r)throw Error("Illegal Argument Exception");return w("crosses",e,r)},e.contains=function(e,r){if(null===e||null===r)throw Error("Illegal Argument Exception");return w("contains",e,r)},e.isSimple=function(e){return w("issimple",e,null)},e.clip=function(e,r){return v("clip",e,r)},e.simplify=function(e){var r=new f,n=e.spatialReference;return C.a({action:"simplify",geoma:d(e),spatialReference:p(e.spatialReference)}).then(function(e){0===e.status?r.reject(Error(e.error.message)):r.resolve(h(e.result,n))},function(e){r.reject(e)}),r.promise},e.rotate=function(e,r,n){var t=new f,o=e.spatialReference;if(void 0===n||null===n)switch(e.type){case"point":n=e;break;case"extent":n=A?e.get("center"):e.getCenter();break;default:n=A?e.get("extent").get("center"):e.getExtent().getCenter()}return C.a({action:"rotate",geoma:d(e),spatialReference:p(e.spatialReference),angle:r,rotpt:d(n)}).then(function(e){0===e.status?t.reject(Error(e.error.message)):t.resolve(h(e.result,o))},function(e){t.reject(e)}),t.promise},e.flipHorizontal=function(e,r){var n=new f,t=e.spatialReference;if(void 0===r||null===r)switch(e.type){case"point":r=e;break;case"extent":r=A?e.get("center"):e.getCenter();break;default:r=A?e.get("extent").get("center"):e.getExtent().getCenter()}return C.a({action:"fliph",geoma:d(e),spatialReference:p(e.spatialReference),flippt:d(r)}).then(function(e){0===e.status?n.reject(Error(e.error.message)):n.resolve(h(e.result,t))},function(e){n.reject(e)}),n.promise},e.flipVertical=function(e,r){var n=new f,t=e.spatialReference;if(void 0===r||null===r)switch(e.type){case"point":r=e;break;case"extent":r=A?e.get("center"):e.getCenter();break;default:r=A?e.get("extent").get("center"):e.getExtent().getCenter()}return C.a({action:"flipv",geoma:d(e),spatialReference:p(e.spatialReference),flippt:d(r)}).then(function(e){0===e.status?n.reject(Error(e.error.message)):n.resolve(h(e.result,t))},function(e){n.reject(e)}),n.promise},e.distance=function(e,r,n){var t=new f;return C.a({action:"distance",geoma:d(e),geomb:d(r),spatialReference:p(e.spatialReference),distanceunits:g(n,3)}).then(function(e){0===e.status?t.reject(Error(e.error.message)):t.resolve(e.result)},function(e){t.reject(e)}),t.promise},e.relate=function(e,r,n){var t=new f;return C.a({action:"relate",geoma:d(e),geomb:d(r),relation:n,spatialReference:p(e.spatialReference)}).then(function(e){0===e.status?t.reject(Error(e.error.message)):t.resolve(e.result)},function(e){t.reject(e)}),t.promise},e.nearestCoordinate=function(e,r,n){var t=new f,o=e.spatialReference;return C.a({action:"nearestcoord",geoma:d(e),geomb:d(r),spatialReference:p(e.spatialReference),testinterior:void 0===n||n}).then(function(e){0===e.status?t.reject(Error(e.error.message)):(e.result.coordinate=h(e.result.coordinate,o),t.resolve(e.result))},function(e){t.reject(e)}),t.promise},e.nearestVertex=function(e,r){var n=new f,t=e.spatialReference;return C.a({action:"nearestvertex",geoma:d(e),geomb:d(r),spatialReference:p(e.spatialReference)}).then(function(e){0===e.status?n.reject(Error(e.error.message)):(e.result.coordinate=h(e.result.coordinate,t),n.resolve(e.result))},function(e){n.reject(e)}),n.promise},e.nearestVertices=function(e,r,n,t){var o=new f,i=e.spatialReference;return C.a({action:"nearestvertices",geoma:d(e),geomb:d(r),spatialReference:p(e.spatialReference),searchradius:n,maxreturn:t}).then(function(e){if(0===e.status)o.reject(Error(e.error.message));else{for(var r=0;r<e.result.length;r++)e.result[r].coordinate=h(e.result[r].coordinate,i);o.resolve(e.result)}},function(e){o.reject(e)}),o.promise},e.cut=function(e,r){var n=new f,t=e.spatialReference;return C.a({action:"cut",geoma:d(e),geomb:d(r),spatialReference:p(e.spatialReference)}).then(function(e){if(0===e.status)n.reject(Error(e.error.message));else{for(var r=0;r<e.result.length;r++)e.result[r]=h(e.result[r],t);n.resolve(e.result)}},function(e){n.reject(e)}),n.promise},e.generalize=function(e,r,n,t){var o=new f,i=e.spatialReference;return C.a({action:"generalize",geoma:d(e),maxdeviation:r,removedegenerateparts:n,maxdeviationunit:g(t,3),spatialReference:p(e.spatialReference)}).then(function(e){0===e.status?o.reject(Error(e.error.message)):o.resolve(h(e.result,i))},function(e){o.reject(e)}),o.promise},e.densify=function(e,r,n){var t=new f,o=e.spatialReference;return C.a({action:"densify",geoma:d(e),maxsegmentlength:r,maxsegmentlengthunit:g(n,3),spatialReference:p(e.spatialReference)}).then(function(e){0===e.status?t.reject(Error(e.error.message)):t.resolve(h(e.result,o))},function(e){t.reject(e)}),t.promise},e.geodesicDensify=function(e,r,n,t){void 0===t&&(t=0);var o=new f,i=e.spatialReference;return C.a({action:"geodensify",geoma:d(e),maxsegmentlength:r,maxsegmentlengthunit:g(n,3),spatialReference:p(e.spatialReference),curveType:t}).then(function(e){0===e.status?o.reject(Error(e.error.message)):o.resolve(h(e.result,i))},function(e){o.reject(e)}),o.promise},e.intersect=function(r,n){return r instanceof o?v("intersect",r,n):e.u(r,n)},e.u=function(e,r){for(var n=new f,t=[],o=0;o<e.length;o++)t.push(d(e[o]));var i=r.spatialReference;return C.a({action:"intersectmany",geom:d(r),geometries:t,spatialReference:p(r.spatialReference)}).then(function(e){if(0===e.status)n.reject(Error(e.error.message));else{for(var r=0;r<e.result.length;r++)e.result[r]=h(e.result[r],i);n.resolve(e.result)}},function(e){n.reject(e)}),n.promise},e.difference=function(r,n){return r instanceof o?v("difference",r,n):e.s(r,n)},e.s=function(e,r){for(var n=new f,t=[],o=0;o<e.length;o++)t.push(d(e[o]));var i=r.spatialReference;return C.a({action:"differencemany",geom:d(r),geometries:t,spatialReference:p(r.spatialReference)}).then(function(e){if(0===e.status)n.reject(Error(e.error.message));else{for(var r=0;r<e.result.length;r++)e.result[r]=h(e.result[r],i);n.resolve(e.result)}},function(e){n.reject(e)}),n.promise},e.symmetricDifference=function(r,n){return r instanceof o?v("symdifference",r,n):e.w(r,n)},e.w=function(e,r){for(var n=new f,t=[],o=0;o<e.length;o++)t.push(d(e[o]));var i=r.spatialReference;return C.a({action:"symdifferencemany",geom:d(r),geometries:t,spatialReference:p(r.spatialReference)}).then(function(e){if(0===e.status)n.reject(Error(e.error.message));else{for(var r=0;r<e.result.length;r++)e.result[r]=h(e.result[r],i);n.resolve(e.result)}},function(e){n.reject(e)}),n.promise},e.union=function(e,r){void 0===r&&(r=null);var n=new f,t=[];if(null===e)return n.resolve(null),n.promise;if(e instanceof o&&(e=[e],null!==r&&e.push(r)),0===e.length)return n.resolve(null),n.promise;for(var i=0;i<e.length;i++)t.push(d(e[i]));var a=e[0].spatialReference;return C.a({action:"unionmany",geometries:t,spatialReference:p(a)}).then(function(e){0===e.status?n.reject(Error(e.error.message)):n.resolve(h(e.result,a))},function(e){n.reject(e)}),n.promise},e.buffer=function(r,n,t,i){if(void 0===i&&(i=!1),r instanceof o){var a=new f,s=r.spatialReference;return C.a({action:"buffer",geoma:d(r),spatialReference:p(r.spatialReference),distance:n,unit:g(t,3),geodesic:!1,geodesicmaxdeviation:NaN,geodesiccurvetype:0}).then(function(e){0===e.status?a.reject(Error(e.error.message)):a.resolve(h(e.result,s))},function(e){a.reject(e)}),a.promise}if("[object Array]"!==Object.prototype.toString.call(n)){for(var u=[],c=0;c<r.length;c++)u.push(n);n=u}if(n.length!=r.length){if(0==n.length)throw Error("Illegal Argument Exception");u=[];var l=0;for(c=0;c<r.length;c++)void 0===n[c]?u.push(l):(u.push(n[c]),l=n[c]);n=u}return e.j(r,n,t,!1,i,"geodesic",NaN)},e.geodesicBuffer=function(r,n,t,i,a,s){if(r instanceof o){var u=new f;void 0===a&&(a=NaN);var c=r.spatialReference;return C.a({action:"buffer",geoma:d(r),spatialReference:p(r.spatialReference),distance:n,unit:g(t,0),geodesic:!0,geodesicmaxdeviation:a,geodesiccurvetype:m(i)}).then(function(e){0===e.status?u.reject(Error(e.error.message)):u.resolve(h(e.result,c))},function(e){u.reject(e)}),u.promise}if("[object Array]"!==Object.prototype.toString.call(n)){for(var l=[],v=0;v<r.length;v++)l.push(n);n=l}if(n.length!=r.length){if(0==n.length)throw Error("Illegal Argument Exception");l=[];var w=0;for(v=0;v<r.length;v++)void 0===n[v]?l.push(w):(l.push(n[v]),w=n[v]);n=l}return e.j(r,n,t,!0,i,a,s)},e.j=function(e,r,n,t,o,i,a){var s=new f,u=[];if(void 0===a&&(a=NaN),null===e||0===e.length)return s.resolve(null),s.promise;for(var c=0;c<e.length;c++)u.push(d(e[c]));n=g(n,t?0:3);var l=e[0].spatialReference;return C.a({action:"buffermany",geometries:u,spatialReference:p(l),distances:r,tounionresults:o,unit:n,geodesic:t,geodesicmaxdeviation:a,geodesiccurvetype:m(i)}).then(function(e){if(0===e.status)s.reject(Error(e.error.message));else{for(var r=0;r<e.result.length;r++)e.result[r]=h(e.result[r],l);s.resolve(e.result)}},function(e){s.reject(e)}),s.promise},e.convexHull=function(r,n){if(void 0===n&&(n=!1),r instanceof o){var t=new f,i=r.spatialReference;return C.a({action:"convexhull",geoma:d(r),spatialReference:p(r.spatialReference)}).then(function(e){0===e.status?t.reject(Error(e.error.message)):t.resolve(h(e.result,i))},function(e){t.reject(e)}),t.promise}return e.o(r,n)},e.o=function(e,r){for(var n=new f,t=[],o=0;o<e.length;o++)t.push(d(e[o]));var i=0<e.length?e[0].spatialReference:null;return C.a({action:"convexhullmany",geometries:t,merge:r}).then(function(e){if(0===e.status)n.reject(Error(e.error.message));else{for(var r=0;r<e.result.length;r++)e.result[r]=h(e.result[r],i);n.resolve(e.result)}},function(e){n.reject(e)}),n.promise},e.offset=function(r,n,t,i,a,s){var u=0;if(null!=i&&void 0!=i)switch(i){case"round":u=0;break;case"bevel":u=1;break;case"miter":u=2;break;case"square":u=3}if(r instanceof o){var c=new f,l=r.spatialReference;return C.a({action:"offset",geoma:d(r),spatialReference:p(r.spatialReference),distance:n,joins:u,bevelratio:a,flattenerror:s,offsetunit:g(t,3)}).then(function(e){0===e.status?c.reject(Error(e.error.message)):c.resolve(h(e.result,l))},function(e){c.reject(e)}),c.promise}return e.v(r,n,t,u,a,s)},e.v=function(e,r,n,t,o,i){for(var a=new f,s=[],u=0;u<e.length;u++)s.push(d(e[u]));var c=0<e.length?e[0].spatialReference:null;return C.a({action:"offsetmany",geometries:s,spatialReference:p(c),distance:r,joins:t,bevelratio:o,offsetunit:g(n,3),flattenerror:i}).then(function(e){if(0===e.status)a.reject(Error(e.error.message));else{for(var r=0;r<e.result.length;r++)e.result[r]=h(e.result[r],c);a.resolve(e.result)}},function(e){a.reject(e)}),a.promise},e.planarArea=function(e,r){var n=new f;return C.a({action:"area",geoma:d(e),unit:g(r,2),spatialReference:p(e.spatialReference)}).then(function(e){0===e.status?n.reject(Error(e.error.message)):n.resolve(e.result)},function(e){n.reject(e)}),n.promise},e.planarLength=function(e,r){var n=new f;return C.a({action:"length",geoma:d(e),unit:g(r,3),spatialReference:p(e.spatialReference)}).then(function(e){0===e.status?n.reject(Error(e.error.message)):n.resolve(e.result)},function(e){n.reject(e)}),n.promise},e.geodesicArea=function(e,r,n){var t=new f;return C.a({action:"geodesicarea",geoma:d(e),unit:g(r,2),geodesiccurvetype:m(n),spatialReference:p(e.spatialReference)}).then(function(e){0===e.status?t.reject(Error(e.error.message)):t.resolve(e.result)},function(e){t.reject(e)}),t.promise},e.geodesicLength=function(e,r,n){var t=new f;return C.a({action:"geodesiclength",geoma:d(e),unit:g(r,0),geodesiccurvetype:m(n),spatialReference:p(e.spatialReference)}).then(function(e){0===e.status?t.reject(Error(e.error.message)):t.resolve(e.result)},function(e){t.reject(e)}),t.promise},e}()}.apply(null,t))||(e.exports=o)},1616:function(e,r,n){var t,o;t=[n(371)],void 0===(o=function(e){return e}.apply(null,t))||(e.exports=o)},1690:function(e,r,n){var t,o;t=[n(267),n(178),n(121),n(1616),n(19),n(33),n.dj.c(e.i)],void 0===(o=function(e,r,n,t,o,i,a){var s=window.Blob||window.webkitBlob||window.mozBlob,u=window.URL||window.webkitURL||window.mozURL;return r([e],{declaredClass:"esri.workers.WorkerClient",worker:null,_queue:null,constructor:function(e,r){this._isIE=o("ie"),this._queue={},this._acceptMessage=this._acceptMessage.bind(this),this._errorMessage=this._errorMessage.bind(this),e&&this.setWorker(e,function(e){this.worker=e,r(this)}.bind(this))},setWorker:function(e,r){if(e instanceof Array){var n=e;e=n.shift()}var t=this._getUrl(e);t=i.normalize(t);var o,a=!i.hasSameOrigin(t,location.href);if(!1===t)return console.log("Can not resolve worker path"),!1;if(this.worker&&((o=this.worker).removeEventListener("message",this._acceptMessage,!1),o.removeEventListener("error",this._errorMessage,!1),o.terminate(),o=null),a){var c=this._getUrl("./mutableWorker",!0);try{this._getRemoteText(c,function(e){var n=u.createObjectURL(new s([e],{type:"text/javascript"}));r(this._createWorker(n,t))}.bind(this))}catch(e){try{c=i.getProxyUrl(c).path+"?"+encodeURI(c),this._useProxy=!0,r(this._createWorker(c,n))}catch(e){return console.log("Can not create worker"),!1}}}else r(this._createWorker(t,n))},_createWorker:function(e,r){var n=new Worker(e);return n.addEventListener("message",this._acceptMessage,!1),n.addEventListener("error",this._errorMessage,!1),this.worker=n,r&&this.importScripts(r),n},postMessage:function(e,r){(e instanceof Array||"object"!=typeof e)&&(e={data:e});var t=Math.floor(64e9*Math.random()).toString(36);e.msgId=t;var o=this._queue[t]=new n;return this.worker?(r?this.worker.postMessage(e,r):this.worker.postMessage(e),this.emit("start-message",{target:this,message:e})):o.reject({message:"No worker was set."}),o.promise},terminate:function(){var e=Object.keys(this._queue);this.worker&&this.worker.terminate();for(var r=e.length-1;r>=0;r--)this._queue[e[r]].cancel("terminated"),delete this._queue[e[r]]},addWorkerCallback:function(e,r){var t,o=this._getUrl(e,!0);return!1===o?((t=new n).reject({message:"Could not load text from "+e}),t.promise):this.postMessage({action:"add-callback",url:o,cbName:r||"main"}).then(function(e){e.target=this,this.emit("callback-added",e)}.bind(this))},importScripts:function(e){Array.isArray(e)||(e=[e]);var r=e.map(function(e){var r=this._getUrl(e,!0);return this._useProxy&&!i.hasSameOrigin(r,location.href)&&(r=i.getProxyUrl(r).path+"?"+encodeURI(r)),r},this);return this.postMessage({action:"import-script",url:r}).then(function(e){e.target=this,this.emit("scripts-imported",e)}.bind(this))},_acceptMessage:function(e){var r=e.data,n=r.msgId;if(r.status&&"debug"==r.status){var t=r.showAs||"debug";console[t](r)}else if(n&&n in this._queue){var o=this._queue[n];"progress"==r.status?o.progress(e.data):"error"==r.status?(o.reject(e.data),delete this._queue[n]):(o.resolve(e.data),delete this._queue[n])}this.emit("message",{message:e.data,event:e,target:this})},_errorMessage:function(e){this.onerror||this.onError?this.onerror?this.onerror(e):this.onError(e):console.log("Worker Error: "+e.message+"\nIn "+e.filename+" on "+e.lineno)},_getUrl:function(e,r){if(!e)return console.error("can not resolve empty path"),!1;e.match(/\.js$/)||(e+=".js");var n=a.toUrl(e);return r?i.makeAbsolute(n):n},_getRemoteText:function(e,r){(e=this._getUrl(e))&&t.get(e,{sync:!1,handleAs:"text",headers:{"X-Requested-With":"","Content-Type":"text/plain"}}).then(function(e){r(e)})},_startBlobWorker:function(){var e=this._xdSource;if(!e){var r=this._getUrl("./mutableWorker"),n=new s(["if(!self._mutable){importScripts('"+r+"');}"],{type:"text/javascript"});e=this._xdSource=u.createObjectURL(n)}try{return new Worker(e)}catch(e){return console.log(e.message),!1}}})}.apply(null,t))||(e.exports=o)}}]);