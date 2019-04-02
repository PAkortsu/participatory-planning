(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/graphics/sources/support/CSVSourceWorker":1479,"esri/layers/graphics/sources/support/clientSideDefaults":1637,"dstore/Csv":1694})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1479:function(e,t,i){var n,r;n=[i.dj.c(e.i),t,i(22),i(173),i(184),i(1694),i(43),i(50),i(13),i(19),i(7),i(8),i(33),i(1618),i(97),i(44),i(551),i(554),i(1551),i(1524),i(1559),i(1637)],void 0===(r=function(e,t,i,n,r,l,a,o,s,u,d,f,c,p,m,y,h,g,v,F,w,N){Object.defineProperty(t,"__esModule",{value:!0});var _=N.createDrawingInfo("esriGeometryPoint"),I=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong"];t.csvLatitudeFieldNames=["lat","latitude","y","ycenter","latitude83","latdecdeg","point-y"],t.csvLongitudeFieldNames=["lon","lng","long","longitude","x","xcenter","longitude83","longdecdeg","point-x"],t.csvDetectedDelimiters=[","," ",";","|","\t"];var b=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,T=[0,0],x=function(){return function(e,t){this.x=e,this.y=t}}(),D=function(){var e=r._parseInfo(),t=new RegExp("^"+e.regexp+"$"),i=new RegExp("["+e.group+"\\s\\xa0]","g"),n=e.factor;return function(r){var l=t.exec(r);if(e.factor=n,!l)return NaN;var a=l[1];if(!l[1]){if(!l[2])return NaN;a=l[2],e.factor*=-1}return+(a=a.replace(i,"").replace(e.decimal,"."))*e.factor}}(),S="isInteger"in Number?Number.isInteger:function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},E=function(){function e(){this._fieldsMap=new Map,this._queryEngine=null}return e.prototype.destroy=function(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=null},e.prototype.load=function(e){var t=this;return f.all([this._fetch(e.url),this._checkProjection(e&&e.parsing&&e.parsing.spatialReference)]).then(function(i){var n=i[0],r=t._parse(n,e.parsing);if(t._queryEngine=t._createQueryEngine(n,r),r.layerDefinition.extent=t._queryEngine.fullExtent,r.layerDefinition.timeInfo){var l=t._queryEngine.timeExtent,a=l.start,o=l.end;r.layerDefinition.timeInfo.timeExtent=[a,o]}return r})},e.prototype.applyEdits=function(e){return f.reject(new s("csv-source:editing-not-supported","applyEdits() is not supported on CSVLayer"))},e.prototype.queryFeatures=function(e){return void 0===e&&(e={}),this._queryEngine.executeQuery(e)},e.prototype.queryFeatureCount=function(e){return void 0===e&&(e={}),this._queryEngine.executeQueryForCount(e)},e.prototype.queryObjectIds=function(e){return void 0===e&&(e={}),this._queryEngine.executeQueryForIds(e)},e.prototype.queryExtent=function(e){return void 0===e&&(e={}),this._queryEngine.executeQueryForExtent(e)},e.prototype._fetch=function(e){if(!e)return f.reject(new s("csv-source:invalid-source","url not defined"));var t=c.urlToObject(e);return o(t.path,{query:t.query,responseType:"text"}).then(function(e){return e.data})},e.prototype._parse=function(e,t){void 0===t&&(t={});for(var i={columnDelimiter:t.columnDelimiter,layerDefinition:null,locationInfo:{latitudeFieldName:t.latitudeField,longitudeFieldName:t.longitudeField}};e&&"\n"===e[0];)e=e.slice(1);"\n"!==e[e.length-1]&&(e+="\n");var n=this._readFirstLine(e);if(!n)throw new s("csv","CSV is empty",{csv:e});if(!t.columnDelimiter){var r=this._inferDelimiter(n);if(!r)throw new s("csv-source:invalid-delimiter","Unable to detect the delimiter from CSV");i.columnDelimiter=r}var l=n.split(i.columnDelimiter),a=i.layerDefinition={name:"csv",drawingInfo:_,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:t.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:t.spatialReference||{wkid:102100}}};if(!t.latitudeField||!t.longitudeField){var o=this._inferLocationInfo(l);if(!t.longitudeField&&!o.longitudeFieldName||!t.latitudeField&&!o.latitudeFieldName)throw new s("csv","Unable to identify latitudeField and/or longitudeField from CSV");i.locationInfo={longitudeFieldName:t.longitudeField||o.longitudeFieldName,latitudeFieldName:t.latitudeField||o.latitudeFieldName}}var u=this._inferFields(e,i.columnDelimiter,l,i.locationInfo);if(t.fields&&t.fields.length){for(var f=new Map,c=0,p=t.fields;c<p.length;c++){var m=p[c];f.set(m.name.toLowerCase(),m)}for(var y=0,h=u;y<h.length;y++){m=h[y];var g=f.get(m.name.toLowerCase());if(g){var v=m.name;d.mixin(m,g),m.name=v}this._fieldsMap.set(m.name.trim(),m),this._fieldsMap.set(m.name.trim().toLowerCase(),m)}}if(a.fields=u,!a.fields.some(function(e){return"esriFieldTypeOID"===e.type&&(a.objectIdField=e.name,!0)})){m={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};a.objectIdField=m.name,a.fields.unshift(m),this._fieldsMap.set(m.name,m),this._fieldsMap.set(m.name.toLowerCase(),m)}if(a.timeInfo){var F=a.timeInfo;if(F.startTimeField){var w=this._fieldsMap.get(F.startTimeField.toLowerCase());w?(F.startTimeField=w.name,w.type="esriFieldTypeDate"):F.startTimeField=null}if(F.endTimeField){var N=this._fieldsMap.get(F.endTimeField.toLowerCase());N?(F.endTimeField=N.name,N.type="esriFieldTypeDate"):F.endTimeField=null}if(F.trackIdField){var I=this._fieldsMap.get(F.trackIdField.toLowerCase());F.trackIdField=I?I.name:null}F.startTimeField||F.endTimeField||(a.timeInfo=null)}return i},e.prototype._inferLocationInfo=function(e){var i=null,n=null;return e.forEach(function(e){var r=e.toLowerCase();-1===t.csvLatitudeFieldNames.indexOf(r)||n||(n=e),-1===t.csvLongitudeFieldNames.indexOf(r)||i||(i=e)}),{longitudeFieldName:i,latitudeFieldName:n}},e.prototype._inferFields=function(e,t,i,n){for(var r=[],l=this._sampleLines(e).map(function(e){return e.split(t).map(function(e){return e.trim()})}),a=this,o=0;o<i.length;o++)!function(e){var t=i[e];if(t===n.longitudeFieldName||t===n.latitudeFieldName)r.push({name:t,type:"esriFieldTypeDouble",alias:t});else{var o=l.map(function(t){return t[e]}),s=a._inferFieldType(o),u={name:t.replace(/[\s\'’‘\.\-\/\(\)]+/g,"_"),type:null,alias:t};switch(s){case"integer":u.type="esriFieldTypeInteger";break;case"double":u.type="esriFieldTypeDouble";break;case"date":u.type="esriFieldTypeDate",u.length=36;break;default:u.type="esriFieldTypeString",u.length=255}r.push(u)}}(o);return r},e.prototype._inferFieldType=function(e){var t=this;if(!e.length)return"string";var i=/[^+-.,0-9]/;return e.map(function(e){var n=!1;if(""===e||i.test(e))n=!0;else{var r=D(e);if(!isNaN(r))return/[.,]/.test(e)?"double":!S(r)||r>214783647||r<-214783648?"double":"integer";if(-1===e.indexOf("E"))n=!0;else{if(r=Number(e),!isNaN(r))return"double";if(-1===e.indexOf(","))n=!0;else{if(e=e.replace(",","."),r=Number(e),!isNaN(r))return"double";n=!0}}}if(n){if(!/^[-]?\d*[.,]?\d*$/.test(e)){var l=new Date(e);return t._isValidDate(l,e)?"date":"string"}return"string"}return"string"}).reduce(function(e,t){return e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0})},e.prototype._isValidDate=function(e,t){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return!1;var i=!0;if(u("chrome")&&/\d+\W*$/.test(t)){var n=t.match(/[a-zA-Z]{2,}/);if(n){for(var r=!1,l=0;!r&&l<=n.length;)r=!b.test(n[l]),l++;i=!r}}return i},e.prototype._readFirstLine=function(e){return e.substring(0,e.indexOf("\n")).trim()},e.prototype._sampleLines=function(e,t){void 0===t&&(t=10);for(var i=!1,n=[],r=e.indexOf("\n")+1;!i&&n.length<t;){var l=e.indexOf("\n",r);if(-1!==l){var a;(a=-1===l&&r<e.length-1?e.substring(r).trim():e.substring(r,l).trim())&&n.push(a),r=l+1}else i=!0}return n},e.prototype._inferDelimiter=function(e){var i=0,n="";return t.csvDetectedDelimiters.forEach(function(t){var r=e.split(t).length;r>i&&(i=r,n=t)}),""===n?null:n},e.prototype._createQueryEngine=function(e,t){for(var i,r=t.locationInfo,o=r.latitudeFieldName,s=r.longitudeFieldName,u=t.layerDefinition,d=u.objectIdField,f=u.fields,c=u.extent,F=u.timeInfo,N=[],_=[],b=new n.Set,S=new n.Set,E=[],C=0,j=f;C<j.length;C++){var L=j[C],M=L.name,O=L.type;"esriFieldTypeDate"===O?b.add(M):I.indexOf(O)>-1&&S.add(M),M!==d&&E.push(M)}var q=new l;q.delimiter=t.columnDelimiter,q.fieldNames=E,q.newline="\n";var k=q.parse(e),V=0;k.shift();for(var P=0,G=k;P<G.length;P++){var R=G[P],Q=this._parseCoordinateValue(R[o]),J=this._parseCoordinateValue(R[s]);if(null!=J&&null!=Q&&!isNaN(Q)&&!isNaN(J)){for(var A in R[o]=Q,R[s]=J,R)if(A!==o&&A!==s)if(b.has(A)){var W=new Date(R[A]);R[A]=this._isValidDate(W,R[A])?W.getTime():null}else if(S.has(A)){var Y=D(R[A]);isNaN(Y)?R[A]=null:R[A]=Y}R[d]=V,V++,N.push(new x(J,Q)),_.push(R)}}if(!m.equals({wkid:4326},c.spatialReference))if(m.isWebMercator(c.spatialReference))for(var $=0,Z=N;$<Z.length;$++){var z=Z[$];i=y.lngLatToXY(z.x,z.y,T),z.x=i[0],z.y=i[1]}else N=p.projectMany(N,a.SpatialReference.WGS84,c.spatialReference,null,!0);for(var B=new v.default({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1}),U=new w.default({fields:t.layerDefinition.fields,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:F,objectIdField:d,spatialReference:c.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:B}),X=[],H=0;H<N.length;H++){var K=N[H],ee=K.x,te=K.y,ie=_[H];ie[d]=H+1,X.push(new h.default(new g.default([],[ee,te]),ie,null,ie[d]))}return B.addMany(X),U},e.prototype._parseCoordinateValue=function(e){if(null==e||""===e)return null;var t=D(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t},e.prototype._checkProjection=function(e){return F.checkProjectionSupport(m.WGS84,e).catch(function(){throw new s("csv-layer","Projection not supported")})},e}();t.default=E}.apply(null,n))||(e.exports=r)},1637:function(e,t,i){var n,r;n=[i.dj.c(e.i),t,i(11),i(19),i(7)],void 0===(r=function(e,t,i,n,r){Object.defineProperty(t,"__esModule",{value:!0});var l={type:"esriSMS",style:"esriSMSCircle",size:6,color:[252,146,31,255],outline:{width:.75,color:[153,153,153,255]}},a={type:"esriSLS",style:"esriSLSSolid",width:1,color:[252,146,31,255]},o={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{width:.75,color:[255,255,255,191]}};t.createDrawingInfo=function(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?l:"esriGeometryPolyline"===e?a:o}}},t.createDefaultAttributesFunction=function(e,t){if(n("csp-restrictions"))return function(){var n;return i(((n={})[t]=null,n),e)};try{var r="this."+t+" = null;";for(var l in e)r+="this."+l+" = "+JSON.stringify(e[l])+";";var a=new Function(r);return function(){return new a}}catch(n){return function(){var n;return i(((n={})[t]=null,n),e)}}},t.createDefaultTemplate=function(e){return void 0===e&&(e={}),[{name:"New Feature",description:"",prototype:{attributes:r.clone(e)}}]}}.apply(null,n))||(e.exports=r)},1694:function(e,t,i){var n,r;n=[i(30),i(354)],void 0===(r=function(e,t){var i=/^\s*"([\S\s]*)"\s*$/,n=/""/g,r=/"/g;function l(e,t){var i,n={},r=e.length;for(i=0;i<r;i++)n[e[i]]=t[i];return n}return t(null,{fieldNames:null,delimiter:",",newline:"\r\n",trim:!1,parse:function(t){var r,a,o,s,u,d,f,c,p=[],m=t.split(this.newline),y=this.fieldNames,h=0,g=[],v="",F="";e:for(d=0,o=m.length;d<o;d++)if(e.trim(m[d])){for(f=0,s=(r=m[d].split(this.delimiter)).length;f<s;f++){for(c=-1,v+=F+(a=r[f]),F="";(c=a.indexOf('"',c+1))>=0;)h++;if(h%2==0){if(h>0){if(!(u=i.exec(v))){console.warn("Csv: discarding row with invalid value: "+v),g=[],v="",h=0;continue e}g.push(u[1].replace(n,'"'))}else g.push(this.trim||!y?e.trim(v):v);v="",h=0}else F=this.delimiter}0===h?(y?p.push(l(y,g)):y=this.fieldNames=g,g=[]):F=this.newline}return p},toCsv:function(e){return this.stringify(this.data,e)},stringify:function(e,t){var i,n,l,a,o=(t=t||{}).alwaysQuote,s=this.fieldNames,u=this.delimiter,d=this.newline,f="";for(i=-1;i<e.length;i++)for(i>-1&&(f+=d),n=0;n<s.length;n++)null!==(l=i<0?s[n]:e[i][s[n]])&&void 0!==l||(l=""),"string"!=typeof l&&(l=l.toString()),a=o||l.indexOf('"')>=0||l.indexOf(u)>=0,f+=(n>0?u:"")+(a?'"'+l.replace(r,'""')+'"':l);return t.trailingNewline&&(f+=d),f}})}.apply(null,n))||(e.exports=r)}}]);